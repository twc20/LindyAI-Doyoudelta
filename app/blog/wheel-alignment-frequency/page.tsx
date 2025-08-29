import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How Often Should You Get a Wheel Alignment? | Delta Tire Blog",
  description: "Understanding wheel alignment frequency and the benefits of proper alignment for your vehicle. Expert advice from Delta Tire professionals.",
  keywords: "wheel alignment, alignment frequency, tire wear, vehicle alignment, suspension, steering",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Star, Wrench, Shield, Car, Users, Award, CheckCircle, Calendar, User, ArrowLeft, Settings, Target } from "lucide-react"

export default function WheelAlignmentArticle() {
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
              Alignments
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Often Should You Get a Wheel Alignment?
            </h1>
            <div className="flex items-center text-gray-600 space-x-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Delta Tire Team
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                August 15, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                5 min read
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
              Proper wheel alignment is crucial for vehicle safety, tire longevity, and fuel efficiency. But how often should you have your alignment checked? The answer depends on several factors, from your driving habits to road conditions. Let's explore the guidelines and warning signs that indicate it's time for an alignment service.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
              <div className="flex items-center mb-2">
                <Target className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-green-600">Quick Answer</h3>
              </div>
              <p className="text-gray-700">
                Most vehicles should have their alignment checked every 12,000-15,000 miles or annually, whichever comes first. However, certain conditions may require more frequent checks.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Standard Alignment Schedule</h2>
            <p className="text-gray-700 mb-6">
              While manufacturer recommendations vary, here are general guidelines for alignment frequency:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li><strong>Every 12,000-15,000 miles:</strong> Standard recommendation for most vehicles</li>
              <li><strong>Annually:</strong> Even if you don't drive many miles, alignment can drift over time</li>
              <li><strong>With new tires:</strong> Always check alignment when installing new tires</li>
              <li><strong>After suspension work:</strong> Any suspension or steering repairs require alignment</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Factors That Affect Alignment Frequency</h2>
            <p className="text-gray-700 mb-6">
              Several factors can cause your vehicle to go out of alignment more quickly:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Road Conditions</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Potholes and road damage:</strong> Common in our region, especially after winter</li>
              <li><strong>Construction zones:</strong> Uneven surfaces and debris can affect alignment</li>
              <li><strong>Unpaved roads:</strong> Gravel and dirt roads are harder on suspension components</li>
              <li><strong>Curb strikes:</strong> Hitting curbs or parking blocks can knock alignment off</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Driving Habits</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Aggressive driving:</strong> Hard cornering and sudden stops stress suspension</li>
              <li><strong>Speed:</strong> High-speed driving over rough roads increases wear</li>
              <li><strong>Heavy loads:</strong> Regularly carrying heavy cargo affects suspension geometry</li>
              <li><strong>Towing:</strong> Pulling trailers puts additional stress on alignment</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Age and Condition</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li><strong>Older vehicles:</strong> Worn suspension components lose alignment more quickly</li>
              <li><strong>High mileage:</strong> More wear on bushings, ball joints, and tie rods</li>
              <li><strong>Previous accidents:</strong> Frame damage can cause recurring alignment issues</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Warning Signs You Need an Alignment</h2>
            <p className="text-gray-700 mb-6">
              Don't wait for your scheduled interval if you notice these symptoms:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-red-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Car className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-600">Vehicle Pulling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Your vehicle pulls to one side when driving straight, requiring constant steering correction.</p>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-600">Steering Wheel Off-Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">The steering wheel is crooked when driving straight, even though the vehicle tracks properly.</p>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-600">Uneven Tire Wear</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Tires show wear on one edge, or wear patterns differ between left and right tires.</p>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-600">Vibration or Wandering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">The vehicle feels unstable, wanders on the highway, or vibrates through the steering wheel.</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Alignment</h2>
            <p className="text-gray-700 mb-6">
              Understanding the different types of alignment helps you make informed decisions:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Front-End Alignment (2-Wheel)</h3>
            <p className="text-gray-700 mb-6">
              Adjusts only the front wheels. Suitable for vehicles with solid rear axles that don't require adjustment. Less expensive but may not address all alignment issues.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Four-Wheel Alignment</h3>
            <p className="text-gray-700 mb-8">
              Adjusts all four wheels for optimal performance. Recommended for most modern vehicles with independent rear suspension. Provides the best results for tire wear and handling.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Proper Alignment</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-red-600">Safety Benefits</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Improved vehicle stability</li>
                    <li>Better steering response</li>
                    <li>Reduced risk of blowouts</li>
                    <li>Enhanced braking performance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-red-600">Economic Benefits</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Extended tire life</li>
                    <li>Improved fuel economy</li>
                    <li>Reduced suspension wear</li>
                    <li>Lower long-term costs</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Considerations for Our Region</h2>
            <p className="text-gray-700 mb-6">
              New Mexico and Arizona present unique challenges that may require more frequent alignment checks:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li><strong>Temperature extremes:</strong> Expansion and contraction affect suspension components</li>
              <li><strong>Elevation changes:</strong> Mountain driving puts extra stress on suspension</li>
              <li><strong>Seasonal road damage:</strong> Freeze-thaw cycles create potholes and road irregularities</li>
              <li><strong>Construction activity:</strong> Ongoing road work creates challenging driving conditions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Check Alignment More Frequently</h2>
            <p className="text-gray-700 mb-6">
              Consider more frequent alignment checks if you:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700">
              <li>Drive more than 15,000 miles annually</li>
              <li>Frequently drive on rough or unpaved roads</li>
              <li>Have hit a significant pothole or curb</li>
              <li>Notice any of the warning signs mentioned above</li>
              <li>Have an older vehicle with worn suspension components</li>
              <li>Regularly tow heavy loads</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Alignment Service</h2>
            <p className="text-gray-700 mb-8">
              Modern alignment requires sophisticated computer equipment to measure and adjust wheel angles precisely. At Delta Tire, we use state-of-the-art alignment machines that provide accurate measurements and ensure your vehicle meets manufacturer specifications. Our technicians also inspect suspension components during alignment service, identifying potential issues before they become costly problems.
            </p>
          </div>
        </div>
      </article>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need an Alignment Check?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Schedule your professional wheel alignment service today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold" asChild>
              <a href="/services/alignments">
                View Alignment Services
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
