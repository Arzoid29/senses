"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

interface PortfolioItem {
  id: string
  category: string
  title: string
  before: string
  after: string
  description: string
}

const portfolioData: PortfolioItem[] = [
  {
    id: "mens-hair-replacement-1",
    category: "Men's Hair Replacement",
    title: "Full Hair Restoration",
    before: "/before-hair-loss-men.jpg",
    after: "/after-full-hair-restoration-men.jpg",
    description: "Complete hair restoration using premium hair replacement system",
  },
  {
    id: "mens-hair-replacement-2",
    category: "Men's Hair Replacement",
    title: "Hairline Enhancement",
    before: "/before-receding-hairline.jpg",
    after: "/after-hairline-restoration.jpg",
    description: "Natural-looking hairline enhancement for mature men",
  },
  {
    id: "hair-color-1",
    category: "Hair Color",
    title: "Dimensional Highlights",
    before: "/before-natural-hair.jpg",
    after: "/after-dimensional-blonde-highlights.jpg",
    description: "Multi-dimensional highlights for depth and dimension",
  },
  {
    id: "hair-color-2",
    category: "Hair Color",
    title: "Color Correction",
    before: "/before-incorrect-hair-color.jpg",
    after: "/after-corrected-rich-brunette.jpg",
    description: "Professional color correction to achieve desired tone",
  },
  {
    id: "hair-extensions-1",
    category: "Hair Extensions",
    title: "Volume & Length",
    before: "/before-thin-short-hair.jpg",
    after: "/after-long-thick-hair-extensions.jpg",
    description: "Hand-tied weft extensions for natural volume and length",
  },
  {
    id: "hair-extensions-2",
    category: "Hair Extensions",
    title: "Fullness Transformation",
    before: "/before-sparse-hair.jpg",
    after: "/after-full-dense-hair.jpg",
    description: "Tape-in extensions for lasting fullness and shine",
  },
  {
    id: "hair-loss-1",
    category: "Hair Loss Treatment",
    title: "Scalp Health Recovery",
    before: "/before-thinning-scalp.jpg",
    after: "/after-healthy-thick-scalp.jpg",
    description: "Professional treatment program for scalp health",
  },
  {
    id: "wigs-1",
    category: "Wigs",
    title: "Premium Human Hair Wig",
    before: "/before-hair-loss.jpg",
    after: "/placeholder.svg?height=400&width=400",
    description: "100% human hair wig for natural appearance",
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null)

  const categories = ["All", ...Array.from(new Set(portfolioData.map((item) => item.category)))]

  const filteredItems =
    selectedCategory === "All" ? portfolioData : portfolioData.filter((item) => item.category === selectedCategory)

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-background py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our collection of transformations showcasing the artistry and expertise of Senses Salon. Each
            before-and-after tells a story of confidence, beauty, and professional care.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-b border-border py-8 bg-card">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-sm font-medium text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-background border border-border text-foreground hover:border-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-16 flex-1">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedPortfolio(item)}>
                <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-2 gap-0 h-64 overflow-hidden">
                    <div className="relative bg-muted">
                      <img
                        src={item.before || "/placeholder.svg"}
                        alt={`${item.title} - Before`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative bg-muted">
                      <img
                        src={item.after || "/placeholder.svg"}
                        alt={`${item.title} - After`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                        AFTER
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{item.category}</p>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPortfolio && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPortfolio(null)}
        >
          <div
            className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedPortfolio(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              {/* Before/After Comparison */}
              <div className="grid grid-cols-2 gap-0 h-96">
                <div className="relative bg-muted">
                  <img
                    src={selectedPortfolio.before || "/placeholder.svg"}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative bg-muted">
                  <img
                    src={selectedPortfolio.after || "/placeholder.svg"}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-accent text-accent-foreground px-3 py-2 rounded text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 bg-background border-t border-border">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  {selectedPortfolio.category}
                </p>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-3">{selectedPortfolio.title}</h2>
                <p className="text-base text-foreground mb-6">{selectedPortfolio.description}</p>

                <div className="flex gap-4">
                  <Link
                    href="/booking"
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded transition-colors text-center"
                  >
                    Book Appointment
                  </Link>
                  <button
                    onClick={() => setSelectedPortfolio(null)}
                    className="flex-1 bg-muted hover:bg-muted/80 text-foreground font-semibold py-3 rounded transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
