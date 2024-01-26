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
    return referer.split("/").filter((i) => appRoutes.includes(i))[0];
  }

  return null;
};

export default getPreviousRoute;
