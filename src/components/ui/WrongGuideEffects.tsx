"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

type WrongGuideEffect =
  | "text-shift"
  | "label-flicker"
  | "nav-shift"
  | "timestamp-drift"
  | "warning-flash"
  | "text-correction"
  | "visual-glitch"
  | "location-drift"
  | "observed-hint";

interface WrongGuideConfig {
  enabled: boolean;
  intensity: "subtle" | "moderate" | "strong";
  minInterval: number;
  maxInterval: number;
  effects: WrongGuideEffect[];
}

const DEFAULT_CONFIG: WrongGuideConfig = {
  enabled: true,
  intensity: "subtle",
  minInterval: 8000,
  maxInterval: 20000,
  effects: [
    "text-shift",
    "label-flicker",
    "nav-shift",
    "timestamp-drift",
    "warning-flash",
    "text-correction",
    "visual-glitch",
    "location-drift",
    "observed-hint",
  ],
};

const textShifts = [
  { original: "You are safe.", shifted: "You were safe." },
  { original: "The guide protects you.", shifted: "The guide protects itself." },
  { original: "Keep moving forward.", shifted: "Keep moving forward. It's closer now." },
  { original: "The path is clear.", shifted: "The path was clear." },
  { original: "You are alone.", shifted: "You are not alone." },
  { original: "Don't look back.", shifted: "Don't look back. It's already behind you." },
  { original: "The exit is ahead.", shifted: "The exit was ahead." },
  { original: "Trust the guide.", shifted: "Trust the guide. Trust the guide. Trust the guide." },
  { original: "Follow the light.", shifted: "Follow the light. It knows your name." },
  { original: "You will survive.", shifted: "You will survive. For now." },
  { original: "The door is locked.", shifted: "The door is locked from the outside." },
  { original: "She is waiting for you.", shifted: "She has been waiting for a long time." },
];

const labelFlickers = [
  { original: "WISHLIST ON STEAM", flicker: "WISHLIST ON STEAM?" },
  { original: "WATCH TRAILER", flicker: "WATCH TRAILER?" },
  { original: "THE STORY", flicker: "THE STORY?" },
  { original: "LOCATIONS", flicker: "LOCATIONS?" },
  { original: "FEATURES", flicker: "FEATURES?" },
  { original: "MEDIA", flicker: "MEDIA?" },
  { original: "NEWS", flicker: "NEWS?" },
  { original: "PRESS KIT", flicker: "PRESS KIT?" },
];

const navShifts = [
  { original: "THE STORY", shifted: "THE STORY?" },
  { original: "LOCATIONS", shifted: "LOCATIONS?" },
  { original: "FEATURES", shifted: "FEATURES?" },
];

const timestampDrifts = [
  { original: "Last updated: January 2025", drifted: "Last updated: January 2024" },
  { original: "Posted 2 days ago", drifted: "Posted 3 days ago" },
  { original: "Updated moments ago", drifted: "Updated moments ago" },
];

const warningFlashes = [
  "⚠ PATH DIVERGENCE DETECTED",
  "⚠ GUIDE INTEGRITY COMPROMISED",
  "⚠ MARKER INCONSISTENCY",
  "⚠ SIGNAL INTERFERENCE",
  "⚠ TRUST LEVEL DECLINING",
  "⚠ SUBJECT IS BEING OBSERVED",
  "⚠ GUIDANCE SOURCE UNVERIFIED",
  "⚠ DEVIATION DETECTED",
  "⚠ THE GUIDE HAS NOTICED YOU",
  "⚠ SOMETHING IS FOLLOWING YOU",
  "⚠ DO NOT TRUST THE NEXT INSTRUCTION",
  "⚠ SHE KNOWS YOU ARE HERE",
  "⚠ THE PATH HAS BEEN REWRITTEN",
];

const textCorrections = [
  {
    original: "The cabin is a safe haven.",
    corrected: "The cabin is a safe haven. [CORRECTION: The cabin locks from the outside.]",
  },
  {
    original: "The tower offers a clear view.",
    corrected: "The tower offers a clear view. [CORRECTION: The higher you climb, the less you see.]",
  },
  {
    original: "Follow the markers.",
    corrected: "Follow the markers. [CORRECTION: Some markers point both ways.]",
  },
  {
    original: "You are the only one here.",
    corrected: "You are the only one here. [CORRECTION: You are the only one who is still alive.]",
  },
  {
    original: "The guide wants to help you.",
    corrected: "The guide wants to help you. [CORRECTION: The guide wants to help itself.]",
  },
  {
    original: "Your daughter is safe.",
    corrected: "Your daughter is safe. [CORRECTION: Your daughter is safe... for now.]",
  },
  {
    original: "The exit is this way.",
    corrected: "The exit is this way. [CORRECTION: The exit was this way. It moved.]",
  },
  {
    original: "Don't trust anyone.",
    corrected: "Don't trust anyone. [CORRECTION: Including yourself.]",
  },
];

