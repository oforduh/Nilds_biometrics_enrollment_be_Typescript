import { Request, Response } from "express";

import { CreateUserInput } from "../schema/user.schema";
import { newUser } from "../services/user.service";
import log from "../utils/logger";
export const createUser = async (
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) => {
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
      return res.status(409).send("Account already exists");
    }

    res.status(500).send("Internal server error");
    log.error(error);
  }
};
