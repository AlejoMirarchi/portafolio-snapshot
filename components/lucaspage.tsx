"use client"
import React from "react";
import Link from "next/link";
import Member, { MemberProps } from "@/components/member";
import { Code, Briefcase, Mail, ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/animated-background"

const lucasData: MemberProps = {
  name: "Lucas",
  role: "Backend Developer",
  bio: "Apasionado por el desarrollo backend, la optimización de sistemas y las arquitecturas escalables.",
  image: "/lucas.png",
  location: "Buenos Aires, AR",
  experienceYears: 5,
  skills: ["Node.js", "Express", "GraphQL", "MongoDB", "PostgreSQL", "Docker"],
  socialLinks: {
    github: "https://github.com/HelloMeow10",
    linkedin: "https://www.linkedin.com/in/lucas-sebastian-ramos/",
    website: "https://www.linkedin.com/in/lucas-sebastian-ramos/",
    email: "lucasmiau28@gmail.com",
  },
};

const animationsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as any },
  },
};

const LucasPage = () => {
  return (
    <div className="container mx-auto py-10 backdrop-blur-lg">
      <motion.div
        className="mb-10 flex items-center justify-between"
        variants={animationsVariants}
        initial="hidden"
        animate="visible"
      >
        <Link
          href="/"
          className="inline-flex bg-purple-700/30 items-center rounded-md border border-border px-3 py-1.5 text-sm font-medium text-white hover:bg-purple-700/30 transition-colors"
        >
          ← Volver al inicio
        </Link>
        <div className="text-xs text-purple-300 inline-flex items-center gap-2">
          <MapPin className="w-4 h-4" /> {lucasData.location}
        </div>
      </motion.div>

      <div className="relative">
  <AnimatedBackground density={6} />
  <div className="absolute inset-0 -z-30 bg-linear-to-b from-blue-500/10 via-purple-400/20 to-purple-500/20 rounded-2xl" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            className="lg:col-span-1"
            variants={animationsVariants}
            initial="hidden"
            animate="visible"
          >
            <Member {...lucasData} />
          </motion.div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-purple-600/40 bg-primary-800/30 p-6 shadow-lg shadow-purple-900/10">
              <h3 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-purple-600">
                Sobre mí
              </h3>
              <motion.p
                variants={animationsVariants}
                initial="hidden"
                animate="visible"
                className="text-purple-200 leading-relaxed"
              >
                Me especializo en construir sistemas backend robustos y escalables. Disfruto trabajar con
                tecnologías modernas como Node.js, GraphQL y Docker. Fuera del código, me interesa la política y tocar el piano.
              </motion.p>
            </div>

            <div className="rounded-xl border  border-purple-300/40 bg-primary-800/30 p-6 shadow-lg shadow-purple-900/10">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold">Stack principal</h3>
              </div>
              <motion.div
                variants={animationsVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"
              >
                {lucasData.skills?.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-md border border-purple-500 bg-purple-700 px-3 py-2 text-sm text-purple-300 shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={animationsVariants}
              initial="hidden"
              animate="visible"
              className="rounded-xl border  border-purple-600/40 bg-primary-800/30 p-6 shadow-lg shadow-purple-900/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold">Contacto & enlaces</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lucasData.socialLinks.email && (
                  <a
                    href={`mailto:${lucasData.socialLinks.email}`}
                    className="inline-flex items-center gap-2 rounded-md border border-purple-500 px-3 py-2 hover:bg-purple-700/10 transition-colors"
                  >
                    <Mail className="w-4 h-4" /> {lucasData.socialLinks.email}
                  </a>
                )}
                {lucasData.socialLinks.github && (
                  <a
                    href={lucasData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-purple-500 px-3 py-2 hover:bg-purple-700/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LucasPage;