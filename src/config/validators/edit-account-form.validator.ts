import Joi from "joi";
import { name, password } from "./common.validator";

const editAccountSchema = Joi.object({
  nickname: name.optional(),
  username: name.optional(),
  password: password.optional(),
  insertedImage: Joi.any().optional(),
});

export { editAccountSchema };
