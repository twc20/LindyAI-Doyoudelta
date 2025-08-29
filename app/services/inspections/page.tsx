import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vehicle Inspections & Safety Checks | Delta Tire - NM & AZ",
  description: "Professional vehicle inspections, safety checks, emissions testing & state inspections. Comprehensive automotive inspections at 4 locations in New Mexico & Arizona.",
  keywords: "vehicle inspection, safety inspection, emissions testing, state inspection, automotive inspection, car inspection, New Mexico, Arizona",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Wrench, Search, FileCheck } from "lucide-react"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"

export default function InspectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vehicle Inspections & Safety Checks
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Professional vehicle inspections and safety checks across New Mexico & Arizona
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
                <a href="tel:505-287-7946">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Inspection
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Get Quote
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
                <Search className="w-24 h-24 mx-auto mb-4 text-red-400" />
                <h3 className="text-2xl font-bold">Professional Vehicle Inspections</h3>
                <p className="text-gray-300 mt-2">Comprehensive safety and emissions inspections</p>
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
              Complete Vehicle Inspection Services
            </h2>
            <p className="text-xl text-gray-600">
              From state inspections to comprehensive safety checks, we ensure your vehicle meets all requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>State Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Official state vehicle inspections to ensure your vehicle meets all legal requirements.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• New Mexico state inspections</li>
                  <li>• Arizona emissions testing</li>
                  <li>• Safety inspections</li>
                  <li>• Registration compliance</li>
                  <li>• Official inspection certificates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Safety Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive safety inspections to identify potential hazards and ensure safe operation.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Brake system inspection</li>
                  <li>• Tire condition check</li>
                  <li>• Lighting system test</li>
                  <li>• Steering & suspension</li>
                  <li>• Safety equipment check</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Emissions Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional emissions testing to ensure your vehicle meets environmental standards.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• OBD-II emissions testing</li>
                  <li>• Tailpipe emissions test</li>
                  <li>• Gas cap pressure test</li>
                  <li>• Visual emissions inspection</li>
                  <li>• Emissions compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Pre-Purchase Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Thorough pre-purchase inspections to help you make informed vehicle buying decisions.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Complete vehicle assessment</li>
                  <li>• Engine & transmission check</li>
                  <li>• Body & frame inspection</li>
                  <li>• Electrical system test</li>
                  <li>• Detailed inspection report</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Multi-Point Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive multi-point inspections to assess overall vehicle condition and maintenance needs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 25-point inspection</li>
                  <li>• Fluid level checks</li>
                  <li>• Belt & hose inspection</li>
                  <li>• Battery & charging test</li>
                  <li>• Maintenance recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Diagnostic Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced diagnostic inspections using computerized equipment to identify issues.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Computer diagnostics</li>
                  <li>• Engine performance test</li>
                  <li>• Transmission diagnostics</li>
                  <li>• ABS system check</li>
                  <li>• Electronic system scan</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Inspection Process
            </h2>
            <p className="text-xl text-gray-600">
              Professional, thorough, and efficient vehicle inspections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule Appointment</h3>
              <p className="text-gray-600">Call or visit to schedule your inspection appointment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Check</h3>
              <p className="text-gray-600">Thorough inspection of all required systems and components</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Results & Report</h3>
              <p className="text-gray-600">Detailed inspection results and recommendations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certification</h3>
              <p className="text-gray-600">Official inspection certificate if vehicle passes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Delta Tire for Vehicle Inspections?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Inspectors</h3>
              <p className="text-gray-600">State-certified inspection technicians</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Official Station</h3>
              <p className="text-gray-600">Licensed inspection and emissions testing station</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
              <p className="text-gray-600">Fast, efficient inspections while you wait</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Honest Results</h3>
              <p className="text-gray-600">Fair, honest inspections with detailed explanations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Vehicle Inspection?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Schedule your state inspection or safety check today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Inspection
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Get Quote
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
