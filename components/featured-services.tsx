"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Scissors, Sparkles, Leaf, Zap, ArrowRight, Layers } from "lucide-react"
import { getServices, type Service } from "@/lib/api"

// Mapeo de iconos basado en categorías (igual que antes)
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Hair Styling": Scissors,
  "Cut & Style": Scissors,
  "Hair Color": Scissors,
  "Hair Extensions": Scissors,
  "Hair Replacement": Scissors,
  "Wigs for Men": Scissors,
  "Wigs for Women": Scissors,
  "Skincare": Sparkles,
  "Waxing": Sparkles,
  "Wellness": Leaf,
  "Treatments": Leaf,
  "Massage": Leaf,
  "Makeup": Zap,
  "Wedding": Sparkles,
}

export default function FeaturedServices() {
  const [services, setServices] = useState<Service[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServices()
        // Tomamos los primeros 4 servicios para mostrarlos en el home
        setServices(data.slice(0, 4))
      } catch (error) {
        console.error("Error loading featured services:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadServices()
  }, [])

  return (
    <section id="services" className="bg-neutral-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header de Sección */}
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

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <p>Services currently unavailable.</p>
          </div>
        ) : (
          /* Grid de Servicios */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => {
              const Icon = iconMap[service.category] || Layers
              
              return (
                <Link
                  key={service.id}
                  href="/services" // CAMBIO: Ahora redirige a /services general
                  className="group relative h-[400px] w-full overflow-hidden rounded-2xl cursor-pointer"
                >
                  {/* 1. Imagen de Fondo */}
                  <div className="absolute inset-0 bg-gray-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>

                  {/* 2. Overlay Degradado */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* 3. Contenido Flotante */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    
                    {/* Icono */}
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
                      
                      {/* Link Visual */}
                      <div className="flex items-center gap-2 text-white text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                        View All Services
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        {/* CTA Inferior */}
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