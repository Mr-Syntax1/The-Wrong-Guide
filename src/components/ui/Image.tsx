"use client";

import { forwardRef, type HTMLAttributes, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ResponsiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export const ResponsiveImage = forwardRef<HTMLImageElement, ResponsiveImageProps>(
  (
    {
      src,
      alt,
      fill = false,
      priority = false,
      sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
      className,
      aspectRatio = "16/9",
      objectFit = "cover",
      ...props
    },
    ref
  ) => {
    const style = {
      aspectRatio,
      objectFit,
    } as React.CSSProperties;

    if (fill) {
      return (
        <div className={cn("relative overflow-hidden", className)} style={{ aspectRatio }}>
          <Image
            ref={ref}
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={cn("transition-opacity duration-500", props.className)}
            style={style}
            {...props}
          />
        </div>
      );
    }

    return (
      <Image
        ref={ref}
        src={src}
        alt={alt}
        priority={priority}
        sizes={sizes}
        className={cn("transition-opacity duration-500", className)}
        style={style}
        {...props}
      />
    );
  }
);

ResponsiveImage.displayName = "ResponsiveImage";

interface PictureProps {
  srcSet: {
    src: string;
    media: string;
    type?: string;
  }[];
  fallback: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  priority?: boolean;
  sizes?: string;
}

export function Picture({
  srcSet,
  fallback,
  alt,
  className,
  aspectRatio = "16/9",
  objectFit = "cover",
  priority = false,
  sizes,
}: PictureProps) {
  const style = {
    aspectRatio,
    objectFit,
  } as React.CSSProperties;

  return (
    <picture className={cn("block", className)}>
      {srcSet.map(({ src, media, type = "image/webp" }, index) => (
        <source key={index} srcSet={src} media={media} type={type} />
      ))}
      <Image
        src={fallback}
        alt={alt}
        priority={priority}
        sizes={sizes}
        className={cn("transition-opacity duration-500")}
        style={style}
      />
    </picture>
  );
}

interface BlurImageProps extends Omit<ResponsiveImageProps, "priority"> {
  blurDataURL?: string;
  placeholder?: "blur" | "empty";
}

export const BlurImage = forwardRef<HTMLImageElement, BlurImageProps>(
  (
    {
      src,
      alt,
      fill = false,
      blurDataURL,
      placeholder = "blur",
      className,
      aspectRatio = "16/9",
      objectFit = "cover",
      ...props
    },
    ref
  ) => {
    const style = {
      aspectRatio,
      objectFit,
    } as React.CSSProperties;

    if (fill) {
      return (
        <div className={cn("relative overflow-hidden", className)} style={{ aspectRatio }}>
          <Image
            ref={ref}
            src={src}
            alt={alt}
            fill
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn("transition-opacity duration-700", props.className)}
            style={style}
            {...props}
          />
        </div>
      );
    }

    return (
      <Image
        ref={ref}
        src={src}
        alt={alt}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn("transition-opacity duration-700", className)}
        style={style}
        {...props}
      />
    );
  }
);

BlurImage.displayName = "BlurImage";