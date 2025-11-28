import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import MissionStatement from "@/components/mission-statement"
import FeaturedServices from "@/components/featured-services"
import PortfolioPreview from "@/components/portfolio-preview"
import FeaturedAnnouncement from "@/components/featured-announcement"
import AboutSection from "@/components/about-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <MissionStatement />
      <FeaturedServices />
      <PortfolioPreview />
      <FeaturedAnnouncement />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  )
}
