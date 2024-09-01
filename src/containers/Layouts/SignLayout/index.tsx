import { Box, Grid, useTheme } from "@mui/material";
import Head from "next/head";

const SignLayout = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Ara</title>
      </Head>
      <Grid
        container
        spacing={2}
        sx={{
          minWidth: "100%",
          minHeight: "100%",
          flexGrow: 1,
        }}
      >
        <Grid
          item
          xs={5}
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
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
        <Grid item xs={4}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default SignLayout;
