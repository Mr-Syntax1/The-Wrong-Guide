"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const LOCALES = ["en", "fa", "tr", "ja", "ru"];

export function SetHtmlLang() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    const first = segments[0];
    const locale = LOCALES.includes(first) ? first : "en";
    const dir = locale === "fa" ? "rtl" : "ltr";

    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [pathname]);

  return null;
}