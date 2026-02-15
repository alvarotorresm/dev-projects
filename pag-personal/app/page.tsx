import { getClases } from "@/lib/clases";

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function truncateContent(content: string, maxLength: number = 120): string {
  const stripped = content.replace(/\n/g, " ").trim();
  if (stripped.length <= maxLength) return stripped;
  return stripped.slice(0, maxLength).trim() + "…";
}

export default async function Home() {
  const clases = await getClases();

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Hero / Profile */}
      <header className="border-b border-stone-200 dark:border-stone-800">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-600 dark:text-amber-500">
            Docencia
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl">
            Gestión de Proyectos Informáticos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Material de clases, apuntes y recursos para estudiantes. Enfoque
            práctico en metodologías ágiles, planificación y control de proyectos
            de software.
          </p>
        </div>
      </header>

      {/* Clases grid */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-sm font-medium uppercase tracking-widest text-stone-500 dark:text-stone-500">
          Últimas clases
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clases.length === 0 ? (
            <p className="col-span-full text-stone-500 dark:text-stone-400">
              No hay clases publicadas aún.
            </p>
          ) : (
            clases.map((clase) => (
              <article
                key={clase.slug}
                className="group flex flex-col rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
              >
                <time
                  dateTime={clase.date}
                  className="text-xs font-medium text-stone-500 dark:text-stone-500"
                >
                  {formatDate(clase.date)}
                </time>
                <h3 className="mt-2 text-lg font-semibold text-stone-900 dark:text-stone-50 group-hover:text-amber-600 dark:group-hover:text-amber-500">
                  {clase.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 line-clamp-3 dark:text-stone-400">
                  {truncateContent(clase.content)}
                </p>
                <a
                  href={`/clases/${clase.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400"
                  aria-label={`Ver clase: ${clase.title}`}
                >
                  Ver clase →
                </a>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
