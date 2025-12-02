"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { MapPin } from "lucide-react"

export default function HairLossTreatmentPage() {
  const treatments = [
    {
      title: "Complimentary Scalp Evaluation",
      description: "Free professional assessment of your scalp and hair condition to determine best treatment options. We analyze your scalp health to create a personalized plan.",
    },
    {
      title: "Detox Scalp Treatment",
      description: "Deep cleansing and detoxifying treatment to remove buildup and promote healthy hair growth. Essential for clearing follicles and creating an optimal environment for growth.",
    },
    {
      title: "Trichology Treatment",
      description: "Specialized hair and scalp treatment using trichology expertise to address the root causes of hair loss. A scientific approach to hair health.",
    },
    {
      title: "Moisture Infusion Treatment",
      description: "Intensive moisture therapy to strengthen and revitalize thinning or damaged hair. Restores elasticity and shine to brittle strands.",
    },
    {
      title: "Ultra Conditioning Treatment",
      description: "Advanced conditioning using ultrasound and infrared light technology for maximum penetration. Deeply repairs hair structure from the inside out.",
    },
    {
      title: "Precision Scalp Cut",
      description: "Specialized cutting technique combined with scalp therapy for hair loss management. Designed to maximize volume and coverage while maintaining style.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navigation />

      {/* Header Informativo */}
      <section className="pt-32 pb-12 px-4 bg-muted/30 border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            Advanced Care
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Hair Loss Treatments
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Address hair loss with professional treatments and expert care. Our specialized therapies help strengthen
            and restore your hair, promoting a healthy scalp environment for regrowth.
          </p>
        </div>
      </section>

      {/* Grid de Tratamientos */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-1 w-12 bg-primary mb-6 rounded-full"></div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {treatment.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {treatment.description}
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
            Start Your Restoration Journey
          </h2>
          <p className="text-background/80 text-lg">
            Don't wait to address hair loss. Visit our salon for a professional evaluation and personalized treatment plan.
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