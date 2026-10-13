"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", children, ...props }, ref) => {
    const sizes = {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      xl: "max-w-[1400px]",
      full: "max-w-full",
    };

    return (
      <div
        ref={ref}
        className={cn("mx-auto px-4 md:px-6 lg:px-8 xl:px-12", sizes[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  background?: "primary" | "secondary" | "tertiary" | "none";
  padded?: boolean;
  narrow?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, id, background = "primary", padded = true, narrow = false, children, ...props }, ref) => {
    const backgrounds = {
      primary: "bg-bg-primary",
      secondary: "bg-bg-secondary",
      tertiary: "bg-bg-tertiary",
      none: "",
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "w-full",
          padded && "py-16 md:py-24 lg:py-32",
          narrow && "max-w-4xl mx-auto",
          backgrounds[background],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  length?: "full" | "half" | "quarter";
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = "horizontal", length = "full", ...props }, ref) => {
    const lengths = {
      full: orientation === "horizontal" ? "w-full" : "h-full",
      half: orientation === "horizontal" ? "w-1/2" : "h-1/2",
      quarter: orientation === "horizontal" ? "w-1/4" : "h-1/4",
    };

    const styles = orientation === "horizontal" ? "h-px" : "w-px";

    return (
      <hr
        ref={ref}
        className={cn(
          "bg-border-primary border-none",
          styles,
          lengths[length],
          "mx-auto my-8",
          className
        )}
        aria-orientation={orientation}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "muted" | "warning";
  size?: "sm" | "md";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const variants = {
      default: "bg-bg-tertiary text-fg-secondary border border-border-primary",
      accent: "bg-accent-red/20 text-accent-red border border-accent-red/30",
      muted: "bg-bg-tertiary text-fg-tertiary border border-border-primary",
      warning: "bg-accent-amber/20 text-accent-amber border border-accent-amber/30",
    };

    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-3 py-1 text-sm",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium rounded-full",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";