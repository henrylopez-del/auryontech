import { withBase } from "@/lib/base";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Tu negocio trabajando solo · AuryOnTech",
  description:
    "Diseño e implemento los flujos que eliminan el trabajo repetitivo. Make + Google. 14 dias a produccion.",
};

const fugas = [
  {
    n: "-40%",
    tag: "SEGUIMIENTO MANUAL",
    txt: "Confirmaciones, recordatorios y respuestas que sigues haciendo a mano.",
  },
  {
    n: "-35%",
    tag: "REGISTRO DISPERSO",
    txt: "Datos de clientes en WhatsApp, papel y memoria sin sistema.",
  },
  {
    n: "-25%",
    tag: "REPORTES INEXISTENTES",
    txt: "Sin visibilidad hasta que alguien se sienta a revisarlo manualmente.",
  },
  {
    n: "-30%",
    tag: "LEADS SIN PROCESO",
    txt: "Formularios que se pierden antes de que alguien responda.",
  },
];

const piezas = [
  { n: "PIEZA 01", t: "Diagnostico", d: "Mapa de tu operacion, fugas cuantificadas y hoja de ruta priorizada." },
  { n: "PIEZA 02", t: "CRM en Sheets", d: "Mini CRM con etapas, historial de cliente y actualizacion automatica." },
  { n: "PIEZA 03", t: "Flujos de captacion", d: "Formulario a Sheets a bienvenida automatica. Cero leads perdidos." },
  { n: "PIEZA 04", t: "Gestion de citas", d: "Confirmacion, recordatorio y reagendamiento con Google Calendar." },
  { n: "PIEZA 05", t: "Secuencias de email", d: "Correos automaticos post-cita, post-compra y de recuperacion." },
  { n: "PIEZA 06", t: "Reporte semanal", d: "Metricas en tu bandeja cada lunes. Sin abrir ninguna hoja de calculo." },
  { n: "PIEZA 07", t: "Documentacion", d: "Manual de operacion, grabacion explicativa y 30 dias de soporte." },
  { n: "TODAS", t: "Incluidas en cada plan", d: "La diferencia entre planes es el alcance, no que piezas se entregan." },
];

const casos = [
  {
    sector: "CASO 01 · SALON DE BELLEZA · MADRID",
    h: "De agenda en papel a sistema que confirma, recuerda y registra solo.",
    desc: "Confirmaciones manuales, citas perdidas por olvido, cero historial de cliente. Post-implementacion: formulario a Calendar a confirmacion automatica a recordatorio 24h a registro en Sheets.",
    stats: [
      { n: "0", l: "confirmaciones manuales desde el dia 1" },
      { n: "6h", l: "recuperadas por semana" },
      { n: "14d", l: "a flujos en produccion" },
    ],
  },
  {
    sector: "CASO 02 · CONSULTORIA · ESPANA",
    h: "6 meses con leads que nadie procesaba a tiempo. Reconstruccion en una semana.",
    desc: "Formulario sin integracion, respuestas con dias de retraso. Post-implementacion: formulario a notificacion inmediata a bienvenida automatica a secuencia 3 correos a CRM Sheets.",
    stats: [
      { n: "<5m", l: "respuesta a cada nuevo lead" },
      { n: "3", l: "correos automaticos por contacto" },
      { n: "7d", l: "a sistema operativo" },
    ],
  },
];

const planes = [
  {
    badge: "SPRINT",
    name: "Un flujo",
    price: "300 EUR",
    period: "entrega unica · pago al cerrar",
    feat: false,
    items: ["Un proceso critico automatizado", "Diagnostico previo incluido", "Entrega en 48-72 horas", "30 dias de soporte"],
  },
  {
    badge: "SISTEMA COMPLETO",
    name: "Operacion entera",
    price: "600 EUR/mes",
    period: "2 meses por adelantado · sin permanencia",
    feat: true,
    items: ["Las 7 piezas implementadas", "CRM + captacion + citas + reportes", "Flujos en produccion en 14 dias", "Devolucion integra 60 dias"],
  },
  {
    badge: "AUDITORIA",
    name: "Diagnostico",
    price: "Gratis",
    period: "45 min · videollamada · sin compromiso",
    feat: false,
    items: ["Revision de tu operacion actual", "Fugas cuantificadas en horas", "Hoja de ruta priorizada", "Sin obligacion de contratar"],
  },
];

