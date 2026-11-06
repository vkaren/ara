import User from "../User";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const PeopleToFollow = ({ peopleToFollow = [] }) => {
  return (
    peopleToFollow.length > 0 && (
      <Stack component="section" spacing={1} sx={{ width: "75%", maxWidth: 600, mt: "auto" }}>
        <Typography variant="h6" component="h2" fontWeight={600}>
          People to follow
        </Typography>

        <Box
          sx={{ display: "flex", gap: 2, width: "100%", overflowX: "auto", pb: 1 }}
        >
          {peopleToFollow.map((user) => (
            <User
              key={`user-to-follow-${user.id}`}
              id={user.id}
              nickname={user.nickname}
              username={user.username}
              profilePhoto={user.profile_photo}
              type={"people-tf"}
            />
          ))}
        </Box>
      </Stack>
    )
  );
};

export default PeopleToFollow;
