import { useLanguage } from "@/i18n/LanguageContext";

const getAssetPath = (path: string) =>
  `${import.meta.env.BASE_URL}${path.startsWith("/") ? path.slice(1) : path}`;

export const useCvPath = () => {
  const { lang } = useLanguage();
  return lang === "it"
    ? getAssetPath("CV_Dario_Casavecchia_2026_IT.pdf")
    : getAssetPath("CV_Dario_Casavecchia_2026_EN.pdf");
};
