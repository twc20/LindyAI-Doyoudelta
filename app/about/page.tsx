'use client'

import { useState } from 'react'
import { Phone, MapPin, Users, Award, Heart, Target, Menu, X, Star } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile-First Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-red-600">
                Delta Tire
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-red-600 font-semibold">
                About
              </Link>
              <Link href="/vip" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                VIP Program
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                href="/contact" 
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/services" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/about" 
                  className="text-red-600 hover:text-red-700 font-semibold py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/vip" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Star className="w-4 h-4 mr-2" />
                  VIP Program
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Link 
                    href="/contact" 
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Link>
                  <Link 
                    href="/locations" 
                    className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center justify-center w-full"
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

      {/* Hero Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            About <span className="text-red-200">Delta Tire</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed px-2">
            Founded by three brothers with a shared vision: to build something bigger than themselves and serve their communities with excellence.
          </p>
        </div>
      </section>

      {/* The Brothers Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">The Brothers</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Delta Tire was founded by three brothers — Tannin, Kory, and Todd Cash — each bringing their own experience, drive, and vision into building something bigger than themselves.
            </p>
          </div>

          <div className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-12">
            {/* Tannin */}
            <div className="text-center group">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="text-gray-400 text-center">
                  <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm">Photo Coming Soon</p>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Tannin Cash</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Tannin started the business in 2015 with a single small location. What began as his &ldquo;baby&rdquo; has grown into a multi-location operation, serving communities across New Mexico and Arizona. His persistence and dedication laid the foundation for what Delta Tire is today.
              </p>
            </div>

            {/* Kory */}
            <div className="text-center group">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="text-gray-400 text-center">
                  <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm">Photo Coming Soon</p>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Kory Cash</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Kory has been a steady force behind the scenes, balancing the early years with his own business while providing critical support and investment. Today, he plays a hands-on role in helping Delta Tire scale to new heights.
              </p>
            </div>

            {/* Todd */}
            <div className="text-center group">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="text-gray-400 text-center">
                  <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm">Photo Coming Soon</p>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Todd Cash</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Todd joined full-time in 2021 after years of entrepreneurial experience in real estate and construction. Over the past few years, he has shifted nearly all of his focus to Delta Tire, driving growth, systems, and vision to help take the company to a $50M+ level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Delta Tire Story - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">The Delta Tire Story</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                What started as one shop in Gallup has grown into a network of trusted tire and auto centers, including Grants, Gallup, Farmington, Eagar, and AJ&apos;s Tire &amp; Auto in Gallup. The brothers and their team treat every car as if it were their own, with a focus on quality work, transparency, and standing behind what they do.
              </p>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Delta Tire isn&apos;t just about tires. It&apos;s about building trust, diagnosing issues the right way, and keeping families safe on the road. That philosophy drives everything we do, from offering free inspections and manufacturer-recommended service intervals, to providing courtesy cars and clean, comfortable waiting areas.
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 sm:p-8 my-8 sm:my-12 rounded-r-xl">
                <p className="text-lg sm:text-2xl text-gray-800 font-medium leading-relaxed mb-3 sm:mb-4">
                  At the heart of Delta Tire is the belief that cars connect families to what matters most — school, work, sports, church, and adventure. That&apos;s why our promise is simple:
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">
                  &ldquo;We treat your car like my car.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              The principles that guide everything we do at Delta Tire.
            </p>
          </div>

          <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
            <div className="text-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Family First</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We understand that cars connect families to what matters most. Every service is performed with your family&apos;s safety in mind.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Quality Work</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We don&apos;t cut corners. Every job is done right the first time, with quality parts and expert craftsmanship.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Transparency</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Honest diagnostics, fair pricing, and clear communication. You&apos;ll always know what&apos;s being done and why.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Experience the Delta Difference
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-red-100 leading-relaxed max-w-3xl mx-auto px-2">
            Ready to see what &ldquo;Do You Delta?&rdquo; really means? Visit any of our locations and discover why families across New Mexico and Arizona trust us with their vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Link href="/locations" className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Find a Location
            </Link>
            <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-red-600 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
