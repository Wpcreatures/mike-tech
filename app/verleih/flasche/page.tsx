import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronRight, Home, Minus, Plus, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Flasche (Reservierung) | Taucher Zentrum",
  description: "Reservieren Sie eine Tauchflasche für Ihr nächstes Tauchabenteuer. Verschiedene Größen verfügbar.",
}

const relatedProducts = [
  {
    id: "computer",
    name: "Computer (Reservierung)",
    image: "/images/verleih/tauchcomputer.webp",
    url: "/verleih/computer",
  },
  {
    id: "sidemount-set",
    name: "Sidemount Set (Reservierung)",
    image: "/images/verleih/heavy-pure-sidemount-set.webp",
    url: "/verleih/sidemount-set",
  },
  {
    id: "sidemount-flaschen-set",
    name: "Sidemount - Flaschen Set 2x 11ltr",
    image: "/images/verleih/flaschen-set.webp",
    url: "/verleih/sidemount-flaschen-set",
  },
]

export default function FlascheDetailPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-8">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              <Home className="h-3.5 w-3.5" />
              Startseite
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/verleih" className="hover:text-blue-600 transition-colors">
              Verleih
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-900 font-medium">Flasche (Reservierung)</span>
          </nav>

          {/* Product Detail */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-white rounded-lg p-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-md aspect-[3/4]">
                <Image
                  src="/images/verleih/flaschen-set.webp"
                  alt="Tauchflasche"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
                <Search className="h-5 w-5 text-gray-600" />
                <span className="sr-only">Bild vergrößern</span>
              </button>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Flasche (Reservierung)</h1>

              <div className="prose prose-blue mb-6">
                <p>
                  Die Leihgebühr für eine Flasche beträgt <strong>5,00 € pro Tag</strong>. Bezahlung erfolgt bei
                  Abholung in der Basis.
                </p>
                <p className="text-sm bg-blue-50 p-3 rounded-md border border-blue-100">
                  <strong>Nach der Reservierung</strong> erhalten Sie eine Mail mit einem PDF „Leihvertrag" im Anhang.
                  Diesen bitte unbedingt in ausgedruckter Form bei Abholung des Equipments vorlegen!
                </p>
              </div>

              {/* Product Form */}
              <div className="space-y-6">
                {/* Quantity */}
                <div>
                  <Label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Anzahl:
                  </Label>
                  <div className="flex items-center">
                    <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100">
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Reduzieren</span>
                    </button>
                    <Input
                      type="number"
                      id="quantity"
                      min="1"
                      defaultValue="1"
                      className="w-16 h-10 text-center rounded-none border-x-0"
                    />
                    <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100">
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Erhöhen</span>
                    </button>
                  </div>
                </div>

                {/* Type */}
                <div>
                  <Label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                    Art:
                  </Label>
                  <Select defaultValue="12l">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Flaschengröße wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12l">Flasche - 12 Liter</SelectItem>
                      <SelectItem value="10l">Flasche - 10 Liter</SelectItem>
                      <SelectItem value="15l">Flasche - 15 Liter</SelectItem>
                      <SelectItem value="7l">Flasche - 7 Liter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Time Period */}
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-1">Zeitraum:</Label>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Von:</div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <Label htmlFor="from-day" className="sr-only">
                            Tag
                          </Label>
                          <Input id="from-day" placeholder="TT" className="text-center" />
                          <div className="text-xs text-gray-500 text-center mt-1">Tag</div>
                        </div>
                        <div>
                          <Label htmlFor="from-month" className="sr-only">
                            Monat
                          </Label>
                          <Input id="from-month" placeholder="MM" className="text-center" />
                          <div className="text-xs text-gray-500 text-center mt-1">Monat</div>
                        </div>
                        <div>
                          <Label htmlFor="from-year" className="sr-only">
                            Jahr
                          </Label>
                          <Input id="from-year" placeholder="JJJJ" className="text-center" />
                          <div className="text-xs text-gray-500 text-center mt-1">Jahr</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Bis:</div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <Label htmlFor="to-day" className="sr-only">
                            Tag
                          </Label>
                          <Input id="to-day" placeholder="TT" className="text-center" />
                          <div className="text-xs text-gray-500 text-center mt-1">Tag</div>
                        </div>
                        <div>
                          <Label htmlFor="to-month" className="sr-only">
                            Monat
                          </Label>
                          <Input id="to-month" placeholder="MM" className="text-center" />
                          <div className="text-xs text-gray-500 text-center mt-1">Monat</div>
                        </div>
                        <div>
                          <Label htmlFor="to-year" className="sr-only">
                            Jahr
                          </Label>
                          <Input id="to-year" placeholder="JJJJ" className="text-center" />
                          <div className="text-xs text-gray-500 text-center mt-1">Jahr</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Verleihbedingungen</h3>
                  <div className="text-sm text-gray-600 space-y-2 mb-4">
                    <p>
                      Die Leihgebühr ist bei Abholung vor Ort in Bar zu zahlen. Für die Reservierung von Leihequipment
                      wird momentan keine Gebühr von 5,00 € pro Stück erhoben.
                    </p>
                    <p>
                      Diese Gebühr wird bei Abholung mit der Gesamtsumme verrechnet. Eine Erstattung der
                      Reservierungsgebühr bei Stornierung ist nicht möglich.
                    </p>
                    <p>
                      Für die weiteren Verleihbedingungen bitte{" "}
                      <a href="#" className="text-blue-600 hover:underline font-medium">
                        HIER KLICKEN
                      </a>
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm font-medium">
                      Hiermit akzeptiere ich die Verleihbedingungen
                    </Label>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 h-auto">
                  In den Warenkorb
                </Button>

                {/* Category */}
                <div className="text-sm text-gray-500">
                  Kategorie:{" "}
                  <Link href="/verleih" className="text-blue-600 hover:underline">
                    Verleih
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ähnliche Produkte</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <Card key={product.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Link href={product.url} className="block">
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                        <Button variant="outline" className="w-full">
                          Optionen wählen
                        </Button>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
