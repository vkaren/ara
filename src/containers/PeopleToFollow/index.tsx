import { User } from "@components/Cards";
import { Stack, Typography } from "@mui/material";

const PeopleToFollow = () => {
  return (
    <Stack direction={"column"} spacing={3}>
      <Typography variant="h2" fontSize={18}>
        People To Follow
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
