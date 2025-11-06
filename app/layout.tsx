import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import AnimatedBackground from "@/components/animated-background"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MonterCoders - Profesionales",
  description: "Conoce a nuestro equipo de profesionales expertos en desarrollo, diseño y datos",
  
  icons: {
    
    icon: [
      { url: "/monster2.png", type: "image/png" },
    ],
    shortcut: "/monster2.png",
    apple: "/monster2.png",
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
