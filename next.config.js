const config = require("./config");

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: config.api.split("https://")[1],
        port: "",
        pathname: "/files/**",
      },
    ],
  },
};
