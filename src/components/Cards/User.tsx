import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Avatar } from "@components/Avatar";
import { FollowButton } from "@components/Buttons";

const User = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: 150,
        maxWidth: 150,
        p: "12px",
        gap: "14px",
        borderRadius: "8px",
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 0 }}>
        <Avatar />
        <Typography
          variant="body1"
          fontSize={14}
          fontWeight={500}
          component="div"
          textAlign={"center"}
        >
          Karen
        </Typography>
        <Typography
          variant="body2"
          fontSize={12}
          sx={{ color: "text.secondary" }}
          textAlign={"center"}
        >
          @karen
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 0 }}>
        <FollowButton onClick={() => {}} />
      </CardActions>
    </Card>
  );
};

export default User;
