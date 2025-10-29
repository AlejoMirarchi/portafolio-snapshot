import { TeamMemberCard } from "@/components/team-member-card"
import { Reveal } from "@/components/reveal"
import { Code, Palette, Database } from "lucide-react"

const teamMembers = [
	{
		name: "Lucas Ramos",
		role: "Desarrolladora Full Stack",
		description:
			"Especialista en arquitecturas escalables y desarrollo de aplicaciones web modernas. Con más de 8 años de experiencia en React, Node.js y cloud computing.",
		skills: [
			"Postgres",
			"Node.js",
			"TypeScript",
			"AWS & Azure",
			"Microservicios",
			"CI/CD",
		],
		icon: <Code className="w-6 h-6 text-primary" />, // Renderizamos el icono aquí
		experience: "8+ años",
		projects: "50+ proyectos",
		linkedin: "https://www.linkedin.com/in/lucas-sebastian-ramos",
		github: "https://github.com/HelloMeow10",
	},
	{
		name: "Alejo Mirarchi",
		role: "Diseñador UX/UI",
		description:
			"Creador de experiencias digitales intuitivas y atractivas. Experto en diseño centrado en el usuario con un enfoque en accesibilidad y usabilidad.",
		skills: [
			"React & tailwind",
			"Design Systems",
			"Prototipado",
			"User Research",
			"Accesibilidad",
			"Branding",
		],
		icon: <Palette className="w-6 h-6 text-primary" />, // Renderizamos el icono aquí
		experience: "6+ años",
		projects: "100+ diseños",
		linkedin: "https://www.linkedin.com/in/alejo-mirarchi-b0a13b370",
		github: "https://github.com/AlejoMirarchi",
	},
	{
		name: "Abril Lezcano",
		role: "Ingeniera de Datos",
		description:
			"Experta en análisis de datos y machine learning. Transforma datos complejos en insights accionables para impulsar decisiones estratégicas.",
		skills: [
			"Python & SQL",
			"Machine Learning",
			"Data Visualization",
			"Big Data",
			"ETL Pipelines",
			"Analytics",
		],
		icon: <Database className="w-6 h-6 text-primary" />, // Renderizamos el icono aquí
		experience: "7+ años",
		projects: "40+ análisis",
		linkedin: "https://www.linkedin.com/in/abril-lezcano-98b39633b/",
		github: "https://github.com/AbrilAADKSDJL",
	},
]

export function TeamSection() {
	return (
		<section id="equipo" className="py-20 px-4 lg:px-8 bg-muted/30">
			<div className="container mx-auto max-w-7xl">
				<div className="text-center mb-16 space-y-4">
					<Reveal>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground">
							Conoce al Equipo
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Profesionales apasionados por la tecnología y comprometidos con la
							excelencia
						</p>
					</Reveal>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamMembers.map((member, index) => (
					
							<TeamMemberCard {...member} />
					
					))}
				</div>
			</div>
		</section>
	)
}
