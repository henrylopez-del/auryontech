"use client";

import { useEffect, useState } from "react";

function useReduced() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setR(m.matches);
    const fn = () => setR(m.matches);
    m.addEventListener("change", fn);
    return () => m.removeEventListener("change", fn);
  }, []);
  return r;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function HeroHud() {
  const reduce = useReduced();
  const [secs, setSecs] = useState(3 * 3600 + 42 * 60 + 17); // 03:42:17
  const [procesos, setProcesos] = useState(12);

  // ticking clock — the "control panel" feel
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [reduce]);

  // active-processes counter drifts like a live system
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setProcesos((p) => Math.min(18, Math.max(9, p + (Math.random() > 0.5 ? 1 : -1))));
    }, 2600);
    return () => clearInterval(t);
  }, [reduce]);

  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  const anim = reduce ? "" : " hud-live";

  return (
    <div className={`hud-layer${anim}`}>
      <div className="hud w-status">
        <div className="l1">
          <span className="live-dot" /> SISTEMA EN LÍNEA
        </div>
        <div className="l2">ANTÁRTIDA | NODO A-01</div>
      </div>

      <div className="hud hud-card w-time">
        <div className="hud-lbl">Tiempo recuperado hoy</div>
        <div className="hud-big">
          {pad(h)}:{pad(m)}:{pad(s)}
        </div>
        <div className="hud-sub">+ 40% vs. semana pasada</div>
        <div className="bars">
          {[40, 65, 50, 80, 60, 95, 70, 100].map((hh, i) => (
            <i key={i} style={{ height: `${hh}%` }} />
          ))}
        </div>
      </div>

      <div className="hud hud-card w-report">
        <div className="hud-lbl">Último reporte</div>
        <div className="hud-big" style={{ fontSize: "1.7rem" }}>
          08:00
        </div>
        <div className="hud-sub">AUTO-ENVIADO</div>
      </div>

      <div className="hud hud-card w-load">
        <div className="hud-lbl">Procesos activos</div>
        <div className="hud-big" style={{ fontSize: "1.7rem" }}>
          {pad(procesos)}
        </div>
        <div className="eq">
          {[0, 1, 2, 3, 4].map((i) => (
            <i key={i} />
          ))}
        </div>
      </div>

      <div className="hud w-node">
        <div>
          <span className="dot" />
          <span className="lbl">NODO A-01</span>
        </div>
        <div className="jp">ACTIVO</div>
      </div>

      <div className="hud w-flow">
        <div className="l1">ESTADO DEL FLUJO</div>
        <div className="l2">
          <span className="live-dot" /> ACTIVO
        </div>
      </div>

      <div className="hud w-coord">
        LAT -82.0628
        <br />
        LON 135.0000
      </div>
    </div>
  );
}
