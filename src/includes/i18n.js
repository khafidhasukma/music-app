import { createI18n } from "vue-i18n";
import id from "@/locales/id.json";
import en from "@/locales/en.json";

export default createI18n({
  locale: "en",
  fallbackLocale: "id",
  messages: {
    id,
    en,
  },
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD",
      },
    },
    id: {
      currency: {
        style: "currency",
        currency: "IDR",
      },
    },
  },
});
