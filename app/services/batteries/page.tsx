import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Battery & Electrical Service | Delta Tire - NM & AZ",
  description: "Professional battery testing, replacement & electrical service. Quality car batteries, alternator service & electrical diagnostics at 4 locations in New Mexico & Arizona.",
  keywords: "battery service, battery replacement, electrical service, car battery, alternator service, starter repair, automotive electrical, New Mexico, Arizona",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Wrench, Zap, Battery } from "lucide-react"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"

export default function BatteriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Battery & Electrical Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Professional battery and electrical service across New Mexico & Arizona
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
                <Battery className="w-24 h-24 mx-auto mb-4 text-red-400" />
                <h3 className="text-2xl font-bold">Professional Battery & Electrical Service</h3>
                <p className="text-gray-300 mt-2">Expert battery testing, replacement and electrical diagnostics</p>
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
              Complete Battery & Electrical Services
            </h2>
            <p className="text-xl text-gray-600">
              From battery replacement to electrical diagnostics, we keep your vehicle's electrical system running perfectly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Battery className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Battery Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-quality car battery replacement with premium brands and professional installation.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium battery brands</li>
                  <li>• Professional installation</li>
                  <li>• Battery recycling</li>
                  <li>• Warranty protection</li>
                  <li>• All vehicle types</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Battery Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive battery testing to determine battery health and charging system performance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free battery testing</li>
                  <li>• Load testing</li>
                  <li>• Voltage testing</li>
                  <li>• Charging system test</li>
                  <li>• Battery health report</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Alternator Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional alternator testing, repair, and replacement to keep your charging system working.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Alternator testing</li>
                  <li>• Alternator replacement</li>
                  <li>• Charging system repair</li>
                  <li>• Belt replacement</li>
                  <li>• Output testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Starter Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Expert starter motor testing, repair, and replacement for reliable vehicle starting.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Starter testing</li>
                  <li>• Starter replacement</li>
                  <li>• Solenoid service</li>
                  <li>• Connection cleaning</li>
                  <li>• Starting system repair</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Electrical Diagnostics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced electrical diagnostics to identify and repair electrical system problems.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Computer diagnostics</li>
                  <li>• Wiring inspection</li>
                  <li>• Fuse testing</li>
                  <li>• Circuit testing</li>
                  <li>• Electrical troubleshooting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Emergency Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Emergency battery and electrical service to get you back on the road quickly.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Jump start service</li>
                  <li>• Emergency battery replacement</li>
                  <li>• Roadside assistance</li>
                  <li>• Same-day service</li>
                  <li>• Mobile service available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Battery Brands */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Battery Brands
            </h2>
            <p className="text-xl text-gray-600">
              We carry top-quality batteries from trusted manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interstate Batteries</h3>
              <p className="text-gray-600">America's #1 replacement battery brand</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">DieHard Batteries</h3>
              <p className="text-gray-600">Reliable power for all vehicle types</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Optima Batteries</h3>
              <p className="text-gray-600">High-performance AGM batteries</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AC Delco</h3>
              <p className="text-gray-600">OEM quality replacement batteries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Delta Tire for Battery & Electrical Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Batteries</h3>
              <p className="text-gray-600">Premium batteries with manufacturer warranties</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">ASE certified electrical system specialists</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Diagnostics</h3>
              <p className="text-gray-600">State-of-the-art electrical diagnostic equipment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Testing</h3>
              <p className="text-gray-600">Complimentary battery and charging system testing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Battery or Electrical Service?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Get a free battery test and professional electrical diagnostics today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Call for Service
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
