import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="300" r="200" stroke="#0078D4" strokeWidth="2" />
            <circle cx="400" cy="300" r="150" stroke="#0078D4" strokeWidth="2" />
            <circle cx="400" cy="300" r="100" stroke="#0078D4" strokeWidth="2" />
            <path d="M200 300 L600 300 M400 100 L400 500" stroke="#0078D4" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10">
          <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent">
            404
          </h1>

          <h2 className="text-3xl font-semibold text-white mb-4">Página no encontrada</h2>

          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>

          <div className="mb-8 flex justify-center">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="url(#gradient1)" strokeWidth="4" />
              <path d="M70 90 L80 80 M120 80 L130 90" stroke="#0078D4" strokeWidth="4" strokeLinecap="round" />
              <path d="M70 130 Q100 110 130 130" stroke="#0078D4" strokeWidth="4" strokeLinecap="round" fill="none" />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0078D4" />
                  <stop offset="100%" stopColor="#00BCF2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8"
              >
                Volver al inicio
              </Button>
            </Link>
            <Link href="/#team">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-400 hover:bg-blue-950/50 px-8 bg-transparent"
              >
                Ver el equipo
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-500 mb-4">Enlaces útiles:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/#about" className="text-blue-400 hover:text-blue-300 transition-colors">
                Sobre Nosotros
              </Link>
              <Link href="/#values" className="text-blue-400 hover:text-blue-300 transition-colors">
                Nuestros Valores
              </Link>
              <Link href="/#team" className="text-blue-400 hover:text-blue-300 transition-colors">
                Equipo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
