"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Gift, Users, DollarSign, CheckCircle, Share2 } from "lucide-react"
import { useState } from "react"

export default function ReferralsPage() {
  const [referralLink] = useState("https://sensessalon.com/ref/YOURNAME123")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const benefits = [
    {
      icon: DollarSign,
      title: "10% Discount",
      description: "Your friends receive 10% off their first service when they use your referral link.",
    },
    {
      icon: Gift,
      title: "Free Service Credit",
      description: "Earn $25 in service credit for every successful referral to your account.",
    },
    {
      icon: Users,
      title: "Unlimited Referrals",
      description: "There's no limit to how many friends you can refer and how much you can earn.",
    },
    {
      icon: CheckCircle,
      title: "Easy to Share",
      description: "Simply share your unique referral link and track your earnings in your account.",
    },
  ]

  const steps = [
    {
      number: "1",
      title: "Get Your Referral Link",
      description: "Sign up or log into your account to get your unique referral link.",
    },
    {
      number: "2",
      title: "Share With Friends",
      description: "Share your referral link with friends and family who might need our services.",
    },
    {
      number: "3",
      title: "Friends Get Discount",
      description: "Your referrals receive 10% off their first appointment when they book using your link.",
    },
    {
      number: "4",
      title: "You Earn Credit",
      description: "Earn $25 service credit for each successful referral automatically.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold text-foreground mb-4 text-balance">
            Share the Senses Experience
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Refer your friends and family to Senses Salon and earn rewards. It's our way of saying thank you for
            recommending us.
          </p>
          <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">Your Referral Link</p>
            <div className="flex gap-3">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground font-mono text-sm focus:outline-none"
              />
              <button
                onClick={copyToClipboard}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition flex items-center gap-2 whitespace-nowrap"
              >
                <Share2 className="w-4 h-4" />
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Program Overview */}
          <div className="mb-20">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">Program Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="bg-card rounded-lg border border-border p-8 hover:shadow-md transition">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card rounded-lg border border-border p-6 text-center">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-serif font-bold text-lg mx-auto mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Terms & Details */}
          <div className="bg-muted rounded-lg border border-border p-8 mb-16">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Program Terms</h3>
            <div className="space-y-4 text-foreground">
              <div>
                <p className="font-semibold mb-2">Discount for Referrals</p>
                <p className="text-muted-foreground">
                  Each friend you refer receives 10% off their first service appointment at Senses Salon when they use
                  your unique referral link.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Your Reward</p>
                <p className="text-muted-foreground">
                  For every successful referral, you earn $25 in service credit automatically added to your account.
                  Credits can be used toward any service or product.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Eligibility</p>
                <p className="text-muted-foreground">
                  Referrals must be new clients who have not previously visited Senses Salon. Existing clients are not
                  eligible for the referral program discount.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">No Limits</p>
                <p className="text-muted-foreground">
                  You can refer as many people as you like and earn unlimited service credits. There's no maximum to how
                  much you can earn.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/5 rounded-lg border border-border p-12 text-center">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Earn Rewards?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Share your referral link today and start earning service credits with every friend you refer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={copyToClipboard}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                Copy & Share Link
              </button>
              <Link
                href="/contact"
                className="px-8 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
