// API Configuration and service layer for Senses Salon
// This is designed to easily switch between mock data and Django API

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://188.138.28.243/api"

export interface Service {
  id: string
  category: string
  title: string
  description: string
  price: string
  duration: string
  image: string
  icon?: any
  details: string
}

export interface Booking {
  service_id: string
  date: string
  time: string
  name: string
  email: string
  phone: string
}

export interface ContactMessage {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function getServices(): Promise<Service[]> {
  try {
    // Try to fetch from Django API
    const response = await fetch(`${API_BASE_URL}/services/`)
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.log("[v0] API unavailable, falling back to mock data")
  }

  // Fallback to mock data
  return getMockServices()
}

export async function getServiceById(id: string): Promise<Service | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/services/${id}/`)
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.log("[v0] API unavailable, falling back to mock data", error)
  }

  // Fallback to mock data
  const services = getMockServices()
  return services.find((s) => s.id === id) || null
}

export async function submitBooking(booking: Booking): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    })
    return response.ok
  } catch (error) {
    console.log("[v0] Booking API failed, using mock", error)
    // Mock success for now
    return true
  }
}

export async function submitContactMessage(message: ContactMessage): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    })
    return response.ok
  } catch (error) {
    console.log("[v0] Contact API failed, using mock", error)
    // Mock success for now
    return true
  }
}

function getMockServices(): Service[] {
  return [
    {
      id: "haircut-style",
      category: "Hair Styling",
      title: "Haircut & Style",
      description: "Expert haircuts tailored to your face shape and personal style.",
      price: "$65 - $95",
      duration: "60 min",
      image: "/luxury-hair-salon-styling.jpg",
      details: "Our experienced stylists will create the perfect look for you.",
    },
    {
      id: "hair-color",
      category: "Hair Styling",
      title: "Hair Color & Highlights",
      description: "Professional color treatments and highlighting services.",
      price: "$85 - $150",
      duration: "90-120 min",
      image: "/luxury-hair-salon-styling.jpg",
      details: "Custom color matching and treatments for vibrant, healthy hair.",
    },
    {
      id: "hair-treatment",
      category: "Hair Styling",
      title: "Hair Treatment & Care",
      description: "Intensive treatments to restore and nourish your hair.",
      price: "$60 - $85",
      duration: "45 min",
      image: "/luxury-hair-salon-styling.jpg",
      details: "Keratin treatments, deep conditioning, and more.",
    },
    {
      id: "facial-basic",
      category: "Skincare",
      title: "Basic Facial",
      description: "Cleansing, exfoliation, and nourishing treatment.",
      price: "$75",
      duration: "60 min",
      image: "/luxury-skincare-facial.jpg",
      details: "Perfect for all skin types to maintain healthy, glowing skin.",
    },
    {
      id: "facial-advanced",
      category: "Skincare",
      title: "Advanced Facial",
      description: "Premium facial with specialized treatments.",
      price: "$120",
      duration: "90 min",
      image: "/luxury-skincare-facial.jpg",
      details: "Includes serums, masks, and targeted treatments for specific concerns.",
    },
    {
      id: "chemical-peel",
      category: "Skincare",
      title: "Chemical Peel",
      description: "Professional skin resurfacing for renewed radiance.",
      price: "$95 - $150",
      duration: "45 min",
      image: "/luxury-skincare-facial.jpg",
      details: "Reduces fine lines, hyperpigmentation, and improves texture.",
    },
    {
      id: "massage-relaxation",
      category: "Wellness",
      title: "Relaxation Massage",
      description: "Soothing full-body massage for stress relief.",
      price: "$85 - $120",
      duration: "60-90 min",
      image: "/spa-wellness-massage.jpg",
      details: "Swedish or deep tissue techniques for ultimate relaxation.",
    },
    {
      id: "massage-therapeutic",
      category: "Wellness",
      title: "Therapeutic Massage",
      description: "Targeted treatment for muscle tension and pain relief.",
      price: "$95",
      duration: "60 min",
      image: "/spa-wellness-massage.jpg",
      details: "Sports massage or trigger point therapy for specific issues.",
    },
    {
      id: "wellness-package",
      category: "Wellness",
      title: "Wellness Package",
      description: "Complete rejuvenation experience combining multiple therapies.",
      price: "$200 - $300",
      duration: "120-150 min",
      image: "/spa-wellness-massage.jpg",
      details: "Massage, skincare, and holistic wellness treatments combined.",
    },
    {
      id: "makeup-bridal",
      category: "Makeup",
      title: "Bridal Makeup",
      description: "Stunning makeup for your special day.",
      price: "$150",
      duration: "60 min",
      image: "/professional-makeup-artistry.jpg",
      details: "Consultation, trial, and professional application included.",
    },
    {
      id: "makeup-event",
      category: "Makeup",
      title: "Event Makeup",
      description: "Professional makeup for any occasion.",
      price: "$95 - $120",
      duration: "45 min",
      image: "/professional-makeup-artistry.jpg",
      details: "Custom looks for parties, photoshoots, and special events.",
    },
    {
      id: "makeup-lesson",
      category: "Makeup",
      title: "Makeup Lesson",
      description: "Learn professional makeup application techniques.",
      price: "$80",
      duration: "60 min",
      image: "/professional-makeup-artistry.jpg",
      details: "One-on-one personalized instruction for your skin tone and style.",
    },
  ]
}
