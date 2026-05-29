import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import Snow from "@/components/Snow";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "AuryOnTech — Aprende a automatizar sin saber código",
  description:
    "Formación en IA y automatización para negocios. 6 cursos gratuitos y 1 de pago. Monta tu primer flujo automático en 30 minutos, sin saber código.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,600,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Snow />
        {children}
      </body>
    </html>
  );
}
