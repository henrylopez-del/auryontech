import { withBase } from "@/lib/base";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="brand">
        <div className="brand-mark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/img/Aury-Art-Computadora-1-2.webp")} alt="AuryOnTech" />
        </div>
        <div className="brand-tx">
          <span className="brand-word">
            Aury<b>OnTech</b>
          </span>
          <span className="brand-jp">
            Automatización para todos<span className="v">v1.0</span>
          </span>
        </div>
      </Link>
      <div className="nav-links">
        <a href="#about">Sobre Aury</a>
        <Link href="/cursos">Cursos</Link>
        <Link href="/calculadora">¿Cuánto pierdes?</Link>
        <a href="#valor">Por qué automatizar</a>
        <Link href="/cursos" className="nav-cta">
          Empezar gratis ▸
        </Link>
      </div>
    </nav>
  );
}
