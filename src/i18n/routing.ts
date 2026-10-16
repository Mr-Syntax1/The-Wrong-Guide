import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fa", "tr", "ja", "ru"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});