import { withBase } from "@/lib/base";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Cierra con IA sin perder tu estilo · AuryOnTech",
  description:
    "Curso gratuito. El sistema para cerrar mas con los leads que ya tienes, usando IA para escribir mejor y hacer seguimiento sin presionar.",
};

const includes = [
  "El mapa completo de la conversacion de venta, que decir en cada etapa",
  "Primer contacto, seguimiento y propuesta con prompts copiables",
  "Las 7 objeciones mas frecuentes con respuesta lista antes de que aparezcan",
  "Sistema de revision semanal conectado a tu CRM de Sheets",
  "Solo necesitas ChatGPT gratuito y los leads que ya tienes",
];

const datos = [
  { n: "80%", l: "de las ventas requieren entre 5 y 12 contactos para cerrarse" },
  { n: "44%", l: "de los negocios abandona el seguimiento despues del primer intento" },
  { n: "80%", l: "menos probabilidad de cerrar si tardas mas de 5 minutos en responder" },
  { n: "0 euros", l: "cuesta reactivar un lead que ya mostro interes. Es el mas barato que tienes." },
];

const bad = [
  "Improvisar cada mensaje desde cero",
  "Seguimiento que presiona o que desaparece",
  "Propuesta generica que nadie lee hasta el final",
  "Objeciones que te bloquean y no sabes responder",
  "Leads que se enfrian porque se te olvidan",
];

const good = [
  "Prompts copiables para cada momento del pipeline",
  "Cadencia exacta que acompana sin presionar",
  "Propuesta con 5 bloques personalizada en 5 minutos",
  "7 respuestas preparadas antes de que aparezcan",
  "Revision del miercoles de 15 minutos que no deja escapar nada",
];

const forw = [
  { k: "A", t: "Tienes leads entrando pero el porcentaje de cierre es menor de lo que deberia", d: "No es el producto. Es el sistema. Los prompts de este curso te dan el mensaje correcto en el momento correcto para cada etapa del pipeline." },
  { k: "B", t: "Haces seguimiento pero no sabes cuando parar ni que decir en el segundo mensaje", d: "El modulo 3 resuelve eso: la cadencia exacta, los tres mensajes del lo pienso y como reactivar leads frios sin parecer desesperado." },
  { k: "C", t: "Usas el CRM de Sheets y quieres que esos leads se conviertan con un proceso claro", d: "El sistema de revision del miercoles conecta directamente con tu CRM. Un proceso, dos herramientas, cero leads perdidos por olvido." },
];

const modules = [
  { n: "01", t: "Por que se enfrian los leads que mostraron interes", p: "El momento exacto donde se rompe la venta, los 3 errores de comunicacion mas frecuentes y el mapa de las 5 etapas de cualquier conversacion.", tag: "3 lecciones · auditoria" },
  { n: "02", t: "El primer contacto que abre puertas", p: "El mensaje que consigue respuesta en lugar de vender, como personalizar con IA en 60 segundos y el sistema de respuesta rapida.", tag: "3 lecciones · prompts" },
  { n: "03", t: "El seguimiento que cierra sin presionar", p: "La cadencia exacta con intervalos, los 3 mensajes del lo pienso y como reactivar un lead frio sin parecer desesperado.", tag: "3 lecciones · plantillas" },
  { n: "04", t: "La propuesta que dice si", p: "Los 5 bloques que hacen que el lead se reconozca en la propuesta, como personalizarla con IA en 5 minutos y las 7 objeciones con respuesta.", tag: "2 lecciones · prompts" },
  { n: "05", t: "El sistema semanal de cierre", p: "La revision del miercoles de 15 minutos, como conectarlo con tu CRM de Sheets y la actividad final: 5 conversaciones abiertas con seguimiento.", tag: "2 lecciones · sistema" },
];

