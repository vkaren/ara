// import { useContext } from "react";
import { useRouter } from "next/router";
// import { UserContext } from "@context/userContext";
import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

const LogoutButton = () => {
  const router = useRouter();
  // const { removeUserInfo } = useContext(UserContext);

  const onLogOut = async () => {
    // removeUserInfo();
    router.push("/login");
  };
  return (
    <button onClick={onLogOut} className={`${styles["logout-btn"]} fillLgtPurple`}>
      <span className={`${styles["logout__title"]} clrLgtPurple`}>Log out</span>

      <IconComponent name={"logout"} />
    </button>
  );
};

export default LogoutButton;
