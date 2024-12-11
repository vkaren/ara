import Joi from "joi";

const addCommentSchema = Joi.object({
  comment: Joi.string().max(100).messages({
    "string.empty": "validation.required",
    "string.min": "validation.min",
    "string.max": "validation.max",
  }),
  insertedImage: Joi.string(),
}).or("comment", "insertedImage");

export { addCommentSchema };