const entregables = [
  { n: "01", t: "Mensaje de primer contacto personalizado", d: "Escrito con IA para tu negocio y tu forma de comunicarte." },
  { n: "02", t: "Secuencia de 3 mensajes para el lo pienso", d: "Con los intervalos exactos y lo que anadir en cada uno." },
  { n: "03", t: "Plantilla de reactivacion de leads frios", d: "Para los que llevan semanas en silencio en tu CRM." },
  { n: "04", t: "Propuesta con los 5 bloques", d: "Estructurada, personalizada y lista para enviar en 5 minutos." },
  { n: "05", t: "Respuestas a las 7 objeciones mas frecuentes", d: "Preparadas antes de que aparezcan, adaptadas a tu sector." },
  { n: "06", t: "Cadencia de seguimiento definida", d: "Cuando escribir, que decir y cuando parar, sin improvisacion." },
  { n: "07", t: "Sistema de revision semanal del pipeline", d: "El proceso de 15 minutos del miercoles conectado a tu CRM de Sheets para que ningun lead se enfrie por olvido." },
];

const chapters = [
  { num: "1.1", t: "El momento exacto en que pierdes una venta", d: "Los tres puntos de ruptura mas frecuentes y por que casi nunca es en el cierre donde se pierde la venta.", tag: "Auditoria" },
  { num: "1.2", t: "Los 3 errores de comunicacion que enfrian cualquier conversacion", d: "Hablar antes de escuchar, dar el precio sin contexto y el seguimiento que no anade nada. Con ejemplos reales.", tag: "Quiz" },
  { num: "1.3", t: "El mapa de la conversacion de venta", d: "Las 5 etapas de cualquier conversacion de venta y que objetivo tiene cada una para no saltarte pasos.", tag: "Quiz" },
  { num: "2.1", t: "El mensaje de presentacion que no suena a vendedor", d: "Estructura de 3 elementos, prompt completo y actividad: enviar el primer mensaje a un lead real hoy.", tag: "Prompt + Quiz" },
  { num: "2.2", t: "Como usar IA para personalizar sin perder tu voz", d: "Los 3 niveles de personalizacion y el prompt para adaptar cualquier mensaje a un lead concreto en menos de 2 minutos.", tag: "Prompt copiable" },
  { num: "2.3", t: "El sistema de respuesta rapida", d: "Como responder en menos de 5 minutos sin sonar a bot. Plantillas guardadas en WhatsApp Business y en email.", tag: "Quiz" },
  { num: "3.1", t: "Cuando escribir, que decir y cuando parar", d: "La cadencia exacta por etapa, la regla de los 3 seguimientos y el prompt para el seguimiento post-propuesta.", tag: "Prompt copiable" },
  { num: "3.2", t: "El seguimiento despues del lo pienso", d: "Los 3 mensajes exactos para el momento mas critico del pipeline. Con intervalos y prompts para cada uno.", tag: "3 prompts + Quiz" },
  { num: "3.3", t: "Como reactivar un lead frio sin parecer desesperado", d: "Las 3 razones validas para volver a escribir y el prompt de reactivacion para leads en silencio.", tag: "Prompt copiable" },
  { num: "4.1", t: "Estructura de una propuesta que convierte", d: "Los 5 bloques que hacen que el lead se reconozca en la propuesta y el prompt completo para generarla en 5 minutos.", tag: "Prompt + Quiz" },
  { num: "4.2", t: "Las 7 objeciones mas frecuentes y como responderlas", d: "Respuestas preparadas para precio, lo tengo que pensar, no es el momento, ya trabajo con alguien y tres mas.", tag: "7 respuestas + prompt" },
  { num: "5.1", t: "La revision del miercoles", d: "El proceso de 15 minutos para revisar el pipeline, priorizar los urgentes y actualizar el CRM sin que nada se escape.", tag: "Sistema + Quiz" },
  { num: "5.2", t: "Conecta este sistema con tu CRM y cierra la semana", d: "El flujo completo integrado y la actividad final: 5 conversaciones abiertas con seguimiento activo.", tag: "Actividad final" },
];

const bio = [
  "Empezo vendiendo pescado en la Antartida gestionando todo a mano. Cuando descubrio la automatizacion y la IA, su negocio cambio por completo. Hoy ayuda a negocios de todo tipo a usar la tecnologia de forma practica y sin tecnicismos.",
  "Este sistema de cierre nacio de la necesidad real de no perder leads por falta de seguimiento. No tecnicas de cierre agresivas: un proceso claro que respeta al cliente y cierra mas.",
];

