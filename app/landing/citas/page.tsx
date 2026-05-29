import { withBase } from "@/lib/base";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Recordatorios automaticos de citas · AuryOnTech",
  description:
    "Curso gratuito. Make revisa tu Google Calendar cada manana y manda recordatorios a tus clientes sin que toques nada.",
};

const includes = [
  "20 lecciones interactivas",
  "Make + Google Calendar + Gmail, todo gratis",
  "Flujo en produccion al terminar",
  "Quizzes y retos por modulo",
  "Certificado de finalizacion incluido",
];

const learn = [
  { t: "El problema que resuelve esto", p: "Por que el recordatorio manual depende de que te acuerdes y escala fatal en cuanto pasas de 3 clientes." },
  { t: "Como funciona el flujo", p: "Tres piezas que trabajan juntas: Google Calendar busca eventos, Iterator recorre invitados, Gmail envia el recordatorio." },
  { t: "Prepara Google Calendar", p: "Como crear eventos con titulo, hora, ubicacion e invitados para que el flujo tenga todo lo que necesita." },
  { t: "Construye el flujo en Make", p: "Search Events, Iterator sobre Attendees, filtro de invitados externos y el modulo de Gmail campo por campo." },
  { t: "Programa y prueba", p: "Configura la ejecucion diaria a las 8am, corre el flujo con Run once y verifica el correo recibido." },
  { t: "Personaliza y expande", p: "Adapta el correo al tono de tu negocio y conoce la variante que te avisa a ti en lugar de al cliente." },
];

const chapters = [
  { num: "M1", t: "Que vas a construir", d: "El problema que resuelve, como funciona el flujo y lo que necesitas (todo gratis).", tag: "Gratis" },
  { num: "M2", t: "Crea tu cuenta en Make", d: "Registro, primer acceso y reconocer las secciones del dashboard que usaras.", tag: "Gratis" },
  { num: "M3", t: "Prepara Google Calendar", d: "Crear eventos correctamente, agregar al cliente como invitado y dejar un evento de prueba.", tag: "Gratis" },
  { num: "M4", t: "Construye el flujo", d: "Search Events, Iterator, filtro de invitados externos y configuracion del modulo Gmail.", tag: "Quiz del modulo 4" },
  { num: "M5", t: "Configura el horario", d: "Programa el escenario para que corra una vez al dia a las 8am automaticamente.", tag: "Gratis" },
  { num: "M6", t: "Prueba y activa", d: "Run once, leer los numeros verdes, resolver errores comunes del servidor EU y activar.", tag: "Quiz del modulo 6" },
  { num: "M7", t: "Personaliza y expande", d: "Personaliza el mensaje y conoce la variante de recordatorio al organizador.", tag: "Gratis" },
  { num: "M8", t: "Lo lograste", d: "Tu automatizacion corriendo: cada manana a las 8am Make manda los recordatorios solo.", tag: "Gratis" },
];

const bio = [
  "Empezo vendiendo pescado en la Antartida y gestionando todo a mano. Cuando descubrio la automatizacion, su negocio cambio por completo. Hoy ayuda a negocios de todo tipo a dar sus primeros pasos con Make.",
  "No tiene un master en tecnologia. Tiene experiencia real resolviendo problemas reales. Por eso sus cursos son directos, practicos y sin relleno.",
];

const faq = [
  { q: "Son todas las herramientas gratis?", a: "Si. Make plan Free, Google Calendar y Gmail son completamente gratuitos para el volumen que necesitas en este curso. El plan Free incluye 1.000 operaciones al mes y este flujo consume muy pocas." },
  { q: "Necesito conocimientos previos?", a: "No. El curso te lleva paso a paso desde crear tu cuenta de Make hasta tener el flujo activo. Si ya hiciste otro curso de automatizacion tendras ventaja, pero no es necesario." },
  { q: "Funciona en el servidor europeo de Make?", a: "Si. El curso usa parseDate + formatDate en lugar de endOfDay y startOfDay, que no existen en el servidor EU. Funciona igual en cualquier servidor." },
  { q: "El correo no le llega al cliente, que hago?", a: "Si Make muestra los modulos en verde, el correo se envio. Revisa Spam, Promociones y Social. Los correos automaticos suelen caer en Promociones la primera vez." },
  { q: "Que pasa cuando termino?", a: "Tienes un escenario en Make que cada manana a las 8am revisa tu calendario, detecta los eventos de manana y manda un recordatorio a cada cliente invitado. Para siempre, sin intervencion manual." },
];

export default function LandingCitas() {
  return (
    <main className="cpage">
      <section className="chero">
        <Nav />
        <div className="chero-grid">
          <div>
            <span className="cbadge">8 Modulos · 20 Lecciones · Gratis</span>
            <h1>
              Recordatorios automaticos de <span className="o">citas</span>.
            </h1>
            <p className="tag">
              Make revisa tu Google Calendar cada manana a las 8am, encuentra los eventos de manana y
              manda un correo a cada cliente invitado. Sin que tu hagas nada.
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
              <span className="d">Para siempre<br />Acceso inmediato</span>
            </div>
            <Link href="/cursos" className="btn-primary">Quiero empezar ahora &#9656;</Link>
          </div>
          <div className="cmock">
            <div className="cv">
              <span className="cbadge" style={{ margin: 0 }}>AURYONTECH</span>
              <div className="t">Recordatorios de citas</div>
              <div className="s">Calendar a Iterator a Gmail</div>
            </div>
            {chapters.slice(0, 5).map((c) => (
              <div className="ch-row" key={c.num + c.t}>
                <span className="b">{c.num}</span>
                {c.t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Lo que vas a aprender</span>
            <h2 className="h2">
              Al terminar tienes un flujo <span className="o">funcionando</span>, no solo apuntes.
            </h2>
          </Reveal>
          <Reveal className="clearn">
            {learn.map((l, i) => (
              <div className="lcard" key={l.t}>
                <div className="ln">{String(i + 1).padStart(2, "0")}</div>
                <h3>{l.t}</h3>
                <p>{l.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="csec" style={{ background: "#080E1A" }}>
        <div className="wrap">
          <Reveal className="head">
            <h2 className="h2">Contenido del curso, modulo por modulo.</h2>
          </Reveal>
          <Reveal className="cchapters">
            {chapters.map((c) => (
              <div className="cchap" key={c.num + c.t}>
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
            <h2 className="h2">Lo que suelen preguntar antes de empezar.</h2>
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
            Empieza hoy. Es <span className="o">gratis</span>.
          </h2>
          <p className="lede">Acceso inmediato. Aprendes haciendo, con tu propio Google Calendar.</p>
          <div className="cta-btns">
            <Link href="/cursos" className="btn-primary">Empezar el curso gratuito &#9656;</Link>
            <Link href="/cursos" className="btn-ghost">Ver todos los cursos</Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
