import { NotifsList } from "@components/Lists";
import { Card, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Notifications = () => {
  const { t } = useTranslation();
  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h2" fontSize={20} fontWeight={500}>
        {t("views.notifications.title")}
      </Typography>
      <Card
        sx={{
          minWidth: "100%",
        }}
      >
        <NotifsList
          notifications={[
            {
              type: "follow",
              user: "@karen",
              href: "/profile/@karen",
            },
            {
              type: "like",
              user: "@karen",
              href: "/post/1",
            },
            {
              type: "reply",
              user: "@karen",
              href: "/post/1",
            },
          ]}
        />
      </Card>
    </Stack>
  );
};

export default Notifications;
