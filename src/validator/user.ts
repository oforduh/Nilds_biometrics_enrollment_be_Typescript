import { body } from "express-validator";
export const signupSchema = [
  body("email")
    .isEmail()
    .normalizeEmail()
    .trim()
    .withMessage("A valid email is required"),

  body("firstName")
    .trim()
    .isAlpha()
    .isLength({ min: 2 })
    .withMessage("First name is required"),

  body("lastName")
    .trim()
    .isAlpha()
    .isLength({ min: 2 })
    .withMessage("Last name is required"),

  body("middleName")
    .trim()
    .isAlpha()
    .isLength({ min: 2 })
    .withMessage("Middle name is required"),

  body("gender")
    .trim()
    .isAlpha()
    .isLength({ min: 2 })
    .withMessage("gender is required"),

  body("imageUrl")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Image Url is required"),

  //   body("phonenumber")
  //     .trim()
  //     .isMobilePhone(["en-NG"])
  //     .isLength({ min: 9, max: 15 })
  //     .withMessage("Please provide a valid phonenumber"),

  //   body("password")
  //     .isLength({ min: 8 })
  //     .withMessage("Password must be at least 8 characters"),

  //   body("passwordConfirmation").custom(passwordMatch),
];
