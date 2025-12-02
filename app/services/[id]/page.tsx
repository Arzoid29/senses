"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Clock, DollarSign, Calendar, Check } from "lucide-react"
import { Scissors, Sparkles, Leaf, Zap } from "lucide-react"

const allServices = [
  {
    id: "haircut-style",
    category: "Hair Styling",
    title: "Haircut & Style",
    description: "Expert haircuts tailored to your face shape and personal style.",
    fullDescription:
      "Our experienced stylists will analyze your hair type, face shape, and personal preferences to create the perfect look for you. Whether you're looking for a classic cut, modern style, or something completely unique, we'll deliver results that make you feel confident.",
    price: "$65 - $95",
    priceRange: { min: 65, max: 95 },
    duration: "60 min",
    image: "/luxury-hair-salon-styling.jpg",
    icon: Scissors,
    details: "Our experienced stylists will create the perfect look for you.",
    benefits: [
      "Expert consultation and personalized recommendations",
      "Precision cutting techniques",
      "Styling tips and product recommendations",
      "Follow-up touch-up appointments available",
    ],
    process: [
      "Consultation about your style preferences",
      "Hair assessment and face shape analysis",
      "Customized cut and style",
      "Product application and styling",
      "Care instructions provided",
    ],
  },
  {
    id: "hair-color",
    category: "Hair Styling",
    title: "Hair Color & Highlights",
    description: "Professional color treatments and highlighting services.",
    fullDescription:
      "Transform your look with our professional hair color and highlighting services. We use premium products and expert techniques to achieve vibrant, long-lasting results while keeping your hair healthy and beautiful.",
    price: "$85 - $150",
    priceRange: { min: 85, max: 150 },
    duration: "90-120 min",
    image: "/luxury-hair-salon-styling.jpg",
    icon: Scissors,
    details: "Custom color matching and treatments for vibrant, healthy hair.",
    benefits: [
      "Custom color consultation and matching",
      "Premium color products",
      "Highlights and lowlights available",
      "Color protection treatments included",
    ],
    process: [
      "Consultation and color selection",
      "Strand test if needed",
      "Color application",
      "Processing and development",
      "Styling and finishing",
    ],
  },
  {
    id: "hair-treatment",
    category: "Hair Styling",
    title: "Hair Treatment & Care",
    description: "Intensive treatments to restore and nourish your hair.",
    fullDescription:
      "Restore your hair's health and vitality with our intensive treatment services. From keratin treatments to deep conditioning, we offer solutions for damaged, dry, or color-treated hair.",
    price: "$60 - $85",
    priceRange: { min: 60, max: 85 },
    duration: "45 min",
    image: "/luxury-hair-salon-styling.jpg",
    icon: Scissors,
    details: "Keratin treatments, deep conditioning, and more.",
    benefits: [
      "Deep conditioning and repair",
      "Keratin and protein treatments",
      "Scalp treatments available",
      "Long-lasting results",
    ],
    process: [
      "Hair assessment",
      "Treatment selection",
      "Application and processing",
      "Rinsing and conditioning",
      "Styling",
    ],
  },
  {
    id: "facial-basic",
    category: "Skincare",
    title: "Basic Facial",
    description: "Cleansing, exfoliation, and nourishing treatment.",
    fullDescription:
      "Our classic facial treatment includes everything you need to maintain healthy, glowing skin. Perfect for all skin types, this service combines cleansing, exfoliation, extraction, and nourishing treatments.",
    price: "$75",
    priceRange: { min: 75, max: 75 },
    duration: "60 min",
    image: "/luxury-skincare-facial.jpg",
    icon: Sparkles,
    details: "Perfect for all skin types to maintain healthy, glowing skin.",
    benefits: ["Deep cleansing", "Gentle exfoliation", "Hydration boost", "Relaxing experience"],
    process: [
      "Skin analysis and consultation",
      "Cleansing and exfoliation",
      "Extraction if needed",
      "Face mask application",
      "Moisturizer and SPF application",
    ],
  },
  {
    id: "facial-advanced",
    category: "Skincare",
    title: "Advanced Facial",
    description: "Premium facial with specialized treatments.",
    fullDescription:
      "Experience our most luxurious facial treatment designed to address specific skin concerns. This premium service includes advanced techniques, specialized serums, and targeted treatments for optimal results.",
    price: "$120",
    priceRange: { min: 120, max: 120 },
    duration: "90 min",
    image: "/luxury-skincare-facial.jpg",
    icon: Sparkles,
    details: "Includes serums, masks, and targeted treatments for specific concerns.",
    benefits: [
      "Advanced skincare technologies",
      "Specialized serums and treatments",
      "Targeted problem areas",
      "Customized for your skin type",
    ],
    process: [
      "Detailed skin analysis",
      "Customized cleansing",
      "Advanced exfoliation",
      "Serums and masks",
      "Eye and lip treatments",
      "Finishing moisturizer",
    ],
  },
  {
    id: "chemical-peel",
    category: "Skincare",
    title: "Chemical Peel",
    description: "Professional skin resurfacing for renewed radiance.",
    fullDescription:
      "Reveal smoother, more radiant skin with our professional chemical peel treatments. Designed to reduce fine lines, hyperpigmentation, and improve overall skin texture and tone.",
    price: "$95 - $150",
    priceRange: { min: 95, max: 150 },
    duration: "45 min",
    image: "/luxury-skincare-facial.jpg",
    icon: Sparkles,
    details: "Reduces fine lines, hyperpigmentation, and improves texture.",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Fades hyperpigmentation and age spots",
      "Improves skin texture",
      "Brightens complexion",
    ],
    process: [
      "Skin preparation",
      "Chemical solution application",
      "Processing time",
      "Neutralization",
      "Soothing treatment and aftercare",
    ],
  },
  {
    id: "massage-relaxation",
    category: "Wellness",
    title: "Relaxation Massage",
    description: "Soothing full-body massage for stress relief.",
    fullDescription:
      "Escape the stress of daily life with our relaxation massage. A soothing, full-body experience designed to relax muscles, calm the mind, and restore balance to your body and spirit.",
    price: "$85 - $120",
    priceRange: { min: 85, max: 120 },
    duration: "60-90 min",
    image: "/spa-wellness-massage.jpg",
    icon: Leaf,
    details: "Swedish or deep tissue techniques for ultimate relaxation.",
    benefits: ["Stress relief", "Muscle relaxation", "Improved circulation", "Better sleep quality"],
    process: [
      "Consultation about preferences",
      "Selection of oils and techniques",
      "Full-body massage",
      "Gentle finishing touches",
      "Relaxation time",
    ],
  },
  {
    id: "massage-therapeutic",
    category: "Wellness",
    title: "Therapeutic Massage",
    description: "Targeted treatment for muscle tension and pain relief.",
    fullDescription:
      "Address specific areas of tension and pain with our therapeutic massage. Using specialized techniques like trigger point therapy and sports massage, we target problem areas for relief and healing.",
    price: "$95",
    priceRange: { min: 95, max: 95 },
    duration: "60 min",
    image: "/spa-wellness-massage.jpg",
    icon: Leaf,
    details: "Sports massage or trigger point therapy for specific issues.",
    benefits: ["Targeted pain relief", "Improved flexibility", "Faster injury recovery", "Reduced muscle tension"],
    process: [
      "Assessment of problem areas",
      "Technique selection",
      "Focused treatment",
      "Stretching and mobility work",
      "Post-massage care instructions",
    ],
  },
  {
    id: "wellness-package",
    category: "Wellness",
    title: "Wellness Package",
    description: "Complete rejuvenation experience combining multiple therapies.",
    fullDescription:
      "Our signature wellness package combines multiple therapies for a complete rejuvenation experience. Enjoy a massage, facial, and other holistic treatments in one luxurious session.",
    price: "$200 - $300",
    priceRange: { min: 200, max: 300 },
    duration: "120-150 min",
    image: "/spa-wellness-massage.jpg",
    icon: Leaf,
    details: "Massage, skincare, and holistic wellness treatments combined.",
    benefits: ["Complete relaxation", "Multiple benefits", "Deep rejuvenation", "Best value"],
    process: [
      "Consultation",
      "Massage therapy",
      "Facial treatment",
      "Additional wellness therapy",
      "Rest and reflection time",
    ],
  },
  {
    id: "makeup-bridal",
    category: "Makeup",
    title: "Bridal Makeup",
    description: "Stunning makeup for your special day.",
    fullDescription:
      "Look absolutely radiant on your wedding day with our bridal makeup service. Our artists specialize in creating long-lasting, photogenic looks that match your vision and wedding theme.",
    price: "$150",
    priceRange: { min: 150, max: 150 },
    duration: "60 min",
    image: "/professional-makeup-artistry.jpg",
    icon: Zap,
    details: "Consultation, trial, and professional application included.",
    benefits: [
      "Professional consultation",
      "Trial makeup session",
      "Long-lasting formulas",
      "Photography-ready finish",
    ],
    process: [
      "Initial consultation and style discussion",
      "Makeup trial session",
      "Skin preparation",
      "Full makeup application",
      "Adjustments and touch-ups",
    ],
  },
  {
    id: "makeup-event",
    category: "Makeup",
    title: "Event Makeup",
    description: "Professional makeup for any occasion.",
    fullDescription:
      "Whether it's a party, photoshoot, or special event, get professionally done makeup that enhances your features and suits the occasion. Customized looks for every style and preference.",
    price: "$95 - $120",
    priceRange: { min: 95, max: 120 },
    duration: "45 min",
    image: "/professional-makeup-artistry.jpg",
    icon: Zap,
    details: "Custom looks for parties, photoshoots, and special events.",
    benefits: ["Custom looks", "Professional application", "All-day wear", "Confidence boost"],
    process: [
      "Consultation and style selection",
      "Skin preparation",
      "Custom makeup application",
      "Finishing touches",
      "Touch-up tips provided",
    ],
  },
  {
    id: "makeup-lesson",
    category: "Makeup",
    title: "Makeup Lesson",
    description: "Learn professional makeup application techniques.",
    fullDescription:
      "Master professional makeup application techniques in a personalized lesson with our expert makeup artists. Learn tips and tricks tailored to your skin tone, face shape, and personal style.",
    price: "$80",
    priceRange: { min: 80, max: 80 },
    duration: "60 min",
    image: "/professional-makeup-artistry.jpg",
    icon: Zap,
    details: "One-on-one personalized instruction for your skin tone and style.",
    benefits: [
      "Personalized instruction",
      "Learn professional techniques",
      "Hands-on practice",
      "Take-home tips and recommendations",
    ],
    process: [
      "Assessment of your style",
      "Foundation and base application",
      "Eye makeup techniques",
      "Contouring and highlighting",
      "Lip application and finishing",
    ],
  },
]

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = allServices.find((s) => s.id === params.id)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  if (!service) {
    return (
      <main className="flex flex-col min-h-screen">
        <Navigation />
        <section className="flex-1 py-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Service not found</h1>
            <Link href="/services" className="text-primary hover:text-primary/80">
              Return to Services
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const Icon = service.icon
  const relatedServices = allServices.filter((s) => s.category === service.category && s.id !== service.id).slice(0, 3)

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="rounded-lg overflow-hidden h-96">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wide">{service.category}</span>
              </div>

              <h1 className="font-serif text-4xl font-bold text-foreground mb-4 text-balance">{service.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{service.fullDescription}</p>

              {/* Key Details */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-background rounded-lg p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Price Range</span>
                  </div>
                  <p className="font-semibold text-foreground">{service.price}</p>
                </div>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Duration</span>
                  </div>
                  <p className="font-semibold text-foreground">{service.duration}</p>
                </div>
              </div>

              {/* CTA Button */}
             
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  {index + 1}
                </div>
                <p className="font-medium text-foreground text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-12 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => {
                const RelatedIcon = relatedService.icon
                return (
                  <Link
                    key={relatedService.id}
                    href={`/services/${relatedService.id}`}
                    className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition hover:shadow-lg"
                  >
                    <div className="h-40 overflow-hidden bg-muted">
                      <img
                        src={relatedService.image || "/placeholder.svg"}
                        alt={relatedService.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <RelatedIcon className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-primary uppercase">{relatedService.category}</span>
                      </div>
                      <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition">
                        {relatedService.title}
                      </h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-lg p-8 max-w-md w-full">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Book {service.title}</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="flex-1 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-background transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
