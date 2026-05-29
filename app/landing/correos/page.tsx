import { withBase } from "@/lib/base";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Enviar correos automaticamente desde Sheets · AuryOnTech",
  description:
    "Curso gratuito. Convierte una hoja de Google Sheets en el cerebro de tu comunicacion. 16 lecciones, flujo en produccion al terminar.",
};

const includes = [
  "16 lecciones interactivas",
  "Quizzes y retos al final de cada modulo",
  "Flujo en produccion al terminar",
  "8 casos de uso reales para tu negocio",
  "Certificado de finalizacion incluido",
];

const forYes = [
  { k: "A", t: "Mandas el mismo correo una y otra vez", d: "Confirmaciones, bienvenidas, recordatorios, accesos. Si copias y pegas algo mas de tres veces a la semana, este flujo te lo automatiza para siempre." },
  { k: "B", t: "Tu negocio vive en Google Sheets", d: "Pedidos, clientes, leads, agenda, reservas. Si lo tienes en una hoja, ya tienes el 80% del trabajo hecho. Solo falta convertir esa hoja en el cerebro de tu comunicacion." },
  { k: "C", t: "Quieres aprender automatizacion con un caso real, no con teoria", d: "Este flujo es la columna vertebral de la mayoria de los sistemas automatizados del mundo. Aprenderlo bien te abre la puerta a todo lo demas." },
];

const forNo = [
  "Si nunca has tocado Google Sheets ni Gmail (mejor empieza por nuestro curso de 30 min)",
  "Si necesitas envios masivos tipo newsletter (para eso usa Mailchimp o Brevo)",
  "Si ya construyes flujos avanzados con webhooks, APIs y filtros complejos",
];

const learn = [
  { t: "La estructura exacta de Google Sheets que Make necesita", p: "Donde van los encabezados, como nombrar las columnas y por que cualquier celda mal puesta rompe el mapeo.", tag: "Modulos 1-2 · 5 lecciones" },
  { t: "Como construir el escenario en Make de cero", p: "Trigger Watch New Rows, configuracion del modulo, conexion con Google y los detalles que la documentacion oficial no explica.", tag: "Modulo 3 · 2 lecciones + reto" },
  { t: "Mapear variables de Sheets a campos de Gmail", p: "Como arrastrar cada columna al campo correcto: que va en To, en Subject y en Body. El error mas comun y como evitarlo.", tag: "Modulo 4 · 2 lecciones + quiz" },
  { t: "Probar, activar y dejarlo corriendo para siempre", p: "Run once vs activar el escenario, que pasa cada 15 minutos en el plan free y por que nunca debes mezclar las dos cosas.", tag: "Modulo 5 · 2 lecciones + reto" },
  { t: "Personalizar correos con variables dinamicas", p: "Mezclar texto fijo y variables de la hoja para que cada correo parezca escrito a mano. Multiples destinatarios, CC, BCC.", tag: "Modulo 7 · 2 lecciones" },
  { t: "Filtros condicionales: el salto a sistemas reales", p: "Que el flujo solo envie el correo si la columna Estado dice Confirmado. La diferencia entre un flujo simple y un sistema completo.", tag: "Modulo 7 · 1 leccion + quiz" },
];

const usecases = [
  { e: "Confirmacion de pedido", d: "Cliente recibe confirmacion al instante con todos los detalles cuando agregas el pedido a tu hoja.", tag: "Tiendas · E-commerce" },
  { e: "Bienvenida a clientes", d: "Cada cliente nuevo en tu CRM recibe un correo de bienvenida con los proximos pasos.", tag: "Consultores · Servicios" },
  { e: "Seguimiento de leads", d: "Cada lead que entra al pipeline recibe un correo personalizado antes de que tu lo llames.", tag: "Ventas · Marketing" },
  { e: "Recordatorio de pago", d: "Agregas la fila con cliente y vencimiento. Make manda el recordatorio sin que tengas que acordarte.", tag: "Finanzas · Cobros" },
  { e: "Confirmacion de cita", d: "Cuando agendas y actualizas la hoja, el cliente recibe fecha, hora y ubicacion al instante.", tag: "Clinicas · Consultorios" },
  { e: "Acceso a curso o recurso", d: "Cuando alguien se registra a tu webinar o producto digital, recibe el link de acceso automaticamente.", tag: "Educacion · Creadores" },
  { e: "Notificacion al equipo", d: "Cuando un companero agrega una tarea a la hoja compartida, el equipo recibe el aviso.", tag: "Equipos · Operaciones" },
  { e: "Reporte semanal automatico", d: "El resumen de metricas de la semana se envia cada lunes sin que nadie lo prepare manualmente.", tag: "Gestion · Reportes" },
];

const bio = [
  "Empezo vendiendo pescado en la Antartida y gestionando todo a mano. Cuando descubrio la automatizacion, su negocio cambio por completo. Hoy ayuda a negocios de todo tipo a dar sus primeros pasos con Make, Zapier y n8n.",
  "No tiene un master en tecnologia. Tiene experiencia real resolviendo problemas reales. Por eso sus cursos son directos, practicos y sin relleno.",
];

