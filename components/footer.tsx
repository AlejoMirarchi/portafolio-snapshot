import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contacto" className="bg-card border-t border-border py-16 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-sm" />
              <span className="text-xl font-semibold text-foreground">Portfolio</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Un equipo dedicado a crear soluciones tecnológicas innovadoras que transforman ideas en realidad.
              Trabajamos con pasión y compromiso en cada proyecto.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Conecta con nosotros</h3>
            <p className="text-muted-foreground mb-6">
              ¿Tienes un proyecto en mente? Nos encantaría escucharte y colaborar contigo.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Portfolio. Todos los derechos reservados.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
