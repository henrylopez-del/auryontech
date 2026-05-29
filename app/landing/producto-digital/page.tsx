import { withBase } from "@/lib/base";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Tus primeros 500 euros con IA · AuryOnTech",
  description:
    "Curso gratuito de monetizacion con IA. Crea tu primer producto digital en una tarde y consigue tus primeros compradores sin seguidores ni inversion.",
};

const includes = [
  "Identifica que puedes vender ya mismo con lo que ya sabes",
  "Crea tu primer producto digital en una tarde con IA y Canva",
  "Publicalo en Gumroad con pagina de ventas en 30 minutos",
  "Consigue tus primeros compradores sin pagar un solo euro en anuncios",
  "ChatGPT + Canva + Gumroad gratuitos. Inversion total: 0 euros",
];

const datos = [
  { n: "18 dias", l: "media hasta el primer ingreso para principiantes que dedican 15-20h semanales. Encuesta a 230 freelancers IA en Espana, Q1 2026." },
  { n: "0 euros", l: "inversion necesaria para crear y publicar tu primer producto. ChatGPT, Canva y Gumroad son gratuitos." },
  { n: "12.000+", l: "ofertas activas en Fiverr para contenido en espanol en 2026. La demanda de productos digitales con IA esta en maximos." },
  { n: "8h", l: "semanales que ahorran los freelancers que usan IA, permitiendoles crear mas productos y atender mas clientes." },
];

const productos = [
  { tipo: "Mas facil de crear", nombre: "Plantilla", desc: "Documento, hoja o diseno que el comprador rellena con sus datos. Plantilla de presupuesto, tracker de gastos, calendario de contenidos.", precio: "9-29 euros", ventas: "17-55 ventas" },
  { tipo: "Recomendado para empezar", nombre: "Guia o ebook", desc: "PDF de 10-30 paginas que explica como hacer algo paso a paso. No tiene que ser un libro: solo resolver una duda concreta.", precio: "17-47 euros", ventas: "10-30 ventas", feat: true },
  { tipo: "Alta conversion", nombre: "Pack de prompts", desc: "Coleccion de prompts listos para usar en un area especifica. 50 prompts para Instagram, 30 prompts para emails de ventas.", precio: "9-25 euros", ventas: "20-55 ventas" },
  { tipo: "Ticket mas alto", nombre: "Mini-curso", desc: "3-5 lecciones en video o texto que ensenan una habilidad. No tiene que durar horas: tiene que llevar de A a B de forma clara.", precio: "37-97 euros", ventas: "5-14 ventas" },
  { tipo: "Ingresos inmediatos", nombre: "Servicio con IA", desc: "Haces algo usando IA y cobras por el resultado: auditoria de redes, estrategia de contenido, copy para una semana.", precio: "50-300 euros", ventas: "2-10 clientes" },
];

const bad = [
  "Ingresos pasivos de miles de euros al mes desde el primer dia",
  "No hace falta saber nada, la IA lo hace todo",
  "Sin trabajo, sin esfuerzo, sin tiempo",
  "Resultados garantizados",
  "Necesitas comprar su curso de 997 euros para empezar",
];

const good = [
  "Un sistema real para los primeros 500 euros, sin exagerar",
  "IA como herramienta para acelerar, no como magia",
  "Una tarde para crear, un dia para lanzar",
  "Resultado concreto: producto publicado y primer mensaje enviado",
  "0 euros de inversion, herramientas 100% gratuitas",
];

const forw = [
  { k: "A", t: "Tienes un conocimiento o habilidad pero no sabes como monetizarlo", d: "Sabes de diseno, marketing, contabilidad, idiomas, cocina, productividad. Hay personas que pagarian por aprender lo que tu sabes. El modulo 1 te ayuda a identificarlo en 20 minutos." },
  { k: "B", t: "Tienes poco tiempo y cero presupuesto para publicidad", d: "El sistema completo de este curso (crear, publicar y lanzar) cabe en un fin de semana. Y la distribucion inicial no requiere gastar nada en anuncios." },
  { k: "C", t: "Quieres probar si puedes generar ingresos online sin comprometerte a nada grande", d: "Los primeros 500 euros son la prueba, no el objetivo final. Si funciona, tienes un sistema que puedes escalar. Si no, aprendes lo que ajustar sin haber perdido dinero." },
];

