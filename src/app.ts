require("dotenv").config;

import express from "express";
import config from "config";
import cors from "cors";
import morgan from "morgan";

import connect from "./services/mongoose.service";
import log from "./utils/logger";
import router from "./routes";
import { errorHandler } from "./middleware/errorHandler";

connect();

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

const port = config.get("port");

app.get("/status", (req, res) => {
  res.send("OK");
});

app.use("/api", router);

app.use(errorHandler);

app.listen(port, () => {
  log.info(`App started on port ${port}`);
});
