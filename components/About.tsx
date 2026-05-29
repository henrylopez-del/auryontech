import { withBase } from "@/lib/base";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <Reveal className="about-photo">
          <div className="frame">
            <span className="tag">⎯ AURY · FILE 001</span>
            <video src={withBase("/aury-leyendo-sq.mp4")} autoPlay muted loop playsInline aria-label="Aury leyendo un libro" />
          </div>
        </Reveal>
        <Reveal className="about-story">
          <span className="eyebrow">
            <span className="sq" />
            Quién es Aury
          </span>
          <h2 className="h2">
            Una pingüina de la Antártida que descubrió el poder de{" "}
            <span className="o">automatizar</span>.
          </h2>
          <p>
            Empezó como una pequeña comerciante de pescado en la Antártida,
            gestionando pedidos a mano, enviando confirmaciones una a una y
            olvidándose de los seguimientos más de lo que le gustaba admitir.
          </p>
          <p>
            Un día, harta de perder tiempo en tareas repetitivas mientras sus
            vecinos de iceberg avanzaban, decidió aprender a construir flujos
            automáticos. En pocas semanas, <b>su negocio funcionaba solo</b>{" "}
            mientras ella exploraba, aprendía y conectaba con otros.
          </p>
          <p>
            Hoy Aury viaja de negocio en negocio, con su laptop siempre a mano,
            enseñando lo que aprendió.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
