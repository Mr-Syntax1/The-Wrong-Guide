import type { GameConfig } from "@/config/game";

export type { GameConfig };

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  image: string;
  mood: string;
}

export interface NewsPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  slug: string;
  content?: string;
}

export interface PressKitAsset {
  name: string;
  file: string;
  formats?: string[];
  resolution?: string;
  duration?: string;
  description?: string;
  caption?: string;
}

export interface PressKitSection {
  logos: PressKitAsset[];
  keyArt: PressKitAsset[];
  screenshots: PressKitAsset[];
  trailers: PressKitAsset[];
  conceptArt: PressKitAsset[];
  downloads: Record<string, string>;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends ComponentProps {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  ariaLabel?: string;
}

export interface CardProps extends ComponentProps {
  hover?: boolean;
  padded?: boolean;
  bordered?: boolean;
}

export interface SectionProps extends ComponentProps {
  id?: string;
  background?: "primary" | "secondary" | "tertiary" | "none";
  padded?: boolean;
}

export interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
  thumbnail?: string;
  width?: number;
  height?: number;
}

export interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: MediaItem[];
  initialIndex: number;
}

export interface VideoPlayerProps {
  src: string;
  poster: string;
  title: string;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}

export interface WrongGuideEffectConfig {
  enabled: boolean;
  intensity: "subtle" | "moderate" | "strong";
  frequency: number;
  effects: WrongGuideEffect[];
}

export type WrongGuideEffect =
  | "text-shift"
  | "label-flicker"
  | "nav-shift"
  | "timestamp-drift"
  | "warning-flash"
  | "text-correction"
  | "visual-glitch"
  | "location-drift"
  | "observed-hint";

export interface WrongGuideState {
  activeEffects: WrongGuideEffect[];
  lastTriggered: number;
  triggerCount: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: string;
}

export interface FooterConfig {
  logo: string;
  copyright: string;
  socialLinks: SocialLink[];
  developer: string;
  publisher: string;
  contactEmail: string;
  pressEmail: string;
  legalLinks: { label: string; href: string }[];
}