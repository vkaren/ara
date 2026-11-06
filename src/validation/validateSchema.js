const validateSchema = (schema, values) => {
  const result = schema.validate(values, {
    abortEarly: false,
    allowUnknown: false,
  });

  return {
    ...result,
    message: result.error?.details[0]?.message || "",
    fieldErrors: (result.error?.details || []).reduce((errors, detail) => {
      const field = detail.path[0];

      if (field && !errors[field]) {
        errors[field] = detail.message;
      }

      return errors;
    }, {}),
  };
};

export default validateSchema;
