"use client";

import { withBase } from "@/lib/base";
import { useEffect, useRef } from "react";

/**
 * Fixed landscape video behind the hero. Scroll position drives the video
 * frame (scroll-scrub), eased with a lerp for smooth playback. The source is
 * encoded with a keyframe on every frame so seeking is cheap.
 */
export default function HeroVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    const wrap = wrapRef.current;
    const scrim = scrimRef.current;
    if (!v || !wrap || !scrim) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    v.pause();

    let duration = 0;
    let target = 0;
    let current = 0;
    let raf = 0;
    let running = false;

    // the full video plays across the ENTIRE page scroll, staying visible throughout
    const scrubDistance = () =>
      Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    const computeTarget = () => {
      const max = scrubDistance();
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      target = p * duration;
      // background darkens progressively: light at top, near pitch-black at the end of scroll
      scrim.style.opacity = String(0.5 + p * 0.46); // 0.50 -> 0.96
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const loop = () => {
      const diff = target - current;
      current += diff * 0.1;
      if (Math.abs(diff) < 0.004) {
        current = target;
        running = false;
      } else {
        raf = requestAnimationFrame(loop);
        running = true;
      }
      if (v.readyState >= 2) {
        try {
          v.currentTime = current;
        } catch {}
      }
    };

    const onMeta = () => {
      duration = v.duration || 0;
      if (reduce) {
        try {
          v.currentTime = 0;
        } catch {}
        return;
      }
      try {
        v.currentTime = 0.001;
      } catch {}
      computeTarget();
    };

    v.addEventListener("loadedmetadata", onMeta);
    if (v.readyState >= 1) onMeta();

    if (!reduce) {
      window.addEventListener("scroll", computeTarget, { passive: true });
      window.addEventListener("resize", computeTarget, { passive: true });
    }

    return () => {
      v.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", computeTarget);
      window.removeEventListener("resize", computeTarget);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-video" ref={wrapRef} aria-hidden="true">
      <video ref={videoRef} muted playsInline preload="auto">
        <source src={withBase("/bg-landscape.mp4")} type="video/mp4" />
      </video>
      <div className="hero-video-scrim" ref={scrimRef} />
    </div>
  );
}
