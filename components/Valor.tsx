import Reveal from "./Reveal";

const rows = [
  { n: "01", h: "Más tiempo para lo que importa", p: "Las tareas repetitivas (responder emails básicos, registrar datos, enviar recordatorios) ocupan horas cada semana. Automatizarlas te devuelve esas horas para vender, crear o descansar." },
  { n: "02", h: "Menos errores humanos", p: "Una vez configurado, un flujo no se olvida, no se confunde de cliente y no manda dos veces el mismo email. Hace lo mismo cada vez, exactamente igual." },
  { n: "03", h: "Tu negocio escala sin contratar", p: "Procesar 10 pedidos al día o 100 puede ser exactamente el mismo trabajo para un flujo bien hecho. Creces sin que tu carga operativa crezca contigo." },
];

export default function Valor() {
  return (
    <section className="valor" id="valor">
      <div className="wrap">
        <Reveal className="valor-head">
          <span className="eyebrow">
            <span className="sq" />
            Por qué automatizar
          </span>
          <h2 className="h2">
            No es magia. Es tiempo que <span className="o">recuperas</span>.
          </h2>
          <p className="lede">
            Los pequeños negocios que automatizan no se hacen ricos de la noche a
            la mañana. Pero sí dejan de perder horas en las mismas tareas
            repetitivas todos los días.
          </p>
        </Reveal>
        <Reveal className="vrows">
          {rows.map((r) => (
            <div className="vrow" key={r.n}>
              <span className="vn">{r.n}</span>
              <div className="vc">
                <h3>{r.h}</h3>
                <p>{r.p}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
