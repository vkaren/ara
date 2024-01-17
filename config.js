import "dotenv/config";

const config = {
  api: process.env.NEXT_PUBLIC_API_URL || "localhost:3000",
};

export default config;
