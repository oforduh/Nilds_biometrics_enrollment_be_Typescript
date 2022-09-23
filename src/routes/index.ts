import express from "express";

import auth_routes from "./user.routes";

const router = express.Router();

router.use(auth_routes);

export default router;
