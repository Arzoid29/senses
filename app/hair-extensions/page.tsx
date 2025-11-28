"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function HairExtensionsPage() {
  const services = [
    {
      id: "hair-ext-strand-by-strand",
      title: "Strand-by-Strand Extensions",
      description: "Individual extensions for the most natural and undetectable results with seamless integration.",
      price: "$150 - $400",
      duration: "180-240 min",
      image: "/luxury-hair-extensions.jpg",
    },
    {
      id: "hair-ext-tape-in",
      title: "Tape-In Extensions",
      description: "Quick application tape-in extensions that are comfortable, durable, and semi-permanent.",
      price: "$120 - $300",
      duration: "120-150 min",
      image: "/luxury-hair-extensions.jpg",
    },
    {
      id: "hair-ext-clip-in",
      title: "Clip-In Extensions",
      description: "Removable extensions perfect for special events or daily use with instant length and volume.",
      price: "$80 - $200",
      duration: "60-90 min",
      image: "/luxury-hair-extensions.jpg",
    },
    {
      id: "hair-ext-hand-tied",
      title: "Hand-Tied Wefts",
      description: "Premium hand-tied weft extensions with a thinner, more flexible base for natural movement.",
      price: "$200 - $500",
      duration: "180-240 min",
      image: "/luxury-hair-extensions.jpg",
    },
    {
      id: "hair-ext-maintenance",
      title: "Extension Maintenance",
      description: "Regular upkeep including adjustments, tightening, and care to keep extensions looking fresh.",
      price: "$50 - $150",
      duration: "45-90 min",
      image: "/luxury-hair-extensions.jpg",
    },
    {
      id: "hair-ext-removal",
      title: "Extension Removal",
      description: "Safe and gentle removal of extensions with treatments to restore hair health.",
      price: "$50 - $100",
      duration: "45-60 min",
      image: "/luxury-hair-extensions.jpg",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-primary-foreground mb-4 text-balance">Hair Extensions</h1>
          <p className="text-lg text-primary-foreground/90 text-balance">
            Add instant length, volume, and thickness with our premium hair extension services. Choose from multiple
            application methods for your perfect match.
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
