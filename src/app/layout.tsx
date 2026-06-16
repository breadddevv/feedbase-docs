import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/topbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = JetBrains_Mono({
  variable: "--font-fira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feedbase",
  description: "Open source feedback management platform for product teams.",
  openGraph: {
    title: 'Feedbase',
    description: 'Open source feedback management platform for product teams.',
    images: [
      {
        url: 'https://feedbase.breaddevv.cc/landing.png',
        width: 1920,
        height: 1080,
        alt: 'Feedbase',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <meta content="#ff2b87" data-react-helmet="true" name="theme-color" />
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}