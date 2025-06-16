import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import { ChevronRight, Home, Star, Clock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Verleih - Tauchausrüstung mieten | Taucher Zentrum",
  description:
    "Mieten Sie professionelle Tauchausrüstung bei uns. Von Atemreglern bis hin zu kompletten Sidemount-Sets - alles für Ihr Tauchabenteuer.",
}

const rentalItems = [
  {
    id: "atemregler",
    name: "Atemregler (Reservierung)",
    image: "/images/verleih/sidemount-atemregler-set.webp",
    popular: true,
  },
  {
    id: "flasche",
    name: "Flasche (Reservierung)",
    image: "/images/verleih/flaschen-set.webp",
    popular: true,
  },
  {
    id: "jacket",
    name: "Jacket (Reservierung)",
    image: "/images/verleih/bcd-jacket.webp",
    popular: true,
  },
  {
    id: "blei",
    name: "Blei (Reservierung)",
    image: "/images/verleih/bleigewichte.webp",
  },
  {
    id: "bleigurt",
    name: "Bleigurt (Reservierung)",
    image: "/images/verleih/bleigurt.webp",
  },
  {
    id: "flossen",
    name: "Flossen (Reservierung)",
    image: "/images/verleih/tauchflossen.webp",
    popular: true,
  },
  {
    id: "computer",
    name: "Computer (Reservierung)",
    image: "/images/verleih/tauchcomputer.webp",
  },
  {
    id: "lampen",
    name: "Lampen (Reservierung)",
    image: "/images/verleih/tauchlampe.webp",
  },
  {
    id: "rucksack-wing-set",
    name: "Rucksack/Wing-Set (Reservierung)",
    image: "/images/verleih/xr-rec-silver-single-backmount-set.webp",
  },
  {
    id: "sidemount-set",
    name: "Sidemount Set (Reservierung)",
    image: "/images/verleih/heavy-pure-sidemount-set.webp",
  },
  {
    id: "sidemount-atemregler-set",
    name: "Sidemount - Atemregler Set",
    image: "/images/verleih/sidemount-atemregler-set.webp",
  },
  {
    id: "sidemount-flaschen-set",
    name: "Sidemount - Flaschen Set 2x 11ltr",
    image: "/images/verleih/flaschen-set.webp",
  },
]

export default function VerleihPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-blue-100 mb-8">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="h-4 w-4" />
              Startseite
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">Verleih</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tauchausrüstung Verleih</h1>
            <p className="text-xl text-blue-100 mb-8">
              Professionelle Tauchausrüstung für jeden Bedarf. Von Einzelteilen bis hin zu kompletten Sets - bei uns
              findest du alles für dein nächstes Tauchabenteuer.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Geprüfte Ausrüstung</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>Flexible Mietdauer</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>Top Marken</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container">
          {/* Info Section */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Einfach reservieren und abholen</h2>
                <p className="text-gray-700 mb-6">
                  Reserviere deine Tauchausrüstung bequem online und hole sie zu deinem Wunschtermin ab. Alle Geräte
                  werden vor jeder Vermietung gründlich geprüft und gewartet.
                </p>
                <ContactFormDialog>
                  <Button className="bg-blue-600 hover:bg-blue-700">Jetzt beraten lassen</Button>
                </ContactFormDialog>
              </div>
              <div className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Unsere Vorteile:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Regelmäßige Wartung und Prüfung
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Verschiedene Größen verfügbar
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Kompetente Beratung inklusive
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Faire Preise für alle Budgets
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Verfügbare Ausrüstung</h2>
            <p className="text-gray-600 mb-8">
              Wähle aus unserem umfangreichen Sortiment die passende Ausrüstung für dich aus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {rentalItems.map((item) => (
              <Card
                key={item.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    {item.popular && (
                      <Badge className="absolute top-3 left-3 z-10 bg-orange-500 hover:bg-orange-600">
                        <Star className="h-3 w-3 mr-1" />
                        Beliebt
                      </Badge>
                    )}
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 text-center min-h-[3rem] flex items-center justify-center">
                      {item.name}
                    </h3>
                    <ContactFormDialog>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors" variant="default">
                        Optionen wählen
                      </Button>
                    </ContactFormDialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Fragen zur Ausrüstung?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Unser erfahrenes Team berät dich gerne bei der Auswahl der richtigen Ausrüstung. Kontaktiere uns für eine
              persönliche Beratung oder besuche uns direkt im Shop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactFormDialog>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Beratung anfragen
                </Button>
              </ContactFormDialog>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Shop besuchen
              </Button>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
