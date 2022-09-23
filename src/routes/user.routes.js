"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const validateRequest_1 = require("../middleware/validateRequest");
const user_1 = require("../validator/user");
const router = express_1.default.Router();
router.post("/users", user_1.signupSchema, validateRequest_1.validateRequest, user_controller_1.createUser);
exports.default = router;
