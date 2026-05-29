"use client";

import { useEffect, useRef } from "react";

/**
 * Sophisticated canvas snowfall: soft, depth-layered flakes with gentle sway.
 * Fixed, pointer-events-none, low opacity. Honors prefers-reduced-motion.
 */
export default function Snow() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;

    type Flake = { x: number; y: number; r: number; vy: number; drift: number; phase: number; a: number };
    let flakes: Flake[] = [];

    const make = (): Flake => {
      const r = 0.6 + Math.random() * 1.9; // depth: small far, big near
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r,
        vy: 6 + r * 9, // px/sec, bigger falls faster
        drift: 6 + Math.random() * 16,
        phase: Math.random() * Math.PI * 2,
        a: 0.12 + (r / 2.5) * 0.42, // near flakes brighter
      };
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(90, (w * h) / 26000));
      flakes = Array.from({ length: count }, make);
    };
    resize();

    if (reduce) {
      // static, faint dusting
      ctx.clearRect(0, 0, w, h);
      flakes.forEach((f) => {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214,228,244,${f.a})`;
        ctx.fill();
      });
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }

    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      ctx.clearRect(0, 0, w, h);
      for (const f of flakes) {
        f.y += f.vy * dt;
        f.phase += dt;
        const x = f.x + Math.sin(f.phase) * f.drift;
        if (f.y - f.r > h) {
          f.y = -f.r;
          f.x = Math.random() * w;
        }
        ctx.beginPath();
        ctx.arc(x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214,228,244,${f.a})`;
        ctx.shadowColor = "rgba(180,210,240,0.5)";
        ctx.shadowBlur = f.r * 2.4;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="snow" aria-hidden="true" />;
}