const faq = [
  { q: "Es gratis de verdad? Hay algun truco?", a: "Sin truco. El curso es completamente gratuito, sin tarjeta de credito ni suscripcion oculta. Lo ofrecemos gratis porque queremos que pruebes la metodologia antes de dar el siguiente paso con nuestros cursos de pago." },
  { q: "Necesito conocimientos previos de Make?", a: "No. Si ya hiciste nuestro curso de Tu Primera Automatizacion en 30 Minutos tienes todo el contexto. Si no, no pasa nada: el curso te lleva paso a paso desde abrir el editor hasta tener el flujo activo." },
  { q: "Cuanto cuesta usar Make, Sheets y Gmail?", a: "Cero. El plan gratuito de Make incluye 1.000 operaciones al mes, mas que suficiente para este flujo. Google Sheets y Gmail son gratuitos. No necesitas tarjeta para nada." },
  { q: "El flujo se puede romper o dejar de funcionar?", a: "Una vez activo, funciona de forma estable. Lo unico que requiere atencion cada cierto tiempo es la reautorizacion de Gmail, y Make te avisa cuando se acerca la fecha. El curso te ensena que hacer." },
  { q: "Cuanto tiempo necesito para terminar el curso?", a: "Unos 45 minutos si vas siguiendo el ritmo. Puedes hacerlo en una sola sesion o distribuirlo a tu gusto: el curso guarda tu progreso automaticamente." },
  { q: "Sirve para enviar newsletters masivos?", a: "No exactamente. Este flujo es perfecto para correos transaccionales 1-a-1: confirmaciones, bienvenidas, recordatorios, accesos. Para newsletters masivos lo correcto es Mailchimp, Brevo o similar." },
];

export default function LandingCorreos() {
  return (
    <main className="cpage">
      <section className="chero">
        <Nav />
        <div className="chero-grid">
          <div>
            <span className="cbadge">8 Modulos · 16 Lecciones · Gratis</span>
            <h1>
              Enviar correos <span className="o">automaticamente</span> desde Sheets.
            </h1>
            <p className="tag">
              El flujo mas ejecutado del mundo de la automatizacion. Una hoja de Google Sheets
              convertida en el cerebro de tu comunicacion. Para siempre. Sin tocar nada.
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
            <Link href="/cursos" className="btn-primary">Quiero empezar ahora &#9656;</Link>
          </div>
          <div className="cmock">
            <div className="cv">
              <span className="cbadge" style={{ margin: 0 }}>AURYONTECH</span>
              <div className="t">Correos desde Sheets</div>
              <div className="s">Duracion total · 45 minutos</div>
            </div>
            <div className="ch-row"><span className="b">01</span>Que vas a construir</div>
            <div className="ch-row"><span className="b">02</span>Prepara tu Google Sheet</div>
            <div className="ch-row"><span className="b">03</span>Crea el escenario en Make</div>
            <div className="ch-row"><span className="b">04</span>Conecta Gmail</div>
            <div className="ch-row"><span className="b">05</span>Prueba y activa</div>
          </div>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Para quien es</span>
            <h2 className="h2">
              Si haces correos a mano, <span className="o">este curso es para ti</span>.
            </h2>
          </Reveal>
          <Reveal className="clearn">
            {forYes.map((f) => (
              <div className="lcard" key={f.k}>
                <div className="ln">{f.k}</div>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </Reveal>
          <Reveal>
           <div style={{ marginTop: 40 }}>
            <span className="eyebrow"><span className="sq" />Para quien NO es</span>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
              {forNo.map((it) => (
                <li key={it} style={{ display: "flex", gap: 12, color: "#9AA3B3", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--color-orange)" }}>&#10005;</span>
                  {it}
                </li>
              ))}
            </ul>
           </div>
          </Reveal>
        </div>
      </section>

      <section className="csec" style={{ background: "#080E1A" }}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Lo que vas a aprender</span>
            <h2 className="h2">
              Al terminar tendras un flujo activo <span className="o">enviando correos por ti</span>.
            </h2>
          </Reveal>
          <Reveal className="clearn">
            {learn.map((l, i) => (
              <div className="lcard" key={l.t}>
                <div className="ln">{String(i + 1).padStart(2, "0")}</div>
                <h3>{l.t}</h3>
                <p>{l.p}</p>
                <span className="tg">{l.tag}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />8 casos de uso reales</span>
            <h2 className="h2">
              Un solo flujo, <span className="o">ocho negocios distintos</span>.
            </h2>
            <p className="lede">
              La logica siempre es la misma: agregas una fila, Make la detecta, Gmail envia el correo
              definido en esa fila. Solo cambian las columnas y el contenido.
            </p>
          </Reveal>
          <Reveal>
           <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {usecases.map((u) => (
              <div className="lcard" key={u.e}>
                <h3>{u.e}</h3>
                <p>{u.d}</p>
                <span className="tg">{u.tag}</span>
              </div>
            ))}
           </div>
          </Reveal>
        </div>
      </section>

      <section className="csec" style={{ background: "#080E1A" }}>
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

      <section className="csec">
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
            En 45 minutos tu hoja se convierte en tu <span className="o">cerebro de comunicacion</span>.
          </h2>
          <p className="lede">
            Gratis. Sin codigo. Sin suscripciones. Solo una hoja de calculo, tu Gmail y la logica que
            usan los negocios automatizados de todo el mundo.
          </p>
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
