"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function WigsPage() {
  const services = [
    {
      id: "wigs-consultation",
      title: "Wig Consultation",
      description: "Professional consultation to find the perfect wig style, color, and fit for your needs.",
      price: "FREE",
      duration: "45 min",
      image: "/luxury-hair-extensions.jpg",
    },
    {
      id: "wigs-human-hair",
      title: "Human Hair Wigs",
      description: "Premium real hair wigs for the most natural look and styling versatility.",
      price: "$300 - $800",
      duration: "60 min fitting",
      image: "/luxury-hair-extensions.jpg",
    },
    {
      id: "wigs-synthetic",
      title: "Synthetic Hair Wigs",
      description: "Affordable synthetic wigs with heat-defiant options that maintain style between washings.",
      price: "$150 - $400",
      duration: "60 min fitting",
      image: "/luxury-hair-extensions.jpg",
    },
    {
      id: "wigs-heat-defiant",
      title: "Heat Defiant Wigs",
      description: "Advanced synthetic wigs that can withstand heat styling for customized looks.",
      price: "$200 - $500",
      duration: "60 min fitting",
      image: "/luxury-hair-extensions.jpg",
    },
    {
      id: "wigs-styling",
      title: "Wig Styling & Customization",
      description: "Professional styling, cutting, and customization to perfectly fit your head and style.",
      price: "$50 - $150",
      duration: "60-90 min",
      image: "/luxury-hair-extensions.jpg",
    },
    {
      id: "wigs-maintenance",
      title: "Wig Care & Maintenance",
      description: "Professional cleaning, conditioning, and maintenance to keep your wigs looking beautiful.",
      price: "$30 - $75",
      duration: "30-45 min",
      image: "/luxury-hair-extensions.jpg",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-primary-foreground mb-4 text-balance">Wigs & Hairpieces</h1>
          <p className="text-lg text-primary-foreground/90 text-balance">
            Explore our premium collection of human hair and synthetic wigs. Find your perfect style with expert fitting
            and customization.
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
