import Image from "next/image"
import { Anchor, Calendar, Heart, Quote, Shield, Store, Users, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function UeberUnsPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/images/header-team.jpg"
              alt="Jennifer und Maik vom Taucher Zentrum"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>

          {/* Animated bubbles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/20 animate-float"
                style={{
                  width: `${Math.random() * 50 + 10}px`,
                  height: `${Math.random() * 50 + 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100 + 100}%`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white">Unsere Geschichte</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Die Menschen und die Geschichte hinter dem <span className="text-cyan-300">Taucher Zentrum</span>
              </h1>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Lernen Sie unser komplettes Team kennen – 18 Tauchlehrer, die mit voller Leidenschaft hinter jedem
                Aspekt unserer Tauchschule stehen.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Unser Team</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Die Gesichter hinter dem Taucher Zentrum
              </h2>
              <p className="text-lg text-gray-600">
                Herzlich willkommen bei uns im Taucher Zentrum! Wir sind Jennifer Burgdorf und Maik Haßelfeld – die
                beiden Geschäftsführer, die mit voller Leidenschaft hinter jedem Aspekt unserer Tauchschule stehen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/jennifer-burgdorf.jpg"
                    alt="Jennifer Burgdorf"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full shadow-lg p-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
              </div>

              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-800">Geschäftsführerin</Badge>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Jennifer Burgdorf</h3>
                <p className="text-gray-700 mb-6">
                  Seit wir das Taucher Zentrum übernommen haben, ist es uns eine Herzensangelegenheit, Taucherinnen und
                  Taucher aller Erfahrungsstufen in die faszinierende Unterwasserwelt zu begleiten. Von der ersten
                  Beratung bis hin zum fortgeschrittenen Tauchkurs legen wir großen Wert auf eine familiäre Atmosphäre.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-800">SSI Dive Master</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full">
                    <Anchor className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-800">9 Jahre Erfahrung</span>
                  </div>
                </div>
                <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4 mb-6">
                  "Tauchen ist nicht nur ein Sport, sondern eine Leidenschaft, die ich gerne mit anderen teile."
                </blockquote>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
              <div className="order-2 md:order-1">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Geschäftsführer</Badge>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Maik Haßelfeld</h3>
                <p className="text-gray-700 mb-6">
                  Wir tauchen selbst jedes Produkt, das wir in unserem Shop und bei unseren Kursen nutzen – so wissen
                  wir aus erster Hand, was wir empfehlen. Euer Vertrauen ist unser größtes Kapital. Deswegen achten wir
                  mit Sorgfalt auf hochwertige Ausrüstung und ein Umfeld, in dem ihr euch sicher und willkommen fühlt.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-800">SSI Instructor Trainer</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full">
                    <Anchor className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-800">8 Jahre Erfahrung</span>
                  </div>
                </div>
                <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4 mb-6">
                  "Das Tauchen ist der einzige Sport, der mich in eine Tiefenentspannungsphase bringt. Die familiäre
                  Gemeinschaft, die die Faszination Tauchen teilen, macht mich überglücklich."
                </blockquote>
              </div>

              <div className="relative order-1 md:order-2">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/maik-hasselfeld.jpg"
                    alt="Maik Haßelfeld"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-full shadow-lg p-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Unsere Geschichte</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Ein Blick in unsere Geschichte
              </h2>
              <p className="text-lg text-gray-600">
                Erfahren Sie mehr über die Entwicklung des Taucher Zentrums und unseren Weg zu einer eigenständigen
                Tauchschule.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

              {/* Timeline items */}
              <div className="space-y-16 relative">
                {/* Item 1 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-8 md:mb-0">
                    <Badge className="mb-2 bg-blue-100 text-blue-800">Die Anfänge</Badge>
                    <h3 className="text-xl font-bold text-blue-800 mb-3">Die Gründung</h3>
                    <p className="text-gray-700">
                      Gegründet am 1949 von Herrn Kurt Babel und wurde 1994 von Felix Kollschess übernommen. Sie haben
                      eine solide Basis geschaffen, die sich jedoch im Laufe der Zeit so stark entwickelte, dass die
                      Pflege zunehmend komplizierter wurde.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center z-10">
                      <Store className="h-6 w-6" />
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 md:ml-8">
                      <div className="md:hidden w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">
                        <Store className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-blue-800 mb-2">Solide Grundlagen</h4>
                      <p className="text-gray-600">
                        Die früheren Inhaber haben ein starkes Fundament für das Taucher Zentrum gelegt, auf dem wir
                        aufbauen konnten.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="relative order-2 md:order-1">
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center z-10">
                      <Users className="h-6 w-6" />
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 md:mr-8">
                      <div className="md:hidden w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">
                        <Users className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-blue-800 mb-2">Neue Führung, neue Vision</h4>
                      <p className="text-gray-600">
                        Mit der Übernahme durch Jennifer und Maik begann ein neues Kapitel für das Taucher Zentrum.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 mb-8 md:mb-0">
                    <Badge className="mb-2 bg-blue-100 text-blue-800">Übernahme</Badge>
                    <h3 className="text-xl font-bold text-blue-800 mb-3">Neue Impulse</h3>
                    <p className="text-gray-700">
                      Ein frischer Wind wehte im TZ, als wir das Taucher Zentrum übernommen haben...
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-8 md:mb-0">
                    <Badge className="mb-2 bg-blue-100 text-blue-800">Partnerschaften</Badge>
                    <h3 className="text-xl font-bold text-blue-800 mb-3">Kooperationen</h3>
                    <p className="text-gray-700">
                      Es gab eine Phase, in der das Taucher Zentrum nicht komplett als eigenständige Tauchschule agierte
                      und in verschiedenen Partnerschaften aktiv war. Diese Zeit war geprägt von Zusammenarbeit und
                      Austausch.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center z-10">
                      <Anchor className="h-6 w-6" />
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 md:ml-8">
                      <div className="md:hidden w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">
                        <Anchor className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-blue-800 mb-2">Gemeinsame Wege</h4>
                      <p className="text-gray-600">
                        Durch verschiedene Kooperationen konnten wir wertvolle Erfahrungen sammeln und unser Netzwerk
                        erweitern.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="relative order-2 md:order-1">
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center z-10">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 md:mr-8">
                      <div className="md:hidden w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-blue-800 mb-2">Eigenständigkeit und Qualität</h4>
                      <p className="text-gray-600">
                        Als eigenständige Tauchschule können wir unsere hohen Qualitätsstandards konsequent umsetzen und
                        unsere eigene Vision verwirklichen.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 mb-8 md:mb-0">
                    <Badge className="mb-2 bg-blue-100 text-blue-800">Heute</Badge>
                    <h3 className="text-xl font-bold text-blue-800 mb-3">Zurück zur eigenen Tauchschule</h3>
                    <p className="text-gray-700">
                      Vor kurzem haben wir bewusst die Entscheidung getroffen, wieder eine vollständig eigenständige
                      Tauchschule zu sein. Auf unseren Social-Media-Kanälen haben wir diese wichtige Statusänderung
                      stolz gefeiert: Es ist uns wichtig, unseren Kunden gegenüber zu zeigen, dass wir für euch da sind
                      – unabhängig, authentisch und mit einem klaren Bekenntnis zur Qualität.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Unsere Werte</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">Was uns wichtig ist</h2>
              <p className="text-lg text-gray-600">
                Unser persönliches Engagement und unsere Werte prägen jeden Aspekt unserer Arbeit im Taucher Zentrum.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:border-blue-300 transition-colors hover:shadow-xl transform hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">Persönliche Betreuung</h3>
                <p className="text-gray-700">
                  Von der ersten Beratung bis hin zum fortgeschrittenen Tauchkurs legen wir großen Wert auf eine
                  familiäre Atmosphäre. Wir nehmen uns Zeit für jeden einzelnen Kunden und seine individuellen
                  Bedürfnisse.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:border-blue-300 transition-colors hover:shadow-xl transform hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">Tauchen</h3>
                <p className="text-gray-700">
                  Wir besitzen selbst jedes Produkt, das wir in unserem Shop und bei unseren Kursen nutzen – so wissen
                  wir aus erster Hand, was wir empfehlen. Euer Vertrauen ist unser größtes Kapital.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:border-blue-300 transition-colors hover:shadow-xl transform hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">Gemeinschaft</h3>
                <p className="text-gray-700">
                  Unser Ziel ist es, nicht nur Tauchbegeisterte aus Hamburg und Umgebung anzusprechen, sondern eine
                  aktive Community zu schaffen, in der sich jeder willkommen fühlt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center relative">
              <Quote className="h-16 w-16 text-blue-500 opacity-20 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
                "Aus Hamburg in die Welt der Tiefe – unser Ziel ist es, jedem, der die Unterwasserwelt entdecken will,
                eine professionelle, herzliche und persönliche Beratung zu bieten."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JB</span>
                </div>
                <div className="text-left">
                  <p className="font-medium">Jennifer Burgdorf</p>
                  <p className="text-blue-300">Geschäftsführerin, Taucher Zentrum</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-12 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Neugierig geworden?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Wir freuen uns darauf, euch im Taucher Zentrum persönlich zu begrüßen und gemeinsam in neue Tiefen zu
                  starten!
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <Calendar className="h-10 w-10 mx-auto mb-4" />
                    <p>Vereinbare einen persönlichen Termin</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <Store className="h-10 w-10 mx-auto mb-4" />
                    <p>Besuche uns im Taucher Zentrum</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <MessageCircle className="h-10 w-10 mx-auto mb-4" />
                    <p>Kontaktiere uns für weitere Informationen</p>
                  </div>
                </div>

                <ContactFormDialog>
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Kontakt aufnehmen
                  </Button>
                </ContactFormDialog>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
