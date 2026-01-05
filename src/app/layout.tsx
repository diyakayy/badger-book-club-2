import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Badger Book Club | UW-Madison Reading Community",
  description: "Join our Badger Book Club and immerse yourself in a vibrant reading community where diverse perspectives enhance your appreciation of every book!",
  keywords: ["book club", "UW-Madison", "reading community", "books", "literature", "university"],
  authors: [{ name: "Badger Book Club" }],
  openGraph: {
    title: "Badger Book Club",
    description: "Join our vibrant reading community at UW-Madison",
    type: "website",
    locale: "en_US",
    siteName: "Badger Book Club",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
