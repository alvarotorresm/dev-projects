import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { getTemas } from "@/lib/clases";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gestion de Proyectos Informaticos",
  description: "Profesor de Gestion de Proyectos Informaticos. Material de clases y recursos.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const temas = await getTemas();

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar temas={temas.map((t) => ({ slug: t.slug, nombre: t.nombre }))} />
        {children}
      </body>
    </html>
  );
}
