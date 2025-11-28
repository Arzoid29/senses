"use client"

import Link from "next/link"
import { Scissors, Sparkles, Leaf, Zap } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Premium cuts, color, and treatments tailored to your unique style.",
    image: "/luxury-hair-salon-styling.jpg",
  },
  {
    icon: Sparkles,
    title: "Skincare",
    description: "Rejuvenating facials and treatments for radiant, healthy skin.",
    image: "/luxury-skincare-facial.jpg",
  },
  {
    icon: Leaf,
    title: "Wellness",
    description: "Relaxing massages and holistic treatments for complete rejuvenation.",
    image: "/spa-wellness-massage.jpg",
  },
  {
    icon: Zap,
    title: "Makeup",
    description: "Professional makeup application for any occasion.",
    image: "/professional-makeup-artistry.jpg",
  },
]

export default function FeaturedServices() {
  return (
    <section id="services" className="bg-card py-20 px-4 sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Signature Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover our carefully curated services designed to enhance your natural beauty and wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-background rounded-lg overflow-hidden border border-border hover:border-primary transition hover:shadow-lg duration-300"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex text-primary font-medium hover:text-primary/80 transition text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
