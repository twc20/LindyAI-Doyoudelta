import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Mail, Star } from "lucide-react"
import { locations } from "@/lib/data/services"

export const metadata = {
  title: "Contact Delta Tire | Call Today for Service",
  description: "Contact Delta Tire for professional tire service and auto repair. 4 locations in NM & AZ. Call (505) 287-7946 for immediate service. Open today!",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Delta Tire
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Ready to experience the <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent font-bold">Delta Difference</span>? Contact us today for professional tire service, expert auto repair, and discover what "Do You Delta" really means!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Call Now - Open Today!
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center bg-red-50 p-6 rounded-xl">
              <Phone className="w-6 h-6 mr-3 text-red-600" />
              <span className="font-semibold">Call for immediate service</span>
            </div>
            <div className="flex items-center justify-center bg-red-50 p-6 rounded-xl">
              <MapPin className="w-6 h-6 mr-3 text-red-600" />
              <span className="font-semibold">4 convenient locations</span>
            </div>
            <div className="flex items-center justify-center bg-red-50 p-6 rounded-xl">
              <Star className="w-6 h-6 mr-3 text-red-600" />
              <span className="font-semibold">★★★★★ Professional Service</span>
            </div>
          </div>
        </section>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {locations.map((location) => (
            <Card key={location.id} className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl">
                  <MapPin className="w-6 h-6 mr-3 text-red-600" />
                  {location.name}
                </CardTitle>
                <p className="text-lg text-red-600 font-semibold">{location.subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-lg"><strong>{location.address}</strong></p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gray-400" />
                  <p className="text-gray-600">
                    <a href={`tel:${location.phone.replace(/[^\d]/g, '')}`} className="text-red-600 hover:underline font-semibold text-xl">{location.phone}</a>
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-400" />
                  <p className="text-gray-600">
                    <a href={`mailto:${location.email}`} className="text-red-600 hover:underline">{location.email}</a>
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="font-semibold text-gray-900">{location.hours}</span>
                </div>
                
                <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">{location.serving}</p>
                
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition-all" asChild>
                  <a href={`tel:${location.phone.replace(/[^\d]/g, '')}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call {location.name.split(' ')[0]} Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Service */}
        <section className="py-16 bg-white rounded-2xl shadow-lg mb-16">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need Emergency Tire Service?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Flat tire? Tire blowout? We're here to help! Call any of our locations for immediate tire service and emergency auto repair.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-red-600 mb-3">Emergency Services</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Flat Tire Repair</li>
                  <li>• Emergency Tire Replacement</li>
                  <li>• Roadside Assistance</li>
                  <li>• Battery Jump Start</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-red-600 mb-3">Why Call Delta Tire?</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Fast Response Time</li>
                  <li>• Professional Technicians</li>
                  <li>• Quality Parts & Service</li>
                  <li>• Fair, Honest Pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Delta Difference?</h2>
          <p className="text-xl mb-8 text-red-100">
            Professional tire service and expert auto repair at 4 convenient locations. Open today - call now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Call Now for Service
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all" asChild>
              <a href="/services">
                View All Services
              </a>
            </Button>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
