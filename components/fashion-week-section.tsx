import Link from "next/link"

export default function FashionWeekSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">Fashion Week Highlights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src="/mens-fashion-week-runway-show.jpg"
                alt="Mens Fashion Week"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Men's Fashion Week</h3>
            <p className="text-gray-700 mb-4">
              Joe Tucci had the honor of assisting celebrity hair stylist Aubrey Loots at New York Fashion Week,
              featured in the New York Times.
            </p>
            <Link href="#" className="text-accent font-semibold hover:underline flex items-center gap-2">
              View Details →
            </Link>
          </div>
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src="/womens-fashion-week-runway-models.jpg"
                alt="Womens Fashion Week"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Women's Fashion Week</h3>
            <p className="text-gray-700 mb-4">
              Senses Salon showcases professional styling and hair artistry at premier women's fashion events throughout
              the year.
            </p>
            <Link href="#" className="text-accent font-semibold hover:underline flex items-center gap-2">
              View Details →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
