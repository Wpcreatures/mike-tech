"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import {
  Award,
  CheckCircle,
  Heart,
  Shield,
  Star,
  Users,
  Phone,
  MessageCircle,
  Play,
  Waves,
  Eye,
  Target,
  Calendar,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Rating Component
function Rating({ stars }: { stars: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}

// Counter Component
function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

// Wave Separator Component
function WaveSeparator() {
  return (
    <div className="relative">
      <svg
        className="absolute -top-1 w-full h-8 text-blue-50 fill-current"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
        ></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
      </svg>
    </div>
  )
}

// Floating CTA Bar for Mobile
function FloatingCTABar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 shadow-lg">
        <ContactFormDialog>
          <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-3">
            Jetzt Platz sichern – inkl. Gratis-Buddy-Programm
          </Button>
        </ContactFormDialog>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <SiteHeader variant="transparent" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 overflow-hidden flex items-center">
          {/* Background with Parallax Effect */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.cyan.400)/60,theme(colors.blue.900))]"></div>
            <Image
              src="/images/hero-taucher-korallenriff.png"
              alt="Taucher erkundet buntes Korallenriff"
              fill
              className="object-cover opacity-30 scale-105 animate-pulse"
              priority
            />
          </div>

          {/* Animated bubbles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/20 animate-float"
                style={{
                  width: `${Math.random() * 60 + 15}px`,
                  height: `${Math.random() * 60 + 15}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100 + 100}%`,
                  animationDuration: `${Math.random() * 15 + 8}s`,
                  animationDelay: `${Math.random() * 8}s`,
                }}
              />
            ))}
          </div>

          <div className="container relative z-10 px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-cyan-500/20 backdrop-blur-sm border-cyan-300 text-cyan-100 hover:bg-cyan-400/30">
                Professionelle Tauchschule seit 1949
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Vom ersten <span className="text-cyan-300 animate-pulse">Atemzug</span> bis zum ersten{" "}
                <span className="text-cyan-300">Reef-Dive</span> –<br />
                wir bringen dich sicher unter Wasser.
              </h1>

              <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                Vom Norddeutschen Baggersee bis zum Roten Meer – mit intensivem 4:1-Coaching und einer echten
                Taucher-Community.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <ContactFormDialog>
                  <Button
                    size="lg"
                    className="rounded-xl px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:to-cyan-300 text-blue-900 text-lg font-bold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Jetzt Platz sichern – inkl. Gratis-Buddy-Programm
                  </Button>
                </ContactFormDialog>

                <Button
                  size="lg"
                  className="rounded-xl px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Tauchschule erleben
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 pt-8 text-cyan-100">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-cyan-400" />
                  <span className="font-semibold">
                    <Counter end={750} />+ zertifizierte Taucher
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5 Bewertung</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-cyan-400" />
                  <span className="font-semibold">SSI Diamond Center</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        <WaveSeparator />

        {/* Key Benefits Section - 3-Step Process */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-8 lg:px-16">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Unser 3-Stufen-System</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                So wirst du zum <span className="text-cyan-600">selbstbewussten Taucher</span>
              </h2>
              <p className="text-xl text-gray-600">
                Keine Massenabfertigung – bei uns bekommst du die Zeit und Aufmerksamkeit, die du verdienst.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Step 1 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-cyan-100">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    1
                  </div>
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Persönliches Kennenlernen</h3>
                  <p className="text-gray-700 mb-6">
                    Deine Träume, Ängste und Ziele stehen im Mittelpunkt – nicht unser Standardprogramm.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Individuelle Beratung (30 Min kostenlos)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Ausrüstung anpassen & testen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Buddy-Matching für optimale Chemie</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-blue-100">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    2
                  </div>
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">4:1-Coaching im Pool</h3>
                  <p className="text-gray-700 mb-6">
                    Dein Instructor hat wirklich Zeit für dich – maximal 4 Schüler, oft sogar weniger.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Bis zu 6 Pool-Sessions (statt 2-3 woanders)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Jede Übung so oft, bis sie sitzt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Notfall-Training bis zur Perfektion</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-cyan-100">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    3
                  </div>
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Waves className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Freiwasser-Abenteuer</h3>
                  <p className="text-gray-700 mb-6">
                    Mehr Tauchgänge als Standard – du gehst erst ins Wasser, wenn du bereit bist.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">6+ Freiwasser-Tauchgänge (statt 4)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Verschiedene Gewässer & Bedingungen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Lebenslange Community-Mitgliedschaft</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Proof Section - Testimonials with Star Ratings */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-8 lg:px-16">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Echte Erfahrungen</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Das sagen unsere <span className="text-orange-600">Tauch-Absolventen</span>
              </h2>
              <p className="text-xl text-gray-600">
                Über 750 zertifizierte Taucher können nicht irren – hier sind ihre ehrlichen Bewertungen.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Testimonial 1 */}
              <div className="group bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-orange-100 relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  "
                </div>
                <div className="pt-6">
                  <Rating stars={5} />
                  <p className="text-gray-700 my-6 italic text-lg leading-relaxed">
                    "Ich hatte panische Angst vor dem Tauchen. Nach 3 Monaten bei Jennifer und Maik bin ich entspannt 25
                    Meter tief getaucht. Die nehmen sich wirklich Zeit!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                      SL
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Sabine L.</p>
                      <p className="text-sm text-gray-600">Open Water Diver, März 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="group bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  "
                </div>
                <div className="pt-6">
                  <Rating stars={5} />
                  <p className="text-gray-700 my-6 italic text-lg leading-relaxed">
                    "6 Pool-Sessions statt 2 wie woanders – jetzt fühle ich mich absolut sicher. Das Equipment ist top,
                    die Gruppe klein. Perfekt!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                      MR
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Markus R.</p>
                      <p className="text-sm text-gray-600">Advanced Open Water, Januar 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="group bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-cyan-100 relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  "
                </div>
                <div className="pt-6">
                  <Rating stars={5} />
                  <p className="text-gray-700 my-6 italic text-lg leading-relaxed">
                    "Die Community ist Gold wert! Auch 6 Monate nach dem Kurs finde ich immer Buddies für spontane
                    Tauchgänge. Danke, Team!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                      AK
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Anna K.</p>
                      <p className="text-sm text-gray-600">Rescue Diver, November 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center border border-cyan-100 hover:border-cyan-300 transition-colors hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">Maximal 4:1 Betreuung</h3>
                <p className="text-gray-600 text-sm">Dein Instructor hat wirklich Zeit für deine Fragen</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center border border-orange-100 hover:border-orange-300 transition-colors hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-orange-800 mb-2">Lebenslange Community</h3>
                <p className="text-gray-600 text-sm">Finde immer Buddies für deine nächsten Abenteuer</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center border border-blue-100 hover:border-blue-300 transition-colors hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">Premium Equipment</h3>
                <p className="text-gray-600 text-sm">Scubapro & Mares – damit fühlst du dich sicher</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center border border-cyan-100 hover:border-cyan-300 transition-colors hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-cyan-800 mb-2">SSI Diamond Center</h3>
                <p className="text-gray-600 text-sm">Höchste Auszeichnung für Qualität & Service</p>
              </div>
            </div>
          </div>
        </section>

        <WaveSeparator />

        {/* Detailed Course Information - Accordion Style */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-8 lg:px-16">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Unser Programm im Detail</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                So läuft dein <span className="text-blue-600">Tauchkurs</span> ab
              </h2>
              <p className="text-xl text-gray-600">Transparent, strukturiert und mit viel mehr Praxis als anderswo.</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="bg-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="px-8 py-6 hover:text-blue-700 transition-colors text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Persönliches Orientierungsgespräch (kostenlos)</h3>
                        <p className="text-gray-600 text-sm">30 Minuten für deine Fragen und Ziele</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-0">
                    <div className="pl-16 space-y-4">
                      <p className="text-gray-700">
                        Bevor du dich entscheidest, lernen wir uns kennen. Wir besprechen deine Erwartungen, eventuelle
                        Ängste und finden heraus, welcher Kurstyp zu dir passt.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Ausrüstung anprobieren und testen</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Terminplanung nach deinem Zeitplan</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Buddy-Matching mit anderen Schülern</span>
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="bg-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="px-8 py-6 hover:text-blue-700 transition-colors text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Theorie flexibel & praxisnah</h3>
                        <p className="text-gray-600 text-sm">SSI App + persönliche Vertiefung</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-0">
                    <div className="pl-16 space-y-4">
                      <p className="text-gray-700">
                        Lerne in deinem Tempo mit der preisgekrönten SSI-App. In unseren Theoriestunden vertiefen wir
                        das Wichtigste und beantworten alle deine Fragen.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Online-Lernmaterial jederzeit verfügbar</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>2-3 Theoriestunden mit echten Beispielen</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Prüfung erst, wenn du dich sicher fühlst</span>
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="bg-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="px-8 py-6 hover:text-blue-700 transition-colors text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Intensive Poolausbildung (bis zu 6 Sessions)</h3>
                        <p className="text-gray-600 text-sm">Maximal 4 Schüler pro Instructor</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-0">
                    <div className="pl-16 space-y-4">
                      <p className="text-gray-700">
                        Hier unterscheiden wir uns am meisten: Während andere 2-3 Pool-Sessions anbieten, übst du bei
                        uns so lange, bis jeder Handgriff sitzt.
                      </p>
                      <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                        <h4 className="font-bold text-cyan-800 mb-2">Vergleich zu Standard-Kursen:</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-gray-900">Andere Tauchschulen:</p>
                            <ul className="text-gray-600 space-y-1">
                              <li>• 2-3 Pool-Sessions</li>
                              <li>• 6-8 Schüler pro Gruppe</li>
                              <li>• Feste Übungszeiten</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-cyan-800">Bei uns:</p>
                            <ul className="text-cyan-700 space-y-1">
                              <li>• Bis zu 6 Pool-Sessions</li>
                              <li>• Maximal 4 Schüler</li>
                              <li>• Wiederholung bis zur Perfektion</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="bg-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="px-8 py-6 hover:text-blue-700 transition-colors text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Freiwasser-Abenteuer (6+ Tauchgänge)</h3>
                        <p className="text-gray-600 text-sm">Verschiedene Gewässer & Bedingungen</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-0">
                    <div className="pl-16 space-y-4">
                      <p className="text-gray-700">
                        Mehr Freiwasser-Erfahrung als vorgeschrieben: Du tauchst in verschiedenen Gewässern und lernst
                        unterschiedliche Bedingungen kennen.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>6+ Freiwasser-Tauchgänge (Standard: 4)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Verschiedene Tauchplätze in der Region</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Notfall-Szenarien unter realen Bedingungen</span>
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="bg-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="px-8 py-6 hover:text-blue-700 transition-colors text-left">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white flex items-center justify-center font-bold">
                        5
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Lebenslange Community-Mitgliedschaft</h3>
                        <p className="text-gray-600 text-sm">Erste 3 Monate kostenlos</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-0">
                    <div className="pl-16 space-y-4">
                      <p className="text-gray-700">
                        Nach dem Kurs bist du nicht allein: Unsere aktive Taucher-Community sorgt dafür, dass du immer
                        Buddies und neue Abenteuer findest.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Wöchentliche Tauchausfahrten</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Buddy-Matching über WhatsApp-Gruppe</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>Vergünstigte Weiterbildungskurse</span>
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* CTA after course details */}
            <div className="text-center mt-16">
              <ContactFormDialog>
                <Button
                  size="lg"
                  className="rounded-xl px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:to-cyan-300 text-white text-lg font-bold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Kostenloses Beratungsgespräch buchen
                </Button>
              </ContactFormDialog>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-8 lg:px-16">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Häufige Fragen</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Alles was du <span className="text-orange-600">wissen musst</span>
              </h2>
              <p className="text-xl text-gray-600">
                Ehrliche Antworten auf die Fragen, die uns am häufigsten gestellt werden.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="faq-1"
                  className="bg-orange-50 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="px-8 py-6 hover:text-orange-700 transition-colors justify-between">
                    <span className="text-left font-semibold">Wie lange dauert der Kurs und was kostet er?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-0 text-gray-700">
                    <p className="mb-4">
                      <strong>Dauer:</strong> 4-6 Wochen (je nach deinem Tempo). Wir nehmen uns bewusst mehr Zeit als
                      Standardkurse, damit du wirklich sicher wirst.
                    </p>
                    <p>
                      <strong>Kosten:</strong> Ab 449€ inkl. kompletter Leihausrüstung, alle Tauchgänge und 3 Monate
                      Community-Mitgliedschaft. Ratenzahlung möglich.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-2"
                  className="bg-blue-50 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="px-8 py-6 hover:text-blue-700 transition-colors justify-between">
                    <span className="text-left font-semibold">Ich habe Angst vor dem Tauchen – ist das normal?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-0 text-gray-700">
                    <p className="mb-4">
                      Absolut normal! Etwa 40% unserer Schüler haben anfangs Respekt oder Angst vor dem Wasser. Genau
                      deshalb nehmen wir uns so viel Zeit im Pool.
                    </p>
                    <p>
                      Wir haben spezielle Techniken für ängstliche Taucher und gehen nur so schnell vor, wie du dich
                      wohlfühlst. Viele unserer "ängstlichsten" Schüler sind heute die leidenschaftlichsten Taucher!
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-3"
                  className="bg-cyan-50 rounded-2xl border border-cyan-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="px-8 py-6 hover:text-cyan-700 transition-colors justify-between">
                    <span className="text-left font-semibold">
                      Brauche ich eigene Ausrüstung oder körperliche Fitness?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-0 text-gray-700">
                    <p className="mb-4">
                      <strong>Ausrüstung:</strong> Nein! Wir stellen dir hochwertiges Equipment (Scubapro, Mares)
                      kostenlos zur Verfügung. Du kannst dich voll aufs Lernen konzentrieren.
                    </p>
                    <p>
                      <strong>Fitness:</strong> Du musst kein Sportler sein. Grundschwimmfähigkeiten reichen. Wir machen
                      vor Kursbeginn einen entspannten Schwimmtest (200m in beliebigem Stil).
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-4"
                  className="bg-orange-50 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="px-8 py-6 hover:text-orange-700 transition-colors justify-between">
                    <span className="text-left font-semibold">Was passiert nach dem Kurs? Finde ich Tauchpartner?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-0 text-gray-700">
                    <p className="mb-4">
                      Das ist unser Alleinstellungsmerkmal! Unsere aktive Community mit über 200 Mitgliedern organisiert
                      fast jede Woche Tauchausfahrten.
                    </p>
                    <p>
                      Du bekommst Zugang zu unserer WhatsApp-Gruppe, wo spontane Tauchgänge geplant werden. Viele finden
                      hier nicht nur Buddies, sondern echte Freunde fürs Leben.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-5"
                  className="bg-blue-50 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="px-8 py-6 hover:text-blue-700 transition-colors justify-between">
                    <span className="text-left font-semibold">Wie komme ich zu euch und wo wird getaucht?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-0 text-gray-700">
                    <p className="mb-4">
                      <strong>Anfahrt:</strong> Wir sind 5 Minuten von der U-Bahn Mundsburg entfernt. Parkplätze sind
                      vorhanden.
                    </p>
                    <p>
                      <strong>Tauchplätze:</strong> Pool-Training bei uns, Freiwasser-Tauchgänge in der Ostsee
                      (Heiligenhafen, Grömitz) oder in klaren Seen. Transport organisieren wir gemeinsam.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-6"
                  className="bg-cyan-50 rounded-2xl border border-cyan-100 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="px-8 py-6 hover:text-cyan-700 transition-colors justify-between">
                    <span className="text-left font-semibold">
                      Welche Weiterbildungen gibt es und wie geht es weiter?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-0 text-gray-700">
                    <p className="mb-4">
                      Nach dem Open Water Diver kannst du bei uns den kompletten SSI-Pfad bis zum Instructor
                      absolvieren:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Advanced Open Water Diver</strong> – tiefere Tauchgänge, Navigation
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Spezialkurse:</strong> Nitrox, Perfect Buoyancy, Deep Diving
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Rescue Diver</strong> – Notfallmanagement unter Wasser
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Divemaster & Instructor</strong> – werde Teil unseres Teams!
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-6">Noch Fragen? Wir sind da für dich!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ContactFormDialog>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Persönlich beraten lassen
                    </Button>
                  </ContactFormDialog>
                  <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                    <Phone className="mr-2 h-4 w-4" />
                    040 – 220 606 4
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WaveSeparator />

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 text-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.cyan.400)/20,transparent)]"></div>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/10 animate-float"
                style={{
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 20 + 10}s`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>

          <div className="container relative z-10 px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Bereit für dein <span className="text-cyan-300">Unterwasser-Abenteuer?</span>
              </h2>

              <p className="text-xl md:text-2xl mb-12 text-cyan-100 max-w-3xl mx-auto">
                Über 750 Taucher haben bei uns ihre Leidenschaft entdeckt.
                <br />
                <strong>Du bist der Nächste!</strong>
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-cyan-300" />
                  <h3 className="text-lg font-bold mb-2">Mehr Übung als anderswo</h3>
                  <p className="text-cyan-100">6 Pool-Sessions statt 2-3</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                  <Users className="h-12 w-12 mx-auto mb-4 text-cyan-300" />
                  <h3 className="text-lg font-bold mb-2">Lebenslange Community</h3>
                  <p className="text-cyan-100">Immer Buddies für neue Abenteuer</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                  <Award className="h-12 w-12 mx-auto mb-4 text-cyan-300" />
                  <h3 className="text-lg font-bold mb-2">Premium Equipment</h3>
                  <p className="text-cyan-100">Scubapro & Mares inklusive</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">Sichere dir jetzt deinen Platz!</h3>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <ContactFormDialog>
                    <Button
                      size="lg"
                      className="rounded-xl px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:to-cyan-300 text-blue-900 text-lg font-bold shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                    >
                      <Calendar className="mr-2 h-6 w-6" />
                      Kostenloses Beratungsgespräch buchen
                    </Button>
                  </ContactFormDialog>

                  <Button
                    size="lg"
                    className="rounded-xl px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-blue-900 transition-all duration-300"
                  >
                    <Phone className="mr-2 h-6 w-6" />
                    040 – 220 606 4
                  </Button>
                </div>

                <p className="text-cyan-200 text-sm">
                  ✓ Unverbindliches Gespräch ✓ Ausrüstung testen ✓ Alle Fragen klären
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating CTA Bar for Mobile */}
      <FloatingCTABar />

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
