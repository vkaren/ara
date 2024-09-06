import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import Head from "next/head";

const SignLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ara</title>
      </Head>
      <Grid
        container
        direction={"row"}
        columns={3}
        sx={{
          minWidth: "100%",
          minHeight: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          flexGrow: 1,
        }}
      >
        <Grid xs={0} sm={1} p={0}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: `url("assets/background.png")`,
              backgroundSize: "cover",
              backgroundPositionY: "center",
            }}
          />
        </Grid>
        <Grid xs={3} sm={2} p={0}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default SignLayout;
