"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Scissors, Sparkles, Leaf, Zap } from "lucide-react"
import Link from "next/link"
import { getServices, type Service } from "@/lib/api"

const categories = ["All", "Hair Styling", "Skincare", "Wellness", "Makeup"]
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Hair Styling": Scissors,
  Skincare: Sparkles,
  Wellness: Leaf,
  Makeup: Zap,
}

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [services, setServices] = useState<Service[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServices()
        setServices(data)
      } catch (error) {
        console.log("[v0] Error loading services:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadServices()
  }, [])

  const filteredServices =
    selectedCategory === "All" ? services : services.filter((service) => service.category === selectedCategory)

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-balance">Our Services</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-balance">
            Explore our complete range of premium beauty and wellness services
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-card py-8 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground border border-border hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="flex-1 py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading services...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => {
                const Icon = iconMap[service.category] || Sparkles
                return (
                  <div
                    key={service.id}
                    className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition hover:shadow-lg duration-300"
                  >
                    {/* Service Image */}
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-primary uppercase tracking-wide">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

                      {/* Price and Duration */}
                      <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                        <div>
                          <p className="text-xs text-muted-foreground">Price</p>
                          <p className="font-semibold text-primary">{service.price}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">Duration</p>
                          <p className="font-semibold text-foreground">{service.duration}</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex w-full items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
