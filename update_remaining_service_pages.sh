#!/bin/bash

# List of remaining service pages to update
SERVICE_PAGES=(
  "app/services/brakes/page.tsx"
  "app/services/alignments/page.tsx"
  "app/services/maintenance/page.tsx"
  "app/services/batteries/page.tsx"
  "app/services/inspections/page.tsx"
  "app/services/truck-accessories/page.tsx"
  "app/services/ac-heater/page.tsx"
)

echo "Updating remaining service pages with mobile-first headers..."

for page in "${SERVICE_PAGES[@]}"; do
  if [ -f "$page" ]; then
    echo "Updating $page..."
    
    # Create backup
    cp "$page" "$page.backup"
    
    # Add 'use client' directive at the top
    sed -i "1i 'use client'\n" "$page"
    
    # Update imports - add useState and mobile navigation icons
    sed -i 's/import { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award/import { useState } from '\''react'\''\nimport { Phone, MapPin, Clock, Star, CheckCircle, Car, Shield, Award, Menu, X/g' "$page"
    
    # Add additional imports if Wrench is present
    sed -i 's/, Wrench } from "lucide-react"/, Wrench, Menu, X } from "lucide-react"\nimport Link from '\''next\/link'\''\nimport Image from '\''next\/image'\''/g' "$page"
    
    # Handle case where Wrench is not present
    sed -i 's/ } from "lucide-react"/ } from "lucide-react"\nimport Link from '\''next\/link'\''\nimport Image from '\''next\/image'\''/g' "$page"
    
    # Remove old Header import
    sed -i '/import { Header } from "@\/components\/shared\/header"/d' "$page"
    
    # Replace the function declaration to add useState
    sed -i 's/export default function \([A-Za-z]*\)Page() {/export default function \1Page() {\n  const [isMenuOpen, setIsMenuOpen] = useState(false)\n  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)/' "$page"
    
    # Replace <Header /> with mobile-first header
    sed -i 's/<Header \/>/      {\/\* Mobile-First Header \*\/}\n      <header className="bg-white shadow-sm sticky top-0 z-50">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n          <div className="flex justify-between items-center py-4">\n            {\/\* Logo \*\/}\n            <Link href="\/" className="flex items-center">\n              <Image\n                src="\/delta-tire-logo.png"\n                alt="Delta Tire Logo"\n                width={120}\n                height={40}\n                className="h-10 w-auto"\n              \/>\n            <\/Link>\n\n            {\/\* Desktop Navigation \*\/}\n            <nav className="hidden lg:flex items-center space-x-8">\n              <Link href="\/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">\n                Home\n              <\/Link>\n              <Link href="\/services" className="text-red-600 font-medium">\n                Services\n              <\/Link>\n              <Link href="\/locations" className="text-gray-700 hover:text-red-600 font-medium transition-colors">\n                Locations\n              <\/Link>\n              <Link href="\/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">\n                About\n              <\/Link>\n              <Link href="\/vip" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 font-medium transition-colors">\n                VIP Program\n              <\/Link>\n              <Link href="\/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">\n                Contact\n              <\/Link>\n            <\/nav>\n\n            {\/\* Mobile Menu Button \*\/}\n            <button\n              onClick={toggleMenu}\n              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"\n              aria-label="Toggle menu"\n            >\n              {isMenuOpen ? <X className="h-6 w-6" \/> : <Menu className="h-6 w-6" \/>}\n            <\/button>\n          <\/div>\n\n          {\/\* Mobile Navigation Menu \*\/}\n          {isMenuOpen \&\& (\n            <div className="lg:hidden border-t border-gray-200 py-4">\n              <nav className="flex flex-col space-y-4">\n                <Link \n                  href="\/" \n                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"\n                  onClick={() => setIsMenuOpen(false)}\n                >\n                  Home\n                <\/Link>\n                <Link \n                  href="\/services" \n                  className="text-red-600 font-medium py-2"\n                  onClick={() => setIsMenuOpen(false)}\n                >\n                  Services\n                <\/Link>\n                <Link \n                  href="\/locations" \n                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"\n                  onClick={() => setIsMenuOpen(false)}\n                >\n                  Locations\n                <\/Link>\n                <Link \n                  href="\/about" \n                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"\n                  onClick={() => setIsMenuOpen(false)}\n                >\n                  About\n                <\/Link>\n                <Link \n                  href="\/vip" \n                  className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors text-center"\n                  onClick={() => setIsMenuOpen(false)}\n                >\n                  VIP Program - Coming Soon\n                <\/Link>\n                <Link \n                  href="\/contact" \n                  className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"\n                  onClick={() => setIsMenuOpen(false)}\n                >\n                  Contact\n                <\/Link>\n                \n                {\/\* Mobile CTA Buttons \*\/}\n                <div className="pt-4 border-t border-gray-200 space-y-3">\n                  <a \n                    href="tel:505-287-7946"\n                    className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors flex items-center justify-center"\n                  >\n                    <Phone className="w-4 h-4 mr-2" \/>\n                    Call Now - Open Today!\n                  <\/a>\n                  <Link \n                    href="\/locations"\n                    className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 font-medium transition-colors flex items-center justify-center"\n                    onClick={() => setIsMenuOpen(false)}\n                  >\n                    <MapPin className="w-4 h-4 mr-2" \/>\n                    Find Location\n                  <\/Link>\n                <\/div>\n              <\/nav>\n            <\/div>\n          )}\n        <\/div>\n      <\/header>/' "$page"
    
    echo "Updated $page successfully"
  else
    echo "Warning: $page not found"
  fi
done

echo "All remaining service pages updated with mobile-first headers!"
