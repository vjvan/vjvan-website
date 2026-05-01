"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  poster: string;
  webmSrc: string;
  mp4Src: string;
  mp4MobileSrc: string;
  className?: string;
  ariaLabel?: string;
};

export default function HeroVideo({
  poster,
  webmSrc,
  mp4Src,
  mp4MobileSrc,
  className,
  ariaLabel,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData =
      typeof navigator !== "undefined" &&
      "connection" in navigator &&
      // @ts-expect-error connection.saveData is non-standard
      (navigator.connection?.saveData === true ||
        // @ts-expect-error connection.effectiveType is non-standard
        ["slow-2g", "2g"].includes(navigator.connection?.effectiveType));

    if (reduceMotion || saveData) return;

    const cb = () => setShouldLoad(true);
    const w = window as Window &
      typeof globalThis & {
        requestIdleCallback?: (cb: IdleRequestCallback, opts?: IdleRequestOptions) => number;
      };
    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(cb, { timeout: 1500 });
    } else {
      w.setTimeout(cb, 600);
    }
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => {
      v.play().catch(() => {
        // autoplay blocked; poster stays visible
      });
    };
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });
  }, [shouldLoad]);

  return (
    <div className={className} style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
      <img
        src={poster}
        alt={ariaLabel ?? ""}
        width={1600}
        height={900}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: shouldLoad ? 0 : 1,
          transition: "opacity 0.4s ease",
        }}
      />
      {shouldLoad && (
        <video
          ref={videoRef}
          poster={poster}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          aria-label={ariaLabel}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        >
          <source media="(min-width: 768px)" src={webmSrc} type="video/webm" />
          <source media="(min-width: 768px)" src={mp4Src} type="video/mp4" />
          <source src={mp4MobileSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
