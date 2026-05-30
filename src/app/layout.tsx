import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrews Akoto-Addo (Andy) | Pan-African Social Entrepreneur",
  description:
    "Andrews Akoto-Addo (Andy) is a Pan-African social entrepreneur and ecosystem builder dedicated to value creation and the sustainability of the African continent through systems change, SME growth, and private sector engagement.",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body
        className={playfair.className}
        style={{
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "#0a1628",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "#C9912A",
            fontSize: "1.5rem",
            textAlign: "center",
            padding: "0 1.5rem",
          }}
        >
          This site is currently under maintenance. Please check back later.
        </p>
      </body>
    </html>
  );
}
