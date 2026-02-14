# Pasos para crear la app
## Instalar NodeJS
https://nodejs.org/en/download
Considerar: using Chocolatey with npm

### Download and install Chocolatey (se debe ejecutar como admin):
powershell -ExecutionPolicy Bypass -c "irm https://community.chocolatey.org/install.ps1|iex"

### Download and install Node.js:
choco install nodejs --version="24.12.0"

### Verify the Node.js version:
node -v # Should print "v24.12.0".

### Verify npm version:
npm -v # Should print "11.6.2".

### Agregar al PATH del sistema

$currentPath = [Environment]::GetEnvironmentVariable("Path", "User"); if ($currentPath -notlike "*nodejs*") { [Environment]::SetEnvironmentVariable("Path", "$currentPath;C:\Program Files\nodejs", "User"); Write-Host "Node.js agregado al PATH permanentemente" } else { Write-Host "Node.js ya está en el PATH" }


## Inicializar NextJS
Esto permite crear una app utilizando next js
`npx create-next-app@latest ai-note-taker --yes `

## Desplegar servidor de desarrollo

npm run dev

## Cómo hacer vibe-coding
Como IA, no tengo años biológicos, pero tengo acceso a las mejores prácticas y arquitecturas que usan los desarrolladores senior hoy en día. Si adoptamos esa mentalidad pragmática y de "10 años de experiencia", te diré que la combinación de **Next.js + Cursor + Vibe Coding** es posiblemente la forma más rápida y moderna de levantar tu proyecto.

El "vibe coding" (escribir código interactuando en lenguaje natural con una IA y dejando que ella haga el trabajo pesado) es increíble, pero si no le das una buena estructura, tu código terminará siendo un desastre inMantenible (lo que los devs llamamos "código espagueti").

Aquí tienes la metodología profesional para aplicar *vibe coding* sin perder el control de tu arquitectura, ideal para tu blog de gestión de proyectos.

---

### Recomendación de Hosting Gratuito

Dado que no te importa que tu código sea público (lo cual es genial para aportar a la comunidad), tu mejor combinación es **GitHub + Vercel**.

* **GitHub:** Alojarás tu código fuente allí de forma pública y gratuita.
* **Vercel:** Es la empresa creadora de Next.js. Tienen un plan "Hobby" 100% gratuito de por vida para proyectos personales. Se conecta directamente a tu repositorio de GitHub: cada vez que guardes un cambio, Vercel actualizará tu página web automáticamente en segundos.

---

### Metodología de Vibe Coding con Cursor y Next.js

Para un blog de clases, no necesitas una base de datos compleja. Usaremos **Markdown (o MDX)** para que escribas tus clases como si fueran documentos de texto, y Next.js los convertirá en páginas web.

#### 1. Preparar las "Reglas del Juego" (`.cursorrules`)

El secreto de un buen *vibe coding* es el contexto. Antes de pedirle a Cursor que programe, debes decirle *cómo* programar.

* Crea un archivo llamado `.cursorrules` en la raíz de tu proyecto.
* Usa este archivo para decirle a la IA: "Usa Next.js 14/15 con App Router, Tailwind CSS para los estilos, y crea componentes funcionales limpios. El contenido del blog vendrá de archivos Markdown locales".
* *Nota: Al tener esto, la IA de Cursor no adivinará, seguirá tu estándar.*

#### 2. El Andamiaje (Setup Inicial)

Aunque uses *vibe coding*, el primer paso se hace en la terminal.

* Abre la terminal en Cursor (presionando `Ctrl + \` o `Ctrl + Ñ` dependiendo de tu teclado) y escribe:
`npx create-next-app@latest mi-blog-clases`
* Dile que sí a TypeScript, Tailwind y App Router.

#### 3. El Bucle de Vibe Coding (El método "Macro a Micro")

Aquí es donde ocurre la magia. Un dev experimentado no le pide a la IA "hazme un blog completo". Se lo pide por partes:

* **Paso A: Estructura de datos (Chat - `Ctrl + L`).**
Abre el chat de Cursor y dile: *"Quiero tener una carpeta `/content/clases` donde guardaré archivos .md. Crea una función de utilidad (utility function) en TypeScript que lea esta carpeta, extraiga el título, la fecha y el contenido de los archivos markdown usando el paquete `gray-matter`"*.
* **Paso B: Interfaz General (Generación en archivo - `Ctrl + K`).**
Ve a la página principal (`page.tsx`) y usa el atajo de generación en línea. Escribe: *"Crea una landing page profesional y minimalista que presente mi perfil como profesor de gestión de proyectos informáticos, y debajo muestra una grilla con las últimas clases cargadas leyendo la función de utilidad que creamos"*.
* **Paso C: La vista de la clase.**
Crea una ruta dinámica (ej. `/clases/[slug]/page.tsx`) y pídele a Cursor: *"Genera la vista de detalle de la clase. Toma el contenido Markdown, procésalo y muéstralo con buena tipografía para lectura larga. Agrega un botón de 'Volver'"*.

#### 4. Iteración por "Vibes" (Estilos y Ajustes)

Una vez que funciona, entras en modo *vibe*. En lugar de buscar cómo centrar un div en Tailwind, seleccionas el bloque de código en Cursor, presionas `Ctrl + K` y le dices:

* *"Haz que esta tarjeta se vea más moderna, añade un poco de sombra y haz que el título sea azul oscuro".*
* *"Cambia este diseño para que sea responsive y en móviles se vea en una sola columna".*

#### 5. Despliegue (Deploy)

1. Subes tu código a GitHub (Cursor tiene herramientas visuales para esto si no dominas los comandos de Git).
2. Entras a Vercel.com, inicias sesión con tu GitHub, seleccionas tu repositorio y le das a "Deploy". Tu blog estará vivo en internet.

---

### Tu Siguiente Paso

El éxito de esto depende de arrancar con un buen contexto para que Cursor no se equivoque.

¿Te gustaría que te redacte el contenido exacto del archivo **`.cursorrules`** y el **primer *prompt*** que debes pegarle a la IA para que te genere toda la base del blog en un solo movimiento?