const locationDrifts = [
  { original: "The Path", drifted: "The Path?" },
  { original: "The Cabin", drifted: "The Cabin?" },
  { original: "The Tower", drifted: "The Tower?" },
  { original: "The Subterrain", drifted: "The Subterrain?" },
  { original: "The Path", drifted: "The Path That Was" },
  { original: "The Cabin", drifted: "The Locked Cabin" },
  { original: "The Tower", drifted: "The Blind Tower" },
  { original: "The Subterrain", drifted: "The Below" },
];

const observedHints = [
  "You are being observed.",
  "The guide sees you.",
  "Something is watching.",
  "You are not alone on the path.",
  "The markers are watching.",
  "It knows you are reading this.",
  "You should not be here.",
  "The guide remembers your face.",
  "You have been here before.",
  "She can hear you breathing.",
  "The path was never meant for you.",
  "You are being guided. Not saved.",
  "Someone is reading over your shoulder.",
  "The guide is closer than you think.",
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type EffectData =
  | { original: string; shifted: string }
  | { original: string; flicker: string }
  | { original: string; drifted: string }
  | { original: string; corrected: string }
  | { intensity: "subtle" | "moderate" | "strong" }
  | string;

export function WrongGuideEffects({ config = DEFAULT_CONFIG }: { config?: Partial<WrongGuideConfig> }) {
  const [activeEffect, setActiveEffect] = useState<WrongGuideEffect | null>(null);
  const [effectData, setEffectData] = useState<EffectData | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const mountedRef = useRef(false);
  const triggerEffectRef = useRef<() => void>();

  const triggerEffect = useCallback(() => {
    if (!config.enabled || !mountedRef.current) return;

    const availableEffects = config.effects.filter((e) => e !== activeEffect);
    if (availableEffects.length === 0) return;

    const effect = getRandomElement(availableEffects);
    setActiveEffect(effect);

    switch (effect) {
      case "text-shift": {
        const shift = getRandomElement(textShifts);
        setEffectData(shift);
        setTimeout(() => setActiveEffect(null), getRandomInt(3000, 6000));
        break;
      }
      case "label-flicker": {
        const flicker = getRandomElement(labelFlickers);
        setEffectData(flicker);
        setTimeout(() => setActiveEffect(null), getRandomInt(100, 300));
        break;
      }
      case "nav-shift": {
        const shift = getRandomElement(navShifts);
        setEffectData(shift);
        setTimeout(() => setActiveEffect(null), getRandomInt(2000, 4000));
        break;
      }
      case "timestamp-drift": {
        const drift = getRandomElement(timestampDrifts);
        setEffectData(drift);
        setTimeout(() => setActiveEffect(null), getRandomInt(5000, 10000));
        break;
      }
      case "warning-flash": {
        const warning = getRandomElement(warningFlashes);
        setWarningText(warning);
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), getRandomInt(1500, 3000));
        break;
      }
      case "text-correction": {
        const correction = getRandomElement(textCorrections);
        setEffectData(correction);
        setTimeout(() => setActiveEffect(null), getRandomInt(8000, 15000));
        break;
      }
      case "visual-glitch": {
        setEffectData({ intensity: config.intensity });
        setTimeout(() => setActiveEffect(null), getRandomInt(50, 200));
        break;
      }
      case "location-drift": {
        const drift = getRandomElement(locationDrifts);
        setEffectData(drift);
        setTimeout(() => setActiveEffect(null), getRandomInt(3000, 6000));
        break;
      }
      case "observed-hint": {
        const hint = getRandomElement(observedHints);
        setEffectData(hint);
        setTimeout(() => setActiveEffect(null), getRandomInt(4000, 8000));
        break;
      }
    }

    const nextInterval = getRandomInt(config.minInterval, config.maxInterval);
    intervalRef.current = setTimeout(() => triggerEffectRef.current?.(), nextInterval);
  }, [config, activeEffect]);

  // Keep ref updated
  useEffect(() => {
    triggerEffectRef.current = triggerEffect;
  }, [triggerEffect]);

  // Initialize effect timer
  useEffect(() => {
    mountedRef.current = true;
    const initialDelay = getRandomInt(30000, 60000);
    intervalRef.current = setTimeout(() => triggerEffectRef.current?.(), initialDelay);

    return () => {
      mountedRef.current = false;
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, []);

  if (!config.enabled) return null;

  return (
    <>
      {showWarning && (
        <div
          className={cn(
            "fixed top-20 left-1/2 -translate-x-1/2 z-[500] px-4 py-2 rounded-base",
            "bg-accent-red/90 text-fg-primary text-xs font-medium tracking-wider uppercase",
            "animate-in fade-in slide-down-from-top-4 duration-300",
            "animate-out fade-out slide-up-to-top-4 duration-300"
          )}
          role="alert"
          aria-live="assertive"
        >
          {warningText}
        </div>
      )}

      {activeEffect === "text-shift" && effectData && (
        <div
          className={cn(
            "fixed bottom-20 left-1/2 -translate-x-1/2 z-[500] px-4 py-2 rounded-base",
            "bg-bg-primary/95 backdrop-blur-sm border border-accent-red/30",
            "text-fg-secondary text-sm animate-in fade-in duration-500",
            "animate-out fade-out duration-500"
          )}
          aria-live="polite"
        >
          <span className="line-through text-accent-red/50">{effectData.original}</span>
          <span className="ml-2 text-accent-red">{effectData.shifted}</span>
        </div>
      )}

      {activeEffect === "text-correction" && effectData && (
        <div
          className={cn(
            "fixed bottom-20 left-1/2 -translate-x-1/2 z-[500] max-w-md px-4 py-3 rounded-base",
            "bg-bg-primary/95 backdrop-blur-sm border border-accent-red/30",
            "text-fg-secondary text-sm animate-in fade-in slide-up-from-bottom-4 duration-500",
            "animate-out fade-out slide-down-to-bottom-4 duration-500"
          )}
          aria-live="polite"
        >
          <p className="text-accent-red/50 line-through">{effectData.original}</p>
          <p className="text-accent-red mt-1">{effectData.corrected}</p>
        </div>
      )}

      {activeEffect === "observed-hint" && effectData && (
        <div
          className={cn(
            "fixed top-24 right-6 z-[500] max-w-xs px-3 py-2 rounded-base",
            "bg-bg-primary/95 backdrop-blur-sm border border-border-primary",
            "text-fg-tertiary text-xs animate-in fade-in slide-in-from-right-4 duration-500",
            "animate-out fade-out slide-out-to-right-4 duration-500"
          )}
          aria-live="polite"
        >
          {effectData}
        </div>
      )}

      <style jsx global>{`
        @keyframes glitch-flicker {
          0% { opacity: 1; }
          50% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        .wrong-guide-glitch {
          animation: glitch-flicker 0.1s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .wrong-guide-glitch {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

export function WrongGuideText({
  children,
  className,
  effect = "text-shift",
}: {
  children: React.ReactNode;
  className?: string;
  effect?: "text-shift" | "label-flicker" | "nav-shift" | "location-drift";
}) {
  const [isShifted, setIsShifted] = useState(false);
  const [shiftedText, setShiftedText] = useState("");
  const originalText = typeof children === "string" ? children : "";

  useEffect(() => {
    if (!originalText) return;
    const interval = setInterval(() => {
      if (Math.random() < 0.001) {
        const shifts = {
          "text-shift": textShifts,
          "label-flicker": labelFlickers,
          "nav-shift": navShifts,
          "location-drift": locationDrifts,
        };
        const match = shifts[effect].find((s) => s.original === originalText || s.flicker === originalText);
        if (match) {
          setShiftedText(effect === "label-flicker" ? match.flicker : match.shifted);
          setIsShifted(true);
          setTimeout(() => setIsShifted(false), getRandomInt(500, 3000));
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [originalText, effect]);

  return (
    <span className={cn(className)}>
      {isShifted && shiftedText ? (
        <>
          <span className="line-through text-accent-red/50">{originalText}</span>
          <span className="ml-1 text-accent-red">{shiftedText}</span>
        </>
      ) : (
        originalText
      )}
    </span>
  );
}

export function WrongGuideObserver() {
  const [hint, setHint] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.001) {
        setHint(getRandomElement(observedHints));
        setTimeout(() => setHint(null), getRandomInt(3000, 6000));
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!hint) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-[500] max-w-xs px-3 py-2 rounded-base",
        "bg-bg-primary/95 backdrop-blur-sm border border-border-primary",
        "text-fg-tertiary text-xs animate-in fade-in slide-in-from-bottom-4 duration-500",
        "animate-out fade-out slide-out-to-bottom-4 duration-500"
      )}
      aria-live="polite"
    >
      {hint}
    </div>
  );
}