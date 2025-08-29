import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "5 Signs Your Tires Need Replacement | Delta Tire Blog",
  description: "Learn the warning signs that indicate it's time for new tires. Expert advice from Delta Tire on tire safety, tread depth, and when to replace your tires.",
  keywords: "tire replacement, tire safety, tread depth, tire wear, when to replace tires, tire maintenance",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Star, Wrench, Shield, Car, Users, Award, CheckCircle, Calendar, User, ArrowLeft, AlertTriangle } from "lucide-react"

export default function TireReplacementArticle() {
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
              Tire Care
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              5 Signs Your Tires Need Replacement
            </h1>
            <div className="flex items-center text-gray-600 space-x-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Delta Tire Team
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                August 25, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                4 min read
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
              Your tires are the only part of your vehicle that touches the road, making them critical for your safety and vehicle performance. Knowing when to replace them can save you from dangerous blowouts, poor fuel economy, and costly repairs. Here are five clear signs that it's time for new tires.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-red-600">Safety First</h3>
              </div>
              <p className="text-gray-700">
                Don't wait until it's too late. If you notice any of these signs, visit Delta Tire immediately for a professional inspection.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Tread Depth Below 2/32"</h2>
            <p className="text-gray-700 mb-6">
              The most important indicator of tire replacement is tread depth. When your tread depth reaches 2/32" or less, your tires are legally worn out and must be replaced. At this depth, your tires lose their ability to grip the road effectively, especially in wet conditions.
            </p>
            <p className="text-gray-700 mb-8">
              <strong>The Penny Test:</strong> Insert a penny into your tire's tread groove with Lincoln's head facing down. If you can see the top of Lincoln's head, your tread depth is at or below 2/32" and it's time for new tires.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Uneven Wear Patterns</h2>
            <p className="text-gray-700 mb-6">
              Uneven tire wear can indicate several issues including improper alignment, unbalanced wheels, or suspension problems. Common patterns include:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li><strong>Edge wear:</strong> Indicates under-inflation or alignment issues</li>
              <li><strong>Center wear:</strong> Usually caused by over-inflation</li>
              <li><strong>Cupping or scalloping:</strong> Often indicates suspension or balance problems</li>
              <li><strong>One-sided wear:</strong> Typically caused by alignment issues</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Visible Damage</h2>
            <p className="text-gray-700 mb-6">
              Any visible damage to your tires is a serious safety concern. Look for:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li><strong>Cracks in the sidewall:</strong> Can lead to sudden tire failure</li>
              <li><strong>Bulges or blisters:</strong> Indicate internal damage and potential blowout risk</li>
              <li><strong>Punctures or cuts:</strong> May compromise tire integrity</li>
              <li><strong>Missing tread blocks:</strong> Reduces traction and handling</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Age of the Tires</h2>
            <p className="text-gray-700 mb-6">
              Even if your tires look good, age matters. Most tire manufacturers recommend replacing tires every 5 years, regardless of tread depth. Rubber compounds deteriorate over time, even with minimal use.
            </p>
            <p className="text-gray-700 mb-8">
              <strong>How to check tire age:</strong> Look for the DOT code on your tire's sidewall. The last four digits indicate the week and year of manufacture (e.g., "2419" means the 24th week of 2019).
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Performance Issues</h2>
            <p className="text-gray-700 mb-6">
              If you're experiencing any of these performance issues, your tires may need replacement:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li><strong>Longer stopping distances:</strong> Especially noticeable in wet conditions</li>
              <li><strong>Vibration or noise:</strong> May indicate internal tire damage</li>
              <li><strong>Poor traction:</strong> Slipping or sliding, especially when accelerating or turning</li>
              <li><strong>Frequent air pressure loss:</strong> Could indicate tire damage or aging</li>
            </ul>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Maximize Your Tire Investment</h3>
              <p className="text-gray-700 mb-4">
                To get the most out of your new tires:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Maintain proper air pressure (check monthly)</li>
                <li>Rotate tires every 5,000-7,500 miles</li>
                <li>Keep wheels properly aligned</li>
                <li>Balance wheels when installing new tires</li>
                <li>Avoid aggressive driving and hard braking</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">When in Doubt, Get a Professional Inspection</h2>
            <p className="text-gray-700 mb-8">
              At Delta Tire, our experienced technicians can assess your tire condition and help you make informed decisions about replacement. We offer complimentary tire inspections with every service visit, so you'll always know where you stand.
            </p>
          </div>
        </div>
      </article>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need New Tires?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Visit any Delta Tire location for expert tire service and competitive prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" asChild>
              <a href="/services/tires">
                View Tire Services
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
                  Maintenance
                </Badge>
                <CardTitle>
                  <a href="/blog/winter-driving-preparation-tips" className="hover:text-red-600">
                    Winter Driving Preparation: Essential Maintenance Tips
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get your vehicle ready for winter weather with our comprehensive maintenance checklist.</p>
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
