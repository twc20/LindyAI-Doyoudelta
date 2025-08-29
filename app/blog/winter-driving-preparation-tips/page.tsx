import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Winter Driving Preparation: Essential Maintenance Tips | Delta Tire Blog",
  description: "Get your vehicle ready for winter weather with our comprehensive maintenance checklist. Expert winter driving tips from Delta Tire professionals.",
  keywords: "winter driving, winter maintenance, cold weather car care, winter tires, antifreeze, battery maintenance",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Star, Wrench, Shield, Car, Users, Award, CheckCircle, Calendar, User, ArrowLeft, Snowflake, Thermometer } from "lucide-react"

export default function WinterDrivingArticle() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-red-600">Delta Tire</a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/#services" className="text-gray-700 hover:text-red-600">Services</a>
              <a href="/#locations" className="text-gray-700 hover:text-red-600">Locations</a>
              <a href="/#about" className="text-gray-700 hover:text-red-600">About</a>
              <a href="/blog" className="text-red-600 font-semibold">Blog</a>
              <a href="/#contact" className="text-gray-700 hover:text-red-600">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:inline-flex" asChild>
                <a href="tel:505-287-7946">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" size="sm" className="mb-6" asChild>
            <a href="/blog" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </a>
          </Button>
          
          <div className="mb-6">
            <Badge variant="secondary" className="bg-red-100 text-red-600 mb-4">
              Maintenance
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Winter Driving Preparation: Essential Maintenance Tips
            </h1>
            <div className="flex items-center text-gray-600 space-x-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Delta Tire Team
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                August 20, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                6 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Winter weather can be tough on your vehicle, but proper preparation can help ensure safe, reliable transportation throughout the cold months. From New Mexico's high-altitude snow to Arizona's desert temperature swings, our region presents unique challenges that require specific attention to vehicle maintenance.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <div className="flex items-center mb-2">
                <Snowflake className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-600">Start Early</h3>
              </div>
              <p className="text-gray-700">
                Don't wait for the first snowfall. Begin your winter preparation in early fall to avoid the rush and ensure your vehicle is ready when temperatures drop.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Battery and Electrical System</h2>
            <p className="text-gray-700 mb-6">
              Cold weather is hard on batteries. A battery that works fine in summer may fail when temperatures drop below freezing. Here's what to check:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li><strong>Battery age:</strong> Most batteries last 3-5 years. If yours is approaching this age, consider replacement</li>
              <li><strong>Terminal connections:</strong> Clean corrosion and ensure tight connections</li>
              <li><strong>Load test:</strong> Have your battery professionally tested to ensure it can handle cold-weather demands</li>
              <li><strong>Alternator function:</strong> Ensure your charging system is working properly</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Tire Inspection and Preparation</h2>
            <p className="text-gray-700 mb-6">
              Your tires are your primary connection to the road, making them critical for winter safety:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Tread depth:</strong> Ensure at least 4/32" for winter conditions (6/32" is better)</li>
              <li><strong>Tire pressure:</strong> Cold weather reduces pressure; check monthly and adjust as needed</li>
              <li><strong>Tire age:</strong> Older tires become less flexible in cold weather</li>
              <li><strong>Winter tires:</strong> Consider dedicated winter tires for mountain driving</li>
            </ul>
            <p className="text-gray-700 mb-8">
              <strong>Pro Tip:</strong> Tire pressure drops about 1 PSI for every 10°F temperature decrease. Check pressure when tires are cold for accurate readings.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Cooling System and Antifreeze</h2>
            <p className="text-gray-700 mb-6">
              Your cooling system works year-round, and proper antifreeze protection is crucial:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li><strong>Antifreeze concentration:</strong> Should protect to at least -20°F in our region</li>
              <li><strong>Coolant condition:</strong> Replace if it's rusty, oily, or hasn't been changed in 2+ years</li>
              <li><strong>Hoses and belts:</strong> Check for cracks, fraying, or soft spots</li>
              <li><strong>Thermostat function:</strong> Ensure proper engine warm-up and temperature regulation</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Oil and Fluids</h2>
            <p className="text-gray-700 mb-6">
              Cold weather affects all your vehicle's fluids:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li><strong>Engine oil:</strong> Consider switching to a lower viscosity oil (5W-30 instead of 10W-30) for easier cold starts</li>
              <li><strong>Transmission fluid:</strong> Ensure proper level and condition</li>
              <li><strong>Brake fluid:</strong> Should be clear, not dark or contaminated</li>
              <li><strong>Power steering fluid:</strong> Check level and condition</li>
              <li><strong>Windshield washer fluid:</strong> Use winter-grade fluid that won't freeze</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Heating and Defrosting Systems</h2>
            <p className="text-gray-700 mb-6">
              Your comfort and visibility depend on these systems working properly:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li><strong>Heater operation:</strong> Test heat output and fan speeds</li>
              <li><strong>Defroster function:</strong> Ensure front and rear defrosters work effectively</li>
              <li><strong>Cabin air filter:</strong> Replace if dirty to improve airflow and heat efficiency</li>
              <li><strong>Heater hoses:</strong> Check for leaks or deterioration</li>
            </ul>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Winter Emergency Kit Essentials</h3>
              <p className="text-gray-700 mb-4">
                Keep these items in your vehicle during winter months:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Jumper cables or portable jump starter</li>
                  <li>Ice scraper and snow brush</li>
                  <li>Emergency flares or reflectors</li>
                  <li>Flashlight with extra batteries</li>
                  <li>First aid kit</li>
                </ul>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Blanket and warm clothing</li>
                  <li>Non-perishable snacks and water</li>
                  <li>Multi-tool or basic tools</li>
                  <li>Tire pressure gauge</li>
                  <li>Emergency contact information</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Lights and Visibility</h2>
            <p className="text-gray-700 mb-6">
              Winter conditions reduce visibility, making proper lighting crucial:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li><strong>All lights:</strong> Check headlights, taillights, brake lights, and turn signals</li>
              <li><strong>Headlight clarity:</strong> Clean or restore cloudy headlight lenses</li>
              <li><strong>Wiper blades:</strong> Replace if streaking or chattering</li>
              <li><strong>Windshield condition:</strong> Repair chips or cracks that could spread in cold weather</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Belts and Hoses</h2>
            <p className="text-gray-700 mb-6">
              Cold weather makes rubber components more brittle and prone to failure:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li><strong>Drive belts:</strong> Check for cracks, fraying, or glazing</li>
              <li><strong>Timing belt:</strong> Replace according to manufacturer schedule</li>
              <li><strong>Radiator hoses:</strong> Look for soft spots, cracks, or bulges</li>
              <li><strong>Heater hoses:</strong> Ensure proper connection and condition</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-center mb-2">
                <Thermometer className="w-5 h-5 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-red-600">High Altitude Considerations</h3>
              </div>
              <p className="text-gray-700">
                Our region's high altitude affects vehicle performance. Engines may run differently, and temperature swings can be extreme. Regular maintenance becomes even more critical at elevation.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Winter Inspection</h2>
            <p className="text-gray-700 mb-8">
              While you can check many items yourself, a professional winter inspection ensures nothing is missed. At Delta Tire, our comprehensive winter check includes all the systems mentioned above, plus computer diagnostics to identify potential issues before they become problems.
            </p>
          </div>
        </div>
      </article>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Winter?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Schedule your winter preparation service at any Delta Tire location
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" asChild>
              <a href="/services/maintenance">
                View Maintenance Services
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="bg-red-100 text-red-600 w-fit mb-2">
                  Tire Care
                </Badge>
                <CardTitle>
                  <a href="/blog/5-signs-your-tires-need-replacement" className="hover:text-red-600">
                    5 Signs Your Tires Need Replacement
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Learn the warning signs that indicate it's time for new tires and how to maximize your tire investment.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="bg-red-100 text-red-600 w-fit mb-2">
                  Alignments
                </Badge>
                <CardTitle>
                  <a href="/blog/wheel-alignment-frequency" className="hover:text-red-600">
                    How Often Should You Get a Wheel Alignment?
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Understanding wheel alignment frequency and the benefits of proper alignment for your vehicle.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4">Delta Tire</h3>
              <p className="text-gray-400">
                We treat your car like my car.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services/tires" className="hover:text-red-400">Tires</a></li>
                <li><a href="/services/truck-accessories" className="hover:text-red-400">Truck Accessories</a></li>
                <li><a href="/services/alignments" className="hover:text-red-400">Alignments</a></li>
                <li><a href="/services/brakes" className="hover:text-red-400">Brakes</a></li>
                <li><a href="/services/maintenance" className="hover:text-red-400">Maintenance</a></li>
                <li><a href="/services/ac-heater" className="hover:text-red-400">AC & Heater</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Locations</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Grants, NM - <a href="tel:505-287-7946" className="hover:text-red-400">(505) 287-7946</a></li>
                <li>Gallup, NM - <a href="tel:505-722-2945" className="hover:text-red-400">(505) 722-2945</a></li>
                <li>Farmington, NM - <a href="tel:505-325-4500" className="hover:text-red-400">(505) 325-4500</a></li>
                <li>Eagar, AZ - <a href="tel:928-333-3730" className="hover:text-red-400">(928) 333-3730</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="tel:505-287-7946" className="hover:text-red-400">Call for Service</a></li>
                <li><a href="/blog" className="hover:text-red-400">Blog</a></li>
                <li><a href="https://delta-careers-demo.lindy.site/careers-final-updated.html" target="_blank" className="hover:text-red-400">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Delta Tire. All rights reserved. | doyoudelta.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
