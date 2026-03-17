import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use Inter as default modern font
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/data/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteConfig.name} - Expert Dental Care in Deesa`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-slate-50 text-slate-800`}>
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
