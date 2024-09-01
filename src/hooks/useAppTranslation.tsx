import i18n from "config/i18n";
import { useTranslation } from "react-i18next";

export default function useAppTranslation() {
  return useTranslation("common", { i18n });
}
