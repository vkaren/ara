import { Icon } from "@iconify/react";
import { InputAdornment, TextField, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const Search = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <TextField
      placeholder={t("views.search.placeholder")}
      InputProps={{
        type: "search",
        startAdornment: (
          <InputAdornment
            position="start"
            sx={{
              mx: "9px",
            }}
          >
            <Icon icon={"mdi:search"} width={24} height={24} color={theme.palette.grey[500]} />
          </InputAdornment>
        ),
        sx: {
          borderRadius: "25px",
          "& ::placeholder": {
            fontSize: "14px",
          },
        },
      }}
      size="small"
      fullWidth
    />
  );
};

export default Search;