const faq = [
  { q: "Necesito haber hecho el curso de prompts de AuryOnTech?", a: "No es obligatorio, pero si recomendable. El curso de prompts te da la tecnica para hablarle a la IA. Este curso da los prompts ya hechos para cada momento del proceso de venta. Si no has hecho el de prompts, puedes empezar aqui igualmente: los prompts estan listos para copiar y usar." },
  { q: "Funciona si vendo servicios o solo para productos?", a: "Funciona mejor para servicios, consultoria y negocios donde la venta implica una conversacion. Si vendes productos de ticket bajo sin conversacion previa, el modulo de propuestas no aplica directamente. Los modulos de primer contacto y seguimiento si aplican en cualquier caso." },
  { q: "En que se diferencia de un curso de ventas normal?", a: "Los cursos de ventas te ensenan tecnicas de persuasion y cierre. Este te da el sistema operativo completo: que decir en cada etapa, con prompts de IA copiables para cada mensaje. No hay teoria de ventas ni psicologia de la persuasion. Hay procesos, plantillas y un sistema de revision semanal." },
  { q: "Cuantos leads necesito para empezar?", a: "Con 5 leads activos o pendientes es suficiente para completar la actividad final del curso. Si no tienes leads todavia, primero haz el curso Publica con IA para que lleguen. Este curso empieza donde ese termina." },
  { q: "Necesito el CRM de Google Sheets para hacer este curso?", a: "No. El sistema de revision del miercoles funciona con cualquier forma de organizar tus leads: una lista en papel, un Excel, tu WhatsApp. Si tienes el CRM del curso anterior, la integracion es directa y mas potente. Pero el sistema funciona sin el." },
  { q: "Por que es gratis?", a: "En AuryOnTech hay cursos gratuitos y servicios de consultoria de pago. Este es gratuito porque queremos que veas el valor antes de invertir. Si el sistema funciona para ti, ya veras si quieres ir mas lejos. Sin correos de venta agresivos ni urgencias artificiales." },
];

