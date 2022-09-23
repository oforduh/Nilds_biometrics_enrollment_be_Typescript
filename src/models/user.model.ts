import {
  getModelForClass,
  ModelOptions,
  prop,
  Severity,
} from "@typegoose/typegoose";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class UserDetails {
  @prop({ lowercase: true, required: true, unique: true })
  email: string;

  @prop({ required: true, uppercase: true })
  firstName: string;

  @prop({ uppercase: true })
  middleName: string;

  @prop({ required: true, uppercase: true })
  lastName: string;

  @prop({ required: true, uppercase: true })
  gender: string;

  @prop({ required: true, unique: true })
  imageUrl: string;
}

const UserDetailsModel = getModelForClass(UserDetails);

export default UserDetailsModel;
