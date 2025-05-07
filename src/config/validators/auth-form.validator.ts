import Joi from "joi";
import { name, password } from "./common.validator";

const signUpSchema = Joi.object({
  nickname: name.required(),
  username: name.required(),
  password: password.required(),
});

const loginSchema = Joi.object({
  username: name.required(),
  password: password.required(),
});

export { signUpSchema, loginSchema };
