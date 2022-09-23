import UserDetailsModel, { UserDetails } from "../models/user.model";

export const newUser = (input: Partial<UserDetails>) => {
  return UserDetailsModel.create(input);
};
