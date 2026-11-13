const config = require("./config");

const apiUrl = config.api ? new URL(config.api) : null;

module.exports = {
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
