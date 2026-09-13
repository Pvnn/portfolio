import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { About } from '@/components/About'
import { GithubActivity } from '@/components/GithubActivity'
import { Experience } from '@/components/Experience'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { ProjectArchive } from '@/components/ProjectArchive'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { getGithubData } from '@/lib/github'

export default async function Page() {
  // Fetch real github data
  const githubData = await getGithubData('Pvnn')

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <GithubActivity stats={githubData} />
      <Experience />
      <FeaturedProjects />
      <ProjectArchive repos={githubData.repos} />
      <Contact />
      <Footer />
    </main>
  )
}
