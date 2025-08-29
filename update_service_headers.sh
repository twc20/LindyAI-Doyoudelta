#!/bin/bash

# Mobile-first header component to replace old Header imports
MOBILE_HEADER=''\''use client'\''

import { useState } from '\''react'\''
import { Menu, X, MapPin, Phone } from "lucide-react"
import Link from '\''next/link'\''
import Image from '\''next/image'\''

function MobileHeader({ currentPage = "" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
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
            <Link href="/" className={`font-medium transition-colors ${currentPage === "home" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}>
              Home
            </Link>
            <Link href="/services" className={`font-medium transition-colors ${currentPage === "services" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}>
              Services
            </Link>
            <Link href="/locations" className={`font-medium transition-colors ${currentPage === "locations" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}>
              Locations
            </Link>
            <Link href="/about" className={`font-medium transition-colors ${currentPage === "about" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}>
              About
            </Link>
            <Link href="/vip" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-medium transition-colors">
              VIP Program
            </Link>
            <Link href="/contact" className={`font-medium transition-colors ${currentPage === "contact" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}>
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
                className={`font-medium py-2 transition-colors ${currentPage === "home" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={`font-medium py-2 transition-colors ${currentPage === "services" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/locations" 
                className={`font-medium py-2 transition-colors ${currentPage === "locations" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </Link>
              <Link 
                href="/about" 
                className={`font-medium py-2 transition-colors ${currentPage === "about" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/vip" 
                className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                VIP Program - Coming Soon
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium py-2 transition-colors ${currentPage === "contact" ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
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
  )
}'

# List of service pages to update
SERVICE_PAGES=(
  "app/services/tires/page.tsx"
  "app/services/alignments/page.tsx"
  "app/services/brakes/page.tsx"
  "app/services/maintenance/page.tsx"
  "app/services/batteries/page.tsx"
  "app/services/inspections/page.tsx"
  "app/services/truck-accessories/page.tsx"
  "app/services/ac-heater/page.tsx"
)

echo "Updating service pages with mobile-first headers..."

for page in "${SERVICE_PAGES[@]}"; do
  if [ -f "$page" ]; then
    echo "Updating $page..."
    
    # Create backup
    cp "$page" "$page.backup"
    
    # Replace Header import and usage
    sed -i 's/import { Header } from "@\/components\/shared\/header"//' "$page"
    sed -i 's/<Header \/>/      <MobileHeader currentPage="services" \/>/' "$page"
    
    # Add mobile header component and required imports at the top
    sed -i "1i\\$MOBILE_HEADER" "$page"
    
    echo "Updated $page successfully"
  else
    echo "Warning: $page not found"
  fi
done

echo "All service pages updated with mobile-first headers!"
