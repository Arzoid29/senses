"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, MapPin } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const mainServices = [
    { label: "Hair Color", href: "/hair-color" },
    { label: "Extensions", href: "/hair-extensions" },
    { label: "Treatments", href: "/hair-loss-treatment" },
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

          {/* 2. SERVICIOS PRINCIPALES (Centro) */}
          <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8">
            {mainServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive(service.href) ? "text-gray-900" : "text-gray-500 hover:text-rose-600"
                }`}
              >
                {service.label}
                {isActive(service.href) && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* 3. UTILIDADES + CTA (Derecha) */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 xl:gap-6 mr-2">
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
            <div className="h-8 w-px bg-gray-200"></div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-rose-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          {/* 4. MENÚ MÓVIL */}
          <div className="flex items-center gap-4 lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu size={28} />
                </button>
              </SheetTrigger>
              
              {/* Eliminamos el padding por defecto (p-0) para controlar el layout completo */}
              <SheetContent side="right" className="w-full sm:w-[400px] p-0 flex flex-col bg-white border-l border-gray-100">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">Navigation links</SheetDescription>

                {/* Cabecera del Menú */}
                <div className="p-6 pt-12 pb-8 border-b border-gray-50">
                   <div className="flex items-center gap-3 mb-8">
                      <div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                        <span className="font-serif font-bold text-lg">S</span>
                      </div>
                      <span className="font-serif text-xl font-bold text-gray-900">Senses Salon</span>
                   </div>
                   
                   {/* Enlaces Principales Grandes */}
                   <div className="flex flex-col gap-6">
                    {mainServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-3xl font-serif font-medium transition-colors ${
                          isActive(service.href) ? "text-rose-600" : "text-gray-900 hover:text-rose-600"
                        }`}
                      >
                        {service.label}
                      </Link>
                    ))}
                   </div>
                </div>

                {/* Footer del Menú (Enlaces secundarios y contacto) */}
                <div className="mt-auto bg-gray-50 p-6 space-y-8">
                  {/* Grid de enlaces secundarios */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {utilityLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-900"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Información de Contacto */}
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3 text-gray-600">
                        <MapPin size={16} className="text-rose-600" />
                        <span className="text-sm">5 Old Post Rd S, Croton-on-Hudson</span>
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="block w-full py-4 bg-gray-900 text-white text-center font-bold rounded-xl text-lg hover:bg-rose-600 transition-all shadow-lg"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}