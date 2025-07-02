import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import { UserProvider } from '../context/UserContext';
import ChatbotPopup from '../components/ChatbotPopup'

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
  title: "International Conference 2025",
  description: "Renewable Energy, Gas & Oil, and Climate Change Conference",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  authors: [{ name: "IREGO Conference Team" }],
  keywords: ["renewable energy", "gas", "oil", "climate change", "conference", "Libya", "Tripoli"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f97316" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        {/* ✅ الشريط البرتقالي المتحرك */}
        <div className="bg-orange-600 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee text-white text-sm py-2 px-4 inline-block">
            International Renewable Energy, Gas & Oil, and Climate Change Conference — November 25–27, 2025 — Tripoli, Libya
          </div>
        </div>

        <ErrorBoundary>
          <UserProvider>
            <Navbar />

            <main className="flex-grow">{children}</main>
      <ChatbotPopup />
            <Footer />
          </UserProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
