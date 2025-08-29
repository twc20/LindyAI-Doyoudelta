import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AC & Heater Repair Service | Delta Tire - NM & AZ",
  description: "Professional AC repair, heater service, climate control & HVAC diagnostics. Expert automotive air conditioning service at 4 locations in New Mexico & Arizona.",
  keywords: "AC repair, heater repair, air conditioning service, HVAC repair, climate control, automotive AC, car heater, New Mexico, Arizona",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Wrench, Snowflake, Thermometer } from "lucide-react"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"

export default function ACHeaterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AC & Heater Repair Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Professional automotive air conditioning and heating system service across New Mexico & Arizona
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
                <a href="tel:505-287-7946">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Service
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Get Diagnosis
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
                <div className="flex justify-center space-x-4 mb-4">
                  <Snowflake className="w-12 h-12 text-blue-400" />
                  <Thermometer className="w-12 h-12 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold">Professional AC & Heater Service</h3>
                <p className="text-gray-300 mt-2">Expert climate control system repair and maintenance</p>
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
              Complete AC & Heating System Services
            </h2>
            <p className="text-xl text-gray-600">
              From air conditioning repair to heater service, we keep you comfortable year-round
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Snowflake className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>AC Repair & Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional air conditioning repair and maintenance to keep you cool in hot weather.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• AC system diagnostics</li>
                  <li>• Refrigerant recharge</li>
                  <li>• Compressor repair</li>
                  <li>• Condenser service</li>
                  <li>• Evaporator repair</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Heater Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Expert heating system repair and maintenance for reliable warmth during cold weather.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Heater core replacement</li>
                  <li>• Thermostat service</li>
                  <li>• Coolant system repair</li>
                  <li>• Blower motor service</li>
                  <li>• Heating system diagnostics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Climate Control Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete climate control system service including automatic and manual HVAC systems.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Automatic climate control</li>
                  <li>• Manual HVAC systems</li>
                  <li>• Temperature sensors</li>
                  <li>• Control module repair</li>
                  <li>• Dual-zone systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>HVAC Diagnostics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced HVAC diagnostics to identify and repair heating and cooling system problems.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Computer diagnostics</li>
                  <li>• System performance testing</li>
                  <li>• Leak detection</li>
                  <li>• Pressure testing</li>
                  <li>• Component testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Refrigerant Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional refrigerant service including recharge, recovery, and leak repair.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Refrigerant recharge</li>
                  <li>• System evacuation</li>
                  <li>• Leak detection & repair</li>
                  <li>• R-134a & R-1234yf service</li>
                  <li>• Environmental compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Preventive Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Preventive HVAC maintenance to keep your climate control system running efficiently.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cabin air filter replacement</li>
                  <li>• System cleaning</li>
                  <li>• Performance inspection</li>
                  <li>• Belt & hose inspection</li>
                  <li>• Seasonal maintenance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common AC & Heater Problems We Fix
            </h2>
            <p className="text-xl text-gray-600">
              Expert solutions for all your climate control issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Snowflake className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AC Not Cooling</h3>
              <p className="text-gray-600">Low refrigerant, compressor issues, or system leaks</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Heat</h3>
              <p className="text-gray-600">Heater core, thermostat, or coolant system problems</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Strange Noises</h3>
              <p className="text-gray-600">Blower motor, compressor, or belt issues</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bad Odors</h3>
              <p className="text-gray-600">Cabin filter, mold, or system contamination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Delta Tire for AC & Heater Service?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">ASE certified HVAC specialists with years of experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Equipment</h3>
              <p className="text-gray-600">State-of-the-art diagnostic and service equipment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Parts</h3>
              <p className="text-gray-600">OEM and premium aftermarket HVAC components</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warranty Protection</h3>
              <p className="text-gray-600">Comprehensive warranties on all HVAC repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seasonal HVAC Maintenance Tips
            </h2>
            <p className="text-xl text-gray-600">
              Keep your climate control system running efficiently year-round
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Snowflake className="w-6 h-6 mr-3 text-blue-600" />
                  Summer AC Preparation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Schedule AC inspection before hot weather</li>
                  <li>• Replace cabin air filter</li>
                  <li>• Check refrigerant levels</li>
                  <li>• Clean condenser coils</li>
                  <li>• Test system performance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Thermometer className="w-6 h-6 mr-3 text-red-600" />
                  Winter Heater Preparation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Test heater before cold weather</li>
                  <li>• Check coolant levels and condition</li>
                  <li>• Inspect thermostat operation</li>
                  <li>• Test blower motor function</li>
                  <li>• Check for leaks in heater core</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need AC or Heater Service?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Stay comfortable year-round with professional HVAC service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Service
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Get Diagnosis
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
