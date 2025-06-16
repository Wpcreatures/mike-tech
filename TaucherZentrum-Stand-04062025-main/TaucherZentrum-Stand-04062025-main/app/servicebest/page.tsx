import Image from "next/image"
import { Check, Phone, Mail, MapPin, Clock, Shield, Award, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ServiceBestPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Tauchausrüstung Service"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>

          {/* Animated bubbles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/20 animate-float"
                style={{
                  width: `${Math.random() * 40 + 10}px`,
                  height: `${Math.random() * 40 + 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100 + 100}%`,
                  animationDuration: `${Math.random() * 8 + 6}s`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white">Premium Service</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Den <span className="text-cyan-300">besten Service</span>
              </h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-8 py-3">
                <p className="text-xl text-white font-medium">FINDEST DU HIER!</p>
              </div>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Professionelle Tauchausrüstung mieten - von der Grundausstattung bis zum Spezialequipment
              </p>
            </div>
          </div>
        </section>

        {/* Rental Info Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Du möchtest etwas mieten?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Wir bieten Dir unter Tag Equipment zu günstigen Mietpreisen an. Alle Preise gelten pro Tag. Ab 1 Woche
                30% Ermäßigung, Ab 2 Wochen 50% Ermäßigung.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Tagesmiete</h3>
                  <p className="text-gray-600">Flexible Mietdauer ab einem Tag</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Geprüfte Ausrüstung</h3>
                  <p className="text-gray-600">Alle Geräte regelmäßig gewartet</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Premium Marken</h3>
                  <p className="text-gray-600">Hochwertige Ausrüstung führender Hersteller</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Prices Section - Premium Design */}
        <section className="py-24 relative overflow-hidden">
          {/* Custom gradient background that's darker on sides, lighter in middle */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 z-0"></div>

          {/* Overlay texture for depth effect */}
          <div className="absolute inset-0 opacity-30 z-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Radial gradient overlay for volumetric effect */}
          <div className="absolute inset-0 bg-radial-gradient z-0 opacity-60"></div>

          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">UNSERE MIETPREISE</h2>
              <div className="flex items-center justify-center gap-8 mb-4">
                <div className="h-px bg-white/30 flex-grow max-w-xs"></div>
                <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
                <div className="h-px bg-white/30 flex-grow max-w-xs"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Standard Mietpreise */}
              <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white group hover:scale-105 hover:bg-white/20 transition-all duration-300 ease-in-out shadow-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/30 flex items-center justify-center">
                    <Check className="h-8 w-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center italic text-cyan-300 mb-8">Mietpreise</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Regler DIR Style</span>
                    <span className="font-bold">20,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Regler Sportkonfiguration</span>
                    <span className="font-bold">15,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jacket, Anzug (7mm Neopren)</span>
                    <span className="font-bold">10,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wing/Backplate</span>
                    <span className="font-bold">20,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shorty, Eisweste</span>
                    <span className="font-bold">5,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Flasche inkl. 1 Füllung (Mono bis 10l)</span>
                    <span className="font-bold">15,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Flasche inkl. 1 Füllung (Mono 12l)</span>
                    <span className="font-bold">18,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Doppelpaket D7 inkl. 1 Füllung</span>
                    <span className="font-bold">28,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Doppelpaket D12 inkl. 1 Füllung</span>
                    <span className="font-bold">33,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bleiset 10kg inkl Gurt</span>
                    <span className="font-bold">10,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maske/Schnorchel, Flossen</span>
                    <span className="font-bold">8,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kopfhaube, Füsslinge, Handschuhe</span>
                    <span className="font-bold">4,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lampe, Computer</span>
                    <span className="font-bold">10,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kompass</span>
                    <span className="font-bold">8,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trockl</span>
                    <span className="font-bold">45,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Unterzieher</span>
                    <span className="font-bold">20,00 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Scooter</span>
                    <span className="font-bold">50,00 €</span>
                  </div>
                </div>
              </div>

              {/* Komplettpaket */}
              <div className="bg-gradient-to-b from-white/20 to-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-white group hover:scale-105 hover:from-white/25 hover:to-white/20 transition-all duration-300 ease-in-out shadow-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/30 flex items-center justify-center">
                    <Check className="h-8 w-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center italic text-cyan-300 mb-2">Komplettpaket</h3>
                <div className="text-center text-xl font-bold mb-6">40 €/Tag • 70 €/WE</div>
                <p className="text-white/90 mb-6 text-center">bestehend aus:</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2">
                    <span>Anzug inkl. Eisweste/Kopfhaube</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>Flossen, Handschuhe</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>Atemregler „Kaltwasser-Set"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>Jacket</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>Computer</span>
                  </div>
                </div>
                <ContactFormDialog>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white border-none py-3 rounded-lg font-semibold">
                    Jetzt reservieren
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </ContactFormDialog>
              </div>

              {/* Santi Demo Center */}
              <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white group hover:scale-105 hover:bg-white/20 transition-all duration-300 ease-in-out shadow-xl">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-red-500/30 flex items-center justify-center">
                    <Award className="h-8 w-8 text-red-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center italic text-cyan-300 mb-8">Wir sind Santi Demo Center</h3>
                <p className="mb-6 leading-relaxed">
                  Wir haben eine große Auswahl in vielen Größen – Damen und Herren – von Santi Trockentauchanzügen inkl.
                  Unterzieher zur Miete.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span>Trocki</span>
                    <span className="font-bold">45,00 €</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Unterzieher</span>
                    <span className="font-bold">20,00 €</span>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">Professionelle Beratung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">Anprobe vor Ort möglich</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">Service & Reparaturen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Discount Info */}
            <div className="mt-16 text-center text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Mengenrabatte verfügbar!</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-lg font-bold text-cyan-300">30% Rabatt</div>
                    <div>ab 1 Woche Mietdauer</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-lg font-bold text-cyan-300">50% Rabatt</div>
                    <div>ab 2 Wochen Mietdauer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Miete dir bei uns, was du brauchst!</h2>
              <p className="text-lg text-gray-600 mb-12">
                Kontaktiere uns für eine persönliche Beratung oder reserviere deine Ausrüstung direkt.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Telefonisch reservieren</h3>
                  <p className="text-gray-600 mb-4">Schnell und unkompliziert</p>
                  <a href="tel:040-2206064" className="text-blue-600 font-semibold hover:text-blue-700">
                    040 – 220 606 4
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">E-Mail Anfrage</h3>
                  <p className="text-gray-600 mb-4">Detaillierte Beratung</p>
                  <a href="mailto:info@taucher-zentrum.de" className="text-blue-600 font-semibold hover:text-blue-700">
                    info@taucher-zentrum.de
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Vor Ort besuchen</h3>
                  <p className="text-gray-600 mb-4">Persönliche Beratung</p>
                  <p className="text-blue-600 font-semibold">
                    Papenhuder Str. 40
                    <br />
                    22087 Hamburg
                  </p>
                </div>
              </div>

              <ContactFormDialog>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Jetzt reservieren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </ContactFormDialog>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
