import { withBase } from "@/lib/base";
import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";
import Reveal from "./Reveal";
import type { Curso } from "@/lib/cursos";

export default function CursoTemplate({ curso }: { curso: Curso }) {
  const free = curso.price.toLowerCase().includes("gratis");
  return (
    <main className="cpage">
      <section className="chero">
        <Nav />
        <div className="chero-grid">
          <div>
            <span className="cbadge">⎯ {curso.cat}</span>
            <h1>{curso.title}.</h1>
            <p className="tag">{curso.tagline}</p>
            <div className="cincludes">
              {curso.includes.map((it) => (
                <div className="cinc" key={it}>
                  <span className="k">✓</span>
                  {it}
                </div>
              ))}
            </div>
            <div className="cprice">
              <span className="n">{curso.price}</span>
              <span className="d">
                {free ? "Para siempre" : "Pago único"}
                <br />
                Acceso inmediato
              </span>
            </div>
            <Link href="/cursos" className="btn-primary">
              {free ? "Empezar el curso gratis ▸" : "Quiero el curso ▸"}
            </Link>
          </div>
          <div className="cmock">
            <div className="cv">
              <span className="cbadge" style={{ margin: 0 }}>
                AURYONTECH
              </span>
              <div className="t">{curso.title}</div>
              <div className="s">{free ? "Curso gratuito" : "Curso premium"}</div>
            </div>
            {curso.chapters.slice(0, 5).map((c) => (
              <div className="ch-row" key={c.num}>
                <span className="b">{c.num}</span>
                {c.t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {curso.learn.length > 0 && (
        <section className="csec">
          <div className="wrap">
            <Reveal className="head">
              <span className="eyebrow">
                <span className="sq" />
                Lo que vas a aprender
              </span>
              <h2 className="h2">
                Al terminar tienes algo <span className="o">funcionando</span>, no solo apuntes.
              </h2>
            </Reveal>
            <Reveal className="clearn">
              {curso.learn.map((l, i) => (
                <div className="lcard" key={i}>
                  <div className="ln">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{l.t}</h3>
                  <p>{l.p}</p>
                  {l.tag && <span className="tg">{l.tag}</span>}
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {curso.chapters.length > 0 && (
        <section className="csec" style={{ background: "#080E1A" }}>
          <div className="wrap">
            <Reveal className="head">
              <h2 className="h2">Contenido del curso, lección por lección.</h2>
            </Reveal>
            <Reveal className="cchapters">
              {curso.chapters.map((c) => (
                <div className="cchap" key={c.num + c.t}>
                  <span className="cn">{c.num}</span>
                  <div>
                    <div className="ct">{c.t}</div>
                    <div className="cd">{c.d}</div>
                    {c.tag && (
                      <span
                        className={`ctag ${c.tag.toLowerCase().includes("quiz") ? "quiz" : "free"}`}
                      >
                        {c.tag}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <section className="csec">
        <div className="wrap">
          <Reveal className="cinstr">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="pic" src={withBase("/img/Aury-Estudiando.webp")} alt="Aury" />
            <div>
              <span className="cbadge">Tu instructora · Aury</span>
              {curso.instructorBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {curso.faq.length > 0 && (
        <section className="csec" style={{ background: "#080E1A" }}>
          <div className="wrap">
            <Reveal className="head">
              <span className="eyebrow">
                <span className="sq" />
                Preguntas frecuentes
              </span>
              <h2 className="h2">Lo que suelen preguntar antes de empezar.</h2>
            </Reveal>
            <Reveal className="cfaq">
              {curso.faq.map((f, i) => (
                <details key={i} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <section className="cta">
        <Reveal className="wrap cta-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cta-img" src={withBase("/img/Aury-Saludando.webp")} alt="Aury saludando" />
          <h2 className="h2">
            {free ? (
              <>
                Empieza hoy. Es <span className="o">gratis</span>.
              </>
            ) : (
              <>
                Llévate <span className="o">{curso.title}</span> hoy.
              </>
            )}
          </h2>
          <p className="lede">Acceso inmediato. Aprendes haciendo, con tu propio negocio.</p>
          <div className="cta-btns">
            <Link href="/cursos" className="btn-primary">
              {free ? "Empezar el curso gratuito ▸" : "Comprar el curso ▸"}
            </Link>
            <Link href="/cursos" className="btn-ghost">
              Ver todos los cursos
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
