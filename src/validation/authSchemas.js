import Joi from "joi";

const credentialsFields = {
  username: Joi.string().required().messages({
    "string.empty": "Username required.",
    "any.required": "Username required.",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password required.",
    "any.required": "Password required.",
  }),
};

const loginSchema = Joi.object(credentialsFields);

const signUpSchema = Joi.object({
  nickname: Joi.string().pattern(/^\S+$/).required().messages({
    "string.empty": "Nickname required.",
    "any.required": "Nickname required.",
    "string.pattern.base": "Nickname cannot contain spaces.",
  }),
  username: Joi.string()
    .pattern(/^[a-z0-9_]+$/i)
    .required()
    .messages({
      "string.empty": "Username required.",
      "any.required": "Username required.",
      "string.pattern.base":
        "Username and password can only contain underscores and alphanumeric characters.",
    }),
  password: Joi.string()
    .pattern(/^[a-z0-9_]+$/i)
    .min(5)
    .required()
    .messages({
      "string.empty": "Password required.",
      "any.required": "Password required.",
      "string.min": "Password must be at least 5 characters long.",
      "string.pattern.base":
        "Username and password can only contain underscores and alphanumeric characters.",
    }),
});

const profileUpdateSchema = Joi.object({
  nickname: Joi.string().pattern(/^\S+$/).allow("").messages({
    "string.pattern.base": "Nickname cannot contain spaces.",
  }),
  bio: Joi.string().allow(""),
  username: Joi.string()
    .pattern(/^[a-z0-9_]+$/i)
    .allow("")
    .messages({
      "string.pattern.base":
        "Username and password can only contain underscores and alphanumeric characters.",
    }),
  password: Joi.string()
    .pattern(/^[a-z0-9_]+$/i)
    .min(5)
    .allow("")
    .messages({
      "string.min": "Password must be at least 5 characters long.",
      "string.pattern.base":
        "Username and password can only contain underscores and alphanumeric characters.",
    }),
});

export { loginSchema, profileUpdateSchema, signUpSchema };
