import { Request, Response } from "express";
import { handleDuplicateError } from "../helper/handleDuplicateError";

import { newUser } from "../services/user.service";
import log from "../utils/logger";

export const createUser = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const user = await newUser(body);

    res.json({
      message: "User created",
      status: true,
      data: user,
    });
  } catch (error: any) {
    if (error.code === 11000) {
      return handleDuplicateError(res, error);
    }

    res.status(500).send("Internal server error");
    log.error(error);
  }
};
