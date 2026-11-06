import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@context/themeContext";
import iconLogo from "@icons/icon-logo.png";
import iconLogoDarkMode from "@icons/icon-logo-darkmode.png";
import Box from "@mui/material/Box";

const LogoImage = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <Link href="/home" aria-label="Ara home">
      <Box sx={{ width: { xs: 40, sm: 64 }, display: "flex" }}>
        <Image src={darkTheme ? iconLogoDarkMode : iconLogo} alt="Ara home" />
      </Box>
    </Link>
  );
};

export default LogoImage;
