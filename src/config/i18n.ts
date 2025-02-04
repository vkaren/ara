import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { useEffect, useState } from "react";

const useI18n = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    i18n
      .use(Backend)
      .use(initReactI18next)
      .init({
        lng: "es",
        backend: { loadPath: "/locales/{{lng}}.json" },
        fallbackLng: "es",
        react: { useSuspense: false },
        interpolation: { escapeValue: false },
      })
      .then(() => setIsInitialized(true));
  }, []);

  return isInitialized;
};

export default useI18n;
