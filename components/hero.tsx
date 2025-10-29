import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 px-4 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
  <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-accent/10" />
        <svg
          className="absolute bottom-0 left-0 w-full h-64 opacity-20"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#hero-gradient)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.45 0.15 240)" />
              <stop offset="100%" stopColor="oklch(0.5 0.18 240)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          
            <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">
              Nuestro Equipo de{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Profesionales</span>
            </h1>
          
          
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Conoce a los expertos que impulsan la innovación y la excelencia en cada proyecto. Combinamos talento,
              experiencia y pasión para crear soluciones excepcionales.
            </p>
          
        </div>
      </div>
    </section>
  )
}
