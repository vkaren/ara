import Joi from "joi";

const name = Joi.string().min(3).max(30).required().messages({
  "string.empty": "validation.required",
  "string.min": "validation.min",
  "string.max": "validation.max",
});
const password = Joi.string().min(6).max(30).required().messages({
  "string.empty": "validation.required",
  "string.min": "validation.min",
});

const signUpSchema = Joi.object({
  nickname: name,
  username: name,
  password: password,
});

const loginSchema = Joi.object({
  username: name,
  password: password,
});

export { signUpSchema, loginSchema };
