import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Senses Salon - Premium Hair & Wellness Services | NYC",
  description:
    "Experience expert hair replacement, extensions, color, and wellness services at Senses Salon. Specializing in men's hair loss solutions. Creating Your Image since day one.",
  keywords: [
    "hair replacement",
    "men's hair loss",
    "hair extensions",
    "hair color",
    "salon NYC",
    "wellness services",
    "hair treatment",
  ],
  authors: [{ name: "Senses Salon" }],
  metadataBase: new URL("https://sensessalon.com"),
  alternates: {
    canonical: "https://sensessalon.com",
  },
  openGraph: {
    title: "Senses Salon - Creating Your Image",
    description: "Premium hair replacement and wellness services in NYC",
    url: "https://sensessalon.com",
    siteName: "Senses Salon",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Senses Salon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senses Salon - Creating Your Image",
    description: "Premium hair replacement and wellness services",
    images: ["/og-image.jpg"],
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
