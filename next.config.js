const config = require("./config");
const apiUrl = config.api ? new URL(config.api) : null;

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: apiUrl
      ? [
          {
            protocol: apiUrl.protocol.replace(":", ""),
            hostname: apiUrl.hostname,
            port: apiUrl.port,
            pathname: "/files/**",
          },
        ]
      : [],
  },
};
