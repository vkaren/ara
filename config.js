require("dotenv").config();

const config = {
  api: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
};

module.exports = config;
