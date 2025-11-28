"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, MapPin } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const mainServices = [
    { label: "Hair Color", href: "/hair-color" },
    { label: "Extensions", href: "/hair-extensions" }, // Acorté "Hair Extensions" para mejor balance
    { label: "Treatments", href: "/hair-loss-treatment" }, // Acorté "Loss Treatment"
    { label: "Replacement", href: "/hair-replacement" },
    { label: "Wigs", href: "/wigs" },
  ]

  const utilityLinks = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Location", href: "/location" },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav
      className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300"
      role="navigation"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. LOGO (Izquierda) */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center shadow-md group-hover:bg-rose-600 transition-colors duration-300">
                <span className="font-serif font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-gray-900 leading-none tracking-tight">Senses</span>
                <span className="text-[10px] text-gray-400 tracking-[0.25em] font-medium uppercase mt-0.5">Salon</span>
              </div>
            </Link>
          </div>

          {/* 2. SERVICIOS PRINCIPALES (Centro Absoluto) - Solo visible en pantallas grandes */}
          <div className="hidden xl:flex items-center justify-center space-x-8">
            {mainServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive(service.href) ? "text-gray-900" : "text-gray-500 hover:text-rose-600"
                }`}
              >
                {service.label}
                {/* Indicador de activo: Un punto sutil en lugar de subrayado */}
                {isActive(service.href) && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* 3. UTILIDADES + CTA (Derecha) */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* Links Secundarios (Texto más pequeño y gris) */}
            <div className="flex items-center gap-6 mr-2">
              {utilityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Separador Vertical */}
            <div className="h-8 w-px bg-gray-200"></div>

            {/* Botón CTA */}
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-rose-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Botón Menú Móvil (Visible en pantallas medianas hacia abajo) */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Versión móvil del botón Book */}
            <Link
              href="/booking"
              className="sm:hidden inline-flex px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-full"
            >
              Book
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MENÚ MÓVIL OPTIMIZADO --- */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="pt-24 px-6 pb-6 h-full overflow-y-auto flex flex-col">
            
            {/* Botón Cerrar Flotante */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>

            <div className="space-y-8">
              {/* Sección Servicios */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Menu</p>
                <div className="space-y-3">
                  {mainServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-serif font-medium text-gray-900 hover:text-rose-600 transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sección Utilidades */}
              <div className="border-t border-gray-100 pt-8">
                <div className="grid grid-cols-2 gap-4">
                  {utilityLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-medium text-gray-500 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Info de contacto rápida en móvil */}
              <div className="mt-auto pt-8 border-t border-gray-100">
                 <div className="flex items-center gap-3 text-gray-500 mb-6">
                    <MapPin size={18} />
                    <span className="text-sm">123 Beauty Lane, Luxury City</span>
                 </div>
                 <Link
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 bg-gray-900 text-white text-center font-bold rounded-xl text-lg hover:bg-rose-600 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}