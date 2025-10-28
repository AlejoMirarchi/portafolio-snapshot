import GitHubRepoList, { type Repo } from "@/components/github-repo-list"

async function fetchRepos(user: string, perPage = 6): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${encodeURIComponent(user)}/repos?sort=updated&per_page=${perPage}`,
      {
        // Cache for an hour; adjust as needed
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    )

    if (!res.ok) throw new Error(`GitHub API ${res.status}`)
    const data = (await res.json()) as Repo[]
    return data
  } catch (e) {
    console.error("Failed to fetch repos:", e)
    return []
  }
}

export async function GitHubSection() {
  const user = process.env.NEXT_PUBLIC_GITHUB_USER || "octocat"
  const perPage = parseInt(process.env.NEXT_PUBLIC_GITHUB_PER_PAGE || "6", 10)
  const repos = await fetchRepos(user, perPage)

  return (
    <section id="repos" className="relative py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Últimos Repositorios
          </h2>
          <p className="text-muted-foreground">
            Mostrando actividad reciente de GitHub para <span className="font-medium text-foreground">{user}</span>
          </p>
        </div>

        {repos.length > 0 ? (
          <GitHubRepoList repos={repos.slice(0, 6)} />
        ) : (
          <div className="text-center text-muted-foreground">
            No pudimos cargar los repositorios en este momento. Inténtalo más tarde.
          </div>
        )}
      </div>
    </section>
  )
}

export default GitHubSection
