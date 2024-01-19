import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@context/themeContext";
import MenuContainer from "./MenuContainer";
import MobileHeader from "./MobileHeader";

const Menu = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [isOnMobile, setIsOnMobile] = useState(false);
  const options = ["home", "search", "notifications", "profile", "settings"];

  useEffect(() => {
    onWindowResize();
    window.addEventListener("resize", onWindowResize);
  }, []);

  const onWindowResize = () => {
    setIsOnMobile(window.innerWidth <= 650);
  };

  return (
    <>
      {isOnMobile && <MobileHeader />}

      <MenuContainer
        isOnMobile={isOnMobile}
        darkTheme={darkTheme}
        options={options}
      />
    </>
  );
};

export default Menu;
