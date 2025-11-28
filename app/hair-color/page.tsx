"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Palette, Sparkles, Award, Heart } from "lucide-react"

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

  const benefits = [
    {
      icon: Palette,
      title: "Custom Color Formulation",
      description:
        "We create a unique color formula tailored specifically to your hair type, skin tone, and personal style.",
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description: "We use only top-tier, professional-grade color lines that deliver vibrant, long-lasting results.",
    },
    {
      icon: Award,
      title: "Master Colorists",
      description: "Our team includes certified master colorists with years of specialized training and experience.",
    },
    {
      icon: Heart,
      title: "Hair Health Focus",
      description: "We prioritize the integrity of your hair, using bond builders and treatments during the process.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary-foreground/80 uppercase tracking-widest text-sm font-semibold mb-3">
            Professional Color Services
          </p>
          <h1 className="font-serif text-5xl font-bold text-primary-foreground mb-4 text-balance">
            Vibrant, Beautiful Color
          </h1>
          <p className="text-lg text-primary-foreground/90 text-balance">
            Transform your look with professional hair coloring. From subtle highlights to bold transformations, our
            expert colorists will create your perfect shade.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Why Choose Senses for Color?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Achieving the perfect hair color is both an art and a science. At Senses Salon, our master colorists combine
            technical expertise with artistic vision to deliver stunning results that enhance your natural beauty while
            maintaining the health of your hair.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="flex-1 py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Our Color Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our range of professional color services designed to meet your every need.
            </p>
          </div>

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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Ready for a New Look?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your appointment today and let our expert colorists create the perfect shade for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Book Appointment
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