export default function Landing3937() {
  return (
    <main className="cpage">
      <section className="chero">
        <Nav />
        <div className="chero-grid">
          <div>
            <span className="cbadge">AUTOMATIZACION DE PROCESOS · IMPLEMENTACION EN PRODUCCION</span>
            <h1>
              Tu negocio puede trabajar sin que tu estes <span className="o">mirando</span>.
            </h1>
            <p className="tag">
              Diseno e implemento los flujos que eliminan el trabajo repetitivo. Make + Google. 14 dias
              a produccion. Devolucion integra si no entregamos.
            </p>
            <div className="cincludes">
              <div className="cinc"><span className="k">+</span>14 dias de diagnostico a flujo en produccion</div>
              <div className="cinc"><span className="k">+</span>~8h recuperadas por semana</div>
              <div className="cinc"><span className="k">+</span>60 dias de devolucion integra si no entregamos</div>
            </div>
            <div className="ctas" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/cursos" className="btn-primary">Hablar con nosotros &#9656;</Link>
              <Link href="/cursos" className="btn-ghost">Auditoria gratuita</Link>
            </div>
          </div>
          <div className="cmock">
            <div className="cv">
              <span className="cbadge" style={{ margin: 0 }}>AURYONTECH</span>
              <div className="t">Operacion automatizada</div>
              <div className="s">Make + Google · 14 dias</div>
            </div>
            <div className="ch-row"><span className="b">01</span>Diagnostico de tu operacion</div>
            <div className="ch-row"><span className="b">02</span>CRM + captacion en Sheets</div>
            <div className="ch-row"><span className="b">03</span>Citas y recordatorios</div>
            <div className="ch-row"><span className="b">04</span>Reporte semanal automatico</div>
            <div className="ch-row"><span className="b">05</span>Soporte y documentacion</div>
          </div>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Cuatro fugas · operacion manual</span>
            <h2 className="h2">
              Tu negocio pierde tiempo <span className="o">todos los dias</span>.
            </h2>
          </Reveal>
          <Reveal>
            <div className="vrows">
              {fugas.map((f) => (
                <div className="vrow" key={f.tag}>
                  <div className="vn">{f.n}</div>
                  <div className="vc">
                    <h3>{f.tag}</h3>
                    <p>{f.txt}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="csec" style={{ background: "#080E1A" }}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Siete piezas · una arquitectura</span>
            <h2 className="h2">
              Lo que construimos en cada <span className="o">implementacion</span>.
            </h2>
          </Reveal>
          <Reveal className="clearn">
            {piezas.map((p) => (
              <div className="lcard" key={p.n}>
                <div className="ln" style={{ fontSize: "0.9rem" }}>{p.n}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Deployments en produccion</span>
            <h2 className="h2">
              Casos <span className="o">verificables</span>.
            </h2>
            <p className="lede">Negocios reales. Resultados medibles. Sin capturas inventadas.</p>
          </Reveal>
          <Reveal className="clearn">
            {casos.map((c) => (
              <div className="lcard" key={c.sector}>
                <span className="tg">{c.sector}</span>
                <h3 style={{ marginTop: 14, fontStyle: "italic" }}>{c.h}</h3>
                <p>{c.desc}</p>
                <div style={{ display: "flex", gap: 24, marginTop: 18, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
                  {c.stats.map((s) => (
                    <div key={s.l}>
                      <div className="ln" style={{ color: "#fff", fontSize: "1.6rem", marginBottom: 4 }}>{s.n}</div>
                      <div style={{ fontSize: "0.72rem", color: "var(--color-mut)", lineHeight: 1.4 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="csec" style={{ background: "#080E1A" }}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Tarifa fija · sin % sobre nada</span>
            <h2 className="h2">
              Precios <span className="o">publicos</span>.
            </h2>
            <p className="lede">Sin setup fee. Sin contrato anual. Sin letra pequena.</p>
          </Reveal>
          <Reveal>
           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {planes.map((p) => (
              <div
                key={p.name}
                style={{
                  border: p.feat ? "1px solid rgba(255,90,31,.4)" : "1px solid var(--line)",
                  borderRadius: 14,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  background: p.feat
                    ? "linear-gradient(180deg,rgba(255,90,31,.08),rgba(255,255,255,.005))"
                    : "linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.005))",
                }}
              >
                <span className="tg" style={{ alignSelf: "flex-start", marginBottom: 14 }}>{p.badge}</span>
                <div className="ct" style={{ fontFamily: "var(--font-disp)", fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>{p.name}</div>
                <div className="cprice" style={{ margin: "6px 0 4px" }}>
                  <span className="n" style={{ fontSize: "2.2rem" }}>{p.price}</span>
                </div>
                <div className="cd" style={{ fontSize: "0.78rem", color: "var(--color-mut)", marginBottom: 18 }}>{p.period}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                  {p.items.map((it) => (
                    <li key={it} style={{ fontSize: "0.85rem", color: "#B7C0D0", display: "flex", gap: 8 }}>
                      <span className="o" style={{ color: "var(--color-orange)" }}>&#8594;</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <Link href="/cursos" className={p.feat ? "btn-primary" : "btn-ghost"} style={{ marginTop: 20, justifyContent: "center" }}>
                  {p.price === "Gratis" ? "Agendar ahora" : "Hablar con nosotros"}
                </Link>
              </div>
            ))}
           </div>
          </Reveal>
        </div>
      </section>

      <section className="cta">
        <Reveal className="wrap cta-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cta-img" src={withBase("/img/Aury-Saludando.webp")} alt="Aury saludando" />
          <h2 className="h2">
            Cuantas horas llevas haciendo lo que podria hacer un <span className="o">flujo</span>?
          </h2>
          <p className="lede">
            La auditoria es gratuita. En 45 minutos te digo exactamente que automatizar primero y cuanto
            tiempo recuperarias.
          </p>
          <div className="cta-btns">
            <Link href="/cursos" className="btn-primary">Escribir por WhatsApp &#9656;</Link>
            <Link href="/cursos" className="btn-ghost">Agendar auditoria gratuita</Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
