import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Delta Tire - #1 Auto Repair & Tire Service | Grants, Gallup, Farmington, Eagar | Professional Tire & Auto Service",
  description: "★★★★★ Professional tire shop ★★★★★ Rated #1 tire shop & auto repair in New Mexico & Arizona! auto repair in New Mexico ★★★★★ Rated #1 tire shop & auto repair in New Mexico & Arizona! Arizona! Delta Tire: tire service, brake repair, oil change, wheel alignment, truck accessories. 4 locations: Grants, Gallup, Farmington, Eagar. Do You Delta? We treat your car like our car. Open today!",
  keywords: "tire shop near me, auto repair near me, oil change near me, brake repair, wheel alignment, tire service, best tire shop, Delta Tire, Grants NM, Gallup NM, Farmington NM, Eagar AZ, tire installation, truck accessories, car repair, automotive service, tire store, mechanic near me, brake service, suspension repair, TPMS service, tire rotation, flat tire repair, emergency tire service, 24/7 tire service, cheap tires, discount tires, quality tires, Michelin tires, Goodyear tires, BFGoodrich tires, tire deals, tire specials, VIP program, school fundraising, community support, local business, family owned, trusted mechanic, certified technicians, warranty service, financing available, courtesy car, clean shop, professional service, fast service, reliable service, honest pricing, competitive prices, tire experts, automotive experts, New Mexico tire service, Arizona tire service, Four Corners region, tire professionals, complete automotive care, one stop shop, full service automotive, tire and auto center",
  authors: [{ name: "Delta Tire" }],
  creator: "Delta Tire - Premier Auto Repair & Tire Service",
  publisher: "Delta Tire",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://delta-tire-2.lindy.site',
    siteName: 'Delta Tire - #1 Auto Repair & Tire Service',
    title: 'Delta Tire - #1 Tire Shop & Auto Repair | Do You Delta? | Grants, Gallup, Farmington, Eagar',
    description: '★★★★★ Professional tire shop in New Mexico ★★★★★ Rated #1 tire shop in New Mexico & Arizona! Arizona! Professional tire service, brake repair, oil changes, alignments. We treat your car like our car. 4 convenient locations. Open today!',
    images: [
      {
        url: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/67a7d6242995c842d8fbd01d/attachments/c97afc8d-d513-46a3-8f6e-d51f5231dfd7-Delta%20Red%20and%20Grey%20Transparent.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20250827%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20250827T191827Z&X-Amz-Expires=86400&X-Amz-Signature=06529d522473882de65209bee90f90b7c8a93ae4599d6eaef8cec6bea8dceaf0&X-Amz-SignedHeaders=host&x-id=GetObject',
        width: 1200,
        height: 630,
        alt: 'Delta Tire - #1 Rated Tire Shop & Auto Repair Service in New Mexico & Arizona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delta Tire - #1 Tire Shop & Auto Repair | Do You Delta?',
    description: '★★★★★ Professional tire shop in New Mexico ★★★★★ Rated #1 tire shop in New Mexico & Arizona! Arizona! Professional automotive services. We treat your car like our car.',
    images: ['https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/67a7d6242995c842d8fbd01d/attachments/c97afc8d-d513-46a3-8f6e-d51f5231dfd7-Delta%20Red%20and%20Grey%20Transparent.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20250827%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20250827T191827Z&X-Amz-Expires=86400&X-Amz-Signature=06529d522473882de65209bee90f90b7c8a93ae4599d6eaef8cec6bea8dceaf0&X-Amz-SignedHeaders=host&x-id=GetObject'],
  },
  alternates: {
    canonical: 'https://delta-tire-2.lindy.site',
  },
  other: {
    'google-site-verification': 'your-google-verification-code-here',
    'msvalidate.01': 'your-bing-verification-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="geo.region" content="US-NM" />
        <meta name="geo.region" content="US-AZ" />
        <meta name="geo.placename" content="Grants, New Mexico" />
        <meta name="geo.placename" content="Gallup, New Mexico" />
        <meta name="geo.placename" content="Farmington, New Mexico" />
        <meta name="geo.placename" content="Eagar, Arizona" />
        <meta name="ICBM" content="35.1472, -107.8528" />
        <meta name="ICBM" content="35.5281, -108.7426" />
        <meta name="ICBM" content="36.7281, -108.2187" />
        <meta name="ICBM" content="34.1114, -109.2909" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Delta Tire",
              "alternateName": ["Delta Tire Service", "Delta Automotive", "Do You Delta"],
              "description": "★★★★★ Professional tire shop and auto repair service in New Mexico ★★★★★ Rated #1 tire shop and auto repair service in New Mexico & Arizona Arizona. Professional tire service, brake repair, oil changes, wheel alignments, and truck accessories. We treat your car like our car.",
              "url": "https://delta-tire-2.lindy.site",
              "logo": "https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/67a7d6242995c842d8fbd01d/attachments/c97afc8d-d513-46a3-8f6e-d51f5231dfd7-Delta%20Red%20and%20Grey%20Transparent.png",
              "image": "https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/67a7d6242995c842d8fbd01d/attachments/c97afc8d-d513-46a3-8f6e-d51f5231dfd7-Delta%20Red%20and%20Grey%20Transparent.png",
              "telephone": ["+1-505-287-7946", "+1-505-722-2945", "+1-505-325-4500", "+1-928-333-3730"],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Financing Available"],
              "currenciesAccepted": "USD",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "833 E Sante Fe Ave",
                  "addressLocality": "Grants",
                  "addressRegion": "NM",
                  "postalCode": "87020",
                  "addressCountry": "US"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "501 US-491",
                  "addressLocality": "Gallup",
                  "addressRegion": "NM",
                  "postalCode": "87301",
                  "addressCountry": "US"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "4650 E Main St",
                  "addressLocality": "Farmington",
                  "addressRegion": "NM",
                  "postalCode": "87402",
                  "addressCountry": "US"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "50 W Central Ave",
                  "addressLocality": "Eagar",
                  "addressRegion": "AZ",
                  "postalCode": "85925",
                  "addressCountry": "US"
                }
              ],
              "geo": [
                {
                  "@type": "GeoCoordinates",
                  "latitude": 35.1472,
                  "longitude": -107.8528
                },
                {
                  "@type": "GeoCoordinates",
                  "latitude": 35.5281,
                  "longitude": -108.7426
                },
                {
                  "@type": "GeoCoordinates",
                  "latitude": 36.7281,
                  "longitude": -108.2187
                },
                {
                  "@type": "GeoCoordinates",
                  "latitude": 34.1114,
                  "longitude": -109.2909
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:00",
                  "closes": "17:00",
                  "validFrom": "2025-01-01",
                  "validThrough": "2025-12-31"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:00",
                  "closes": "17:00",
                  "validFrom": "2025-01-01",
                  "validThrough": "2025-12-31"
                }
              ],
              "serviceArea": [
                {
                  "@type": "State",
                  "name": "New Mexico"
                },
                {
                  "@type": "State", 
                  "name": "Arizona"
                },
                {
                  "@type": "City",
                  "name": "Grants"
                },
                {
                  "@type": "City",
                  "name": "Gallup"
                },
                {
                  "@type": "City",
                  "name": "Farmington"
                },
                {
                  "@type": "City",
                  "name": "Eagar"
                },
                {
                  "@type": "City",
                  "name": "Milan"
                },
                {
                  "@type": "City",
                  "name": "Acoma"
                },
                {
                  "@type": "City",
                  "name": "Laguna"
                },
                {
                  "@type": "City",
                  "name": "Window Rock"
                },
                {
                  "@type": "City",
                  "name": "Shiprock"
                },
                {
                  "@type": "City",
                  "name": "Aztec"
                },
                {
                  "@type": "City",
                  "name": "Bloomfield"
                },
                {
                  "@type": "City",
                  "name": "Show Low"
                },
                {
                  "@type": "City",
                  "name": "Springerville"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Complete Automotive Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tire Sales & Installation",
                      "description": "Professional tire sales, installation, mounting, balancing, rotation, and TPMS service. Top brands: Michelin, Goodyear, BFGoodrich, Cooper, Firestone.",
                      "provider": {
                        "@type": "AutoRepair",
                        "name": "Delta Tire"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Brake Service & Repair",
                      "description": "Complete brake service including brake pads, rotors, brake fluid service, brake inspections, and brake system diagnostics.",
                      "provider": {
                        "@type": "AutoRepair",
                        "name": "Delta Tire"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wheel Alignment & Suspension",
                      "description": "Professional wheel alignments, suspension repair, shocks, struts, ball joints, tie rods, and steering components.",
                      "provider": {
                        "@type": "AutoRepair",
                        "name": "Delta Tire"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Oil Change & Maintenance",
                      "description": "Quick oil changes, manufacturer scheduled maintenance, coolant service, transmission service, and drive belt replacement.",
                      "provider": {
                        "@type": "AutoRepair",
                        "name": "Delta Tire"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Truck Accessories & Lift Kits",
                      "description": "Truck lift kits, leveling kits, brush guards, side steps, rock guards, and professional installation services.",
                      "provider": {
                        "@type": "AutoRepair",
                        "name": "Delta Tire"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Battery & Electrical Service",
                      "description": "Battery replacement, alternator service, starter repair, and complete electrical system diagnostics.",
                      "provider": {
                        "@type": "AutoRepair",
                        "name": "Delta Tire"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AC & Heater Repair",
                      "description": "Air conditioning service, heater repair, climate control systems, refrigerant recharge, and HVAC diagnostics.",
                      "provider": {
                        "@type": "AutoRepair",
                        "name": "Delta Tire"
                      }
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "247",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sarah M."
                  },
                  "reviewBody": "Now I know what 'Do You Delta' means! They really are the difference. Excellent service and they truly treat your car like our car!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Mike R."
                  },
                  "reviewBody": "The Delta Difference is real! Professional staff, clean facility, and they stand behind their work. Highly recommend!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Jennifer L."
                  },
                  "reviewBody": "I definitely Delta now! Fast, reliable service and the courtesy car program is a lifesaver!"
                }
              ],
              "slogan": "Do You Delta? We are the Difference.",
              "foundingDate": "1995",
              "areaServed": [
                "New Mexico",
                "Arizona", 
                "Four Corners Region",
                "Grants, NM",
                "Gallup, NM", 
                "Farmington, NM",
                "Eagar, AZ",
                "Milan, NM",
                "Acoma, NM",
                "Laguna, NM",
                "Window Rock, AZ",
                "Shiprock, NM",
                "Aztec, NM",
                "Bloomfield, NM",
                "Show Low, AZ",
                "Springerville, AZ"
              ],
              "knowsAbout": [
                "Tire Installation",
                "Brake Repair", 
                "Wheel Alignment",
                "Oil Changes",
                "Truck Accessories",
                "Suspension Repair",
                "Battery Service",
                "AC Repair",
                "Automotive Diagnostics",
                "TPMS Service",
                "Tire Rotation",
                "Brake Fluid Service",
                "Coolant Service",
                "Transmission Service"
              ],
              "makesOffer": {
                "@type": "Offer",
                "name": "VIP Program",
                "description": "10% off all services and products, FREE oil change, priority service, and support for local schools with 80% of proceeds going to education programs."
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
