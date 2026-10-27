require("dotenv").config();

const config = {
  api: process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "",
};

module.exports = config;
