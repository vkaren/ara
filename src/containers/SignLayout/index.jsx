import { useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import Head from "next/head";
import styles from "./styles.module.css";

const SignLayout = ({ children }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>Ara</title>
      </Head>
      <main
        id={darkTheme && "dark-mode"}
        className={`${styles["sign-layout"]} `}
      >
        <aside className={styles["sign-layout__left"]}></aside>
        <aside className={`${styles["sign-layout__right"]} bckgBlack clrWhite`}>
          {children}
        </aside>
      </main>
    </>
  );
};

export default SignLayout;
