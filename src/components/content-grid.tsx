import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getPosts } from "@/lib/blog"

export type ContentItem = {
  title: string
  href: string
  role?: string
  period?: string
  description: string
}

interface ContentGridProps {
  items?: ContentItem[]
  variant?: "default" | "compact" | "links"
}

export function ContentGrid({
  items = [],
  variant = "default",
}: ContentGridProps) {
  if (variant === "compact") {
    const posts = getPosts()
      .sort(
        (a, b) =>
          new Date(b.metadata.date).getTime() -
          new Date(a.metadata.date).getTime()
      )
      .slice(0, 4)

    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-lg border border-border/40 bg-card/30 p-4 transition-colors hover:border-border hover:bg-card/50"
          >
            <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
              {post.metadata.title}
            </h3>
            <span className="mt-1 text-xs text-muted-foreground">
              {formatDate(post.metadata.date)}
            </span>
          </Link>
        ))}
      </div>
    )
  }

  if (variant === "links") {
    // Placeholder for links section
    const links = [
      { title: "Twitter", href: "https://twitter.com/username" },
      { title: "GitHub", href: "https://github.com/username" },
      { title: "LinkedIn", href: "https://linkedin.com/in/username" },
      { title: "Email", href: "mailto:email@example.com" },
      {
        title: "CV",
        href: "https://drive.google.com/file/d/1vCtEqgV55ExyiB6mvYCUklf7GoIq6kWK/view?usp=sharing",
      },
    ]

    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target="_blank"
            className="group flex items-center justify-between rounded-lg border border-border/40 bg-card/30 p-4 transition-colors hover:border-border hover:bg-card/50"
          >
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
              {link.title}
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-6">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          target="_blank"
          className="group block space-y-2 rounded-lg border border-border/40 bg-card/30 p-5 transition-colors hover:border-border hover:bg-card/50"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-200 sm:text-lg">
              <span className="flex items-center gap-1">
                {item.title}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </h3>
            {item.period && (
              <span className="mt-1 text-xs text-muted-foreground sm:mt-0">
                {item.period}
              </span>
            )}
          </div>

          {item.role && (
            <p className="text-xs text-muted-foreground">{item.role}</p>
          )}

          <p className="text-sm text-muted-foreground">{item.description}</p>
        </Link>
      ))}
    </div>
  )
}

function formatDate(dateString: string) {
  return new Date(dateString)
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .toLowerCase()
}
