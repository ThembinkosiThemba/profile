import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="Thembinkosi Mkhonta" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          mbabane, eswatini
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          <Link
            href={"https://beta.tempdb.xyz"}
            target="_blank"
            className="flex flex-row"
          >
            creator @
            <span className="flex flex-row hover:text-accent transition-colors duration-200">
              tempdb-labs{" "}
              <ArrowUpRight className="w-4 h-4 ransition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        i&apos;m a software engineer and i have a deep interest in understanding
        the core technologies and software that exists today, and how they came
        to be. i enjoy researching and learning about data intensive systems as
        well as cloud infrastructure and how to offer them in the best way
        possible to the public.
      </p>
    </header>
  )
}
