import { useRouter } from "next/router";
import Head from "next/head";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconComponent from "@components/Icon";

const NotFound = () => {
  const router = useRouter();

  const onClickBackToHome = () => {
    router.push("/home");
  };

  return (
    <>
      <Head>
        <title>Ara</title>
      </Head>

      <Box
        component="main"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "100vh",
          p: 2,
          backgroundImage: "url('/bckg/main-bckg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Paper
          component={Stack}
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ width: "85%", maxWidth: 400, p: { xs: 4, sm: 8 } }}
        >
          <IconComponent
            name="notFound"
            style={{ width: 150, height: 150, fill: "#2d66f9" }}
          />

          <Typography variant="h6" component="p" align="center">
            This page doesn&apos;t exist.
          </Typography>

          <Button
            onClick={onClickBackToHome}
            variant="contained"
            sx={{ width: 180, borderRadius: 6, fontWeight: 600, textTransform: "none" }}
          >
            Back to home
          </Button>
        </Paper>
      </Box>
    </>
  );
};
export default NotFound;
