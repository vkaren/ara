import { useForm, Controller } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { Container, TextField, Button } from "@mui/material";
import Joi from "joi";
import { useTranslation } from "react-i18next";

interface IBaseAuthFormProps {
  schema: Joi.ObjectSchema<any>;
  fields: Array<{
    name: string;
    label: string;
    type?: string;
    minLength?: number;
    maxLength?: number;
  }>;
  onSubmit: (data: any) => void;
}

const BaseAuthForm = ({ schema, fields, onSubmit }: IBaseAuthFormProps) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: fields.reduce(
      (acc, field) => {
        acc[field.name] = "";
        return acc;
      },
      {} as Record<string, string>
    ),
  });

  return (
    <Container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "450px !important",
      }}
    >
      {fields.map(({ name, label, type = "text", minLength, maxLength }) => (
        <Controller
          key={name}
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type={type}
              label={label}
              error={!!errors[name]}
              helperText={t(errors[name]?.message || "", {
                min: minLength,
                max: maxLength,
              })}
              fullWidth
            />
          )}
        />
      ))}

      <Button
        variant="contained"
        type="submit"
        sx={{
          borderRadius: "20px",
          fontSize: "15px",
          py: "8px",
        }}
      >
        {t("common.continue")}
      </Button>
    </Container>
  );
};

export default BaseAuthForm;