const modules = [
  { n: "01", t: "Que puedes vender ya mismo", p: "El error de buscar la idea perfecta, los 5 tipos de productos que se venden sin seguidores y como validar tu idea en 20 minutos con IA.", tag: "3 lecciones · validacion" },
  { n: "02", t: "Crea tu producto en una tarde", p: "De idea a PDF profesional con IA y Canva. Estructura, contenido, diseno y el precio exacto para no quedarte corto ni espantarlos.", tag: "3 lecciones · creacion" },
  { n: "03", t: "Publicalo hoy", p: "Gumroad de cero a publicado en 30 minutos. El copy que vende: como describir tu producto para que la gente lo quiera comprar.", tag: "2 lecciones · publicacion" },
  { n: "04", t: "Tus primeros compradores sin anuncios", p: "Los 3 canales que funcionan desde el dia 1 sin inversion. El mensaje de lanzamiento que no suena a vendedor desesperado.", tag: "2 lecciones · lanzamiento" },
  { n: "05", t: "De 500 euros a ingresos recurrentes", p: "El sistema que entrega y cobra solo. Como pasar de un producto a un catalogo que crece con cada lanzamiento.", tag: "1 leccion · sistema" },
];

const entregables = [
  { n: "01", t: "Tu idea de producto validada", d: "Con el prompt de validacion y las senales reales de que hay demanda." },
  { n: "02", t: "Producto digital terminado", d: "Guia, plantilla, pack de prompts o mini-curso, creado con IA y maquetado en Canva." },
  { n: "03", t: "Pagina de ventas en Gumroad", d: "Publicada y lista para recibir pagos desde cualquier parte del mundo." },
  { n: "04", t: "Copy de venta escrito con IA", d: "La descripcion que convierte visitantes en compradores, especifica para tu producto." },
  { n: "05", t: "Mensajes de lanzamiento listos", d: "Para contactos directos, grupos y redes sociales, sin sonar a vendedor desesperado." },
  { n: "06", t: "Sistema de entrega automatica activo", d: "El producto llega solo cuando alguien compra, el cobro se procesa solo y tu no haces nada. El primer negocio que trabaja sin ti." },
];

const bio = [
  "Empezo vendiendo pescado en la Antartida gestionando todo a mano. Cuando descubrio que podia convertir su conocimiento en productos digitales con IA, su primer producto lo vendio en 3 dias sin un solo seguidor en redes.",
  "Este curso nacio de construir el sistema real primero, con los errores ya pagados, los atajos descubiertos y la ruta mas corta documentada paso a paso.",
];

const faq = [
  { q: "Realmente puedo conseguir 500 euros sin seguidores?", a: "Si, pero con matiz: 500 euros no son el resultado garantizado, son el objetivo del sistema. La meta del curso es que tengas el producto publicado, el copy listo y los mensajes enviados. Las ventas dependen de la calidad de tu producto. El curso te da el sistema, tu pones la ejecucion." },
  { q: "Que pasa si no se me ocurre que vender?", a: "El modulo 1 esta disenado exactamente para eso. Con el prompt de validacion y el marco de los 5 tipos de productos, cualquier persona que sepa hacer algo encuentra una idea viable. Si despues de la leccion 1.2 todavia no tienes idea, el modulo incluye un prompt para generarlas." },
  { q: "Cuanto tiempo necesito dedicarle?", a: "El sistema completo cabe en un fin de semana largo. El curso son unas 2-3 horas. La creacion del producto con IA otras 2-3 horas. La publicacion en Gumroad 30 minutos. Si tienes un sabado libre, puedes terminar con el producto publicado antes del domingo." },
  { q: "Necesito saber usar ChatGPT?", a: "No necesitas experiencia previa. Si ya hiciste el curso de Prompts de AuryOnTech tendras ventaja. Si no, los prompts del curso estan completamente rellenables: solo sustituyes los campos en color naranja con tu informacion." },
  { q: "Gumroad funciona para vender en Espana?", a: "Si. Gumroad acepta pagos con tarjeta y PayPal a nivel mundial, incluyendo Espana. La comision es del 10% por transaccion en el plan gratuito, sin coste fijo mensual. Para los primeros 500 euros es la opcion mas rapida." },
  { q: "Por que es gratis?", a: "En AuryOnTech hay cursos y programas de pago. Este es gratuito porque queremos que veas el valor antes de invertir. Si el sistema funciona para ti, ya veras si quieres ir mas lejos. Sin correos de presion ni urgencias artificiales." },
];

