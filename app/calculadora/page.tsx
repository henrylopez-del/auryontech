"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const negocios = [
  { id: "servicios", label: "Servicios y citas", desc: "Salón, coach, consultor, terapeuta, médico", rec: "minicrm" },
  { id: "tienda", label: "Tienda / e-commerce", desc: "Productos físicos, digitales o dropshipping", rec: "producto-digital" },
  { id: "freelance", label: "Freelance / agencia", desc: "Diseño, marketing, desarrollo, consultoría", rec: "documentos" },
  { id: "creador", label: "Creador de contenido", desc: "Redes, blog, newsletter, podcast", rec: "publica" },
  { id: "nuevo", label: "Negocio en desarrollo", desc: "Idea o primeros clientes", rec: "automatizacion" },
];

const bandas = [
  { label: "Menos de 3 horas", h: 2 },
  { label: "Entre 3 y 7 horas", h: 5 },
  { label: "Entre 7 y 15 horas", h: 11 },
  { label: "Más de 15 horas", h: 18 },
];

export default function Calculadora() {
  const [negocio, setNegocio] = useState(negocios[0].id);
  const [horas, setHoras] = useState(5);
  const [tarifa, setTarifa] = useState(25);

  const eurosAnio = Math.round(horas * tarifa * 52);
  const recupera = Math.round(horas * 0.8);
  const rec = negocios.find((n) => n.id === negocio)!.rec;
  const fmt = (n: number) => n.toLocaleString("es-ES");

  return (
    <main className="cpage">
      <section className="chero" style={{ paddingBottom: 30 }}>
        <Nav />
        <div className="hero-body" style={{ paddingTop: 36, paddingBottom: 0 }}>
          <span className="h-eyebrow"><span className="sq" />CALCULADORA · DIAGNÓSTICO</span>
          <h1 className="title" style={{ fontSize: "clamp(2.2rem,4.6vw,4rem)" }}>
            ¿Cuánto <span className="o">pierdes</span> sin automatizar?
          </h1>
          <p className="lede">Responde 3 cosas y calculamos las horas y el dinero que el trabajo manual te cuesta cada año.</p>
        </div>
      </section>

      <section className="csec" style={{ paddingTop: 50 }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <div>
              <div className="calc-q">¿Qué tipo de negocio tienes?</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {negocios.map((n) => (
                  <button key={n.id} onClick={() => setNegocio(n.id)} className={`calc-opt${negocio === n.id ? " on" : ""}`}>
                    <span className="ol">{n.label}</span>
                    <span className="od">{n.desc}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="calc-q">¿Cuántas horas a la semana en tareas repetitivas?</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {bandas.map((b) => (
                  <button key={b.h} onClick={() => setHoras(b.h)} className={`calc-opt${horas === b.h ? " on" : ""}`}>
                    <span className="ol">{b.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="calc-q">¿Cuánto vale tu hora de trabajo?</div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <input type="range" min={10} max={120} step={5} value={tarifa} onChange={(e) => setTarifa(Number(e.target.value))} style={{ flex: 1, accentColor: "var(--color-orange)" }} />
                <span style={{ fontFamily: "var(--font-disp)", fontWeight: 800, fontSize: "1.6rem", color: "#fff", minWidth: 90, textAlign: "right" }}>{tarifa}€/h</span>
              </div>
            </div>
          </div>

          <div className="calc-result">
            <div className="cr-lbl">⎯ TU DIAGNÓSTICO</div>
            <div className="cr-stat"><span className="v" style={{ color: "var(--color-orange)" }}>{fmt(eurosAnio)}€</span><span className="l">perdidos al año en trabajo manual</span></div>
            <div className="cr-row">
              <div><span className="v">{horas} h</span><span className="l">a la semana</span></div>
              <div><span className="v" style={{ color: "var(--color-cyan)" }}>{recupera} h</span><span className="l">recuperables automatizando</span></div>
            </div>
            <p className="cr-note">Con los flujos correctos recuperas cerca del 80% de ese tiempo. Empieza por el curso para tu caso:</p>
            <Link href={`/cursos/${rec}`} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Ver mi curso recomendado ▸</Link>
            <Link href="/cursos" className="btn-ghost" style={{ width: "100%", justifyContent: "center", marginTop: 10 }}>Ver todos los cursos</Link>
          </div>
        </div>
      </section>
      <Footer />

      <style>{`
        .calc-q{font-family:var(--font-disp);font-weight:700;font-size:1.05rem;color:#fff;margin-bottom:14px}
        .calc-opt{text-align:left;display:flex;flex-direction:column;gap:3px;border:1px solid var(--line);border-radius:10px;padding:13px 16px;background:rgba(255,255,255,.02);cursor:pointer;transition:all .2s}
        .calc-opt:hover{border-color:var(--line-bright)}
        .calc-opt.on{border-color:var(--color-orange);background:rgba(255,90,31,.1)}
        .calc-opt .ol{font-size:.94rem;color:#EDF1F7;font-weight:500}
        .calc-opt .od{font-size:.78rem;color:var(--color-mut)}
        .calc-result{border:1px solid var(--line-bright);border-radius:18px;padding:34px;background:linear-gradient(180deg,rgba(12,20,36,.7),rgba(8,14,26,.6));position:sticky;top:30px}
        .cr-lbl{font-family:var(--font-mono);font-size:10px;letter-spacing:2.5px;color:var(--color-mut);margin-bottom:20px}
        .cr-stat{display:flex;flex-direction:column;margin-bottom:24px}
        .cr-stat .v{font-family:var(--font-disp);font-weight:800;font-size:3.4rem;line-height:1;letter-spacing:-.03em}
        .cr-stat .l{font-size:.86rem;color:var(--color-mut);margin-top:8px}
        .cr-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:20px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-bottom:20px}
        .cr-row .v{font-family:var(--font-disp);font-weight:800;font-size:1.8rem;color:#fff;display:block}
        .cr-row .l{font-size:.74rem;color:var(--color-mut);margin-top:4px;display:block}
        .cr-note{font-size:.88rem;line-height:1.6;color:#9AA3B3;margin-bottom:20px}
        @media(max-width:900px){.wrap>div:first-child{grid-template-columns:1fr}.calc-result{position:relative;top:0}}
      `}</style>
    </main>
  );
}
