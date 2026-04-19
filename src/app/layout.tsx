import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Andrews Akoto-Addo (Andy) | Pan-African Social Entrepreneur",
  description:
    "Andrews Akoto-Addo (Andy) is a Pan-African social entrepreneur and ecosystem builder dedicated to value creation and the sustainability of the African continent through systems change, SME growth, and private sector engagement.",
  openGraph: {
    title: "Andrews Akoto-Addo (Andy) | Pan-African Social Entrepreneur",
    description:
      "Pan-African social entrepreneur and ecosystem builder dedicated to value creation and the sustainability of the African continent.",
    url: "https://andrews-portfolio-zeta.vercel.app",
    siteName: "Andrews Akoto-Addo",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
