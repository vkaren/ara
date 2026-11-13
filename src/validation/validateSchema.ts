import type Joi from "joi";

export type FieldErrors = Record<string, string>;

export type ValidationResult<T> = Joi.ValidationResult<T> & {
  message: string;
  fieldErrors: FieldErrors;
};

const validateSchema = <T>(schema: Joi.Schema<T>, values: T): ValidationResult<T> => {
  const result = schema.validate(values, {
    abortEarly: false,
    allowUnknown: false,
  });

  return {
    ...result,
    message: result.error?.details[0]?.message || "",
    fieldErrors: (result.error?.details || []).reduce<FieldErrors>((errors, detail) => {
      const field = detail.path[0];

      if (typeof field === "string" && !errors[field]) {
        errors[field] = detail.message;
      }

      return errors;
    }, {}),
  };
};

export default validateSchema;
