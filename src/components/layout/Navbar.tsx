"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { Menu, X } from "lucide-react";
import { gameConfig } from "@/config/game";

const navigation = [
  { label: "BEGIN", href: "/" },
  { label: "THE STORY", href: "/story" },
  { label: "LOCATIONS", href: "/world" },
  { label: "FEATURES", href: "/features" },
  { label: "MEDIA", href: "/media" },
  { label: "NEWS", href: "/news" },
  { label: "PRESS KIT", href: "/press-kit" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[200] transition-all duration-300",
          isScrolled
            ? "bg-bg-primary/95 backdrop-blur-md border-b border-border-primary"
            : "bg-transparent"
        )}
        role="banner"
      >
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className="font-display font-bold text-xl md:text-2xl text-fg-primary tracking-tight hover:opacity-80 transition-opacity"
              aria-label={`${gameConfig.title} - Home`}
            >
              THE WRONG GUIDE
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium tracking-wide transition-colors relative",
                    "hover:text-accent-red",
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                      ? "text-accent-red"
                      : "text-fg-secondary"
                  )}
                  aria-current={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "page" : undefined}
                >
                  {item.label}
                  {pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-red rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link href={gameConfig.steamUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm" className="whitespace-nowrap cursor-pointer">
                  WISHLIST ON STEAM
                </Button>
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-fg-primary hover:text-accent-red transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div
            id="mobile-menu"
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300 ease-out",
              isMobileMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
            )}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="pt-4 space-y-1 border-t border-border-primary">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "block px-4 py-3 text-base font-medium tracking-wide transition-colors",
                    "hover:text-accent-red hover:bg-bg-tertiary",
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                      ? "text-accent-red bg-bg-tertiary"
                      : "text-fg-secondary"
                  )}
                  aria-current={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border-primary">
                <Link href={gameConfig.steamUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="md" fullWidth className="w-full cursor-pointer">
                    WISHLIST ON STEAM
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[199] bg-bg-primary/50 backdrop-blur-sm lg:hidden",
          isMobileMenuOpen ? "block" : "hidden"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}