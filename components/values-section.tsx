import { Reveal } from "@/components/reveal"

export function ValuesSection() {
  const values = [
    {
      title: "Excelencia",
      description: "Nos esforzamos por superar las expectativas en cada proyecto que emprendemos.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Compromiso",
      description: "Dedicación total a los objetivos de nuestros clientes y al éxito de cada proyecto.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Creatividad",
      description: "Pensamiento innovador que transforma ideas en soluciones únicas y efectivas.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Transparencia",
      description: "Comunicación clara y honesta en cada etapa del proceso de desarrollo.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
  ]

  return (
  <section className="relative py-20 px-4 lg:px-8 overflow-hidden">
      {/* Fondo con gradiente */}
  <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background -z-10" />

      {/* SVG decorativo geométrico */}
      <div className="absolute top-1/2 left-0 w-64 h-64 -translate-y-1/2 opacity-10 -z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="values-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.45 0.15 240)" />
              <stop offset="100%" stopColor="oklch(0.5 0.18 240)" />
            </linearGradient>
          </defs>
          <polygon points="100,10 40,198 190,78 10,78 160,198" fill="url(#values-gradient-1)" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 -z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="values-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.5 0.18 240)" />
              <stop offset="100%" stopColor="oklch(0.45 0.15 240)" />
            </linearGradient>
          </defs>
          <rect x="20" y="20" width="160" height="160" rx="20" fill="url(#values-gradient-2)" />
          <rect x="40" y="40" width="120" height="120" rx="15" fill="url(#values-gradient-2)" opacity="0.6" />
          <rect x="60" y="60" width="80" height="80" rx="10" fill="url(#values-gradient-2)" opacity="0.3" />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nuestros{" "}
              <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Valores
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Los principios fundamentales que guían nuestro trabajo y definen nuestra cultura organizacional.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <div
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
              {/* Gradiente de fondo en hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 rounded-xl transition-all duration-300" />

              <div className="relative space-y-4">
                <div className="w-16 h-16 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center text-primary-foreground transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{value.description}</p>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
