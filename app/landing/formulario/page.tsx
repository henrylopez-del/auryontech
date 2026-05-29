import { withBase } from "@/lib/base";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "De formulario a cliente sin tocar nada · AuryOnTech",
  description:
    "Curso gratuito. Captura cada lead de tu formulario, lo registra limpio en tu CRM de Sheets y le manda email de bienvenida automatico.",
};

const includes = [
  "8 modulos · 17 lecciones",
  "Google Forms + Make + Sheets + Gmail",
  "Sistema en produccion al terminar",
  "Quizzes y retos por modulo",
  "Certificado de finalizacion incluido",
];

const yes = [
  "Recibes entre 1 y 30 leads al dia y se te escapan por no responder a tiempo",
  "Quieres tener un CRM real, no la hoja basura que genera Forms automaticamente",
  "Estas cansado de copiar y pegar emails a leads uno por uno",
  "Trabajas con consultoria, agencias, freelance, infoproductos o servicios",
  "Quieres aprender el patron ETL, la base de toda automatizacion seria",
  "No tienes presupuesto para HubSpot o Salesforce y necesitas algo gratis",
];

const no = [
  "Quieres mandar newsletters masivos a 10.000+ personas (usa Mailchimp o Brevo)",
  "Recibes 500+ leads al dia (el plan free de Make no alcanza)",
  "Solo quieres recoger feedback que vas a leer el viernes en una junta",
  "Buscas un curso de programacion avanzada (esto es no-code)",
  "No tienes una cuenta de Google funcionando",
  "Quieres una solucion magica sin configurar nada (no existe)",
];

const build = [
  { n: "01", t: "Google Form publicado", d: "Con 5 campos disenados para capturar leads de calidad sin friccion y validacion de email integrada.", tag: "Forms · Validacion · Link publico" },
  { n: "02", t: "CRM curado en Sheets", d: "Una hoja con 8 columnas que tu gestionas como humano: estado del lead, notas internas, fechas legibles.", tag: "Sheets · ETL · Estructura propia" },
  { n: "03", t: "Escenario en Make", d: "Watch Responses, Add a Row, Send an Email. Corre cada 15 minutos. Procesa, registra y manda email automatico.", tag: "Make · Plan free · 24/7" },
];

const modules = [
  { id: "01", count: "3 lecciones", t: "Que vas a construir", l: ["El flujo completo en 3 pasos", "Por que este patron es la columna vertebral del CRM moderno", "Lo que necesitas (checklist)"] },
  { id: "02", count: "3 lecciones · 1 quiz", t: "Crea tu Google Form", l: ["Estructura: 5 campos que cubren el 90% de los casos", "Validacion de email: el truco que filtra leads basura", "Publicar y obtener el link publico"] },
  { id: "03", count: "2 lecciones · 1 quiz", t: "Crea tu CRM curado", l: ["Para que Sheets si Forms guarda solo? La pregunta correcta", "Estructura de la hoja CRM (8 columnas)"] },
  { id: "04", count: "2 lecciones · 1 quiz", t: "Conecta Forms con Make", l: ["Watch Responses + el truco del Form ID manual", "Choose where to start: las 4 opciones explicadas"] },
  { id: "05", count: "3 lecciones · 1 quiz tecnico", t: "Escribe en tu CRM con datos limpios", l: ["Add a Row + el bug del JSON crudo", "Variables dinamicas: navegando estructuras anidadas", "Formato de fecha legible con formatDate()"] },
  { id: "06", count: "2 lecciones · 1 quiz", t: "Email automatico de bienvenida", l: ["Para que Make si Sheets ya guarda el lead?", "Configura Gmail con variables del lead"] },
  { id: "07", count: "3 lecciones · 2 retos", t: "Prueba, activa y casos reales", l: ["Prueba completa end-to-end", "Activa el escenario para que corra solo", "6 casos de uso adaptables del mismo flujo"] },
  { id: "08", count: "1 leccion · Certificado", t: "Lo lograste", l: ["Tienes un sistema de captura de leads autonomo", "Roadmap de que automatizar despues", "Descarga tu certificado AuryOnTech"] },
];

