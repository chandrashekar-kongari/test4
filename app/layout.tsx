import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quizz Today - Grow Your Knowledge Daily",
  description:
    "Connect via WhatsApp and receive daily quizzes tailored to your interests. Expand your knowledge one quiz at a time.",
  authors: [{ name: "Quizz Today Team" }],
  keywords: [
    "quiz",
    "knowledge",
    "education",
    "WhatsApp",
    "learning",
    "daily quiz",
  ],
  creator: "Quizz Today",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
