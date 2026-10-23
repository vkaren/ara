const validateSchema = (schema, values) => {
  const result = schema.validate(values, {
    abortEarly: false,
    allowUnknown: false,
  });

  return {
    ...result,
    message: result.error?.details[0]?.message || "",
  };
};

export default validateSchema;
