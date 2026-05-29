import { withBase } from "@/lib/base";
import Link from "next/link";
import Nav from "./Nav";
import HeroVideo from "./HeroVideo";
import HeroHud from "./HeroHud";
import Integrations from "./Integrations";

export default function Hero() {
  return (
    <section className="hero">
      <HeroVideo />
      <div className="corner tl" />
      <div className="corner tr" />
      <div className="rail-left">AURYONTECH SYSTEM</div>
      <div className="ice-glow" />
      <div className="scene">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase("/img/Aury-enfrente-de-la-Compu.webp")}
          alt="Aury, la pingüina instructora, trabajando en su laptop"
        />
      </div>

      <Nav />

      <div className="hero-body">
        <span className="h-eyebrow">
          <span className="sq" />
          AI + AUTOMATIZACIÓN + NO CODE
        </span>
        <h1 className="title">
          Aprende a automatizar
          <br />
          <span className="o">sin saber</span> <span className="c">código</span>.
        </h1>
        <p className="lede">
          Tanto si tienes tu propio negocio como si trabajas para otro, hay
          tareas que no deberías estar haciendo tú. Delega en sistemas. Enfócate
          en crecer.
        </p>
        <div className="ctas">
          <Link href="/cursos" className="btn-primary">
            Empezar con la formación gratis ▸
          </Link>
          <Link href="/cursos" className="btn-ghost">
            <span className="dots">
              {Array.from({ length: 9 }).map((_, i) => (
                <i key={i} />
              ))}
            </span>
            Ver todos los cursos
          </Link>
        </div>
        <div className="social-proof">
          <span className="tri">▸</span>+12.000 alumnos ya automatizan mejor
        </div>
      </div>

      <HeroHud />

      <div className="bubble">
        ¡Hola! Soy Aury.
        <br />
        Vine desde la Antártida para que tu negocio <b>trabaje solo</b>.
        ¿Empezamos?
      </div>

      <div className="stats">
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-h">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              <span className="t">Tiempo recuperado</span>
            </div>
            <div className="stat-num">+40h</div>
            <div className="stat-sub">por mes</div>
          </div>
          <div className="stat">
            <div className="stat-h">
              <svg viewBox="0 0 24 24">
                <path d="M2 12h4l3 8 4-16 3 8h6" />
              </svg>
              <span className="t">Flujos activos</span>
            </div>
            <div className="stat-num">30min</div>
            <div className="stat-sub">para tu primer flujo</div>
          </div>
          <div className="stat">
            <div className="stat-h">
              <svg viewBox="0 0 24 24">
                <path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" />
                <path d="M3.3 7L12 12l8.7-5M12 12v10" />
              </svg>
              <span className="t">Sin tarjeta</span>
            </div>
            <div className="stat-num">0€</div>
            <div className="stat-sub">para empezar</div>
          </div>
          <div className="stat">
            <div className="stat-h">
              <svg viewBox="0 0 24 24">
                <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
              </svg>
              <span className="t">Datos seguros</span>
            </div>
            <div className="stat-num">100%</div>
            <div className="stat-sub">privado y encriptado</div>
          </div>
        </div>
      </div>

      <Integrations />

      <div className="badge-bl">
        DISEÑADO
        <br />
        EN LA ANTÁRTIDA
      </div>
      <div className="badge-br">
        AURY-ON-TECH
        <br />
        AUTOMATION LAB
      </div>
    </section>
  );
}
