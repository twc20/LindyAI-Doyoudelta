import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Mail } from "lucide-react"
import { locations } from "@/lib/data/services"

export const metadata = {
  title: "Delta Tire Locations | Grants, Gallup, Farmington, Eagar",
  description: "Find Delta Tire locations near you! 4 convenient tire shops in Grants NM, Gallup NM, Farmington NM, and Eagar AZ. Professional tire service and auto repair.",
}

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            4 Convenient Locations
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent font-bold">Delta Difference</span> across New Mexico & Arizona. Professional tire service and trusted auto repair at all locations.
          </p>
        </section>

        {/* Locations Grid */}
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
                    Phone: <a href={`tel:${location.phone.replace(/[^\d]/g, '')}`} className="text-red-600 hover:underline font-semibold">{location.phone}</a>
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-400" />
                  <p className="text-gray-600">
                    Email: <a href={`mailto:${location.email}`} className="text-red-600 hover:underline">{location.email}</a>
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
                    Call {location.name.split(' ')[0]} Location
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas */}
        <section className="py-16 bg-white rounded-2xl shadow-lg mb-16">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serving Communities Across New Mexico & Arizona
              </h2>
              <p className="text-lg text-gray-600">
                Delta Tire proudly serves customers throughout the Four Corners region with professional tire service and expert auto repair.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-4">New Mexico Locations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Grants</strong> - Milan, Acoma, Laguna</li>
                  <li><strong>Gallup</strong> - Window Rock</li>
                  <li><strong>Farmington</strong> - Shiprock, Aztec, Bloomfield</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-4">Arizona Locations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Eagar</strong> - Show Low, Springerville</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Find Your Nearest Delta Tire Location</h2>
          <p className="text-xl mb-8 text-red-100">
            Professional tire service and expert auto repair at all 4 locations. Open today - call now!
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
            <a href="tel:505-287-7946">
              <Phone className="w-5 h-5 mr-2" />
              Call Nearest Location
            </a>
          </Button>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
