import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Truck Accessories & Lift Kits | Delta Tire - NM & AZ",
  description: "Professional truck accessories installation, lift kits, running boards, tonneau covers, brush guards & custom truck modifications at 4 locations in New Mexico & Arizona.",
  keywords: "truck accessories, lift kits, running boards, tonneau covers, brush guards, truck modifications, side steps, rock guards, New Mexico, Arizona",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Wrench, Truck, Settings } from "lucide-react"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"

export default function TruckAccessoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Truck Accessories & Modifications
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Professional truck accessories installation and custom modifications across New Mexico & Arizona
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
                <a href="tel:505-287-7946">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Schedule Installation
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
                <Truck className="w-24 h-24 mx-auto mb-4 text-red-400" />
                <h3 className="text-2xl font-bold">Professional Truck Accessories Installation</h3>
                <p className="text-gray-300 mt-2">Custom truck modifications and professional installation</p>
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
              Complete Truck Accessories & Modifications
            </h2>
            <p className="text-xl text-gray-600">
              From lift kits to running boards, we customize your truck to meet your needs and style
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Lift Kits & Leveling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional lift kit installation and leveling kits for improved ground clearance and appearance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Suspension lift kits</li>
                  <li>• Body lift kits</li>
                  <li>• Leveling kits</li>
                  <li>• Spacer lifts</li>
                  <li>• Custom lift solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Brush Guards & Bumpers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Heavy-duty brush guards and custom bumpers for protection and enhanced appearance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Front brush guards</li>
                  <li>• Grille guards</li>
                  <li>• Custom bumpers</li>
                  <li>• Push bars</li>
                  <li>• Winch-ready bumpers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Running Boards & Side Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Quality running boards and side steps for easier entry and exit from your truck.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Aluminum running boards</li>
                  <li>• Stainless steel steps</li>
                  <li>• Retractable steps</li>
                  <li>• Nerf bars</li>
                  <li>• Custom step solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Tonneau Covers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional tonneau cover installation for bed protection and improved fuel economy.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Hard folding covers</li>
                  <li>• Soft roll-up covers</li>
                  <li>• Retractable covers</li>
                  <li>• Hinged covers</li>
                  <li>• Custom fit installation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Rock Guards & Mud Flaps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Protective rock guards and mud flaps to protect your truck from road debris and damage.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Rock sliders</li>
                  <li>• Rocker panel guards</li>
                  <li>• Heavy-duty mud flaps</li>
                  <li>• Splash guards</li>
                  <li>• Custom protection solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Bed Accessories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete truck bed accessories for improved functionality and organization.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bed liners</li>
                  <li>• Toolboxes</li>
                  <li>• Tie-down systems</li>
                  <li>• Bed extenders</li>
                  <li>• Cargo management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Brands We Install
            </h2>
            <p className="text-xl text-gray-600">
              We work with the industry's leading truck accessory manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rough Country</h3>
              <p className="text-gray-600">Lift kits and suspension components</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ranch Hand</h3>
              <p className="text-gray-600">Heavy-duty bumpers and brush guards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Westin</h3>
              <p className="text-gray-600">Running boards and nerf bars</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">BAK Industries</h3>
              <p className="text-gray-600">Premium tonneau covers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Installation Process
            </h2>
            <p className="text-xl text-gray-600">
              Expert installation with attention to detail and quality craftsmanship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">Discuss your needs and recommend the best accessories</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Quote</h3>
              <p className="text-gray-600">Detailed quote for parts and professional installation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
              <p className="text-gray-600">Professional installation by experienced technicians</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Check</h3>
              <p className="text-gray-600">Final inspection and testing to ensure perfect fit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Delta Tire for Truck Accessories?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Installation</h3>
              <p className="text-gray-600">Professional technicians with truck modification experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">Premium accessories from trusted manufacturers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored accessories to meet your specific needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warranty Protection</h3>
              <p className="text-gray-600">Comprehensive warranties on parts and installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Customize Your Truck?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Get a custom quote for truck accessories and professional installation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Get Custom Quote
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Schedule Consultation
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
