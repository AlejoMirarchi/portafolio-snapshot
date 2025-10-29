import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { TeamMemberCard } from "@/components/team-member-card";

function FeaturedWork() {
  const featuredWorks = [
    {
      title: "Pagina Tecnica7",
      description:
        "Desarrollo de una página web para la Técnica 7 del Instituto Manuel Sadosky, que incluye información sobre los cursos, el equipo docente y recursos para los estudiantes.",
      imageUrl: "/ramos.jpg",
      projectUrl: "https://tecnica7-manuelsadosky.vercel.app/",
      technologies: ["React", "TypeScript", "CSS"],
      githubRepo: "https://github.com/AlejoMirarchi/tecnica7",
    },
    {
      title: "Juego ahorcado web",
      description:
        "Desarrollo de una página web para jugar al clásico juego del ahorcado. La página web incluye una interfaz interactiva donde los usuarios pueden adivinar palabras y ver su progreso.",
      imageUrl: "/ramos.jpg",
      projectUrl: "https://ahorcado-webapp.vercel.app/",
      technologies: ["React", "TypeScript", "CSS"],
      githubRepo: "https://github.com/AlejoMirarchi/ahorcado",
    },
    {
      title: "Data Dashboard ",
      description:
        "Creación de un dashboard interactivo para visualizar y analizar datos de ventas de una empresa. El dashboard incluye gráficos, tablas y filtros para facilitar la toma de decisiones basada en datos.",
      imageUrl: "/ramos.jpg",
      projectUrl: "https://data-dashboard-ventas.example.com",
      technologies: ["Python", "Dash", "Plotly"],
      githubRepo: "https://github.com/AlejoMirarchi/data-dashboard",
    },
  ];

  return (
    <section className="py-10 mt-auto mb-0 px-4 lg:px-8 bg-muted/30 shadow-lg ">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-6xl text-center font-bold text-foreground ">
            Trabajos {" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Destacados
            </span>
          </h1>
        </div>
        <div className=" flex  gap-5 max-h-110 overflow-hidden">
          {featuredWorks.map((work) => (
            <TeamMemberCard
              key={work.title}
              variant="project"
              title={work.title}
              description={work.description}
              imageUrl={work.imageUrl}
              projectUrl={work.projectUrl}
              repoUrl={work.githubRepo}
              technologies={work.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;