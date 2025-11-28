"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Accessibility, Car, Coffee, Wifi, ArrowRight } from "lucide-react"

export default function LocationPage() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-50">
      <Navigation />

      {/* 1. Hero Cinemático (Imagen de Recepción/Exterior) */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
          alt="Senses Salon Exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-90">Visit Us</p>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-6">Our Sanctuary</h1>
          <p className="text-lg font-light max-w-xl mx-auto text-white/90">
            A space designed for your comfort located in the heart of Luxury City.
          </p>
        </div>
      </section>

      {/* 2. Main Content Split View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LADO IZQUIERDO: Información (Scrollable) */}
          <div className="space-y-12">
            
            {/* Cabecera Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Contact & Hours</h2>
              <p className="text-gray-500 leading-relaxed">
                We are conveniently located downtown with dedicated parking. 
                Experience luxury from the moment you arrive.
              </p>
            </div>

            {/* Detalles de Contacto */}
            <div className="space-y-6">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">123 Beauty Lane, Suite 100</p>
                  <p className="text-gray-600">Luxury City, ST 12345</p>
                  <a href="#map" className="inline-flex items-center text-sm font-bold text-rose-600 mt-2 hover:underline">
                    Get Directions <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-400 mt-1">Mon-Sat, 9am - 7pm</p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">concierge@sensessalon.com</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Horarios (Diseño limpio) */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-rose-600" />
                <h3 className="font-serif text-2xl font-bold text-gray-900">Opening Hours</h3>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                  <span className="text-gray-600 font-medium">Monday - Friday</span>
                  <span className="font-bold text-gray-900">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                  <span className="text-gray-600 font-medium">Saturday</span>
                  <span className="font-bold text-gray-900">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Sunday</span>
                  <span className="text-rose-600 font-bold">Closed</span>
                </div>
              </div>
            </div>

            {/* Amenidades (Grid Bento) */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Our Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <Car className="w-5 h-5 text-rose-600" />
                  <span className="font-medium text-gray-700">Free Valet Parking</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <Wifi className="w-5 h-5 text-rose-600" />
                  <span className="font-medium text-gray-700">High-Speed Wi-Fi</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <Coffee className="w-5 h-5 text-rose-600" />
                  <span className="font-medium text-gray-700">Artisan Coffee Bar</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <Accessibility className="w-5 h-5 text-rose-600" />
                  <span className="font-medium text-gray-700">Wheelchair Accessible</span>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Mapa Sticky */}
          <div className="lg:sticky lg:top-24 h-[500px] lg:h-[calc(100vh-8rem)] min-h-[500px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
             <iframe
              id="map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              // Nota: El filtro grayscale hace que el mapa se vea super elegante
              className="w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184126372557!2d-73.98773192404069!3d40.75797467138682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1709123456789!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Senses Salon Location"
            />
            
            {/* Floating Card sobre el mapa (opcional, para dar contexto) */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 lg:hidden">
              <p className="text-xs font-bold text-rose-600 uppercase mb-1">Navigate</p>
              <p className="text-sm text-gray-600">Tap the map to open Google Maps navigation directly.</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}