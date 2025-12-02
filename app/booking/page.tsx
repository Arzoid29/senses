"use client"

import type React from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Calendar, Clock, User, Phone, Mail, CheckCircle, ChevronRight, Sparkles } from "lucide-react"
import { useState, useEffect, Suspense } from "react" // Añadimos Suspense
import Link from "next/link"
import { useSearchParams } from "next/navigation" // Importante: para leer la URL
import { getServices, submitBooking, type Service } from "@/lib/api"

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
]

// Componente interno para manejar la lógica del searchParams
function BookingForm() {
  const searchParams = useSearchParams()
  const preSelectedServiceId = searchParams.get('serviceId') || ""

  const [services, setServices] = useState<Service[]>([])
  const [bookingData, setBookingData] = useState({
    service: "", // Se inicializará en el useEffect
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Cargar servicios y establecer selección inicial
  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServices()
        const servicesList = Array.isArray(data) ? data : []
        setServices(servicesList)
        
        // Si hay un ID en la URL, lo usamos
        if (preSelectedServiceId) {
          // Verificamos si el servicio existe en la lista cargada (opcional pero recomendado)
          // Si no, simplemente lo seteamos igual
          setBookingData(prev => ({ ...prev, service: preSelectedServiceId }))
        }
      } catch (error) {
        console.log("Error loading services:", error)
        setServices([])
      }
    }
    loadServices()
  }, [preSelectedServiceId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBookingData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const payload = {
        service_id: bookingData.service,
        date: bookingData.date,
        time: bookingData.time,
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
      }

      const success = await submitBooking(payload)
      if (success) {
        setSubmitted(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } catch (error) {
      console.log("Booking error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedService = services?.find((s) => s.id === bookingData.service)

  if (submitted) {
    return (
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-xl text-center border border-green-100">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Reservation Confirmed</h2>
            <p className="text-gray-500 mb-8">
              Thank you, {bookingData.name}. We have received your booking request for <strong>{bookingData.date}</strong> at <strong>{bookingData.time}</strong>. Check your email for details.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-rose-600 transition-colors w-full"
            >
              Return Home
            </Link>
          </div>
        </div>
    )
  }

  return (
      <section className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* COLUMNA IZQUIERDA: Formulario */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 space-y-10">
              
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-sm">1</span>
                  Select Service & Time
                </h3>
                
                <div className="space-y-6 pl-10">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={bookingData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 appearance-none"
                      >
                        <option value="">Select a treatment...</option>
                        {services?.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-rose-600" /> Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={bookingData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-rose-600" /> Time
                      </label>
                      <div className="relative">
                        <select
                          name="time"
                          value={bookingData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 appearance-none"
                        >
                          <option value="">Select time...</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100" />

              {/* Step 2: Personal Details */}
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-sm">2</span>
                  Your Information
                </h3>
                
                <div className="space-y-6 pl-10">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={bookingData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jane Doe"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={bookingData.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={bookingData.phone}
                          onChange={handleChange}
                          placeholder="(555) 000-0000"
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Confirm Appointment"}
                </button>
              </div>
            </form>
          </div>

          {/* COLUMNA DERECHA: Resumen Sticky */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
                  Booking Summary
                </h3>

                {selectedService ? (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-rose-600">Service</p>
                        <p className="font-bold text-gray-900">{selectedService.title}</p>
                      </div>
                      <Sparkles className="w-5 h-5 text-rose-400" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 bg-gray-50 p-3 rounded-lg">
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="text-sm font-semibold">{selectedService.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Price</p>
                        <p className="text-sm font-semibold">{selectedService.price}</p>
                      </div>
                    </div>

                    {(bookingData.date || bookingData.time) && (
                      <div className="bg-gray-50 p-3 rounded-lg space-y-2">
                         {bookingData.date && (
                           <div className="flex items-center gap-2 text-sm text-gray-700">
                             <Calendar className="w-4 h-4 text-gray-400" />
                             {bookingData.date}
                           </div>
                         )}
                         {bookingData.time && (
                           <div className="flex items-center gap-2 text-sm text-gray-700">
                             <Clock className="w-4 h-4 text-gray-400" />
                             {bookingData.time}
                           </div>
                         )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    <p className="text-sm">Select a service to see details</p>
                  </div>
                )}
              </div>

              {/* Info Card Extra */}
              <div className="mt-6 bg-rose-50 p-4 rounded-xl border border-rose-100">
                <p className="text-xs font-bold text-rose-700 uppercase mb-1">Note</p>
                <p className="text-sm text-rose-600/80">
                  Please arrive 10 minutes before your scheduled time for a relaxed check-in experience.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
  )
}

export default function BookingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-50">
      <Navigation />

      {/* 1. Hero Compacto */}
      <section className="relative bg-gray-900 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <Image 
             src="https://images.unsplash.com/photo-1521590832896-7ea86950890e?q=80&w=2069&auto=format&fit=crop"
             alt="Booking Background"
             fill
             className="object-cover"
           />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-rose-400 font-bold tracking-widest text-xs uppercase mb-3">Reservations</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">Secure Your Visit</h1>
        </div>
      </section>

      {/* Suspense es necesario porque useSearchParams requiere renderizado del lado del cliente */}
      <Suspense fallback={<div className="flex justify-center p-10">Loading booking form...</div>}>
        <BookingForm />
      </Suspense>

      <Footer />
    </main>
  )
}