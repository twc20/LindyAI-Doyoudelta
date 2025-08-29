'use client'

import { useState } from 'react'
import { Footer } from "@/components/shared/footer"
import { ServicesGrid } from "@/components/shared/services-grid"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Menu, X, MapPin } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesPage() {
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
              <Link href="/services" className="text-red-600 font-medium">
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
                  className="text-red-600 font-medium py-2"
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Complete Auto Repair & Tire Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent font-bold">Delta Difference</span> with professional automotive services across New Mexico & Arizona. Trusted service since 1995.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Call Now - Open Today!
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 font-semibold text-lg px-8 py-4 rounded-xl transition-all" asChild>
              <a href="/locations">
                Find Location Near You
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesGrid title="Professional Automotive Services - Do You Delta?" />

        {/* Why Choose Our Services */}
        <section className="py-16 bg-white rounded-2xl shadow-lg mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Delta Tire for Auto Repair & Tire Service?
              </h2>
              <p className="text-lg text-gray-600">
                We're not the cheapest—we add the most value. Professional service, honest pricing, and the Delta Difference in every job.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Warranty Protection</h3>
                <p className="text-gray-600">Comprehensive warranties on all services. Your investment is protected.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Courtesy Cars</h3>
                <p className="text-gray-600">Free loaner vehicles available while we service your car.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold mb-3">★★★★★ Rated</h3>
                <p className="text-gray-600">#1 rated tire shop and auto repair in New Mexico & Arizona.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Delta Difference?</h2>
          <p className="text-xl mb-8 text-red-100">
            Professional automotive services at 4 convenient locations. Open today - call now!
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
            <a href="tel:505-287-7946">
              <Phone className="w-5 h-5 mr-2" />
              Call Now for Service
            </a>
          </Button>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
