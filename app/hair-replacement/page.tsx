"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { CheckCircle, Award, Users, Zap, MapPin } from "lucide-react"

export default function HairReplacementPage() {
  const solutions = [
    {
      title: "Hair Replacement Consultation",
      description: "One-on-one consultation to explore all hair replacement options and find your perfect solution. We discuss your lifestyle, budget, and desired look in a private setting.",
    },
    {
      title: "Hair Extensions",
      description: "Strand-by-strand, clip-in, or tape-in extensions for quick volume and length restoration. Ideal for early stages of thinning or adding density.",
    },
    {
      title: "Hair Toppers",
      description: "Partial hairpieces designed to cover thinning areas or bald spots with a completely natural appearance. Seamlessly integrates with your existing hair.",
    },
    {
      title: "Full Wigs",
      description: "Complete wig solutions in synthetic or real hair for total hair replacement. Custom-fitted for maximum comfort and styled to your preference.",
    },
    {
      title: "Halos & Hair Bands",
      description: "Non-invasive halo hairpieces for instant added volume and length without clips or glue. Perfect for occasional wear or sensitive scalps.",
    },
    {
      title: "Men's Hair Solutions",
      description: "Modern, non-surgical hair loss solutions for men. We create undetectable systems that allow you to swim, shower, and live your life with confidence.",
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
    <main className="flex flex-col min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
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
            confidence. Expert consultation and premium results tailored specifically for you.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6 text-center">Why Choose Senses Salon?</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-center max-w-2xl mx-auto">
            Hair loss affects millions, impacting confidence and self-esteem. At Senses Salon, we specialize in
            providing natural-looking, high-quality hair replacement solutions. Whether you're
            experiencing early hair loss or seeking a dramatic transformation, our expert team has the perfect solution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="flex gap-4 p-6 bg-card rounded-lg border border-border shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="flex-1 py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Our Hair Replacement Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From extensions to wigs and everything in between, we offer comprehensive hair replacement options for
              every need and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-1 w-12 bg-primary mb-6 rounded-full"></div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Ready for Your Transformation?</h2>
          <p className="text-lg text-background/80 mb-10 max-w-2xl mx-auto">
            Schedule your consultation with Joe Tucci and discover the perfect hair replacement solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/location"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-background text-foreground rounded-full font-bold hover:bg-gray-100 transition-all transform hover:-translate-y-1"
            >
              Visit Us
              <MapPin className="w-5 h-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-background text-background rounded-full font-bold hover:bg-background/10 transition-all"
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