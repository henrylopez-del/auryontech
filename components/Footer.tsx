import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <span className="l">© 2026 AuryOnTech · Automation Lab · Antarctica</span>
        <div className="r">
          <Link href="/cursos">Cursos</Link>
          <Link href="/calculadora">Calculadora</Link>
          <a href="mailto:contacto@auryontech.com">contacto@auryontech.com</a>
        </div>
      </div>
    </footer>
  );
}
