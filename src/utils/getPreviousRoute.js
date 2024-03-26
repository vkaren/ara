const getPreviousRoute = ({ headers: { referer } }) => {
  const appRoutes = [
    "home",
    "login",
    "notifications",
    "post",
    "profile",
    "search",
    "settings",
    "edit",
  ];

  if (referer) {
    return referer.split("/").find((i) => appRoutes.includes(i));
  }

  return null;
};

export default getPreviousRoute;
