/** @type {import('next-i18next').UserConfig} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    localePath: path.resolve("./public/locales"),
  },
};
