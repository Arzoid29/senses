"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroCinematic() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* 1. Imagen de Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop" // Foto oscura/elegante
          alt="Salon Ambience"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay oscuro para asegurar que el texto blanco se lea */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 2. Contenido Flotante */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-4">
          
          <p className="text-white/80 font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Redefining Beauty
          </p>
          
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
            Awaken Your <span className="italic text-rose-200">Senses</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            Experience the art of premium hair and wellness. Where luxury meets 
            personal style in an atmosphere designed for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
          
            
            {/* Botón con efecto Glassmorphism */}
            <Link
              href="/services"
              className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>

      {/* Scroll indicator (Opcional) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}