const usecases = [
  { t: "Reserva de citas", d: "Form con fecha a agenda CRM a confirmacion + ubicacion al cliente. Para consultorios, estudios, salones." },
  { t: "Inscripcion a webinar", d: "Form de registro a lista de inscritos a email con link de Zoom y recordatorios." },
  { t: "Solicitud de cotizacion", d: "Form con presupuesto y proyecto a pipeline de cotizaciones a confirmacion de plazo." },
  { t: "Lead magnet", d: "Form de descarga a lista de leads a email con el PDF + invitacion a tu newsletter." },
  { t: "Reclutamiento", d: "Form de postulacion a pipeline de candidatos a confirmacion al candidato." },
  { t: "Soporte / tickets", d: "Form de problema a lista de tickets a email con numero de ticket y tiempo estimado." },
];

const bio = [
  "Soy la pingüina que te va a acompanar en este curso. Mi trabajo es que entiendas cada paso sin sentir que estas leyendo un manual tecnico aburrido.",
  "Cada leccion esta disenada para que la termines con algo funcionando, no con apuntes. Cuando termines vas a tener un sistema corriendo en produccion que captura leads las 24 horas del dia.",
];

const faq = [
  { q: "Necesito saber programar?", a: "No. Cero. Make es no-code: arrastras modulos, configuras campos visualmente y listo. Lo mas cercano a codigo que vas a ver es la expresion formatDate() que ya viene escrita lista para pegar." },
  { q: "El plan gratis de Make alcanza?", a: "Si, perfectamente. El plan free te da 1.000 operaciones al mes. El sistema consume ~96 ops al dia de vigilancia + 3 por cada lead real. Aguanta comodamente hasta 10 leads por dia sin pagar nada." },
  { q: "Cuanto tarda construir todo?", a: "Unos 45 minutos si vas concentrado, sin pausas. Si lo haces en ratos sueltos puede tomarte 2-3 sesiones. La buena noticia es que despues corre sola para siempre." },
  { q: "Puedo modificar el flujo despues?", a: "Claro. La ultima leccion incluye un roadmap de como extender el sistema: notificacion a tu equipo por Slack, asignacion inteligente por servicio, secuencias de seguimiento, dashboards." },
  { q: "Tiene certificado?", a: "Si. Al completar todas las lecciones y los quizzes correctamente puedes descargar tu certificado AuryOnTech personalizado en PDF. Sirve para LinkedIn, portfolio o pegarlo en la pared." },
  { q: "Por que es gratis?", a: "Porque AuryOnTech esta empezando y queremos que la gente conozca el approach antes de pagar por nada. Si te gusta este curso, los siguientes mas avanzados van a ser de pago. Pero este es completamente gratis." },
];

