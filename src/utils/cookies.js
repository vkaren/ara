import { getCookie, setCookie, deleteCookie } from "cookies-next";

const setItem = (key, value) => {
  return setCookie(key, value, {
    path: "/",
    sameSite: "strict",
    secure: true,
  });
};

const getItem = (key, ssr) => {
  const params = [key];

  if (ssr) {
    params.push(ssr);
  }

  return getCookie(...params);
};

const removeItem = (key) => {
  return deleteCookie(key, {
    path: "/",
    sameSite: "strict",
    secure: true,
  });
};

export { setItem, getItem, removeItem };
