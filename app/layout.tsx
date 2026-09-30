import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import Noise from '@/src/components/ui/Noise';
import FloatingWhatsapp from '@/src/components/FloatingWhatsapp';

const display = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Fortuna Barbearia — Seu estilo, sua marca",
  description: "A experiência Fortuna: cortes, barba e cuidado masculino em um ambiente autoral.",
  keywords: ["Fortuna Barbearia", "barbearia", "corte de cabelo", "barba", "Contagem"],
  openGraph: {
    title: "Fortuna Barbearia",
    description: "Seu estilo, sua marca.",
    images: ["/images/fortuna/atendimento.webp"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <body className={`${display.variable} ${manrope.variable} antialiased relative overflow-x-hidden max-w-[100vw]`}>
        <Noise />
        {children}
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
