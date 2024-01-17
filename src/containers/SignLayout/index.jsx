import Head from "next/head";
import { useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import styles from "./styles.module.css";

const SignLayout = ({ children }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>Ara</title>
      </Head>
      <main
        className={`${styles["sign-layout"]} ${
          darkTheme && styles["dark-mode"]
        }`}
      >
        <aside className={styles["sign-layout__left"]}></aside>
        <aside className={styles["sign-layout__right"]}>{children}</aside>
      </main>
    </>
  );
};

export default SignLayout;
