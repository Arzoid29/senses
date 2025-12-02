"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { MapPin } from "lucide-react"

export default function HairExtensionsPage() {
  const extensionMethods = [
    {
      title: "Strand-by-Strand Extensions",
      description: "Individual extensions for the most natural and undetectable results with seamless integration. Perfect for adding volume and length precisely where it matters most, allowing for 360-degree movement.",
    },
    {
      title: "Tape-In Extensions",
      description: "Quick application tape-in extensions that are comfortable, durable, and semi-permanent. Ideal for a seamless look that lies flat against the head, making them virtually invisible.",
    },
    {
      title: "Clip-In Extensions",
      description: "Removable extensions perfect for special events or daily use with instant length and volume. The ultimate flexibility for your changing style without the commitment of permanent extensions.",
    },
    {
      title: "Hand-Tied Wefts",
      description: "Premium hand-tied weft extensions with a thinner, more flexible base for natural movement. Offers maximum coverage with minimal bulk, perfect for active lifestyles.",
    },
    {
      title: "Extension Maintenance",
      description: "Regular upkeep including adjustments, tightening, and care to keep extensions looking fresh. Essential for preserving the health of your natural hair and extending the life of the hair.",
    },
    {
      title: "Extension Removal",
      description: "Safe and gentle removal of extensions with treatments to restore hair health. We ensure your natural hair remains strong and healthy throughout the transition process.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navigation />

      {/* Header Informativo (Texto centrado, sin imagen de fondo distractora) */}
      <section className="pt-32 pb-12 px-4 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            Premium Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Hair Extensions
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Add instant length, volume, and thickness with our premium hair extension services. 
            We offer a variety of advanced application methods tailored specifically to your lifestyle and hair type.
          </p>
        </div>
      </section>

      {/* Grid de Información (Diseño limpio de tarjetas de texto) */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {extensionMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-1 w-12 bg-primary mb-6 rounded-full"></div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {method.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {method.description}
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
            Experience the Transformation
          </h2>
          <p className="text-background/80 text-lg">
            Ready to enhance your look? Visit our salon for a personalized consultation with our extension specialists.
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