"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { CheckCircle, Award, Users, Zap, MapPin, Shield } from "lucide-react"

export default function MensHairReplacementPage() {
  const solutions = [
    {
      title: "Custom Hair Systems",
      description: "State-of-the-art hair systems designed to match your exact density, texture, and gray percentage. Virtually undetectable and styled to your age and preference.",
    },
    {
      title: "Non-Surgical Bonding",
      description: "Advanced bonding techniques that secure the system to your scalp , allowing you to shower, swim, and exercise without fear of shifting or detachment.",
    },
    {
      title: "System Maintenance",
      description: "Regular professional service to clean, re-bond, and style your system. We ensure your scalp remains healthy and your look stays fresh and natural.",
    },
    {
      title: "Scalp Health & Prep",
      description: "A healthy foundation is key. We treat the scalp to ensure optimal bonding conditions and long-term skin health under your replacement system.",
    },
    {
      title: "The 'Graduate' Transition",
      description: "For men who want a subtle change, we offer a graduated plan to restore hair density over time, making the transformation appear completely natural to peers.",
    },
    {
      title: "Private Consultation",
      description: "A discreet, one-on-one session with Joe Tucci to analyze your hair loss pattern and design a custom roadmap for your hair restoration.",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Active Lifestyle Proof",
      description:
        "Swim, run, and shower with confidence. Our systems are designed for the modern, active man.",
    },
    {
      icon: Shield, // Cambiado a Shield para denotar seguridad/privacidad
      title: "100% Undetectable",
      description: "Seamless hairlines and expert blending make our systems invisible, even up close.",
    },
    {
      icon: Award,
      title: "Men's Specialist",
      description: "Specialized strictly in male hair loss patterns, receding hairlines, and age-appropriate density.",
    },
    {
      icon: Users,
      title: "Private & Discrete",
      description: "We understand the sensitivity of hair loss. Your consultation and services are conducted with utmost privacy.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screenbg-gradient-to-r from-primary to-primary/80 ">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80  flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-200 uppercase tracking-widest text-sm font-semibold mb-3">
            Advanced Hair Restoration
          </p>
          <h1 className="font-serif text-5xl font-bold text-white mb-4 text-balance">
            Men's Hair Replacement
          </h1>
          <p className="text-lg text-slate-300 text-balance max-w-2xl mx-auto">
            Restore your look, your hairline, and your confidence without surgery. 
            Westchester's premier non-surgical solutions for men.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6 text-center">The Senses Standard</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-center max-w-2xl mx-auto">
            Hair loss is more than just aesthetics; it's about how you feel facing the world. 
            We specialize in creating <strong>natural, age-appropriate looks</strong> that don't look like "wigs." 
            They look like <em>your</em> hair.
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
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Our Process & Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach to men's hair restoration, from the initial design to monthly maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-1 w-12 bg-primary mb-6 rounded-full group-hover:w-20 transition-all"></div>
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
          <h2 className="font-serif text-4xl font-bold mb-6">Take the First Step</h2>
          <p className="text-lg text-background/80 mb-10 max-w-2xl mx-auto">
            Stop worrying about hair loss. Schedule a private, no-obligation consultation with Joe Tucci today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-background text-background rounded-full font-bold hover:bg-background/10 transition-all"
            >
              See Real Results
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}