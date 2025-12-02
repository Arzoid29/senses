"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Palette, Sparkles, Award, Heart } from "lucide-react"

export default function HairColorPage() {
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
      <section className="py-20 px-4 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6 text-center">Why Choose Senses for Color?</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-center max-w-2xl mx-auto">
            Achieving the perfect hair color is both an art and a science. At Senses Salon, our master colorists combine
            technical expertise with artistic vision to deliver stunning results that enhance your natural beauty while
            maintaining the health of your hair.
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

      {/* Informational Content Section (Opcional: Para dar más cuerpo a la página de info) */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
           <div className="flex-1 space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">Our Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe that hair color should be an expression of your personality. Whether you are looking for a natural enhancement or a complete transformation, we take the time to consult with you, understand your lifestyle, and design a color that works for you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Healthy hair is beautiful hair. That's why every color service at Senses includes a conditioning treatment to ensure your hair remains strong and shiny.
              </p>
           </div>
           <div className="flex-1">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
                 {/* Puedes reemplazar esto con una imagen real si tienes una de 'color process' */}
                 <img 
                   src="/luxury-hair-salon-styling.jpg" 
                   alt="Color consultation" 
                   className="object-cover w-full h-full"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Ready for a New Look?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your consultation today and let our expert colorists create the perfect shade for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
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