import Link from "next/link";
import Reveal from "./Reveal";

const steps = [
  { n: "01", t: "Cliente agenda una cita", k: "Inicio" },
  { n: "02", t: "Confirmación enviada automáticamente", k: "Email" },
  { n: "03", t: "Recordatorio 24h antes de la cita", k: "WhatsApp" },
  { n: "04", t: "Post-servicio: solicitar valoración", k: "Seguimiento" },
  { n: "05", t: "Historial actualizado en Sheets", k: "Registro" },
];

export default function FlowDemo() {
  return (
    <section className="flow">
      <div className="wrap flow-grid">
        <Reveal className="flow-copy">
          <h2 className="h2">
            Así se ve un flujo ejecutándose <span className="c">en tiempo real</span>.
          </h2>
          <p className="lede">
            Cada vez que un cliente agenda una cita, este flujo se activa solo.
            Sin intervención humana. Sin errores. Aury lo gestiona todo mientras
            tú te dedicas a tu trabajo.
          </p>
          <ul className="flow-pts">
            <li><span className="chk">✓</span>Funciona 24 horas al día, 7 días a la semana</li>
            <li><span className="chk">✓</span>Se adapta a cualquier herramienta que ya uses</li>
            <li><span className="chk">✓</span>Lo aprendes en el primer curso gratuito</li>
          </ul>
          <div className="ctas" style={{ marginTop: 30 }}>
            <Link href="/cursos" className="btn-primary">
              Quiero aprender a hacerlo ▸
            </Link>
          </div>
        </Reveal>
        <Reveal className="terminal">
          <div className="term-bar">
            <span className="l">⎯ Flujo activo · Gestión de citas</span>
            <span className="st">
              <span className="d" />
              RUNNING
            </span>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="n">{s.n}</span>
                <div className="ds">
                  <div className="t">{s.t}</div>
                  <div className="k">{s.k}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="term-foot">
            <div className="lab">Progreso del flujo · 100%</div>
            <div className="progress">
              <i />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
