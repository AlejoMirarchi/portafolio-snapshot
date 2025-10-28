"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, GitFork, ExternalLink } from "lucide-react"

export type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
}

export function GitHubRepoList({ repos }: { repos: Repo[] }) {
  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {repos.map((repo) => (
        <motion.li
          key={repo.id}
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Card className="h-full bg-card/70 border-border">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{repo.name}</h3>
                  {repo.language && (
                    <Badge variant="secondary" className="mt-1">
                      {repo.language}
                    </Badge>
                  )}
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  Ver <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground min-h-10">
                {repo.description || "Sin descripción"}
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-500" /> {repo.stargazers_count}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork className="w-4 h-4 text-primary" /> {repo.forks_count}
                </span>
                <span className="inline-flex items-center gap-1">
                  Actualizado {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default GitHubRepoList
