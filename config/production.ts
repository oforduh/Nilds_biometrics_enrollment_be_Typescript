import dotenv from "dotenv";
dotenv.config();
export default {
  port: 4040,
  mongoUri: process.env.MONGO_URI,
  logLevel: "info",
};
