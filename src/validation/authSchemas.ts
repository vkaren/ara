import Joi from "joi";

export interface LoginValues {
  username: string;
  password: string;
}

export interface SignUpValues extends LoginValues {
  nickname: string;
  email: string;
}

export interface ProfileUpdateValues {
  nickname?: string;
  bio?: string;
  username?: string;
  password?: string;
}

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

const loginSchema = Joi.object<LoginValues>(credentialsFields);

const forgotPasswordSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.email": "Enter a valid email address.",
    "string.empty": "Email required.",
    "any.required": "Email required.",
  }),
});

const resetPasswordSchema = Joi.object({
  token: Joi.string().length(64).required().messages({
    "string.length": "This password reset link is invalid.",
    "string.empty": "This password reset link is invalid.",
    "any.required": "This password reset link is invalid.",
  }),
  password: Joi.string().min(8).required().messages({
    "string.min": "Password must be at least 8 characters long.",
    "string.empty": "Password required.",
    "any.required": "Password required.",
  }),
});

const signUpSchema = Joi.object<SignUpValues>({
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
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.email": "Enter a valid email address.",
    "string.empty": "Email required.",
    "any.required": "Email required.",
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

const profileUpdateSchema = Joi.object<ProfileUpdateValues>({
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

export {
  forgotPasswordSchema,
  loginSchema,
  profileUpdateSchema,
  resetPasswordSchema,
  signUpSchema,
};
