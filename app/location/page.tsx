import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Accessibility, ParkingCircle, Coffee } from "lucide-react"

export default function LocationPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 text-balance">Visit Us</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-balance">
            Find our salon location, hours, and amenities
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Location Information */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Senses Salon</h2>

            {/* Address */}
            <div className="mb-8">
              <div className="flex gap-4 mb-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    123 Beauty Lane
                    <br />
                    Luxury City, ST 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-8">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">info@sensessalon.com</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mb-8">
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">11:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">Our Amenities</h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                <Accessibility className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Fully Accessible</h3>
                  <p className="text-sm text-muted-foreground">Wheelchair accessible entrance and facilities</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                <ParkingCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Free Parking</h3>
                  <p className="text-sm text-muted-foreground">Ample parking available for guests</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                <Coffee className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Complimentary Refreshments</h3>
                  <p className="text-sm text-muted-foreground">Coffee, tea, and beverages while you wait</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="w-6 h-6 text-primary flex-shrink-0 flex items-center justify-center">
                  <span className="text-lg font-bold">✨</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Luxury Relaxation Area</h3>
                  <p className="text-sm text-muted-foreground">Comfortable lounge with premium seating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-6 text-foreground text-center">Find Us On The Map</h2>
          <div className="rounded-lg overflow-hidden h-96 bg-muted">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00601592346899!3d40.71282571111111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ0LjIiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
              allowFullScreen
              loading="lazy"
              title="Senses Salon Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
