import { withBase } from "@/lib/base";
import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";
import Reveal from "./Reveal";
import MaterialQuiz from "./MaterialQuiz";
import type { Material, MBlock } from "@/lib/material";
import styles from "./MaterialTemplate.module.css";

function Block({ b }: { b: MBlock }) {
  switch (b.t) {
    case "p":
      return <p className={styles.p}>{b.x}</p>;
    case "h":
      return <h3 className={styles.h3}>{b.x}</h3>;
    case "ul":
      return (
        <ul className={styles.ul}>
          {b.x.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className={styles.ol}>
          {b.x.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case "steps":
      return (
        <div className={styles.steps}>
          {b.x.map((st, i) => (
            <div className={styles.step} key={i}>
              <span className={styles.stepNum}>{i + 1}</span>
              <div>
                {st.s && <span className={styles.stepStrong}>{st.s}</span>}
                {st.p && <span className={styles.stepP}>{st.p}</span>}
              </div>
            </div>
          ))}
        </div>
      );
    case "callout":
      return (
        <div className={styles.callout}>
          {b.s && <span className={styles.calloutStrong}>{b.s}</span>}
          {b.p && <span className={styles.calloutP}>{b.p}</span>}
        </div>
      );
    case "action":
      return (
        <div className={styles.action}>
          <div className={styles.actionLabel}>{b.label}</div>
          {b.title && <div className={styles.actionTitle}>{b.title}</div>}
          {b.steps.length > 0 && (
            <ol className={styles.actionSteps}>
              {b.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          )}
        </div>
      );
    case "quiz":
      return <MaterialQuiz q={b.q} opts={b.opts} />;
    case "code":
      return (
        <div className={styles.code}>
          <div className={styles.codeHead}>
            <span className={styles.dot}>{b.lang || "Ejemplo"}</span>
            <span>AURYONTECH</span>
          </div>
          <pre>{b.code}</pre>
        </div>
      );
    case "prompt":
      return (
        <div className={styles.code}>
          <div className={styles.codeHead}>
            <span className={styles.dot}>{b.label}</span>
            <span>Prompt</span>
          </div>
          <pre>{b.code}</pre>
        </div>
      );
    default:
      return null;
  }
}

export default function MaterialTemplate({ material }: { material: Material }) {
  const { courseTitle, nextCourse, relatedCourse, modules } = material;
  const courseHref = relatedCourse ? `/cursos/${relatedCourse}` : "/cursos";
  const totalLessons = modules.reduce((n, m) => n + m.lecciones.length, 0);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Nav />
        <div className={styles.heroGrid}>
          <div>
            <span className="eyebrow">
              <span className="sq" />
              Material del curso
            </span>
            <h1>{courseTitle}.</h1>
            <p className={styles.heroTag}>
              Material de estudio completo, leccion por leccion. Lee, aplica y construye con tu
              propio negocio mientras avanzas.
            </p>
            <div className={styles.heroMeta}>
              <span className={styles.metaPill}>{modules.length} modulos</span>
              <span className={styles.metaPill}>{totalLessons} lecciones</span>
              <span className={styles.metaPill}>Aprendes haciendo</span>
            </div>
            <div className={styles.heroBtns}>
              <Link href={courseHref} className="btn-primary">
                Ir al curso completo ▸
              </Link>
              <Link href="/cursos" className="btn-ghost">
                Ver todos los cursos
              </Link>
            </div>
          </div>
          <div className={styles.heroArt}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBase("/img/Aury-Estudiando.webp")} alt="Aury estudiando" />
          </div>
        </div>
      </section>

      <section className={`${styles.module} ${styles.moduleAlt}`}>
        <div className="wrap">
          <Reveal className={styles.modHead}>
            <span className={styles.modKicker}>
              <span className="sq" />
              Indice del material
            </span>
            <h2>Que vas a cubrir, modulo por modulo.</h2>
          </Reveal>
          <Reveal>
            <div className={styles.idx}>
              {modules.map((m) => (
                <div className={styles.idxRow} key={m.modulo}>
                  <span className={styles.idxNum}>M{m.modulo}</span>
                  <span className={styles.idxTitle}>{m.titulo}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {modules.map((m, mi) => (
        <section
          key={m.modulo}
          className={`${styles.module}${mi % 2 === 1 ? " " + styles.moduleAlt : ""}`}
        >
          <div className="wrap">
            <Reveal className={styles.modHead}>
              <span className={styles.modKicker}>
                <span className="sq" />
                Modulo {m.modulo}
              </span>
              <h2>{m.titulo}.</h2>
            </Reveal>

            {m.lecciones.map((l, li) => (
              <Reveal className={styles.lesson} key={li}>
                <span className={styles.lessonTag}>
                  Leccion {m.modulo}.{li + 1}
                </span>
                <h3 className={styles.lessonTitle}>{l.titulo}</h3>
                <p className={styles.objective}>
                  <b>Objetivo:</b> {l.objetivo}
                </p>
                {l.blocks.map((b, bi) => (
                  <Block b={b} key={bi} />
                ))}
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      <section className="cta">
        <Reveal className="wrap cta-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cta-img" src={withBase("/img/Aury-Saludando.webp")} alt="Aury saludando" />
          <h2 className="h2">
            Lleva esto al <span className="o">curso completo</span>.
          </h2>
          <p className="lede">
            {nextCourse
              ? `Cuando termines, el siguiente paso es: ${nextCourse}.`
              : "Acceso inmediato. Aprendes haciendo, con tu propio negocio."}
          </p>
          <div className="cta-btns">
            <Link href={courseHref} className="btn-primary">
              Empezar el curso ▸
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
