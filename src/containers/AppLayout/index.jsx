import { useContext } from "react";
import { ThemeContext } from "@context/themeContext";
import Head from "next/head";
import Menu from "@components/Menu";
import styles from "./styles.module.css";

const AppLayout = ({ children }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>Ara</title>
      </Head>
      <main
        id={darkTheme ? "dark-mode" : null}
        className={`${styles["app-main"]} bckgBlack`}
      >
        <Menu />
        <section className={styles["main__section"]}>{children}</section>
      </main>
    </>
  );
};

export default AppLayout;
