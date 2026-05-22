import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const neueMontreal = localFont({
  src: "../public/fonts/NeueMontreal-Regular.otf",
  variable: "--font-neue-montreal",
});

const neueMontrealMedium = localFont({
  src: "../public/fonts/NeueMontreal-Medium.otf",
  variable: "--font-neue-montreal-medium",
});

const neueMontrealLight = localFont({
  src: "../public/fonts/NeueMontreal-Light.otf",
  variable: "--font-neue-montreal-light",
});

const neueMontrealBold = localFont({
  src: "../public/fonts/NeueMontreal-Bold.otf",
  variable: "--font-neue-montreal-bold",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.fullName,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: siteConfig.fullName,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@secrix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} ${neueMontreal.variable} ${neueMontrealMedium.variable} ${neueMontrealLight.variable} ${neueMontrealBold.variable} dark`}>
      <body className="min-h-screen flex flex-col antialiased">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
