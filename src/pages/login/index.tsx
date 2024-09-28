import Login from "@containers/Login";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { serverSideTranslations } = require("next-i18next/serverSideTranslations");

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
