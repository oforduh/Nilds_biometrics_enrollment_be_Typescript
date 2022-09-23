import mongoose from "mongoose";
import config from "config";
import log from "../utils/logger";
import { DatabaseConnectionError } from "../errors";

async function connect() {
  const uri = config.get<string>("mongoUri");
  if (!uri) throw new DatabaseConnectionError();
  mongoose.connect(uri);
  log.info("Connected to DB");
}

export default connect;
