import { Response } from "express";

interface DuplicateKey {
  email?: number | string;
  imageUrl?: number | string;
}

export interface DuplicateErrorException extends Error {
  code?: string | number;
  index?: number;
  keyPattern?: DuplicateKey;
  keyValue?: DuplicateKey;
}

export const handleDuplicateError = (
  res: Response,
  err: DuplicateErrorException
) => {
  const keyPattern = err.keyPattern as DuplicateKey;

  const errorData = {
    errors: [
      {
        location: Object.keys(keyPattern)[0],
        reason: "duplicateKey",
        message: `${Object.keys(keyPattern)[0]} already exists`,
      },
    ],
    code: 400,
    message: `${Object.keys(keyPattern)[0]} already exists`,
  };

  res.status(400).json(errorData);
};
