"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

export default function HairLossTreatmentPage() {
  const services = [
    {
      id: "scalp-eval",
      title: "Complimentary Scalp Evaluation",
      description: "Free professional assessment of your scalp and hair condition to determine best treatment options.",
      price: "FREE",
      duration: "30 min",
      image: "/professional-hair-treatment-ultrasound.jpg",
    },
    {
      id: "scalp-treatment",
      title: "Detox Scalp Treatment",
      description: "Deep cleansing and detoxifying treatment to remove buildup and promote healthy hair growth.",
      price: "$65",
      duration: "45 min",
      image: "/professional-hair-treatment-ultrasound.jpg",
    },
    {
      id: "trichology-treatment",
      title: "Trichology Treatment",
      description: "Specialized hair and scalp treatment using trichology expertise to address hair loss causes.",
      price: "$40",
      duration: "30 min",
      image: "/professional-hair-treatment-ultrasound.jpg",
    },
    {
      id: "moisture-infusion",
      title: "Moisture Infusion Treatment",
      description: "Intensive moisture therapy to strengthen and revitalize thinning or damaged hair.",
      price: "$40",
      duration: "30 min",
      image: "/professional-hair-treatment-ultrasound.jpg",
    },
    {
      id: "ultra-conditioning",
      title: "Ultra Conditioning Treatment",
      description: "Advanced conditioning using ultrasound and infrared light technology for maximum penetration.",
      price: "$200 per session / $1000/year",
      duration: "60 min",
      image: "/professional-hair-treatment-ultrasound.jpg",
    },
    {
      id: "precision-cut",
      title: "Precision Scalp Cut",
      description: "Specialized cutting technique combined with scalp therapy for hair loss management.",
      price: "$60 - $80",
      duration: "60 min",
      image: "/professional-hair-treatment-ultrasound.jpg",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl font-bold text-primary-foreground mb-4 text-balance">
            Hair Loss Treatment
          </h1>
          <p className="text-lg text-primary-foreground/90 text-balance">
            Address hair loss with professional treatments and expert care. Our specialized therapies help strengthen
            and restore your hair.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="flex-1 py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition"
              >
                <div className="h-48 bg-muted overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-semibold text-primary">{service.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">{service.duration}</p>
                    </div>
                  </div>
                  <Link
                    href="/booking"
                    className="inline-flex w-full items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
