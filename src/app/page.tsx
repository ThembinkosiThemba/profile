import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { SiteNav } from "@/components/site-nav"
import { WhatsNew } from "@/components/whats-new"

import { achievementItems, projects, whatsNewItems, workItems } from "@/lib/items"

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="relative">
        <SiteNav />
        <div className="max-w-3xl">
          <div id="whats-new">
            <WhatsNew items={whatsNewItems} />
          </div>

          <div id="reflections">
            <SectionList title="reflections" items={achievementItems} />
          </div>

          <div id="work">
            <SectionList title="work" items={workItems} />
          </div>

          <div id="projects">
            <SectionList
              title="projects"
              items={projects}
              viewAllHref="/projects"
              viewAllText="all projects"
            />
          </div>

          <div id="resources">
            <BlogSection title="resources" />
          </div>
          <div id="links">
            <LinksSection title="links" />
          </div>
        </div>
      </div>
    </>
  )
}
