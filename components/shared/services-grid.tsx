import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/data/services"
import { ServiceIcons } from "./service-icons"

interface ServicesGridProps {
  title?: string
  description?: string
  showAll?: boolean
}

const iconMap = {
  'tire-service': ServiceIcons.TireService,
  'auto-repair': ServiceIcons.AutoRepair,
  'oil-change': ServiceIcons.OilChange,
  'brake-repair': ServiceIcons.BrakeRepair,
  'wheel-alignment': ServiceIcons.WheelAlignment,
  'truck-accessories': ServiceIcons.TruckAccessories,
  'battery-electrical': ServiceIcons.BatteryElectrical,
  'ac-heater': ServiceIcons.ACHeaterRepair,
}

const serviceLinks = {
  'tire-service': '/services/tires',
  'auto-repair': '/services/maintenance',
  'oil-change': '/services/maintenance',
  'brake-repair': '/services/brakes',
  'wheel-alignment': '/services/alignments',
  'truck-accessories': '/services/truck-accessories',
  'battery-electrical': '/services/batteries',
  'ac-heater': '/services/ac-heater',
}

export function ServicesGrid({ 
  title = "Complete Automotive Services",
  description = "Experience the Delta Difference in every service we provide. Professional tire service, expert auto repair, and trusted automotive care in New Mexico & Arizona.",
  showAll = true 
}: ServicesGridProps) {
  const displayServices = showAll ? services : services.slice(0, 4)

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayServices.map((service) => {
            const IconComponent = iconMap[service.id as keyof typeof iconMap]
            const serviceLink = serviceLinks[service.id as keyof typeof serviceLinks]
            
            return (
              <Link key={service.id} href={serviceLink} className="block">
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white h-full cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {IconComponent && <IconComponent />}
                    </div>
                    <CardTitle className="text-xl font-bold text-red-600 group-hover:text-red-700 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-center">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.services.map((item, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <span className="text-red-600 mr-2 font-bold">•</span>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500 italic text-center">
                      {service.brands}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
