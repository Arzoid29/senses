import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FeaturedAnnouncement() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Hair Replacement Solutions</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We are excited to offer Hair Replacement services to our customers. Our replacement solutions are perfect
              for those who need new hair in certain areas quickly and ideal for those in advanced stages of hair
              thinning or loss.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We now provide a scalp evaluation in addition to <strong>Hair Extensions</strong> (strand-by-strand,
              clip-in or tape-in), <strong>Toppers, Wigs, Halos</strong> and <strong>Ponytails</strong> (real hair,
              synthetic and heat defiant), and <strong>Modern Hair Loss Solutions for Men</strong>.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded hover:bg-accent/90 transition-colors"
            >
              Schedule Complimentary Scalp Evaluation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <img
            src="/professional-hair-replacement-solutions.jpg"
            alt="Hair Replacement Solutions"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  )
}
