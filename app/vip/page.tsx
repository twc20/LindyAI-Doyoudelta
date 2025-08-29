'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Menu, X, Star, Award } from "lucide-react"
import { Footer } from "@/components/shared/footer"
import Link from 'next/link'
import Image from 'next/image'

export default function VIPPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Mobile-First Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/delta-tire-logo.png"
                alt="Delta Tire Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Services
              </Link>
              <Link href="/locations" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Locations
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/vip" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-medium transition-colors">
                VIP Program
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/services" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/locations" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Locations
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/vip" 
                  className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  VIP Program - Coming Soon
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a 
                    href="tel:505-287-7946"
                    className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now - Open Today!
                  </a>
                  <Link 
                    href="/locations"
                    className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 font-medium transition-colors flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Find Location
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Coming Soon Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-24 sm:py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                VIP Program
              </h1>
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-white/20 mb-8">
                Coming Soon
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl text-red-100 font-light mb-6">
                ★★★★★ Exclusive Benefits & Savings
              </p>
              <p className="text-lg sm:text-xl text-red-200 max-w-3xl mx-auto leading-relaxed">
                We're working on something special for our valued customers. Our VIP Program will offer exclusive discounts, priority service, and amazing benefits.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
                <a href="tel:505-287-7946">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Service Today!
                </a>
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all" asChild>
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our VIP Program will bring you exclusive benefits and the Delta Difference experience you deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exclusive Discounts</h3>
              <p className="text-gray-600">Special pricing on all services for VIP members. Save money on tire service, auto repair, and more.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Priority Service</h3>
              <p className="text-gray-600">Skip the wait with priority scheduling and faster service for all your automotive needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Special Benefits</h3>
              <p className="text-gray-600">Exclusive perks and benefits designed to give you the best automotive service experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stay Tuned
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              In the meantime, experience the Delta Difference with our professional tire service and expert auto repair. <strong>Open today</strong> - call now!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
                <a href="tel:505-287-7946">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now - Open Today!
                </a>
              </Button>
              <Button size="lg" className="bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold text-lg px-8 py-4 rounded-xl transition-all" asChild>
                <Link href="/locations">
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Location
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
