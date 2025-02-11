import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export type WhatsNewItem = {
  title: string
  href: string
  date: string
  type: "project" | "research" | "article"
  description: string
}

type WhatsNewProps = {
  items: WhatsNewItem[]
}

export function WhatsNew({ items }: WhatsNewProps) {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-accent">
        <span className="text-accent mr-2">*</span> what&apos;s new
      </h2>
      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.title} className="group">
            <Link href={item.href} target="_blank">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-200">
                  <span className="flex flex-row items-center">
                    {item.title}{" "}
                    <ArrowUpRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </h3>
                <span className="text-sm text-gray-400">{item.date}</span>
              </div>
              <p className="text-sm text-gray-400 mb-2">{item.type}</p>
              <p className="text-gray-300">{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
