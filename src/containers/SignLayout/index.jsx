import Head from "next/head";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const SignLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ara</title>
      </Head>
      <Box
        component="main"
        sx={{
          display: "flex",
          alignItems: { xs: "center", sm: "stretch" },
          justifyContent: { xs: "center", sm: "flex-start" },
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        <Box
          component="aside"
          sx={{
            position: { xs: "absolute", sm: "relative" },
            inset: { xs: 0, sm: "auto" },
            display: "block",
            width: { xs: "100%", sm: "40%" },
            minHeight: "100vh",
            backgroundImage: "url('/bckg/main-bckg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Paper
          component="section"
          square
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 4, sm: 6 },
            position: { xs: "relative", sm: "static" },
            zIndex: 1,
            width: { xs: "85%", sm: "60%" },
            maxWidth: { xs: 500, sm: "none" },
            minHeight: { xs: "85vh", sm: "100vh" },
            mx: { xs: "auto", sm: 0 },
            borderRadius: { xs: 2, sm: 0 },
            px: { xs: 3, sm: 6 },
            py: 6,
            bgcolor: "background.paper",
          }}
        >
          {children}
        </Paper>
      </Box>
    </>
  );
};

export default SignLayout;
