import type { Metadata } from "next";
import { Source_Serif_4, Instrument_Sans } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Falguni Kohale | Computer Science student and aspiring IT professional",
  description:
    "Portfolio of Falguni Kohale, a B.Sc. Computer Science student from Wardha seeking an entry-level position in the IT industry.",
  openGraph: {
    title: "Falguni Kohale | Portfolio",
    description: "B.Sc. Computer Science student seeking an entry-level IT role.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
