import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wheel Alignments & Suspension Service | Delta Tire - NM & AZ",
  description: "Professional wheel alignments, shocks, struts, ball joints & tie rod service. Precision equipment at 4 locations in New Mexico & Arizona.",
  keywords: "wheel alignment, suspension service, shocks, struts, ball joints, tie rods, alignment service, New Mexico, Arizona",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Wrench } from "lucide-react"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"

export default function AlignmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wheel Alignments & Suspension
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Precision alignments and suspension service across New Mexico & Arizona
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
                <Wrench className="w-24 h-24 mx-auto mb-4 text-red-400" />
                <h3 className="text-2xl font-bold">Professional Alignment Service</h3>
                <p className="text-gray-300 mt-2">State-of-the-art alignment equipment and expert technicians</p>
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
              Complete Alignment & Suspension Services
            </h2>
            <p className="text-xl text-gray-600">
              From wheel alignments to suspension repairs, we keep your vehicle driving straight
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Wheel Alignments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Precision wheel alignments using computerized equipment for optimal tire wear and handling.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 4-wheel alignments</li>
                  <li>• Front-end alignments</li>
                  <li>• Thrust angle alignments</li>
                  <li>• Computerized measurements</li>
                  <li>• Before/after reports</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Shocks & Struts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional shock and strut replacement for improved ride quality and handling.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Shock absorber replacement</li>
                  <li>• Strut assembly service</li>
                  <li>• Strut mount replacement</li>
                  <li>• Spring replacement</li>
                  <li>• Ride quality testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Ball Joints & Tie Rods</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Expert replacement of ball joints, tie rods, and steering components.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ball joint replacement</li>
                  <li>• Tie rod end service</li>
                  <li>• Control arm bushings</li>
                  <li>• Steering linkage repair</li>
                  <li>• Suspension inspection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Suspension Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive suspension system inspections to identify wear and safety issues.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Visual inspection</li>
                  <li>• Component testing</li>
                  <li>• Wear measurement</li>
                  <li>• Safety assessment</li>
                  <li>• Repair recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Steering Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional steering system service and repair for safe, responsive handling.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Power steering service</li>
                  <li>• Steering pump replacement</li>
                  <li>• Rack and pinion service</li>
                  <li>• Steering fluid flush</li>
                  <li>• Steering diagnosis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Alignment Checks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Regular alignment checks to maintain proper tire wear and vehicle handling.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free alignment checks</li>
                  <li>• Tire wear analysis</li>
                  <li>• Handling assessment</li>
                  <li>• Adjustment recommendations</li>
                  <li>• Preventive maintenance</li>
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
