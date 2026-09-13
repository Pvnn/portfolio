export interface GithubRepo {
  id: number
  name: string
  description: string
  html_url: string
  topics: string[]
  language: string
  stargazers_count: number
  forks_count: number
  fork: boolean
  updated_at: string
}

export interface GithubStats {
  totalRepos: number
  totalStars: number
  repos: GithubRepo[]
}

export async function getGithubData(username: string = 'Pvnn'): Promise<GithubStats> {
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
  
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        })
      }
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch github data')
    }
    
    const repos: GithubRepo[] = await res.json()
    
    const originalRepos = repos.filter(repo => !repo.fork)
    const totalStars = originalRepos.reduce((acc, repo) => acc + repo.stargazers_count, 0)
    
    return {
      totalRepos: originalRepos.length,
      totalStars,
      repos: originalRepos
    }
  } catch (error) {
    console.error(error)
    return {
      totalRepos: 0,
      totalStars: 0,
      repos: []
    }
  }
}
