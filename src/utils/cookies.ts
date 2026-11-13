import { deleteCookie, getCookie, setCookie } from "cookies-next";
import type { CookieValueTypes } from "cookies-next";
import type { OptionsType } from "cookies-next/lib/types";

const cookieOptions: OptionsType = {
  path: "/",
  sameSite: "strict",
  secure: true,
};

const setItem = (key: string, value: string | number | boolean): void => {
  setCookie(key, value, cookieOptions);
};

const getItem = (key: string, ssr?: OptionsType): CookieValueTypes => {
  return getCookie(key, ssr);
};

const removeItem = (key: string): void => {
  deleteCookie(key, cookieOptions);
};

export { setItem, getItem, removeItem };
