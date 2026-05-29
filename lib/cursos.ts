// Curso data. Refinable: learn/chapters de citas y producto-digital pendientes de fuente.
export type Curso = {
  slug: string; title: string; cat: string; tagline: string;
  includes: string[]; price: string;
  learn: { t: string; p: string; tag: string }[];
  chapters: { num: string; t: string; d: string; tag: string }[];
  faq: { q: string; a: string }[];
  instructorBio: string[];
};

export const cursos: Record<string, Curso> = {
  "prompts": {
    "slug": "prompts",
    "title": "Prompts que Trabajan: La Guía que Nadie te Dio",
    "cat": "IA y Contenido",
    "tagline": "Llevas meses con ChatGPT obteniendo respuestas genéricas. No es la IA. Eres tú. Y en este curso lo arreglamos con técnicas reales y prompts listos para usar.",
    "includes": [
      "6 técnicas reales de prompting con práctica en cada una",
      "7 prompts listos para copiar y usar esta semana",
      "Biblioteca de prompts organizada al terminar",
      "Prompts específicos para tu sector de negocio",
      "Sin tarjeta de crédito ni suscripción"
    ],
    "price": "Gratis",
    "learn": [
      {
        "t": "Por qué la IA te falla (y no es culpa de la IA)",
        "p": "Los 3 errores que comete el 95% de los usuarios y la anatomía de un prompt que funciona. Con comparación real de prompt malo vs. prompt correcto.",
        "tag": "Módulo 1 · 3 lecciones + actividad"
      }
    ],
    "chapters": [
      {
        "num": "M1",
        "t": "Cómo piensa realmente un modelo de lenguaje",
        "d": "Desmitificamos cómo funciona la IA para entender por qué necesita contexto y por qué el prompting importa.",
        "tag": "Gratis"
      }
    ],
    "faq": [
      {
        "q": "¿Necesito pagar ChatGPT Plus para hacer este curso?",
        "a": "No. La versión gratuita de ChatGPT es suficiente para todo el contenido del curso. Si tienes acceso a Claude, Gemini o cualquier otra IA, también funcionan. Las técnicas son independientes de la herramienta."
      },
      {
        "q": "¿Cuánto tiempo necesito para completarlo?",
        "a": "Cada módulo toma entre 20 y 35 minutos si haces la actividad incluida. En total puedes completarlo en un fin de semana. Teachable guarda tu progreso automáticamente y puedes avanzar a tu ritmo."
      },
      {
        "q": "¿Esto funciona si no tengo conocimientos técnicos?",
        "a": "Sí, completamente. No se necesita saber programar ni entender cómo funcionan los modelos a nivel técnico. Solo necesitas saber escribir y tener claro qué quieres lograr con tu negocio."
      },
      {
        "q": "¿Sirve para mi sector específico?",
        "a": "El Módulo 4 incluye prompts específicos para salones de belleza, tiendas online, consultorías y academias online. Las técnicas de los módulos 1 y 2 son universales y funcionan en cualquier tipo de negocio."
      },
      {
        "q": "¿Por qué es gratis? ¿Qué me vas a vender después?",
        "a": "Transparencia total: en AuryOnTech tenemos otros cursos y servicios de consultoría de pago. Este curso es gratuito porque queremos que compruebes el valor antes de invertir. Si el contenido gratuito te sirve, ya verás si quieres ir más allá. Sin presión."
      },
      {
        "q": "¿Cómo accedo al curso después de registrarme?",
        "a": "Inmediatamente. Al crear tu cuenta en Teachable tienes acceso directo a todos los módulos. Sin esperas ni aprobaciones."
      }
    ],
    "instructorBio": [
      "Empezó vendiendo pescado en la Antártida y gestionando todo a mano. Cuando descubrió la automatización y la IA, su negocio cambió por completo. Hoy ayuda a negocios de todo tipo a usar la tecnología de forma práctica y sin tecnicismos.",
      "Sus cursos son directos, sin relleno y con actividades que produces para tu propio negocio desde la primera lección. No teoría por teoría."
    ]
  },
  "publica": {
    "slug": "publica",
    "title": "Publica con IA sin que se Note",
    "cat": "IA y Contenido",
    "tagline": "No es otro curso de ChatGPT. Es el sistema para pasar de prompt a contenido publicado, con tu voz, en 10 minutos por pieza.",
    "includes": [
      "El sistema de los 3 tipos de contenido que mueven negocios reales",
      "Guion de Reel, carrusel de 7 slides y email de la semana — listos para usar",
      "Calendario de 4 semanas listo para copiar y ejecutar",
      "Los 5 síntomas del contenido que suena a IA y cómo eliminarlos",
      "Herramientas 100% gratuitas · Sin tarjeta ni suscripción"
    ],
    "price": "Gratis",
    "learn": [
      {
        "t": "El cuello de botella no son las ideas",
        "p": "Los 3 bloqueos reales que impiden publicar, los formatos que generan el 80% del impacto y cómo elegir tu plataforma principal.",
        "tag": "3 lecciones · actividad"
      }
    ],
    "chapters": [
      {
        "num": "1.1",
        "t": "Por qué no publicas aunque tengas ChatGPT",
        "d": "Los 3 bloqueos reales: no saber qué pedir, que el resultado no suene a ti y no tener sistema. Diagnóstico con actividad.",
        "tag": "Actividad"
      },
      {
        "num": "2.1",
        "t": "Contenido que entretiene, educa y vende",
        "d": "La lógica detrás de la proporción 50/25/25 y por qué publicar solo contenido de venta te hace invisible.",
        "tag": "Gratis"
      },
      {
        "num": "3.1",
        "t": "El guion de Reel: gancho, desarrollo y CTA",
        "d": "La estructura de los 3 bloques y el prompt para generar el guion completo. Con el error más frecuente en ganchos.",
        "tag": "Prompt copiable"
      },
      {
        "num": "4.1",
        "t": "Los 5 síntomas del contenido que suena a robot",
        "d": "Frases genéricas de apertura, adjetivos vacíos, conclusiones redundantes y ausencia de especificidad. Cómo detectarlos y eliminarlos.",
        "tag": "Filtro incluido"
      },
      {
        "num": "5.1",
        "t": "Lunes de planificación: 7 contenidos en 20 minutos",
        "d": "El proceso de los 3 pasos que elimina para siempre la pregunta «¿qué publico hoy?». Con recordatorio y plantilla.",
        "tag": "Sistema"
      }
    ],
    "faq": [
      {
        "q": "¿En qué se diferencia del curso de prompts de AuryOnTech?",
        "a": "El curso de prompts enseña la técnica: cómo hablarle a la IA para obtener mejores resultados. Este curso enseña el sistema de producción completo: qué publicar, en qué formato, con qué estructura y cómo publicarlo sin que suene a máquina. Son complementarios — el de prompts es el martillo, este es el plano de construcción. Puedes hacer este curso aunque no hayas hecho el de prompts."
      },
      {
        "q": "¿Necesito tener ya una audiencia o seguidores para hacer este curso?",
        "a": "No. El sistema funciona igual si tienes 50 seguidores que si tienes 5.000. De hecho, es más fácil construir el hábito cuando la presión de la audiencia es menor. Empieza ahora, la audiencia llega después de publicar con consistencia."
      },
      {
        "q": "¿Funciona para cualquier sector o red social?",
        "a": "El sistema de los 3 tipos de contenido y los prompts de producción funcionan en cualquier sector y en cualquier plataforma. La lección 1.3 te ayuda a elegir tu plataforma principal y adaptar el enfoque. Los formatos — Reel, carrusel y email — son los de mayor impacto en Instagram, LinkedIn y TikTok."
      },
      {
        "q": "¿Cuánto tiempo necesito para completarlo?",
        "a": "Cada lección lleva entre 15 y 25 minutos si haces la actividad incluida. El curso completo puedes terminarlo en un fin de semana. El sistema que instalas al terminar te ahorra entre 5 y 8 horas de producción al mes."
      },
      {
        "q": "¿Qué herramientas necesito? ¿Hay algo de pago?",
        "a": "Solo necesitas ChatGPT gratuito y Canva gratuito para los carruseles. El email puedes enviarlo desde cualquier plataforma que ya uses — Brevo, Mailchimp o incluso Gmail al principio. No hay ninguna herramienta de pago necesaria para completar el curso."
      },
      {
        "q": "¿Por qué es gratis? ¿Qué me vas a vender después?",
        "a": "Transparencia total: en AuryOnTech hay otros cursos y servicios de consultoría de pago. Este es gratuito porque queremos que compruebes el valor antes de invertir. Si el sistema funciona para ti, ya verás si quieres ir más lejos. Sin correos de venta agresivos, sin urgencias artificiales."
      }
    ],
    "instructorBio": [
      "Empezó vendiendo pescado en la Antártida y gestionando todo a mano. Cuando descubrió la automatización y la IA, su negocio cambió por completo. Hoy ayuda a negocios de todo tipo a usar la tecnología de forma práctica y sin tecnicismos.",
      "Este sistema nació de publicar contenido real para un negocio real. No teoría sobre lo que debería funcionar — lo que funciona cuando tienes poco tiempo y necesitas que el contenido suene a ti."
    ]
  },
  "citas": {
    "slug": "citas",
    "title": "Tu Cliente Nunca Más te Falla una Cita",
    "cat": "IA y Contenido",
    "tagline": "Cierra más con los leads que ya tienes. Respuestas que suenan a ti y mueven a la venta, sin recordatorios que molestan ni plantillas frías.",
    "includes": [
      "Sistema de seguimiento que no suena a robot",
      "Plantillas de mensaje para cada etapa del cliente",
      "Recordatorios automáticos que el cliente agradece",
      "Sin tarjeta de crédito ni suscripción"
    ],
    "price": "Gratis",
    "learn": [],
    "chapters": [],
    "faq": [],
    "instructorBio": []
  },
  "documentos": {
    "slug": "documentos",
    "title": "Automatiza tus Documentos sin Tocar Nada",
    "cat": "Automatización",
    "tagline": "Genera presupuestos, propuestas y contratos desde Excel en segundos. Sin programar, sin copiar y pegar, sin errores. Con una herramienta gratuita que ya tienes instalada en Windows.",
    "includes": [
      "Introduces los datos en Excel una sola vez y el flujo genera todos los documentos solo",
      "Cada documento se guarda con el nombre correcto en la carpeta correcta automáticamente",
      "Funciona para presupuestos, propuestas, contratos, fichas de cliente o cualquier documento que repitas",
      "Sin código, sin suscripciones, sin instalar nada — solo Windows y Office",
      "Conecta directamente con tu CRM de Google Sheets si ya lo usas"
    ],
    "price": "Gratis",
    "learn": [
      {
        "t": "El problema que nadie calcula",
        "p": "Cuánto tiempo pierdes realmente, por qué el copy-paste falla por diseño y qué es Power Automate Desktop.",
        "tag": "3 lecciones · diagnóstico"
      }
    ],
    "chapters": [
      {
        "num": "1.1",
        "t": "Cuánto tiempo pierdes generando el mismo documento",
        "d": "La cuenta exacta del tiempo perdido al mes y por qué ese tiempo es el más caro de tu negocio.",
        "tag": "Actividad"
      },
      {
        "num": "2.1",
        "t": "El Excel de datos",
        "d": "Estructura exacta, reglas de los encabezados y cómo añadir filas nuevas sin tocar el flujo.",
        "tag": "Actividad"
      },
      {
        "num": "3.1",
        "t": "Abre y lee el Excel automáticamente",
        "d": "Acción 1 y 2: Iniciar Excel y Leer hoja de cálculo con la opción imprescindible activada.",
        "tag": "Configuración"
      },
      {
        "num": "4.1",
        "t": "Los 4 errores más frecuentes",
        "d": "Marcador no reemplazado, Excel bloqueado, carpeta inexistente y variable no encontrada — causa y solución en 2 minutos.",
        "tag": "Errores"
      },
      {
        "num": "5.1",
        "t": "Adapta el flujo a tu documento real",
        "d": "6 casos de uso con sus campos exactos y la actividad final: flujo funcionando con datos reales de tu negocio.",
        "tag": "Actividad final"
      }
    ],
    "faq": [
      {
        "q": "¿Necesito saber programar?",
        "a": "No. Power Automate Desktop es una herramienta visual donde arrastras acciones y las conectas. No hay código. Si sabes usar Excel y Word, tienes la base suficiente para hacer este curso sin problema."
      },
      {
        "q": "¿Funciona en Mac?",
        "a": "No. Power Automate Desktop solo está disponible para Windows 10 y 11. Si usas Mac, el curso de Make es tu alternativa — puedes hacer automatizaciones similares conectando Google Sheets con Google Docs de forma visual y sin código."
      },
      {
        "q": "¿Tengo que pagar alguna suscripción?",
        "a": "No. Power Automate Desktop es completamente gratuito y viene incluido en Windows 10 y 11. Solo necesitas una cuenta de Microsoft gratuita para activarlo. El único requisito de pago es tener Word y Excel — si ya los tienes, el curso no tiene ningún coste adicional."
      },
      {
        "q": "¿Para qué tipos de documentos funciona?",
        "a": "Para cualquier documento Word que tenga campos que cambien de un cliente a otro: presupuestos, propuestas, contratos, fichas de cliente, albaranes, confirmaciones de pedido, certificados&#8230; Si tiene campos variables y estructura fija, el flujo funciona."
      },
      {
        "q": "¿Cuánto tiempo tarda en configurarse?",
        "a": "Si ya tienes tu plantilla Word y tu Excel de datos, el flujo se construye en 45-60 minutos siguiendo el curso. La primera vez tardas más porque estás aprendiendo el entorno. La segunda vez — cuando lo adaptes a otro documento — tardas 15 minutos."
      },
      {
        "q": "¿Por qué es gratis?",
        "a": "En AuryOnTech hay cursos y programas de pago. Este es gratuito porque queremos que veas el valor antes de invertir. Si el sistema funciona para tu negocio, ya verás si quieres ir más lejos con los cursos avanzados."
      }
    ],
    "instructorBio": [
      "Empezó gestionando todo a mano — presupuestos copiados uno por uno, contratos editados a mano para cada cliente. Cuando descubrió la automatización de documentos, recuperó horas cada semana que ahora dedica a lo que realmente importa.",
      "Este curso nació de construir el sistema real primero y enseñarlo después — con los errores ya resueltos y el camino más corto documentado paso a paso."
    ]
  },
  "automatizacion": {
    "slug": "automatizacion",
    "title": "Tu Primera Automatización en 30 Minutos",
    "cat": "Automatización",
    "tagline": "Crea tu primer flujo automático con Make y Google Sheets desde cero. Sin código, sin experiencia previa. Completamente gratis.",
    "includes": [
      "9 lecciones interactivas",
      "Quiz al final de cada módulo",
      "Flujo real funcionando al terminar",
      "Certificado de finalización incluido",
      "Sin tarjeta de crédito ni suscripción"
    ],
    "price": "Gratis",
    "learn": [
      {
        "t": "Qué es la automatización y por qué importa",
        "p": "Desmitificamos el concepto. No es código, no es IA, no es complicado. Es decirle a un sistema: cuando pase X, haz Y.",
        "tag": "Módulo 1 · 2 lecciones + quiz"
      }
    ],
    "chapters": [
      {
        "num": "M0",
        "t": "Bienvenida de Aury",
        "d": "Presentación del curso, qué vas a construir y cómo sacarle el máximo partido en 30 minutos.",
        "tag": "Gratis"
      }
    ],
    "faq": [
      {
        "q": "¿Es gratis de verdad? ¿Hay algún truco?",
        "a": "Sin truco. El curso es completamente gratuito, sin tarjeta de crédito ni suscripción oculta. Lo ofrecemos gratis porque queremos que pruebes la metodología antes de dar el siguiente paso con nuestros cursos de pago."
      },
      {
        "q": "¿Necesito saber algo de tecnología para empezar?",
        "a": "No. El curso empieza desde cero absoluto. Si sabes usar Gmail y Google Sheets, tienes todo lo que necesitas. El resto lo aprendes en el propio curso."
      },
      {
        "q": "¿Cuánto tiempo necesito realmente?",
        "a": "30 minutos si sigues el ritmo del curso. Puedes hacerlo en una sola sesión o distribuirlo como quieras. El curso guarda tu progreso automáticamente."
      },
      {
        "q": "¿Qué pasa cuando termino el curso?",
        "a": "Recibes un certificado de finalización que puedes compartir en LinkedIn. Además el Módulo 4 te da el camino claro de qué aprender después según lo que quieras automatizar en tu negocio."
      },
      {
        "q": "¿Hay costes en las herramientas que uso en el curso?",
        "a": "No. Make tiene plan gratuito con 1.000 operaciones al mes, más que suficiente para este curso y para seguir practicando después. Gmail y Google Sheets son gratuitos. Cero inversión extra."
      },
      {
        "q": "¿Cómo accedo al curso después de registrarme?",
        "a": "Inmediatamente. Al hacer clic en «Empezar el curso ahora» tienes acceso directo a todas las lecciones. Sin esperas ni aprobaciones."
      }
    ],
    "instructorBio": [
      "Empezó vendiendo pescado en la Antártida y gestionando todo a mano. Cuando descubrió la automatización, su negocio cambió por completo. Hoy ayuda a negocios de todo tipo a dar sus primeros pasos con Make, Zapier y n8n.",
      "No tiene un máster en tecnología. Tiene experiencia real resolviendo problemas reales. Por eso sus cursos son directos, prácticos y sin relleno."
    ]
  },
  "minicrm": {
    "slug": "minicrm",
    "title": "Tu Mini CRM Gratis en Google Sheets",
    "cat": "Negocio",
    "tagline": "Cada mes dejas ir clientes que ya mostraron interés. No porque no te importaran, sino porque no tenías un sistema para recordar que existían. Eso lo arreglamos hoy.",
    "includes": [
      "CRM funcional construido desde cero en 20 minutos",
      "Colores automáticos por estado — sabes qué hacer de un vistazo",
      "Fórmula que te dice exactamente a quién contactar hoy",
      "5 plantillas de seguimiento para cada situación",
      "Conexión con Make para que los leads lleguen solos",
      "Certificado descargable al terminar"
    ],
    "price": "Gratis",
    "learn": [
      {
        "t": "Por qué estás perdiendo clientes sin darte cuenta",
        "p": "La cuenta del dinero que dejas ir cada mes, y la diferencia real entre guardar datos y tener un sistema que te diga qué hacer.",
        "tag": "2 lecciones · actividad"
      }
    ],
    "chapters": [
      {
        "num": "1.1",
        "t": "El seguimiento que nunca haces",
        "d": "Calculas cuánto dinero real estás dejando ir cada mes. La actividad que nadie quiere hacer pero que lo cambia todo.",
        "tag": "Actividad"
      },
      {
        "num": "2.1",
        "t": "Las 7 columnas que necesitas (y por qué no más)",
        "d": "Encabezados exactos, para qué sirve cada campo y por qué menos columnas significa más uso real.",
        "tag": "Checklist"
      },
      {
        "num": "3.1",
        "t": "Cómo registrar un lead en 2 minutos",
        "d": "El hábito de registrar al momento, la plantilla de 6 campos y el atajo para hacerlo desde el móvil.",
        "tag": "Plantilla"
      },
      {
        "num": "4.1",
        "t": "Captura leads de Gmail automáticamente",
        "d": "Redirige el Scenario de Make para que los correos de leads lleguen directamente a tu CRM con estado «Nuevo».",
        "tag": "Automatización"
      },
      {
        "num": "5.1",
        "t": "Cuándo Google Sheets ya no es suficiente",
        "d": "Las 3 señales de que necesitas un CRM profesional y comparativa de HubSpot, Pipedrive y ActiveCampaign.",
        "tag": "Gratis"
      }
    ],
    "faq": [
      {
        "q": "¿Necesito pagar Google Workspace o alguna herramienta de pago?",
        "a": "No. La cuenta gratuita de Google es suficiente. Google Sheets es gratuito y todo lo que construyes en este curso funciona sin pagar nada. El módulo 4 usa Make, que tiene plan gratuito con operaciones suficientes para empezar."
      },
      {
        "q": "¿Cuánto tiempo necesito para completarlo?",
        "a": "El módulo 2, donde construyes el CRM, lo completas en 20-30 minutos. El curso completo, haciendo todas las actividades, lleva entre 2 y 3 horas. Puedes hacerlo en un sábado por la mañana y tener el sistema funcionando antes de comer."
      },
      {
        "q": "¿Sirve si no tengo conocimientos de fórmulas de Sheets?",
        "a": "Sí. Las fórmulas están listas para copiar y pegar. El curso te explica para qué sirve cada una, pero no necesitas entenderla para aplicarla. Si sabes escribir en una celda de Excel, puedes hacer este curso."
      },
      {
        "q": "¿El módulo 4 de Make es obligatorio?",
        "a": "No. El CRM funciona perfectamente sin Make. El módulo 4 es una capa extra de automatización para quien ya completó el curso de automatizaciones de AuryOnTech. Los módulos 1, 2 y 3 son completamente independientes y el sistema ya queda funcional al terminarlos."
      },
      {
        "q": "¿Puedo usarlo para mi equipo o solo para mí?",
        "a": "Google Sheets admite colaboración en tiempo real. Funciona para uno o dos usuarios sin problema. La última lección del curso explica exactamente cuándo el sistema deja de escalar bien con equipo y qué CRM profesional elegir según tu tamaño."
      },
      {
        "q": "¿Por qué es gratis? ¿Qué me vas a vender después?",
        "a": "Transparencia total: en AuryOnTech hay otros cursos y servicios de pago. Este es gratuito porque queremos que veas el valor antes de invertir en algo. Si el curso te sirve, ya verás si quieres seguir. Sin presión y sin correos de venta agresivos."
      }
    ],
    "instructorBio": [
      "Empezó vendiendo pescado en la Antártida y gestionando todo a mano. Cuando descubrió la automatización y la IA, su negocio cambió por completo. Hoy ayuda a negocios de todo tipo a usar la tecnología de forma práctica y sin tecnicismos.",
      "Este CRM nació de la necesidad real. El sistema que vas a construir es el mismo que usa para no dejar morir ningún lead. Sin misterio, sin pasos de más."
    ]
  },
  "producto-digital": {
    "slug": "producto-digital",
    "title": "Tu Primer Producto Digital con IA",
    "cat": "Negocio · Premium",
    "tagline": "Monta una tienda que procesa pedidos, cobra y da seguimiento sola. El curso completo, de principio a fin.",
    "includes": [
      "Tienda funcional que vende en automático",
      "Cobro y entrega del producto sin intervención",
      "Seguimiento post-venta automatizado",
      "Acceso de por vida + actualizaciones"
    ],
    "price": "47€",
    "learn": [],
    "chapters": [],
    "faq": [],
    "instructorBio": []
  }
};

export const cursoSlugs = ["prompts", "publica", "citas", "documentos", "automatizacion", "minicrm", "producto-digital"];
