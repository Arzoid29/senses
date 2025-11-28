"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, Clock, User, Phone, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { getServices, submitBooking, type Service } from "@/lib/api"

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
]

export default function BookingPage() {
  const [services, setServices] = useState<Service[]>([])
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServices()
        setServices(data)
      } catch (error) {
        console.log("[v0] Error loading services:", error)
      }
    }

    loadServices()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBookingData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const success = await submitBooking(bookingData)
      if (success) {
        setSubmitted(true)
        setTimeout(() => {
          setBookingData({
            service: "",
            date: "",
            time: "",
            name: "",
            email: "",
            phone: "",
          })
          setSubmitted(false)
        }, 3000)
      }
    } catch (error) {
      console.log("[v0] Booking submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedService = services.find((s) => s.id === bookingData.service)

  // ... rest of component ...
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-balance">Book Your Appointment</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-balance">
            Schedule your perfect beauty experience with Senses Salon
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="flex-1 py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-card rounded-lg border border-border p-8 space-y-8">
            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-lg font-semibold text-foreground mb-4">
                Select Service
              </label>
              <select
                id="service"
                name="service"
                value={bookingData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Choose a service...</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title} - {service.duration} ({service.price})
                  </option>
                ))}
              </select>
            </div>

            {/* Service Details */}
            {selectedService && (
              <div className="p-4 bg-secondary/20 rounded-lg border border-secondary/30">
                <h3 className="font-semibold text-foreground mb-2">{selectedService.title}</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Duration</p>
                    <p className="font-medium text-foreground">{selectedService.duration}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Price</p>
                    <p className="font-medium text-foreground">{selectedService.price}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Date Selection */}
            <div>
              <label
                htmlFor="date"
                className="block text-lg font-semibold text-foreground mb-4 flex items-center gap-2"
              >
                <Calendar className="w-5 h-5 text-primary" />
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={bookingData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Time Selection */}
            <div>
              <label
                htmlFor="time"
                className="block text-lg font-semibold text-foreground mb-4 flex items-center gap-2"
              >
                <Clock className="w-5 h-5 text-primary" />
                Preferred Time
              </label>
              <select
                id="time"
                name="time"
                value={bookingData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select a time...</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Your Information</h3>
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                  >
                    <User className="w-4 h-4 text-primary" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={bookingData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={submitted || isSubmitting}
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-70"
              >
                {submitted ? "Booking Confirmed!" : isSubmitting ? "Processing..." : "Confirm Booking"}
              </button>
              <Link
                href="/services"
                className="flex-1 px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-background transition text-center"
              >
                View Services
              </Link>
            </div>

            {submitted && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-800 font-medium">Booking confirmed! Check your email for details.</p>
              </div>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
