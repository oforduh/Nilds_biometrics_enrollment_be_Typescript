import express from "express";
import { createUser } from "../controller/user.controller";
import { validateRequest } from "../middleware/validateRequest";
import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";
import { signupSchema } from "../validator/user";

const router = express.Router();

router.post("/users", signupSchema, validateRequest, createUser);

export default router;
