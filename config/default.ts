import dotenv from "dotenv";
dotenv.config();
export default {
  port: process.env.PORT || 4040,
  mongoUri: process.env.MONGO_URI,
  logLevel: "info",
};
