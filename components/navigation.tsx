"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const mainServices = [
    { label: "Hair Color", href: "/hair-color" },
    { label: "Hair Extensions", href: "/hair-extensions" },
    { label: "Loss Treatment", href: "/hair-loss-treatment" },
    { label: "Replacement", href: "/hair-replacement" },
    { label: "Wigs", href: "/wigs" },
  ]

  const navLinks = [
    { label: "Portfolio", href: "/portfolio" },
    // { label: "Referrals", href: "/referrals" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Location", href: "/location" },
  ]

  return (
    <nav
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Aumenté un poco la altura a h-20 para que respire */}
          
          {/* 1. SECCIÓN IZQUIERDA: LOGO */}
          {/* Usamos 'flex-1' para empujar y asegurar el centrado del bloque siguiente */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition group" aria-label="Senses Salon home">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform" aria-hidden="true">
                <span className="text-primary-foreground font-serif font-bold text-xl">S</span>
              </div>
              <div className="hidden lg:block"> {/* Ocultamos texto en tablet vertical si es necesario, o lo dejamos sm:block */}
                <div className="font-serif font-bold text-lg text-foreground leading-none">Senses</div>
                <div className="text-[10px] text-muted-foreground tracking-[0.2em] font-medium">SALON</div>
              </div>
            </Link>
          </div>

          {/* 2. SECCIÓN CENTRAL: SERVICIOS PRINCIPALES */}
          {/* Esto centra matemáticamente los servicios en la pantalla */}
          <div className="hidden xl:flex items-center justify-center gap-6">
            {mainServices.map((service) => (
              <Link
                key={service.label}
                href={service.href}
                className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors relative group py-2"
              >
                {service.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* 3. SECCIÓN DERECHA: LINKS SECUNDARIOS + CTA */}
          <div className="flex-1 flex justify-end items-center gap-6">
            
            {/* Links Secundarios (About, Contact, etc) - Visibles solo en pantallas grandes */}
            <div className="hidden lg:flex items-center gap-5 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Separador vertical pequeño (opcional) */}
            <div className="hidden lg:block w-px h-6 bg-border mx-2"></div>

            <Link
              href="/booking"
              className="hidden sm:inline-flex px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition shadow-sm hover:shadow"
            >
              Book Now
            </Link>

            {/* Botón Menú Móvil */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 -mr-2 text-foreground hover:bg-accent rounded-md transition"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* --- MENÚ MÓVIL --- */}
        {isOpen && (
          <div className="xl:hidden border-t border-border bg-background animate-in slide-in-from-top-2 fade-in duration-200">
            <div className="px-4 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
              
              {/* Grupo 1: Servicios (Destacados en Móvil) */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-2">Services</p>
                {mainServices.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block px-2 py-1 text-lg font-serif font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>

              {/* Separador */}
              <div className="border-t border-border"></div>

              {/* Grupo 2: General */}
              <div className="space-y-2">
                 <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-2">General</p>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-2 py-1 text-base text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/booking"
                  className="block w-full px-4 py-3 bg-primary text-primary-foreground rounded-xl text-center font-bold hover:bg-primary/90 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}