export default function LandingProductoDigital() {
  return (
    <main className="cpage">
      <section className="chero">
        <Nav />
        <div className="chero-grid">
          <div>
            <span className="cbadge">Curso gratuito · 5 Modulos · Monetizacion con IA</span>
            <h1>
              Tus primeros <span className="o">500 euros</span> con IA. Sin seguidores, sin inversion.
            </h1>
            <p className="tag">
              No necesitas audiencia, ni dinero, ni experiencia tecnica. Solo lo que ya sabes hacer y la
              IA para convertirlo en algo que la gente paga.
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
            <Link href="/cursos" className="btn-primary">Quiero mis primeros 500 euros &#9656;</Link>
          </div>
          <div className="cmock">
            <div className="cv">
              <span className="cbadge" style={{ margin: 0 }}>calculadora_500_euros</span>
              <div className="t">Guia en PDF · 47 euros</div>
              <div className="s">Creada con IA en 2h</div>
            </div>
            <div className="ch-row"><span className="b">=</span>Precio de venta: 47 euros</div>
            <div className="ch-row"><span className="b">-</span>Comision Gumroad (10%): 4,70 euros</div>
            <div className="ch-row"><span className="b">x</span>Ventas para 500 euros: ~12</div>
            <div className="ch-row"><span className="b">0</span>Inversion en publicidad: 0 euros</div>
            <div className="ch-row"><span className="b">&#9656;</span>Meta del curso: 500 euros</div>
          </div>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Por que funciona</span>
            <h2 className="h2">
              El mercado de productos digitales <span className="o">nunca fue tan accesible</span>.
            </h2>
          </Reveal>
          <Reveal>
           <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {datos.map((d) => (
              <div className="lcard" key={d.n}>
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
            <span className="eyebrow"><span className="sq" />Que vas a vender</span>
            <h2 className="h2">
              5 tipos de productos que se venden <span className="o">sin seguidores ni inversion</span>.
            </h2>
            <p className="lede">
              La cuenta que mas convierte: 10 ventas de una guia a 50 euros son 500 euros. Eso son 10
              personas, no 10.000 seguidores.
            </p>
          </Reveal>
          <Reveal className="clearn">
            {productos.map((p) => (
              <div className="lcard" key={p.nombre} style={p.feat ? { borderColor: "rgba(255,90,31,.4)" } : undefined}>
                <span className="tg" style={{ marginTop: 0, marginBottom: 12, display: "inline-block" }}>{p.tipo}</span>
                <h3>{p.nombre}</h3>
                <p>{p.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--line)" }}>
                  <span className="o" style={{ color: "var(--color-orange-l)", fontWeight: 700 }}>{p.precio}</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-mut)" }}>{p.ventas}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="csec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Por que este curso es distinto</span>
            <h2 className="h2">
              No es un curso de <span className="o">hazte rico con IA</span>.
            </h2>
            <p className="lede">
              Es el sistema paso a paso para crear algo real, publicarlo hoy y conseguir los primeros
              compradores esta semana. Sin promesas vacias.
            </p>
          </Reveal>
          <Reveal>
           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div className="lcard" style={{ borderColor: "rgba(255,90,31,.3)" }}>
              <h3 style={{ color: "var(--color-orange-l)" }}>Lo que prometen otros</h3>
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
              <h3 style={{ color: "var(--color-cyan-l)" }}>Lo que este curso te da</h3>
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

      <section className="csec" style={{ background: "#080E1A" }}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Para quien es</span>
            <h2 className="h2">
              Si sabes hacer algo que otros quieren aprender, <span className="o">cobra por ello</span>.
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

      <section className="csec">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Lo que vas a aprender</span>
            <h2 className="h2">
              Cinco modulos. Un resultado: <span className="o">tu primer producto vendido</span>.
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

      <section className="csec" style={{ background: "#080E1A" }}>
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow"><span className="sq" />Los 6 entregables</span>
            <h2 className="h2">
              Al terminar no tienes conocimiento. <span className="o">Tienes un negocio funcionando</span>.
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
            <h2 className="h2">Lo que mas preguntan antes de empezar.</h2>
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
            Lo que sabes hacer <span className="o">vale dinero</span>.
          </h2>
          <p className="lede">
            El sistema para convertirlo en tu primer producto digital, creado, publicado y lanzado esta
            semana. Inversion total: 0 euros.
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
