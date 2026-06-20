import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Noise from '@/src/components/ui/Noise';

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Barber Silva — Muito além da barba, cabelo e bigode",
  description: "Barbearia premium em Novo Riacho, Contagem. Cortes, barba, barboterapia e o Clube BS — a assinatura ilimitada de cuidados masculinos.",
  keywords: ["barbearia", "contagem", "novo riacho", "barber silva", "corte de cabelo", "barba", "clube bs"],
  openGraph: {
    title: "Barber Silva",
    description: "Muito além da barba, cabelo e bigode.",
    images: ["/images/og-image.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased relative overflow-x-hidden max-w-[100vw]`}>
        <Noise />
        {children}
      </body>
    </html>
  );
}
