import api from "@utils/api";
import getPreviousRoute from "@utils/getPreviousRoute";
import { getItem } from "@utils/cookies";
import AppLayout from "@containers/AppLayout";
import SettingsEdit from "@containers/Settings/SettingsEdit";
import NavBack from "@components/NavBack";

export async function getServerSideProps({ req, res, query }) {
  const props = {
    userInfo: {},
    previousRoute: getPreviousRoute(req),
  };
  const userId = getItem("user_id", { req, res });

  const userInfo = await api({
    method: "GET",
    route: `user/${userId}`,
    ssr: {
      req,
      res,
    },
  });

  if (!userInfo.error && userInfo.message !== "Internal server error") {
    props.userInfo = userInfo;
  } else {
    return {
      notFound: true,
    };
  }

  return { props };
}

const SettingsEditPage = ({ userInfo, previousRoute }) => {
  return (
    <AppLayout>
      <NavBack prevRoute={previousRoute} />
      <SettingsEdit userInfo={userInfo} />
    </AppLayout>
  );
};

export default SettingsEditPage;
