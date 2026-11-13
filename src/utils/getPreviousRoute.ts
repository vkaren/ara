interface RequestWithReferer {
  headers: { referer?: string };
}

const getPreviousRoute = ({
  headers: { referer },
}: RequestWithReferer): string | null => {
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

  return referer?.split("/").find((route) => appRoutes.includes(route)) || null;
};

export default getPreviousRoute;
