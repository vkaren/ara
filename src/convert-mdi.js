const fs = require("fs");
const promises = fs.promises;
const path = require("path");
const dirname = path.dirname;
const icontools = require("@iconify/tools");
const { importDirectory, cleanupSVG, parseColors, isEmptyColor, runSVGO } =
  icontools;

// File to save icon set to
const target = "json/mdi.json";

// SVG files location
const sourceSVGDir = "../public/icons";

// Prefix to use for icon set
const prefix = "mdi";

// Expected icon size. Used in validating icons, remove if you do not need to validate icons
const expectedSize = 24;

// Icon set information
// const info = {
//   name: "Material Design Icons",
//   author: {
//     name: "Austin Andrews",
//     url: "https://github.com/Templarian/MaterialDesign",
//   },
//   license: {
//     title: "Open Font License",
//     url: "https://raw.githubusercontent.com/Templarian/MaterialDesign/master/LICENSE",
//     spdx: "OFL-1.1",
//   },
//   height: 24,
//   samples: ["account-check", "bell-alert-outline", "calendar-edit"],
// };

// Import icons
(async function () {
  // Import icons
  const iconSet = await importDirectory(sourceSVGDir, {
    prefix,
  });

  // Set info
  // iconSet.info = info;

  // Validate, clean up, fix palette and optimise
  await iconSet.forEach((name, type) => {
    if (type !== "icon") {
      return;
    }

    // Get SVG instance for parsing
    const svg = iconSet.toSVG(name);
    if (!svg) {
      // Invalid icon
      iconSet.remove(name);
      return;
    }

    // Check icon size
    const viewBox = svg.viewBox;
    if (viewBox.width !== expectedSize || viewBox.height !== expectedSize) {
      console.error(
        `Icon ${name} has invalid dimensions: ${viewBox.width} x ${viewBox.height}`
      );
      iconSet.remove(name);
      return;
    }

    // Clean up and optimise icons
    try {
      // Clean up icon code
      cleanupSVG(svg);

      // Replace color with currentColor, add if missing
      parseColors(svg, {
        defaultColor: "currentColor",
        callback: (attr, colorStr, color) => {
          return !color || isEmptyColor(color) ? colorStr : "currentColor";
        },
      });

      // Optimise
      runSVGO(svg);
    } catch (err) {
      // Invalid icon
      console.error(`Error parsing ${name}:`, err);
      iconSet.remove(name);
      return;
    }

    // Update icon from SVG instance
    iconSet.fromSVG(name, svg);
  });
  console.log(`Imported ${iconSet.count()} icons`);

  // Export to IconifyJSON, convert to string
  const output = JSON.stringify(iconSet.export(), null, "\t");

  // Create directory for output if missing
  const dir = dirname(target);
  try {
    await promises.mkdir(dir, {
      recursive: true,
    });
  } catch (err) {
    //
  }

  // Save to file
  await promises.writeFile(target, output, "utf8");

  console.log(`Saved ${target} (${output.length} bytes)`);
})().catch((err) => {
  console.error(err);
});
