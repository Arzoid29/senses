"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-background flex-1 flex items-center justify-center py-20 px-4 sm:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent font-semibold text-lg mb-4 tracking-widest uppercase">Creating Your Image</p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          Awaken Your Senses
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Experience premium hair, skincare, makeup, and wellness services crafted to elevate your natural beauty and
          well-being.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition group"
          >
            Explore Services
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
          </Link>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  )
}
