import { useEffect, useState } from "react";
import MenuContainer from "./MenuContainer";
import MobileNavbar from "./MobileNavbar";

const Menu = () => {
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
      {isOnMobile && <MobileNavbar />}

      <MenuContainer isOnMobile={isOnMobile} options={options} />
    </>
  );
};

export default Menu;
