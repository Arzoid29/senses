"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Award, Heart, Users, Lightbulb } from "lucide-react"
import { getTeamMembers, type TeamMember } from "@/lib/api"

export default function AboutPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const data = await getTeamMembers()
        setTeamMembers(data)
      } catch (error) {
        console.error("Error loading team members:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadTeam()
  }, [])

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6 text-balance text-primary-foreground">
            WHO WE ARE
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto text-balance">
            Meet the creative minds behind Senses Salon
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {isLoading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading team...</p>
            </div>
          ) : teamMembers.length === 0 ? (
            <div className="text-center text-muted-foreground">
              <p>Our team information is currently being updated.</p>
            </div>
          ) : (
            teamMembers.map((member) => (
              <div key={member.id} className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                {/* Profile Image */}
                <div className="md:col-span-1">
                  <div className="bg-gray-300 aspect-square rounded-lg overflow-hidden shadow-md relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-user.jpg" }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2">
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-2">{member.role}</h2>
                  <p className="text-accent text-lg font-semibold mb-6">{member.name}</p>

                  {/* Specialties List */}
                  {member.specialties && member.specialties.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Specialties</h3>
                      <ul className="space-y-2 text-foreground">
                        {member.specialties.map((specialty, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-accent font-bold mt-1">•</span>
                            <span>{specialty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Bio with HTML rendering */}
                  {member.bio && (
                    <div className="bg-muted p-6 rounded-lg text-foreground leading-relaxed prose prose-sm max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: member.bio }} />
                    </div>
                  )}
                  
                  {/* Contact info if available */}
                  {(member.email || member.phone) && (
                     <div className="mt-6 flex flex-col gap-1 text-sm text-muted-foreground">
                        {member.email && <p>Email: {member.email}</p>}
                        {member.phone && <p>Phone: {member.phone}</p>}
                     </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Values Section */}
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