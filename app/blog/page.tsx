import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Delta Tire Blog | Auto Care Tips & News - Gallup, Farmington, Grants, Eagar",
  description: "Expert automotive tips, maintenance advice, and industry news from Delta Tire. Learn how to keep your vehicle running smoothly with professional insights.",
  keywords: "automotive blog, car maintenance tips, tire care, auto repair advice, vehicle maintenance, New Mexico, Arizona",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Star, Wrench, Shield, Car, Users, Award, CheckCircle, Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs Your Tires Need Replacement",
      excerpt: "Learn the warning signs that indicate it's time for new tires and how to maximize your tire investment.",
      date: "August 25, 2025",
      author: "Delta Tire Team",
      category: "Tire Care",
      slug: "5-signs-your-tires-need-replacement",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Winter Driving Preparation: Essential Maintenance Tips",
      excerpt: "Get your vehicle ready for winter weather with our comprehensive maintenance checklist.",
      date: "August 20, 2025",
      author: "Delta Tire Team",
      category: "Maintenance",
      slug: "winter-driving-preparation-tips",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "How Often Should You Get a Wheel Alignment?",
      excerpt: "Understanding wheel alignment frequency and the benefits of proper alignment for your vehicle.",
      date: "August 15, 2025",
      author: "Delta Tire Team",
      category: "Alignments",
      slug: "wheel-alignment-frequency",
      readTime: "5 min read"
    }
  ]

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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Delta Tire Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Expert automotive tips, maintenance advice, and industry insights
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed with expert automotive advice from our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-red-100 text-red-600">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="hover:text-red-600">
                    <a href={`/blog/${post.slug}`} className="block">
                      {post.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/blog/${post.slug}`} className="flex items-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find articles on topics that matter to you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Car className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tire Care</h3>
                <p className="text-gray-600">Tips for tire maintenance and replacement</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Wrench className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
                <p className="text-gray-600">Regular maintenance and service advice</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safety</h3>
                <p className="text-gray-600">Vehicle safety tips and best practices</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Industry News</h3>
                <p className="text-gray-600">Latest automotive industry updates</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Get the latest automotive tips and Delta Tire news delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
                Subscribe
              </Button>
            </div>
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
