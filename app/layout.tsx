import type { Metadata } from "next";
import { EB_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Genealogical Abstract: Loperena",
  description: "A digital archival ledger of the Loperena family lineage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${spaceMono.variable}`}>
      <body className="font-serif antialiased">{children}</body>
    </html>
  );
}
