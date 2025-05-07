import Joi from "joi";

const name = Joi.string().min(3).max(30).messages({
  "string.empty": "validation.required",
  "string.min": "validation.min",
  "string.max": "validation.max",
});
const password = Joi.string().min(6).max(30).messages({
  "string.empty": "validation.required",
  "string.min": "validation.min",
});

export { name, password };
