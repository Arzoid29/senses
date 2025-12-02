import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans", 
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono", 
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sensessalon.com"),
  title: {
    default: "Senses Salon - Premium Hair & Wellness Services",
    template: "%s | Senses Salon", 
  },
  description:
    "Expert hair replacement, extensions, color, and wellness services in Croton-on-Hudson, NY. Specializing in men's hair loss solutions, custom wigs, and scalp treatments.",
  keywords: [
    "Senses Salon",
    "hair replacement NYC",
    "men's hair loss solutions",
    "hair extensions Westchester",
    "hair color specialist",
    "custom wigs",
    "scalp treatments",
    "trichology",
    "Croton-on-Hudson salon",
    "balayage",
    "wellness spa",
  ],
  authors: [{ name: "Senses Salon" }],
  creator: "Senses Salon",
  publisher: "Senses Salon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Senses Salon - Creating Your Image",
    description: "Premium hair replacement, custom wigs, and wellness services in Westchester, NY.",
    url: "https://sensessalon.com",
    siteName: "Senses Salon",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Senses Salon Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senses Salon - Creating Your Image",
    description: "Premium hair replacement and wellness services.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/icon.svg",
    },
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}