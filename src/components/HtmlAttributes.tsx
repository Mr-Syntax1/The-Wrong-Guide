"use client";

import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";

export function HtmlAttributes() {
  const pathname = usePathname();

  useEffect(() => {
    // Handle root not-found page which doesn't have locale prefix
    const segments = pathname.split("/").filter(Boolean);
    const locale = segments[0] && ["en", "fa", "tr", "ja", "ru"].includes(segments[0]) 
      ? segments[0] 
      : "en";
    const isRTL = locale === "fa";

    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [pathname]);

  return null;
}