"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface PortfolioPreview {
  id: string
  category: string
  title: string
  before: string
  after: string
}

const featuredPortfolio: PortfolioPreview[] = [
  {
    id: "mens-hair-replacement",
    category: "Men's Hair Replacement",
    title: "Confidence Restored",
    before: "https://images.unsplash.com/photo-1520338661084-680395057c93?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1620331317312-74b88bf40907?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: "hair-extensions",
    category: "Hair Extensions",
    title: "Volume & Length",
    before: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "hair-color",
    category: "Color Correction",
    title: "Dimensional Blonde",
    // CAMBIO REALIZADO AQUÍ: Nuevas imágenes funcionales
    before: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop", // Cabello más oscuro/natural
    after: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=2061&auto=format&fit=crop", // Balayage Rubio
  },
  {
    id: "hair-treatment",
    category: "Keratin Treatment",
    title: "Smooth & Shine",
    before: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2080&auto=format&fit=crop",
  },
]

export default function PortfolioPreview() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header con estilo Editorial */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-rose-600 uppercase mb-3">
            Real Results
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Transformations
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Witness the artistry of Senses Salon. We don't just change hair; we restore confidence and elevate style.
          </p>
        </div>

        {/* Grid de Transformaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredPortfolio.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col gap-4 cursor-pointer"
            >
              {/* Contenedor de Imágenes (Split View) */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                <div className="absolute inset-0 grid grid-cols-2 gap-0.5 bg-white">
                  
                  {/* LADO IZQUIERDO: BEFORE */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={item.before}
                      alt="Before"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                      <span className="text-[10px] font-bold text-white tracking-wider">BEFORE</span>
                    </div>
                  </div>

                  {/* LADO DERECHO: AFTER */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={item.after}
                      alt="After"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    {/* Overlay sutil al hacer hover para resaltar el resultado */}
                    <div className="absolute inset-0 bg-rose-500/0 transition-colors group-hover:bg-rose-500/10 mix-blend-overlay" />
                    
                    <div className="absolute bottom-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                      <span className="text-[10px] font-bold text-rose-600 tracking-wider">AFTER</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Texto debajo de la tarjeta */}
              <div className="px-1 text-center group-hover:text-rose-600 transition-colors">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                  {item.category}
                </p>
                <h3 className="font-serif text-xl font-medium text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}