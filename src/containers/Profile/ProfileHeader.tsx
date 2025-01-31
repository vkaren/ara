import { Avatar } from "@components/Avatar";
import { FollowButton } from "@components/Buttons";
import {
  Box,
  Card,
  Stack,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ProfileHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileStyles: SxProps<Theme> = {
    position: "absolute",
    top: 55,
    left: 0,
    minWidth: "100vw",
    maxWidth: "100vw",
    maxHeight: "205px",
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: 0,
        ...(isMobile ? mobileStyles : {}),
      }}
    >
      <Box
        width={"100%"}
        minHeight={"100px"}
        sx={{
          bgcolor: "primary.light",
        }}
      />

      <Box
        width={"100%"}
        minHeight={"100px"}
        sx={{
          display: "flex",
          gap: 1,
          py: "12px",
          bgcolor: "common.white",
          border: 1,
          borderColor: "grey.100",
        }}
      >
        <Avatar
          width={80}
          height={80}
          sx={{
            position: "relative",
            top: -25,
            ml: "15px",
          }}
        />
        <Stack direction={"column"}>
          <Box display={"flex"} gap={3}>
            <Typography variant="body1" fontWeight={"semibold"}>
              Karen
              <Typography variant="body2" component={"span"} color="text.secondary" ml={1}>
                @karen
              </Typography>
            </Typography>
            <FollowButton onClick={() => {}} />
          </Box>

          <Typography variant="caption">1 follower</Typography>
        </Stack>
      </Box>
    </Card>
  );
};

export default ProfileHeader;
