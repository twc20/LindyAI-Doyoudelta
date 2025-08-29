'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Menu, X, Truck, Users, Clock, Shield, DollarSign, CheckCircle, Star, Award, Calendar, Wrench } from "lucide-react"
import { Footer } from "@/components/shared/footer"
import Link from 'next/link'
import Image from 'next/image'

export default function FleetPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const fleetServices = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fleet Vehicle Maintenance",
      description: "Comprehensive maintenance for all your commercial vehicles including trucks, vans, and service vehicles.",
      features: ["Scheduled maintenance", "Emergency repairs", "Fleet inspections", "Maintenance tracking"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Employee Vehicle Discounts",
      description: "Exclusive discounts for your employees' personal vehicles - a valuable benefit that costs you nothing.",
      features: ["Personal vehicle discounts", "Employee benefit program", "Easy enrollment", "No cost to employer"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Priority Service",
      description: "Keep your business moving with priority scheduling and faster turnaround times for fleet vehicles.",
      features: ["Priority scheduling", "Faster service", "Minimal downtime", "Emergency availability"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Digital Inspections",
      description: "Detailed digital vehicle inspections with photos and reports for complete transparency and record keeping.",
      features: ["Digital reports", "Photo documentation", "Maintenance records", "Compliance tracking"]
    }
  ]

  const fleetBenefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Savings",
      description: "Fleet discounts on all services plus employee personal vehicle discounts"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reduced Downtime",
      description: "Priority service and scheduling to keep your vehicles on the road"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Comprehensive Records",
      description: "Digital maintenance tracking and compliance documentation"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Employee Benefits",
      description: "Valuable employee perk with personal vehicle service discounts"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Expert Service",
      description: "ASE certified technicians with commercial vehicle expertise"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Trusted Partner",
      description: "Serving Four Corners businesses since 2015 with proven reliability"
    }
  ]

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
              <Link href="/vip" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                VIP Program
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                FAQ
              </Link>
              <Link href="/fleet" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-medium transition-colors">
                Fleet Services
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
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  VIP Program
                </Link>
                <Link 
                  href="/faq" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  href="/fleet" 
                  className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fleet Services
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                <Truck className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                Fleet Services
              </h1>
              <p className="text-xl sm:text-2xl text-red-100 font-light mb-4">
                Professional Fleet Maintenance & Employee Benefits
              </p>
              <p className="text-lg text-red-200 max-w-3xl mx-auto leading-relaxed mb-8">
                Keep your business vehicles on the road with priority service, fleet discounts, and comprehensive maintenance tracking. Plus, provide valuable employee benefits with personal vehicle discounts.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
                <a href="tel:505-287-7946">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Fleet Quote
                </a>
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all" asChild>
                <Link href="#fleet-services">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Services Overview */}
      <section id="fleet-services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Fleet Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From commercial vehicle maintenance to employee benefits, we provide complete fleet management solutions for businesses across the Four Corners region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fleetServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <div className="text-red-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Employee Vehicle Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Provide valuable employee benefits at no cost to your business. Your employees get discounts on their personal vehicles while you maintain your fleet professionally.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  How It Works
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-red-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Enroll Your Business</h4>
                      <p className="text-gray-600">Simple enrollment process for your fleet program with no upfront costs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-red-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Employee Access</h4>
                      <p className="text-gray-600">Your employees get access to fleet discounts for their personal vehicles.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-red-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Everyone Saves</h4>
                      <p className="text-gray-600">Your fleet gets priority service, employees save money, and you provide a valuable benefit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Employee Benefits Include:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Fleet pricing on tire services
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Discounted oil changes
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Brake service discounts
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Priority scheduling
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Digital vehicle inspections
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Professional service guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Delta Tire for Fleet Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that your business depends on reliable vehicles. Our fleet program is designed to minimize downtime and maximize value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-red-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fleet Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete automotive services for all types of commercial vehicles and fleets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Truck className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tire Services</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Commercial tire installation</li>
                <li>• Fleet tire rotations</li>
                <li>• Emergency tire repair</li>
                <li>• TPMS service</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Wrench className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Maintenance</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Scheduled maintenance</li>
                <li>• Oil changes</li>
                <li>• Brake service</li>
                <li>• Engine diagnostics</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Inspections</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Digital vehicle inspections</li>
                <li>• Safety inspections</li>
                <li>• Compliance documentation</li>
                <li>• Maintenance tracking</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Service</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Priority emergency repairs</li>
                <li>• Roadside assistance coordination</li>
                <li>• After-hours availability</li>
                <li>• Fleet vehicle towing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Fleet Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Businesses across the Four Corners trust Delta Tire for their fleet maintenance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Delta Tire's fleet program has been a game-changer for our business. Priority service keeps our trucks on the road, and our employees love the personal vehicle discounts."
              </p>
              <div className="font-semibold text-gray-900">- Mike R., Construction Company</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Professional service, detailed digital inspections, and great employee benefits. Delta Tire understands what businesses need."
              </p>
              <div className="font-semibold text-gray-900">- Sarah L., Delivery Service</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The digital maintenance tracking and priority scheduling have streamlined our fleet management. Highly recommend their fleet program."
              </p>
              <div className="font-semibold text-gray-900">- Tom K., Service Company</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Fleet Program?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Contact us today to discuss your fleet needs and learn about our comprehensive fleet services and employee benefit programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Call for Fleet Quote
              </a>
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all" asChild>
              <Link href="/contact">
                Contact Fleet Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
