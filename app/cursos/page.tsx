import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { cursos, cursoSlugs } from "@/lib/cursos";

export const metadata = {
  title: "Catálogo de Cursos · AuryOnTech",
  description: "6 cursos gratuitos y 1 de pago de IA y automatización para negocios. Sin saber código.",
};

export default function Catalogo() {
  return (
    <main className="cpage">
      <section className="chero" style={{ paddingBottom: 40 }}>
        <Nav />
        <div className="hero-body" style={{ paddingTop: 40 }}>
          <span className="h-eyebrow"><span className="sq" />CATÁLOGO · FORMACIÓN</span>
          <h1 className="title" style={{ fontSize: "clamp(2.4rem,5vw,4.4rem)" }}>
            Todos los cursos para<br /><span className="o">automatizar</span> tu negocio.
          </h1>
          <p className="lede">6 cursos gratuitos y 1 de pago. Aprendes haciendo, con tu propio negocio, sin saber código.</p>
        </div>
      </section>
      <section className="services" style={{ background: "#070B14" }}>
        <div className="wrap">
          <Reveal className="courses">
            {cursoSlugs.map((slug, i) => {
              const c = cursos[slug];
              const feat = c.price.toLowerCase().includes("47");
              return (
                <Link key={slug} href={`/cursos/${slug}`} className={`course${feat ? " feat" : ""}`}>
                  <div className="c-top">
                    <span className="c-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="c-cat">{c.cat}</span>
                  </div>
                  <div className="c-title">{c.title}</div>
                  <div className="c-desc">{c.tagline}</div>
                  <div className="c-foot">
                    <span className="c-price">{c.price}</span>
                    <span className="c-go">Ver curso →</span>
                  </div>
                </Link>
              );
            })}
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
