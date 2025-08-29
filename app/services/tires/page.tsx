'use client'

import type { Metadata } from "next"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Menu, X } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from "@/components/shared/footer"

export default function TiresPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Tire Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Quality tires and expert installation across New Mexico & Arizona
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
                <a href="tel:505-287-7946">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Schedule Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
              <div className="text-center text-white">
                <Car className="w-24 h-24 mx-auto mb-4 text-red-400" />
                <h3 className="text-2xl font-bold">Professional Tire Installation</h3>
                <p className="text-gray-300 mt-2">State-of-the-art equipment and expert technicians</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Tire Services
            </h2>
            <p className="text-xl text-gray-600">
              From sales to installation, we handle all your tire needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Tire Sales & Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Wide selection of quality tires from top brands including Michelin, Goodyear, BFGoodrich, and more.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• All-season tires</li>
                  <li>• Performance tires</li>
                  <li>• Truck & SUV tires</li>
                  <li>• Winter tires</li>
                  <li>• Commercial tires</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Mounting & Balancing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional mounting and precision balancing for smooth, safe driving.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Computer wheel balancing</li>
                  <li>• Valve stem replacement</li>
                  <li>• Wheel weights installation</li>
                  <li>• Road force balancing</li>
                  <li>• Vibration diagnosis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Tire Rotations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Regular rotations extend tire life and ensure even wear patterns.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Front-to-back rotation</li>
                  <li>• Cross rotation patterns</li>
                  <li>• Directional tire rotation</li>
                  <li>• Wear pattern inspection</li>
                  <li>• Rotation scheduling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Flat Tire Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Quick, reliable flat tire repairs to get you back on the road safely.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Puncture repairs</li>
                  <li>• Patch and plug service</li>
                  <li>• Sidewall damage assessment</li>
                  <li>• Emergency roadside service</li>
                  <li>• Tire safety inspections</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>TPMS Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Tire Pressure Monitoring System service and sensor replacement.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• TPMS sensor replacement</li>
                  <li>• System programming</li>
                  <li>• Sensor battery replacement</li>
                  <li>• Warning light diagnosis</li>
                  <li>• System calibration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Tire Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive tire inspections to ensure safety and performance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Tread depth measurement</li>
                  <li>• Sidewall inspection</li>
                  <li>• Pressure checks</li>
                  <li>• Wear pattern analysis</li>
                  <li>• Safety recommendations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Tire Brands Section */}
      {/* Tire Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tire Brands We Carry
            </h2>
            <p className="text-xl text-gray-600">
              Quality tires from trusted brands in the industry
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4">
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/bfgoodrich.png" 
                    alt="BFGoodrich Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">BFGoodrich</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/bridgestone.png" 
                    alt="Bridgestone Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Bridgestone</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/carlisle.png" 
                    alt="Carlisle Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Carlisle</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/continental.png" 
                    alt="Continental Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Continental</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/cooper.png" 
                    alt="Cooper Tires Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Cooper</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/falken.png" 
                    alt="Falken Tire Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Falken</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/firestone.png" 
                    alt="Firestone Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Firestone</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/general.png" 
                    alt="General Tire Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">General</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/goodyear.png" 
                    alt="Goodyear Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Goodyear</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/haida.png" 
                    alt="Haida Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Haida</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/hankook.png" 
                    alt="Hankook Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Hankook</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/hercules.png" 
                    alt="Hercules Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Hercules</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/ironman.png" 
                    alt="Ironman Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Ironman</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/kumho.png" 
                    alt="Kumho Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Kumho</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/mastercraft.png" 
                    alt="Mastercraft Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Mastercraft</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/michelin.png" 
                    alt="Michelin Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Michelin</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/mickeythompson.png" 
                    alt="Mickey Thompson Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Mickey Thompson</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/mileking.png" 
                    alt="Mileking Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Mileking</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/nexen.png" 
                    alt="Nexen Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Nexen</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/nitto.png" 
                    alt="Nitto Tire Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Nitto</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/pirelli.png" 
                    alt="Pirelli Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Pirelli</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/samson.png" 
                    alt="Samson Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Samson</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/toyo.png" 
                    alt="Toyo Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Toyo</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/uniroyal.png" 
                    alt="Uniroyal Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Uniroyal</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center">
                <div className="h-12 flex items-center justify-center mb-2">
                  <img 
                    src="/logos/tires/yokohama.png" 
                    alt="Yokohama Logo" 
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">Yokohama</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for New Tires?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Get a free quote and schedule your tire installation today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Call for Quote
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Schedule Service
            </Button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Any of Our Locations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  Grants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">833 E Sante Fe Ave</p>
                <p className="text-gray-600 mb-2">
                  <a href="tel:505-287-7946" className="text-red-600 hover:underline">(505) 287-7946</a>
                </p>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Mon–Fri 8:00–5:00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  Gallup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">501 US-491</p>
                <p className="text-gray-600 mb-2">
                  <a href="tel:505-722-2945" className="text-red-600 hover:underline">(505) 722-2945</a>
                </p>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Mon–Fri 8:00–5:00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  Farmington
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">4650 E Main St</p>
                <p className="text-gray-600 mb-2">
                  <a href="tel:505-325-4500" className="text-red-600 hover:underline">(505) 325-4500</a>
                </p>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Mon–Fri 8:00–5:00</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  Eagar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">50 W Central Ave</p>
                <p className="text-gray-600 mb-2">
                  <a href="tel:928-333-3730" className="text-red-600 hover:underline">(928) 333-3730</a>
                </p>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Mon–Fri 8:00–5:00</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
