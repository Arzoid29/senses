"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Scissors, Sparkles, User, Zap } from "lucide-react"

export default function HairCutPage() {
  const services = [
    {
      id: "womens-cut",
      title: "Women's Cut & Style",
      description: "A complete transformation starting with a consultation, luxury wash, precision cut, and a professional blowout finish.",
      price: "$85 - $125",
      duration: "60-75 min",
    },
    {
      id: "mens-cut",
      title: "Men's Precision Cut",
      description: "Tailored barbering techniques mixed with salon precision. Includes scalp massage, detailed edging, and styling.",
      price: "$45 - $65",
      duration: "45 min",
    },
    {
      id: "blowout",
      title: "Signature Blowout",
      description: "Perfect for events or a weekly treat. Wash and professional brush styling for volume, smoothness, and shine.",
      price: "$55 - $85",
      duration: "45-60 min",
    },
    {
      id: "curly-cut",
      title: "Curly & Textured Cut",
      description: "Specialized cutting techniques designed to honor your natural curl pattern, reduce frizz, and enhance definition.",
      price: "$95 - $150",
      duration: "90 min",
    },
  ]

  const benefits = [
    {
      icon: Scissors,
      title: "Precision Techniques",
      description:
        "We analyze your hair's natural movement and face shape to create a cut that grows out beautifully.",
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description: "Every cut includes a relaxing scalp massage and premium product application tailored to your hair type.",
    },
    {
      icon: User,
      title: "Personalized Consultation",
      description: "We listen first. We discuss your daily routine to ensure your new style is effortless to maintain at home.",
    },
    {
      icon: Zap,
      title: "Master Stylists",
      description: "Our team undergoes continuous training in the latest cutting trends, from classic bobs to modern layering.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary-foreground/80 uppercase tracking-widest text-sm font-semibold mb-3">
            Precision & Artistry
          </p>
          <h1 className="font-serif text-5xl font-bold text-primary-foreground mb-4 text-balance">
            The Perfect Cut
          </h1>
          <p className="text-lg text-primary-foreground/90 text-balance">
            More than just a trim—it's the foundation of your style. Experience precision cutting tailored specifically to your face shape, texture, and lifestyle.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Why Choose Senses for Your Cut?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            At Senses Salon, we believe a great haircut is a collaboration. Before we pick up the scissors, we listen. 
            Our master stylists combine technical expertise with artistic vision to deliver a look that is not only 
            beautiful when you leave the salon but effortless to maintain at home.
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Ready for a Transformation?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need a maintenance trim or a completely new look, our expert stylists are ready to welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}