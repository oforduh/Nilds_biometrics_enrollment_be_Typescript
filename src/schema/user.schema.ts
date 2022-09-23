import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: "First name is required",
    }),

    middleName: string({
      required_error: "Middle name is required",
    }),
    lastName: string({
      required_error: "Last name is required",
    }),
    gender: string({
      required_error: "Last name is required",
    }),
    imageUrl: string({
      required_error: "Image url is required",
    }),

    email: string({
      required_error: "Email is required",
    }).email("Please input a valid email"),
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];