export default function LandingFormulario() {
  return (
    <main className="cpage">
      <section className="chero">
        <Nav />
        <div className="chero-grid">
          <div>
            <span className="cbadge">Curso gratuito · 17 lecciones</span>
            <h1>
              De formulario a cliente <span className="o">sin tocar nada</span>.
            </h1>
            <p className="tag">
              Construye un sistema que captura cada lead que llega a tu form, lo registra limpio en tu
              CRM y le manda email de bienvenida en menos de 60 segundos. Para siempre.
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
            <Link href="/cursos" className="btn-primary">Empezar gratis ahora &#9656;</Link>
          </div>
          <div className="cmock">
            <div className="cv">
              <span className="cbadge" style={{ margin: 0 }}>flow.make a produccion</span>
              <div className="t">Forms a Make a Sheets a Gmail</div>
              <div className="s">Sistema corriendo solo · 24/7</div>
            </div>
            <div className="ch-row"><span className="b">01</span>Google Forms: el lead llena tu form</div>
            <div className="ch-row"><span className="b">02</span>Make detecta y procesa cada 15 min</div>
            <div className="ch-row"><span className="b">03</span>Google Sheets: lead registrado limpio</div>
            <div className="ch-row"><span className="b">04</span>Gmail: bienvenida automatica al lead</div>
            <div className="ch-row"><span className="b">05</span>Sistema activo para siempre</div>
          </div>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Es para ti?</span>
            <h2 className="h2">
              Este curso es brutal para algunos. Para otros, <span className="o">no tanto</span>.
            </h2>
            <p className="lede">
              Antes de invertir 45 minutos, vale la pena saber si tu situacion encaja con lo que vas a
              aprender.
            </p>
          </Reveal>
          <Reveal>
           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div className="lcard" style={{ borderColor: "rgba(90,169,230,.3)" }}>
              <h3 style={{ color: "var(--color-cyan-l)" }}>SI es para ti si...</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
                {yes.map((it) => (
                  <li key={it} style={{ display: "flex", gap: 10, fontSize: "0.88rem", color: "#B7C0D0" }}>
                    <span style={{ color: "var(--color-cyan)" }}>&#10003;</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lcard" style={{ borderColor: "rgba(255,90,31,.3)" }}>
              <h3 style={{ color: "var(--color-orange-l)" }}>NO es para ti si...</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
                {no.map((it) => (
                  <li key={it} style={{ display: "flex", gap: 10, fontSize: "0.88rem", color: "#9AA3B3" }}>
                    <span style={{ color: "var(--color-orange)" }}>&#10005;</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
           </div>
          </Reveal>
        </div>
      </section>

      <section className="csec" style={{ background: "#080E1A" }}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Lo que vas a tener</span>
            <h2 className="h2">Tres piezas. Un sistema completo.</h2>
            <p className="lede">
              Al terminar tendras corriendo en produccion todas estas piezas, integradas y funcionando
              solas. No es teoria: es algo real que vas a construir paso a paso.
            </p>
          </Reveal>
          <Reveal className="clearn">
            {build.map((b) => (
              <div className="lcard" key={b.n}>
                <div className="ln">{b.n}</div>
                <h3>{b.t}</h3>
                <p>{b.d}</p>
                <span className="tg">{b.tag}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />El plan completo</span>
            <h2 className="h2">8 modulos. 17 lecciones. Cero relleno.</h2>
          </Reveal>
          <Reveal className="cchapters">
            {modules.map((m) => (
              <div className="cchap" key={m.id}>
                <span className="cn">{m.id}</span>
                <div>
                  <div className="ct">{m.t}</div>
                  <div className="cd">{m.l.join(" · ")}</div>
                  <span className="ctag free">{m.count}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="csec" style={{ background: "#080E1A" }}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />El mismo patron en 6 negocios</span>
            <h2 className="h2">
              Aprendes uno. <span className="o">Replicas seis</span>.
            </h2>
            <p className="lede">
              Una vez entiendes el patron, lo unico que cambia entre escenarios son los campos del form,
              las columnas del CRM y el contenido del email. La arquitectura es identica.
            </p>
          </Reveal>
          <Reveal>
           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {usecases.map((u) => (
              <div className="lcard" key={u.t}>
                <h3>{u.t}</h3>
                <p>{u.d}</p>
              </div>
            ))}
           </div>
          </Reveal>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="cinstr">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="pic" src={withBase("/img/Aury-enfrente-de-la-Compu.webp")} alt="Aury" />
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
            <span className="eyebrow"><span className="sq" />Dudas frecuentes</span>
            <h2 className="h2">Preguntas que vas a tener.</h2>
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
            El sistema que necesitabas hace 2 anos, listo en <span className="o">45 minutos</span>.
          </h2>
          <p className="lede">100% gratis. Sin tarjeta. Sin suscripciones. Solo el sistema que captura leads las 24 horas.</p>
          <div className="cta-btns">
            <Link href="/cursos" className="btn-primary">Empezar gratis ahora &#9656;</Link>
            <Link href="/cursos" className="btn-ghost">Ver todos los cursos</Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
