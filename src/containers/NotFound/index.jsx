import { useRouter } from "next/router";
import Head from "next/head";
import Button from "@mui/material/Button";
import IconComponent from "@components/Icon";
import styles from "./styles.module.css";

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

      <main className={`${styles["not-found__page"]}`}>
        <section
          className={`${styles["not-found__section"]} bckgBlack clrWhite`}
        >
          <IconComponent
            name="notFound"
            className={styles["not-found__icon"]}
          />

          <span className={styles["not-found__msg"]}>
            This page doesn't exist.
          </span>

          <Button
            onClick={onClickBackToHome}
            className={styles["not-found__back-btn"]}
            variant="contained"
          >
            Back to home
          </Button>
        </section>
      </main>
    </>
  );
};
export default NotFound;
