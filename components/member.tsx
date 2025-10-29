// components/member
"use client"
import React, { useState, useMemo } from "react";
import { MapPin, Briefcase, Mail, Globe, Github, Linkedin, Twitter, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface MemberProps {
  name: string;
  role: string;
  bio: string;
  image: string; // URL de la imagen
  location?: string;
  experienceYears?: number;
  skills?: string[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    email?: string;
  };
}

const Member: React.FC<MemberProps> = ({
  name,
  role,
  bio,
  image,
  location,
  experienceYears,
  skills,
  socialLinks,
}) => {
  const [imgSrc, setImgSrc] = useState(image);

  const placeholderDataUrl = useMemo(() => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
    const svg = `<?xml version='1.0' encoding='UTF-8'?>\n<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'>\n  <rect width='100%' height='100%' fill='%234f46e5'/>\n  <text x='50%' y='50%' dy='.1em' font-family='Arial, Helvetica, sans-serif' font-size='96' fill='%23ffffff' text-anchor='middle'>${initials}</text>\n</svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }, [name]);

  return (
    <div className="relative rounded-xl border border-border bg-card/80 backdrop-blur p-6 shadow-lg shadow-primary/10">
      {/* Glow ring avatar */}
      <div className="mx-auto w-32 h-32 rounded-full p-0.5 bg-linear-to-r from-primary to-accent shadow-md shadow-primary/20">
        <img
          src={imgSrc}
          alt={name}
          onError={() => setImgSrc(placeholderDataUrl)}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold text-center mt-4">{name}</h2>
      <p className="text-sm text-center mt-1 bg-clip-text text-transparent bg-linear-to-r from-primary to-accent font-medium">
        {role}
      </p>

      <div className="mt-3 flex items-center justify-center gap-3 text-sm text-muted-foreground">
        {location && (
          <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {location}</span>
        )}
        {typeof experienceYears === "number" && (
          <span className="inline-flex items-center gap-1"><Briefcase className="w-4 h-4" /> {experienceYears}+ años</span>
        )}
      </div>

      <p className="text-center mt-4 text-foreground/90 leading-relaxed">{bio}</p>

      {skills && skills.length > 0 && (
        <div className="mt-5">
          <div className="flex items-center gap-2 mb-2">
            <Code className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Habilidades</h3>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((s) => (
              <Badge key={s} variant="secondary" className="bg-primary/10 text-primary border border-primary/20">
                {s}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-center gap-3">
        {socialLinks.github && (
          <a aria-label="GitHub" href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 hover:bg-accent/10 transition-colors">
            <Github className="w-4 h-4" />
            <span className="sr-only">GitHub</span>
          </a>
        )}
        {socialLinks.linkedin && (
          <a aria-label="LinkedIn" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 hover:bg-accent/10 transition-colors">
            <Linkedin className="w-4 h-4" />
            <span className="sr-only">LinkedIn</span>
          </a>
        )}
        {socialLinks.twitter && (
          <a aria-label="Twitter" href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 hover:bg-accent/10 transition-colors">
            <Twitter className="w-4 h-4" />
            <span className="sr-only">Twitter</span>
          </a>
        )}
        {socialLinks.website && (
          <a aria-label="Sitio" href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 hover:bg-accent/10 transition-colors">
            <Globe className="w-4 h-4" />
            <span className="sr-only">Website</span>
          </a>
        )}
        {socialLinks.email && (
          <a aria-label="Email" href={`mailto:${socialLinks.email}`} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 hover:bg-accent/10 transition-colors">
            <Mail className="w-4 h-4" />
            <span className="sr-only">Email</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Member;