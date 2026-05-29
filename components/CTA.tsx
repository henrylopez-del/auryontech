import { withBase } from "@/lib/base";
import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="cta">
      <Reveal className="wrap cta-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="cta-img" src={withBase("/img/Aury-Saludando.webp")} alt="Aury saludando" />
        <h2 className="h2">
          Empieza hoy. El primer curso es <span className="o">gratis</span>.
        </h2>
        <p className="lede">
          Sin tarjeta de crédito, sin compromiso. En 30 minutos tienes tu primer
          flujo automático activo y funcionando.
        </p>
        <div className="cta-btns">
          <Link href="/cursos" className="btn-primary">
            Empezar el curso gratuito ▸
          </Link>
          <Link href="/cursos" className="btn-ghost">
            Ver todos los cursos
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
