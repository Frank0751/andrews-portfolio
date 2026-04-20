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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/aeonik" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}