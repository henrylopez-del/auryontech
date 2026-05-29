import { notFound } from "next/navigation";
import CursoTemplate from "@/components/CursoTemplate";
import { cursos, cursoSlugs } from "@/lib/cursos";

export function generateStaticParams() {
  return cursoSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cursos[slug];
  if (!c) return {};
  return { title: `${c.title} · AuryOnTech`, description: c.tagline };
}

export default async function CursoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const curso = cursos[slug];
  if (!curso) notFound();
  return <CursoTemplate curso={curso} />;
}