export default function LandingVende() {
  return (
    <main className="cpage">
      <section className="chero">
        <Nav />
        <div className="chero-grid">
          <div>
            <span className="cbadge">Curso gratuito · 5 Modulos · Cierre con IA</span>
            <h1>
              Cierra con IA. <span className="o">Sin perder tu estilo</span>.
            </h1>
            <p className="tag">
              No es un curso de ventas ni de ChatGPT. Es el sistema para cerrar mas con los leads que ya
              tienes, usando IA para escribir mejor, responder mas rapido y hacer seguimiento sin
              presionar.
            </p>
            <div className="cincludes">
              {includes.map((it) => (
                <div className="cinc" key={it}>
                  <span className="k">&#10003;</span>
                  {it}
                </div>
              ))}
            </div>
            <div className="cprice">
              <span className="n">Gratis</span>
              <span className="d">Para siempre<br />Sin suscripcion</span>
            </div>
            <Link href="/cursos" className="btn-primary">Quiero cerrar mas leads &#9656;</Link>
          </div>
          <div className="cmock">
            <div className="cv">
              <span className="cbadge" style={{ margin: 0 }}>conversacion_lead</span>
              <div className="t">Propuesta lista en 5 minutos</div>
              <div className="s">personalizada con IA</div>
            </div>
            <div className="ch-row"><span className="b">01</span>El mapa de la conversacion de venta</div>
            <div className="ch-row"><span className="b">02</span>Primer contacto que abre puertas</div>
            <div className="ch-row"><span className="b">03</span>Seguimiento que cierra sin presionar</div>
            <div className="ch-row"><span className="b">04</span>La propuesta que dice si</div>
            <div className="ch-row"><span className="b">05</span>Sistema semanal de cierre</div>
          </div>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Los numeros detras del problema</span>
            <h2 className="h2">
              La venta no la pierde quien tiene <span className="o">el peor producto</span>.
            </h2>
          </Reveal>
          <Reveal>
           <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {datos.map((d) => (
              <div className="lcard" key={d.l}>
                <div className="ln" style={{ color: "var(--color-cyan)" }}>{d.n}</div>
                <p>{d.l}</p>
              </div>
            ))}
           </div>
          </Reveal>
        </div>
      </section>

      <section className="csec" style={{ background: "#080E1A" }}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Por que este curso es distinto</span>
            <h2 className="h2">
              No mas improvisacion. <span className="o">Un sistema para cada momento</span>.
            </h2>
            <p className="lede">
              Los cursos de ventas te ensenan tecnicas. Los de IA te ensenan a usar la herramienta. Este
              te da el sistema completo para cada mensaje, en cada etapa, con tu voz.
            </p>
          </Reveal>
          <Reveal>
           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div className="lcard" style={{ borderColor: "rgba(255,90,31,.3)" }}>
              <h3 style={{ color: "var(--color-orange-l)" }}>Sin este sistema</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
                {bad.map((it) => (
                  <li key={it} style={{ display: "flex", gap: 10, fontSize: "0.88rem", color: "#9AA3B3" }}>
                    <span style={{ color: "var(--color-orange)" }}>&#10005;</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lcard" style={{ borderColor: "rgba(90,169,230,.3)" }}>
              <h3 style={{ color: "var(--color-cyan-l)" }}>Con este sistema</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
                {good.map((it) => (
                  <li key={it} style={{ display: "flex", gap: 10, fontSize: "0.88rem", color: "#B7C0D0" }}>
                    <span style={{ color: "var(--color-cyan)" }}>&#10003;</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
           </div>
          </Reveal>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Para quien es</span>
            <h2 className="h2">
              Para ese espacio entre <span className="o">el interes y el si</span>.
            </h2>
          </Reveal>
          <Reveal className="clearn">
            {forw.map((f) => (
              <div className="lcard" key={f.k}>
                <div className="ln">{f.k}</div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="csec" style={{ background: "#080E1A" }}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Lo que vas a dominar</span>
            <h2 className="h2">
              Cinco modulos. Un resultado: <span className="o">mas cierres con menos esfuerzo</span>.
            </h2>
          </Reveal>
          <Reveal className="clearn">
            {modules.map((m) => (
              <div className="lcard" key={m.n}>
                <div className="ln">{m.n}</div>
                <h3>{m.t}</h3>
                <p>{m.p}</p>
                <span className="tg">{m.tag}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Los 7 entregables</span>
            <h2 className="h2">
              Al terminar no tienes conocimiento. <span className="o">Tienes conversaciones abiertas</span>.
            </h2>
          </Reveal>
          <Reveal className="cchapters">
            {entregables.map((e) => (
              <div className="cchap" key={e.n}>
                <span className="cn">{e.n}</span>
                <div>
                  <div className="ct">{e.t}</div>
                  <div className="cd">{e.d}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="csec" style={{ background: "#080E1A" }}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Contenido del curso</span>
            <h2 className="h2">Las 13 lecciones, modulo por modulo.</h2>
          </Reveal>
          <Reveal className="cchapters">
            {chapters.map((c) => (
              <div className="cchap" key={c.num}>
                <span className="cn">{c.num}</span>
                <div>
                  <div className="ct">{c.t}</div>
                  <div className="cd">{c.d}</div>
                  <span className={`ctag ${c.tag.toLowerCase().includes("quiz") ? "quiz" : "free"}`}>{c.tag}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="cinstr">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="pic" src={withBase("/img/Aury-Estudiando.webp")} alt="Aury" />
            <div>
              <span className="cbadge">Tu instructora · Aury</span>
              {bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="csec" style={{ background: "#080E1A" }}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Preguntas frecuentes</span>
            <h2 className="h2">Lo que suelen preguntar antes de apuntarse.</h2>
          </Reveal>
          <Reveal className="cfaq">
            {faq.map((f, i) => (
              <details key={i} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cta">
        <Reveal className="wrap cta-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cta-img" src={withBase("/img/Aury-Saludando.webp")} alt="Aury saludando" />
          <h2 className="h2">
            Los leads que tienes ahora <span className="o">merecen una respuesta mejor</span>.
          </h2>
          <p className="lede">El sistema completo para cerrar mas sin cambiar tu forma de comunicarte.</p>
          <div className="cta-btns">
            <Link href="/cursos" className="btn-primary">Empezar el curso ahora &#9656;</Link>
            <Link href="/cursos" className="btn-ghost">Ver todos los cursos</Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
