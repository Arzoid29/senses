"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getPortfolioItems, type PortfolioItem } from "@/lib/api"

export default function PortfolioPreview() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        const data = await getPortfolioItems()
        // Tomamos solo los primeros 4 items para la vista previa del home
        setPortfolioItems(data.slice(0, 4))
      } catch (error) {
        console.error("Error loading portfolio preview:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadPortfolio()
  }, [])

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

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64 mb-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
          </div>
        ) : portfolioItems.length === 0 ? (
          <div className="text-center py-10 text-gray-500 mb-16">
            <p>Portfolio items currently unavailable.</p>
          </div>
        ) : (
          /* Grid de Transformaciones */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {portfolioItems.map((item) => (
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
                        alt={`Before ${item.title}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.jpg" }}
                      />
                      <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                        <span className="text-[10px] font-bold text-white tracking-wider">BEFORE</span>
                      </div>
                    </div>

                    {/* LADO DERECHO: AFTER */}
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={item.after}
                        alt={`After ${item.title}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.jpg" }}
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
        )}

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