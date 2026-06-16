"use client";

import { useEffect, useRef } from "react";

export function FadeVideoBg({
  src,
  className = ""
}: {
  src: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf = 0;
    const FADE_DURATION = 0.5;
    const RESTART_DELAY = 100;

    const tick = () => {
      if (!video.duration || isNaN(video.duration)) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const t = video.currentTime;
      const d = video.duration;

      if (t < FADE_DURATION) {
        video.style.opacity = String(t / FADE_DURATION);
      } else if (d - t < FADE_DURATION) {
        video.style.opacity = String((d - t) / FADE_DURATION);
      } else {
        video.style.opacity = "1";
      }
      raf = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      window.setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, RESTART_DELAY);
    };

    raf = requestAnimationFrame(tick);
    video.addEventListener("ended", handleEnded);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      playsInline
      preload="auto"
      style={{ opacity: 0 }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
