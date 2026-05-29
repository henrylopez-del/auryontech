import { notFound } from "next/navigation";
import MaterialTemplate from "@/components/MaterialTemplate";
import { materiales } from "@/lib/material";

const SLUG = "formulario";

export function generateMetadata() {
  const m = materiales[SLUG];
  return {
    title: `${m?.courseTitle ?? "Material"} · Material · AuryOnTech`,
    description: `Material de estudio completo del curso ${m?.courseTitle ?? ""}.`,
  };
}

export default function MaterialPage() {
  const material = materiales[SLUG];
  if (!material) notFound();
  return <MaterialTemplate material={material} />;
}
