"use client";

import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  fullWidth?: boolean;
  asChild?: boolean;
}

const baseStyles = `
  inline-flex items-center justify-center gap-2
  font-ui font-medium
  rounded-base
  transition-all duration-[250ms] ease-out
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary
  disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed
  select-none
`;

const variants = {
  primary: `
    bg-accent-red text-fg-primary
    hover:bg-accent-red-hover
    active:bg-accent-red-muted
    shadow-[0_4px_20px_-8px_rgba(220,38,38,0.4)]
    hover:shadow-[0_8px_30px_-10px_rgba(220,38,38,0.5)]
    border border-transparent
  `,
  secondary: `
    bg-bg-tertiary text-fg-primary
    border border-border-primary
    hover:bg-bg-elevated
    hover:border-border-secondary
    active:bg-bg-elevated
  `,
  ghost: `
    bg-transparent text-fg-primary
    hover:bg-bg-tertiary
    active:bg-bg-elevated
    border border-transparent
  `,
  danger: `
    bg-accent-red text-fg-primary
    hover:bg-accent-red-hover
    active:bg-accent-red-muted
    border border-transparent
  `,
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
  xl: "px-10 py-5 text-xl gap-3",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      asChild = false,
      className,
      children,
      disabled,
      href,
      ...props
    },
    ref
  ) => {
    const isLink = !!href;
    const Component = isLink ? "a" : "button";

    const handleClick = (e: React.MouseEvent) => {
      if (disabled || loading) {
        e.preventDefault();
        return;
      }
      props.onClick?.(e);
    };

    return (
      <Component
        ref={ref}
        href={isLink ? href : undefined}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled || loading}
        onClick={handleClick}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        {...(isLink ? {} : { type: "button" })}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";