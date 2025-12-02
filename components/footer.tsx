"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground font-serif font-bold text-lg">S</span>
              </div>
              <div>
                <div className="font-serif font-bold text-lg">Senses</div>
                <div className="text-xs tracking-widest opacity-70">Creating Your Image</div>
              </div>
            </Link>
            <p className="text-sm opacity-80 mt-3">
              Premium beauty and wellness services specializing in men's hair replacement and advanced salon techniques.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/hair-color" className="hover:text-background transition">
                  Hair Color
                </Link>
              </li>
              <li>
                <Link href="/hair-extensions" className="hover:text-background transition">
                  Hair Extensions
                </Link>
              </li>
              <li>
                <Link href="/hair-replacement" className="hover:text-background transition">
                  Hair Replacement
                </Link>
              </li>
              <li>
                <Link href="/wigs" className="hover:text-background transition">
                  Wigs & Toppers
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-background transition">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/about" className="hover:text-background transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-background transition">
                  Contact
                </Link>
              </li>
             
              {/* <li>
                <Link href="/referrals" className="hover:text-background transition">
                  Referral Program
                </Link>
              </li> */}
              <li>
                <Link href="/location" className="hover:text-background transition">
                  Location & Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="text-center text-sm opacity-80 mb-4">
            <p>&copy; {currentYear} Senses Salon. All rights reserved.</p>
          </div>
          <div className="text-center text-xs opacity-60">
            <p className="italic">Creating Your Image Since Day One</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
