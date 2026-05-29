import Reveal from "./Reveal";

const quotes = [
  { av: "MR", nm: "María R.", rl: "Responsable operaciones · Retail", q: "Dejamos de registrar ventas a mano. Ahora todo entra automáticamente a Google Sheets y tenemos reportes al instante." },
  { av: "JL", nm: "Jorge L.", rl: "Director de operaciones · Consultoría", q: "Automatizaron el envío de notificaciones internas y la limpieza de datos. Ahorramos horas cada semana desde el primer mes." },
  { av: "CB", nm: "Carmen B.", rl: "Dueña · Salón de belleza", q: "Teníamos miedo de que fuera muy técnico para nosotras. Aury lo explicó todo en pasos simples y ya tenemos el flujo activo." },
];

export default function Testimonials() {
  return (
    <section className="testi">
      <div className="wrap">
        <Reveal className="testi-head">
          <span className="eyebrow">
            <span className="sq" />
            Resultados reales
          </span>
          <h2 className="h2">Lo que dicen quienes ya trabajan con AuryOnTech.</h2>
        </Reveal>
        <Reveal className="testi-grid">
          {quotes.map((t) => (
            <div className="quote" key={t.av}>
              <div className="stars">★★★★★</div>
              <p>&ldquo;{t.q}&rdquo;</p>
              <div className="who">
                <span className="av">{t.av}</span>
                <div>
                  <div className="nm">{t.nm}</div>
                  <div className="rl">{t.rl}</div>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
