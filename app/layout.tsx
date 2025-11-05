import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import AnimatedBackground from "@/components/animated-background"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Equipo Profesional",
  description: "Conoce a nuestro equipo de profesionales expertos en desarrollo, diseño y datos",
  
  icons: {
    // Use the placeholder logo in /public as the favicon and shortcut icon.
    icon: [
      { url: "/ramos.jpg", type: "image/png" },
    ],
    shortcut: "/ramos.jpg",
    apple: "/ramos.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`font-sans antialiased`}>
        <AnimatedBackground density={10} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
