import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rodolibra | Transporte e Logística Rodoviária",
  description:
    "Transportadora Rodolibra: conheça nossos serviços de cargas secas, fracionadas e dedicadas. Faça sua cotação rápida e direta pelo WhatsApp.",
  keywords: [
    "Rodolibra",
    "transporte rodoviário",
    "cargas",
    "logística",
    "cotação de frete",
    "Curitiba",
    "carga fracionada",
    "carga dedicada",
  ],
  authors: [{ name: "Projeto de Extensão TI e Sociedade" }],
  openGraph: {
    title: "Rodolibra | Transporte e Logística",
    description: "Sua carga no destino certo, com agilidade e total transparência. Solicite cotação via WhatsApp.",
    siteName: "Rodolibra",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F33",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
