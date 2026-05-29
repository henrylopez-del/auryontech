"use client";

import { useState } from "react";

const data = [
  {
    tab: "Salón de belleza",
    h: "Salón de belleza y estética",
    p: "La gestión de citas, los recordatorios y la recopilación de reseñas consumen tiempo que debería ir al servicio. Con los flujos correctos, toda esa carga operativa desaparece sin perder el toque personal.",
    items: [
      "Recordatorio automático 24h antes de cada cita vía WhatsApp o email",
      "Mensaje post-servicio con solicitud de reseña y registro de la visita",
      "Reagendamiento automático cuando una clienta cancela",
      "Historial de cada cliente actualizado solo, sin tocar nada",
    ],
  },
  {
    tab: "Tienda online",
    h: "Tienda online",
    p: "Cada pedido dispara una cadena de tareas que normalmente haces a mano. Automatizadas, el cliente recibe todo a tiempo y tú recuperas las horas.",
    items: [
      "Confirmación y factura enviadas en el momento de la compra",
      "Seguimiento de envío automático con cada cambio de estado",
      "Recuperación de carritos abandonados sin intervención",
      "Inventario y ventas registrados solos en tu hoja",
    ],
  },
  {
    tab: "Servicios profesionales",
    h: "Servicios profesionales",
    p: "Propuestas, contratos y seguimientos comen el tiempo que deberías dedicar a clientes. Deja que el sistema los prepare por ti.",
    items: [
      "Propuestas y contratos que se rellenan solos con los datos del cliente",
      "Recordatorios de pago automáticos antes de cada vencimiento",
      "Onboarding de cliente nuevo disparado al firmar",
      "Reportes de proyecto generados sin que muevas un dedo",
    ],
  },
  {
    tab: "Formación online",
    h: "Formación online",
    p: "Inscripciones, accesos y seguimiento de alumnos se multiplican rápido. Un flujo lo sostiene todo a cualquier volumen.",
    items: [
      "Acceso al curso entregado automáticamente tras la compra",
      "Secuencia de bienvenida y avisos de progreso por email",
      "Certificado emitido solo al completar el curso",
      "Alumnos y avances registrados en tu hoja en tiempo real",
    ],
  },
];

export default function Sectors() {
  const [active, setActive] = useState(0);
  const p = data[active];
  return (
    <section className="uc">
      <div className="wrap">
        <div className="uc-head">
          <h2 className="h2">
            Si hay tareas repetitivas, hay margen para automatizar.
          </h2>
          <p className="lede">
            No importa el sector ni el tamaño. Donde hay un proceso que se
            repite, hay tiempo y dinero que se pueden recuperar.
          </p>
        </div>
        <div className="uc-tabs">
          {data.map((d, i) => (
            <button
              key={d.tab}
              className={`uc-tab${i === active ? " on" : ""}`}
              onClick={() => setActive(i)}
            >
              {d.tab}
            </button>
          ))}
        </div>
        <div className="uc-panel">
          <h3>{p.h}</h3>
          <p className="pl">{p.p}</p>
          <ul className="uc-list">
            {p.items.map((it) => (
              <li key={it}>
                <span className="ar">▸</span>
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
