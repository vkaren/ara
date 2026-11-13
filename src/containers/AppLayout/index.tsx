import Head from "next/head";
import Box from "@mui/material/Box";
import Menu from "@components/Menu";

const AppLayout = ({ children, title = "Ara" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Ara is a social space for sharing posts, replies and conversations."
        />
      </Head>
      <Box
        component="main"
        sx={{
          width: "100%",
          minHeight: "100vh",
          bgcolor: "background.default",
        }}
      >
        <Menu />
        <Box
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            width: { xs: "100%", sm: "calc(100% - 230px)" },
            minHeight: "100vh",
            px: { xs: 1, sm: 0 },
            pt: { xs: 9, sm: 6 },
            pb: { xs: 11, sm: 6 },
            ml: { xs: 0, sm: "230px" },
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default AppLayout;
