import { User } from "@components/Cards";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const PeopleToFollow = () => {
  const { t } = useTranslation();

  return (
    <Stack direction={"column"} spacing={3}>
      <Typography variant="h2" fontSize={18}>
        {t("views.search.peopleToFollow")}
      </Typography>

      <Stack direction={"row"} spacing={2} width={"100%"} p={"12px"} overflow={"auto"}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </Stack>
    </Stack>
  );
};

export default PeopleToFollow;
