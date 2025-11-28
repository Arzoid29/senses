"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Client",
    image: "/professional-headshot-woman.jpg",
    text: "Senses Salon has transformed my hair and skincare routine. The team is incredibly skilled and the atmosphere is so relaxing.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Bridal Client",
    image: "/professional-headshot-woman-2.jpg",
    text: "My wedding makeup was absolutely perfect. The makeup artist listened to my vision and made me feel like the best version of myself.",
    rating: 5,
  },
  {
    name: "Jessica Martinez",
    role: "Wellness Client",
    image: "/professional-headshot-woman-3.jpg",
    text: "The massage and wellness services here are top-notch. I feel completely rejuvenated after every visit. Highly recommend!",
    rating: 5,
  },
  {
    name: "Amanda Chen",
    role: "Regular Client",
    image: "/professional-headshot-woman-4.jpg",
    text: "Professional, friendly, and talented. The attention to detail and personalized service is what keeps me coming back.",
    rating: 5,
  },
]

export default function AboutSection() {
  return (
    <>
      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden h-96">
              <img
                src="/luxury-salon-interior.jpg"
                alt="Senses Salon Interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-2 text-balance">Creating Your Image</h2>
              <p className="text-accent font-semibold text-lg mb-6">Our Philosophy</p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Here at Senses Salon, we believe that by sharpening the use of our senses, we are more aware of our
                actions and surroundings. Through proper communication, we are better able to serve our clients.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                By listening to our clients' words and body language, we can better understand what they are truly
                communicating when it comes to their fashion needs, abilities, and habits. We strive to best serve our
                clients through proper communication, continuing education, and offering a professional, clean
                environment.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-semibold text-foreground">
                If you are seeking a new image or simply wanting to refresh your current one, we invite you to our salon
                where our stylists will exceed your expectations. We offer{" "}
                <span className="text-accent">100% satisfaction guaranteed!</span>
              </p>

              {/* Core Values */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">
                      Award-winning professionals with international certifications and continuing education
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Premium Products</h3>
                    <p className="text-sm text-muted-foreground">We use only the finest brands and materials</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Personalized Communication</h3>
                    <p className="text-sm text-muted-foreground">We listen and understand your unique fashion needs</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Professional Environment</h3>
                    <p className="text-sm text-muted-foreground">A clean, serene space for complete relaxation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4 text-balance">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Discover why hundreds of clients trust Senses Salon for their beauty and wellness needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border hover:border-primary transition">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
