"use client"

import Link from "next/link"
import Image from "next/image"
import { Scissors, Sparkles, Leaf, Zap, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Premium cuts, color, and treatments tailored to your unique style.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Skincare",
    description: "Rejuvenating facials and treatments for radiant, healthy skin.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Leaf,
    title: "Wellness",
    description: "Relaxing massages and holistic treatments for complete rejuvenation.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Makeup",
    // CAMBIO AQUÍ: Nueva imagen de aplicación de maquillaje profesional
    description: "Professional makeup application for any occasion.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop",
  },
]

export default function FeaturedServices() {
  return (
    <section id="services" className="bg-neutral-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header de Sección: Minimalista y Elegante */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] text-rose-600 uppercase">
            Our Expertise
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900">
            Signature Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Curated experiences designed to awaken your senses and elevate your natural beauty.
          </p>
        </div>

        {/* Grid de Servicios "Cinemáticos" */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative h-[400px] w-full overflow-hidden rounded-2xl cursor-pointer"
              >
                {/* 1. Imagen de Fondo con Zoom Effect */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* 2. Overlay Degradado (Esencial para leer texto) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* 3. Contenido Flotante */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  
                  {/* Icono Flotante */}
                  <div className="mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Título y Descripción */}
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-200 line-clamp-2 opacity-90 mb-4">
                      {service.description}
                    </p>
                    
                    {/* Link "Fake" visual */}
                    <div className="flex items-center gap-2 text-white text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                      Discover
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA Minimalista */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-900 rounded-full font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300"
          >
            View Full Services
          </Link>
        </div>
      </div>
    </section>
  )
}