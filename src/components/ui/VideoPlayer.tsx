"use client";

import { forwardRef, useState, useRef, useEffect, useCallback, type VideoHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Play, Pause, Fullscreen, Volume2, VolumeX, SkipBack, SkipForward } from "lucide-react";

interface VideoPlayerProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, "controls"> {
  src: string;
  poster: string;
  title: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
}

export const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  (
    {
      src,
      poster,
      title,
      autoPlay = false,
      muted = true,
      loop = false,
      className,
      onPlay,
      onPause,
      onEnded,
      onTimeUpdate,
      onLoadedMetadata,
      ...props
    },
    ref
  ) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [isMuted, setIsMuted] = useState(muted);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const getVideoElement = useCallback(() => {
      return (ref as React.RefObject<HTMLVideoElement>)?.current || videoRef.current;
    }, [ref]);

    useEffect(() => {
      const videoElement = getVideoElement();
      if (videoElement) {
        videoElement.muted = muted;
        videoElement.loop = loop;
      }
    }, [muted, loop, getVideoElement]);

    const handlePlayPause = useCallback(() => {
      const videoElement = getVideoElement();
      if (videoElement) {
        if (isPlaying) {
          videoElement.pause();
        } else {
          videoElement.play();
        }
      }
    }, [getVideoElement, isPlaying]);

    const handleMuteToggle = useCallback(() => {
      const videoElement = getVideoElement();
      if (videoElement) {
        videoElement.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    }, [getVideoElement, isMuted]);

    const handleFullscreen = useCallback(() => {
      const videoElement = getVideoElement();
      if (videoElement) {
        if (!isFullscreen) {
          videoElement.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      }
    }, [getVideoElement, isFullscreen]);

    const handleTimeUpdate = useCallback(() => {
      const videoElement = getVideoElement();
      if (videoElement) {
        setProgress((videoElement.currentTime / videoElement.duration) * 100);
        setCurrentTime(videoElement.currentTime);
        onTimeUpdate?.(videoElement.currentTime);
      }
    }, [getVideoElement, onTimeUpdate]);

    const handleLoadedMetadata = useCallback(() => {
      const videoElement = getVideoElement();
      if (videoElement) {
        setDuration(videoElement.duration);
        onLoadedMetadata?.(videoElement.duration);
      }
    }, [getVideoElement, onLoadedMetadata]);

    const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const videoElement = getVideoElement();
      if (videoElement) {
        const rect = e.currentTarget.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        videoElement.currentTime = pos * videoElement.duration;
      }
    }, [getVideoElement]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
      const videoElement = getVideoElement();
      if (!videoElement) return;
      switch (e.key) {
        case " ":
        case "k":
          e.preventDefault();
          handlePlayPause();
          break;
        case "m":
          handleMuteToggle();
          break;
        case "f":
          handleFullscreen();
          break;
        case "ArrowLeft":
          videoElement.currentTime = Math.max(0, videoElement.currentTime - 10);
          break;
        case "ArrowRight":
          videoElement.currentTime = Math.min(duration, videoElement.currentTime + 10);
          break;
        case "ArrowUp":
          e.preventDefault();
          videoElement.volume = Math.min(1, videoElement.volume + 0.1);
          break;
        case "ArrowDown":
          e.preventDefault();
          videoElement.volume = Math.max(0, videoElement.volume - 0.1);
          break;
      }
    }, [getVideoElement, handlePlayPause, handleMuteToggle, handleFullscreen, duration]);

    const resetControlsTimeout = useCallback(() => {
      setShowControls(true);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
      controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
    }, []);

    const formatTime = useCallback((time: number) => {
      const mins = Math.floor(time / 60);
      const secs = Math.floor(time % 60);
      return `${mins}:${secs.toString().padStart(2, "0")}`;
    }, []);

    return (
      <div
        className={cn("relative bg-bg-primary rounded-base overflow-hidden", className)}
        onMouseEnter={resetControlsTimeout}
        onMouseLeave={() => setShowControls(false)}
        onMouseMove={resetControlsTimeout}
        onTouchStart={resetControlsTimeout}
        role="region"
        aria-label={title}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <video
          ref={ref}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          preload="metadata"
          onPlay={() => {
            setIsPlaying(true);
            onPlay?.();
          }}
          onPause={() => {
            setIsPlaying(false);
            onPause?.();
          }}
          onEnded={() => {
            setIsPlaying(false);
            onEnded?.();
          }}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          {...props}
        />

        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "transition-opacity duration-300",
            showControls || isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent z-10" />

          <button
            className="z-20 p-4 rounded-full bg-bg-primary/80 backdrop-blur-sm text-fg-primary hover:bg-accent-red hover:text-fg-primary transition-all duration-300 cursor-pointer"
            onClick={handlePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
            aria-pressed={isPlaying}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" aria-hidden="true" />
            ) : (
              <Play className="w-8 h-8 ml-1" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-bg-primary/95 to-transparent",
            "transition-transform duration-300",
            showControls || isPlaying ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="flex items-center gap-4">
            <button
              className="p-2 text-fg-primary hover:text-accent-red transition-colors"
              onClick={() => {
                const videoElement = getVideoElement();
                if (videoElement) videoElement.currentTime = Math.max(0, videoElement.currentTime - 10);
              }}
              aria-label="Rewind 10 seconds"
            >
              <SkipBack className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex-1 h-1.5 bg-border-primary rounded-full cursor-pointer relative" onClick={handleSeek}>
              <div
                className="h-full bg-accent-red rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
                role="slider"
                aria-label="Video progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
              />
            </div>

            <span className="text-fg-tertiary text-xs font-mono w-20 text-right">
              {formatTime(currentTime)}
            </span>
            <span className="text-fg-tertiary text-xs font-mono text-center">/</span>
            <span className="text-fg-tertiary text-xs font-mono w-20">
              {formatTime(duration)}
            </span>

            <button
              className="p-2 text-fg-primary hover:text-accent-red transition-colors"
              onClick={() => {
                const videoElement = getVideoElement();
                if (videoElement) videoElement.currentTime = Math.min(duration, videoElement.currentTime + 10);
              }}
              aria-label="Forward 10 seconds"
            >
              <SkipForward className="w-5 h-5" aria-hidden="true" />
            </button>

            <button
              className="p-2 text-fg-primary hover:text-accent-red transition-colors"
              onClick={handleMuteToggle}
              aria-label={isMuted ? "Unmute" : "Mute"}
              aria-pressed={isMuted}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Volume2 className="w-5 h-5" aria-hidden="true" />
              )}
            </button>

            <button
              className="p-2 text-fg-primary hover:text-accent-red transition-colors ml-auto"
              onClick={handleFullscreen}
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              <Fullscreen className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  poster: string;
  title: string;
  autoPlay?: boolean;
}

export function VideoModal({ isOpen, onClose, src, poster, title, autoPlay = true }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current && autoPlay) {
      videoRef.current.play().catch(() => {});
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen, autoPlay]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-bg-primary/95 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div className="relative w-full max-w-5xl h-[80vh] max-h-[80vh] m-4" onClick={(e) => e.stopPropagation()}>
        <h2 id="video-modal-title" className="sr-only">
          {title}
        </h2>
        <button
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-bg-secondary/80 backdrop-blur-sm text-fg-secondary hover:text-fg-primary hover:bg-bg-tertiary transition-colors cursor-pointer"
          onClick={onClose}
          aria-label="Close video"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <VideoPlayer
          ref={videoRef}
          src={src}
          poster={poster}
          title={title}
          autoPlay={autoPlay}
          className="w-full h-full rounded-base"
        />
      </div>
    </div>
  );
}