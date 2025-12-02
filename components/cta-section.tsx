import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Ready to Transform Your Look?</h2>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          Visit Senses Salon and let our expert stylists create the perfect image for you.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          
          <Link
            href="/location"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            <MapPin className="w-5 h-5" />
            Visit Us
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center text-lg">
          <a href="tel:(914)271-4005" className="flex items-center gap-3 hover:text-accent transition-colors">
            <Phone className="w-5 h-5" />
            (914) 271-4005
          </a>
          <p>5 Old Post Rd S, Croton-on-Hudson, NY 10520</p>
        </div>
      </div>
    </section>
  )
}
