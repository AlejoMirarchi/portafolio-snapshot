import { TeamMemberCard } from "@/components/team-member-card"
import { Code, Palette, Database } from "lucide-react"

const teamMembers = [
  {
    name: "Ana García",
    role: "Desarrolladora Full Stack",
    description:
      "Especialista en arquitecturas escalables y desarrollo de aplicaciones web modernas. Con más de 8 años de experiencia en React, Node.js y cloud computing.",
    skills: ["React & Next.js", "Node.js & Express", "TypeScript", "AWS & Azure", "Microservicios", "CI/CD"],
    icon: Code,
    experience: "8+ años",
    projects: "50+ proyectos",
  },
  {
    name: "Carlos Rodríguez",
    role: "Diseñador UX/UI",
    description:
      "Creador de experiencias digitales intuitivas y atractivas. Experto en diseño centrado en el usuario con un enfoque en accesibilidad y usabilidad.",
    skills: ["Figma & Adobe XD", "Design Systems", "Prototipado", "User Research", "Accesibilidad", "Branding"],
    icon: Palette,
    experience: "6+ años",
    projects: "100+ diseños",
  },
  {
    name: "María López",
    role: "Ingeniera de Datos",
    description:
      "Experta en análisis de datos y machine learning. Transforma datos complejos en insights accionables para impulsar decisiones estratégicas.",
    skills: ["Python & SQL", "Machine Learning", "Data Visualization", "Big Data", "ETL Pipelines", "Analytics"],
    icon: Database,
    experience: "7+ años",
    projects: "40+ análisis",
  },
]

export function TeamSection() {
  return (
    <section id="equipo" className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Conoce al Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesionales apasionados por la tecnología y comprometidos con la excelencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
