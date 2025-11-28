"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function HairColorPage() {
  const services = [
    {
      id: "hair-color-full",
      title: "Full Color",
      description: "Complete hair coloring with single shade application for dramatic transformation or coverage.",
      price: "$85 - $120",
      duration: "90-120 min",
      image: "/luxury-hair-salon-styling.jpg",
    },
    {
      id: "hair-color-highlights",
      title: "Highlights & Balayage",
      description: "Selective highlighting, balayage, or ombre for dimension and natural-looking color transitions.",
      price: "$95 - $150",
      duration: "120-150 min",
      image: "/luxury-hair-salon-styling.jpg",
    },
    {
      id: "hair-color-roots",
      title: "Root Touch-Up",
      description: "Target coloring for root growth areas to maintain your color between full appointments.",
      price: "$60 - $85",
      duration: "45-60 min",
      image: "/luxury-hair-salon-styling.jpg",
    },
    {
      id: "hair-color-correction",
      title: "Color Correction",
      description: "Expert correction services for color mishaps or transitioning to a new shade.",
      price: "$120 - $200",
      duration: "120-180 min",
      image: "/luxury-hair-salon-styling.jpg",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-primary-foreground mb-4 text-balance">
            Hair Color Services
          </h1>
          <p className="text-lg text-primary-foreground/90 text-balance">
            Transform your look with professional hair coloring. From subtle highlights to bold transformations, our
            expert colorists will create your perfect shade.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="flex-1 py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition"
              >
                <div className="h-48 bg-muted overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-semibold text-primary">{service.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">{service.duration}</p>
                    </div>
                  </div>
                  <Link
                    href="/booking"
                    className="inline-flex w-full items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
