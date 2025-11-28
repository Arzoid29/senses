"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { CheckCircle, Award, Users, Zap } from "lucide-react"

export default function HairReplacementPage() {
  const services = [
    {
      id: "hair-replacement-consultation",
      title: "Hair Replacement Consultation",
      description: "One-on-one consultation to explore all hair replacement options and find your perfect solution.",
      price: "FREE",
      duration: "45 min",
      image: "/professional-hair-replacement-solutions.jpg",
    },
    {
      id: "hair-replacement-extensions",
      title: "Hair Extensions",
      description: "Strand-by-strand, clip-in, or tape-in extensions for quick volume and length restoration.",
      price: "$120 - $400",
      duration: "120-240 min",
      image: "/professional-hair-replacement-solutions.jpg",
    },
    {
      id: "hair-replacement-toppers",
      title: "Hair Toppers",
      description: "Partial hairpieces that cover thinning areas or bald spots with a natural appearance.",
      price: "$200 - $600",
      duration: "60 min fitting",
      image: "/professional-hair-replacement-solutions.jpg",
    },
    {
      id: "hair-replacement-wigs",
      title: "Full Wigs",
      description: "Complete wig solutions in synthetic or real hair for total hair replacement.",
      price: "$150 - $800",
      duration: "60 min fitting",
      image: "/professional-hair-replacement-solutions.jpg",
    },
    {
      id: "hair-replacement-halos",
      title: "Halos & Hair Bands",
      description: "Non-invasive halo hairpieces for instant added volume and length.",
      price: "$100 - $400",
      duration: "30 min fitting",
      image: "/professional-hair-replacement-solutions.jpg",
    },
    {
      id: "hair-replacement-mens",
      title: "Men's Hair Solutions",
      description: "Modern hair loss solutions for men including hairpieces and advanced treatments.",
      price: "$150 - $700",
      duration: "60 min consultation",
      image: "/professional-hair-replacement-solutions.jpg",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Immediate Results",
      description:
        "See dramatic transformation in a single appointment. No waiting periods or multiple sessions needed.",
    },
    {
      icon: CheckCircle,
      title: "Natural Appearance",
      description: "Premium hair and expert craftsmanship create undetectable, natural-looking results.",
    },
    {
      icon: Award,
      title: "Expert Consultation",
      description: "Work with Joe Tucci and our specialized team to find the perfect solution for your unique needs.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Each solution is custom-tailored to your lifestyle, budget, and aesthetic goals.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary-foreground/80 uppercase tracking-widest text-sm font-semibold mb-3">
            Men's Hair Replacement Specialist
          </p>
          <h1 className="font-serif text-5xl font-bold text-primary-foreground mb-4 text-balance">
            Reclaim Your Confidence
          </h1>
          <p className="text-lg text-primary-foreground/90 text-balance">
            Discover modern, natural-looking hair replacement solutions that restore your appearance and boost your
            confidence. Expert consultation and premium results tailored specifically for men.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Why Choose Senses Salon?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Hair loss affects millions of men, impacting confidence and self-esteem. At Senses Salon, we specialize in
            providing natural-looking, high-quality hair replacement solutions tailored to modern men. Whether you're
            experiencing early hair loss or seeking a dramatic transformation, our expert team has the perfect solution
            for you.
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

      <section className="flex-1 py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Our Hair Replacement Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From extensions to wigs and everything in between, we offer comprehensive hair replacement options for
              every need and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      <section className="py-16 px-4 bg-primary/5 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Ready for Your Transformation?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule your free consultation with Joe Tucci and discover the perfect hair replacement solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Book Consultation
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition"
            >
              View Before & Afters
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
