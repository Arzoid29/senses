"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface PortfolioPreview {
  id: string
  category: string
  title: string
  before: string
  after: string
}

const featuredPortfolio: PortfolioPreview[] = [
  {
    id: "mens-hair-replacement-1",
    category: "Men's Hair Replacement",
    title: "Full Hair Restoration",
    before: "/placeholder.svg?key=t4izv",
    after: "/placeholder.svg?key=zvbwt",
  },
  {
    id: "hair-extensions-1",
    category: "Hair Extensions",
    title: "Volume & Length",
    before: "/placeholder.svg?key=rnjnr",
    after: "/placeholder.svg?key=9vkax",
  },
  {
    id: "hair-color-1",
    category: "Hair Color",
    title: "Dimensional Highlights",
    before: "/placeholder.svg?key=fxy5l",
    after: "/placeholder.svg?key=5vyax",
  },
  {
    id: "hair-loss-1",
    category: "Hair Loss Treatment",
    title: "Scalp Health Recovery",
    before: "/placeholder.svg?key=s496c",
    after: "/placeholder.svg?key=vbeah",
  },
]

export default function PortfolioPreview() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4 text-balance">See Our Work in Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore stunning before-and-after transformations showcasing the expertise and artistry of Senses Salon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredPortfolio.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer rounded-lg overflow-hidden bg-card border border-border hover:border-primary transition hover:shadow-md"
            >
              <div className="grid grid-cols-2 gap-0 h-48 overflow-hidden bg-muted">
                <div className="relative">
                  <img
                    src={item.before || "/placeholder.svg"}
                    alt={`${item.title} - Before transformation`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">BEFORE</div>
                </div>
                <div className="relative">
                  <img
                    src={item.after || "/placeholder.svg"}
                    alt={`${item.title} - After transformation`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                    AFTER
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{item.category}</p>
                <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-accent transition">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
          >
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
