import { Header } from "@/components/header"
import { SectionContainer } from "@/components/section-list"
import { FeaturedContent } from "@/components/whats-new"
import { ContentGrid } from "@/components/content-grid"
import { SiteNav } from "@/components/site-nav"

import {
  achievementItems,
  projects,
  whatsNewItems,
  workItems,
} from "@/lib/items"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container relative mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <div className="w-full lg:w-3/4">
            <SectionContainer id="featured" className="mb-16">
              <FeaturedContent items={whatsNewItems} />
            </SectionContainer>

            <div className="grid gap-16 md:gap-24">
              <SectionContainer id="reflections" title="reflections">
                <ContentGrid items={achievementItems} />
              </SectionContainer>

              <SectionContainer id="work" title="work">
                <ContentGrid items={workItems} />
              </SectionContainer>

              <SectionContainer
                id="projects"
                title="projects"
                viewAllHref="/projects"
                viewAllText="all projects"
              >
                <ContentGrid items={projects.slice(0, 2)} />
              </SectionContainer>

              <SectionContainer
                id="resources"
                title="resources"
                viewAllHref="/blog"
                viewAllText="all posts"
              >
                <ContentGrid variant="compact" />
              </SectionContainer>

              <SectionContainer id="links" title="links">
                <ContentGrid variant="links" />
              </SectionContainer>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/4">
            <SiteNav />
          </div>
        </div>
      </main>
    </div>
  )
}
