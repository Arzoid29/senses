"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { MapPin } from "lucide-react"

export default function WigsPage() {
  const wigServices = [
    {
      title: "Wig Consultation",
      description: "Professional consultation to find the perfect wig style, color, and fit for your needs. We provide a private, comfortable environment to discuss your preferences.",
    },
    {
      title: "Human Hair Wigs",
      description: "Premium real hair wigs for the most natural look and styling versatility. Can be colored, styled with heat tools, and treated just like your own hair.",
    },
    {
      title: "Synthetic Hair Wigs",
      description: "Affordable synthetic wigs with heat-defiant options that maintain style between washings. Perfect for those looking for low-maintenance, ready-to-wear solutions.",
    },
    {
      title: "Heat Defiant Wigs",
      description: "Advanced synthetic wigs made with fiber that can withstand heat styling. Enjoy the durability of synthetic with the styling flexibility of human hair.",
    },
    {
      title: "Wig Styling & Customization",
      description: "Professional styling, cutting, and customization to perfectly fit your head shape and personal style. We ensure your wig looks natural and bespoke to you.",
    },
    {
      title: "Wig Care & Maintenance",
      description: "Professional cleaning, conditioning, and maintenance services to extend the life of your wig and keep it looking beautiful and fresh.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navigation />

      {/* Header Informativo */}
      <section className="pt-32 pb-12 px-4 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            Custom Solutions
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Wigs & Hairpieces
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore our premium collection of human hair and synthetic wigs. Find your perfect style with expert fitting,
            customization, and maintenance services designed for comfort and confidence.
          </p>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {wigServices.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-1 w-12 bg-primary mb-6 rounded-full"></div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-24 px-4 bg-foreground text-background">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Find Your Perfect Match
          </h2>
          <p className="text-background/80 text-lg">
            Our experts are here to guide you through the selection process. Visit us for a private fitting and consultation.
          </p>

          <Link
            href="/location"
            className="inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground rounded-full font-bold hover:bg-gray-100 transition-all transform hover:-translate-y-1"
          >
            <MapPin className="w-5 h-5" />
            Visit Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}