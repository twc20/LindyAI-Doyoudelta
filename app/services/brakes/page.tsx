import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Brake Repair & Service | Delta Tire - Gallup, Farmington, Grants, Eagar",
  description: "Professional brake repair, brake pad replacement, rotor service & brake inspections. Expert brake service at 4 locations in New Mexico & Arizona.",
  keywords: "brake repair, brake pads, brake rotors, brake service, brake inspection, New Mexico, Arizona",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Wrench } from "lucide-react"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"

export default function BrakesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Brake Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Expert brake repair and maintenance across New Mexico & Arizona
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
                <Shield className="w-24 h-24 mx-auto mb-4 text-red-400" />
                <h3 className="text-2xl font-bold">Professional Brake Service</h3>
                <p className="text-gray-300 mt-2">Expert brake repair and safety inspections</p>
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
              Complete Brake Services
            </h2>
            <p className="text-xl text-gray-600">
              From brake pads to complete brake system overhauls, we keep you safe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Brake Pad Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-quality brake pad replacement with premium materials for optimal stopping power.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ceramic brake pads</li>
                  <li>• Semi-metallic pads</li>
                  <li>• Organic brake pads</li>
                  <li>• Performance brake pads</li>
                  <li>• Lifetime warranty options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Brake Rotor Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional brake rotor resurfacing and replacement for smooth, safe braking.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Rotor resurfacing</li>
                  <li>• New rotor installation</li>
                  <li>• Rotor thickness measurement</li>
                  <li>• Warped rotor repair</li>
                  <li>• Performance rotors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Brake Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive brake system inspections to ensure your safety on the road.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free brake inspections</li>
                  <li>• Brake fluid testing</li>
                  <li>• Brake line inspection</li>
                  <li>• Caliper assessment</li>
                  <li>• Safety recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Brake Fluid Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional brake fluid flush and replacement to maintain brake performance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Brake fluid flush</li>
                  <li>• DOT 3, 4, 5 fluids</li>
                  <li>• Moisture testing</li>
                  <li>• System bleeding</li>
                  <li>• Preventive maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Brake Caliper Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Expert brake caliper repair and replacement for consistent braking performance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Caliper rebuilding</li>
                  <li>• Caliper replacement</li>
                  <li>• Piston service</li>
                  <li>• Seal replacement</li>
                  <li>• Brake hardware service</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Emergency Brake Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Quick emergency brake repairs to get you back on the road safely.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Emergency brake repair</li>
                  <li>• Same-day service</li>
                  <li>• Mobile brake service</li>
                  <li>• 24/7 emergency calls</li>
                  <li>• Roadside assistance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
