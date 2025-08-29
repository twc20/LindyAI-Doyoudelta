#!/bin/bash

# Fix maintenance page
cat > app/services/maintenance/page.tsx << 'MAINTENANCE_EOF'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Auto Maintenance & Oil Change | Delta Tire - NM & AZ",
  description: "Professional auto maintenance, oil changes, fluid services & preventive care. Expert automotive service at 4 locations in New Mexico & Arizona.",
  keywords: "auto maintenance, oil change, fluid service, preventive maintenance, automotive service, New Mexico, Arizona",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Wrench } from "lucide-react"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Auto Maintenance & Oil Changes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Professional automotive maintenance across New Mexico & Arizona
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

      <Footer />
    </div>
  )
}
MAINTENANCE_EOF

# Fix batteries page
cat > app/services/batteries/page.tsx << 'BATTERIES_EOF'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Battery & Electrical Service | Delta Tire - NM & AZ",
  description: "Professional battery testing, replacement & electrical service. Quality batteries and expert installation at 4 locations in New Mexico & Arizona.",
  keywords: "battery service, battery replacement, electrical service, car battery, automotive electrical, New Mexico, Arizona",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Wrench } from "lucide-react"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"

export default function BatteriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Battery & Electrical Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Professional battery and electrical service across New Mexico & Arizona
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

      <Footer />
    </div>
  )
}
BATTERIES_EOF

# Fix inspections page
cat > app/services/inspections/page.tsx << 'INSPECTIONS_EOF'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vehicle Inspections | Delta Tire - NM & AZ",
  description: "Professional vehicle inspections and safety checks. Comprehensive automotive inspections at 4 locations in New Mexico & Arizona.",
  keywords: "vehicle inspection, safety inspection, automotive inspection, car inspection, New Mexico, Arizona",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Wrench } from "lucide-react"
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
              Vehicle Inspections
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Professional vehicle inspections across New Mexico & Arizona
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

      <Footer />
    </div>
  )
}
INSPECTIONS_EOF

# Fix truck-accessories page
cat > app/services/truck-accessories/page.tsx << 'TRUCK_EOF'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Truck Accessories & Modifications | Delta Tire - NM & AZ",
  description: "Professional truck accessories installation and modifications. Lift kits, running boards, tonneau covers at 4 locations in New Mexico & Arizona.",
  keywords: "truck accessories, lift kits, running boards, tonneau covers, truck modifications, New Mexico, Arizona",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Wrench } from "lucide-react"
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
              Professional truck accessories installation across New Mexico & Arizona
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

      <Footer />
    </div>
  )
}
TRUCK_EOF

# Fix ac-heater page
cat > app/services/ac-heater/page.tsx << 'AC_EOF'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AC & Heater Service | Delta Tire - NM & AZ",
  description: "Professional AC and heater repair service. Climate control system service at 4 locations in New Mexico & Arizona.",
  keywords: "AC repair, heater service, climate control, air conditioning, HVAC service, New Mexico, Arizona",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Wrench } from "lucide-react"
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
              AC & Heater Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Professional climate control service across New Mexico & Arizona
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

      <Footer />
    </div>
  )
}
AC_EOF

echo "All service pages have been fixed!"
