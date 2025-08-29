#!/bin/bash

# Function to update a single service page
update_service_page() {
    local page_path="$1"
    local page_name=$(basename $(dirname "$page_path"))
    
    echo "Updating $page_path..."
    
    # Create backup
    cp "$page_path" "$page_path.backup"
    
    # Create temporary file with mobile-first header
    cat > temp_header.tsx << 'HEADER_EOF'
'use client'

import type { Metadata } from "next"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Wrench, Menu, X } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from "@/components/shared/footer"
HEADER_EOF

    # Extract metadata and function content from original file
    grep -A 10 "export const metadata" "$page_path.backup" >> temp_header.tsx
    echo "" >> temp_header.tsx
    
    # Add function declaration with mobile navigation
    cat >> temp_header.tsx << 'FUNC_EOF'
export default function ServicePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-white">
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
              <Link href="/services" className="text-red-600 font-medium">
                Services
              </Link>
              <Link href="/locations" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Locations
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/vip" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-medium transition-colors">
                VIP Program
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
                  className="text-red-600 font-medium py-2"
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
                  className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  VIP Program - Coming Soon
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
FUNC_EOF

    # Extract content after <Header /> from original file
    sed -n '/<Header \/>/,$p' "$page_path.backup" | tail -n +2 >> temp_header.tsx
    
    # Replace the file
    mv temp_header.tsx "$page_path"
    
    echo "✅ Updated $page_path successfully"
}

# List of service pages to update
SERVICE_PAGES=(
    "app/services/brakes/page.tsx"
    "app/services/alignments/page.tsx"
    "app/services/maintenance/page.tsx"
    "app/services/batteries/page.tsx"
    "app/services/inspections/page.tsx"
    "app/services/truck-accessories/page.tsx"
    "app/services/ac-heater/page.tsx"
)

echo "🚀 Starting mobile navigation updates for service pages..."
echo ""

for page in "${SERVICE_PAGES[@]}"; do
    if [ -f "$page" ]; then
        update_service_page "$page"
    else
        echo "⚠️  Warning: $page not found"
    fi
    echo ""
done

echo "🎉 All service pages updated with mobile-first navigation!"
echo ""
echo "Updated pages:"
for page in "${SERVICE_PAGES[@]}"; do
    if [ -f "$page" ]; then
        echo "✅ $page"
    fi
done
