import express from "express";

import auth_routes from "./user.routes";

const router = express.Router();

router.get("/status", (_, res) => res.status(200).send("OK"));

router.use(auth_routes);

export default router;
