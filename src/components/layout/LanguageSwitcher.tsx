"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { Globe, ChevronDown, Check } from "lucide-react";

const locales = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "fa", name: "Persian", nativeName: "فارسی" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
  { code: "ru", name: "Russian", nativeName: "Русский" },
];

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = useLocale();
  const currentLanguage = locales.find((l) => l.code === currentLocale) || locales[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const switchLocale = (locale: string) => {
    if (locale === currentLocale) {
      setIsOpen(false);
      return;
    }
    // pathname از next-intl بدون پیشوند locale است؛ خود router پیشوند را مدیریت می‌کند
    // (با localePrefix: "as-needed" برای en پیشوند نمی‌گذارد)
    router.replace(pathname, { locale });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-base bg-bg-tertiary border border-border-primary text-fg-secondary",
          "hover:text-accent-red hover:border-accent-red/50 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline font-medium">{currentLanguage.nativeName}</span>
        <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Available languages"
          className="absolute right-0 top-full mt-2 w-40 origin-top-right animate-in fade-in-0 zoom-in-95 duration-150 rounded-base bg-bg-secondary border border-border-primary overflow-hidden shadow-lg z-50"
        >
          {locales.map((locale) => (
            <li key={locale.code} role="option" aria-selected={locale.code === currentLocale}>
              <button
                onClick={() => switchLocale(locale.code)}
                className={cn(
                  "w-full px-4 py-2 text-left text-sm font-medium transition-colors flex items-center gap-2",
                  locale.code === currentLocale
                    ? "text-accent-red bg-bg-tertiary"
                    : "text-fg-secondary hover:text-fg-primary hover:bg-bg-tertiary"
                )}
              >
                {locale.code === currentLocale && <Check className="w-4 h-4 flex-shrink-0 text-accent-red" aria-hidden="true" />}
                <span>{locale.nativeName}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}