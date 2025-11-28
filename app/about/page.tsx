import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Award, Heart, Users, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6 text-balance">WHO WE ARE</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto text-balance">
            Meet the creative minds behind Senses Salon
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="md:col-span-1">
              <div className="bg-gray-300 aspect-square rounded-lg overflow-hidden">
                <img src="/professional-headshot-woman.jpg" alt="Joe Tucci" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Creative Director / Owner</h2>
              <p className="text-accent text-lg font-semibold mb-6">Joe Tucci</p>

              <div className="space-y-4 mb-8">
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Hair loss Expert / NHLMA Certified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>International Board Certified Hair Colorist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Certified Master Hair Colorist (American Board of Certified Hair Colorists)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Certified Instructor for SHE by SOCAP Hair Extensions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>International Educator and Platform Artist (MLH international – Italy + Germany)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      National Educator and Platform Artist (Hair America, National Cosmetology Association, Helix Hair
                      Academy, SHE by SOCAP)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>International and National Hair Competitor in Men's Hairstyling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>World Cup Supreme – Avant Garde – Bronze</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Americas Cup Classic Men's Hairstyling: Bronze</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Americas Cup Consumer's Men's Hairstyling: Bronze</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Vidal Sassoon Academy – Santa Monica CA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>MLH Academy – Vasto Italy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Helix Academy – Tennessee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>
                      London School of Makeup – Toronto Canada (Fashion, theatrical and special effects makeup)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Westchester Cosmetology Association / President 4 years / Vice President 2 years</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground leading-relaxed mb-4">
                  At Senses, we work as a team. We all specialize in different facets of hair styling. Please let us
                  know what your needs are and we can better direct you to a particular stylist.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="/services" className="text-accent font-medium hover:underline">
                    Cut & Style
                  </a>
                  <span className="text-gray-400">•</span>
                  <a href="/services" className="text-accent font-medium hover:underline">
                    Coloring
                  </a>
                  <span className="text-gray-400">•</span>
                  <a href="/services" className="text-accent font-medium hover:underline">
                    Extensions
                  </a>
                  <span className="text-gray-400">•</span>
                  <a href="/services" className="text-accent font-medium hover:underline">
                    Texturing
                  </a>
                  <span className="text-gray-400">•</span>
                  <a href="/services" className="text-accent font-medium hover:underline">
                    Treatments
                  </a>
                  <span className="text-gray-400">•</span>
                  <a href="/services" className="text-accent font-medium hover:underline">
                    Wedding
                  </a>
                  <span className="text-gray-400">•</span>
                  <a href="/services" className="text-accent font-medium hover:underline">
                    Hair Replacement
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center text-balance">
            Why Choose Senses Salon
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Industry Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Award-winning professionals with international certifications, competition honors, and decades of
                  combined experience in hair, makeup, and wellness.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Team Specialization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each team member specializes in different facets of beauty and wellness, ensuring you're matched with
                  the perfect expert for your needs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Personalized Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that every client is unique. Our consultative approach ensures your specific needs are
                  understood and met with precision.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Platform artist status, international educator roles, and continuous training ensure we're always at
                  the forefront of beauty and wellness innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
