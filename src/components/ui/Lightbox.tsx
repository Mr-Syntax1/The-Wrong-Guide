"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X, Expand, Download, RotateCcw } from "lucide-react";
import Image from "next/image";
import type { MediaItem } from "@/types";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: MediaItem[];
  initialIndex: number;
}

export function Lightbox({ isOpen, onClose, items, initialIndex }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const [naturalDimensions, setNaturalDimensions] = useState({ width: 0, height: 0 });
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStartRef = useRef({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialIndexRef = useRef(initialIndex);

  // Update initialIndex ref when it changes
  useEffect(() => {
    initialIndexRef.current = initialIndex;
  }, [initialIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [items.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [items.length]);

  const handleError = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    if (imageRef.current) {
      setNaturalDimensions({
        width: imageRef.current.naturalWidth,
        height: imageRef.current.naturalHeight,
      });
    }
  }, []);

  const handleZoom = useCallback((delta: number) => {
    setZoom((prev) => Math.max(0.5, Math.min(5, prev + delta)));
  }, []);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) {
        handleZoom(-e.deltaY * 0.001);
      }
    },
    [handleZoom]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (zoom > 1) {
        setIsPanning(true);
        panStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
        e.preventDefault();
      }
    },
    [zoom, pan]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isPanning && zoom > 1) {
        setPan({
          x: e.clientX - panStartRef.current.x,
          y: e.clientY - panStartRef.current.y,
        });
      }
    },
    [isPanning, zoom]
  );

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const rotateImage = useCallback(() => {
    // Rotation would require canvas manipulation, simplified for now
  }, []);

  // Reset state when lightbox opens or initialIndex changes
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndexRef.current);
      setIsLoading(true);
      setZoom(1);
      setPan({ x: 0, y: 0 });
    }
  }, [isOpen, initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        case " ":
          e.preventDefault();
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, items.length, goToPrevious, goToNext]);

  const currentItem = items[currentIndex];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-bg-primary/98 backdrop-blur-sm"
      onClick={onClose}
      onWheel={handleWheel}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${currentItem.alt} (${currentIndex + 1} of ${items.length})`}
    >
      <button
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-bg-secondary/80 backdrop-blur-sm text-fg-secondary hover:text-fg-primary hover:bg-bg-tertiary transition-colors cursor-pointer"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" aria-hidden="true" />
      </button>

      <button
        className={cn(
          "absolute left-4 z-10 p-3 rounded-full bg-bg-secondary/80 backdrop-blur-sm text-fg-secondary hover:text-fg-primary hover:bg-bg-tertiary transition-colors cursor-pointer",
          currentIndex === 0 && items.length === 1 && "opacity-30 pointer-events-none"
        )}
        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
        aria-label="Previous image"
        disabled={currentIndex === 0 && items.length === 1}
      >
        <ChevronLeft className="w-6 h-6" aria-hidden="true" />
      </button>

      <button
        className={cn(
          "absolute right-4 z-10 p-3 rounded-full bg-bg-secondary/80 backdrop-blur-sm text-fg-secondary hover:text-fg-primary hover:bg-bg-tertiary transition-colors cursor-pointer",
          currentIndex === items.length - 1 && items.length === 1 && "opacity-30 pointer-events-none"
        )}
        onClick={(e) => { e.stopPropagation(); goToNext(); }}
        aria-label="Next image"
        disabled={currentIndex === items.length - 1 && items.length === 1}
      >
        <ChevronRight className="w-6 h-6" aria-hidden="true" />
      </button>

      <div
        ref={containerRef}
        className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={(e) => handleMouseDown(e as unknown as React.MouseEvent)}
        onTouchMove={(e) => handleMouseMove(e as unknown as React.MouseEvent)}
        onTouchEnd={handleMouseUp}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-3 border-border-primary border-t-accent-red rounded-full animate-spin" aria-label="Loading image" />
          </div>
        )}

        {currentItem.type === "image" && (
          <Image
            ref={imageRef}
            src={currentItem.src}
            alt={currentItem.alt}
            width={naturalDimensions.width || 1920}
            height={naturalDimensions.height || 1080}
            className={cn(
              "max-w-full max-h-[90vh] object-contain transition-transform duration-100",
              "touch-pan-y touch-pinch-zoom",
              zoom > 1 && "cursor-grab",
              isPanning && "cursor-grabbing"
            )}
            style={{
              transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
              transformOrigin: "center center",
            }}
            onLoad={handleLoad}
            onError={handleError}
            priority
          />
        )}

        {currentItem.type === "video" && (
          <video
            ref={imageRef}
            src={currentItem.src}
            poster={currentItem.thumbnail}
            controls
            autoPlay
            playsInline
            className="max-w-full max-h-[90vh] object-contain"
            onLoadStart={() => setIsLoading(true)}
            onCanPlay={() => setIsLoading(false)}
            onError={handleError}
          />
        )}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 p-4 bg-bg-primary/80 backdrop-blur-sm rounded-full border border-border-primary">
        <span className="text-fg-tertiary text-sm font-mono">
          {currentIndex + 1} / {items.length}
        </span>

        {currentItem.caption && (
          <span className="text-fg-secondary text-sm max-w-[300px] truncate">
            {currentItem.caption}
          </span>
        )}

        <div className="flex items-center gap-2 ml-4 border-l border-border-primary pl-4">
          <button
            className="p-2 text-fg-secondary hover:text-fg-primary transition-colors cursor-pointer"
            onClick={() => handleZoom(0.2)}
            aria-label="Zoom in"
            disabled={zoom >= 5}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </button>
          <button
            className="p-2 text-fg-secondary hover:text-fg-primary transition-colors cursor-pointer"
            onClick={() => handleZoom(-0.2)}
            aria-label="Zoom out"
            disabled={zoom <= 0.5}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM21 7h-9" />
            </svg>
          </button>
          <button
            className="p-2 text-fg-secondary hover:text-fg-primary transition-colors cursor-pointer"
            onClick={resetZoom}
            aria-label="Reset zoom"
            disabled={zoom === 1}
          >
            <RotateCcw className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            className="p-2 text-fg-secondary hover:text-fg-primary transition-colors cursor-pointer"
            onClick={rotateImage}
            aria-label="Rotate image"
          >
            <RotateCcw className="w-5 h-5" aria-hidden="true" />
          </button>
          <a
            href={currentItem.src}
            download={currentItem.alt}
            className="p-2 text-fg-secondary hover:text-fg-primary transition-colors cursor-pointer"
            aria-label="Download image"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

interface GalleryProps {
  items: MediaItem[];
  className?: string;
  columns?: number;
  gap?: number;
}

export function Gallery({ items, className, columns = 4, gap = 4 }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  const gapClasses = {
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
  };

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  return (
    <>
      <div
        className={cn(
          "grid",
          columnClasses[columns as keyof typeof columnClasses] || columnClasses[4],
          gapClasses[gap as keyof typeof gapClasses] || gapClasses[4],
          className
        )}
        role="list"
        aria-label="Media gallery"
      >
        {items.map((item, index) => (
          <article
            key={item.id}
            className="relative group overflow-hidden rounded-base bg-bg-tertiary cursor-pointer"
            role="listitem"
            onClick={() => openLightbox(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(index);
              }
            }}
            tabIndex={0}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={item.thumbnail || item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="transition-all duration-500 group-hover:scale-105"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="w-full flex items-center justify-between">
                <span className="text-fg-primary text-sm font-medium">{item.alt}</span>
                <Expand className="w-5 h-5 text-fg-tertiary" aria-hidden="true" />
              </div>
            </div>
            {item.type === "video" && (
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-bg-primary/80 backdrop-blur-sm">
                <svg className="w-4 h-4 text-fg-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
          </article>
        ))}
      </div>

      <Lightbox
        isOpen={selectedIndex !== null}
        onClose={closeLightbox}
        items={items}
        initialIndex={selectedIndex || 0}
      />
    </>
  );
}