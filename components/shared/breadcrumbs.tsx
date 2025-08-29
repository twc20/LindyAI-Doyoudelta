'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname()
  
  // Generate breadcrumbs from pathname if no items provided
  const breadcrumbItems = items || generateBreadcrumbs(pathname)
  
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link 
        href="/" 
        className="flex items-center hover:text-red-600 transition-colors"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {index === breadcrumbItems.length - 1 ? (
            <span className="text-gray-900 font-medium">{item.label}</span>
          ) : (
            <Link 
              href={item.href}
              className="hover:text-red-600 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = []
  
  segments.forEach((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const label = formatSegmentLabel(segment)
    breadcrumbs.push({ label, href })
  })
  
  return breadcrumbs
}

function formatSegmentLabel(segment: string): string {
  // Convert URL segments to readable labels
  const labelMap: Record<string, string> = {
    'services': 'Services',
    'locations': 'Locations',
    'about': 'About',
    'blog': 'Blog',
    'vip-program': 'VIP Program',
    'contact': 'Contact',
    'grants': 'Grants Location',
    'gallup': 'Gallup Location',
    'farmington': 'Farmington Location',
    'eagar': 'Eagar Location'
  }
  
  return labelMap[segment] || segment.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}
