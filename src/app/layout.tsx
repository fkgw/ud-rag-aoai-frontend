import type { Metadata } from "next";
// import { Inter, Source_Code_Pro } from "next/font/google";
import localhost from "next/font/local";
import "./globals.css";
import localFont from "next/font/local";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// const sourceCodePro = Source_Code_Pro({
//   subsets: ["latin"],
//   variable: "--font-source-code-pro",
// });

const geistSans = localFont({
  src: "./fonts/Geist-Variable.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RAG Archtecture DeepDive",
  description: "RAGアーキテクチャ入門",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        // className={`${inter.variable} ${sourceCodePro.variable} antialiased`}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}