import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";

const CLASES_DIR = join(process.cwd(), "content", "clases");

export interface ClaseFrontmatter {
  title: string;
  date: string;
  [key: string]: unknown;
}

export interface Clase {
  slug: string;
  title: string;
  date: string;
  content: string;
}

/**
 * Lee la carpeta content/clases, extrae título, fecha y contenido
 * de cada archivo .md usando gray-matter.
 * Solo funciona en el servidor (Node.js runtime).
 */
export async function getClases(): Promise<Clase[]> {
  let files: string[];
  try {
    files = await readdir(CLASES_DIR);
  } catch {
    return [];
  }
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  const clases = await Promise.all(
    mdFiles.map(async (filename) => {
      const filePath = join(CLASES_DIR, filename);
      const fileContent = await readFile(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      const slug = filename.replace(/\.md$/, "");
      const title = (data.title as string) ?? slug;
      const date = (data.date as string) ?? "";

      return {
        slug,
        title,
        date,
        content,
      };
    })
  );

  // Ordenar por fecha descendente (más recientes primero)
  return clases.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Obtiene una clase por su slug.
 */
export async function getClaseBySlug(slug: string): Promise<Clase | null> {
  const clases = await getClases();
  return clases.find((c) => c.slug === slug) ?? null;
}
