// AUTO-GENERATED from auryontech-copy material-*.html. Pedagogical content portado.
export type MBlock =
  | { t: "p"; x: string }
  | { t: "h"; x: string }
  | { t: "ul"; x: string[] }
  | { t: "ol"; x: string[] }
  | { t: "steps"; x: { s: string; p: string }[] }
  | { t: "callout"; s: string; p: string }
  | { t: "action"; label: string; title: string; steps: string[] }
  | { t: "quiz"; q: string; opts: { x: string; c: boolean }[] }
  | { t: "code"; lang: string; code: string }
  | { t: "prompt"; label: string; code: string };

export type MLesson = { titulo: string; objetivo: string; blocks: MBlock[] };
export type MModule = { modulo: string; titulo: string; lecciones: MLesson[] };
export type Material = {
  courseTitle: string;
  nextCourse: string;
  relatedCourse: string;
  modules: MModule[];
};

export const materiales: Record<string, Material> = {
  "automatizacion": {
    "courseTitle": "Tu Primera Automatización con Make",
    "nextCourse": "Automatiza tu negocio con n8n",
    "modules": [
      {
        "modulo": "01",
        "titulo": "El problema que estás ignorando",
        "lecciones": [
          {
            "titulo": "Cuánto tiempo pierdes en tareas repetitivas",
            "objetivo": "Calcular cuántas horas reales estás perdiendo en trabajo manual que una máquina puede hacer en tu lugar.",
            "blocks": [
              {
                "t": "p",
                "x": "Tienes un negocio. Llegan correos con facturas, pedidos, confirmaciones. Los abres, copias el dato que necesitas y lo pegas en una hoja de cálculo. Lo haces el lunes, el miércoles, el viernes. Cada semana, sin falta."
              },
              {
                "t": "p",
                "x": "No parece gran cosa. Pero hagamos la cuenta real:"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "10 minutos al día en tareas repetitivas",
                    "p": "Registrar datos, reenviar correos, actualizar hojas, confirmar citas."
                  },
                  {
                    "s": "50 minutos a la semana",
                    "p": "Que podrías dedicar a conseguir clientes nuevos o mejorar tu servicio."
                  },
                  {
                    "s": "Más de 3 horas al mes",
                    "p": "Haciendo exactamente lo mismo que hiciste el mes pasado. Y el anterior."
                  },
                  {
                    "s": "40 horas al año",
                    "p": "Una semana laboral completa. Perdida. En copiar y pegar datos."
                  }
                ]
              },
              {
                "t": "p",
                "x": "Y eso son solo 10 minutos. Si son 30, multiplica todo por tres."
              },
              {
                "t": "h",
                "x": "¿Cuáles son esas tareas en tu caso?"
              },
              {
                "t": "p",
                "x": "Estos son los ejemplos más comunes en negocios pequeños y medianos:"
              },
              {
                "t": "ul",
                "x": [
                  "Registrar facturas o pedidos que llegan por correo en una hoja de cálculo",
                  "Enviar confirmaciones cada vez que alguien reserva o compra",
                  "Guardar datos de leads que llegan por formulario en un CRM o una hoja",
                  "Actualizar inventario manualmente después de cada venta",
                  "Recordar a clientes sobre citas o pagos pendientes"
                ]
              },
              {
                "t": "p",
                "x": "Todas estas tareas tienen algo en común: siguen siempre el mismo patrón. Cuando pasa X, hago Y. Y eso es exactamente lo que puede hacer una automatización."
              },
              {
                "t": "callout",
                "s": "La automatización no reemplaza tu criterio",
                "p": "No se trata de que una máquina tome decisiones por ti. Se trata de que no tengas que hacer el trabajo mecánico que no requiere tu cerebro. Tú defines la regla una sola vez. La máquina la ejecuta para siempre."
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Identifica tus tareas repetitivas",
                "steps": [
                  "01 Piensa en los últimos 3 días de trabajo",
                  "02 Escribe 2 o 3 tareas que hiciste más de una vez y que siguieron el mismo patrón",
                  "03 Marca cuál te quita más tiempo a la semana, esa es tu primera candidata para automatizar"
                ]
              }
            ]
          },
          {
            "titulo": "Qué es Make y cómo piensa",
            "objetivo": "Entender los conceptos de trigger y acción para poder construir tu primera automatización sin confusión.",
            "blocks": [
              {
                "t": "p",
                "x": "Make es una herramienta que conecta aplicaciones y les da instrucciones. Sin código. Sin servidores. Sin nada técnico que no puedas entender en 5 minutos."
              },
              {
                "t": "p",
                "x": "Todo lo que construyes en Make se llama un Scenario . Un Scenario es una regla: cuando pase esto, haz aquello . Eso es todo."
              },
              {
                "t": "h",
                "x": "Los dos ingredientes de cualquier automatización"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Trigger: el disparador",
                    "p": "El evento que activa todo el flujo. Sin trigger, nada se mueve. Ejemplo: \"Llegó un correo con la palabra Factura en el asunto.\""
                  },
                  {
                    "s": "Acción: qué hace Make",
                    "p": "Lo que ocurre automáticamente cuando el trigger se activa. Ejemplo: \"Agrega una fila a mi Google Sheet con los datos de ese correo.\""
                  }
                ]
              },
              {
                "t": "p",
                "x": "Eso es todo. Un trigger más una o más acciones. El resto es detalle de configuración."
              },
              {
                "t": "h",
                "x": "Lo que vamos a construir en este curso"
              },
              {
                "t": "code",
                "lang": "Flujo del curso",
                "code": "Trigger: Gmail detecta un correo con \"Factura\" en el asunto\n   ↓\nAcción: Google Sheets agrega una fila con los datos del correo\n   ↓\nResultado: tu registro de facturas se actualiza solo, sin que toques nada"
              },
              {
                "t": "p",
                "x": "Al terminar esta sesión tendrás esto corriendo. Envías un correo de prueba con \"Factura\" en el asunto y ves la fila aparecer sola en tu hoja en menos de 30 segundos."
              },
              {
                "t": "callout",
                "s": "Make tiene un plan gratuito que es suficiente para este curso",
                "p": "El plan gratuito incluye 1,000 operaciones al mes. Una operación es un módulo ejecutado. Para el flujo de dos módulos que vamos a construir, 1,000 operaciones te dan para semanas de uso real sin pagar nada."
              },
              {
                "t": "quiz",
                "q": "En Make, ¿qué es un \"trigger\"?",
                "opts": [
                  {
                    "x": "La tarea que Make ejecuta automáticamente",
                    "c": false
                  },
                  {
                    "x": "El evento que activa el inicio del flujo",
                    "c": true
                  },
                  {
                    "x": "El nombre de la automatización completa",
                    "c": false
                  }
                ]
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Escribe tu primera regla de automatización",
                "steps": [
                  "01 Toma la tarea repetitiva que identificaste en la lección anterior",
                  "02 Escríbela en formato: \"Cuando [trigger], quiero que [acción]\"",
                  "03 Ejemplo: \"Cuando llega un correo con Factura en el asunto, quiero que los datos se guarden solos en Sheets\""
                ]
              }
            ]
          }
        ]
      },
      {
        "modulo": "02",
        "titulo": "Prepara tu espacio de trabajo",
        "lecciones": [
          {
            "titulo": "Crea tu cuenta gratuita en Make",
            "objetivo": "Tener tu cuenta de Make activa y reconocer las tres secciones que vas a usar en este curso.",
            "blocks": [
              {
                "t": "p",
                "x": "Make corre 100% en el navegador. No hay nada que instalar. Solo necesitas una dirección de correo para crear tu cuenta gratuita y empezar a construir."
              },
              {
                "t": "h",
                "x": "Crea tu cuenta, paso a paso"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Ve a make.com en tu navegador",
                    "p": "Escribe make.com y presiona Enter. Haz clic en el botón Get started free ."
                  },
                  {
                    "s": "Regístrate con tu cuenta de Gmail",
                    "p": "Recomendado: usa la misma cuenta de Gmail que vas a conectar a la automatización. Así la autorización es más directa."
                  },
                  {
                    "s": "Confirma tu correo electrónico",
                    "p": "Make te manda un correo de verificación. Ábrelo y haz clic en el enlace. Puede tardar entre 1 y 3 minutos."
                  },
                  {
                    "s": "Salta el asistente de bienvenida",
                    "p": "Make te mostrará un wizard inicial. Puedes cerrarlo, lo que necesitas está directamente en el dashboard principal."
                  }
                ]
              },
              {
                "t": "p",
                "x": "Ya estás dentro. Tómate 2 minutos para explorar la pantalla antes de continuar."
              },
              {
                "t": "h",
                "x": "Las tres secciones que vas a usar"
              },
              {
                "t": "p",
                "x": "📸 Captura pendiente Dashboard de Make · Reemplaza AQUÍ_VA_TU_URL en el HTML Así se ve tu dashboard de Make recién creada la cuenta"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Scenarios",
                    "p": "Aquí viven todas tus automatizaciones. Por ahora está vacío. Aquí vamos a crear la tuya en el siguiente módulo."
                  },
                  {
                    "s": "Connections",
                    "p": "Las aplicaciones que has conectado a Make. Gmail y Google Sheets aparecerán aquí cuando los conectemos."
                  },
                  {
                    "s": "History",
                    "p": "El registro de cada ejecución de tus Scenarios. Útil para verificar que todo funciona correctamente."
                  }
                ]
              },
              {
                "t": "p",
                "x": "✓ Confirma antes de continuar Creé mi cuenta en make.com Confirmé mi correo electrónico Puedo ver el dashboard con la sección Scenarios visible"
              }
            ]
          },
          {
            "titulo": "Prepara tu Google Sheet",
            "objetivo": "Crear la hoja de cálculo con la estructura exacta que Make necesita para saber dónde escribir los datos.",
            "blocks": [
              {
                "t": "p",
                "x": "Antes de construir la automatización necesitas el destino: la hoja donde van a aterrizar los datos. Si no existe de antemano, Make no sabe dónde escribir."
              },
              {
                "t": "h",
                "x": "Crea el Google Sheet, paso a paso"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Ve a sheets.google.com",
                    "p": "Asegúrate de estar con la misma cuenta de Google que usaste al registrarte en Make."
                  },
                  {
                    "s": "Crea una hoja nueva en blanco",
                    "p": "Haz clic en el botón + o en Hoja de cálculo en blanco ."
                  },
                  {
                    "s": "Nómbrala \"Registro de Facturas\"",
                    "p": "Haz clic en el texto \"Hoja de cálculo sin título\" en la parte superior izquierda y escribe ese nombre."
                  },
                  {
                    "s": "Escribe los encabezados en la fila 1",
                    "p": "Uno por columna, exactamente como aparecen abajo. Make los va a leer para saber qué dato va en qué columna."
                  }
                ]
              },
              {
                "t": "code",
                "lang": "Encabezados · Fila 1 de tu Sheet",
                "code": "A1: Fecha\nB1: Remitente\nC1: Asunto\nD1: Monto\nE1: Descripcion"
              },
              {
                "t": "callout",
                "s": "Escribe \"Descripcion\" sin tilde",
                "p": "Solo para este encabezado, omite el acento. Algunos entornos de WordPress tienen conflictos de encoding con caracteres especiales en nombres de columna. El contenido que llegue de los correos puede tener acentos sin problema."
              },
              {
                "t": "p",
                "x": "📸 Captura pendiente Google Sheet con los 5 encabezados · Reemplaza AQUÍ_VA_TU_URL Tu Sheet debe verse así antes de conectarla a Make"
              },
              {
                "t": "h",
                "x": "Para qué sirve cada columna"
              },
              {
                "t": "p",
                "x": "Fecha: Make captura automáticamente el timestamp del correo, cuándo llegó exactamente."
              },
              {
                "t": "p",
                "x": "Remitente: El correo de quien mandó la factura. Te dice de qué proveedor viene sin tener que abrir el correo."
              },
              {
                "t": "p",
                "x": "Asunto: La línea de asunto completa del correo."
              },
              {
                "t": "p",
                "x": "Monto: Lo dejamos vacío por ahora. En el módulo de escalado verás cómo extraerlo automáticamente del cuerpo del correo."
              },
              {
                "t": "p",
                "x": "Descripcion: El fragmento inicial del cuerpo del correo, los primeros ~200 caracteres. Suficiente para saber de qué se trata."
              },
              {
                "t": "quiz",
                "q": "¿En qué fila deben estar los encabezados de tu Sheet para que Make los detecte correctamente?",
                "opts": [
                  {
                    "x": "En cualquier fila, Make los encuentra solo",
                    "c": false
                  },
                  {
                    "x": "En la fila 1, sin celdas vacías antes",
                    "c": true
                  },
                  {
                    "x": "En la fila 2, para dejar la primera libre",
                    "c": false
                  }
                ]
              },
              {
                "t": "p",
                "x": "✓ Confirma antes de continuar Creé el archivo \"Registro de Facturas\" en Google Sheets Los 5 encabezados están escritos exactamente como se indica en la fila 1 Estoy usando la misma cuenta de Google que registré en Make"
              }
            ]
          }
        ]
      },
      {
        "modulo": "03",
        "titulo": "Construye la automatización",
        "lecciones": [
          {
            "titulo": "Configura el trigger: Gmail detecta 'Factura'",
            "objetivo": "Conectar Gmail a Make y configurar el módulo que vigila tu bandeja de entrada en busca de correos con 'Factura' en el asunto.",
            "blocks": [
              {
                "t": "p",
                "x": "Aquí empieza lo concreto. Vas a crear tu primer Scenario en Make y configurar el módulo que vigila tu bandeja de entrada."
              },
              {
                "t": "h",
                "x": "Crea el Scenario"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Ve a Scenarios en el menú izquierdo de Make",
                    "p": "Haz clic en + Create a new scenario, el botón naranja en la esquina superior derecha."
                  },
                  {
                    "s": "Verás un canvas vacío con un círculo grande en el centro",
                    "p": "Ese círculo es donde va el trigger. Haz clic en él para agregar el primer módulo."
                  },
                  {
                    "s": "Busca \"Gmail\" en el buscador que aparece",
                    "p": "Escribe \"Gmail\" y selecciona la aplicación de Google de la lista de resultados."
                  },
                  {
                    "s": "Elige \"Watch emails\"",
                    "p": "No elijas \"Watch email threads\" ni ninguna otra opción, solo Watch emails ."
                  }
                ]
              },
              {
                "t": "h",
                "x": "Conecta tu cuenta de Gmail"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "En el campo \"Connection\", haz clic en \"Create a Connection\"",
                    "p": "Se abre un diálogo con el campo \"Connection name\", puedes dejarlo como \"My Gmail connection\". Haz clic en \"Sign in with Google\", selecciona tu cuenta y acepta los permisos que Google solicita."
                  },
                  {
                    "s": "Selecciona tu cuenta de Gmail y autoriza el acceso",
                    "p": "Google te pedirá confirmar que Make puede leer tus correos. Esto es necesario para que el trigger funcione."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "¿Qué permisos le das a Make exactamente?",
                "p": "Make puede leer correos nuevos según los filtros que tú configures. No puede enviar ni eliminar correos a menos que tú agregues un módulo específico para eso. Tú controlas qué puede y qué no puede hacer."
              },
              {
                "t": "h",
                "x": "Configura el módulo de Gmail"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Filter type → dejar en \"Simple filter\"",
                    "p": "El valor por defecto es correcto. No lo cambies."
                  },
                  {
                    "s": "Folder → dejar en \"System folders: Inbox\"",
                    "p": "Make va a vigilar tu bandeja de entrada principal."
                  },
                  {
                    "s": "Criteria → cambiar a \"Only unread messages\"",
                    "p": "Así Make solo procesa correos nuevos que aún no has leído. Abre el desplegable y selecciona Only unread messages ."
                  },
                  {
                    "s": "Mark email message(s) as read when fetched → dejar en \"No\"",
                    "p": "Dejar en No para que Make no marque tus correos como leídos automáticamente."
                  },
                  {
                    "s": "Limit → cambiar a 1",
                    "p": "El valor por defecto es 10. Cámbialo a 1 . Significa que Make procesa un correo por ejecución, suficiente para empezar."
                  },
                  {
                    "s": "Activa el toggle \"Advanced settings\" en la parte inferior izquierda",
                    "p": "Al activarlo aparecen campos adicionales de filtrado: \"Sender email address\", \"Subject\", \"Has the words\", entre otros."
                  },
                  {
                    "s": "Subject → escribe \"Factura\"",
                    "p": "En el campo Subject escribe exactamente: Factura . Make procesará solo los correos que contengan esa palabra en el asunto. Puedes cambiarlo por cualquier palabra clave que usen tus correos."
                  },
                  {
                    "s": "Haz clic en \"Save\"",
                    "p": "Aparece un diálogo: \"Choose where to start\". Selecciona From now on y haz clic en \"Save\". Esto le dice a Make que solo procese correos nuevos a partir de este momento, no los que ya tienes en el inbox."
                  }
                ]
              },
              {
                "t": "p",
                "x": "📸 Captura pendiente Módulo Gmail con filtro · Reemplaza AQUÍ_VA_TU_URL El módulo de Gmail configurado con el campo \"Subject: Factura\" en Advanced settings"
              },
              {
                "t": "callout",
                "s": "Error frecuente: \"No connection selected\"",
                "p": "Si ves este mensaje al abrir el módulo, la conexión con Google no se completó. Haz clic en \"Create a Connection\" junto al campo Connection y repite el proceso de autorización desde el paso 5."
              },
              {
                "t": "quiz",
                "q": "¿Dónde configuras en Make el filtro para que solo procese correos con \"Factura\" en el asunto?",
                "opts": [
                  {
                    "x": "En el campo \"Criteria\" del módulo de Gmail",
                    "c": false
                  },
                  {
                    "x": "En el campo \"Has the words\" dentro de Advanced settings",
                    "c": false
                  },
                  {
                    "x": "En el campo \"Subject\" dentro de Advanced settings",
                    "c": true
                  }
                ]
              },
              {
                "t": "action",
                "label": "Hasta aquí",
                "title": "El trigger está listo",
                "steps": [
                  "01 Gmail conectado en Make ✓",
                  "02 Factura escrito en el campo \"Subject\" dentro de Advanced settings ✓",
                  "03 \"From now on\" seleccionado en el diálogo \"Choose where to start\" ✓"
                ]
              }
            ]
          },
          {
            "titulo": "Configura la acción: los datos llegan solos a Sheets",
            "objetivo": "Conectar Google Sheets a Make y mapear los campos del correo a las columnas de tu hoja.",
            "blocks": [
              {
                "t": "p",
                "x": "Tienes el trigger. Ahora le dices a Make qué hacer cuando detecta ese correo: abrir tu hoja de Sheets y escribir los datos automáticamente."
              },
              {
                "t": "h",
                "x": "Agrega el módulo de Google Sheets"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "En el canvas, haz clic en el \"+\" a la derecha del módulo de Gmail",
                    "p": "Ese símbolo es donde encadenas la siguiente acción al trigger."
                  },
                  {
                    "s": "Busca \"Google Sheets\" y selecciónalo",
                    "p": "Escribe \"Sheets\" en el buscador que aparece."
                  },
                  {
                    "s": "Elige \"Add a row\"",
                    "p": "Esta acción agrega una fila nueva al final de tu hoja cada vez que se ejecuta."
                  },
                  {
                    "s": "Conecta tu cuenta de Google",
                    "p": "En el campo \"Connection\" haz clic en \"Create a Connection\". Se abre el diálogo con el campo \"Connection name\", puedes dejarlo como \"My Google connection\". Haz clic en \"Sign in with Google\". Google te pide autorizar dos permisos: acceso a Google Drive y acceso a Google Sheets. Ambos vienen marcados por defecto, déjalos así y haz clic en \"Continuar\". Make solo va a tocar el archivo que tú le indiques, nada más."
                  }
                ]
              },
              {
                "t": "h",
                "x": "Selecciona el archivo y mapea los campos"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Spreadsheet Name → haz clic en \"Click here to choose file\"",
                    "p": "Se abre el selector de archivos de tu Google Drive. Navega hasta el archivo \"Registro de Facturas\" que creaste antes y selecciónalo. El campo mostrará / REGISTRO DE FACTURAS ."
                  },
                  {
                    "s": "Sheet Name → seleccionar \"REGISTRO DE FACTURAS\"",
                    "p": "Make detecta automáticamente las pestañas del archivo. En el desplegable aparece REGISTRO DE FACTURAS, selecciónalo."
                  },
                  {
                    "s": "Mapea los valores: aquí está la clave",
                    "p": "Make detecta tus encabezados y muestra un campo por columna: FECHA (A), REMITENTE (B), ASUNTO (C), MONTO (D) y DESCRIPCION (E). Haz clic en cada campo, se abre un selector con todas las variables disponibles del módulo de Gmail. Puedes escribir el nombre para filtrar la lista."
                  }
                ]
              },
              {
                "t": "code",
                "lang": "Mapeo de campos Gmail → Sheets",
                "code": "FECHA (A)       → haz clic en el campo → selecciona \"Date\"\nREMITENTE (B)   → haz clic en el campo → selecciona \"From (email)\"\nASUNTO (C)      → haz clic en el campo → selecciona \"Subject\"\nMONTO (D)       → dejar vacío por ahora\nDESCRIPCION (E) → haz clic en el campo → selecciona \"Snippet\""
              },
              {
                "t": "callout",
                "s": "¿Qué es \"Snippet\"?",
                "p": "Gmail genera automáticamente un resumen de los primeros ~200 caracteres del cuerpo de cada correo. Make puede leerlo y escribirlo en tu hoja sin necesidad de parsear el cuerpo completo."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Haz clic en \"Save\"",
                    "p": "El módulo queda guardado. Tu canvas ahora muestra dos módulos conectados: Gmail → Google Sheets."
                  }
                ]
              },
              {
                "t": "p",
                "x": "📸 Captura pendiente Módulo Sheets con campos mapeados · Reemplaza AQUÍ_VA_TU_URL Cada campo de Gmail asignado a su columna en Sheets, así se ve el mapeo correcto"
              },
              {
                "t": "callout",
                "s": "Make no detecta las columnas de tu Sheet",
                "p": "Verifica que \"Table contains headers\" esté en \"Yes\" y que los encabezados estén en la fila 1 sin celdas vacías antes. Si acabas de crear el archivo, cierra el panel y vuelve a abrirlo, a veces Make necesita un momento para leer la hoja."
              },
              {
                "t": "quiz",
                "q": "¿Qué variable de Gmail mapeas a la columna DESCRIPCION de tu Sheet?",
                "opts": [
                  {
                    "x": "Full text body",
                    "c": false
                  },
                  {
                    "x": "HTML body",
                    "c": false
                  },
                  {
                    "x": "Snippet",
                    "c": true
                  }
                ]
              },
              {
                "t": "action",
                "label": "Hasta aquí",
                "title": "Los dos módulos están conectados",
                "steps": [
                  "01 Google Sheets conectado ✓",
                  "02 Archivo \"Registro de Facturas\" seleccionado ✓",
                  "03 FECHA → Date, REMITENTE → From (email), ASUNTO → Subject, DESCRIPCION → Snippet mapeados ✓",
                  "04 Haz clic en \"Save\", el canvas muestra Gmail → Google Sheets conectados ✓"
                ]
              }
            ]
          },
          {
            "titulo": "Prueba en vivo: envía el correo y mira qué pasa",
            "objetivo": "Ejecutar la automatización por primera vez y verificar que la fila aparece sola en tu Google Sheet.",
            "blocks": [
              {
                "t": "p",
                "x": "Los dos módulos están configurados y conectados. Ahora vas a ejecutar la automatización por primera vez y ver cómo los datos aparecen solos en tu hoja, sin que toques nada."
              },
              {
                "t": "h",
                "x": "Ejecuta la prueba manual"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Abre Gmail y envíate un correo de prueba con \"Factura\" en el asunto",
                    "p": "Dirígelo a tu misma dirección de Gmail. En el asunto escribe algo como: Factura de prueba #001 . El cuerpo puede ser cualquier cosa."
                  },
                  {
                    "s": "Vuelve a Make y haz clic en \"Run once\" (abajo a la izquierda)",
                    "p": "Make ejecuta el Scenario una vez: busca en tu bandeja de entrada los correos no leídos con \"Factura\" en el asunto y procesa el que acabas de enviar."
                  },
                  {
                    "s": "Verifica que aparecen números verdes sobre cada módulo",
                    "p": "Un número verde sobre Gmail y otro sobre Google Sheets confirman que la ejecución fue exitosa y que se procesó un correo."
                  },
                  {
                    "s": "Abre tu \"Registro de Facturas\" en Google Sheets",
                    "p": "Debería aparecer una nueva fila con la fecha, el remitente, el asunto y el snippet del correo de prueba, escrita sola, sin que hayas tocado nada."
                  }
                ]
              },
              {
                "t": "p",
                "x": "📸 Captura pendiente Fila de prueba en Sheets con datos reales · Reemplaza AQUÍ_VA_TU_URL Una fila nueva con los datos del correo de prueba, aparecida sola, sin intervención"
              },
              {
                "t": "callout",
                "s": "Nada apareció en Sheets, revisa en este orden",
                "p": "1. El asunto del correo contiene la palabra \"Factura\" con F mayúscula. 2. El correo llegó a tu bandeja de entrada, no a Spam. 3. En el módulo de Gmail, dentro de Advanced settings, el campo \"Subject\" dice exactamente Factura . 4. El archivo seleccionado en el módulo de Sheets es \"Registro de Facturas\" y no otro."
              },
              {
                "t": "h",
                "x": "Activa el Scenario para que corra solo"
              },
              {
                "t": "p",
                "x": "\"Run once\" es solo para pruebas, ejecuta el flujo una sola vez de forma manual. Para que tu automatización funcione de forma permanente sin que hagas nada, tienes que activar la ejecución programada:"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "En la barra inferior, activa el toggle junto a \"Every 15 minutes\"",
                    "p": "Verás el toggle cambiar a activo. Esto le dice a Make que revise tu bandeja automáticamente cada 15 minutos y ejecute el Scenario si encuentra correos nuevos con \"Factura\" en el asunto. En el plan gratuito el intervalo mínimo es 15 minutos."
                  },
                  {
                    "s": "Guarda el Scenario con Cmd+S o el botón Save",
                    "p": "Tu automatización está activa y funcionando de forma permanente. A partir de ahora cada correo con \"Factura\" en el asunto que llegue a tu bandeja quedará registrado solo en tu Sheet, sin que toques nada."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "Tienes tu primera automatización corriendo",
                "p": "Cada correo con \"Factura\" en el asunto que llegue a tu bandeja se registrará automáticamente en tu Sheet. Para siempre. Sin que toques nada."
              },
              {
                "t": "p",
                "x": "🎯 Momento de verdad ¿Apareció la fila en tu Google Sheet? Sí, la veo 🎉 No, algo salió mal"
              }
            ]
          }
        ]
      },
      {
        "modulo": "04",
        "titulo": "Ahora escala",
        "lecciones": [
          {
            "titulo": "Variaciones: qué más puedes capturar con este flujo",
            "objetivo": "Adaptar el Scenario que construiste a otros casos de uso de tu negocio sin empezar desde cero.",
            "blocks": [
              {
                "t": "p",
                "x": "Ya conoces la lógica. Ahora esa misma lógica aplica a docenas de situaciones distintas en tu negocio. Lo único que cambia es el filtro y el destino."
              },
              {
                "t": "h",
                "x": "Cuatro variaciones listas para construir"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Registro de pedidos",
                    "p": "Cambia el filtro a subject:Pedido y el Sheet destino a \"Registro de Pedidos\". Cada pedido que llegue por correo queda registrado solo."
                  },
                  {
                    "s": "Registro de reservas",
                    "p": "Filtro: subject:Reserva . Ideal para consultorios, estudios de tatuajes, restaurantes o cualquier negocio basado en citas."
                  },
                  {
                    "s": "Captura de leads",
                    "p": "Si recibes notificaciones de tu formulario de contacto por correo, filtra por el asunto que generan y guarda nombre, email y mensaje en tu hoja de leads automáticamente."
                  },
                  {
                    "s": "Alertas de pago",
                    "p": "Filtro: from:noreply@paypal.com o subject:Pago confirmado . Cada confirmación de pago queda registrada sin que la busques."
                  }
                ]
              },
              {
                "t": "h",
                "x": "Cómo duplicar tu Scenario en 4 pasos"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Ve a la lista de Scenarios en Make",
                    "p": "Haz clic en el ícono de tres puntos ··· junto al Scenario que construiste."
                  },
                  {
                    "s": "Selecciona \"Clone\"",
                    "p": "Make crea una copia exacta con todas las configuraciones y conexiones existentes."
                  },
                  {
                    "s": "Entra al clon y cambia el filtro de Gmail",
                    "p": "Activa \"Advanced settings\" y modifica solo el campo \"Subject\" con la nueva palabra clave. Todo lo demás se queda igual."
                  },
                  {
                    "s": "Cambia el Sheet de destino en el módulo de Google Sheets",
                    "p": "Apúntalo al archivo correcto para ese flujo. Guarda y activa."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "Agrega una segunda acción al mismo Scenario",
                "p": "No tienes que crear un Scenario nuevo para cada acción. Al mismo flujo de \"Factura detectada\" puedes encadenar un módulo de Gmail que te mande un correo de notificación al instante. Así sabes en tiempo real cuando llegó una factura nueva, sin revisar el Sheet."
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Construye tu segundo flujo",
                "steps": [
                  "01 ¿Qué tipo de correo recibes frecuentemente que sería útil registrar automáticamente?",
                  "02 ¿Qué palabra siempre aparece en el asunto de ese correo?",
                  "03 Crea el Sheet de destino y duplica el Scenario, ya sabes exactamente cómo hacerlo"
                ]
              }
            ]
          },
          {
            "titulo": "Las 3 automatizaciones que siguen para tu negocio",
            "objetivo": "Tener un roadmap claro de las próximas automatizaciones de mayor impacto, ordenadas de menor a mayor complejidad.",
            "blocks": [
              {
                "t": "p",
                "x": "Completaste tu primera automatización. Eso es el primer 10% de lo que Make puede hacer por tu negocio. Estas son las siguientes piezas, ordenadas de menor a mayor complejidad:"
              },
              {
                "t": "h",
                "x": "Automatización #2, Respuesta automática a nuevos leads"
              },
              {
                "t": "p",
                "x": "Qué hace: Cuando alguien llena tu formulario de contacto, Make detecta el correo de notificación y envía automáticamente un mensaje de respuesta a ese lead con la información que tú definas."
              },
              {
                "t": "p",
                "x": "Tiempo ahorrado: 15-20 minutos al día si recibes varios leads."
              },
              {
                "t": "p",
                "x": "Lo que necesitas: Gmail + Gmail. Los dos módulos que ya conoces."
              },
              {
                "t": "p",
                "x": "Dificultad: Baja, es el mismo flujo con un módulo \"Send an email\" encadenado al final."
              },
              {
                "t": "h",
                "x": "Automatización #3, Recordatorio de citas"
              },
              {
                "t": "p",
                "x": "Qué hace: Cada día a las 8am, Make revisa tu Google Calendar, busca las citas del día siguiente y envía un correo de recordatorio a cada cliente automáticamente."
              },
              {
                "t": "p",
                "x": "Tiempo ahorrado: 30 minutos al día. Reducción real de no-shows."
              },
              {
                "t": "p",
                "x": "Lo que necesitas: Google Calendar + Gmail."
              },
              {
                "t": "p",
                "x": "Dificultad: Media, requiere un trigger de horario en vez de un trigger de correo."
              },
              {
                "t": "h",
                "x": "Automatización #4, Dashboard de ventas semanal"
              },
              {
                "t": "p",
                "x": "Qué hace: Cada semana, Make recopila tus ventas de WooCommerce, Stripe o PayPal y actualiza automáticamente una hoja con el resumen: ingresos, productos vendidos, clientes nuevos."
              },
              {
                "t": "p",
                "x": "Tiempo ahorrado: 1-2 horas semanales en reportes manuales."
              },
              {
                "t": "p",
                "x": "Lo que necesitas: Tu plataforma de ventas + Google Sheets."
              },
              {
                "t": "p",
                "x": "Dificultad: Media-alta, hay filtros y transformaciones de datos."
              },
              {
                "t": "callout",
                "s": "El criterio para decidir qué automatizar a continuación",
                "p": "Antes de construir cualquier flujo nuevo, hazte esta pregunta: ¿cuántas veces hago esto a la semana? Si son más de 3, vale la pena automatizarlo. Si son menos de 2, enfoca tu energía en otro lado primero."
              },
              {
                "t": "p",
                "x": "Siguiente nivel Automatiza tu negocio con n8n Ya dominas Make. En este curso construyes automatizaciones más avanzadas con n8n: reportes en PDF con diseño de marca, integraciones con WooCommerce y Stripe, y flujos con lógica condicional y JavaScript. Próximamente"
              },
              {
                "t": "action",
                "label": "Tu siguiente paso",
                "title": "Define tu roadmap de automatización",
                "steps": [
                  "01 De las 3 automatizaciones de arriba, ¿cuál resuelve el dolor más urgente en tu negocio hoy?",
                  "02 Escríbela: \"Cuando [trigger], quiero que [acción] para [resultado]\"",
                  "03 Comparte ese caso de uso, te digo exactamente cómo construirlo"
                ]
              }
            ]
          }
        ]
      }
    ],
    "relatedCourse": "automatizacion"
  },
  "correos": {
    "courseTitle": "Correos en Piloto Automático",
    "nextCourse": "Capturar leads de formulario web en Sheets",
    "modules": [
      {
        "modulo": "01",
        "titulo": "Qué vas a construir",
        "lecciones": [
          {
            "titulo": "El flujo más versátil de la automatización",
            "objetivo": "Entiendes por qué enviar correos desde una hoja de cálculo es una de las automatizaciones más poderosas y usadas del mundo.",
            "blocks": [
              {
                "t": "p",
                "x": "Hay una automatización que aparece en casi todos los negocios del mundo, sin importar el sector ni el tamaño: enviar un correo cuando algo cambia en una hoja de cálculo ."
              },
              {
                "t": "p",
                "x": "Parece simple. Y lo es. Pero lo que hace posible esa simpleza es que detrás hay una lógica que se adapta a prácticamente cualquier escenario de negocio."
              },
              {
                "t": "p",
                "x": "Este flujo lo usan desde startups de tecnología hasta clínicas dentales. Lo usan empleados para automatizar reportes, consultores para dar seguimiento a clientes, y emprendedores para confirmar pedidos sin tocar nada. Es, sin exagerar, uno de los flujos más ejecutados del mundo de la automatización."
              },
              {
                "t": "callout",
                "s": "¿Por qué es tan poderoso?",
                "p": "Porque convierte Google Sheets, una herramienta que ya tienes y ya sabes usar, en el cerebro de tu comunicación. Cada vez que alguien agrega una fila, Make la detecta y dispara exactamente el correo que tú definas. Sin que toques nada."
              },
              {
                "t": "p",
                "x": "En este curso construyes la base. Luego te muestro cómo convertirla en un monstruo que se adapta a tu negocio, tu equipo y tus clientes."
              }
            ]
          },
          {
            "titulo": "Cómo funciona el flujo",
            "objetivo": "Entiendes la lógica completa antes de construir.",
            "blocks": [
              {
                "t": "p",
                "x": "El flujo tiene dos piezas. Solo dos. Y eso es lo que lo hace tan eficiente:"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Google Sheets: Watch New Rows",
                    "p": "Make vigila tu hoja. Cada vez que se agrega una fila nueva, Make la detecta y lee los datos de cada columna, nombre, email, asunto, mensaje."
                  },
                  {
                    "s": "Gmail: Send an email",
                    "p": "Con esos datos, Gmail manda automáticamente un correo personalizado al destinatario de esa fila. El asunto y el cuerpo vienen directo de la hoja."
                  }
                ]
              },
              {
                "t": "p",
                "x": "Eso es todo. Dos módulos. Resultado: cualquier fila que agregues a tu hoja dispara un correo automático en segundos."
              },
              {
                "t": "callout",
                "s": "Todo gratis para el alumno",
                "p": "Google Sheets, Gmail y Make (plan Free) son completamente gratuitos para el volumen que necesitas en este curso. Sin tarjeta de crédito, sin suscripciones."
              }
            ]
          },
          {
            "titulo": "Lo que necesitas",
            "objetivo": "Tienes todo listo antes de empezar a construir.",
            "blocks": [
              {
                "t": "p",
                "x": "✓ Lo que necesitas Cuenta en Make.com, plan Free, sin tarjeta de crédito. Cuenta de Google con Sheets y Gmail activos. Un navegador moderno (Chrome, Firefox, Safari)."
              },
              {
                "t": "callout",
                "s": "Usa la misma cuenta de Google para todo",
                "p": "La cuenta de Google que conectes a Make tiene que ser la misma que tiene acceso a tu hoja de Sheets y a tu Gmail. Si usas cuentas distintas, los módulos no se ven entre sí."
              }
            ]
          }
        ]
      },
      {
        "modulo": "02",
        "titulo": "Prepara tu Google Sheet",
        "lecciones": [
          {
            "titulo": "Estructura de la hoja",
            "objetivo": "Tienes la hoja de Google Sheets con la estructura exacta que Make necesita para leer los datos.",
            "blocks": [
              {
                "t": "p",
                "x": "Make lee tu hoja por columnas. Necesita saber exactamente qué datos hay en cada una. Por eso la estructura de la fila 1, los encabezados, es crítica."
              },
              {
                "t": "p",
                "x": "Crea una hoja nueva en sheets.google.com , nómbrala \"Lista de Correos\" y escribe estos encabezados exactamente así en la fila 1:"
              },
              {
                "t": "code",
                "lang": "Encabezados · Fila 1",
                "code": "A1: Nombre\nB1: Email\nC1: Asunto\nD1: Mensaje"
              },
              {
                "t": "p",
                "x": "La hoja debe verse así: 4 encabezados en la fila 1, columnas A a D"
              },
              {
                "t": "callout",
                "s": "Los encabezados van en la fila 1, sin celdas vacías antes",
                "p": "Make lee los encabezados desde la primera fila. Si hay filas vacías arriba, no los detecta y el mapeo falla."
              }
            ]
          },
          {
            "titulo": "Agrega tu fila de prueba",
            "objetivo": "Tienes una fila de datos reales lista para probar el flujo.",
            "blocks": [
              {
                "t": "p",
                "x": "Antes de construir el flujo necesitas datos reales en la hoja para poder verificar que el correo llega. Agrega esto en la fila 2:"
              },
              {
                "t": "code",
                "lang": "Fila de prueba · Fila 2",
                "code": "A2: Tu nombre\nB2: tu@correo.com  ← usa tu propio correo para verificar\nC2: Hola desde Make\nD2: Este es un correo enviado automáticamente desde Google Sheets."
              },
              {
                "t": "callout",
                "s": "Usa tu propio correo en la columna Email",
                "p": "Así puedes verificar que el correo llega correctamente cuando hagamos la prueba. Después cambias los datos por los de tus contactos reales."
              },
              {
                "t": "p",
                "x": "✓ Confirma antes de continuar La hoja se llama \"Lista de Correos\" Los 4 encabezados están en la fila 1 exactamente como se indica La fila 2 tiene datos de prueba con tu correo en la columna Email"
              }
            ]
          }
        ]
      },
      {
        "modulo": "03",
        "titulo": "Crea el escenario en Make",
        "lecciones": [
          {
            "titulo": "Abre el editor y agrega Google Sheets",
            "objetivo": "Tienes el módulo de Google Sheets configurado como trigger del escenario.",
            "blocks": [
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Ve al dashboard de Make y haz clic en \"+ Create scenario\"",
                    "p": "Es el botón morado en la esquina superior derecha."
                  },
                  {
                    "s": "Haz clic en el círculo morado grande con \"+\"",
                    "p": "Se abre el selector de aplicaciones con el buscador."
                  },
                  {
                    "s": "Haz clic en \"Google Sheets\" en la lista de apps",
                    "p": "Aparece directamente en la lista principal, no necesitas buscarlo."
                  },
                  {
                    "s": "Selecciona \"Watch New Rows\"",
                    "p": "Descripción: \"Triggers when a new row is added.\" Tiene etiqueta Acid, es el único trigger disponible para detectar filas nuevas y funciona bien para este flujo."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "La etiqueta \"Acid\" significa beta",
                "p": "Make marca como \"Acid\" los módulos que están en fase beta. En la práctica, Watch New Rows funciona de forma estable para este caso de uso. Es el módulo correcto para este flujo."
              }
            ]
          },
          {
            "titulo": "Configura el módulo de Google Sheets",
            "objetivo": "El módulo de Google Sheets queda conectado a tu hoja y listo para detectar filas nuevas.",
            "blocks": [
              {
                "t": "p",
                "x": "Al abrir el módulo verás estos campos. Configúralos exactamente así:"
              },
              {
                "t": "code",
                "lang": "Configuración del módulo Google Sheets",
                "code": "Connection            → My Google connection (la que ya tienes)\nSearch Method         → Search by path\nDrive                 → My Drive\nSpreadsheet ID        → Haz clic en \"Click here to choose file\" → selecciona \"Lista de Correos\"\nSheet Name            → Hoja 1 (Make lo detecta automáticamente)\nTable contains headers → Yes\nRow with headers      → A1:Z1\nLimit                 → 2"
              },
              {
                "t": "callout",
                "s": "¿Qué significa el Limit en 2?",
                "p": "El Limit controla cuántas filas procesa Make en cada ejecución. Con 2, procesa hasta 2 filas nuevas por ciclo. Para la prueba es suficiente. En producción puedes subirlo según el volumen que manejes."
              },
              {
                "t": "p",
                "x": "Al hacer clic en \"Save\" aparece el popup \"Choose where to start\" con tres opciones:"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Choose manually",
                    "p": "Tú eliges desde qué fila empieza. Útil si quieres procesar desde una fila específica."
                  },
                  {
                    "s": "All: selecciona esta",
                    "p": "Make procesa todas las filas existentes, incluyendo la fila de prueba que ya tienes en la hoja. Ideal para la primera prueba."
                  },
                  {
                    "s": "Since specific ID",
                    "p": "Empieza desde una fila con un ID concreto. Para uso avanzado."
                  }
                ]
              },
              {
                "t": "p",
                "x": "El módulo configurado con el archivo seleccionado y \"All\" elegido en el popup"
              }
            ]
          }
        ]
      },
      {
        "modulo": "04",
        "titulo": "Conecta Gmail",
        "lecciones": [
          {
            "titulo": "Agrega el módulo de Gmail",
            "objetivo": "Tienes el módulo de Gmail conectado al de Google Sheets y listo para configurar.",
            "blocks": [
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Haz clic en el \"+\" a la derecha del módulo de Google Sheets",
                    "p": "Se abre el selector de aplicaciones. Verás Google Sheets en \"Apps in scenario\" arriba."
                  },
                  {
                    "s": "Busca \"Gmail\" en el buscador",
                    "p": "Aparece Gmail con etiqueta \"Verified\" y \"Version 4\"."
                  },
                  {
                    "s": "Selecciona \"Send an email\"",
                    "p": "Descripción: \"Sends a new email.\" Es el primer módulo de la sección Email."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "Aviso de reautorización de Gmail",
                "p": "Make puede mostrar un aviso diciendo que tienes hasta cierta fecha para reautorizar tu conexión de Gmail. No bloquea el flujo, solo es un recordatorio de que eventualmente tendrás que renovar los permisos. Por ahora ignóralo y continúa."
              }
            ]
          },
          {
            "titulo": "Mapea los campos de Gmail",
            "objetivo": "Gmail queda configurado para enviar correos con los datos que vienen de cada fila de Sheets.",
            "blocks": [
              {
                "t": "p",
                "x": "El módulo de Gmail muestra varios campos. Configura solo los necesarios, el resto puedes dejarlo vacío:"
              },
              {
                "t": "code",
                "lang": "Mapeo de campos Gmail ← Sheets",
                "code": "To (Recipient)  → clic en \"+ Add recipient\" → arrastra la variable \"Email (B)\"\nSubject         → arrastra la variable \"Asunto (C)\"\nBody type       → dejar en \"Collection of contents\" (valor por defecto)\nBody contents   → clic en \"+ Add body content\" → en el campo Text arrastra \"Mensaje (D)\""
              },
              {
                "t": "callout",
                "s": "Las variables se arrastran desde el panel lateral",
                "p": "Al hacer clic en cualquier campo, se abre automáticamente el panel de variables con los datos del módulo anterior (Google Sheets). Busca la variable por nombre y arrástrala al campo. Aparece como una pastilla verde con el número de módulo y el nombre de la columna."
              },
              {
                "t": "callout",
                "s": "Body type: Collection of contents es suficiente",
                "p": "No necesitas cambiar a Raw HTML para este flujo. \"Collection of contents\" envía el mensaje como texto plano, que es lo correcto para correos simples y directos."
              },
              {
                "t": "p",
                "x": "Cuando termines de mapear los tres campos, haz clic en \"Save\" . El canvas muestra los dos módulos conectados: Google Sheets → Gmail."
              },
              {
                "t": "quiz",
                "q": "¿Qué variable de Sheets arrastras al campo \"To\" de Gmail?",
                "opts": [
                  {
                    "x": "Nombre (A)",
                    "c": false
                  },
                  {
                    "x": "Email (B)",
                    "c": true
                  },
                  {
                    "x": "Asunto (C)",
                    "c": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "modulo": "05",
        "titulo": "Prueba y activa",
        "lecciones": [
          {
            "titulo": "Ejecuta la prueba y verifica",
            "objetivo": "Verificas que el flujo funciona de principio a fin y el correo llega al destinatario.",
            "blocks": [
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Haz clic en \"Run once\"",
                    "p": "Es el botón verde en la barra inferior izquierda. Make ejecuta el escenario una vez y procesa la fila de prueba que tienes en la hoja."
                  },
                  {
                    "s": "Verifica los números verdes sobre los módulos",
                    "p": "✓1 sobre Google Sheets: detectó 1 fila. ✓1 sobre Gmail: envió 1 correo. Si hay triángulo rojo, hubo un error."
                  },
                  {
                    "s": "Revisa tu bandeja de entrada",
                    "p": "El correo llega al email que pusiste en la columna B. Si no lo ves en la bandeja principal, revisa Spam y Promociones ."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "Así debe verse el correo",
                "p": "Asunto: \"Hola desde Make\". Cuerpo: \"Este es un correo enviado automáticamente desde Google Sheets.\" Los datos exactos de tu fila de prueba."
              },
              {
                "t": "p",
                "x": "🎯 Momento de verdad ¿Llegó el correo? Sí, lo veo 🎉 No llegó"
              }
            ]
          },
          {
            "titulo": "Activa el escenario",
            "objetivo": "El escenario queda activo y enviará correos automáticamente cada vez que agregues una fila nueva.",
            "blocks": [
              {
                "t": "p",
                "x": "\"Run once\" es solo para pruebas. Para que el flujo funcione de forma permanente sin que hagas nada, tienes que activarlo:"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Localiza el toggle en la barra inferior junto a \"Every 15 minutes\"",
                    "p": "Está en la barra de herramientas de la parte baja de la pantalla."
                  },
                  {
                    "s": "Activa el toggle",
                    "p": "Se vuelve morado/azul. Make revisará tu hoja cada 15 minutos y enviará el correo de cualquier fila nueva que detecte."
                  },
                  {
                    "s": "Guarda con Cmd+S o el botón Save",
                    "p": "El escenario queda activo y funcionando para siempre."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "¿Cada 15 minutos es suficiente?",
                "p": "En el plan gratuito de Make el intervalo mínimo es 15 minutos. Para la mayoría de los casos de uso, confirmaciones, bienvenidas, seguimientos, 15 minutos es más que suficiente. Si necesitas tiempo real, el plan de pago baja a 1 minuto."
              },
              {
                "t": "callout",
                "s": "No uses \"Run once\" cuando el escenario ya está activo",
                "p": "Si el escenario está activo y además le das \"Run once\", Make ejecuta el flujo dos veces y puede enviar correos duplicados. \"Run once\" es solo para pruebas con el escenario apagado."
              }
            ]
          }
        ]
      },
      {
        "modulo": "06",
        "titulo": "Casos de uso reales",
        "lecciones": [
          {
            "titulo": "Por qué este flujo es un monstruo",
            "objetivo": "Entiendes el potencial real de este flujo y cómo se aplica a cualquier tipo de negocio.",
            "blocks": [
              {
                "t": "p",
                "x": "Lo que acabas de construir parece simple. Pero la razón por la que este flujo está en casi todos los negocios que automatizan es porque la hoja de cálculo es el interface más universal del mundo . Todos la usan. Todos la entienden. Y ahora tú puedes convertirla en el centro de tu comunicación automática."
              },
              {
                "t": "p",
                "x": "Empleados, emprendedores y consultores de todo el mundo usan exactamente este patrón, trigger en Sheets, acción en Gmail, como la columna vertebral de sus sistemas. Lo que cambia es lo que hay en las columnas y el tipo de correo que se dispara."
              },
              {
                "t": "callout",
                "s": "La lógica siempre es la misma",
                "p": "Agrega una fila → Make la detecta → Gmail envía el correo definido en esa fila. Una vez que internalizas eso, ves oportunidades de automatización en cada proceso de tu negocio."
              }
            ]
          },
          {
            "titulo": "8 casos de uso que puedes implementar hoy",
            "objetivo": "Identificas al menos un caso de uso concreto que puedes aplicar inmediatamente en tu trabajo o negocio.",
            "blocks": [
              {
                "t": "p",
                "x": "Todos estos casos usan exactamente el mismo flujo que construiste. Solo cambian las columnas de la hoja y el contenido del correo:"
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "¿Cuál de estos casos aplica a tu negocio hoy?",
                "steps": [
                  "01 Elige el caso de uso que más tiempo te está quitando actualmente",
                  "02 Define las columnas que necesitarías en tu hoja para ese caso",
                  "03 Duplica el escenario que construiste, actualiza las columnas y pruébalo"
                ]
              }
            ]
          }
        ]
      },
      {
        "modulo": "07",
        "titulo": "Personaliza y expande",
        "lecciones": [
          {
            "titulo": "Personaliza el mensaje con variables dinámicas",
            "objetivo": "Sabes hacer correos personalizados que incluyen el nombre del destinatario y otros datos de la hoja.",
            "blocks": [
              {
                "t": "p",
                "x": "El correo más efectivo no es el que suena automático, es el que parece escrito a mano. La clave está en mezclar texto fijo con variables dinámicas de tu hoja."
              },
              {
                "t": "p",
                "x": "En el campo de texto del Body contents, en lugar de arrastrar solo la variable Mensaje (D), puedes escribir texto fijo y combinar variables de cualquier columna. Por ejemplo:"
              },
              {
                "t": "code",
                "lang": "Cuerpo del correo con variables",
                "code": "Hola [variable: Nombre (A)],\n\n[variable: Mensaje (D)]\n\nCualquier duda estamos a tu disposición.\n\nUn saludo,\nTu equipo"
              },
              {
                "t": "p",
                "x": "El resultado es un correo que saluda al destinatario por su nombre y usa el mensaje personalizado de esa fila. Para el cliente parece redactado a mano."
              },
              {
                "t": "callout",
                "s": "Agrega más columnas cuando necesites más datos",
                "p": "Si quieres incluir el número de pedido, la fecha, el precio o cualquier otro dato en el correo, simplemente agrega una columna más a tu hoja y arrástrala al cuerpo del mensaje. El flujo no necesita ningún cambio adicional."
              }
            ]
          },
          {
            "titulo": "Enviar a múltiples destinatarios",
            "objetivo": "Sabes cómo enviar el mismo correo a más de una persona por fila.",
            "blocks": [
              {
                "t": "p",
                "x": "A veces necesitas que el mismo correo llegue a más de una persona. Por ejemplo: al cliente y a ti como copia, o al cliente y al responsable del pedido."
              },
              {
                "t": "h",
                "x": "Opción 1, Múltiples destinatarios fijos"
              },
              {
                "t": "p",
                "x": "En el campo \"To\" del módulo de Gmail, haz clic en \"+ Add recipient\" y agrega una segunda dirección. Puedes mezclar variables de Sheets con correos fijos."
              },
              {
                "t": "code",
                "lang": "Ejemplo de múltiples destinatarios",
                "code": "Recipient 1 → [variable: Email (B)] ← el cliente\nRecipient 2 → tuequipo@empresa.com ← copia interna fija"
              },
              {
                "t": "h",
                "x": "Opción 2, CC y BCC"
              },
              {
                "t": "p",
                "x": "El módulo de Gmail tiene campos CC y BCC en Advanced settings. Activa el toggle y encontrarás esos campos. Úsalos para copias sin que el destinatario principal lo vea."
              },
              {
                "t": "callout",
                "s": "Columna \"CC\" en tu hoja",
                "p": "Si cada fila necesita un CC diferente, agrega una columna E llamada \"CC\" en tu hoja y arrástrala al campo CC de Gmail. Así cada correo va con la copia que corresponde a esa fila específica."
              }
            ]
          },
          {
            "titulo": "Agregar condiciones con filtros",
            "objetivo": "Sabes usar filtros para que el flujo solo envíe correos bajo ciertas condiciones.",
            "blocks": [
              {
                "t": "p",
                "x": "Por defecto el flujo envía un correo por cada fila nueva, sin excepciones. Pero a veces solo quieres enviar bajo ciertas condiciones: si el estado es \"Confirmado\", si el monto supera un umbral, o si la columna \"Enviar\" dice \"Sí\"."
              },
              {
                "t": "p",
                "x": "Para eso usas un filtro entre los dos módulos."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Agrega una columna \"Estado\" a tu hoja",
                    "p": "Por ejemplo, columna E con valores como \"Enviar\" o \"Pendiente\"."
                  },
                  {
                    "s": "Haz clic en la llave inglesa (🔧) entre los dos módulos",
                    "p": "Se abre el panel \"Set up a filter\"."
                  },
                  {
                    "s": "Configura la condición",
                    "p": "Campo izquierdo: variable \"Estado (E)\". Operador: \"Text operators: Equal to\". Campo derecho: escribe \"Enviar\". Make solo pasa al módulo de Gmail cuando esa columna diga exactamente \"Enviar\"."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "El filtro es la clave para sistemas más inteligentes",
                "p": "Con un filtro puedes tener una sola hoja con todo tu pipeline y que Make decida automáticamente cuándo enviar y cuándo no. Es la diferencia entre un flujo simple y un sistema real de automatización."
              },
              {
                "t": "quiz",
                "q": "Quieres que el flujo solo envíe el correo cuando la columna \"Estado\" diga \"Confirmado\". ¿Qué elemento de Make usas?",
                "opts": [
                  {
                    "x": "Agrego otro módulo de Google Sheets",
                    "c": false
                  },
                  {
                    "x": "Cambio el Limit del módulo de Sheets",
                    "c": false
                  },
                  {
                    "x": "Configuro un filtro entre los dos módulos",
                    "c": true
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "modulo": "08",
        "titulo": "¡Lo lograste!",
        "lecciones": [
          {
            "titulo": "Tienes uno de los flujos más poderosos del mundo",
            "objetivo": "Completaste el curso y tienes un sistema de comunicación automática listo para escalar.",
            "blocks": [
              {
                "t": "p",
                "x": "🎉 Flujo completado Ahora tienes el control total de tu comunicación automática."
              },
              {
                "t": "callout",
                "s": "Lo que construiste",
                "p": "Un escenario en Make que vigila tu Google Sheet cada 15 minutos. Cada vez que agregas una fila nueva, Gmail envía automáticamente el correo con los datos de esa fila, nombre, destinatario, asunto y mensaje personalizados. Para siempre. Sin intervención manual."
              },
              {
                "t": "action",
                "label": "Tu resumen",
                "title": "Lo que aprendiste en este curso",
                "steps": [
                  "01 Estructurar una hoja de Google Sheets como base de datos de comunicación",
                  "02 Usar Google Sheets → Gmail como flujo base adaptable a cualquier negocio",
                  "03 Mapear variables dinámicas para correos personalizados",
                  "04 Agregar múltiples destinatarios y condiciones con filtros",
                  "05 Identificar los 8 casos de uso más comunes de este flujo en negocios reales"
                ]
              },
              {
                "t": "p",
                "x": "Próximo curso gratuito Capturar leads de formulario web en Sheets Conecta Google Forms con Google Sheets y haz que cada nuevo lead quede registrado automáticamente, listo para disparar el flujo de correos que acabas de construir. Ver catálogo →"
              }
            ]
          }
        ]
      }
    ],
    "relatedCourse": "automatizacion"
  },
  "documentos": {
    "courseTitle": "Automatiza tus documentos. Sin tocar nada.",
    "nextCourse": "Tu primer agente de IA sin programar",
    "modules": [
      {
        "modulo": "01",
        "titulo": "El problema que nadie calcula",
        "lecciones": [
          {
            "titulo": "Cuánto tiempo pierdes generando el mismo documento",
            "objetivo": "Calcular el coste real en tiempo de crear documentos repetitivos manualmente para entender por qué automatizarlo es urgente.",
            "blocks": [
              {
                "t": "p",
                "x": "Cada vez que generas un presupuesto, una propuesta o un contrato repites exactamente el mismo proceso: abres la plantilla, cambias el nombre del cliente, el precio, la fecha, los servicios. Guardas con otro nombre. Compruebas que no se te olvidó nada. Lo mandas."
              },
              {
                "t": "p",
                "x": "10 minutos por documento. A veces 20. Multiplícalo por los documentos que generas al mes."
              },
              {
                "t": "h",
                "x": "La cuenta que nadie hace"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Tiempo por documento: 10-15 minutos",
                    "p": "Abrir la plantilla, cambiar los datos, revisar que no haya errores del copia-pega anterior, guardar con el nombre correcto."
                  },
                  {
                    "s": "Si generas 20 documentos al mes: 3-5 horas",
                    "p": "Horas de trabajo que podrías dedicar a facturar, a clientes o a hacer crecer el negocio. En cambio las dedicas a copiar y pegar."
                  },
                  {
                    "s": "El coste oculto: los errores",
                    "p": "Un nombre mal copiado de la propuesta anterior. Un precio que no actualizaste. Un contrato con el DNI de otro cliente. El error humano no es falta de atención, es consecuencia del proceso."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "Lo que cambia en este curso",
                "p": "Al terminar, introduces los datos en el Excel una sola vez. Power Automate Desktop genera todos los documentos solos, con los datos correctos, sin que toques Word. El proceso que tardaba horas tarda segundos."
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Calcula tu coste real",
                "steps": [
                  "01 ¿Qué documento repites más? Presupuesto, propuesta, contrato, ficha de cliente...",
                  "02 ¿Cuántos generas al mes?",
                  "03 Multiplica por 12 minutos. Ese es el tiempo que vas a recuperar cada mes con este curso."
                ]
              }
            ]
          },
          {
            "titulo": "Por qué copiar y pegar es el error más caro de tu negocio",
            "objetivo": "Entender por qué los procesos manuales de documentación generan errores inevitables y por qué la automatización los elimina por diseño.",
            "blocks": [
              {
                "t": "p",
                "x": "El problema no es que no tengas cuidado. El problema es que copiar y pegar es un proceso que falla por diseño. Cuando abres la plantilla del mes pasado y cambias los datos, estás dependiendo de que recuerdes todos los campos que hay que actualizar. Sin excepción. Todas las veces."
              },
              {
                "t": "h",
                "x": "Los errores más frecuentes del proceso manual"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "El nombre del cliente anterior en el documento nuevo",
                    "p": "Abriste la propuesta de Juan, cambiaste el precio, cambiaste los servicios... pero olvidaste cambiar el nombre en el encabezado. Mandas la propuesta de Juan a María."
                  },
                  {
                    "s": "El precio de la tarifa antigua",
                    "p": "Actualizaste tus precios en enero. El contrato sigue usando la plantilla de diciembre. El cliente firma con la tarifa vieja."
                  },
                  {
                    "s": "El campo que no existe en la plantilla",
                    "p": "Te diste cuenta de que necesitas añadir el NIF del cliente en todos los contratos. Tienes que editar uno por uno los que ya mandaste y acordarte en todos los futuros."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "Cómo lo resuelve la automatización",
                "p": "La automatización elimina el error humano por diseño. Si el dato está en el Excel, va al documento. Si no está, el documento no se genera. No hay campos que se olviden, el proceso es siempre idéntico."
              },
              {
                "t": "quiz",
                "q": "¿Por qué el proceso de copiar y pegar genera errores aunque tengas cuidado?",
                "opts": [
                  {
                    "x": "Porque se hace demasiado rápido",
                    "c": false
                  },
                  {
                    "x": "Porque depende de que recuerdes todos los campos a cambiar en cada documento, sin excepción",
                    "c": true
                  },
                  {
                    "x": "Porque las plantillas están mal diseñadas",
                    "c": false
                  }
                ]
              }
            ]
          },
          {
            "titulo": "Qué es Power Automate Desktop y por qué ya lo tienes instalado",
            "objetivo": "Entender qué hace Power Automate Desktop, para qué sirve y cómo acceder a él sin instalar nada ni pagar nada.",
            "blocks": [
              {
                "t": "p",
                "x": "Power Automate Desktop es una herramienta de Microsoft para automatizar tareas repetitivas en tu ordenador. Si tienes Windows 10 u 11, ya está instalada, es gratuita y viene incluida con el sistema operativo."
              },
              {
                "t": "p",
                "x": "No es para programadores. No requiere código. Se trabaja con una interfaz visual donde arrastras acciones y las conectas. Cada acción le dice al ordenador qué hacer: abrir un archivo, leer datos, escribir en un documento, guardar."
              },
              {
                "t": "h",
                "x": "Qué puede hacer por tu negocio"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Leer datos de Excel automáticamente",
                    "p": "El flujo abre el Excel, lee todos los datos fila por fila y los usa para rellenar documentos. Sin que abras el archivo tú."
                  },
                  {
                    "s": "Generar documentos Word personalizados",
                    "p": "Por cada fila del Excel crea un documento Word con los datos de esa fila. 50 clientes = 50 documentos generados solos."
                  },
                  {
                    "s": "Guardar y nombrar cada archivo",
                    "p": "Cada documento se guarda automáticamente con el nombre correcto en la carpeta que tú definas. Sin renombrar a mano."
                  }
                ]
              },
              {
                "t": "h",
                "x": "Cómo abrirlo"
              },
              {
                "t": "p",
                "x": "Cómo abrir Power Automate Desktop Opción 1: Menú Inicio → busca \"Power Automate\" → abre la aplicación Opción 2: Windows + S → escribe \"Power Automate\" → Enter Opción 3: Si no aparece → Microsoft Store → busca \"Power Automate\" → instalar gratis Al abrirlo por primera vez te pedirá que inicies sesión con tu cuenta de Microsoft (la misma de Outlook, Office o Xbox). Si no tienes, créala gratis en microsoft.com"
              },
              {
                "t": "callout",
                "s": "Requisito del curso",
                "p": "Necesitas Windows 10 o Windows 11. Power Automate Desktop no está disponible para Mac. Si trabajas en Mac, el curso de Make o n8n es tu alternativa, conectamos al final del curso con esas opciones."
              },
              {
                "t": "p",
                "x": "✓ Antes de continuar Abrí Power Automate Desktop y puedo verlo en pantalla Inicié sesión con mi cuenta de Microsoft Sé qué documento voy a automatizar en este curso"
              }
            ]
          }
        ]
      },
      {
        "modulo": "02",
        "titulo": "Prepara tus archivos",
        "lecciones": [
          {
            "titulo": "El Excel de datos: la única hoja que necesitas rellenar",
            "objetivo": "Crear el Excel con la estructura correcta para que Power Automate pueda leerlo sin errores.",
            "blocks": [
              {
                "t": "p",
                "x": "El Excel es el único lugar donde introduces datos. Una vez configurado el flujo, solo tienes que añadir filas, una por documento, y ejecutar. El resto lo hace solo."
              },
              {
                "t": "h",
                "x": "Reglas de oro del Excel"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "La fila 1 son los encabezados: exactamente en mayúsculas",
                    "p": "Los nombres de las columnas tienen que coincidir exactamente con los marcadores de tu plantilla Word. Si en Word escribes «NOMBRE», en el Excel el encabezado es «NOMBRE», no «Nombre», no «nombre»."
                  },
                  {
                    "s": "A partir de la fila 2, un documento por fila",
                    "p": "Cada fila genera un documento. 10 filas = 10 documentos. No dejes filas vacías entre datos."
                  },
                  {
                    "s": "Sin espacios extra en los encabezados",
                    "p": "«NOMBRE » con espacio al final no es igual que «NOMBRE». El flujo no lo encontrará y no rellenará ese campo."
                  }
                ]
              },
              {
                "t": "h",
                "x": "Ejemplo para un negocio de servicios"
              },
              {
                "t": "p",
                "x": "Estructura del Excel, ejemplo presupuesto Copiar Columna A: CLIENTE Columna B: FECHAHOY Columna C: SERVICIO Columna D: PRECIO Columna E: DESCRIPCION Columna F: VALIDEZ Fila 2 ejemplo: Ana García | 03/04/2026 | Diseño de logo | 450€ | Logo + manual de marca | 30 días"
              },
              {
                "t": "callout",
                "s": "Adapta las columnas a tu documento",
                "p": "No tienes que usar estas columnas, son un ejemplo. Define las columnas que necesitas según los campos que cambien en tu documento. Si tu presupuesto tiene 5 campos variables, el Excel tiene 5 columnas."
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Crea tu Excel de datos",
                "steps": [
                  "01 Abre tu documento repetitivo (presupuesto, contrato, propuesta)",
                  "02 Identifica todos los campos que cambian de un documento a otro",
                  "03 Crea un Excel nuevo con esos campos como encabezados en la fila 1 en MAYÚSCULAS",
                  "04 Añade 3 filas de datos reales para probar el flujo"
                ]
              }
            ]
          },
          {
            "titulo": "La plantilla Word con marcadores",
            "objetivo": "Preparar la plantilla Word con los marcadores correctos para que Power Automate sepa dónde insertar cada dato.",
            "blocks": [
              {
                "t": "p",
                "x": "La plantilla Word es tu documento con todo el contenido fijo, el diseño, el texto estático, las condiciones, y marcadores en los lugares donde van los datos variables. El flujo reemplaza cada marcador con el dato del Excel."
              },
              {
                "t": "h",
                "x": "Cómo escribir los marcadores"
              },
              {
                "t": "p",
                "x": "El formato estándar es el nombre del campo entre dobles corchetes angulares:"
              },
              {
                "t": "p",
                "x": "Formato de marcadores Copiar <<CLIENTE>> → se reemplaza con el valor de la columna CLIENTE del Excel <<FECHAHOY>> → se reemplaza con el valor de la columna FECHAHOY del Excel <<PRECIO>> → se reemplaza con el valor de la columna PRECIO del Excel Ejemplo en el documento: \"Estimado/a <<CLIENTE>>, le presentamos nuestra propuesta de <<SERVICIO>> por un importe de <<PRECIO>>, válida durante <<VALIDEZ>>.\""
              },
              {
                "t": "callout",
                "s": "Regla crítica: coherencia exacta",
                "p": "El marcador en Word y el encabezado en Excel deben ser idénticos. «<<CLIENTE>>» en Word requiere «CLIENTE» en el Excel. Un espacio, una mayúscula diferente o un carácter distinto rompe el flujo."
              },
              {
                "t": "h",
                "x": "Dónde pueden ir los marcadores"
              },
              {
                "t": "p",
                "x": "En cualquier parte del documento: el encabezado, el cuerpo del texto, los pies de página, tablas, o incluso en el nombre del archivo si lo necesitas. El flujo busca el marcador en todo el documento y lo reemplaza donde aparezca, si aparece varias veces, lo reemplaza en todas."
              },
              {
                "t": "callout",
                "s": "Truco para verificar",
                "p": "Usa Ctrl+H en Word (Buscar y reemplazar) para probar manualmente que el marcador existe en el documento. Si Word lo encuentra, Power Automate también lo encontrará."
              },
              {
                "t": "p",
                "x": "✓ Tu plantilla está lista cuando Todos los campos variables tienen marcadores en formato <<NOMBRE>> Los nombres de los marcadores coinciden exactamente con los encabezados del Excel Verifiqué con Ctrl+H que los marcadores existen en el documento"
              }
            ]
          },
          {
            "titulo": "La estructura de carpetas",
            "objetivo": "Organizar los archivos en las carpetas correctas para que el flujo pueda encontrarlos y guardar los documentos generados sin errores.",
            "blocks": [
              {
                "t": "p",
                "x": "El flujo necesita saber dónde encontrar los archivos de entrada y dónde guardar los de salida. Una estructura simple evita el 90% de los errores de configuración."
              },
              {
                "t": "h",
                "x": "La estructura recomendada"
              },
              {
                "t": "p",
                "x": "Estructura de carpetas Copiar 📁 Documentos Automáticos\\ ├── 📄 Datos.xlsx → tu Excel con los datos ├── 📄 Plantilla.docx → tu plantilla Word con marcadores └── 📁 Generados\\ → aquí van los documentos creados ├── Propuesta Ana García.docx ├── Propuesta Carlos López.docx └── ..."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Crea la carpeta principal en un lugar fijo",
                    "p": "Escritorio, Documentos o OneDrive. Lo importante es que la ruta no cambie, el flujo guarda la ruta exacta y si mueves la carpeta hay que actualizarla."
                  },
                  {
                    "s": "Crea la subcarpeta \"Generados\" vacía",
                    "p": "Tiene que existir antes de ejecutar el flujo. Si no existe, el flujo falla al intentar guardar los documentos."
                  },
                  {
                    "s": "Mueve el Excel y la plantilla a la carpeta principal",
                    "p": "Cierra el Excel antes de ejecutar el flujo, si está abierto, Power Automate no puede leerlo correctamente."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "Antes de ejecutar siempre",
                "p": "Cierra el archivo Excel manualmente. Un Excel abierto bloquea el acceso y el flujo fallará en la primera acción."
              }
            ]
          }
        ]
      },
      {
        "modulo": "03",
        "titulo": "Construye el flujo paso a paso",
        "lecciones": [
          {
            "titulo": "Abre y lee el Excel automáticamente",
            "objetivo": "Configurar las dos primeras acciones del flujo para que Power Automate abra el Excel y cargue todos los datos en memoria.",
            "blocks": [
              {
                "t": "p",
                "x": "Abre Power Automate Desktop, crea un nuevo flujo y llámalo con el nombre de tu documento. Vamos a añadir las acciones en orden."
              },
              {
                "t": "h",
                "x": "Acción 1, Iniciar Excel"
              },
              {
                "t": "p",
                "x": "En el panel de acciones de la izquierda, busca Excel → Iniciar Excel y arrástrala al área de trabajo."
              },
              {
                "t": "p",
                "x": "Configuración, Iniciar Excel Iniciar Excel y abrir el documento siguiente Ruta del documento Haz clic en 📁 y navega hasta tu Datos.xlsx Hacer visible la ventana Desactivado, trabaja en segundo plano Variable generada ExcelInstance, déjalo como está"
              },
              {
                "t": "h",
                "x": "Acción 2, Leer la hoja de cálculo"
              },
              {
                "t": "p",
                "x": "Busca Leer en hoja de cálculo de Excel y añádela debajo de la primera."
              },
              {
                "t": "p",
                "x": "Configuración, Leer hoja de cálculo Instancia de Excel %ExcelInstance% Recuperar Todos los valores disponibles de la hoja de cálculo Primera línea contiene nombres de columna ✅ Activado, imprescindible Variable generada ExcelData, todos tus datos están aquí"
              },
              {
                "t": "callout",
                "s": "Esto no puede faltar",
                "p": "Si no activas \"La primera línea contiene nombres de columna\", el flujo no podrá acceder a los datos por nombre de columna. Es el error de configuración más frecuente."
              }
            ]
          },
          {
            "titulo": "El bucle: cómo procesar un documento por cada fila",
            "objetivo": "Configurar el bucle For Each que permite al flujo repetir el proceso automáticamente para cada fila del Excel.",
            "blocks": [
              {
                "t": "p",
                "x": "El bucle es el elemento central del flujo. Todo lo que esté dentro de él se ejecuta una vez por cada fila del Excel. Si tienes 20 filas, el contenido del bucle se ejecuta 20 veces, y genera 20 documentos."
              },
              {
                "t": "h",
                "x": "Acción 3, For Each (el bucle)"
              },
              {
                "t": "p",
                "x": "Busca Para cada o For each en el panel de acciones y añádela después de las dos anteriores."
              },
              {
                "t": "p",
                "x": "Configuración, For Each Iterar sobre %ExcelData%, la tabla con todos tus datos Guardar en variable CurrentRow, la fila actual en cada vuelta"
              },
              {
                "t": "callout",
                "s": "Cómo acceder a los datos de cada fila",
                "p": "Dentro del bucle, %CurrentRow['CLIENTE']% contiene el valor de la columna CLIENTE de la fila actual. Sustituye CLIENTE por el nombre de cualquier columna de tu Excel para acceder a ese dato."
              },
              {
                "t": "h",
                "x": "La estructura completa del flujo"
              },
              {
                "t": "p",
                "x": "# Acción Posición 1 Iniciar Excel Fuera del bucle 2 Leer hoja de cálculo Fuera del bucle 3 For Each → End Contenedor 4-9 Resto de acciones Dentro del bucle 10 Cerrar Excel Fuera del bucle"
              },
              {
                "t": "callout",
                "s": "Las acciones de dentro van DENTRO",
                "p": "Todas las acciones que generan el documento deben estar entre el For Each y el End. Si las colocas fuera, solo se ejecutarán una vez, no por cada fila."
              }
            ]
          },
          {
            "titulo": "Copia la plantilla, renómbrala y rellena los datos",
            "objetivo": "Configurar las acciones dentro del bucle para copiar la plantilla, darle el nombre correcto y reemplazar todos los marcadores con los datos del Excel.",
            "blocks": [
              {
                "t": "p",
                "x": "Estas acciones van dentro del bucle. Se ejecutan una vez por cada fila del Excel."
              },
              {
                "t": "h",
                "x": "Acción 4, Copiar la plantilla"
              },
              {
                "t": "p",
                "x": "Busca Copiar archivo(s) y añádela dentro del bucle."
              },
              {
                "t": "p",
                "x": "Configuración, Copiar archivo Archivo a copiar Ruta completa de tu Plantilla.docx Carpeta de destino Ruta de tu carpeta Generados\\ Si el archivo existe Sobrescribir Variable generada CopiedFiles"
              },
              {
                "t": "h",
                "x": "Acción 5, Renombrar con el nombre del cliente"
              },
              {
                "t": "p",
                "x": "Configuración, Cambiar nombre de archivo Archivo a renombrar %CopiedFiles[0]% Nuevo nombre Propuesta - %CurrentRow['CLIENTE']% Mantener extensión ✅ Activado"
              },
              {
                "t": "h",
                "x": "Acción 6, Abrir el documento copiado"
              },
              {
                "t": "p",
                "x": "Configuración, Iniciar Word Ruta del documento [ruta Generados]\\Propuesta - %CurrentRow['CLIENTE']%.docx Hacer visible la ventana Activado para pruebas / Desactivado en producción Variable generada WordInstance"
              },
              {
                "t": "h",
                "x": "Acciones 7-N, Buscar y reemplazar cada marcador"
              },
              {
                "t": "p",
                "x": "Una acción Buscar y reemplazar palabras en documento de Word por cada campo. Todas se configuran igual:"
              },
              {
                "t": "p",
                "x": "Configuración, Buscar y reemplazar (repetir por cada campo) Instancia de Word %WordInstance% Todas las coincidencias ✅ Activado Texto a buscar <<CLIENTE>> (el marcador de la plantilla) Reemplazar con %CurrentRow['CLIENTE']% (el dato del Excel)"
              },
              {
                "t": "callout",
                "s": "Repite esta acción por cada campo",
                "p": "Una acción por cada marcador. Si tu plantilla tiene 6 marcadores, añades 6 acciones de buscar y reemplazar, una para cada par marcador/columna."
              }
            ]
          },
          {
            "titulo": "Guarda, cierra y pasa al siguiente: el ciclo completo",
            "objetivo": "Completar el flujo con las acciones de guardado y cierre para que el ciclo se repita correctamente para cada documento.",
            "blocks": [
              {
                "t": "h",
                "x": "Última acción dentro del bucle, Cerrar Word"
              },
              {
                "t": "p",
                "x": "Configuración, Cerrar Word (dentro del bucle) Instancia de Word %WordInstance% Antes de cerrar Guardar documento"
              },
              {
                "t": "h",
                "x": "Acción fuera del bucle, Cerrar Excel"
              },
              {
                "t": "p",
                "x": "Configuración, Cerrar Excel (fuera del bucle) Instancia de Excel %ExcelInstance% Antes de cerrar No guardar el documento"
              },
              {
                "t": "h",
                "x": "El flujo completo de un vistazo"
              },
              {
                "t": "p",
                "x": "# Acción Qué hace Posición 1 Iniciar Excel Abre Datos.xlsx en segundo plano Fuera 2 Leer hoja Carga todos los datos en ExcelData Fuera 3 For Each Inicia el bucle por fila Contenedor 4 Copiar archivo Copia la plantilla a Generados Dentro 5 Cambiar nombre Renombra con el nombre del cliente Dentro 6 Iniciar Word Abre el documento copiado Dentro 7-N Buscar y reemplazar Sustituye cada marcador con el dato Dentro N+1 Cerrar Word Guarda y cierra antes del siguiente Dentro N+2 Cerrar Excel Cierra el Excel al terminar todo Fuera"
              },
              {
                "t": "callout",
                "s": "Prueba con 3 filas primero",
                "p": "Antes de ejecutar con todos tus datos, pon solo 3 filas en el Excel y ejecuta el flujo. Verifica que se generan 3 documentos correctos. Si todo está bien, añade el resto de filas."
              },
              {
                "t": "p",
                "x": "✓ Módulo 3 completado cuando El flujo tiene todas las acciones en el orden correcto Las acciones de dentro del bucle están entre For Each y End Ejecuté el flujo con 3 filas de prueba y generó 3 documentos correctos"
              }
            ]
          }
        ]
      },
      {
        "modulo": "04",
        "titulo": "Prueba, errores y ajustes",
        "lecciones": [
          {
            "titulo": "Los 4 errores más frecuentes y cómo resolverlos",
            "objetivo": "Identificar y resolver los errores más comunes para no perder tiempo buscando qué falló.",
            "blocks": [
              {
                "t": "p",
                "x": "La mayoría de los errores en este flujo tienen una causa muy concreta y una solución en menos de 2 minutos. Aquí están los cuatro que aparecen el 95% de las veces."
              },
              {
                "t": "p",
                "x": "Error 1, El marcador no se reemplaza El campo aparece vacío o sigue mostrando <<NOMBRE>> en el documento generado. Causa: El marcador en Word no coincide exactamente con el nombre de la columna del Excel. Solución: Usa Ctrl+H en Word para verificar el marcador exacto. Compara carácter por carácter con el encabezado del Excel, mayúsculas, espacios y símbolos incluidos."
              },
              {
                "t": "p",
                "x": "Error 2, El Excel está bloqueado El flujo falla en la primera acción con un error de acceso al archivo. Causa: El archivo Datos.xlsx está abierto en Excel. Solución: Cierra el Excel antes de ejecutar el flujo. Siempre."
              },
              {
                "t": "p",
                "x": "Error 3, La carpeta Generados no existe El flujo falla al intentar copiar la plantilla con un error de ruta no encontrada. Causa: La subcarpeta Generados no existe o tiene un nombre diferente al que configuraste en el flujo. Solución: Crea la carpeta manualmente antes de ejecutar. Verifica que la ruta en el flujo coincide exactamente."
              },
              {
                "t": "p",
                "x": "Error 4, %CurrentRow['COLUMNA']% no funciona El flujo genera un error de variable no encontrada en las acciones de buscar y reemplazar. Causa: El encabezado en el Excel no coincide exactamente con el nombre entre corchetes en el flujo, o no activaste \"La primera línea contiene nombres de columna\" al leer el Excel. Solución: Revisa la Acción 2 y activa esa opción. Compara el nombre de la columna del Excel con el que usas en %CurrentRow['NOMBRE']%."
              },
              {
                "t": "callout",
                "s": "Cómo depurar el flujo",
                "p": "Usa el botón de ejecución paso a paso (el botón de play con un icono de pie) para ejecutar acción por acción. Así puedes ver exactamente en qué acción falla y qué valor tiene cada variable en ese momento."
              }
            ]
          },
          {
            "titulo": "Cómo añadir nuevos documentos sin rehacer el flujo",
            "objetivo": "Entender cómo mantener y escalar el sistema una vez está funcionando, sin tocar el flujo.",
            "blocks": [
              {
                "t": "p",
                "x": "Una vez el flujo funciona, el mantenimiento es mínimo. La mayoría de las veces no necesitas tocar el flujo, solo el Excel."
              },
              {
                "t": "h",
                "x": "Para generar documentos nuevos"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Añade una fila nueva en el Excel",
                    "p": "Rellena todos los campos y guarda el archivo."
                  },
                  {
                    "s": "Cierra el Excel",
                    "p": "Imprescindible antes de ejecutar."
                  },
                  {
                    "s": "Ejecuta el flujo",
                    "p": "Genera todos los documentos del Excel. Si no quieres regenerar los anteriores, mueve las filas viejas a otra hoja o elimínalas del Excel antes de ejecutar."
                  }
                ]
              },
              {
                "t": "h",
                "x": "Para añadir un campo nuevo a la plantilla"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Añade la columna nueva en el Excel",
                    "p": "Con su encabezado en mayúsculas en la fila 1."
                  },
                  {
                    "s": "Añade el marcador en la plantilla Word",
                    "p": "En el lugar donde quieres que aparezca el dato."
                  },
                  {
                    "s": "Añade una acción de buscar y reemplazar en el flujo",
                    "p": "Una nueva acción dentro del bucle para ese campo nuevo."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "El sistema es tuyo",
                "p": "No dependes de nadie para mantenerlo. Cambias el Excel, cambias la plantilla, añades una acción. Todo es visual, todo es reversible."
              }
            ]
          }
        ]
      },
      {
        "modulo": "05",
        "titulo": "Aplícalo a tu negocio",
        "lecciones": [
          {
            "titulo": "Adapta el flujo a tu documento real",
            "objetivo": "Identificar el documento exacto de tu negocio que vas a automatizar y construir el flujo completo adaptado a tu caso.",
            "blocks": [
              {
                "t": "p",
                "x": "El flujo que construiste en el Módulo 3 es universal. Funciona para cualquier documento que tenga campos variables. Aquí van los casos más frecuentes para el público de AuryOnTech y cómo adaptar el flujo a cada uno."
              },
              {
                "t": "h",
                "x": "Checklist de adaptación"
              },
              {
                "t": "p",
                "x": "🎯 Actividad final, tu flujo adaptado Identifiqué el documento que más repito en mi negocio Creé el Excel con los campos exactos de ese documento Preparé la plantilla Word con los marcadores <<CAMPO>> Construí el flujo completo adaptado a mi documento Ejecuté el flujo con datos reales y generé al menos 3 documentos correctos"
              },
              {
                "t": "p",
                "x": "Siguiente nivel Tu primer agente de IA sin programar Ya automatizas documentos. El siguiente paso: un agente que lee emails, entiende qué preguntan y responde solo. Sin código. Con n8n y ChatGPT. Ver curso →"
              }
            ]
          }
        ]
      }
    ],
    "relatedCourse": "documentos"
  },
  "formulario": {
    "courseTitle": "De Formulario a Cliente sin Tocar Nada",
    "nextCourse": "Correos en Piloto Automático",
    "modules": [
      {
        "modulo": "01",
        "titulo": "Qué vas a construir",
        "lecciones": [
          {
            "titulo": "El flujo completo en 3 pasos",
            "objetivo": "Entender la arquitectura del sistema antes de empezar a construir, para que cada paso del curso tenga sentido.",
            "blocks": [
              {
                "t": "p",
                "x": "Imagina esto: tienes un formulario de contacto en tu sitio web. Cada vez que alguien lo llena, pasan tres cosas al instante, sin que tú toques nada:"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Google Forms recibe la respuesta del lead",
                    "p": "El lead llena el form y le da enviar. Sus datos quedan capturados en Google."
                  },
                  {
                    "s": "Make detecta la respuesta y la escribe en tu CRM curado",
                    "p": "Make vigila el form cada 15 minutos. Cuando ve una respuesta nueva, la escribe limpia en una hoja de Google Sheets que tú gestionas como CRM."
                  },
                  {
                    "s": "Make manda un email de bienvenida automático al lead",
                    "p": "El lead recibe en menos de 1 minuto un correo personalizado con su nombre y los datos de su solicitud. Para él parece escrito por una persona real."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "El resultado en tu negocio",
                "p": "Cada lead que llega a tu form queda registrado en tu CRM Y recibe atención instantánea. Tú te enteras a la mañana siguiente abriendo tu hoja, no peleando con tu inbox."
              },
              {
                "t": "p",
                "x": "Lo que hace especial este flujo es que ataca el problema real de la captura de leads: no es perder el lead, es que llega y nadie lo atiende a tiempo. Cuando Make manda ese email automático en 60 segundos, el lead siente que estás encima. Cuando le respondes tres horas después, el lead ya se fue con la competencia."
              },
              {
                "t": "p",
                "x": "Las 3 piezas que vas a construir:"
              },
              {
                "t": "ul",
                "x": [
                  "Un Google Form con 5 campos diseñados para capturar leads de calidad sin fricción",
                  "Un CRM curado en Google Sheets donde tú gestionas los leads como humano (con campos de Estado, Notas, etc)",
                  "Un escenario en Make con 3 módulos: Watch Responses → Add a Row → Send an Email"
                ]
              },
              {
                "t": "p",
                "x": "Al terminar este curso tendrás un sistema que corre solo cada 15 minutos, captura cada lead que llega, lo registra en tu CRM, y le manda email de bienvenida. Para siempre. Sin que toques nada."
              }
            ]
          },
          {
            "titulo": "Por qué este patrón es la columna vertebral del CRM moderno",
            "objetivo": "Reconocer en qué tipo de negocios funciona este flujo y cuándo NO usarlo.",
            "blocks": [
              {
                "t": "p",
                "x": "Este patrón, fuente de captura → CRM curado → acción inmediata, es probablemente el flujo de automatización más replicado del mundo. Lo usan startups, agencias, consultorios, infoproductores, ecommerce y freelancers. Lo único que cambia entre todos ellos es de dónde viene el lead y qué acción se dispara."
              },
              {
                "t": "h",
                "x": "El mismo patrón en 4 negocios distintos"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Agencia de marketing",
                    "p": "Form de Typeform → Notion como CRM → Slack al equipo de ventas."
                  },
                  {
                    "s": "Consultorio dental",
                    "p": "Form de WordPress → Google Sheets → SMS de confirmación al paciente."
                  },
                  {
                    "s": "Infoproducto",
                    "p": "Form de descarga de lead magnet → Mailchimp → Email con el PDF + secuencia de nurturing."
                  },
                  {
                    "s": "Inmobiliaria",
                    "p": "Form de visita → Airtable → WhatsApp Business al asesor asignado."
                  }
                ]
              },
              {
                "t": "p",
                "x": "Todos siguen el mismo principio: el lead llega, queda registrado donde tú trabajas, y dispara una acción inmediata. En este curso aprendes la versión más usada con las herramientas más accesibles (Google Forms + Sheets + Gmail), pero el patrón es transferible a cualquier stack."
              },
              {
                "t": "h",
                "x": "Cuándo NO usar este flujo"
              },
              {
                "t": "callout",
                "s": "Newsletter masivo",
                "p": "Si tu intención es mandar el mismo correo a 10,000 personas a la vez, usa Mailchimp o Brevo. Make + Gmail tiene límites de envío diarios y Gmail puede marcar tu cuenta como spam si abusas."
              },
              {
                "t": "callout",
                "s": "Encuesta sin acción inmediata",
                "p": "Si el form es solo para recoger feedback que vas a analizar el viernes en una reunión, no necesitas Make. La hoja auto-generada de Google Forms es suficiente."
              },
              {
                "t": "callout",
                "s": "Volúmenes muy altos",
                "p": "Si recibes 500+ leads al día, el plan free de Make no te alcanza (1,000 operaciones al mes). Vas a necesitar plan de pago o una solución más robusta."
              },
              {
                "t": "callout",
                "s": "SÍ usa este flujo si...",
                "p": "Recibes entre 1 y 30 leads al día y necesitas que cada uno quede registrado en tu CRM y reciba atención inmediata sin que tú estés pendiente. Ese es el sweet spot."
              }
            ]
          },
          {
            "titulo": "Lo que necesitas",
            "objetivo": "Tener todas las herramientas listas antes de empezar a construir.",
            "blocks": [
              {
                "t": "p",
                "x": "✓ Lo que necesitas Cuenta en Make.com, plan Free, sin tarjeta de crédito. Cuenta de Google con Google Forms, Sheets y Gmail activos. Un navegador moderno (Chrome, Firefox, Safari). ~45 minutos sin interrupciones para construir el flujo de cero a producción."
              },
              {
                "t": "callout",
                "s": "Una cuenta de Google para todo",
                "p": "La cuenta de Google que conectes a Make tiene que ser la misma en la que crees el form, la hoja CRM y desde la que se mandarán los emails. Si usas cuentas distintas, los módulos no se ven entre sí."
              },
              {
                "t": "action",
                "label": "Antes de continuar",
                "title": "Asegúrate de tener todo listo",
                "steps": [
                  "01 Crea tu cuenta de Make si no la tienes (gratis, 2 minutos)",
                  "02 Confirma que estás logueado con la cuenta de Google que vas a usar",
                  "03 Cierra apps y notificaciones que te puedan interrumpir"
                ]
              }
            ]
          }
        ]
      },
      {
        "modulo": "02",
        "titulo": "Crea tu Google Form",
        "lecciones": [
          {
            "titulo": "Estructura del form: 5 campos que cubren el 90% de los casos",
            "objetivo": "Tener el formulario creado con los campos correctos para capturar leads de calidad sin fricción.",
            "blocks": [
              {
                "t": "p",
                "x": "Vamos a construir un formulario que cubre el 90% de los negocios: consultoría, agencias, freelance, infoproductos, servicios profesionales. Los 5 campos están diseñados para darte información suficiente para calificar al lead sin que el form sea tan largo que la gente abandone."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Ve a forms.google.com",
                    "p": "Asegúrate de estar con la cuenta de Google que vas a usar para todo el flujo."
                  },
                  {
                    "s": "Haz clic en \"Formulario en blanco\"",
                    "p": "Es el botón con el ícono +."
                  },
                  {
                    "s": "Cambia el título y agrega descripción",
                    "p": "Título: Solicitud de información - Servicios . Descripción: Cuéntanos sobre tu proyecto y te contactamos en menos de 24h."
                  }
                ]
              },
              {
                "t": "code",
                "lang": "Estructura del formulario",
                "code": "1. Nombre Completo       → Respuesta corta · Obligatorio: SÍ\n2. Email                 → Respuesta corta + validación · Obligatorio: SÍ\n3. Empresa o Proyecto    → Respuesta corta · Obligatorio: NO\n4. ¿Qué Servicio te      → Desplegable · Obligatorio: SÍ\n   Interesa?               Opciones: Consultoría / Diseño /\n                                     Automatización / Otro\n5. Cuéntanos Sobre tu    → Párrafo · Obligatorio: NO\n   Proyecto"
              },
              {
                "t": "p",
                "x": "📸 Captura pendiente Form completo con las 5 preguntas configuradas Así debe verse tu form al terminar la lección"
              },
              {
                "t": "callout",
                "s": "Por qué Empresa y Mensaje son opcionales",
                "p": "La fricción mata conversión. Si haces obligatorios todos los campos, mucha gente abandona. Lo que sí obligas es Nombre, Email y Servicio porque sin esos tres no puedes ni contactar ni calificar al lead."
              },
              {
                "t": "h",
                "x": "Tipos de campo: cuál usar y por qué"
              },
              {
                "t": "ul",
                "x": [
                  "Respuesta corta: nombre, email, empresa, teléfono. Cualquier dato de una línea.",
                  "Párrafo: mensaje libre, descripción del proyecto. Cuando esperas más de 100 caracteres.",
                  "Desplegable: opciones cerradas mutuamente excluyentes. Mejor que \"Varias opciones\" cuando hay 4+ opciones.",
                  "Casillas: opciones donde el usuario puede elegir varias.",
                  "Escala lineal: calificaciones del 1 al 10. Para encuestas de satisfacción."
                ]
              },
              {
                "t": "quiz",
                "q": "Quieres capturar el motivo de contacto del lead con respuestas largas y libres (varias frases). ¿Qué tipo de campo usas?",
                "opts": [
                  {
                    "x": "Respuesta corta",
                    "c": false
                  },
                  {
                    "x": "Párrafo",
                    "c": true
                  },
                  {
                    "x": "Desplegable",
                    "c": false
                  }
                ]
              }
            ]
          },
          {
            "titulo": "Validación de email: el truco que filtra leads basura",
            "objetivo": "Configurar el formulario para que rechace emails inválidos antes de que se envíen.",
            "blocks": [
              {
                "t": "p",
                "x": "Sin validación, alguien puede escribir aaaaa en el campo Email y Google Forms lo acepta. El lead queda inservible. La validación obliga al usuario a escribir un email con formato correcto antes de poder enviar."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Haz clic en la pregunta de Email",
                    "p": "Para seleccionarla."
                  },
                  {
                    "s": "Clic en los tres puntos ⋮ (esquina inferior derecha de la pregunta)",
                    "p": "Junto al toggle de Obligatorio."
                  },
                  {
                    "s": "Selecciona \"Validación de respuesta\"",
                    "p": "Aparece una nueva fila debajo del campo con dos dropdowns y un campo de texto."
                  },
                  {
                    "s": "Configura los dropdowns",
                    "p": "Primer dropdown: Texto . Segundo dropdown: Correo . Texto de error personalizado: déjalo vacío."
                  }
                ]
              },
              {
                "t": "p",
                "x": "📸 Captura pendiente Validación configurada en Texto · Correo Pregunta de Email con validación activada"
              },
              {
                "t": "callout",
                "s": "Por qué la opción se llama \"Correo\" y no \"Email\"",
                "p": "La UI de Google Forms en español usa \"Correo\" en lugar de \"Email\" en el dropdown de validación. Si buscas \"Email\" en las opciones no la vas a encontrar, es Correo."
              },
              {
                "t": "callout",
                "s": "Esto NO valida que el email exista",
                "p": "La validación solo verifica el formato (que tenga @ y dominio). No comprueba si el email realmente existe. Para el 95% de los casos, validar el formato es suficiente."
              }
            ]
          },
          {
            "titulo": "Publicar y obtener el link público",
            "objetivo": "Tener el formulario publicado y el link público listo para compartir y configurar Make.",
            "blocks": [
              {
                "t": "p",
                "x": "En 2026, Google Forms cambió la lógica de publicación. Ya no es solo \"Enviar\", ahora hay un paso explícito de \"Publicar\" que controla quién puede responder y cuándo. Este paso es obligatorio antes de poder vincular el form a Make."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Haz clic en el botón \"Publicar\"",
                    "p": "Esquina superior derecha, botón morado."
                  },
                  {
                    "s": "Verifica las opciones publicadas",
                    "p": "\"Se aceptan respuestas\" activado (toggle morado) · \"Encuestados\" en \"Cualquier persona con el enlace\"."
                  },
                  {
                    "s": "Haz clic en \"Copiar enlace de encuestado/a\"",
                    "p": "Te copia el link público al portapapeles. Pégalo en una nota, lo necesitarás para la prueba."
                  },
                  {
                    "s": "Haz clic en \"Guardar\"",
                    "p": "El botón \"Publicar\" ahora dice \"Publicado\", el form está vivo."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "Privacidad de Forms 2026: el email del usuario logueado YA NO se comparte",
                "p": "Si abres tu form mientras estás logueado en Google, verás un mensaje \"No compartido\" sobre tu correo. Es un cambio de privacidad de Google. Por eso necesitamos el campo Email manual, no podemos confiar en que Google nos dé el email del lead automáticamente."
              }
            ]
          }
        ]
      },
      {
        "modulo": "03",
        "titulo": "Crea tu CRM curado",
        "lecciones": [
          {
            "titulo": "¿Para qué Sheets si Forms guarda solo? La pregunta correcta",
            "objetivo": "Entender la diferencia entre la hoja auto-generada por Forms y un CRM curado, y por qué necesitas el segundo.",
            "blocks": [
              {
                "t": "p",
                "x": "Esta es probablemente la pregunta más importante del curso. Si la entiendes ahora, todo lo demás tiene sentido."
              },
              {
                "t": "p",
                "x": "La pregunta es: Si Google Forms ya tiene un botón mágico que crea automáticamente una hoja de Sheets con todas las respuestas, ¿para qué quiero crear OTRA hoja a mano y pedirle a Make que escriba ahí?"
              },
              {
                "t": "p",
                "x": "La respuesta corta: porque la hoja auto-generada de Forms es basura técnica que no puedes usar como CRM."
              },
              {
                "t": "p",
                "x": "Capacidad Hoja auto-generada CRM curado Captura respuestas Sí Sí Agregar columna \"Estado del lead\" No Sí Agregar columna \"Notas internas\" No Sí Cambiar nombres de columnas No Sí Reordenar columnas No Sí Filtrar por estado del lead No Sí Conectar con otros flujos Limitado Sí Formato de fecha legible ISO crudo Como tú quieras"
              },
              {
                "t": "p",
                "x": "El punto clave: en la hoja auto-generada NO puedes agregar campos que no estén en el form. Si agregas una columna \"Estado\" a mano, la primera respuesta nueva que llegue te la sobreescribe o te la corre. Forms es dueño de esa hoja, no tú."
              },
              {
                "t": "callout",
                "s": "Fuente vs Destino (patrón ETL)",
                "p": "Forms es la fuente, donde llega el dato del lead. La hoja CRM es el destino, donde tú trabajas como humano. Make es el puente que copia datos limpios de la fuente al destino y agrega valor en el camino. Este patrón se llama \"ETL\": Extract, Transform, Load. Es la base de cualquier sistema serio."
              },
              {
                "t": "quiz",
                "q": "¿Cuál es la razón principal por la que escribimos los leads en una hoja CRM curada en lugar de usar la hoja auto-generada por Google Forms?",
                "opts": [
                  {
                    "x": "Porque Forms no guarda bien los leads",
                    "c": false
                  },
                  {
                    "x": "Porque la hoja auto-generada es difícil de encontrar en Drive",
                    "c": false
                  },
                  {
                    "x": "Porque necesitamos controlar la estructura (columnas como Estado, Notas) que Forms no permite",
                    "c": true
                  },
                  {
                    "x": "Porque Make no puede leer la hoja auto-generada",
                    "c": false
                  }
                ]
              }
            ]
          },
          {
            "titulo": "Estructura de la hoja CRM (8 columnas)",
            "objetivo": "Tener la hoja CRM creada con la estructura exacta para gestionar leads como humano.",
            "blocks": [
              {
                "t": "p",
                "x": "Vamos a crear una hoja con 8 columnas. Las primeras 6 son los datos que vienen del form (con nombres más limpios). Las últimas 2 son tuyas, Make las deja vacías y tú las llenas a mano cuando procesas el lead."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Ve a sheets.google.com",
                    "p": "Misma cuenta que el form."
                  },
                  {
                    "s": "Crea una hoja nueva",
                    "p": "Puede ser un archivo independiente, o también puedes agregar una pestaña nueva al archivo que Forms ya generó. Las dos opciones funcionan igual."
                  },
                  {
                    "s": "Nombra la pestaña \"CRM - LEADS\"",
                    "p": "Doble clic en la pestaña inferior y cambia el nombre."
                  },
                  {
                    "s": "Escribe los 8 encabezados en la fila 1 en MAYÚSCULAS",
                    "p": "Make va a leer esos encabezados para mapear cada dato a su columna."
                  }
                ]
              },
              {
                "t": "code",
                "lang": "Encabezados · Fila 1 de tu CRM",
                "code": "A1: FECHA DE CAPTURA\nB1: NOMBRE\nC1: EMAIL\nD1: EMPRESA\nE1: SERVICIO\nF1: MENSAJE\nG1: ESTADO\nH1: NOTAS"
              },
              {
                "t": "p",
                "x": "📸 Captura pendiente Hoja CRM - LEADS con los 8 encabezados en fila 1 La hoja debe verse así antes de conectarla a Make"
              },
              {
                "t": "ul",
                "x": [
                  "FECHA DE CAPTURA: cuándo llegó el lead. Make la pone automática y formateada (DD/MM/YYYY).",
                  "NOMBRE, EMAIL, EMPRESA, SERVICIO, MENSAJE: los 5 datos del form, limpios.",
                  "ESTADO: tu campo. Lo llenas a mano: Nuevo / Contactado / Cerrado / Perdido. Make lo deja en blanco.",
                  "NOTAS: tus observaciones internas. Lo que aprendiste de la llamada, próximos pasos, contexto."
                ]
              },
              {
                "t": "callout",
                "s": "Aplica formato visual a la fila 1",
                "p": "Selecciona la fila 1 entera y dale color de fondo. Así visualmente distingues los encabezados de los datos cuando la hoja crezca."
              },
              {
                "t": "callout",
                "s": "Las columnas vacías al final también las ve Make",
                "p": "Make detecta automáticamente columnas extra (I, J...) vacías. Es normal, ignóralas cuando hagas el mapeo. No agregues encabezados extra que no necesites."
              }
            ]
          }
        ]
      },
      {
        "modulo": "04",
        "titulo": "Conecta Forms con Make",
        "lecciones": [
          {
            "titulo": "Watch Responses + el truco del Form ID manual",
            "objetivo": "Tener el módulo Watch Responses configurado y vinculado a tu formulario.",
            "blocks": [
              {
                "t": "p",
                "x": "Aquí empieza la magia. Vas a crear el escenario en Make y configurar el módulo que detecta cada nueva respuesta del formulario."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Ve a Make.com → Scenarios → \"+ Create scenario\"",
                    "p": "Botón morado en la esquina superior derecha."
                  },
                  {
                    "s": "Haz clic en el círculo morado grande con \"+\"",
                    "p": "Es el placeholder del primer módulo (el trigger)."
                  },
                  {
                    "s": "Busca \"Google Forms\" y selecciónalo",
                    "p": "Aparece con el ícono morado."
                  },
                  {
                    "s": "Selecciona \"Watch Responses\"",
                    "p": "Está en la sección \"Response\" del listado de módulos. Es el trigger que vigila respuestas nuevas."
                  },
                  {
                    "s": "Connection → \"Create a Connection\" si no tienes una",
                    "p": "Te abre el flow de OAuth de Google. Acepta los permisos para que Make pueda leer respuestas."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "⚠️ El truco del Form ID manual",
                "p": "En Make 2026, el campo \"Form ID\" NO ofrece dropdown automático con tus formularios. El botón \"Search\" tampoco abre selector de archivos. Tienes que copiar y pegar manualmente el Form ID. El form DEBE estar publicado primero."
              },
              {
                "t": "h",
                "x": "Cómo obtener el Form ID"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Abre tu formulario publicado en otra pestaña",
                    "p": "Desde forms.google.com."
                  },
                  {
                    "s": "Mira la URL en la barra del navegador",
                    "p": "Verás algo como: https://docs.google.com/forms/d/1vssostz9.../edit"
                  },
                  {
                    "s": "Copia el ID (la parte entre /d/ y /edit)",
                    "p": "Es una cadena larga de letras y números."
                  },
                  {
                    "s": "Pégalo en el campo Form ID de Make",
                    "p": ""
                  }
                ]
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Limit → cambia a 1",
                    "p": "Por defecto está en 2. Bájalo a 1 para procesar una respuesta a la vez, más predecible para pruebas."
                  },
                  {
                    "s": "Save",
                    "p": "Aparece el popup \"Choose where to start\", ese va en la siguiente lección."
                  }
                ]
              }
            ]
          },
          {
            "titulo": "Choose where to start: las 4 opciones explicadas",
            "objetivo": "Entender desde qué punto Make empieza a procesar respuestas y elegir la opción correcta.",
            "blocks": [
              {
                "t": "p",
                "x": "Cuando guardas el módulo, Make te muestra un popup llamado \"Choose where to start\". Esta decisión define desde cuándo Make va a empezar a procesar respuestas. Las 4 opciones tienen consecuencias muy distintas."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Choose manually",
                    "p": "Tú eliges respuesta por respuesta cuáles procesar. Útil si tienes respuestas viejas y solo quieres procesar algunas específicas. Raro de usar."
                  },
                  {
                    "s": "Since specific date",
                    "p": "Procesa todas las respuestas a partir de una fecha que tú elijas. Útil si migraste de otra herramienta."
                  },
                  {
                    "s": "All",
                    "p": "Procesa todas las respuestas que existen en el form, viejas y nuevas. ⚠️ Peligroso si tu form ya tiene respuestas: vas a mandar emails de bienvenida a leads de hace meses."
                  },
                  {
                    "s": "From now on: selecciona esta",
                    "p": "Procesa solo respuestas nuevas a partir de este momento. Lo que hubiera antes se ignora. Es la opción segura por defecto."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "Selecciona \"From now on\" y haz clic en Save",
                "p": "Es la única opción que tiene sentido aquí: tu form puede tener respuestas viejas de pruebas, y no quieres que el flujo las procese todas y mande emails inesperados."
              },
              {
                "t": "quiz",
                "q": "Acabas de configurar Watch Responses y tu form ya tiene 50 respuestas viejas de cuando lo estabas probando. Quieres que Make procese SOLO respuestas nuevas a partir de ahora. ¿Qué opción seleccionas?",
                "opts": [
                  {
                    "x": "All",
                    "c": false
                  },
                  {
                    "x": "Since specific date (con fecha de hoy)",
                    "c": false
                  },
                  {
                    "x": "From now on",
                    "c": true
                  },
                  {
                    "x": "Choose manually",
                    "c": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "modulo": "05",
        "titulo": "Escribe en tu CRM con datos limpios",
        "lecciones": [
          {
            "titulo": "Add a Row + el bug del JSON crudo",
            "objetivo": "Configurar el módulo de Sheets y entender el bug más común al mapear variables de Forms.",
            "blocks": [
              {
                "t": "p",
                "x": "Vamos a agregar el segundo módulo: Google Sheets - Add a Row. Este módulo escribe una fila nueva en tu CRM cada vez que llega una respuesta del form. Pero aquí está el bug más común que te va a hacer perder tiempo si no lo conoces."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Haz clic en el \"+\" a la derecha del módulo Watch Responses",
                    "p": ""
                  },
                  {
                    "s": "Busca \"Google Sheets\" y selecciónalo",
                    "p": ""
                  },
                  {
                    "s": "Elige \"Add a Row\"",
                    "p": ""
                  }
                ]
              },
              {
                "t": "code",
                "lang": "Configuración Add a Row",
                "code": "Connection                → My Google connection\nSearch Method             → Search by path\nDrive                     → My Drive\nSpreadsheet Name          → selecciona tu archivo\nSheet Name                → CRM - LEADS\nTable contains headers    → Yes\nUse column headers as IDs → No"
              },
              {
                "t": "p",
                "x": "Después de configurar esos campos, abajo aparece la sección \"Values in columns\" con un campo por cada columna de tu hoja. Aquí es donde mapeas qué dato del form va en qué columna del CRM. Y aquí está el bug."
              },
              {
                "t": "callout",
                "s": "🐛 Lo que llega a tu hoja si mapeas mal",
                "p": "Si arrastras la pastilla \"Nombre Completo\" directamente al campo NOMBRE (B), la celda no recibe \"Aury\", recibe el objeto JSON completo de Google Forms: {\"questionId\":\"32349e6a\",\"textAnswers\":{\"answers\":[{\"value\":\"Aury\"}]}} En vez de un nombre, tu CRM tiene texto basura."
              },
              {
                "t": "callout",
                "s": "Por qué es importante entender esto",
                "p": "Este bug es el #1 reporte de \"Make no me funciona\" en foros de Google Forms. La gente lo configura, ve basura en la hoja, y abandona pensando que la integración está rota. No está rota, está esperando que navegues hasta el valor correcto. La siguiente lección te enseña cómo."
              }
            ]
          },
          {
            "titulo": "Variables dinámicas: navegando estructuras anidadas",
            "objetivo": "Entender qué son las variables dinámicas y cómo navegar la estructura de Google Forms para extraer el valor limpio.",
            "blocks": [
              {
                "t": "p",
                "x": "Las pastillas moradas que arrastras en Make se llaman variables dinámicas . No son texto fijo, son referencias a datos que Make va a sustituir en tiempo de ejecución. La variable es la dirección, no el contenido."
              },
              {
                "t": "callout",
                "s": "Por qué se usan",
                "p": "Sin variables dinámicas, tendrías que crear un escenario nuevo por cada lead. Con variables dinámicas, un escenario procesa infinitos leads. Es la diferencia entre escribir un email a mano y crear una plantilla que se rellena sola."
              },
              {
                "t": "h",
                "x": "Anatomía del JSON de Google Forms"
              },
              {
                "t": "p",
                "x": "Cuando expandes la variable \"Nombre Completo\" en Make haciendo clic en el triángulo ▶, descubres esta estructura:"
              },
              {
                "t": "p",
                "x": "Answers └─ Nombre Completo ├─ Question ID \"32349e6a\" ├─ Grade null └─ textAnswers └─ answers[] └─ value \"Aury\" ← esta es la que necesitas"
              },
              {
                "t": "p",
                "x": "El valor \"Aury\" está enterrado 3 niveles dentro del objeto . Para llegar a él tienes que:"
              },
              {
                "t": "ol",
                "x": [
                  "Expandir Answers",
                  "Expandir Nombre Completo",
                  "Expandir textAnswers",
                  "Expandir answers[]",
                  "Arrastrar value (no la pastilla del nombre de pregunta, la pastilla \"value\" específicamente)"
                ]
              },
              {
                "t": "h",
                "x": "Mapea las 6 columnas correctamente"
              },
              {
                "t": "p",
                "x": "Repite el proceso para cada campo. Ten paciencia, los primeros tres se sienten lentos pero después es mecánico:"
              },
              {
                "t": "code",
                "lang": "Mapeo correcto",
                "code": "FECHA DE CAPTURA (A)  → Create Time (esta sí va directa)\nNOMBRE (B)            → Answers > Nombre Completo > textAnswers > answers[] > value\nEMAIL (C)             → Answers > Email > textAnswers > answers[] > value\nEMPRESA (D)           → Answers > Empresa o Proyecto > textAnswers > answers[] > value\nSERVICIO (E)          → Answers > ¿Qué Servicio te Interesa? > textAnswers > answers[] > value\nMENSAJE (F)           → Answers > Cuéntanos Sobre tu Proyecto > textAnswers > answers[] > value\nESTADO (G)            → DEJAR VACÍO (tú lo llenas a mano)\nNOTAS (H)             → DEJAR VACÍO (tú lo llenas a mano)"
              },
              {
                "t": "callout",
                "s": "Si te aparecen columnas (I), (J), etc",
                "p": "Make detecta columnas vacías al final de tu hoja. Ignóralas, déjalas vacías. No agregues encabezados que no existen en tu CRM."
              },
              {
                "t": "quiz",
                "q": "Cuando arrastras la pastilla \"Nombre Completo\" directamente al campo NOMBRE de Sheets (sin expandir nada), ¿qué se escribe realmente en la celda?",
                "opts": [
                  {
                    "x": "El nombre del lead, en texto limpio (ej: \"Aury\")",
                    "c": false
                  },
                  {
                    "x": "El objeto JSON completo de la respuesta, serializado como texto",
                    "c": true
                  },
                  {
                    "x": "Nada, Make da error porque no sabe qué hacer",
                    "c": false
                  },
                  {
                    "x": "El nombre del lead pero envuelto en comillas",
                    "c": false
                  }
                ]
              }
            ]
          },
          {
            "titulo": "Formato de fecha legible con formatDate()",
            "objetivo": "Saber transformar la fecha ISO cruda de Google Forms en un formato legible (DD/MM/YYYY) usando una expresión de Make.",
            "blocks": [
              {
                "t": "p",
                "x": "Si arrastras la pastilla Create Time al campo FECHA DE CAPTURA y haces una prueba, vas a ver que la celda recibe algo así:"
              },
              {
                "t": "code",
                "lang": "Lo que llega por defecto",
                "code": "2026-05-01T09:28:55.145Z"
              },
              {
                "t": "p",
                "x": "Eso es formato ISO 8601 UTC, el formato estándar técnico para fechas en APIs. Es funcional, pero feo de leer y peor de filtrar en Sheets. Lo que tú quieres ver es: 01/05/2026 ."
              },
              {
                "t": "h",
                "x": "La solución: la función formatDate() de Make"
              },
              {
                "t": "p",
                "x": "Make tiene un sistema de funciones que puedes aplicar a las variables. Una de ellas es formatDate() , que recibe una fecha y un patrón de formato, y devuelve la fecha formateada."
              },
              {
                "t": "code",
                "lang": "Sintaxis",
                "code": "formatDate(fecha; \"patron-de-formato\")"
              },
              {
                "t": "h",
                "x": "Aplica formatDate al campo FECHA DE CAPTURA"
              },
              {
                "t": "p",
                "x": "La forma más confiable, evitando bugs de UI, es pegar la expresión completa :"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Borra completamente el campo FECHA DE CAPTURA",
                    "p": "Si tenías la pastilla Create Time, quítala. El campo debe quedar 100% vacío."
                  },
                  {
                    "s": "Pega esto exactamente como está",
                    "p": "Las dobles llaves {{ }} son las que le dicen a Make: \"esto es una expresión, ejecútala, no la guardes como texto\"."
                  }
                ]
              },
              {
                "t": "code",
                "lang": "Listo para pegar",
                "code": "{{formatDate(1.createTime; \"DD/MM/YYYY\")}}"
              },
              {
                "t": "callout",
                "s": "⚠️ Bug común: formatDate como texto literal",
                "p": "Si escribes formatDate(...) sin las dobles llaves, Make lo guarda como texto plano y tu celda recibe literalmente formatDate(2026-05-01...; \"DD/MM/YYYY\") en vez del resultado. Las dobles llaves son obligatorias para que se evalúe como expresión."
              },
              {
                "t": "h",
                "x": "Patrones de formato que puedes usar"
              },
              {
                "t": "ul",
                "x": [
                  "\"DD/MM/YYYY\" → 01/05/2026",
                  "\"DD/MM/YYYY HH:mm\" → 01/05/2026 09:28",
                  "\"YYYY-MM-DD\" → 2026-05-01 (útil para ordenar)",
                  "\"D [de] MMMM [de] YYYY\" → 1 de mayo de 2026"
                ]
              },
              {
                "t": "callout",
                "s": "Tip pro: zona horaria",
                "p": "Por defecto formatDate usa la zona horaria de tu cuenta de Make (UTC normalmente). Si quieres convertir a tu zona local, agrega un tercer parámetro: {{formatDate(1.createTime; \"DD/MM/YYYY HH:mm\"; \"America/Mexico_City\")}} ."
              },
              {
                "t": "p",
                "x": "Save el módulo. Vas a probar el flujo completo después de configurar el email."
              }
            ]
          }
        ]
      },
      {
        "modulo": "06",
        "titulo": "Email automático de bienvenida",
        "lecciones": [
          {
            "titulo": "¿Para qué Make si Sheets ya guarda el lead?",
            "objetivo": "Entender dónde está el verdadero valor de Make en este flujo y por qué el email automático es lo que justifica todo.",
            "blocks": [
              {
                "t": "p",
                "x": "Aquí viene la segunda gran pregunta del curso. La primera era \"¿para qué Sheets si Forms ya guarda solo?\". Esta es: ¿para qué Make si los datos ya están guardados?"
              },
              {
                "t": "p",
                "x": "Make no compite contra \"guardar datos\". Forms+Sheets ya hacen eso solos. Make compite contra \"no hacer nada después de guardar\" . Y \"no hacer nada\" es el problema real de la captura de leads."
              },
              {
                "t": "h",
                "x": "El valor real está en lo que pasa DESPUÉS de guardar"
              },
              {
                "t": "p",
                "x": "Lo que Make te permite hacer al detectar un lead nuevo, que Forms+Sheets nunca podrán hacer solos:"
              },
              {
                "t": "p",
                "x": "Acción al detectar el lead Forms+Sheets Con Make Guardar el lead Sí Sí Mandar email automático al lead No Sí Notificarte por Slack/WhatsApp No Sí Crear contacto en CRM externo (Notion, Airtable, HubSpot) No Sí Asignar lead a vendedor según servicio elegido No Sí Filtrar leads basura (spam, dominios prohibidos) No Sí Enriquecer con datos externos (LinkedIn, Clearbit) No Sí Mandar diferentes emails según servicio elegido No Sí"
              },
              {
                "t": "p",
                "x": "De esta tabla, el caso más simple y de mayor impacto inmediato es el segundo: email automático al lead . Es lo que vamos a construir en la siguiente lección."
              },
              {
                "t": "callout",
                "s": "Por qué el email automático cambia el juego",
                "p": "Cuando un lead llena tu form, su nivel de interés está en su pico. En 30 minutos ese pico baja un 50%. En 24 horas, baja un 90%. Si tu primera respuesta llega 3 días después, el lead ya buscó otra opción. El email automático en menos de 60 segundos atrapa al lead en su momento de máximo interés. Esa es la magia que ningún Sheets+Forms puede dar."
              }
            ]
          },
          {
            "titulo": "Configura Gmail con variables del lead",
            "objetivo": "Tener el módulo de Gmail configurado para enviar un email de bienvenida personalizado a cada lead.",
            "blocks": [
              {
                "t": "p",
                "x": "Vamos a agregar el tercer y último módulo del flujo: Gmail - Send an Email."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Haz clic en el \"+\" a la derecha del módulo Google Sheets",
                    "p": ""
                  },
                  {
                    "s": "Busca \"Gmail\" → selecciona \"Send an Email\"",
                    "p": ""
                  },
                  {
                    "s": "Connection → conecta tu cuenta de Gmail",
                    "p": "Si te aparece un aviso de \"reautorización pendiente para X fecha\", ignóralo, es un recordatorio, no bloquea nada."
                  }
                ]
              },
              {
                "t": "h",
                "x": "De dónde leer las variables (importante)"
              },
              {
                "t": "p",
                "x": "El módulo Gmail puede leer variables de cualquier módulo anterior. Tienes dos opciones:"
              },
              {
                "t": "ul",
                "x": [
                  "Watch Responses (Forms): el módulo trigger original. Tiene los datos del lead anidados (necesitas navegar igual que en Sheets).",
                  "Add a Row (Sheets): el módulo intermedio. Su output es la confirmación de la fila escrita, no los datos del lead procesados."
                ]
              },
              {
                "t": "p",
                "x": "Vas a leer del primero. Siempre lee del módulo más cercano a la fuente del dato, en este caso Watch Responses. Esa es la fuente única de verdad."
              },
              {
                "t": "h",
                "x": "Configura los campos"
              },
              {
                "t": "p",
                "x": "Recipient email address (To): click en el campo y arrastra:"
              },
              {
                "t": "code",
                "lang": "Variable",
                "code": "Watch Responses → Answers → Email → textAnswers → answers[] → value"
              },
              {
                "t": "p",
                "x": "Subject: construye combinando texto y variable:"
              },
              {
                "t": "code",
                "lang": "Subject",
                "code": "Hola [pastilla:Nombre], recibimos tu solicitud ✓"
              },
              {
                "t": "p",
                "x": "Body type: déjalo en \"Collection of contents (text, images, etc...)\" (default)."
              },
              {
                "t": "p",
                "x": "Body contents: click en \"+ Add body content\". En el campo Text construye combinando texto + variables. Esta es la plantilla:"
              },
              {
                "t": "code",
                "lang": "Body (con pastillas)",
                "code": "Hola [pastilla:Nombre],\n\nGracias por tu interés. Recibimos tu solicitud y queríamos confirmarte que ya está en nuestra bandeja.\n\nEsto fue lo que nos compartiste:\n\n· Servicio que te interesa: [pastilla:Servicio]\n· Empresa o proyecto: [pastilla:Empresa]\n\nEn las próximas 24 horas te contactamos para coordinar una llamada de descubrimiento sin compromiso. Mientras tanto, si tienes alguna duda urgente, puedes responder directamente a este correo.\n\nUn saludo,\nEl equipo\n\n:\nEste correo se generó automáticamente al recibir tu solicitud. Es real, lo leemos, y te responderemos en menos de 24h."
              },
              {
                "t": "p",
                "x": "Donde dice [pastilla:Nombre] arrastra la pastilla value de Nombre Completo, donde dice [pastilla:Servicio] arrastra la de Servicio, etc. Recuerda navegar 3 niveles dentro de cada Answer hasta llegar a value."
              },
              {
                "t": "callout",
                "s": "Cuidado con las comas duplicadas",
                "p": "Si escribes \"Hola \" + pastilla + \",\" puedes terminar con doble coma. Revisa tu plantilla antes de guardar, debe quedar limpio: \"Hola Aury,\" (una sola coma)."
              },
              {
                "t": "p",
                "x": "Save. Ahora el flujo completo: Watch Responses → Add a Row → Send an Email."
              },
              {
                "t": "quiz",
                "q": "En el módulo de Gmail, vas a poner el email del lead en el campo \"To\". Tienes dos opciones: arrastrar desde el bundle de Watch Responses (Forms) o desde el bundle de Add a Row (Sheets). ¿De cuál lo arrastras y por qué?",
                "opts": [
                  {
                    "x": "Desde Add a Row, porque ahí están los datos ya procesados y limpios",
                    "c": false
                  },
                  {
                    "x": "Desde Watch Responses, porque es la fuente única de verdad y mantiene el flujo desacoplado",
                    "c": true
                  },
                  {
                    "x": "Da igual de cuál, los dos contienen los mismos datos",
                    "c": false
                  },
                  {
                    "x": "Desde un módulo nuevo de \"Search Rows\" en Sheets, porque Watch Responses no expone el email",
                    "c": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "modulo": "07",
        "titulo": "Prueba, activa y casos reales",
        "lecciones": [
          {
            "titulo": "Prueba completa end-to-end",
            "objetivo": "Ejecutar el flujo completo por primera vez y verificar que todo funciona: la fila aparece en el CRM y el email llega al lead.",
            "blocks": [
              {
                "t": "p",
                "x": "Tienes los 3 módulos configurados. Ahora vas a ejecutar el flujo por primera vez y ver cómo el lead se procesa de principio a fin, sin que toques nada."
              },
              {
                "t": "h",
                "x": "Ejecuta la prueba manual"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Abre tu form en otra pestaña usando el link público",
                    "p": "El que copiaste cuando publicaste el form en el módulo 02."
                  },
                  {
                    "s": "Llena el form con datos de prueba (importante: usa tu email real)",
                    "p": "Necesitas tu email real para verificar que llega el correo de bienvenida."
                  },
                  {
                    "s": "Envía el form",
                    "p": "Verás la pantalla \"Se ha registrado tu respuesta\"."
                  },
                  {
                    "s": "Vuelve a Make y haz clic en \"Run once\" (abajo a la izquierda)",
                    "p": "Make ejecuta el escenario una vez: detecta tu respuesta, la escribe en el CRM, y manda el email."
                  },
                  {
                    "s": "Verifica que aparezcan números verdes sobre cada módulo",
                    "p": "Un \"1\" verde sobre Watch Responses, otro sobre Add a Row, otro sobre Send an Email = éxito."
                  }
                ]
              },
              {
                "t": "p",
                "x": "🎯 Reto 1 · Verificación del CRM ¿Aparece la fila en tu CRM con los datos limpios y la fecha en formato DD/MM/YYYY? Sí, perfecto 🎉 No, algo salió mal"
              },
              {
                "t": "p",
                "x": "🎯 Reto 2 · Verificación del email ¿Llegó el email a tu bandeja con el saludo personalizado y los datos del lead correctos? Sí, llegó perfecto 📧 No llegó / llegó mal"
              },
              {
                "t": "callout",
                "s": "Si la fila tiene JSON crudo en vez de texto",
                "p": "Vuelve al módulo 5.2, no navegaste hasta el campo \"value\". Borra las pastillas mal mapeadas y vuelve a hacer el mapeo expandiendo Answers > [Pregunta] > textAnswers > answers[] > value."
              },
              {
                "t": "callout",
                "s": "Si el email no llegó",
                "p": "Revisa: (1) la conexión Gmail está activa y autorizada, (2) la variable del campo \"To\" apunta a Email > textAnswers > answers[] > value, (3) revisa la carpeta de spam."
              }
            ]
          },
          {
            "titulo": "Activa el escenario para que corra solo",
            "objetivo": "Activar el escenario para que ejecute automáticamente cada 15 minutos sin intervención.",
            "blocks": [
              {
                "t": "p",
                "x": "\"Run once\" es solo para pruebas manuales. Para que tu automatización funcione de forma permanente sin que toques nada, tienes que activar la ejecución programada."
              },
              {
                "t": "h",
                "x": "Activa el toggle"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "En la barra inferior izquierda, activa el toggle junto a \"Every 15 minutes\"",
                    "p": "Verás el toggle cambiar a estado activo (morado)."
                  },
                  {
                    "s": "Aparece automáticamente el popup \"Schedule settings\"",
                    "p": "Es donde configuras la frecuencia. Por defecto: Run scenario: At regular intervals · Minutes: 15"
                  },
                  {
                    "s": "Déjalo en 15 y haz clic en Save",
                    "p": "15 minutos es el mínimo permitido en el plan free de Make."
                  },
                  {
                    "s": "Guarda el escenario con Cmd+S (o el botón Save)",
                    "p": "Tu automatización está activa para siempre."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "Tu sistema está corriendo solo",
                "p": "A partir de ahora, cada respuesta del form que llegue será detectada en máximo 15 minutos, escrita en tu CRM, y disparará el email de bienvenida. Sin que toques nada. Para siempre."
              },
              {
                "t": "h",
                "x": "Schedule settings: opciones avanzadas"
              },
              {
                "t": "p",
                "x": "Si más adelante quieres más control sobre cuándo corre el escenario, en Schedule settings puedes elegir:"
              },
              {
                "t": "ul",
                "x": [
                  "At regular intervals (default), cada X minutos/horas",
                  "Days of the week, solo lunes-viernes, por ejemplo",
                  "Days of the month, solo días específicos",
                  "Specific time, a las 9:00 AM cada día"
                ]
              },
              {
                "t": "p",
                "x": "Para captura de leads, el default de cada 15 minutos es ideal, los leads no esperan."
              },
              {
                "t": "callout",
                "s": "El consumo de operaciones",
                "p": "Cada vez que el escenario corre y NO encuentra respuestas nuevas, consume 1 operación (la del Watch Responses). Si encuentra una respuesta nueva, consume 3 (Watch + Add Row + Send Email). En 1 día son ~96 operaciones de \"vigilancia\" + las que sumen los leads reales. El plan free (1,000 ops/mes) te alcanza para ~10 leads al día sin problema."
              }
            ]
          },
          {
            "titulo": "6 casos de uso adaptables del mismo flujo",
            "objetivo": "Saber cómo replicar este patrón en otros contextos de tu negocio sin empezar desde cero.",
            "blocks": [
              {
                "t": "p",
                "x": "Ya sabes el patrón. Ahora ese mismo patrón aplica a docenas de situaciones distintas. Lo único que cambia son los campos del form, las columnas del CRM y el contenido del email. La arquitectura es idéntica."
              },
              {
                "t": "h",
                "x": "6 variaciones listas para construir"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Reserva de citas (consultorio, estudio, salón)",
                    "p": "Form: Nombre, Teléfono, Servicio, Fecha preferida. CRM: agenda. Email: confirmación con la fecha + datos de ubicación."
                  },
                  {
                    "s": "Inscripción a webinar / evento",
                    "p": "Form: Nombre, Email, ¿Cómo nos conociste?. CRM: lista de inscritos. Email: link de Zoom + recordatorio."
                  },
                  {
                    "s": "Solicitud de cotización (agencia, contratista)",
                    "p": "Form: Servicio, Presupuesto, Detalles del proyecto. CRM: pipeline de cotizaciones. Email: \"recibimos tu solicitud, en 48h tienes la cotización\"."
                  },
                  {
                    "s": "Descarga de lead magnet (infoproductor)",
                    "p": "Form: Nombre, Email. CRM: lista de leads del lead magnet. Email: el PDF + invitación a tu newsletter."
                  },
                  {
                    "s": "Reclutamiento (RRHH, agencia)",
                    "p": "Form: Nombre, Posición, CV (link). CRM: pipeline de candidatos. Email: \"recibimos tu aplicación, te respondemos en 5 días\"."
                  },
                  {
                    "s": "Soporte / tickets (SaaS, ecommerce)",
                    "p": "Form: Email, Tipo de problema, Descripción. CRM: lista de tickets. Email: \"ticket #X recibido, tiempo estimado de respuesta: 4h\"."
                  }
                ]
              },
              {
                "t": "h",
                "x": "Cómo duplicar tu escenario"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Ve a la lista de Scenarios en Make",
                    "p": "Haz clic en los tres puntos ⋯ junto al escenario que construiste."
                  },
                  {
                    "s": "Selecciona \"Clone\"",
                    "p": "Make crea una copia exacta con todas las configuraciones."
                  },
                  {
                    "s": "Cambia el Form ID y el Spreadsheet",
                    "p": "En el clon, cambia el Form ID del Watch Responses y selecciona la nueva hoja CRM."
                  },
                  {
                    "s": "Adapta el subject y body del Gmail",
                    "p": "Cambia el contenido del email al nuevo contexto."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "El criterio para decidir qué automatizar a continuación",
                "p": "Antes de construir cualquier flujo nuevo, hazte esta pregunta: ¿cuántas veces atiendo este tipo de captura a la semana? Si son más de 3, vale la pena automatizarlo. Si son menos de 2, enfoca tu energía en otro lado primero."
              }
            ]
          }
        ]
      },
      {
        "modulo": "08",
        "titulo": "¡Lo lograste!",
        "lecciones": [
          {
            "titulo": "Tienes un sistema de captura de leads autónomo",
            "objetivo": "Cerrar el curso con un resumen de lo construido y un roadmap de qué automatizar después.",
            "blocks": [
              {
                "t": "p",
                "x": "Llegaste hasta aquí. Eso no es trivial, la mayoría de la gente abandona en el módulo 5 cuando aparece el JSON crudo. Tú no."
              },
              {
                "t": "h",
                "x": "Lo que tienes corriendo ahora mismo"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Un Google Form publicado",
                    "p": "Con 5 campos y validación de email. Puedes compartir el link en tu sitio, redes, o donde quieras."
                  },
                  {
                    "s": "Un CRM curado en Sheets",
                    "p": "Con 8 columnas. Cada lead que llegue queda registrado con fecha bonita, datos limpios, y los campos Estado/Notas listos para que tú los uses."
                  },
                  {
                    "s": "Un escenario de Make corriendo cada 15 minutos",
                    "p": "Tres módulos: Watch Responses → Add a Row → Send an Email. Detecta cada respuesta nueva, la registra y manda email de bienvenida."
                  },
                  {
                    "s": "Conocimiento técnico real",
                    "p": "Sabes navegar variables anidadas, sabes formatear fechas con expresiones, sabes el principio de fuente única de verdad. Eso vale más que el flujo en sí."
                  }
                ]
              },
              {
                "t": "h",
                "x": "Qué automatizar después (roadmap)"
              },
              {
                "t": "p",
                "x": "Ya tienes la base. Estos son los siguientes pasos lógicos, ordenados por impacto:"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Notificación a tu equipo",
                    "p": "Agrega un módulo de Slack o WhatsApp después de Gmail. Cada vez que llegue un lead, tu equipo se entera al instante. Tiempo: 10 minutos."
                  },
                  {
                    "s": "Asignación inteligente por servicio",
                    "p": "Agrega un módulo \"Router\" en Make: si Servicio = Diseño, manda a Juan. Si es Automatización, manda a María. Tiempo: 20 minutos."
                  },
                  {
                    "s": "Secuencia de seguimiento",
                    "p": "Si el lead no responde en 3 días, manda un email de seguimiento automático. Necesitas combinar Make con un CRM más potente. Tiempo: 1-2 horas."
                  },
                  {
                    "s": "Dashboard de leads",
                    "p": "Conecta Looker Studio o Google Data Studio a tu CRM. Visualiza leads por servicio, por mes, por estado. Tiempo: 2-3 horas."
                  }
                ]
              },
              {
                "t": "p",
                "x": "Siguiente curso recomendado Correos en Piloto Automático Aprende a mandar correos masivos personalizados desde Sheets a Gmail con Make. Ideal si quieres llevar tu CRM al siguiente nivel: facturas, recordatorios, confirmaciones, secuencias de nurturing, todo automático. Próximamente"
              },
              {
                "t": "callout",
                "s": "Un último consejo",
                "p": "La diferencia entre alguien que automatiza y alguien que no, es que el primero VE patrones repetitivos y los ataca. Cada vez que te encuentres haciendo lo mismo más de 3 veces a la semana, pregúntate: \"¿esto puede ser un escenario de Make?\". La respuesta es casi siempre: sí."
              }
            ]
          }
        ]
      }
    ],
    "relatedCourse": "documentos"
  },
  "minicrm": {
    "courseTitle": "Tu Mini CRM Gratis en Google Sheets",
    "nextCourse": "Automatiza tu negocio con Make",
    "modules": [
      {
        "modulo": "01",
        "titulo": "Por qué estás perdiendo clientes",
        "lecciones": [
          {
            "titulo": "El seguimiento que nunca haces",
            "objetivo": "Calcular cuánto dinero real estás dejando ir cada mes por no hacer seguimiento a tus leads.",
            "blocks": [
              {
                "t": "p",
                "x": "Tienes clientes potenciales. Algunos te escribieron por WhatsApp, otros llenaron un formulario, otros te contactaron en Instagram. Les respondiste. Dijeron \"lo pienso\" o \"dame unos días\". Y ahí quedó."
              },
              {
                "t": "p",
                "x": "No porque no te importaran. Sino porque no tenías un sistema para recordar que existían."
              },
              {
                "t": "h",
                "x": "La cuenta que nadie hace"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "10 leads al mes sin seguimiento",
                    "p": "Conversión típica: 1 o 2 clientes (10-20%). El resto se fue a la competencia o simplemente se olvidó."
                  },
                  {
                    "s": "10 leads al mes con seguimiento sistemático",
                    "p": "Conversión: 3 o 4 clientes (30-40%). La diferencia es únicamente el seguimiento, no el producto."
                  },
                  {
                    "s": "2 clientes extra al mes × 200€ de ticket medio",
                    "p": "Son 400€ al mes. 4.800€ al año. Solo por no dejar morir los leads que ya mostraron interés."
                  }
                ]
              },
              {
                "t": "p",
                "x": "El problema no es conseguir más leads. Es dejar de perder los que ya tienes."
              },
              {
                "t": "callout",
                "s": "El dato que cambia todo",
                "p": "El 80% de las ventas requieren cinco o más contactos antes de cerrarse, pero casi la mitad de los vendedores se rinden después del primero. El que hace el seguimiento número cinco casi siempre gana."
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Cuenta tus leads perdidos este mes",
                "steps": [
                  "01 Abre WhatsApp ahora mismo",
                  "02 Cuenta cuántas conversaciones con posibles clientes tienes sin seguimiento en los últimos 30 días",
                  "03 Multiplica ese número por tu ticket medio, ese es el dinero que dejaste ir este mes"
                ]
              }
            ]
          },
          {
            "titulo": "Por qué un Excel desordenado no es un CRM",
            "objetivo": "Entender la diferencia entre guardar datos y tener un sistema que te diga qué hacer cada día.",
            "blocks": [
              {
                "t": "p",
                "x": "La mayoría de los pequeños negocios ya tienen \"algo\" donde guardan clientes. Un Excel con nombres y teléfonos. Una libreta. Los favoritos de WhatsApp. El problema no es que no tengan datos, es que esos datos no les dicen nada accionable."
              },
              {
                "t": "h",
                "x": "Las 3 preguntas que debe responder un CRM en 10 segundos"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "¿A quién tengo que contactar hoy?",
                    "p": "No \"¿a quién tengo que contactar esta semana?\". Hoy. Específicamente."
                  },
                  {
                    "s": "¿Cuánto tiempo lleva este lead sin respuesta?",
                    "p": "Sin calcular fechas a mano. De un vistazo."
                  },
                  {
                    "s": "¿En qué estado está cada conversación?",
                    "p": "¿Está evaluando? ¿Tiene propuesta? ¿Ya dijo que no?"
                  }
                ]
              },
              {
                "t": "p",
                "x": "Si tu sistema actual no responde esas tres preguntas de un vistazo, no es un CRM. Es un cementerio de datos."
              },
              {
                "t": "h",
                "x": "Lo que vas a construir en este curso"
              },
              {
                "t": "p",
                "x": "Una hoja de Google Sheets que en 20 segundos te muestra:"
              },
              {
                "t": "ul",
                "x": [
                  "Los leads que llevan más de 7 días sin contacto (en rojo automáticamente)",
                  "El estado de cada conversación con un color distinto",
                  "Quién está listo para recibir una propuesta y quién necesita seguimiento suave"
                ]
              },
              {
                "t": "callout",
                "s": "Para quién es este curso",
                "p": "Este CRM es perfecto para autónomos y dueños de negocio con entre 10 y 100 leads activos. No está diseñado para un equipo de ventas de 10 personas. La última lección del curso te dice exactamente cuándo y a qué herramienta migrar cuando lo superes."
              },
              {
                "t": "quiz",
                "q": "¿Cuál es la función principal de un CRM bien construido?",
                "opts": [
                  {
                    "x": "Guardar los datos de contacto de tus clientes",
                    "c": false
                  },
                  {
                    "x": "Decirte exactamente a quién contactar hoy y en qué estado está cada conversación",
                    "c": true
                  },
                  {
                    "x": "Enviar emails automáticos a tus clientes",
                    "c": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "modulo": "02",
        "titulo": "Construye tu CRM en 20 minutos",
        "lecciones": [
          {
            "titulo": "Las 7 columnas que necesitas (y por qué no más)",
            "objetivo": "Crear la estructura base del CRM con exactamente la información necesaria para actuar, sin datos que nadie rellena.",
            "blocks": [
              {
                "t": "p",
                "x": "El error más común al construir un CRM es añadir demasiadas columnas. A los tres días nadie lo actualiza porque lleva demasiado tiempo. Regla: si no vas a consultar esa columna para tomar una decisión, no existe."
              },
              {
                "t": "h",
                "x": "Paso a paso, crea la hoja"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Ve a sheets.google.com",
                    "p": "Crea una hoja nueva en blanco. Nómbrala Mi CRM, [nombre de tu negocio]"
                  },
                  {
                    "s": "Escribe los 7 encabezados en la fila 1",
                    "p": "Exactamente como aparecen abajo, uno por columna de la A a la G."
                  }
                ]
              },
              {
                "t": "p",
                "x": "Encabezados · Fila 1 Copiar A1: Nombre B1: Contacto C1: Origen D1: Estado E1: Ultimo contacto F1: Dias sin contacto G1: Notas"
              },
              {
                "t": "h",
                "x": "Para qué sirve cada columna"
              },
              {
                "t": "callout",
                "s": "Escribe sin tildes los encabezados \"Ultimo contacto\" y \"Dias sin contacto\"",
                "p": "Algunos entornos tienen conflictos de encoding con caracteres especiales en nombres de columna. El contenido de las celdas sí puede tener acentos sin problema."
              },
              {
                "t": "p",
                "x": "✓ Confirma antes de continuar Creé la hoja \"Mi CRM\" en Google Sheets Los 7 encabezados están en la fila 1, columnas A a G La hoja está en la misma cuenta de Google que uso habitualmente"
              }
            ]
          },
          {
            "titulo": "Configura los estados con menú desplegable",
            "objetivo": "Crear un menú desplegable en la columna Estado para que actualizar un lead tarde 2 segundos, no 20.",
            "blocks": [
              {
                "t": "p",
                "x": "Si el estado es texto libre, en una semana tendrás \"interesado\", \"Interesado\", \"le interesa\" y cuatro variaciones que hacen imposible filtrar. El menú desplegable elimina ese problema."
              },
              {
                "t": "h",
                "x": "Paso a paso"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Selecciona toda la columna D",
                    "p": "Haz clic en D2, mantén Shift y haz clic en D1000."
                  },
                  {
                    "s": "Ve a Datos → Validación de datos",
                    "p": "En el menú superior de Google Sheets."
                  },
                  {
                    "s": "En Criterios, selecciona \"Lista de elementos\"",
                    "p": "Y escribe exactamente esto en el campo de texto:"
                  }
                ]
              },
              {
                "t": "p",
                "x": "Lista de estados, copia exactamente Copiar Nuevo,Contactado,En conversacion,Propuesta enviada,Ganado,Perdido,En pausa"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Activa \"Mostrar lista desplegable en la celda\"",
                    "p": "Y haz clic en Guardar."
                  }
                ]
              },
              {
                "t": "h",
                "x": "Qué significa cada estado"
              },
              {
                "t": "p",
                "x": "Estado Cuándo usarlo Nuevo Llegó el lead pero aún no lo has contactado Contactado Le mandaste el primer mensaje, esperando respuesta En conversacion Hay intercambio activo, está evaluando Propuesta enviada Le mandaste precio o propuesta formal Ganado Cerró. Es cliente Perdido Dijo que no o dejó de responder definitivamente En pausa Interesado pero para más adelante. Revisar en X semanas"
              },
              {
                "t": "callout",
                "s": "Si el desplegable no aparece",
                "p": "Verifica que seleccionaste D2:D1000 antes de configurar la validación, no solo D2. Si ya lo guardaste, borra la regla y repite el proceso con el rango correcto."
              },
              {
                "t": "callout",
                "s": "Prueba que funciona",
                "p": "Haz clic en cualquier celda de la columna D. Debe aparecer una pequeña flecha hacia abajo. Haz clic en ella y verifica que aparecen los 7 estados."
              },
              {
                "t": "quiz",
                "q": "¿Por qué es importante usar un menú desplegable en la columna Estado en lugar de texto libre?",
                "opts": [
                  {
                    "x": "Porque escribir con el desplegable es más rápido que tipear el texto",
                    "c": false
                  },
                  {
                    "x": "Porque garantiza consistencia exacta de los valores, lo que permite que filtros y formato condicional funcionen",
                    "c": true
                  },
                  {
                    "x": "Porque Google Sheets penaliza las hojas con texto libre",
                    "c": false
                  }
                ]
              }
            ]
          },
          {
            "titulo": "Colores automáticos por estado",
            "objetivo": "Configurar el formato condicional para ver el estado de todo tu pipeline de un vistazo sin leer nada.",
            "blocks": [
              {
                "t": "p",
                "x": "Esta es la lección del momento eureka. Cuando termines, tu CRM se verá como un semáforo real: verde para los ganados, rojo para los perdidos, naranja para las conversaciones activas. Sin hacer nada manualmente."
              },
              {
                "t": "h",
                "x": "Cómo aplicar el formato condicional"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Selecciona el rango A2:G1000",
                    "p": "Toda la hoja excepto los encabezados."
                  },
                  {
                    "s": "Formato → Formato condicional",
                    "p": "Se abre un panel a la derecha."
                  },
                  {
                    "s": "Crea 7 reglas: una por estado",
                    "p": "Para cada regla: en \"Dar formato si...\" selecciona La fórmula personalizada es . Copia la fórmula y elige el color correspondiente."
                  }
                ]
              },
              {
                "t": "p",
                "x": "Las 7 reglas de formato condicional Copiar Estado: Nuevo Fórmula: =$D2=\"Nuevo\" Color: Azul claro, #CFE2F3 Estado: Contactado Fórmula: =$D2=\"Contactado\" Color: Amarillo claro, #FFF2CC Estado: En conversacion Fórmula: =$D2=\"En conversacion\" Color: Naranja claro, #FCE5CD Estado: Propuesta enviada Fórmula: =$D2=\"Propuesta enviada\" Color: Morado claro, #E1D5E7 Estado: Ganado Fórmula: =$D2=\"Ganado\" Color: Verde claro, #D9EAD3 Estado: Perdido Fórmula: =$D2=\"Perdido\" Color: Rojo claro, #F4CCCC Estado: En pausa Fórmula: =$D2=\"En pausa\" Color: Gris claro, #EEEEEE"
              },
              {
                "t": "callout",
                "s": "Por qué el signo $ importa",
                "p": "El signo de dólar antes de la D en =$D2 le dice a Google Sheets que siempre mire la columna D de esa fila para decidir el color, independientemente de qué columna esté coloreando. Sin el $, el color solo aparece en la columna D."
              },
              {
                "t": "callout",
                "s": "Prueba que funciona",
                "p": "En D2, selecciona \"Ganado\" del desplegable. Toda la fila 2 debe ponerse verde automáticamente. Cambia a \"Perdido\", debe ponerse roja. Eso es tu CRM funcionando."
              },
              {
                "t": "p",
                "x": "🎯 Reto · Verificación visual Selecciona \"Ganado\" en la celda D2. ¿Toda la fila 2 (de la A a la G) se puso verde claro? Sí, toda la fila se pintó 🎨 No, solo se pintó la celda D"
              }
            ]
          },
          {
            "titulo": "La fórmula que te dice quién necesita seguimiento hoy",
            "objetivo": "Configurar la columna de días sin contacto para que se actualice sola y muestre en rojo los leads urgentes automáticamente.",
            "blocks": [
              {
                "t": "p",
                "x": "Esta columna es el corazón del sistema. Sin ella tienes que revisar fecha por fecha. Con ella, abres la hoja y en 10 segundos sabes exactamente a quién tienes que escribir hoy."
              },
              {
                "t": "h",
                "x": "Instala la fórmula"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Haz clic en la celda F2",
                    "p": "Y escribe exactamente esta fórmula:"
                  }
                ]
              },
              {
                "t": "p",
                "x": "Fórmula de días sin contacto Copiar =SI(E2=\"\",\"\",HOY()-E2)"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Copia la fórmula a toda la columna",
                    "p": "Haz clic en F2 → Cmd+C → Selecciona F3:F1000 → Cmd+V"
                  }
                ]
              },
              {
                "t": "h",
                "x": "Añade los colores de urgencia en la columna F"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Selecciona F2:F1000",
                    "p": "Formato → Formato condicional → Añade estas 3 reglas:"
                  }
                ]
              },
              {
                "t": "p",
                "x": "Reglas de urgencia, columna F Copiar Urgente (más de 7 días) Fórmula: =F2>7 Fondo: Rojo claro, #F4CCCC Texto: Rojo oscuro, #CC0000 Atención (4 a 7 días) Fórmula: =Y(F2>=4,F2<=7) Fondo: Amarillo claro, #FFF2CC Texto: Naranja, #E65C00 OK (menos de 4 días) Fórmula: =F2<4 Fondo: Verde claro, #D9EAD3 Texto: Verde oscuro, #274E13"
              },
              {
                "t": "callout",
                "s": "Atajo para insertar la fecha de hoy",
                "p": "Cuando registres la fecha en la columna E, no la escribas a mano. Usa Cmd+; en Mac o Ctrl+; en Windows para insertar la fecha de hoy automáticamente."
              },
              {
                "t": "quiz",
                "q": "En la fórmula =SI(E2=\"\",\"\",HOY()-E2) , ¿qué hace exactamente la condición E2=\"\" ?",
                "opts": [
                  {
                    "x": "Evita un error de división entre cero",
                    "c": false
                  },
                  {
                    "x": "Hace que las filas vacías queden en blanco en vez de mostrar un número falso de días",
                    "c": true
                  },
                  {
                    "x": "Hace que la fórmula sea más rápida en hojas grandes",
                    "c": false
                  }
                ]
              },
              {
                "t": "p",
                "x": "🎯 Reto · Verifica la columna F Pon una fecha de hace 10 días en E2. ¿La columna F muestra \"10\" en rojo automáticamente? Sí, está en rojo 🔴 No, no se pone rojo"
              },
              {
                "t": "p",
                "x": "✓ Tu CRM está listo cuando Los 7 estados tienen su color asignado y toda la fila cambia al seleccionarlos La columna F muestra días correctamente y cambia de color según la urgencia El atajo Cmd+; / Ctrl+; funciona para insertar fechas Registré al menos 3 leads de prueba con todos los campos completos"
              }
            ]
          }
        ]
      },
      {
        "modulo": "03",
        "titulo": "Tu flujo de trabajo semanal",
        "lecciones": [
          {
            "titulo": "Cómo registrar un lead en 2 minutos",
            "objetivo": "Establecer el hábito de registrar cada lead nuevo inmediatamente para que no desaparezca en el caos del día.",
            "blocks": [
              {
                "t": "p",
                "x": "El CRM más sofisticado del mundo no sirve de nada si no lo actualizas. La razón por la que la gente abandona sus CRMs es siempre la misma: tardaban demasiado. Este flujo te lleva a 2 minutos por lead."
              },
              {
                "t": "h",
                "x": "Cuándo registrar un lead"
              },
              {
                "t": "p",
                "x": "Inmediatamente cuando alguien te contacta por primera vez. No \"luego\". No \"al final del día\". Ahora mismo, abres la hoja en el móvil y lo registras mientras la conversación está fresca."
              },
              {
                "t": "h",
                "x": "Los 6 datos que registras"
              },
              {
                "t": "p",
                "x": "Plantilla de registro, copia y adapta Copiar Nombre: → Nombre completo o número si no lo sabes aún Contacto: → WhatsApp o email, el que usaste para hablar Origen: → Instagram / Referido / Web / LinkedIn / WhatsApp directo Estado: → \"Nuevo\" si aún no respondiste, \"Contactado\" si ya le escribiste Ultimo contacto: → Fecha de hoy (Cmd+; o Ctrl+;) Notas: → Una línea. Lo más importante que dijo o preguntó"
              },
              {
                "t": "h",
                "x": "Ejemplo real completo"
              },
              {
                "t": "p",
                "x": "Ejemplo, salón de belleza Copiar Nombre: → María García Contacto: → +34 612 345 678 Origen: → Instagram Estado: → Contactado Ultimo contacto: → 03/04/2026 Notas: → Quiere manicura gel para boda el 15 junio, preguntó precio"
              },
              {
                "t": "callout",
                "s": "Para el móvil",
                "p": "Guarda el link de tu CRM en los favoritos del navegador del móvil. Cuando llegue un lead nuevo, lo registras en 90 segundos sin necesidad de abrir el ordenador."
              },
              {
                "t": "callout",
                "s": "No dejes Notas vacío",
                "p": "Es la columna que hace que cuando vuelves a ese lead 5 días después sepas exactamente de qué hablasteis sin tener que releer toda la conversación de WhatsApp."
              }
            ]
          },
          {
            "titulo": "La revisión de los lunes",
            "objetivo": "Implementar una rutina semanal de 15 minutos que garantiza que ningún lead se enfría sin acción tuya.",
            "blocks": [
              {
                "t": "p",
                "x": "El sistema funciona solo si lo revisas. La revisión de los lunes son 15 minutos una vez a la semana que reemplazan horas de \"¿a quién tengo que llamar?\" repartidas por el día."
              },
              {
                "t": "h",
                "x": "El proceso, paso a paso"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Ordena por días sin contacto (2 min)",
                    "p": "Haz clic en el encabezado de la columna F → Datos → Ordenar de mayor a menor. Los leads más urgentes aparecen arriba."
                  },
                  {
                    "s": "Revisa los rojos: más de 7 días (5 min)",
                    "p": "Para cada uno decide: ¿le mando seguimiento? → actualiza la fecha. ¿Ya pasó a Perdido? → cambia el estado. ¿Necesita más tiempo? → mueve a \"En pausa\" y anota cuándo revisar."
                  },
                  {
                    "s": "Revisa los amarillos: 4 a 7 días (5 min)",
                    "p": "Decide si actúas esta semana o los dejas madurar un poco más."
                  },
                  {
                    "s": "Revisa los \"Propuesta enviada\" (3 min)",
                    "p": "Cualquier propuesta enviada hace más de 3 días merece un seguimiento. No esperes a que te digan que no."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "La regla de los lunes",
                "p": "Al terminar la revisión, no debe haber ningún lead en rojo con estado activo (Contactado, En conversación, Propuesta enviada). O les escribiste, o los moviste a En pausa o Perdido."
              },
              {
                "t": "callout",
                "s": "Ponlo en el calendario ahora",
                "p": "Crea un recordatorio recurrente todos los lunes a las 9am: \"Revisión CRM, 15 min\". Los primeros lunes tardarás 20 minutos. Al tercer lunes, en 10."
              },
              {
                "t": "quiz",
                "q": "Después de la revisión de los lunes, ¿qué situación NO debería existir en tu CRM?",
                "opts": [
                  {
                    "x": "Un lead en estado \"Perdido\" con más de 7 días en rojo",
                    "c": false
                  },
                  {
                    "x": "Un lead en estado \"Contactado\" o \"En conversación\" con más de 7 días en rojo",
                    "c": true
                  },
                  {
                    "x": "Un lead en estado \"En pausa\" con 30 días sin contacto",
                    "c": false
                  }
                ]
              }
            ]
          },
          {
            "titulo": "Mensajes de seguimiento por situación",
            "objetivo": "Tener listos los mensajes exactos para cada situación, listos para copiar y personalizar en 30 segundos.",
            "blocks": [
              {
                "t": "p",
                "x": "El seguimiento no funciona cuando parece un copy-paste genérico. Pero tampoco tienes que escribir desde cero cada vez. Personaliza el nombre y el detalle relevante, el resto está listo."
              },
              {
                "t": "p",
                "x": "Situación 1, Lead nuevo sin respuesta en 48h Copiar Hola [nombre], te escribo de [tu negocio]. Vi que nos contactaste por [origen]. ¿Tienes un momento esta semana para contarme qué necesitas exactamente? Sin compromiso ninguno."
              },
              {
                "t": "p",
                "x": "Situación 2, Seguimiento después de \"lo pienso\" (5-7 días) Copiar Hola [nombre], ¿qué tal? Te escribo porque quedamos en que lo ibas a pensar. ¿Tienes alguna duda sobre [producto/servicio] que te pueda resolver? Estoy aquí cuando quieras."
              },
              {
                "t": "p",
                "x": "Situación 3, Propuesta enviada sin respuesta (3-5 días) Copiar Hola [nombre], solo quería asegurarme de que te llegó bien la propuesta que te mandé el [día]. ¿La pudiste revisar? Si tienes alguna pregunta o quieres ajustar algo, me dices."
              },
              {
                "t": "p",
                "x": "Situación 4, Lead \"en pausa\" que reactivas Copiar Hola [nombre], ¿cómo estás? Hace unas semanas hablamos de [lo que mencionó]. ¿Sigue siendo algo que te interesa? Han cambiado algunas cosas que quizás te interesan."
              },
              {
                "t": "p",
                "x": "Situación 5, Cierre directo después de varias conversaciones Copiar Hola [nombre], llevamos un tiempo hablando y quiero ser directo contigo: ¿tiene sentido que avancemos o prefieres que lo dejemos para más adelante? No hay problema con ninguna de las dos opciones, pero me ayuda saber dónde estamos."
              },
              {
                "t": "callout",
                "s": "Guarda estos mensajes en tu biblioteca de prompts",
                "p": "Añádelos a la carpeta \"Tareas recurrentes\" del sistema que construiste en el curso de Prompts. Así tienes el sistema completo en un solo lugar."
              },
              {
                "t": "p",
                "x": "✓ Módulo 3 completado cuando Registré al menos 5 leads reales con todos los campos completos Completé mi primera revisión de los lunes Mandé al menos un mensaje de seguimiento usando las plantillas de arriba Puse el recordatorio recurrente de los lunes en mi calendario"
              }
            ]
          }
        ]
      },
      {
        "modulo": "04",
        "titulo": "Conecta tu CRM con Make",
        "lecciones": [
          {
            "titulo": "Captura leads de Gmail automáticamente",
            "objetivo": "Conectar el CRM de Sheets con el Scenario de Make del primer curso para que los leads que llegan por correo se registren solos.",
            "blocks": [
              {
                "t": "p",
                "x": "Si completaste el curso de Make, ya tienes un flujo que lleva datos de Gmail a Google Sheets. Ahora vas a apuntar ese mismo flujo a tu CRM para que los leads que llegan por correo aparezcan solos, con estado \"Nuevo\" y la fecha de hoy."
              },
              {
                "t": "callout",
                "s": "Este módulo requiere haber completado el curso de Make",
                "p": "Si aún no lo hiciste, es el primer curso del catálogo de AuryOnTech. Lo encuentras en auryontech.com. Este módulo no tiene sentido sin él."
              },
              {
                "t": "h",
                "x": "Paso a paso, redirige el Scenario de Make a tu CRM"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Abre Make y entra al Scenario de Gmail que creaste",
                    "p": "El que tiene Gmail → Google Sheets."
                  },
                  {
                    "s": "Haz clic en el módulo de Google Sheets",
                    "p": "El segundo módulo del canvas."
                  },
                  {
                    "s": "En \"Spreadsheet\", cambia el archivo a tu CRM",
                    "p": "Navega hasta el archivo \"Mi CRM, [tu negocio]\"."
                  },
                  {
                    "s": "Mapea los campos de Gmail a las columnas del CRM",
                    "p": "Exactamente como se indica abajo."
                  }
                ]
              },
              {
                "t": "p",
                "x": "Mapeo de campos Gmail → CRM Copiar Columna A (Nombre): → \"From Name\" del módulo Gmail Columna B (Contacto): → \"From Email\" del módulo Gmail Columna C (Origen): → Escribe \"Gmail\" como texto fijo Columna D (Estado): → Escribe \"Nuevo\" como texto fijo Columna E (Ultimo contacto): → \"Date\" del módulo Gmail Columna G (Notas): → \"Subject\" del módulo Gmail"
              },
              {
                "t": "callout",
                "s": "Resultado",
                "p": "Cada correo que llegue con tu filtro activo crea automáticamente una fila nueva en tu CRM con estado \"Nuevo\" y la fecha correcta. Los lunes solo tienes que abrir el CRM y ver qué leads nuevos llegaron esa semana."
              },
              {
                "t": "callout",
                "s": "Puedes tener múltiples Scenarios apuntando al mismo CRM",
                "p": "Uno para Gmail, otro para formularios de tu web, otro para Instagram. Todos crean filas en el mismo CRM. El campo Origen se rellena automáticamente con el canal de cada uno."
              },
              {
                "t": "quiz",
                "q": "¿Por qué los campos \"Origen\" y \"Estado\" se mapean como texto fijo y no como variables del módulo Gmail?",
                "opts": [
                  {
                    "x": "Porque Gmail no expone esa información en su API",
                    "c": false
                  },
                  {
                    "x": "Porque su valor siempre es el mismo para todos los leads que pasen por este Scenario, son valores de tu lógica de negocio, no del correo",
                    "c": true
                  },
                  {
                    "x": "Porque Make no permite variables en más de 4 columnas a la vez",
                    "c": false
                  }
                ]
              },
              {
                "t": "p",
                "x": "🎯 Reto · Prueba real con un correo Mándale a tu propia cuenta un correo que dispare el Scenario. ¿Apareció una fila nueva en tu CRM con todos los campos correctos? Sí, llegó perfecto 📧 No llegó / llegó con errores"
              }
            ]
          },
          {
            "titulo": "Alerta automática cuando un lead lleva 7 días sin contacto",
            "objetivo": "Configurar una automatización en Make que te avise por correo cuando un lead activo lleva demasiado tiempo sin seguimiento.",
            "blocks": [
              {
                "t": "p",
                "x": "En lugar de acordarte de revisar los rojos, Make te avisa directamente. El CRM trabaja para ti, no al revés."
              },
              {
                "t": "h",
                "x": "Lo que vamos a construir"
              },
              {
                "t": "p",
                "x": "Lógica del Scenario Copiar Trigger: Make revisa tu CRM cada mañana a las 8am Condición: Filas donde Días sin contacto > 7 Y Estado no es \"Ganado\", \"Perdido\" ni \"En pausa\" Acción: Te manda un email con el nombre y los datos del lead urgente"
              },
              {
                "t": "h",
                "x": "Paso a paso en Make"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Crea un nuevo Scenario en Make",
                    "p": ""
                  },
                  {
                    "s": "Trigger: Google Sheets → \"Watch rows\"",
                    "p": "Apúntalo a tu CRM y configúralo para ejecutarse todos los días a las 8am."
                  },
                  {
                    "s": "Añade un módulo \"Filter\" con estas condiciones",
                    "p": "Columna F mayor que 7, Y columna D no es igual a \"Ganado\", \"Perdido\" ni \"En pausa\"."
                  },
                  {
                    "s": "Añade Gmail → \"Send an email\" con este cuerpo",
                    "p": ""
                  }
                ]
              },
              {
                "t": "p",
                "x": "Plantilla del email de alerta Copiar Asunto: 🔴 Lead sin seguimiento: [Nombre del lead] Hola, El lead [Nombre] lleva [Días] días sin contacto. Estado actual: [Estado] Último contacto: [Fecha] Notas: [Notas] Abre tu CRM para hacer seguimiento: [link a tu Google Sheet]"
              },
              {
                "t": "callout",
                "s": "Resultado final",
                "p": "Cada mañana, si hay leads urgentes, recibes un email antes de empezar el día. No tienes que acordarte de revisar el CRM porque el CRM te llama a ti."
              },
              {
                "t": "p",
                "x": "🎯 Reto · Verificación de la alerta Pon una fecha de hace 9 días en un lead con estado \"Contactado\" y ejecuta el Scenario manualmente. ¿Te llegó el email de alerta a tu inbox? Sí, llegó la alerta 🚨 No llegó / dio error"
              }
            ]
          }
        ]
      },
      {
        "modulo": "05",
        "titulo": "Cuándo escalar",
        "lecciones": [
          {
            "titulo": "Cuándo Google Sheets ya no es suficiente",
            "objetivo": "Saber exactamente qué señales indican que necesitas pasar a un CRM profesional, y cuál elegir según tu situación.",
            "blocks": [
              {
                "t": "p",
                "x": "Google Sheets es perfecto hasta cierto punto. Estas son las señales concretas de que has llegado a ese límite:"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Más de 150 leads activos simultáneos",
                    "p": "La hoja empieza a ser difícil de gestionar visualmente. Es el momento de pasar a algo con más filtros y vistas."
                  },
                  {
                    "s": "Más de una persona actualizando el CRM",
                    "p": "Sheets aguanta colaboración, pero dos personas editando simultáneamente generan conflictos. Con equipo de ventas necesitas control de acceso por usuario."
                  },
                  {
                    "s": "Necesitas historial de conversaciones",
                    "p": "Sheets guarda el estado actual, no el historial. Si necesitas ver todo lo que hablaste con un cliente en el tiempo, un CRM con timeline es imprescindible."
                  }
                ]
              },
              {
                "t": "h",
                "x": "¿A qué herramienta migrar?"
              },
              {
                "t": "p",
                "x": "Situación Herramienta Precio Hasta 5 usuarios, presupuesto mínimo HubSpot CRM Plan gratuito, muy completo Hasta 10 usuarios, quieres más control Pipedrive Desde 15€/usuario/mes Todo integrado: email + CRM + automatizaciones ActiveCampaign Desde 29€/mes"
              },
              {
                "t": "callout",
                "s": "La regla de oro antes de migrar",
                "p": "No migres hasta que tu CRM de Sheets esté lleno y actualizado. Una herramienta cara con datos desordenados es peor que Google Sheets limpio. Primero el hábito, luego la herramienta."
              },
              {
                "t": "callout",
                "s": "No pierdes nada al migrar",
                "p": "Cuando llegue ese momento, exporta tu Sheets como CSV. La mayoría de los CRMs lo importan directamente en menos de 5 minutos."
              },
              {
                "t": "quiz",
                "q": "Tienes 80 leads activos, eres el único que actualiza el CRM, y necesitas saber qué hablaste con cada lead hace 3 meses. ¿Es momento de migrar a HubSpot o Pipedrive?",
                "opts": [
                  {
                    "x": "Sí, 80 leads ya es suficiente para migrar",
                    "c": false
                  },
                  {
                    "x": "Sí, porque necesitas historial de conversaciones, y eso es algo que Sheets no puede darte aunque tengas pocos leads",
                    "c": true
                  },
                  {
                    "x": "No, primero llena tu CRM de Sheets hasta los 150 leads activos",
                    "c": false
                  }
                ]
              },
              {
                "t": "p",
                "x": "🎯 Checklist final del curso Mi CRM tiene al menos 5 leads registrados con todos los campos completos Los colores automáticos por estado funcionan correctamente La fórmula de días sin contacto se actualiza sola y muestra los urgentes en rojo Completé mi primera revisión de los lunes Mandé al menos un mensaje de seguimiento usando las plantillas"
              },
              {
                "t": "p",
                "x": "Siguiente nivel Automatiza tu negocio con Make Conecta tu CRM con Gmail y otras herramientas para que los leads lleguen solos, sin que los registres manualmente. Sin código, con resultado visible en la primera sesión. Ver curso →"
              }
            ]
          }
        ]
      }
    ],
    "relatedCourse": "minicrm"
  },
  "prompts": {
    "courseTitle": "Prompts que Trabajan: la guía que nadie te dio",
    "nextCourse": "Tu Primera Automatización con Make",
    "modules": [
      {
        "modulo": "01",
        "titulo": "Por qué la IA te falla",
        "lecciones": [
          {
            "titulo": "Cómo piensa realmente un modelo de lenguaje",
            "objetivo": "Entender cómo procesa información la IA para dejar de usarla como buscador y empezar a usarla como herramienta.",
            "blocks": [
              {
                "t": "p",
                "x": "ChatGPT no es un buscador, no es una base de datos y no «sabe» cosas de la misma forma que tú. Es un modelo entrenado para predecir cuál es el siguiente token más probable dado un contexto. Eso tiene implicaciones muy concretas:"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "El contexto lo es todo",
                    "p": "La IA solo sabe lo que hay dentro de la conversación. No sabe quién eres, ni en qué industria trabajas, a menos que se lo digas."
                  },
                  {
                    "s": "Tiende al promedio",
                    "p": "Si no la guías, producirá la respuesta más genérica posible porque es la estadísticamente más probable."
                  },
                  {
                    "s": "No adivina tu intención",
                    "p": "Si escribes «hazme un email», no sabe si es formal o informal, corto o largo, para un cliente nuevo o para un proveedor de 10 años."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "Idea clave",
                "p": "Cuanto más contexto le das, menos tiene que inventar y más útil es el resultado. El prompting es el arte de eliminar ambigüedad."
              },
              {
                "t": "quiz",
                "q": "¿Por qué la IA tiende a producir respuestas genéricas cuando no le das contexto?",
                "opts": [
                  {
                    "x": "Porque está programada para preferir respuestas simples",
                    "c": false
                  },
                  {
                    "x": "Porque sin contexto, la respuesta más probable estadísticamente es la más promedio y aplicable a todos",
                    "c": true
                  },
                  {
                    "x": "Porque la IA no es capaz de generar respuestas específicas",
                    "c": false
                  }
                ]
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Identifica cómo usas la IA hoy",
                "steps": [
                  "01 Abre ChatGPT y revisa los últimos 3 prompts que escribiste",
                  "02 ¿Le diste contexto? ¿Le dijiste quién eras y qué necesitabas exactamente?",
                  "03 Anota qué información faltaba en cada uno, eso es lo que vas a aprender a incluir"
                ]
              }
            ]
          },
          {
            "titulo": "Los 3 errores que comete el 95% de los usuarios",
            "objetivo": "Reconocer los errores más comunes de prompting para no repetirlos desde hoy.",
            "blocks": [
              {
                "t": "h",
                "x": "Error 1: El prompt telegrama"
              },
              {
                "t": "p",
                "x": "«Escríbeme un email para mi cliente.» Eso no es un prompt, es una orden de telegrama de 1920. La IA no tiene ningún dato sobre quién es el cliente, de qué trata el email, qué quieres lograr ni cuál es tu tono."
              },
              {
                "t": "callout",
                "s": "❌ Ejemplo real de prompt telegrama",
                "p": "\"Dame ideas de marketing para mi negocio.\" La IA no sabe qué negocio tienes, quién es tu cliente, cuánto presupuesto tienes, ni qué ya has intentado."
              },
              {
                "t": "h",
                "x": "Error 2: Pedir todo en una sola instrucción"
              },
              {
                "t": "p",
                "x": "«Analiza mi negocio, dame ideas de marketing, escríbeme un plan de 6 meses y también sugiere herramientas de automatización.» Esto produce una respuesta larga, superficial y poco útil en todas las áreas. Las tareas complejas se dividen."
              },
              {
                "t": "h",
                "x": "Error 3: Aceptar el primer resultado sin iterar"
              },
              {
                "t": "p",
                "x": "La primera respuesta es un borrador, no el resultado final. El 80% de los usuarios lee la primera respuesta, decide que «la IA no sirve» y la cierra. Los que obtienen valor real le indican a la IA qué cambiar y por qué."
              },
              {
                "t": "callout",
                "s": "La buena noticia",
                "p": "Los tres errores tienen solución inmediata. Al terminar este módulo ya no los vas a cometer."
              },
              {
                "t": "quiz",
                "q": "¿Cuál es el problema principal del \"prompt telegrama\"?",
                "opts": [
                  {
                    "x": "Que es demasiado corto",
                    "c": false
                  },
                  {
                    "x": "Que no da contexto suficiente para que la IA sepa qué necesitas",
                    "c": true
                  },
                  {
                    "x": "Que usa lenguaje demasiado simple para la IA",
                    "c": false
                  }
                ]
              }
            ]
          },
          {
            "titulo": "La anatomía de un prompt que funciona",
            "objetivo": "Aprender los 4 elementos que debe tener cualquier prompt para producir resultados útiles al primer intento.",
            "blocks": [
              {
                "t": "p",
                "x": "Todo prompt útil tiene, como mínimo, estos 4 elementos:"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Rol",
                    "p": "Quién debe ser la IA para esta tarea. \"Eres un consultor de marketing con 10 años de experiencia.\""
                  },
                  {
                    "s": "Contexto",
                    "p": "La información de fondo necesaria para responder bien. Tu negocio, tu cliente, la situación."
                  },
                  {
                    "s": "Tarea",
                    "p": "Exactamente qué debe hacer, con el mayor detalle posible."
                  },
                  {
                    "s": "Formato del output",
                    "p": "Cómo quieres que te entregue el resultado: lista, párrafo, tabla, longitud, tono."
                  }
                ]
              },
              {
                "t": "prompt",
                "label": "Comparación: prompt malo vs. prompt con anatomía",
                "code": "// ❌ Prompt malo\nEscríbeme un email para mi cliente.\n\n// ✅ Prompt con anatomía completa\nEres un consultor de comunicación empresarial con 10 años de experiencia.\n\nContexto: Tengo una tienda de ropa online. Mi cliente María lleva 3 meses\nsin comprar y acaba de ver nuestros nuevos productos en Instagram sin hacer clic.\n\nTarea: Escribe un email de reactivación para María que sea cálido, no agresivo,\nque mencione los nuevos productos sin sonar a vendedor e incluya un descuento\ndel 10% para su primera compra de vuelta.\n\nFormato: Asunto + cuerpo de máximo 120 palabras. Tono cercano,\ncomo si lo escribiera una persona real, no una marca."
              },
              {
                "t": "p",
                "x": "✓ Antes de continuar al Módulo 2 Entiendo por qué la IA produce respuestas genéricas sin contexto Reconozco los 3 errores más comunes en mis prompts anteriores Sé los 4 elementos que debe tener un prompt: Rol, Contexto, Tarea, Formato"
              }
            ]
          }
        ]
      },
      {
        "modulo": "02",
        "titulo": "Las 6 técnicas que cambian todo",
        "lecciones": [
          {
            "titulo": "Role Prompting: dale un personaje a la IA",
            "objetivo": "Usar la asignación de roles para activar el tono, conocimiento y estilo exacto que necesitas en cada tarea.",
            "blocks": [
              {
                "t": "p",
                "x": "Cuando le asignas un rol a la IA, activas un conjunto específico de conocimientos, tono y estilo de razonamiento. La diferencia entre «ayúdame con esto» y «eres un experto en X, ayúdame con esto» es enorme."
              },
              {
                "t": "prompt",
                "label": "Estructura del role prompt",
                "code": "Eres [rol específico] con [años de experiencia / especialidad].\nTu estilo de comunicación es [tono: directo, empático, técnico, etc.].\nTu audiencia es [a quién le hablas].\n\n[Tarea a realizar]"
              },
              {
                "t": "prompt",
                "label": "Ejemplos reales por sector",
                "code": "// Para un salón de belleza\nEres una experta en marketing para negocios de belleza con 8 años de experiencia\nen redes sociales. Tu tono es cercano y motivador. Tu audiencia son mujeres de\n25 a 45 años que buscan cuidarse sin gastar una fortuna.\n\nEscríbeme 3 ideas de posts de Instagram para promocionar mi servicio de\nmanicura semipermanente esta semana.\n\n// Para una consultoría\nEres un consultor de ventas B2B con 12 años de experiencia cerrando contratos\nde servicio de 1.000 a 10.000€. Tu comunicación es directa y orientada a resultados.\n\nEscríbeme un mensaje de LinkedIn para contactar a un CEO que acaba de publicar\nque están en proceso de digitalización."
              },
              {
                "t": "quiz",
                "q": "¿Por qué asignar un rol a la IA produce respuestas más útiles que pedirle algo sin definir quién debe ser?",
                "opts": [
                  {
                    "x": "Porque la IA tiene módulos de experto que se activan con palabras clave",
                    "c": false
                  },
                  {
                    "x": "Porque condiciona qué vocabulario, ejemplos y estilo de razonamiento son más probables en la respuesta",
                    "c": true
                  },
                  {
                    "x": "Porque le da acceso a información a la que normalmente no podría acceder",
                    "c": false
                  }
                ]
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Crea el rol definitivo para tu negocio",
                "steps": [
                  "01 Define qué tipo de experto necesitas más en tu día a día",
                  "02 Escribe un role prompt con: cargo, años de experiencia, especialidad, tono y audiencia",
                  "03 Guárdalo, lo vas a pegar al principio de muchas conversaciones",
                  "04 Pruébalo con una tarea real de esta semana y ajusta si el tono no es el que necesitas"
                ]
              },
              {
                "t": "p",
                "x": "🎯 Reto · Prueba el efecto del rol Pídele a ChatGPT lo mismo dos veces: una sin rol y otra empezando con \"Eres un [tu rol experto]...\". ¿Notas diferencia clara entre las dos respuestas? Sí, la diferencia es clara 🎯 No noto mucha diferencia"
              }
            ]
          },
          {
            "titulo": "Chain of Thought: hazla pensar antes de responder",
            "objetivo": "Obtener análisis profundos y decisiones mejor razonadas pidiendo a la IA que muestre su proceso de pensamiento.",
            "blocks": [
              {
                "t": "p",
                "x": "Por defecto, la IA salta directamente a la respuesta. Para tareas complejas, análisis, decisiones, estrategias, eso produce resultados superficiales. El Chain of Thought le ordena que muestre su razonamiento paso a paso antes de concluir."
              },
              {
                "t": "prompt",
                "label": "Cómo activar el Chain of Thought",
                "code": "// Opción 1: Explícito\nAntes de responder, piensa paso a paso y muéstrame tu razonamiento.\n\n// Opción 2: Estructurado\nResponde siguiendo esta estructura:\n1. Analiza el problema\n2. Identifica las variables clave\n3. Evalúa las opciones\n4. Concluye con una recomendación clara\n\n// Ejemplo completo aplicado a un negocio\nTengo una tienda de artesanías online. Vendo entre 30 y 50 productos al mes\ncon un ticket medio de 35€. Quiero llegar a 80 ventas/mes en 3 meses.\n\nAntes de responder, analiza paso a paso:\n1. Cuál es mi gap actual (ventas vs. objetivo)\n2. Qué palancas pueden moverlo (tráfico, conversión, ticket, recurrencia)\n3. Qué acciones son más rápidas y baratas de implementar\n4. Dame un plan de 4 acciones ordenadas por impacto potencial"
              },
              {
                "t": "quiz",
                "q": "¿Por qué pedirle a la IA que \"piense paso a paso\" mejora la calidad de respuestas a problemas complejos?",
                "opts": [
                  {
                    "x": "Porque desbloquea una capacidad de razonamiento más avanzada",
                    "c": false
                  },
                  {
                    "x": "Porque cada paso intermedio que escribe se convierte en contexto para el siguiente, construyendo razonamiento en lugar de saltar a una conclusión",
                    "c": true
                  },
                  {
                    "x": "Porque le da tiempo para consultar más fuentes antes de responder",
                    "c": false
                  }
                ]
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Usa la IA para tomar una decisión real",
                "steps": [
                  "01 Piensa en una decisión de negocio pendiente: precio, canal, contratar, expandir",
                  "02 Describe la situación con todos los datos que tengas",
                  "03 Añade: \"Antes de darme una recomendación, analiza paso a paso los pros, contras y riesgos\"",
                  "04 Si algo no cuadra con tu realidad, corrígelo y pídele que recalcule"
                ]
              }
            ]
          },
          {
            "titulo": "Few-Shot Prompting: enséñale con ejemplos",
            "objetivo": "Usar ejemplos reales para que la IA replique tu tono, formato y estilo de forma consistente.",
            "blocks": [
              {
                "t": "p",
                "x": "En lugar de describirle lo que quieres, se lo muestras. Le das 2 o 3 ejemplos del resultado que buscas y la IA aprende el patrón para replicarlo. Es la técnica más poderosa para mantener consistencia de tono y formato."
              },
              {
                "t": "prompt",
                "label": "Estructura del few-shot prompt",
                "code": "Voy a darte ejemplos del tipo de [contenido] que necesito.\nAprende el patrón y genera uno nuevo.\n\n--- EJEMPLO 1 ---\n[Tu ejemplo real número 1]\n\n--- EJEMPLO 2 ---\n[Tu ejemplo real número 2]\n\n--- AHORA GENERA ---\nContexto: [datos del nuevo caso]\nGenera un/una [tipo de contenido] siguiendo exactamente el mismo patrón."
              },
              {
                "t": "prompt",
                "label": "Caso real: posts de LinkedIn con voz propia",
                "code": "Voy a darte dos posts de LinkedIn que escribí yo. Aprende mi estilo:\ndirecto, sin palabrería, con una pregunta al final que invite a debatir.\n\n--- EJEMPLO 1 ---\nLa mayoría de los negocios no tienen un problema de ventas.\nTienen un problema de seguimiento.\nUn cliente que dijo \"lo pienso\" hace 2 semanas no desapareció.\nSolo está esperando que alguien lo recuerde.\n¿Cuántos leads tienes en ese limbo ahora mismo?\n\n--- EJEMPLO 2 ---\nAutomatizar no es para grandes empresas.\nEs para el autónomo que contesta WhatsApp a las 11 de la noche.\nLa tecnología existe. Solo hace falta saber usarla.\n¿Qué proceso repetitivo te está robando más tiempo esta semana?\n\n--- AHORA GENERA ---\nTema: los dueños de negocio usan ChatGPT mal porque lo tratan como buscador.\nGenera un post con mi estilo."
              },
              {
                "t": "quiz",
                "q": "¿Por qué dar 2-3 ejemplos funciona mejor que describir con palabras lo que quieres?",
                "opts": [
                  {
                    "x": "Porque los ejemplos muestran patrones concretos (longitud, ritmo, vocabulario) que las descripciones nunca capturan completamente",
                    "c": true
                  },
                  {
                    "x": "Porque la IA entiende mejor cuando las instrucciones son simples",
                    "c": false
                  },
                  {
                    "x": "Porque los ejemplos entrenan a la IA para futuras conversaciones",
                    "c": false
                  }
                ]
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Clona tu tono de comunicación",
                "steps": [
                  "01 Busca 2 textos que hayas escrito tú que te parezcan buenos ejemplos de cómo quieres sonar",
                  "02 Cópialos en el prompt como Ejemplo 1 y Ejemplo 2",
                  "03 Pídele que genere el contenido que necesitas con ese mismo tono",
                  "04 Guarda esos ejemplos junto a tu role prompt, juntos forman tu perfil de comunicación reutilizable"
                ]
              }
            ]
          },
          {
            "titulo": "Delimitadores: controla exactamente el formato",
            "objetivo": "Usar delimitadores para obtener siempre el formato exacto que necesitas sin tener que reformatear manualmente.",
            "blocks": [
              {
                "t": "p",
                "x": "Cuando la IA no sabe cómo estructurar la respuesta, elige ella. Eso produce textos largos, mal organizados o en el formato equivocado. Los delimitadores le dicen exactamente qué estructura quieres."
              },
              {
                "t": "prompt",
                "label": "Delimitadores más útiles y cuándo usarlos",
                "code": "// Para separar secciones del prompt\n###CONTEXTO###\n[aquí va el contexto]\n\n###TAREA###\n[aquí va la instrucción]\n\n###FORMATO DE RESPUESTA###\n[aquí le dices cómo quieres la respuesta]\n\n// Para controlar el output exacto\nResponde SOLO con esto, sin explicaciones adicionales:\n- Asunto: [una línea]\n- Cuerpo: [máximo 100 palabras]\n- CTA: [una frase de cierre con llamada a la acción]\n\n// Para extraer datos específicos de un texto\nDel texto que te voy a dar, extrae SOLO:\n1. Nombre del cliente\n2. Problema principal que menciona\n3. Presupuesto si lo indica (o \"no mencionado\")\n4. Siguiente paso que pide\nFormato: una línea por punto. Sin texto adicional."
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Genera una plantilla de respuesta a clientes con formato exacto",
                "steps": [
                  "01 Piensa en el tipo de mensaje de cliente que más recibes",
                  "02 Escribe un prompt con delimitadores: asunto + cuerpo (máx. 80 palabras) + tono definido",
                  "03 Pruébalo con 3 situaciones: cliente contento, con duda, cliente molesto",
                  "04 Ajusta los delimitadores hasta que el formato sea exactamente lo que necesitas"
                ]
              }
            ]
          },
          {
            "titulo": "Prompts en cadena: divide para vencer",
            "objetivo": "Producir contenido complejo de alta calidad dividiendo la tarea en pasos incrementales.",
            "blocks": [
              {
                "t": "p",
                "x": "Las tareas complejas producen mejores resultados cuando se dividen en pasos. En lugar de pedirlo todo en un prompt, construyes la respuesta de forma incremental: primero el esquema, luego el desarrollo, luego la revisión."
              },
              {
                "t": "prompt",
                "label": "Cadena real: de idea a contenido publicable en 4 pasos",
                "code": "// PASO 1: Genera el esquema\nTema: cómo un salón de belleza puede usar WhatsApp Business para reducir\ncancelaciones de última hora.\nDame un esquema con 4 secciones. Solo los títulos y un subtítulo de una línea.\nSin desarrollar el contenido aún.\n\n// PASO 2: Desarrolla sección por sección\nPerfecto. Ahora desarrolla SOLO la sección 1: [título que te dio].\nMáximo 120 palabras. Tono cercano, sin tecnicismos.\n\n// PASO 3: Ajusta el tono\nEl contenido está bien pero suena demasiado formal.\nReescríbelo como si se lo estuvieras contando a una amiga que tiene un salón.\nMisma información, diferente tono.\n\n// PASO 4: Genera el CTA final\nAhora escribe el párrafo de cierre. Debe incluir un llamado a la acción\nhacia una auditoría gratuita de automatización. Máximo 40 palabras."
              },
              {
                "t": "quiz",
                "q": "¿Por qué dividir una tarea compleja en varios prompts produce mejor resultado que pedirla toda de golpe?",
                "opts": [
                  {
                    "x": "Porque la IA procesa más rápido respuestas cortas",
                    "c": false
                  },
                  {
                    "x": "Porque la IA puede dedicar toda su atención a una tarea por vez en lugar de repartirla entre varias",
                    "c": true
                  },
                  {
                    "x": "Porque la IA tiene un límite de caracteres por prompt",
                    "c": false
                  }
                ]
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Produce un artículo o post largo en 4 pasos",
                "steps": [
                  "01 Elige un tema de tu industria que quieras publicar esta semana",
                  "02 Usa el Paso 1 para generar el esquema, no sigas hasta que te convenza",
                  "03 Desarrolla una sección a la vez, corrige el tono en cada una",
                  "04 Al final pídele que unifique el tono de todo el artículo y revise contradicciones"
                ]
              }
            ]
          },
          {
            "titulo": "Iteración dirigida: del borrador al resultado final",
            "objetivo": "Llevar cualquier respuesta del 60% al 95% de calidad usando instrucciones de mejora específicas.",
            "blocks": [
              {
                "t": "p",
                "x": "El 80% del valor de la IA está en la segunda y tercera iteración, no en la primera. La iteración dirigida es la habilidad de pedirle mejoras específicas en lugar de decir «no me gusta, inténtalo de nuevo»."
              },
              {
                "t": "prompt",
                "label": "Cómo pedir mejoras específicas",
                "code": "// ❌ Iteración vaga (produce resultados aleatorios)\nNo me gusta. Inténtalo de nuevo.\nHazlo mejor.\nMás profesional.\n\n// ✅ Iteración dirigida (produce mejoras concretas)\nEstá bien pero:\n- El segundo párrafo es demasiado largo. Córtalo a la mitad.\n- El tono del primer párrafo suena corporativo. Hazlo más conversacional.\n- Añade una pregunta retórica al inicio para captar atención.\n- Elimina la frase \"en el mundo actual\" y cualquier cliché similar.\n\n// Para ajustar longitud\nEsto tiene 200 palabras y necesito máximo 80.\nConserva la idea principal y el CTA. Elimina todo lo que sea relleno.\n\n// Para cambiar audiencia\nReescribe esto pero para alguien que no sabe nada de tecnología.\nElimina todos los términos técnicos y sustituye cada uno por una analogía cotidiana."
              },
              {
                "t": "quiz",
                "q": "¿Por qué decir \"hazlo mejor\" o \"no me gusta\" produce resultados aleatorios?",
                "opts": [
                  {
                    "x": "Porque \"mejor\" es subjetivo y la IA no tiene forma de saber qué dimensión concreta cambiar",
                    "c": true
                  },
                  {
                    "x": "Porque la IA solo tiene una versión de cada texto y no puede generar otra distinta",
                    "c": false
                  },
                  {
                    "x": "Porque la IA está entrenada para responder mal a feedback negativo",
                    "c": false
                  }
                ]
              },
              {
                "t": "p",
                "x": "✓ Las 6 técnicas dominadas Tengo mi role prompt creado y guardado Usé Chain of Thought en una decisión real Tengo 2 ejemplos de mi voz para few-shot prompting Sé usar delimitadores para controlar el formato del output Produje un texto complejo usando prompts en cadena Llevé un texto del primer borrador a un resultado publicable usando iteración dirigida"
              }
            ]
          }
        ]
      },
      {
        "modulo": "03",
        "titulo": "Tu biblioteca de prompts",
        "lecciones": [
          {
            "titulo": "El sistema de las 3 carpetas",
            "objetivo": "Organizar tus prompts de forma que puedas encontrar cualquiera en menos de 10 segundos.",
            "blocks": [
              {
                "t": "p",
                "x": "Una biblioteca de prompts desordenada es inútil. El sistema de 3 carpetas es el mínimo viable para que puedas encontrar cualquier prompt en menos de 10 segundos:"
              },
              {
                "t": "p",
                "x": "Carpeta Qué contiene Ejemplo Base Tu role prompt + tus ejemplos de voz. Van al inicio de casi todas las conversaciones. \"Eres [tu experto ideal]…\" + 2 textos de ejemplo Tareas recurrentes Prompts para lo que haces más de 2 veces por semana. Emails de seguimiento, posts de RRSS, respuestas a clientes Proyectos Prompts de proyectos puntuales que puedes reutilizar. Lanzar un producto, redactar propuestas, analizar competencia"
              },
              {
                "t": "callout",
                "s": "Herramienta recomendada",
                "p": "Notion, Google Docs o simplemente una carpeta en tu gestor de notas favorito. Lo importante es que esté siempre accesible desde cualquier dispositivo."
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Crea tu biblioteca base",
                "steps": [
                  "01 Crea una carpeta llamada \"Biblioteca de Prompts\" en Notion o Google Docs",
                  "02 Crea las 3 subcarpetas: Base, Tareas recurrentes, Proyectos",
                  "03 En \"Base\", pega tu role prompt y tus 2 ejemplos de voz del Módulo 2",
                  "04 En \"Tareas recurrentes\", irás añadiendo los prompts de las próximas lecciones"
                ]
              }
            ]
          },
          {
            "titulo": "Prompts para email y comunicación",
            "objetivo": "Tener listos los prompts de email más frecuentes para usarlos desde hoy sin construirlos desde cero.",
            "blocks": [
              {
                "t": "p",
                "x": "Estos prompts van directos a tu carpeta \"Tareas recurrentes\". Personaliza los campos marcados con naranja y úsalos esta semana."
              },
              {
                "t": "prompt",
                "label": "Prompt 1: Email de seguimiento comercial",
                "code": "Eres un consultor de ventas que escribe emails de seguimiento directos y sin presión.\n\nContexto:\n- Nombre del prospecto: [nombre]\n- Contacto previo: [cuándo y de qué hablaron]\n- Lo que ofreces: [tu producto o servicio]\n- Han pasado: [X días] sin respuesta\n\nEscribe un email de seguimiento de máximo 80 palabras.\nSin presionar, sin \"solo quería saber si…\", con una pregunta directa\nal final que sea fácil de responder con sí o no."
              },
              {
                "t": "prompt",
                "label": "Prompt 2: Gestionar una queja",
                "code": "Eres un experto en atención al cliente que convierte quejas en fidelización.\n\nSituación: El cliente [nombre] se queja de que [describe el problema].\nCausa real: [qué pasó internamente]\nLo que puedes ofrecer: [tu solución concreta]\n\nEscribe un email que:\n1. Reconozca el problema sin excusas\n2. Explique brevemente qué pasó (honestidad sin drama)\n3. Proponga la solución concreta\n4. Cierre dejando al cliente con mejor percepción que antes de quejarse\n\nMáximo 120 palabras. Tono cálido y responsable."
              },
              {
                "t": "prompt",
                "label": "Prompt 3: Email de bienvenida a nuevo cliente",
                "code": "Eres el responsable de comunicación de [nombre de tu negocio].\n\nNuevo cliente: [nombre] acaba de contratar [producto o servicio].\n\nEscribe un email de bienvenida que:\n- Sea cálido pero no exagerado\n- Le diga exactamente qué pasa ahora (próximos pasos)\n- Le dé un consejo rápido para sacar más provecho desde el primer día\n- Invite a contactar sin sonar a obligación\n\nAsunto + cuerpo. Máximo 100 palabras."
              }
            ]
          },
          {
            "titulo": "Prompts para redes sociales",
            "objetivo": "Generar contenido de redes sociales coherente con tu voz y orientado a generar engagement real.",
            "blocks": [
              {
                "t": "prompt",
                "label": "Prompt 4: Post de LinkedIn que genera debate",
                "code": "Eres un experto en contenido B2B para LinkedIn con foco en negocios de servicios.\n\nTema: [tema del post]\nMi negocio: [descripción en 1 línea]\nAudiencia: [a quién le escribes]\n\nEscribe un post de LinkedIn que:\n- Abra con una afirmación directa o ligeramente polémica (no una pregunta)\n- Desarrolle el argumento en 3-4 párrafos cortos (máximo 2 líneas cada uno)\n- Use saltos de línea frecuentes para facilitar lectura móvil\n- Cierre con una pregunta que invite a comentar\n- Sin emojis en exceso (máximo 2 en todo el post)\n- Máximo 3 hashtags al final\n\nLongitud total: entre 150 y 220 palabras."
              },
              {
                "t": "prompt",
                "label": "Prompt 5: 5 ideas de contenido semanal",
                "code": "Eres un estratega de contenido para redes sociales especializado en pequeños negocios.\n\nMi negocio: [descripción]\nMi audiencia: [quiénes son, qué problema tienen]\nRed social principal: [LinkedIn / Instagram / Facebook]\nEsta semana me enfoco en: [tema o campaña]\n\nDame 5 ideas de posts para esta semana. Para cada idea:\n- Gancho de apertura (1 línea)\n- Ángulo del contenido (2 líneas)\n- Formato sugerido (texto, carrusel, vídeo corto, imagen)\n\nNo desarrolles los posts, solo las ideas. Quiero elegir primero."
              }
            ]
          },
          {
            "titulo": "Prompts para análisis y toma de decisiones",
            "objetivo": "Usar la IA como consultor estratégico para analizar tu negocio y mejorar tus textos.",
            "blocks": [
              {
                "t": "prompt",
                "label": "Prompt 6: DAFO rápido de tu negocio",
                "code": "Eres un consultor estratégico que trabaja con pequeñas empresas.\n\nMi negocio: [describe qué haces, a quién, cuánto tiempo llevas]\nSituación actual: [facturación, clientes, canal principal de venta]\nContexto del mercado: [competencia, tendencias que estás viendo]\n\nRealiza un DAFO con este formato:\n- Fortalezas: 3 puntos concretos (no genéricos)\n- Debilidades: 3 puntos concretos\n- Oportunidades: 3 oportunidades específicas del mercado actual\n- Amenazas: 3 amenazas reales, no teóricas\n\nAl final, dame las 2 acciones más urgentes basadas en el DAFO.\nSé directo. Si ves algo preocupante, dímelo sin suavizarlo."
              },
              {
                "t": "prompt",
                "label": "Prompt 7: Revisión y mejora de un texto tuyo",
                "code": "Eres un editor de textos con experiencia en comunicación de negocios y copywriting.\n\nVoy a darte un texto que escribí yo. Necesito que:\n1. Lo evalúes del 1 al 10 en claridad, impacto y llamada a la acción\n2. Identifiques las 3 frases más débiles y expliques por qué\n3. Propongas una versión mejorada de cada frase débil\n4. Indiques si el tono es coherente de principio a fin\n\nNo reescribas el texto completo. Solo analiza y mejora las partes débiles.\n\nAquí está el texto:\n---\n[pega aquí tu texto]\n---"
              },
              {
                "t": "p",
                "x": "✓ Tu biblioteca está lista cuando Creé las 3 carpetas: Base, Tareas recurrentes, Proyectos Guardé al menos 5 prompts personalizados con mis datos reales Usé al menos 2 prompts en situaciones reales de mi negocio esta semana"
              }
            ]
          }
        ]
      },
      {
        "modulo": "04",
        "titulo": "Prompts por sector",
        "lecciones": [
          {
            "titulo": "Salón de belleza y estética",
            "objetivo": "Aplicar prompts específicos para recuperar clientes, llenar agenda y generar contenido para un negocio de belleza.",
            "blocks": [
              {
                "t": "p",
                "x": "Estos prompts están pensados específicamente para negocios de belleza, salones, estéticas, nail studios, spas. Si no es tu sector, salta directamente al que te aplica."
              },
              {
                "t": "prompt",
                "label": "Recuperar clientes inactivos por WhatsApp",
                "code": "Eres una experta en comunicación para negocios de belleza. Tono: cercano, cálido, sin presión.\n\nSituación: tengo clientes que vinieron hace más de 30 días y no han vuelto a reservar.\nNombre del cliente: [nombre]\nÚltimo servicio: [corte, color, manicura, etc.]\n\nEscribe un mensaje de WhatsApp de máximo 60 palabras que:\n- Los llame por su nombre\n- Mencione el servicio que se hicieron (sin sonar a spam)\n- Les dé una razón para volver (oferta, novedad, temporada)\n- Termine con CTA fácil: \"¿Te apunto esta semana?\""
              },
              {
                "t": "prompt",
                "label": "Post de Instagram para promocionar un servicio",
                "code": "Eres una experta en marketing para salones de belleza en Instagram.\n\nServicio a promocionar: [nombre del servicio]\nPrecio o promoción: [precio habitual / descuento si hay]\nResultado visible del servicio: [qué cambio nota la clienta]\n\nEscribe un caption de Instagram de máximo 80 palabras que:\n- Empiece con una frase que haga parar el scroll\n- Destaque el resultado, no el servicio técnico\n- Incluya un CTA directo: \"Reserva en el link de bio\"\n- Sugiere 5 hashtags relevantes al final"
              }
            ]
          },
          {
            "titulo": "Tienda online y e-commerce",
            "objetivo": "Crear descripciones de producto que venden y emails de recuperación de carrito abandonado.",
            "blocks": [
              {
                "t": "prompt",
                "label": "Descripción de producto que vende",
                "code": "Eres un copywriter especializado en e-commerce de [tu categoría].\n\nProducto: [nombre del producto]\nCaracterísticas técnicas: [lista las specs]\nPara quién es: [cliente ideal]\nProblema que resuelve: [qué frustración cubre]\n\nEscribe una descripción con:\n- Título con beneficio principal (no solo el nombre)\n- Párrafo de apertura que conecte con el problema del cliente (2-3 líneas)\n- 4 bullets de beneficios (qué gana el cliente, no specs técnicas)\n- Frase de cierre con CTA\n\nMáximo 150 palabras en total. Sin tecnicismos innecesarios."
              },
              {
                "t": "prompt",
                "label": "Email de carrito abandonado",
                "code": "Eres un experto en email marketing para tiendas online.\n\nProducto abandonado: [nombre del producto y precio]\nMi tienda vende: [descripción en 1 línea]\n¿Hay descuento disponible? [sí/no y cuál]\n\nEscribe un email de carrito abandonado que:\n- Abra recordando el producto de forma visual (sin sonar a máquina)\n- Elimine la fricción principal (precio, duda, urgencia)\n- Si hay descuento, preséntalo como exclusivo y con deadline\n- CTA claro: un solo botón, un solo texto\n\nAsunto (2 opciones) + cuerpo de máximo 100 palabras."
              }
            ]
          },
          {
            "titulo": "Consultoría y servicios profesionales",
            "objetivo": "Escribir propuestas de servicio que convierten y emails que posicionan tu expertise.",
            "blocks": [
              {
                "t": "prompt",
                "label": "Propuesta de servicio personalizada",
                "code": "Eres un consultor senior que escribe propuestas que convierten porque van al grano.\n\nCliente potencial: [nombre o empresa]\nProblema que mencionaron: [lo que me dijeron en la reunión]\nLo que ofrezco: [mi servicio específico]\nPrecio: [importe o rango]\nDuración: [timeline]\n\nEscribe una propuesta en formato email con:\n1. Lo que entendí de tu situación (2-3 líneas que demuestren que escuché)\n2. Lo que propongo hacer (3 puntos concretos, sin jerga)\n3. Lo que logramos juntos (resultado esperado, medible si es posible)\n4. Inversión y próximo paso\n\nTono: profesional pero directo. Sin palabrería corporativa."
              },
              {
                "t": "prompt",
                "label": "Email de posicionamiento de expertise",
                "code": "Eres un experto en comunicación para consultores independientes.\n\nMi especialidad: [qué hago específicamente]\nPara quién: [tipo de cliente ideal]\nResultado concreto que logro: [resultado medible]\nCaso o ejemplo real: [breve descripción de un cliente anterior]\n\nEscribe un email de presentación fría a un prospecto que no me conoce.\nQue posicione mi expertise sin sonar a vendedor, que cuente el caso real\ncomo prueba y que termine con una invitación a una llamada de 20 minutos.\nMáximo 120 palabras."
              }
            ]
          },
          {
            "titulo": "Formación y academia online",
            "objetivo": "Crear emails de lanzamiento de cursos y contenido educativo que convierte seguidores en alumnos.",
            "blocks": [
              {
                "t": "prompt",
                "label": "Email de lanzamiento de curso",
                "code": "Eres un experto en email marketing para infoproductos y cursos online.\n\nCurso: [nombre del curso]\nPrecio: [precio o gratis]\nPara quién: [perfil del estudiante ideal]\nResultado principal: [qué logra al terminar]\nFecha de apertura / deadline: [fecha]\n\nEscribe un email de lanzamiento que:\n- Abra con el problema del lector, no con el curso\n- Presente el curso como la solución en el párrafo 2\n- Incluya 3 bullets de lo que van a lograr (concretos y medibles)\n- Termine con CTA claro y recordatorio de urgencia si aplica\n\nAsunto (2 opciones) + cuerpo de máximo 180 palabras."
              },
              {
                "t": "p",
                "x": "Siguiente nivel Tu Primera Automatización con Make Ya dominas el prompting. El siguiente paso es automatizar las tareas repetitivas de tu negocio, sin código, sin instalaciones, con resultado visible en la primera sesión. Ver curso →"
              }
            ]
          }
        ]
      },
      {
        "modulo": "05",
        "titulo": "Tu sistema de trabajo diario",
        "lecciones": [
          {
            "titulo": "El flujo de trabajo de los 5 pasos",
            "objetivo": "Implementar un proceso sistemático para usar la IA en cualquier tarea de negocio en menos de 10 minutos.",
            "blocks": [
              {
                "t": "p",
                "x": "Tener buenos prompts no es suficiente si no tienes un proceso para usarlos. Este flujo te lleva desde la tarea hasta el resultado publicable de forma sistemática:"
              },
              {
                "t": "prompt",
                "label": "Los 5 pasos del flujo diario",
                "code": "PASO 1: DEFINE LA TAREA (30 segundos)\n¿Qué necesito producir? ¿Para quién? ¿Cuál es el resultado exacto?\n\nPASO 2: ELIGE O ADAPTA UN PROMPT DE TU BIBLIOTECA (1 minuto)\n¿Tengo un prompt para esto? → Úsalo.\n¿No tengo? → Construye uno con los 4 elementos: rol, contexto, tarea, formato.\n\nPASO 3: GENERA Y LEE CRÍTICAMENTE (2 minutos)\nLee el resultado como editor, no como autor.\nMarca qué está bien y qué cambiarías.\n\nPASO 4: ITERA CON INSTRUCCIONES ESPECÍFICAS (1-2 minutos)\nMáximo 3 cambios concretos en el mismo mensaje.\n\nPASO 5: EDITA CON TU VOZ (2-3 minutos)\nEl último 10% siempre lo haces tú: ajusta una frase,\nañade un detalle personal, elimina lo que suene genérico.\n\nTiempo total para un texto de negocio: 7-10 minutos."
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Aplica el flujo completo hoy",
                "steps": [
                  "01 Elige una tarea real de hoy que requiera escribir algo",
                  "02 Aplica los 5 pasos en orden, sin saltarte ninguno",
                  "03 Mide cuánto tardas, la primera vez serán 15 min, la décima serán 7"
                ]
              }
            ]
          },
          {
            "titulo": "Qué no delegar a la IA nunca",
            "objetivo": "Saber exactamente dónde termina la IA y dónde empieza tu criterio para no publicar basura ni delegar lo que no se puede delegar.",
            "blocks": [
              {
                "t": "p",
                "x": "La IA no reemplaza tu criterio. Hay decisiones y elementos que siempre deben salir de ti:"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Tu posicionamiento estratégico",
                    "p": "La IA puede articularlo, pero tú decides a quién ayudas, qué problema resuelves y por qué eres diferente."
                  },
                  {
                    "s": "Decisiones que afectan a personas",
                    "p": "Contratar, despedir, cerrar un cliente, fijar un precio. Son tuyas."
                  },
                  {
                    "s": "La revisión final de lo que publicas",
                    "p": "Nunca publiques nada que no hayas leído tú primero. La IA se equivoca con datos, fechas y nombres."
                  },
                  {
                    "s": "Tu voz en el 10% final",
                    "p": "Lo que hace que un texto suene a ti y no a una máquina siempre viene de ti. La IA llega al 90%, el resto es tuyo."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "Regla de oro",
                "p": "La IA trabaja mejor cuando tú sabes exactamente lo que quieres. Si no tienes claro el resultado, el prompt no te va a salvar."
              },
              {
                "t": "quiz",
                "q": "¿Por qué el \"10% final\" siempre lo debe hacer un humano y no la IA, aunque la IA pueda iterar infinitas veces?",
                "opts": [
                  {
                    "x": "Porque la IA no tiene capacidad creativa",
                    "c": false
                  },
                  {
                    "x": "Porque la IA solo conoce patrones promedio, los detalles únicos de tu experiencia y opinión solo están en ti",
                    "c": true
                  },
                  {
                    "x": "Porque la IA comete errores gramaticales que solo tú puedes detectar",
                    "c": false
                  }
                ]
              },
              {
                "t": "p",
                "x": "🎯 Actividad final, Semana 1 con el sistema completo Lunes: usé mi role prompt + biblioteca para producir el primer texto de la semana Martes: apliqué Chain of Thought a una decisión real de mi negocio Miércoles: generé y publiqué contenido de redes sin corregir más de 5 minutos Jueves: usé prompts en cadena para producir un texto largo Viernes: añadí 2 prompts nuevos a mi biblioteca basándome en lo que necesité esta semana"
              }
            ]
          }
        ]
      }
    ],
    "relatedCourse": "prompts"
  },
  "publica": {
    "courseTitle": "Publica con IA. Sin que se note.",
    "nextCourse": "Tu Mini CRM Gratis en Google Sheets",
    "modules": [
      {
        "modulo": "01",
        "titulo": "El cuello de botella no son las ideas",
        "lecciones": [
          {
            "titulo": "Por qué no publicas aunque tengas ChatGPT",
            "objetivo": "Identificar el problema real que te impide publicar de forma consistente, que no es la falta de ideas ni de herramientas.",
            "blocks": [
              {
                "t": "p",
                "x": "Tienes ChatGPT. Tal vez incluso hiciste el curso de prompts. Y aun así tu última publicación fue hace dos semanas. No porque no tengas ideas. Porque entre tener una idea y publicar algo hay un proceso que nadie te explicó."
              },
              {
                "t": "p",
                "x": "El problema no es la herramienta. Es que estás usando la IA para resolver el paso equivocado."
              },
              {
                "t": "h",
                "x": "Los tres bloqueos reales"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "No sabes qué publicar hoy",
                    "p": "Abres ChatGPT sin saber el tema, sin saber el formato, sin saber el objetivo. La IA te da algo genérico y lo cierras."
                  },
                  {
                    "s": "Lo que genera no suena a ti",
                    "p": "Lees el resultado y aunque técnicamente está bien, no lo publicarías con tu nombre. Lo editas tanto que tardas más que escribiéndolo a mano."
                  },
                  {
                    "s": "No tienes un sistema, tienes una herramienta",
                    "p": "ChatGPT es un martillo. Este curso es el plano de construcción. Sin el plano, el martillo no sirve de mucho."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "Lo que cambia en este curso",
                "p": "No vas a aprender más prompts. Vas a aprender el sistema completo: qué publicar, en qué formato, con qué estructura y cómo mantener tu voz. El resultado no es saber más, es tener contenido real publicado."
              },
              {
                "t": "quiz",
                "q": "¿Por qué tener ChatGPT y saber prompts no es suficiente para publicar de forma consistente?",
                "opts": [
                  {
                    "x": "Porque ChatGPT no genera contenido lo suficientemente bueno todavía",
                    "c": false
                  },
                  {
                    "x": "Porque la herramienta sin un sistema que defina qué publicar, cuándo y en qué formato no produce resultados",
                    "c": true
                  },
                  {
                    "x": "Porque la IA todavía es muy lenta y no puede generar contenido en tiempo real",
                    "c": false
                  }
                ]
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Diagnostica dónde te atascas",
                "steps": [
                  "01 Piensa en la última vez que intentaste crear contenido con IA y no lo publicaste",
                  "02 ¿En qué punto se rompió el proceso: en la idea, en el resultado, en el tono, en la pereza de editar?",
                  "03 Ese es tu cuello de botella. Este curso lo va a resolver módulo por módulo."
                ]
              }
            ]
          },
          {
            "titulo": "Los 3 formatos que mueven el 80% del impacto",
            "objetivo": "Entender por qué solo necesitas dominar tres formatos para tener una presencia de contenido real y consistente.",
            "blocks": [
              {
                "t": "p",
                "x": "Hay docenas de formatos de contenido. Stories, lives, podcasts, newsletters, threads, carruseles, Reels, vídeos largos. Si intentas hacerlos todos, no harás ninguno bien."
              },
              {
                "t": "p",
                "x": "La realidad de los pequeños negocios que publican de forma consistente es que dominan tres formatos. Solo tres. Y los rotan."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "El Reel o vídeo corto: te hace visible",
                    "p": "Es el formato con mayor alcance orgánico en Instagram, TikTok y LinkedIn. No necesitas producción. Necesitas un guion de 60 segundos y un punto de vista claro."
                  },
                  {
                    "s": "El carrusel: te hace relevante",
                    "p": "Es el formato que más se guarda y comparte. Enseña algo concreto en 7 slides. Quien lo guarda vuelve a tu perfil."
                  },
                  {
                    "s": "El email: te hace facturar",
                    "p": "Tu lista de correo es el único canal que no depende de un algoritmo. Un email bien escrito a 200 personas comprometidas convierte más que un post visto por 10.000."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "La regla de los tres formatos",
                "p": "Elige estos tres y domínalos antes de añadir cualquier otro. La consistencia en tres formatos bate la esporadicidad en diez."
              },
              {
                "t": "quiz",
                "q": "¿Por qué es importante limitar los formatos que usas?",
                "opts": [
                  {
                    "x": "Porque no tenemos tiempo para hacer más",
                    "c": false
                  },
                  {
                    "x": "Porque dominar pocos formatos produce más consistencia y más impacto real",
                    "c": true
                  },
                  {
                    "x": "Porque el algoritmo penaliza a quienes usan muchos formatos",
                    "c": false
                  }
                ]
              }
            ]
          },
          {
            "titulo": "Una plataforma, un sistema, un resultado",
            "objetivo": "Elegir la plataforma principal donde vas a publicar y entender por qué intentar estar en todas es el error que más tiempo te roba.",
            "blocks": [
              {
                "t": "p",
                "x": "Instagram, LinkedIn, TikTok, Facebook, YouTube, X. Intentar estar en todas produce presencia mediocre en todas. El sistema de este curso empieza eligiendo una plataforma principal y construyendo desde ahí."
              },
              {
                "t": "h",
                "x": "Cómo elegir tu plataforma principal"
              },
              {
                "t": "p",
                "x": "Plataforma Mejor para Formato estrella Instagram Negocios visuales, servicios locales, lifestyle, belleza, alimentación Reels + carruseles LinkedIn Consultoría, servicios B2B, formación, recursos humanos Posts de texto + carruseles TikTok Negocios con componente educativo o de entretenimiento fuerte Vídeos cortos Email Cualquier negocio con lista propia, es el complemento de todas Newsletter semanal"
              },
              {
                "t": "callout",
                "s": "La regla del 80/20 del contenido",
                "p": "Produce el 80% de tu contenido para una plataforma. Adapta el 20% restante a las otras. No al revés."
              },
              {
                "t": "p",
                "x": "✓ Antes de pasar al Módulo 2 Identifiqué mi cuello de botella real al crear contenido Sé los 3 formatos que voy a dominar: Reel, carrusel y email Elegí mi plataforma principal"
              }
            ]
          }
        ]
      },
      {
        "modulo": "02",
        "titulo": "El sistema de los 3 tipos de contenido",
        "lecciones": [
          {
            "titulo": "Contenido que entretiene, educa y vende",
            "objetivo": "Entender la lógica detrás de los 3 tipos de contenido y por qué mezclarlos en la proporción correcta es lo que convierte seguidores en clientes.",
            "blocks": [
              {
                "t": "p",
                "x": "El error más común en redes sociales es publicar solo contenido de venta. O publicar solo contenido educativo y nunca vender. El sistema que funciona mezcla tres tipos en proporciones concretas."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Contenido que entretiene: te hace conocido",
                    "p": "Historias, opiniones, detrás de escena, anécdotas de tu negocio. No tiene por qué ser gracioso. Tiene que ser humano. El algoritmo lo amplifica. La gente lo comparte."
                  },
                  {
                    "s": "Contenido que educa: te hace relevante",
                    "p": "Consejos, tutoriales, comparativas, respuestas a preguntas frecuentes. Demuestra que sabes de lo que hablas. Quien aprende de ti confía en ti para contratar."
                  },
                  {
                    "s": "Contenido que vende: te hace facturar",
                    "p": "Casos de éxito, presentación de servicios, testimonios, ofertas. Sin este tipo no hay negocio. Con solo este tipo, la gente deja de seguirte."
                  }
                ]
              },
              {
                "t": "h",
                "x": "La proporción que funciona"
              },
              {
                "t": "p",
                "x": "Distribución semanal recomendada Si publicas 4 veces a la semana: → 2 piezas educativas → 1 pieza de entretenimiento / humanización → 1 pieza de venta directa o indirecta Si publicas 3 veces a la semana: → 1 educativa + 1 entretenimiento + 1 venta Si publicas 7 veces (incluyendo Stories): → 3 educativas, 2 entretenimiento, 2 venta"
              },
              {
                "t": "callout",
                "s": "La regla de oro",
                "p": "Nunca publiques dos piezas de venta seguidas. Siempre intercala valor antes de pedir."
              },
              {
                "t": "quiz",
                "q": "Si solo publicas contenido educativo (consejos, tutoriales) y nunca vendes, ¿qué pasa con tu negocio?",
                "opts": [
                  {
                    "x": "Tu negocio crece solo, porque la audiencia educada eventualmente compra",
                    "c": false
                  },
                  {
                    "x": "Construyes audiencia que te ve como educador, no como proveedor, y nunca aprende a comprarte",
                    "c": true
                  },
                  {
                    "x": "El algoritmo te penaliza por no diversificar tipos de contenido",
                    "c": false
                  }
                ]
              }
            ]
          },
          {
            "titulo": "El calendario de 4 semanas",
            "objetivo": "Construir un calendario de contenido de un mes completo en 20 minutos usando IA, listo para copiar y ejecutar.",
            "blocks": [
              {
                "t": "p",
                "x": "Un calendario de contenido no es una lista de ideas. Es un sistema que te dice exactamente qué publicar cada día, en qué formato y con qué objetivo. Así no empiezas desde cero cada mañana."
              },
              {
                "t": "h",
                "x": "Así se ve una semana bien planificada"
              },
              {
                "t": "p",
                "x": "Lunes Reel educativo Tip rápido de tu sector Martes Carrusel Guía paso a paso Miércoles Post texto Historia o detrás de escena Jueves Email Newsletter semanal Viernes Reel venta Servicio o caso real"
              },
              {
                "t": "h",
                "x": "El prompt para generar tu calendario completo"
              },
              {
                "t": "prompt",
                "label": "Prompt: Calendario de contenido de 4 semanas",
                "code": "Eres un estratega de contenido especializado en pequeños negocios y autónomos.\n\nMi negocio: [describe qué haces y a quién ayudas]\nPlataforma principal: [Instagram / LinkedIn / TikTok]\nFrecuencia: [cuántas veces publico a la semana]\nEste mes me enfoco en: [un producto, servicio o campaña concreta]\n\nCrea un calendario de contenido de 4 semanas con la distribución 50% educativo,\n25% entretenimiento y 25% venta. Para cada pieza indica:\n- Día de publicación\n- Tipo de contenido (entretiene / educa / vende)\n- Formato (Reel / carrusel / post de texto / email)\n- Gancho de apertura en una línea\n- Objetivo de la pieza\n\nNo desarrolles el contenido, solo el calendario. Quiero verlo completo antes de producir."
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Genera tu calendario del mes que viene",
                "steps": [
                  "01 Rellena el prompt con los datos de tu negocio",
                  "02 Revisa el calendario y elimina cualquier idea que no suene a ti",
                  "03 Guárdalo, vas a usarlo en el Módulo 5"
                ]
              }
            ]
          }
        ]
      },
      {
        "modulo": "03",
        "titulo": "Produce cada formato con IA en menos de 10 minutos",
        "lecciones": [
          {
            "titulo": "El guion de Reel: gancho, desarrollo y CTA",
            "objetivo": "Producir un guion de Reel completo y listo para grabar en menos de 8 minutos usando un prompt de estructura fija.",
            "blocks": [
              {
                "t": "p",
                "x": "El Reel tiene una estructura que funciona independientemente del sector. Tres partes: un gancho que para el scroll en los primeros 2 segundos, un desarrollo que cumple la promesa del gancho y un cierre con CTA. Con IA, el guion sale en 3 minutos. Ajustarlo a tu voz, en 5."
              },
              {
                "t": "h",
                "x": "La estructura de un Reel que funciona"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Gancho: los primeros 2 segundos",
                    "p": "Una afirmación directa, una pregunta que duele o una promesa concreta. Sin introducción, sin \"hola soy\", sin contexto previo. Directamente al grano."
                  },
                  {
                    "s": "Desarrollo: 30 a 50 segundos",
                    "p": "Cumples la promesa del gancho. Tres puntos, un proceso o una historia breve. Sin rodeos, sin relleno."
                  },
                  {
                    "s": "CTA: los últimos 5 segundos",
                    "p": "Una sola acción. Guarda esto, comenta X, escríbeme, link en bio. Una sola, nunca dos."
                  }
                ]
              },
              {
                "t": "prompt",
                "label": "Prompt: Guion de Reel completo",
                "code": "Eres un guionista especializado en vídeos cortos para negocios en Instagram y TikTok.\n\nMi negocio: [describe qué haces]\nAudiencia: [a quién le hablas]\nTema del Reel: [tema concreto]\nTipo: [educativo / entretenimiento / venta]\nDuración objetivo: [30 / 45 / 60 segundos]\n\nEscribe un guion con esta estructura exacta:\n[GANCHO] Una frase que pare el scroll. Sin saludar, sin introducción.\n[DESARROLLO] Tres puntos concretos o un proceso de 3 pasos. Frases cortas.\n[CTA] Una sola acción al final.\n\nTono: [cercano / directo / educativo]\nQue suene a persona real, no a texto de marca."
              },
              {
                "t": "callout",
                "s": "El error más frecuente en los ganchos",
                "p": "Empezar con \"Hoy quiero hablarte de…\" o \"En este vídeo vamos a ver…\". Eso ya perdiste al espectador. El gancho es la primera frase. Tiene que ser la más fuerte de todo el vídeo."
              },
              {
                "t": "quiz",
                "q": "¿Por qué los primeros 2 segundos del Reel son el activo más valioso del vídeo entero?",
                "opts": [
                  {
                    "x": "Porque el algoritmo decide en los primeros 2 segundos si impulsa tu vídeo o no",
                    "c": false
                  },
                  {
                    "x": "Porque en esos 2 segundos el espectador decide si sigue viendo o sigue scrolleando, sin esa decisión, el resto del vídeo no existe",
                    "c": true
                  },
                  {
                    "x": "Porque los Reels solo se pueden mostrar legalmente con un gancho corto",
                    "c": false
                  }
                ]
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Produce tu primer guion de Reel",
                "steps": [
                  "01 Elige un tema de tu sector que sepas bien y que le interese a tu audiencia",
                  "02 Usa el prompt, genera el guion y léelo en voz alta",
                  "03 Si una frase no dirías así en una conversación real, cámbiala",
                  "04 Guarda el guion final en tu carpeta de contenido"
                ]
              },
              {
                "t": "p",
                "x": "🎯 Reto · Test del lenguaje natural Lee tu guion en voz alta sin pausas ni correcciones. ¿Sale fluido o tropiezas en alguna frase? Sí, fluye natural 🎤 No, hay frases que no salen"
              }
            ]
          },
          {
            "titulo": "El carrusel que enseña: estructura de 7 slides",
            "objetivo": "Producir un carrusel completo de 7 slides con estructura probada en menos de 10 minutos.",
            "blocks": [
              {
                "t": "p",
                "x": "El carrusel es el formato que más se guarda en Instagram y LinkedIn. Cuando alguien guarda tu carrusel, el algoritmo lo interpreta como una señal de valor muy alta y lo amplifica. La estructura de 7 slides es la que convierte mejor."
              },
              {
                "t": "prompt",
                "label": "Prompt: Carrusel de 7 slides",
                "code": "Eres un experto en contenido educativo para redes sociales.\n\nMi negocio: [describe qué haces]\nAudiencia: [a quién le hablas]\nTema del carrusel: [tema concreto]\n\nEscribe el texto de las 7 slides siguiendo esta estructura exacta:\nSlide 1: Título gancho (máx. 8 palabras)\nSlide 2: El problema o promesa (máx. 3 líneas)\nSlide 3: Punto 1: título corto + 2 líneas de explicación\nSlide 4: Punto 2: título corto + 2 líneas de explicación\nSlide 5: Punto 3: título corto + 2 líneas de explicación\nSlide 6: El error más común sobre este tema (2-3 líneas)\nSlide 7: CTA directo (1 sola acción)\n\nTono: [directo / cercano / experto]. Sin tecnicismos innecesarios."
              },
              {
                "t": "callout",
                "s": "Sobre el diseño visual",
                "p": "Canva tiene plantillas de carrusel gratuitas. Una vez tengas el texto de este prompt, solo es copiar y pegar. El diseño no es lo que frena, el texto sí lo era."
              }
            ]
          },
          {
            "titulo": "El email de la semana: los 5 párrafos que siempre funcionan",
            "objetivo": "Escribir un email de newsletter semanal completo y listo para enviar en menos de 10 minutos.",
            "blocks": [
              {
                "t": "p",
                "x": "Un email de newsletter no es un catálogo de productos ni un boletín de noticias. Es una conversación con personas que eligieron escucharte. La estructura de 5 párrafos es la que genera más respuestas y más clics."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Apertura: algo personal o una observación concreta",
                    "p": "No empieces con \"esta semana quiero hablarte de\". Empieza con algo que pasó, algo que viste, algo que te llamó la atención. Dos líneas máximo."
                  },
                  {
                    "s": "El problema que resuelves esta semana",
                    "p": "Conecta la apertura con el problema de tu lector. \"Si te ha pasado algo parecido, esto te va a servir.\""
                  },
                  {
                    "s": "El valor: consejo, historia o recurso",
                    "p": "El cuerpo del email. Lo que aprendieron por abrirlo. Tres puntos, un proceso o una historia con lección. Sin relleno."
                  },
                  {
                    "s": "La transición: de valor a acción",
                    "p": "Una línea que conecta lo que acabas de contar con lo que ofreces. Sin salto brusco."
                  },
                  {
                    "s": "El CTA: una sola acción",
                    "p": "Responde a este email, haz clic aquí, reserva, descarga. Una. Solo una."
                  }
                ]
              },
              {
                "t": "prompt",
                "label": "Prompt: Email semanal completo",
                "code": "Eres un copywriter especializado en emails de pequeños negocios y autónomos.\nTono: conversacional, directo, como escribirle a alguien que te conoce.\n\nMi negocio: [describe qué haces]\nTema del email de esta semana: [tema o aprendizaje concreto]\nServicio o acción que quiero que hagan: [tu CTA]\n\nEscribe el email con esta estructura de 5 párrafos:\nP1: Apertura con algo concreto o personal (2 líneas)\nP2: El problema del lector relacionado con el tema (2-3 líneas)\nP3: El valor: consejo, proceso o historia con lección (3-4 líneas)\nP4: Transición hacia la acción (1-2 líneas)\nP5: CTA directo y claro (1 línea)\n\nAsunto: 2 opciones, máximo 7 palabras cada una, sin emojis.\nLongitud total del cuerpo: máximo 180 palabras."
              },
              {
                "t": "p",
                "x": "✓ Módulo 3 completado cuando Tengo un guion de Reel escrito y revisado con mi voz Tengo un carrusel de 7 slides listo para diseñar en Canva Tengo un email semanal escrito y listo para enviar"
              }
            ]
          },
          {
            "titulo": "Un contenido, tres formatos: sin repetirte",
            "objetivo": "Aprender a multiplicar un solo tema en los tres formatos sin que parezca el mismo contenido repetido.",
            "blocks": [
              {
                "t": "p",
                "x": "El error de pensar que necesitas tres ideas distintas para tres piezas de contenido es lo que agota a los creadores. Un solo tema, abordado desde tres ángulos distintos, produce tres piezas de alto valor sin repetición visible."
              },
              {
                "t": "p",
                "x": "❌ Repetición visible Reel: \"5 errores al usar ChatGPT\" Carrusel: \"5 errores al usar ChatGPT\" Email: \"Los 5 errores de ChatGPT\" ✓ Un tema, tres ángulos Reel: Historia de un caso real donde ChatGPT falló Carrusel: La anatomía de un prompt que funciona Email: Lo que nadie te dice sobre la segunda iteración"
              },
              {
                "t": "prompt",
                "label": "Prompt: Multiplica un tema en 3 formatos",
                "code": "Eres un estratega de contenido especializado en pequeños negocios.\n\nTema base: [tu tema central]\nMi audiencia: [a quién le hablas]\n\nDame tres ángulos distintos para abordar este tema, uno por formato:\n\nReel (60 seg): un ángulo emocional o narrativo: historia, caso real o provocación\nCarrusel: un ángulo educativo: paso a paso, lista o comparativa\nEmail: un ángulo personal: reflexión, lección aprendida o consejo no obvio\n\nPara cada ángulo dame:\n- El gancho de apertura (1 línea)\n- El argumento central (2 líneas)\n- El CTA sugerido\n\nQue los tres parezcan contenido distinto aunque el tema sea el mismo."
              },
              {
                "t": "callout",
                "s": "El resultado",
                "p": "Con un solo tema y este prompt tienes la planificación de tres piezas distintas. Ahora solo es producirlas con los prompts de las lecciones anteriores."
              },
              {
                "t": "quiz",
                "q": "Tu tema base es \"cómo cobrar más sin perder clientes\". ¿Cuál de estas opciones representa correctamente el principio de \"un tema, tres ángulos\" en lugar de repetición?",
                "opts": [
                  {
                    "x": "Reel: \"5 formas de cobrar más\" · Carrusel: \"5 formas de cobrar más\" · Email: \"5 formas de cobrar más\"",
                    "c": false
                  },
                  {
                    "x": "Reel: \"Por qué tienes miedo a subir precios\" · Carrusel: \"Cómo presentar la subida sin perder clientes\" · Email: \"El día que subí mis precios y nadie me dejó\"",
                    "c": true
                  },
                  {
                    "x": "Reel hablando del tema · Carrusel con el mismo tema en slides · Email con el mismo contenido en texto",
                    "c": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "modulo": "04",
        "titulo": "Que no se note que usaste IA",
        "lecciones": [
          {
            "titulo": "Los 5 síntomas del contenido que suena a robot",
            "objetivo": "Reconocer en el texto generado por IA los patrones que delatan que no lo escribió un humano y eliminarlos antes de publicar.",
            "blocks": [
              {
                "t": "p",
                "x": "La IA tiene patrones. Los repite en millones de textos. Tu audiencia no sabe que son patrones de IA, pero siente que algo no encaja. El resultado es contenido que nadie comenta, nadie guarda y nadie conecta contigo."
              },
              {
                "t": "h",
                "x": "Los 5 síntomas que delatan a la IA"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Frases de apertura genéricas",
                    "p": "\"En el mundo actual…\", \"En el dinámico panorama de…\", \"Hoy quiero hablarte de algo muy importante.\" Bórralas. Todas."
                  },
                  {
                    "s": "Listas de exactamente tres puntos para todo",
                    "p": "La IA tiene una tendencia obsesiva a estructurar todo en tres puntos aunque el tema pida dos o seis. Si tienes cuatro ideas buenas, usa cuatro."
                  },
                  {
                    "s": "Adjetivos vacíos",
                    "p": "\"Increíble\", \"poderoso\", \"revolucionario\", \"transformador\". Si el adjetivo no añade información concreta, elimínalo."
                  },
                  {
                    "s": "Conclusiones que repiten lo que ya dijiste",
                    "p": "La IA casi siempre cierra con un resumen de lo que acabas de leer. Elimina ese último párrafo. El lector ya lo leyó."
                  },
                  {
                    "s": "Ausencia total de especificidad",
                    "p": "La IA dice \"muchos negocios\". Tú dirías \"la mayoría de salones de belleza que conozco\". La especificidad es lo que hace que suene a persona real."
                  }
                ]
              },
              {
                "t": "quiz",
                "q": "¿Por qué los patrones de IA generan desconfianza inconsciente en quien los lee, aunque el lector no sepa identificarlos como \"patrones de IA\"?",
                "opts": [
                  {
                    "x": "Porque el lector asocia esos patrones con publicidad y los rechaza",
                    "c": false
                  },
                  {
                    "x": "Porque el lector detecta la ausencia de marcadores humanos (especificidad, opinión, anécdota) aunque no sepa nombrarlos",
                    "c": true
                  },
                  {
                    "x": "Porque el contenido de IA tiene gramática demasiado perfecta y eso resulta sospechoso",
                    "c": false
                  }
                ]
              },
              {
                "t": "prompt",
                "label": "Prompt: Detecta y elimina los síntomas de IA",
                "code": "Eres un editor de textos que sabe distinguir perfectamente entre texto de IA y texto humano.\n\nVoy a darte un texto. Necesito que:\n1. Identifiques las frases que suenan a IA (frases genéricas, adjetivos vacíos,\n   aperturas formulaicas, conclusiones redundantes)\n2. Para cada frase detectada, propón una alternativa más específica y humana\n3. No reescribas el texto completo: solo señala los problemas y propón los cambios\n\nAquí está el texto:\n---\n[pega aquí tu texto generado]\n---"
              }
            ]
          },
          {
            "titulo": "El 10% que siempre escribe el humano",
            "objetivo": "Entender qué parte del contenido nunca puede delegar a la IA y cómo añadir ese 10% que convierte un texto correcto en uno que conecta.",
            "blocks": [
              {
                "t": "p",
                "x": "La IA llega al 90% de un buen texto. El 10% restante es tuyo y no se puede automatizar. Ese 10% es lo que hace que tu contenido suene a ti y no a una plantilla."
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Añade algo que solo tú sabes",
                    "p": "Un dato de tu experiencia real, un número concreto de tu negocio, una anécdota de un cliente (sin nombre). La IA no tiene acceso a esto. Tú sí."
                  },
                  {
                    "s": "Cambia una frase por como lo dirías tú en voz alta",
                    "p": "Lee el texto en voz alta. En el momento en que algo no te salga de forma natural, es una frase de IA. Cámbiala por como lo explicarías a un conocido."
                  },
                  {
                    "s": "Añade tu opinión en algún punto",
                    "p": "La IA es neutral por diseño. Tú no tienes que serlo. Una opinión clara, aunque no todo el mundo esté de acuerdo, genera más engagement que el consenso."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "La prueba definitiva",
                "p": "Antes de publicar, hazte esta pregunta: ¿podría haber escrito este texto cualquier otra persona de mi sector? Si la respuesta es sí, falta el 10% tuyo."
              },
              {
                "t": "p",
                "x": "✓ Módulo 4 listo cuando Sé identificar los 5 síntomas del contenido que suena a IA Revisé al menos un texto generado y eliminé los patrones de IA Añadí mi opinión, un dato real o una anécdota a ese texto"
              }
            ]
          }
        ]
      },
      {
        "modulo": "05",
        "titulo": "El flujo semanal en marcha",
        "lecciones": [
          {
            "titulo": "Lunes de planificación: 7 contenidos en 20 minutos",
            "objetivo": "Implementar el hábito del lunes de planificación para que nunca más empieces una semana sin saber qué vas a publicar.",
            "blocks": [
              {
                "t": "p",
                "x": "La consistencia no viene de la motivación. Viene del sistema. El lunes de planificación es el hábito más importante de este curso: 20 minutos una vez a la semana que eliminan la pregunta \"¿qué publico hoy?\" para siempre."
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Pon el recordatorio ahora",
                "steps": [
                  "01 Abre tu calendario y crea un evento recurrente: \"Planificación de contenido\", lunes, 20 minutos",
                  "02 En la descripción del evento pega el proceso de los 3 pasos de arriba",
                  "03 La primera semana tardará 30 minutos. La tercera, 15. La décima, menos de 10."
                ]
              }
            ]
          },
          {
            "titulo": "Produce, revisa y publica: el ciclo de los 10 minutos",
            "objetivo": "Ejecutar el flujo completo de producción de una pieza de contenido en 10 minutos o menos de forma sistemática y repetible.",
            "blocks": [
              {
                "t": "p",
                "x": "El objetivo final de este curso no es que sepas cómo hacer contenido con IA. Es que lo hagas. Esta lección es la actividad final: una semana completa de contenido publicado usando todo lo que aprendiste."
              },
              {
                "t": "p",
                "x": "El ciclo de producción de 10 minutos por pieza MIN 0-2, Define el tema y el objetivo de la pieza ¿Qué quiero que sienta o haga quien lo lea/vea? MIN 2-5, Genera con el prompt correspondiente Reel → prompt del Módulo 3.1 Carrusel → prompt del Módulo 3.2 Email → prompt del Módulo 3.3 MIN 5-8, Revisión con el filtro del Módulo 4 Elimina síntomas de IA. Añade tu 10%. Léelo en voz alta una vez. MIN 8-10, Prepara para publicar Copia al diseño (Canva) o al grabador de notas para el Reel. Programa o publica directamente."
              },
              {
                "t": "p",
                "x": "🎯 Actividad final, semana completa publicada Lunes: completé la planificación de la semana con el proceso de 3 pasos Martes o miércoles: publiqué el Reel o vídeo corto de la semana Jueves: publiqué el carrusel en mi plataforma principal Viernes: envié el email semanal a mi lista Revisé cada pieza con el filtro del Módulo 4 antes de publicar"
              },
              {
                "t": "p",
                "x": "🎯 Reto final · El objetivo real del curso Esta semana, ¿conseguiste publicar las 3 piezas (Reel + carrusel + email) usando el sistema completo? Sí, publiqué las 3 🎉 Aún no, solo algunas"
              },
              {
                "t": "p",
                "x": "Siguiente nivel Tu Mini CRM Gratis en Google Sheets Ya publicas de forma consistente. El siguiente paso es no perder a los que llegan. Un CRM en Google Sheets que se actualiza solo, con colores de urgencia y plantillas de seguimiento listas. Ver curso →"
              }
            ]
          }
        ]
      }
    ],
    "relatedCourse": "publica"
  },
  "vende": {
    "courseTitle": "Cierra con IA. Sin perder tu estilo.",
    "nextCourse": "Tu Mini CRM Gratis en Google Sheets",
    "modules": [
      {
        "modulo": "01",
        "titulo": "Por qué se enfrían los leads que mostraron interés",
        "lecciones": [
          {
            "titulo": "El momento exacto en que pierdes una venta",
            "objetivo": "Identificar en qué punto del proceso de venta se rompe la conversación y por qué no es lo que crees.",
            "blocks": [
              {
                "t": "p",
                "x": "Alguien te escribió, mostró interés, preguntó el precio. Y luego desapareció. No fue porque el precio fuera alto ni porque el producto fuera malo. Fue porque en algún punto del intercambio dijiste lo correcto en el momento equivocado, o lo equivocado cuando más importaba."
              },
              {
                "t": "p",
                "x": "La mayoría de las ventas no se pierden en el cierre. Se pierden en la segunda o tercera interacción, cuando el lead todavía está evaluando y tú ya llevas tres mensajes intentando cerrar."
              },
              {
                "t": "h",
                "x": "Los tres momentos donde se rompe la venta"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "El primer mensaje: demasiado genérico",
                    "p": "Presentas tu servicio como si hablaras con todo el mundo. El lead siente que no le estás hablando a él. Responde con cortesía y desaparece."
                  },
                  {
                    "s": "El seguimiento: demasiado pronto o demasiado tarde",
                    "p": "Si escribes al día siguiente pareces desesperado. Si esperas dos semanas, el lead ya tomó una decisión sin ti. La cadencia exacta importa más que el texto."
                  },
                  {
                    "s": "La propuesta: demasiado estándar",
                    "p": "Mandas el mismo PDF a todos. El lead lo abre, ve que no menciona nada de lo que te dijo, y lo archiva. Una propuesta que no demuestra que escuchaste no cierra."
                  }
                ]
              },
              {
                "t": "callout",
                "s": "El dato que cambia la perspectiva",
                "p": "El 80% de las ventas requieren entre 5 y 12 contactos para cerrarse. El 44% de los vendedores abandona después del primer seguimiento. La venta no la pierde el que tiene el mejor producto. La gana el que tiene el mejor sistema de seguimiento."
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Audita tus últimas 5 ventas perdidas",
                "steps": [
                  "01 Abre tu CRM o tus conversaciones de WhatsApp y localiza los últimos 5 leads que no cerraron",
                  "02 Para cada uno: ¿en qué mensaje paró la conversación? ¿Cuántos seguimientos hiciste?",
                  "03 Anota el patrón, ese es tu cuello de botella real y este curso lo va a resolver"
                ]
              }
            ]
          },
          {
            "titulo": "Los 3 errores de comunicación que enfrían cualquier conversación",
            "objetivo": "Reconocer los patrones de comunicación que alejan a los leads para eliminarlos desde hoy.",
            "blocks": [
              {
                "t": "h",
                "x": "Error 1: Hablar de ti antes de escuchar al lead"
              },
              {
                "t": "p",
                "x": "El error más frecuente. Alguien te escribe interesado y tú respondes con un resumen de tu empresa, tus años de experiencia y todo lo que ofreces. El lead no preguntó eso. Preguntó si podías ayudarle con su problema específico."
              },
              {
                "t": "p",
                "x": "Lead Hola, ¿hacéis diseño de logos para restaurantes? ❌ Respuesta que enfría ¡Hola! Somos un estudio de diseño con más de 8 años de experiencia. Trabajamos con todo tipo de empresas, desde startups hasta grandes corporaciones. Ofrecemos logos, branding completo, webs, redes sociales... ¿Te envío nuestra presentación? ✓ Respuesta que conecta ¡Hola! Sí, trabajamos con restaurantes. ¿Estáis abriendo uno nuevo o rediseñando la imagen de uno que ya tenéis? Así te cuento exactamente qué podemos hacer."
              },
              {
                "t": "h",
                "x": "Error 2: Dar el precio antes de dar el valor"
              },
              {
                "t": "p",
                "x": "Cuando alguien pregunta el precio y tú respondes solo con un número, lo primero que hace es compararlo con lo más barato que conoce. Si primero entiendes lo que necesita y demuestras que puedes dárselo, el precio se evalúa de otra forma."
              },
              {
                "t": "h",
                "x": "Error 3: El seguimiento que suena a recordatorio"
              },
              {
                "t": "p",
                "x": "\"Solo quería saber si tuviste tiempo de pensarlo.\" Esta frase no aporta nada nuevo a la conversación. No hay razón para responder. Un seguimiento efectivo siempre añade algo: información nueva, una pregunta, una oferta concreta o una fecha límite real."
              },
              {
                "t": "callout",
                "s": "La regla de los seguimientos",
                "p": "Nunca hagas seguimiento sin añadir valor. Si no tienes nada nuevo que decir, espera un día más hasta que lo tengas."
              },
              {
                "t": "quiz",
                "q": "¿Cuál es el problema principal de responder al precio directamente con un número?",
                "opts": [
                  {
                    "x": "Que el precio siempre parece alto",
                    "c": false
                  },
                  {
                    "x": "Que el lead lo compara sin contexto de valor y siempre pierde frente a la opción más barata",
                    "c": true
                  },
                  {
                    "x": "Que no da margen para negociar",
                    "c": false
                  }
                ]
              }
            ]
          },
          {
            "titulo": "El mapa de la conversación de venta",
            "objetivo": "Entender las 5 etapas de cualquier conversación de venta y qué objetivo tiene cada una para no saltarte pasos.",
            "blocks": [
              {
                "t": "p",
                "x": "Cada conversación de venta sigue el mismo mapa, independientemente del sector o el canal. Cuando sabes en qué etapa está el lead, sabes exactamente qué decirle."
              },
              {
                "t": "callout",
                "s": "Cómo usar este mapa con la IA",
                "p": "En cada módulo de este curso vas a construir los mensajes para una de estas etapas con prompts específicos. Al terminar tendrás el sistema completo para llevar a cualquier lead de la etapa 1 al cierre."
              },
              {
                "t": "quiz",
                "q": "El lead te pregunta el precio justo en el primer mensaje. ¿En qué etapa del mapa estáis y qué deberías hacer antes de responder?",
                "opts": [
                  {
                    "x": "Estamos en etapa 3 (Propuesta), responde con el precio para no perder el momento",
                    "c": false
                  },
                  {
                    "x": "Estamos en etapa 1, devuélvelo a etapa 2 (Diagnóstico) con una pregunta antes de dar precio",
                    "c": true
                  },
                  {
                    "x": "Ignorar el tema del precio y presentar tu servicio",
                    "c": false
                  }
                ]
              },
              {
                "t": "p",
                "x": "✓ Antes de pasar al Módulo 2 Identifiqué el momento exacto donde se rompen mis conversaciones de venta Reconozco los 3 errores de comunicación más frecuentes Tengo claro el mapa de las 5 etapas y en cuál suelo atascar a mis leads"
              }
            ]
          }
        ]
      },
      {
        "modulo": "02",
        "titulo": "El primer contacto que abre puertas",
        "lecciones": [
          {
            "titulo": "El mensaje de presentación que no suena a vendedor",
            "objetivo": "Construir el mensaje de primer contacto perfecto para tu negocio, uno que abre conversación en lugar de cerrarla.",
            "blocks": [
              {
                "t": "p",
                "x": "El primer mensaje tiene un solo objetivo: conseguir una respuesta. No vender. No presentarte. No explicar tus servicios. Solo abrir la conversación."
              },
              {
                "t": "h",
                "x": "La estructura del primer mensaje que funciona"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Una referencia específica: demuestra que no eres un bot",
                    "p": "Menciona algo concreto: dónde te encontró, qué preguntó, qué viste en su perfil. Un detalle real vale más que diez frases de presentación."
                  },
                  {
                    "s": "Una pregunta de diagnóstico: haz que hable",
                    "p": "Una sola pregunta que te dé información útil y que al lead le resulte fácil responder. No preguntes todo a la vez."
                  },
                  {
                    "s": "Sin CTA de venta: todavía no",
                    "p": "No pidas la reunión, no mandes el precio, no ofrezcas la demo. Eso viene después. Primero la respuesta."
                  }
                ]
              },
              {
                "t": "prompt",
                "label": "Prompt: Primer mensaje de contacto",
                "code": "Eres un experto en comunicación de ventas para pequeños negocios y autónomos.\nTu objetivo: escribir mensajes que consigan respuesta, no que intenten vender.\n\nMi negocio: [describe qué haces en 1 línea]\nEl lead llegó por: [Instagram / web / referido / WhatsApp directo / otro]\nLo que sé de él: [lo que preguntó, lo que vi en su perfil, por qué contacta]\nCanal del mensaje: [WhatsApp / email / DM de Instagram / LinkedIn]\n\nEscribe un primer mensaje que:\n1. Haga una referencia específica a cómo llegó o qué preguntó\n2. Haga UNA sola pregunta de diagnóstico: no más\n3. No mencione precios ni pida reunión todavía\n4. Suene como persona real, no como empresa\n\nMáximo 60 palabras. Tono: [cercano / profesional / directo]"
              },
              {
                "t": "callout",
                "s": "Prueba el mensaje en voz alta",
                "p": "Antes de enviarlo, léelo en voz alta. Si en algún momento no lo dirías así en una conversación real con alguien, cámbialo. La IA escribe bien, pero tú sabes cómo hablas."
              },
              {
                "t": "quiz",
                "q": "Estás escribiendo tu primer mensaje a un lead que pidió info por Instagram. ¿Qué elemento NO debería tener este primer mensaje?",
                "opts": [
                  {
                    "x": "Una referencia específica a cómo llegó o qué preguntó",
                    "c": false
                  },
                  {
                    "x": "Una pregunta de diagnóstico fácil de responder",
                    "c": false
                  },
                  {
                    "x": "Una invitación a una llamada o un link al calendario",
                    "c": true
                  }
                ]
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Escribe tu primer mensaje con el prompt",
                "steps": [
                  "01 Elige un lead real de tu CRM o de tus conversaciones pendientes",
                  "02 Rellena el prompt con sus datos específicos",
                  "03 Lee el resultado, ajusta lo que no suene a ti y envíalo hoy"
                ]
              }
            ]
          },
          {
            "titulo": "Cómo usar IA para personalizar sin perder tu voz",
            "objetivo": "Aprender a personalizar cada mensaje con IA de forma que el lead sienta que le escribes solo a él, no que usas una plantilla.",
            "blocks": [
              {
                "t": "p",
                "x": "El problema con las plantillas de venta no es que sean plantillas. Es que se notan. El lead percibe que ese mismo mensaje lo ha recibido cien personas más. La personalización con IA resuelve eso en menos de 5 minutos."
              },
              {
                "t": "h",
                "x": "Los 3 niveles de personalización"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Nivel básico: nombre y origen",
                    "p": "Incluir el nombre del lead y mencionar cómo llegó a ti. Mínimo indispensable. Sin esto, cualquier mensaje parece spam."
                  },
                  {
                    "s": "Nivel medio: su problema específico",
                    "p": "Mencionar algo concreto que dijo o que puedes inferir de su situación. Demuestra que leíste, que escuchaste, que entiendes su caso."
                  },
                  {
                    "s": "Nivel alto: su contexto y su objetivo",
                    "p": "Conectar tu solución con el objetivo específico que él tiene. No \"te ayudo con X\" sino \"dado que quieres Y, lo que necesitas es Z\"."
                  }
                ]
              },
              {
                "t": "prompt",
                "label": "Prompt: Personalización de mensaje con contexto del lead",
                "code": "Tengo este mensaje base que quiero personalizar para un lead específico.\n\nMensaje base:\n[pega aquí tu mensaje genérico]\n\nDatos del lead:\n- Nombre: [nombre]\n- Origen: [cómo llegó]\n- Lo que me dijo o pregunté: [detalle de la conversación]\n- Su situación: [negocio, sector, lo que sabes de él]\n- Su objetivo o problema: [lo que quiere conseguir o resolver]\n\nPersonaliza el mensaje para este lead concreto.\nQue parezca escrito para él, no adaptado de una plantilla.\nMantén mi tono. No añadas palabras de más.\nMáximo 80 palabras."
              },
              {
                "t": "callout",
                "s": "La personalización que más impacta",
                "p": "Mencionar algo que el lead dijo exactamente, con sus propias palabras, tiene más efecto que cualquier técnica de cierre. \"Vi que comentaste que…\" demuestra atención real. La IA puede extraer y reformular eso mejor que tú si le das el contexto."
              }
            ]
          },
          {
            "titulo": "El sistema de respuesta rápida",
            "objetivo": "Implementar un sistema para responder a nuevos leads en menos de 5 minutos usando plantillas inteligentes, sin sonar a bot.",
            "blocks": [
              {
                "t": "p",
                "x": "Los estudios sobre velocidad de respuesta son claros: las probabilidades de cualificar un lead caen un 80% si tardas más de 5 minutos en responder. No porque el lead sea impaciente, sino porque en ese tiempo ya está mirando a la competencia."
              },
              {
                "t": "h",
                "x": "El sistema de las respuestas guardadas"
              },
              {
                "t": "p",
                "x": "No puedes escribir un mensaje personalizado desde cero en 5 minutos. Pero sí puedes tener plantillas semi-completas que personalizas en 60 segundos:"
              },
              {
                "t": "p",
                "x": "Plantilla de respuesta rápida, modelo base Hola [nombre], gracias por escribir. Vi que [referencia específica a lo que preguntó o cómo llegó]. Para darte la información más útil posible, ¿me puedes contar un poco más sobre [pregunta de diagnóstico adaptada a tu sector]? Así te puedo decir exactamente qué encaja mejor para tu caso."
              },
              {
                "t": "callout",
                "s": "Dónde guardar las respuestas rápidas",
                "p": "En WhatsApp Business puedes configurarlas en Ajustes → Herramientas para la empresa → Respuestas rápidas. En email, en las plantillas de tu cliente de correo. El objetivo es que en 60 segundos puedas enviar un mensaje que parezca escrito al momento."
              },
              {
                "t": "quiz",
                "q": "¿Por qué importa tanto responder en menos de 5 minutos a un lead nuevo?",
                "opts": [
                  {
                    "x": "Porque transmite que eres un negocio profesional y serio",
                    "c": false
                  },
                  {
                    "x": "Porque a los 5 minutos el lead ya está hablando con tu competencia",
                    "c": true
                  },
                  {
                    "x": "Porque los algoritmos de WhatsApp priorizan los chats activos",
                    "c": false
                  }
                ]
              },
              {
                "t": "p",
                "x": "✓ Módulo 2 completado cuando Tengo mi primer mensaje de contacto escrito y probado con el prompt Sé los 3 niveles de personalización y cómo aplicarlos con IA Tengo al menos una respuesta rápida guardada lista para usar en menos de 60 segundos"
              }
            ]
          }
        ]
      },
      {
        "modulo": "03",
        "titulo": "El seguimiento que cierra sin presionar",
        "lecciones": [
          {
            "titulo": "Cuándo escribir, qué decir y cuándo parar",
            "objetivo": "Dominar la cadencia exacta de seguimiento para mantener la conversación viva sin parecer desesperado.",
            "blocks": [
              {
                "t": "p",
                "x": "La cadencia es el ritmo de contactos. Demasiado rápido parece desesperación. Demasiado lento parece desinterés. La cadencia correcta depende de la etapa del lead y del tipo de decisión que está tomando."
              },
              {
                "t": "p",
                "x": "Cadencia recomendada por etapa Primer contacto respondido → Propuesta enviada dentro de 24h Propuesta enviada → Seguimiento a los 3 días (no antes) Seguimiento 1 sin respuesta → Seguimiento 2 a los 5 días (añade algo nuevo: caso, respuesta a posible duda, oferta limitada) Seguimiento 2 sin respuesta → Seguimiento 3 a los 7 días (mensaje de cierre: \"¿Sigue siendo algo que te interesa o lo dejamos para más adelante?\") Seguimiento 3 sin respuesta → Para. Mueve a \"En pausa\" en el CRM. (Reactiva en 30-60 días con algo de valor, no con otro seguimiento)"
              },
              {
                "t": "callout",
                "s": "La regla de los 3 seguimientos",
                "p": "Después de tres seguimientos sin respuesta, parar no es rendirse. Es respetar el tiempo del lead y preservar la relación para el futuro. El cuarto seguimiento suele cerrar la puerta para siempre."
              },
              {
                "t": "prompt",
                "label": "Prompt: Seguimiento después de propuesta enviada (3 días)",
                "code": "Eres un consultor de ventas que escribe seguimientos directos y sin presión.\n\nSituación:\n- Mi negocio: [qué haces]\n- Lead: [nombre y contexto breve]\n- Propuesta enviada hace 3 días: [qué incluía la propuesta]\n- No ha respondido\n\nEscribe un seguimiento que:\n- No empiece con \"Solo quería saber si...\" ni con \"Te escribo para recordarte...\"\n- Añada algo concreto: una pregunta, un dato útil o una aclaración de la propuesta\n- Facilite que responda con algo simple: sí, no, o necesito más tiempo\n- Máximo 60 palabras\n- Tono: cercano, sin presión, como si hablaras con alguien que conoces"
              }
            ]
          },
          {
            "titulo": "El seguimiento después del 'lo pienso'",
            "objetivo": "Tener listos los 3 mensajes de seguimiento para el momento más crítico del proceso de venta: cuando el lead pide tiempo.",
            "blocks": [
              {
                "t": "p",
                "x": "\"Lo pienso\" es la respuesta más común y la más mal gestionada en ventas. La mayoría interpreta que el lead no está interesado y deja de escribir. En realidad, la mayoría de los \"lo pienso\" son leads calientes que necesitan un empujón en el momento correcto."
              },
              {
                "t": "prompt",
                "label": "Seguimiento 1: A los 5 días del \"lo pienso\"",
                "code": "Eres un experto en ventas no invasivas para pequeños negocios.\n\nLead: [nombre] dijo \"lo pienso\" hace 5 días.\nLo que ofreces: [tu servicio]\nLo que sabes de su situación: [lo que te contó en la conversación]\n\nEscribe un mensaje que:\n- No pregunte directamente si ya lo pensó\n- Aporte algo útil relacionado con su situación: un consejo, un ejemplo, una pregunta\n- Deje la puerta abierta sin presionar\n- Máximo 50 palabras"
              },
              {
                "t": "prompt",
                "label": "Seguimiento 2: A los 10 días del \"lo pienso\"",
                "code": "Lead: [nombre] no ha respondido al seguimiento anterior.\n\nEscribe un mensaje que:\n- Reconozca que está evaluando y que eso está bien\n- Ofrezca resolver cualquier duda que tenga antes de decidir\n- Haga una pregunta directa pero amable: ¿hay algo que te genere dudas que pueda aclarar?\n- Máximo 50 palabras. Tono: honesto y sin presión"
              },
              {
                "t": "prompt",
                "label": "Seguimiento 3: El cierre amable",
                "code": "Tercer seguimiento. Si no hay respuesta a este, muevo el lead a \"En pausa\".\n\nEscribe un mensaje de cierre que:\n- Sea directo: pregunta si sigue interesado o si lo dejamos para más adelante\n- No transmita molestia ni decepción\n- Deje la puerta abierta para el futuro\n- Máximo 40 palabras. Muy humano, muy corto."
              },
              {
                "t": "quiz",
                "q": "Un lead te dice \"lo pienso\" y pasan 5 días sin respuesta. ¿Qué NO deberías hacer en tu primer seguimiento?",
                "opts": [
                  {
                    "x": "Aportar algo útil relacionado con su situación",
                    "c": false
                  },
                  {
                    "x": "Preguntar directamente si ya lo pensó",
                    "c": true
                  },
                  {
                    "x": "Dejar la puerta abierta sin presionar",
                    "c": false
                  }
                ]
              }
            ]
          },
          {
            "titulo": "Cómo reactivar un lead frío sin parecer desesperado",
            "objetivo": "Recuperar leads que llevan semanas o meses en silencio con un mensaje que no parezca un recordatorio de factura.",
            "blocks": [
              {
                "t": "p",
                "x": "Un lead frío no es un lead muerto. Es alguien que en su momento no estaba listo. Las circunstancias cambian. Un negocio que en marzo no tenía presupuesto puede tenerlo en septiembre. La clave es reaparecer con algo de valor, no con otro recordatorio."
              },
              {
                "t": "h",
                "x": "Las 3 razones para reactivar que funcionan"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Una novedad real en tu oferta",
                    "p": "Nuevo servicio, nueva modalidad, nueva tarifa, nuevo caso de éxito relevante para su sector. Algo que no existía cuando habló contigo."
                  },
                  {
                    "s": "Un contenido útil para su situación",
                    "p": "Un artículo, una herramienta, una tendencia de su sector. \"Vi esto y pensé en ti\", si es genuino, siempre funciona."
                  },
                  {
                    "s": "Una pregunta sobre cómo le fue",
                    "p": "Si recuerdas qué estaba evaluando, preguntar si lo resolvió demuestra que lo escuchaste. Y si no lo resolvió, acaba de volver a ser un lead activo."
                  }
                ]
              },
              {
                "t": "prompt",
                "label": "Prompt: Reactivación de lead frío",
                "code": "Lead inactivo desde hace [X semanas/meses].\nNombre: [nombre]\nÚltimo contacto: [de qué hablasteis]\nLo que ofreces: [tu servicio]\nRazón para escribir ahora: [novedad / contenido útil / pregunta sobre cómo le fue]\n\nEscribe un mensaje de reactivación que:\n- Reconozca el tiempo que ha pasado sin artificios (\"¡Espero que estés bien!\")\n- Vaya al grano con la razón real para escribir\n- No pida nada: solo abre la conversación\n- Máximo 60 palabras. Tono directo y natural"
              },
              {
                "t": "p",
                "x": "✓ Módulo 3 completado cuando Tengo mi cadencia de seguimiento definida (3 contactos con sus intervalos) Tengo los 3 mensajes de seguimiento del \"lo pienso\" escritos para mi negocio Identifiqué al menos 2 leads fríos en mi CRM y les mandé un mensaje de reactivación"
              }
            ]
          }
        ]
      },
      {
        "modulo": "04",
        "titulo": "La propuesta que dice sí",
        "lecciones": [
          {
            "titulo": "Estructura de una propuesta que convierte",
            "objetivo": "Construir la propuesta perfecta con los 5 bloques que hacen que el lead sienta que la escribiste solo para él.",
            "blocks": [
              {
                "t": "p",
                "x": "Una propuesta que no convierte casi nunca tiene un problema de precio. Tiene un problema de estructura. El lead la abre, no se reconoce en ella, no entiende exactamente qué va a recibir, y la archiva sin responder."
              },
              {
                "t": "h",
                "x": "Los 5 bloques de una propuesta que convierte"
              },
              {
                "t": "steps",
                "x": [
                  {
                    "s": "Lo que entendí de tu situación",
                    "p": "2-3 líneas que demuestran que escuchaste. Usa sus palabras, no las tuyas. \"Me comentaste que…\" tiene más poder que cualquier argumento de venta."
                  },
                  {
                    "s": "Lo que propongo hacer: y por qué",
                    "p": "3 puntos concretos. Sin jerga. Qué vas a hacer, cómo y por qué eso resuelve su problema específico."
                  },
                  {
                    "s": "Lo que consigue: el resultado esperado",
                    "p": "No características. Resultados. No \"te hago el logo\" sino \"al terminar tendrás una identidad visual que puedas usar en todos tus canales desde el primer día\"."
                  },
                  {
                    "s": "La inversión y lo que incluye",
                    "p": "Precio claro, sin ambigüedad, con lo que incluye y lo que no. La ambigüedad genera desconfianza."
                  },
                  {
                    "s": "El próximo paso: uno solo",
                    "p": "Una sola acción para avanzar. No dos opciones, no \"cuéntame qué te parece\". Un paso concreto: \"Si te parece bien, me dices y te mando el contrato.\""
                  }
                ]
              },
              {
                "t": "prompt",
                "label": "Prompt: Propuesta completa con los 5 bloques",
                "code": "Eres un consultor senior que escribe propuestas directas que convierten.\n\nLead: [nombre o empresa]\nLo que me contó: [lo más importante de la conversación: sus palabras, su situación]\nLo que propongo: [tu servicio específico para este caso]\nResultado que puede esperar: [qué consigue de forma concreta y medible]\nPrecio: [importe]: incluye: [qué va incluido]\nPlazo: [tiempo de entrega o duración]\n\nEscribe la propuesta en formato email con los 5 bloques:\n1. Lo que entendí de tu situación (sus palabras, su problema)\n2. Lo que propongo hacer (3 puntos sin jerga)\n3. Lo que consigue (resultados, no características)\n4. Inversión y qué incluye (claro, sin ambigüedad)\n5. Próximo paso (uno solo, concreto)\n\nTono: profesional pero directo. Sin palabrería corporativa. Sin \"es un placer\"."
              },
              {
                "t": "quiz",
                "q": "¿Cuál es el bloque más importante de los 5, el que hace que el lead se reconozca en la propuesta?",
                "opts": [
                  {
                    "x": "El bloque 4, la inversión clara y sin ambigüedad",
                    "c": false
                  },
                  {
                    "x": "El bloque 1, lo que entendí de tu situación, usando sus palabras",
                    "c": true
                  },
                  {
                    "x": "El bloque 5, el próximo paso concreto",
                    "c": false
                  }
                ]
              }
            ]
          },
          {
            "titulo": "Las 7 objeciones más frecuentes y cómo responderlas",
            "objetivo": "Tener preparada una respuesta específica para cada objeción antes de que aparezca, para no improvisar en el momento de más tensión.",
            "blocks": [
              {
                "t": "p",
                "x": "Las objeciones no son rechazos. Son peticiones de más información. El lead que objeta todavía está considerando, el que rechaza directamente no dice nada. Tener las respuestas preparadas antes de que aparezcan cambia completamente la dinámica."
              },
              {
                "t": "p",
                "x": "1. Es demasiado caro Respuesta Entiendo. ¿Puedo preguntarte con qué lo estás comparando? A veces ayuda saber qué referencia tienes para ver si lo que incluyo justifica la diferencia o si hay una versión más ajustada que te funcione igual."
              },
              {
                "t": "p",
                "x": "2. Lo tengo que pensar / consultar con mi socio Respuesta Claro, tiene todo el sentido. ¿Hay algo concreto que pueda aclarar antes de que lo habléis? A veces una duda pequeña puede frenar la decisión y prefiero resolverla ya."
              },
              {
                "t": "p",
                "x": "3. Ahora mismo no es el momento Respuesta Entendido. ¿Cuándo crees que sería mejor momento? Lo anoto y me pongo en contacto entonces para no molestarte ahora."
              },
              {
                "t": "p",
                "x": "4. Ya estoy trabajando con alguien Respuesta Perfecto, me alegra saberlo. Si en algún momento cambias de proveedor o necesitas algo adicional, aquí estoy. ¿Te puedo preguntar qué es lo que más valoras de quien lo hace ahora?"
              },
              {
                "t": "p",
                "x": "5. No sé si esto funcionará para mi caso Respuesta Es una duda razonable. ¿Qué es lo que más te preocupa que no funcione? Así te puedo decir si lo he resuelto en otros casos parecidos o si hay algo que ajustar."
              },
              {
                "t": "p",
                "x": "6. Mándame todo por email y lo reviso Respuesta Sin problema, te lo paso ahora. Para que lo encuentres ágil de leer, ¿hay algo concreto que quieras que destaque? Así te ahorro tener que rebuscar entre la info general lo que más importa para tu caso."
              },
              {
                "t": "p",
                "x": "7. Tu competencia me ofrece más barato Respuesta Tiene sentido que compares, yo haría lo mismo. ¿Estáis comparando exactamente lo mismo en alcance y entregables? A veces lo que parece la misma propuesta cubre cosas distintas. Si me dices qué incluye la otra, te lo pongo en contexto sin venderte nada."
              },
              {
                "t": "prompt",
                "label": "Prompt: Respuesta personalizada a cualquier objeción",
                "code": "Mi negocio: [qué haces]\nEl lead dijo: \"[objeción exacta con sus palabras]\"\nContexto de la conversación: [en qué punto estáis, qué propuesta habías enviado]\n\nEscribe una respuesta que:\n- No defienda ni argumente de forma agresiva\n- Haga una pregunta que entienda mejor la objeción antes de responderla\n- Deje la conversación abierta\n- Máximo 50 palabras. Tono: tranquilo, sin ansiedad"
              },
              {
                "t": "p",
                "x": "✓ Módulo 4 completado cuando Tengo una propuesta real escrita con los 5 bloques para un lead actual Tengo respuestas preparadas para las 3 objeciones que más escucho en mi negocio"
              }
            ]
          }
        ]
      },
      {
        "modulo": "05",
        "titulo": "El sistema semanal de cierre",
        "lecciones": [
          {
            "titulo": "La revisión del miércoles",
            "objetivo": "Implementar una rutina semanal de 15 minutos que garantiza que ninguna conversación de venta se enfría por olvido.",
            "blocks": [
              {
                "t": "p",
                "x": "La diferencia entre quien cierra de forma consistente y quien cierra de forma esporádica no es el talento ni el producto. Es el sistema de revisión. Quien revisa su pipeline una vez a la semana cierra más que quien lo revisa cuando se acuerda."
              },
              {
                "t": "callout",
                "s": "Conecta con tu CRM de Sheets",
                "p": "Si hiciste el curso de Mini CRM, la revisión del miércoles es exactamente el mismo proceso que la revisión de los lunes, solo que enfocada en cerrar, no solo en seguir. Usa la columna de días sin contacto para identificar los urgentes en segundos."
              },
              {
                "t": "quiz",
                "q": "¿Por qué la revisión del miércoles funciona mejor cuando es semanal y de 15 minutos, en vez de \"cuando me acuerde\"?",
                "opts": [
                  {
                    "x": "Porque hacerlo en 15 minutos te obliga a ser más rápido y eficiente",
                    "c": false
                  },
                  {
                    "x": "Porque la consistencia evita olvidos y 15 min es tiempo factible cada semana sin saltársela",
                    "c": true
                  },
                  {
                    "x": "Porque el miércoles los leads están más receptivos que otros días",
                    "c": false
                  }
                ]
              },
              {
                "t": "action",
                "label": "Tu acción ahora mismo",
                "title": "Pon el recordatorio del miércoles",
                "steps": [
                  "01 Abre tu calendario y crea un evento recurrente: \"Revisión de ventas\", miércoles, 15 minutos",
                  "02 En la descripción pega el proceso de los 4 bloques de arriba",
                  "03 La primera semana tardará 25 minutos. La cuarta, 10."
                ]
              }
            ]
          },
          {
            "titulo": "Conecta este sistema con tu CRM y cierra la semana",
            "objetivo": "Integrar todos los elementos del curso en un sistema semanal funcionando y completar la actividad final con 5 conversaciones activas.",
            "blocks": [
              {
                "t": "p",
                "x": "Este curso te ha dado las piezas. Esta lección las conecta todas en un sistema que funciona solo cuando lo usas de forma consistente."
              },
              {
                "t": "p",
                "x": "🎯 Actividad final, 5 conversaciones activas con seguimiento Identifiqué 5 leads reales en mi CRM o conversaciones pendientes Mandé el primer contacto o seguimiento a cada uno usando los prompts del curso Actualicé el estado de cada lead en el CRM Tengo el recordatorio del miércoles en el calendario Al menos una propuesta enviada con los 5 bloques esta semana"
              },
              {
                "t": "p",
                "x": "Siguiente paso recomendado Tu Mini CRM Gratis en Google Sheets Ya tienes el sistema de cierre. Ahora dale una casa: organiza todos tus leads y conversaciones en un CRM que conecta directamente con la revisión del miércoles. Sin pagar suscripciones, sin instalar nada nuevo. Empezar el curso del CRM →"
              }
            ]
          }
        ]
      }
    ],
    "relatedCourse": "minicrm"
  }
} as Record<string, Material>;

export const materialSlugs = Object.keys(materiales);
