import Link from "next/link";
import Reveal from "./Reveal";

type Course = {
  num: string;
  cat: string;
  title: string;
  desc: string;
  price: string;
  href: string;
  feat?: boolean;
};

const courses: Course[] = [
  { num: "01", cat: "IA y Contenido", title: "Prompts que trabajan", desc: "Las 6 técnicas reales de prompting para dejar de obtener respuestas genéricas y conseguir resultados profesionales desde el primer intento.", price: "Gratis", href: "/cursos" },
  { num: "02", cat: "IA y Contenido", title: "Publica con IA. Sin que se note.", desc: "El sistema para crear contenido que suena a ti, no a robot. Los 5 síntomas del texto generado por IA y cómo eliminarlos en segundos.", price: "Gratis", href: "/cursos" },
  { num: "03", cat: "IA y Contenido", title: "Cierra con IA. Sin perder tu estilo.", desc: "Cierra más con los leads que ya tienes. Respuestas que suenan a ti y mueven a la venta, sin sonar a plantilla.", price: "Gratis", href: "/cursos" },
  { num: "04", cat: "Automatización", title: "Automatiza tus documentos.", desc: "Genera contratos, facturas y propuestas que se rellenan solos a partir de tus datos. Sin copiar y pegar nunca más.", price: "Gratis", href: "/cursos" },
  { num: "05", cat: "Automatización", title: "Tu primera automatización en 30 min.", desc: "Monta tu primer flujo real con Make y Google Sheets desde cero. Al terminar lo tienes activo y funcionando en tu cuenta.", price: "Gratis", href: "/cursos" },
  { num: "06", cat: "Negocio", title: "Tu Mini CRM gratis en Google Sheets.", desc: "Organiza clientes, seguimientos y ventas en una hoja que se actualiza sola. Tu CRM completo sin pagar suscripción.", price: "Gratis", href: "/cursos" },
  { num: "07", cat: "Negocio · Premium", title: "Tu Tienda en Automático.", desc: "El curso completo: monta una tienda que procesa pedidos, cobra y da seguimiento sola. De principio a fin.", price: "47€", href: "/cursos", feat: true },
];

export default function Courses() {
  return (
    <section className="services">
      <div className="wrap">
        <Reveal className="svc-head">
          <span className="eyebrow">
            <span className="sq" />
            Formación
          </span>
          <h2 className="h2">Aprende a automatizar a tu propio ritmo.</h2>
          <p className="lede">
            6 cursos gratuitos y 1 de pago para que cualquier negocio implemente
            IA y automatización sin saber de código. Empieza gratis hoy.
          </p>
        </Reveal>
        <Reveal className="courses">
          {courses.map((c) => (
            <Link key={c.num} href={c.href} className={`course${c.feat ? " feat" : ""}`}>
              <div className="c-top">
                <span className="c-num">{c.num}</span>
                <span className="c-cat">{c.cat}</span>
              </div>
              <div className="c-title">{c.title}</div>
              <div className="c-desc">{c.desc}</div>
              <div className="c-foot">
                <span className="c-price">{c.price}</span>
                <span className="c-go">Ver curso →</span>
              </div>
            </Link>
          ))}
          <Link
            href="/cursos"
            className="course"
            style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}
          >
            <div className="c-title" style={{ margin: 0 }}>
              Ver el catálogo completo →
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
