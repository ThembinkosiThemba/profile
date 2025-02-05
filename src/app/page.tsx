import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { SiteNav } from "@/components/site-nav"

const workItems: Item[] = [
  {
    title: "tempdb-labs",
    role: "creator",
    period: "aug 2024 - present",
    description:
      "building cloud infrastructure for memory data storage, integrating different databases and worklfows for analysis and report generation",
    href: "https://beta.tempdb.xyz",
  },

  {
    title: "fundmo",
    role: "co-founder & software engineer",
    period: "Jan 2024 - present",
    description:
      "we are building a platform primarily focused on our community for people to fundraise money from the public and other charitable individuals and NGOs. our platform offers a transaparent and secure way to easily revieve donations or make them to individuals/projects/initiatives you care ",
    href: "https://fundmo.tech",
  },
  {
    title: "ummo inc",
    role: "software engineer",
    period: "match 2023 - present",
    description:
      "software engineer building scalable, backend solutions for public and private sector",
    href: "https://ummo.xyz",
  },
]

const projectItems = [
  {
    title: "zen",
    role: "creator and maintainer",
    description:
      "open-source http web framework for golang applications, with a ton of pre-built support for security middleware and other strategies for securing you backend services",
    href: "https://github.com/ThembinkosiThemba/zen",
  },
  {
    title: "genesis",
    role: "creator and maintainer",
    description:
      "project starter template for rust, go and typescript which enables you to setup your projects much simpler and quicker",
    href: "https://github.com/ThembinkosiThemba/genesis",
  },
]

const achievementItems: Item[] = [
  {
    title: "The SATNAC Innovator Award & the Best Telkom Award For 2024",
    role: "Winners",
    period: "Oct 2024",
    description:
      "I was part of a team that won two awards under the 2024 SATNAC conference. Our solution for centralised and automated monitoring of telcoms won us the best Telcom award, and ultimately won us the Best Overall Innovators award for 2024. This was really a challenging hackathon as we were participating with individuals across Southern Africa.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7249491591080341506/",
  },
  {
    title: "Code For Care Hackathon By George Town University",
    role: "Second Place Winner",
    period: "November",
    description:
      "I was part of a team that won second place under the code for care hackathon organised by George Town University in collaboration with Royal Science and Technology Park. The competition was 48 hours and it tackled challenges related to access to HIV-related healthcare for adolescent girls and young women is Eswatini.",
    href: "https://www.linkedin.com/posts/thembinkosi-mkhonta_health-eswatini-activity-7265602367620853760-PZdr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYMNMUBcZHkR-LlbT2T62Ra6F4BJEhiBOo",
  },
  {
    title: "2023 MoMo Hackathon Edition",
    role: "First Place Winner",
    period: "Nov 2023",
    description:
      "We (two) won the hackathon with the solution we built which was in the FinTech space. The challenge was to design and implement any solution that utilised the MoMo API to make financial transactions. We developed a fundraising platform for local citizens with the aim to help them raise funds from the public as well as other charitable organization",
    href: "https://www.linkedin.com/posts/thembinkosi-mkhonta_image-carousel-activity-7139322210732670978-7dhO?utm_source=share&utm_medium=member_desktop&rcm=ACoAADYMNMUBcZHkR-LlbT2T62Ra6F4BJEhiBOo",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="relative">
        <SiteNav />
        <div className="max-w-3xl">
          <div id="reflections">
            <SectionList title="reflections" items={achievementItems} />
          </div>

          <div id="work">
            <SectionList title="work" items={workItems} />
          </div>

          <div id="projects">
            <SectionList
              title="projects"
              items={projectItems}
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
