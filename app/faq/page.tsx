'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Menu, X, ChevronDown, ChevronUp, Search, Wrench, Car, Shield, DollarSign, Building, Calendar } from "lucide-react"
import { Footer } from "@/components/shared/footer"
import Link from 'next/link'
import Image from 'next/image'

export default function FAQPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleFAQ = (id: string) => setOpenFAQ(openFAQ === id ? null : id)

  const faqCategories = [
    {
      id: 'tire-care',
      title: 'Tire Care & Maintenance',
      icon: <Car className="w-6 h-6" />,
      faqs: [
        {
          id: 'tire-rotation',
          question: 'How often should I rotate my tires?',
          answer: `Every vehicle has its own manufacturer recommendations for tire rotation. As a general rule of thumb, regular rotation helps tires wear evenly and last longer. Driving conditions in the Four Corners — from highways to mountain roads — can accelerate tire wear, so it's important to stay consistent with rotation.

At Delta Tire, we include a free tire inspection with every oil change because catching problems early saves you money long-term. Our technicians can spot wear patterns that indicate when your next rotation should happen, not just when the calendar says it's time.`,
          cta: 'Schedule Your Tire Rotation at Delta Tire'
        },
        {
          id: 'tire-replacement',
          question: 'When should I replace my tires?',
          answer: `Manufacturer guidelines set the standard, but here are signs you shouldn't ignore: cracks in the sidewall, bulges or bubbles, uneven wear, vibration while driving, or simply age. Rubber degrades over time, especially in our high desert climate with lots of UV exposure and temperature extremes.

Our digital vehicle inspections include detailed tire analysis with photos, so you can see exactly what we're seeing. We'll show you the wear patterns and explain what they mean for your safety and wallet.`,
          cta: 'Schedule Your Free Tire Inspection'
        },
        {
          id: 'tpms-light',
          question: 'Why is my tire pressure light on?',
          answer: `Your Tire Pressure Monitoring System (TPMS) alerts you when pressure drops below the manufacturer's recommended level. Temperature swings, slow leaks, valve stem issues, and natural pressure loss can all trigger the light.

We offer free tire pressure checks at all our locations because proper inflation affects everything: fuel economy, tire life, handling, and safety. Our technicians will check all four tires plus your spare, look for obvious damage, and reset your TPMS if needed.`,
          cta: 'Get Your Free Tire Pressure Check'
        },
        {
          id: 'tire-brands',
          question: 'What tire brands do you carry?',
          answer: `We carry all major tire brands including Michelin, Goodyear, BFGoodrich, Continental, Bridgestone, Cooper, Falken, Firestone, General, Haida, Hankook, Hercules, Ironman, Kumho, Mastercraft, Mickey Thompson, Mileking, Nexen, Nitto, Pirelli, Samson, Toyo, Uniroyal, and Yokohama.

Our technicians will help you choose the right tire for your vehicle, driving habits, and budget. We stock quality tires for cars, trucks, SUVs, and commercial vehicles.`,
          cta: 'View All Tire Brands We Carry'
        }
      ]
    },
    {
      id: 'engine-oil',
      title: 'Engine & Oil Maintenance',
      icon: <Wrench className="w-6 h-6" />,
      faqs: [
        {
          id: 'oil-change-frequency',
          question: 'How often should I change my oil?',
          answer: `Oil change frequency depends on manufacturer recommendations and your driving habits. In the Four Corners, dusty roads, short trips, and temperature extremes often mean more frequent changes than the "normal" schedule.

Our technicians track your specific vehicle and driving patterns to recommend the right interval for you. We're not trying to sell you more oil changes — we're trying to keep your engine running strong for the long haul.`,
          cta: 'Schedule Your Oil Change Today'
        },
        {
          id: 'oil-types',
          question: 'What\'s the difference between synthetic and conventional oil?',
          answer: `Conventional oil is refined crude oil that works fine under normal conditions. Synthetic oil is engineered to perform better across temperature extremes and typically lasts longer. Synthetic blends offer a middle ground of value and protection.

Our technicians will recommend what makes sense for your vehicle, budget, and driving habits.`,
          cta: 'Compare Oil Options for Your Vehicle'
        },
        {
          id: 'check-engine-light',
          question: 'Why is my check engine light on?',
          answer: `That light is your car's way of saying something isn't operating within normal parameters. Causes can range from something simple like a loose gas cap to more complex issues like sensors, ignition, or catalytic converters.

Here's how we handle it: Delta Tire uses our 6 C's Diagnostic Process — Concern, Codes, Condition, Cause, Correction, Confirm. That means we don't just read a code and guess. We take your concern, scan for codes, evaluate the vehicle's condition, determine the root cause, provide the correct repair, and confirm the fix.

This ensures you're not paying for unnecessary parts or guesswork — just an honest, thorough diagnosis.`,
          cta: 'Schedule Your Diagnostic Scan'
        }
      ]
    },
    {
      id: 'brake-safety',
      title: 'Brake Systems & Safety',
      icon: <Shield className="w-6 h-6" />,
      faqs: [
        {
          id: 'brake-pads',
          question: 'How do I know if I need new brake pads?',
          answer: `Brake pads and components wear at different rates depending on your vehicle and driving habits. General rule of thumb: if you hear squealing, grinding, feel vibration, or see a brake warning light, it's time for an inspection.

Our free safety inspections include brake system checks. We'll measure pad thickness, check rotors, test brake fluid, and look for leaks.`,
          cta: 'Schedule Your Free Brake Inspection'
        },
        {
          id: 'brake-fluid',
          question: 'How often should I replace brake fluid?',
          answer: `Every manufacturer sets its own recommendations, but brake fluid degrades over time by absorbing moisture, which reduces performance and can cause internal corrosion. Fresh fluid should be clear, not dark or contaminated.

We test brake fluid as part of our comprehensive inspections and let you know when service is needed.`,
          cta: 'Schedule Your Brake Fluid Service'
        },
        {
          id: 'brake-squealing',
          question: 'Why do my brakes squeal?',
          answer: `Brake squealing is often caused by wear indicators on pads, dust buildup, or rotor issues. While some squealing is normal, consistent squealing or grinding means it's time to get checked before damage occurs.

Our technicians can quickly diagnose brake noises and explain exactly what's causing them.`,
          cta: 'Get Your Free Brake Noise Diagnosis'
        }
      ]
    },
    {
      id: 'seasonal-prep',
      title: 'Seasonal Preparation',
      icon: <Calendar className="w-6 h-6" />,
      faqs: [
        {
          id: 'winter-prep',
          question: 'How should I prepare my car for winter in the Four Corners?',
          answer: `Winter weather here is unpredictable, with sudden shifts from warm sun to snow-covered passes. General prep includes checking your battery, tires, fluids, heater/defroster, and keeping an emergency kit.

Our winter preparation service covers all these items in one appointment, so you're ready for whatever winter throws at you.`,
          cta: 'Schedule Your Winter Preparation Service'
        },
        {
          id: 'summer-prep',
          question: 'What should I check before a summer road trip?',
          answer: `Extreme heat, mountain climbs, and long distances put stress on vehicles. General prep includes cooling system checks, tire condition and pressure, fresh fluids, A/C system inspection, and an emergency kit.

Our pre-trip inspection covers all major systems and provides peace of mind before you hit the road.`,
          cta: 'Schedule Your Pre-Trip Inspection'
        },
        {
          id: 'winter-tires',
          question: 'When should I switch to winter tires?',
          answer: `General rule of thumb: when average daily temps fall below 45°F, winter tires start performing better than all-season tires. For most drivers, good all-season tires are sufficient, but those who frequently travel mountain passes or icy roads may benefit from dedicated winter tires.

Our technicians can assess your driving needs and recommend the best option for your situation.`,
          cta: 'Discuss Winter Tire Options'
        }
      ]
    },
    {
      id: 'cost-transparency',
      title: 'Cost Transparency & Value',
      icon: <DollarSign className="w-6 h-6" />,
      faqs: [
        {
          id: 'maintenance-budget',
          question: 'How much should I budget for car maintenance?',
          answer: `Every vehicle and driver is different, but setting aside a monthly amount for maintenance is a smart move. General rule of thumb: newer vehicles cost less, older vehicles may need more frequent repairs.

Preventive maintenance always saves money long-term. Our VIP membership program helps spread costs with discounts and priority scheduling.`,
          cta: 'Learn About VIP Membership Benefits'
        },
        {
          id: 'estimate-differences',
          question: 'Why do repair estimates vary so much between shops?',
          answer: `Differences often come from part quality, technician experience, diagnostic approach, and warranty coverage. At Delta Tire, we explain exactly what you're getting for your money, use quality parts, and stand behind our work.`,
          cta: 'Get Your Transparent Estimate Today'
        },
        {
          id: 'oil-change-service',
          question: 'What\'s included in your oil change service?',
          answer: `Our oil change isn't just about draining and refilling oil. Each service includes the manufacturer-recommended oil and filter, plus a comprehensive vehicle health check.

We inspect fluids, belts, hoses, battery, tires, lights, and brakes. Every oil change comes with a digital inspection report — including photos — so you can see exactly what we see.`,
          cta: 'Schedule Your Comprehensive Oil Change'
        }
      ]
    },
    {
      id: 'business-financing',
      title: 'Business & Financing',
      icon: <Building className="w-6 h-6" />,
      faqs: [
        {
          id: 'fleet-services',
          question: 'Do you service business fleets?',
          answer: `Yes. Delta Tire offers comprehensive fleet maintenance services including inspections, maintenance tracking, and priority turnaround to keep your business vehicles on the road. We work with small and large fleets across the Four Corners.

Our fleet program includes discounts not only for fleet vehicles but also for employees' personal vehicles. This helps businesses provide additional value to their team while maintaining their commercial vehicles professionally.`,
          cta: 'Learn About Fleet Services'
        },
        {
          id: 'financing-options',
          question: 'Do you offer financing for repairs?',
          answer: `Yes. We understand repairs don't always come at the best time. Delta Tire offers in-house financing options to help spread out costs so you can get back on the road safely without delay.`,
          cta: 'Ask About Financing Options'
        },
        {
          id: 'warranty-coverage',
          question: 'What warranty do you provide on repairs?',
          answer: `We stand behind our work with comprehensive warranties on all repairs and services. Warranty terms vary by service type, but we always explain what's covered before we begin work.

Our goal is your complete satisfaction and peace of mind with every service.`,
          cta: 'Learn About Our Warranty Coverage'
        },
        {
          id: 'appointment-scheduling',
          question: 'Do I need an appointment?',
          answer: `While we accept walk-ins, scheduling an appointment ensures faster service and guarantees your preferred time slot. VIP members get priority scheduling.

You can call any of our four locations or schedule online for your convenience.`,
          cta: 'Schedule Your Appointment Today'
        }
      ]
    }
  ]

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Mobile-First Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/delta-tire-logo.png"
                alt="Delta Tire Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Services
              </Link>
              <Link href="/locations" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Locations
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/vip" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                VIP Program
              </Link>
              <Link href="/faq" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-medium transition-colors">
                FAQ
              </Link>
              <Link href="/fleet" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Fleet Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/services" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/locations" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Locations
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/vip" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  VIP Program
                </Link>
                <Link 
                  href="/faq" 
                  className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  href="/fleet" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fleet Services
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <a 
                    href="tel:505-287-7946"
                    className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now - Open Today!
                  </a>
                  <Link 
                    href="/locations"
                    className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 font-medium transition-colors flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Find Location
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Delta Tire Automotive FAQ
            </h1>
            <p className="text-xl sm:text-2xl text-red-100 font-light mb-4">
              Your Trusted Four Corners Automotive Resource
            </p>
            <p className="text-lg text-red-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Welcome to Delta Tire's comprehensive automotive FAQ knowledge base — your go-to resource for expert automotive advice in the Four Corners region. Since 2015, we've been treating every car like our own, and now we're sharing that expertise with you.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQ topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No FAQs found matching your search.</p>
              <Button 
                onClick={() => setSearchTerm('')}
                className="mt-4 bg-red-600 hover:bg-red-700"
              >
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFAQs.map((category) => (
                <div key={category.id} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-center mb-8">
                    <div className="bg-red-100 p-3 rounded-full mr-4">
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.faqs.map((faq) => (
                      <div key={faq.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(faq.id)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          {openFAQ === faq.id ? (
                            <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        {openFAQ === faq.id && (
                          <div className="px-6 pb-6">
                            <div className="text-gray-600 leading-relaxed whitespace-pre-line mb-4">
                              {faq.answer}
                            </div>
                            <Button className="bg-red-600 hover:bg-red-700 text-white">
                              {faq.cta}
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Our expert technicians are here to help. Contact us today for personalized automotive advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
              <a href="tel:505-287-7946">
                <Phone className="w-5 h-5 mr-2" />
                Call Now - Open Today!
              </a>
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
