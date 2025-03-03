import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
// import { Badge } from "@/components/ui/badge"

export type FeaturedItem = {
  title: string
  href: string
  date: string
  type: "project" | "research" | "article"
  description: string
}

interface FeaturedContentProps {
  items: FeaturedItem[]
}

export function FeaturedContent({ items }: FeaturedContentProps) {
  const featuredItem = items[0]
  const otherItems = items.slice(1, 3)

  return (
    <div>
      <h2 className="mb-6 text-xl font-medium text-foreground/90 md:text-2xl">
        <span className="text-primary mr-2">*</span> what's new
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Link
            href={featuredItem.href}
            target="_blank"
            className="group block space-y-3 rounded-lg border border-border/40 bg-card/30 p-6 transition-colors hover:border-border hover:bg-card/50"
          >
            <div className="flex items-start justify-between">
              {/* <Badge variant="outline" className="capitalize">
                {featuredItem.type}
              </Badge> */}
              <span className="text-xs text-muted-foreground">
                {featuredItem.date}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                <span className="flex items-center gap-1">
                  {featuredItem.title}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {featuredItem.description}
              </p>
            </div>
          </Link>
        </div>

        <div className="space-y-4">
          {otherItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              className="group block space-y-2 rounded-lg border border-border/40 bg-card/30 p-4 transition-colors hover:border-border hover:bg-card/50"
            >
              <div className="flex items-start justify-between">
                {/* <Badge variant="outline" className="capitalize text-xs">
                  {item.type}
                </Badge> */}
                <span className="text-xs text-muted-foreground">
                  {item.date}
                </span>
              </div>

              <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                <span className="flex items-center gap-1">
                  {item.title}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
