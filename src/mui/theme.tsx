"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";

// /* montserrat-regular - latin */
// @font-face {
//   font-display: swap;
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 400;
//   src: url("~@fonts/montserrat-v25-latin-regular.woff2") format("woff2");
// }

// /* montserrat-500 - latin */
// @font-face {
//   font-display: swap;
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 500;
//   src: url("~@fonts/montserrat-v25-latin-500.woff2") format("woff2");
// }

// /* montserrat-600 - latin */
// @font-face {
//   font-display: swap;
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 600;
//   src: url("~@fonts/montserrat-v25-latin-600.woff2") format("woff2");
// }

// /* montserrat-700 - latin */
// @font-face {
//   font-display: swap;
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 700;
//   src: url("~@fonts/montserrat-v25-latin-700.woff2") format("woff2");
// }

// :root {
//   --purple: #2d66f9;
//   --light-purple: #b3c9fc;
//   --very-light-purple: #dae5ff;
//   --green: #008900;
//   --light-green: #96ef96;
//   --red: #e43d3d;
//   --light-red: #ffafaf;
//   --blue: #02126a;
//   --dark-blue: #000b26;
//   --light-black: #2f2f2f;
//   --black: #1e1e1e;
//   --gray: #666666;
//   --light-gray: #cccccc;
//   --very-light-gray: #fbfbfb;
//   --white: #ffffff;
//   --overlay: #1e1e1e64;
// }

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

const globalStyles = () => (
  <GlobalStyles
    styles={{
      body: {
        margin: 0,
        padding: 0,
      },
      "#__next": {
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      },
    }}
  />
);

export { theme, globalStyles };
