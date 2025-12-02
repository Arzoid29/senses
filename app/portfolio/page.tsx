"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { X, Calendar } from "lucide-react"
import { getPortfolioItems, getPortfolioCategories, type PortfolioItem } from "@/lib/api"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedPortfolio, setSelectedPortfolio] = useState<PortfolioItem | null>(null)
  
  // Estados para datos dinámicos
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
  const [categories, setCategories] = useState<string[]>(["All"])
  const [isLoading, setIsLoading] = useState(true)

  // Carga de datos al montar el componente
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      try {
        const [items, cats] = await Promise.all([
          getPortfolioItems(),
          getPortfolioCategories()
        ])
        
        setPortfolioItems(items)
        // Aseguramos que "All" esté al principio y no haya duplicados
        setCategories(["All", ...Array.from(new Set(cats))])
      } catch (error) {
        console.error("Error loading portfolio data:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  const filteredItems =
    selectedCategory === "All" 
      ? portfolioItems 
      : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <main className="flex flex-col min-h-screen bg-neutral-50">
      <Navigation />

      {/* 1. Header Minimalista */}
      <section className="pt-24 pb-12 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] text-rose-600 uppercase animate-in fade-in slide-in-from-bottom-2">
            The Evidence
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 animate-in fade-in slide-in-from-bottom-3 delay-100">
            Transformation Gallery
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-4 delay-200">
            Real results for real people. Browse our collection of life-changing makeovers.
          </p>
        </div>
      </section>

      {/* 2. Filtros Estilo "Píldora" (Sticky) */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex justify-start md:justify-center gap-2 min-w-max px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-rose-600 text-white shadow-md transform scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Grid de Galería */}
      <section className="py-12 md:py-16 flex-1 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto mb-4"></div>
              <p className="text-gray-500">Loading gallery...</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No items found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="group cursor-pointer flex flex-col gap-3 animate-in fade-in zoom-in duration-500"
                  onClick={() => setSelectedPortfolio(item)}
                >
                  {/* Tarjeta de Imagen (Split View) */}
                  <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                    <div className="absolute inset-0 grid grid-cols-2 gap-0.5 bg-white">
                      {/* Before */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.before}
                          alt={`Before ${item.title}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.jpg" }}
                        />
                        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full">
                          BEFORE
                        </div>
                      </div>
                      {/* After */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.after}
                          alt={`After ${item.title}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.jpg" }}
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-rose-600 text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                          AFTER
                        </div>
                      </div>
                    </div>
                    
                    {/* Overlay de "Ver Detalles" */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white border border-white/50 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">
                        View Details
                      </span>
                    </div>
                  </div>

                  {/* Texto de la tarjeta */}
                  <div className="px-1">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 group-hover:text-rose-600 transition-colors">
                      {item.category}
                    </p>
                    <h3 className="text-lg font-serif font-medium text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. Modal Inmersivo (Lightbox) */}
      {selectedPortfolio && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPortfolio(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedPortfolio(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors md:hidden"
            >
              <X size={20} />
            </button>

            {/* A. Comparación Visual (Ocupa 60-70% en Desktop) */}
            <div className="relative h-[40vh] md:h-auto md:w-[65%] grid grid-cols-2 gap-0.5 bg-gray-100">
              <div className="relative h-full">
                <Image
                  src={selectedPortfolio.before}
                  alt="Before Transformation"
                  fill
                  className="object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.jpg" }}
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                  BEFORE
                </div>
              </div>
              <div className="relative h-full">
                <Image
                  src={selectedPortfolio.after}
                  alt="After Transformation"
                  fill
                  className="object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.jpg" }}
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-rose-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg">
                  AFTER
                </div>
              </div>
            </div>

            {/* B. Detalles (Sidebar en Desktop) */}
            <div className="flex-1 flex flex-col p-6 md:p-8 overflow-y-auto bg-white">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-2">
                    {selectedPortfolio.category}
                  </p>
                  <h2 className="text-3xl font-serif font-bold text-gray-900 leading-tight">
                    {selectedPortfolio.title}
                  </h2>
                </div>
                {/* Close Button Desktop */}
                <button
                  onClick={() => setSelectedPortfolio(null)}
                  className="hidden md:block text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="prose prose-sm text-gray-600 mb-8 flex-grow">
                <p className="leading-relaxed text-base">
                  {selectedPortfolio.description}
                </p>
                <p className="mt-4 text-sm text-gray-400 italic">
                  * Results may vary based on individual hair type and condition.
                </p>
              </div>

              <div className="space-y-3 mt-auto pt-6 border-t border-gray-100">
                
                <button
                  onClick={() => setSelectedPortfolio(null)}
                  className="w-full py-3 text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors"
                >
                  Close Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}