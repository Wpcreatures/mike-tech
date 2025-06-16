import Image from "next/image"
import Link from "next/link"
import {
  Award,
  CheckCircle,
  Clock,
  Compass,
  Crown,
  Facebook,
  Heart,
  Instagram,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  Star,
  TwitterIcon as TikTok,
  Users,
  Waves,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function MermaidPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Waves className="h-6 w-6 text-cyan-600" />
            <span className="text-xl font-bold text-cyan-800">Taucher Zentrum</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-cyan-700 transition-colors">
              Über uns
            </Link>
            <Link href="#courses" className="text-sm font-medium text-gray-600 hover:text-cyan-700 transition-colors">
              Kurse
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-600 hover:text-cyan-700 transition-colors"
            >
              Erfahrungen
            </Link>
            <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-cyan-700 transition-colors">
              FAQ
            </Link>
            <Button className="bg-cyan-600 hover:bg-cyan-700">Kontakt</Button>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menü öffnen</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900 via-blue-800 to-blue-900">
            {/* Animated wave effect */}
            <div className="absolute inset-0 opacity-20">
              <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  className="animate-wave-slow"
                ></path>
              </svg>
              <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="0.5"
                  d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,144C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  className="animate-wave-fast"
                ></path>
              </svg>
            </div>

            {/* Animated bubbles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/30 animate-bubble"
                  style={{
                    width: `${Math.random() * 40 + 10}px`,
                    height: `${Math.random() * 40 + 10}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100 + 100}%`,
                    animationDuration: `${Math.random() * 8 + 4}s`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white mb-6">Mermaid Erlebnis</Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
                  Verwandle dich in eine echte <span className="text-cyan-300">Meerjungfrau</span> – tauche jetzt ein in
                  unsere faszinierende Mermaid-Welt!
                </h1>
                <p className="text-lg text-cyan-100 mb-8">
                  Mit unserem <span className="font-bold text-white">professionellen Mermaid-Konzept</span> entdeckst du
                  die Unterwasserwelt auf <span className="font-bold text-white">fantasievolle</span> und{" "}
                  <span className="font-bold text-white">sichere Weise</span> – egal, ob du Anfänger bist oder bereits
                  Erfahrung im Wasser hast.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <span>Jetzt Termin sichern und Meerjungfrau werden!</span>
                    <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  </Button>
                </div>
              </div>

              <div className="relative mx-auto lg:mx-0">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Meerjungfrau im klaren Wasser"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-cyan-500 rounded-full p-4 shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="about" className="py-24 bg-gradient-to-b from-white to-cyan-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Unser Mermaid-Konzept</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                So löst unser Mermaid-Konzept deine Wünsche
              </h2>
              <p className="text-lg text-gray-600">
                Stell dir vor, du bewegst dich schwerelos im Wasser wie eine echte Meerjungfrau. Mit einer Monoflosse
                und einem glitzernden Fischschwanz erlebst du <span className="font-medium">Fitness</span>,{" "}
                <span className="font-medium">Spaß</span> und <span className="font-medium">Fantasie</span> in einer
                ganz neuen Dimension. Genau das bieten wir dir mit unserem Mermaid-Programm!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-white to-cyan-50 border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-full opacity-10 -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                    <Heart className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl text-cyan-800">Ganzheitliches Training</CardTitle>
                  <CardDescription className="text-gray-600">Fitness und Spaß in einem</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Beanspruche Beine, Rumpf und Rückenmuskulatur mit wellenförmigen Bewegungen, die dich fit halten und
                    deine Koordination stärken.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Stärkt die Rumpfmuskulatur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Verbessert die Koordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Trainiert die Ausdauer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-cyan-50 border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-full opacity-10 -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                    <Sparkles className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl text-cyan-800">Kreativität & Fantasie</CardTitle>
                  <CardDescription className="text-gray-600">Für Kinder und Erwachsene</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Tauche ein in eine märchenhafte Unterwasserwelt, die sowohl Kinder als auch Erwachsene begeistert.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Fördert die Fantasie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Einzigartige Erlebnisse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Unvergessliche Erinnerungen</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-cyan-50 border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-full opacity-10 -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                    <Shield className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl text-cyan-800">Sichere Ausbildung</CardTitle>
                  <CardDescription className="text-gray-600">Professionelle Betreuung</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Wir schulen dich Schritt für Schritt: von den ersten Flossenschlägen bis hin zum sicheren Verhalten
                    unter Wasser.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Erfahrene Trainer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Hochwertiges Equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Klare Sicherheitsrichtlinien</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section id="testimonials" className="py-24 bg-cyan-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Erfahrungen</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">Warum uns vertrauen?</h2>
              <p className="text-lg text-gray-600">
                Höre, was unsere begeisterten Mermaids über ihre Erfahrungen berichten.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg relative border border-cyan-100 overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500 rounded-full opacity-5 -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center">
                  <span className="text-2xl">"</span>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 mb-6 italic relative z-10">
                    Es war immer mein Traum, einmal wie eine Meerjungfrau zu schwimmen. Dank des Mermaid-Kurses habe ich
                    mich schon beim ersten Versuch sicher und wohl gefühlt!
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
                      <span className="text-cyan-700 font-bold">AB</span>
                    </div>
                    <div>
                      <p className="font-medium">Anna B.</p>
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg relative border border-cyan-100 overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500 rounded-full opacity-5 -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center">
                  <span className="text-2xl">"</span>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 mb-6 italic relative z-10">
                    Das Mermaiding war für die ganze Familie ein riesen Spaß. Meine Tochter und ich lieben den Mix aus
                    Fitness und Fantasie!
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
                      <span className="text-cyan-700 font-bold">JW</span>
                    </div>
                    <div>
                      <p className="font-medium">Julia W.</p>
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-md p-6 border border-cyan-100 hover:border-cyan-300 transition-colors hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-cyan-800 mb-2">Professionelle Kurse</h3>
                <p className="text-gray-600">
                  Von „Try Mermaid" für Einsteiger bis hin zu fortgeschrittenen Programmen wie „Ocean Mermaid" oder
                  „Model Mermaid".
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6 border border-cyan-100 hover:border-cyan-300 transition-colors hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-cyan-800 mb-2">Sicherheit an erster Stelle</h3>
                <p className="text-gray-600">
                  Ausgebildete Instructoren, hochwertiges Equipment und klare Sicherheitsrichtlinien.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6 border border-cyan-100 hover:border-cyan-300 transition-colors hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-cyan-800 mb-2">Familiäre Atmosphäre</h3>
                <p className="text-gray-600">Auch Kinder sind willkommen – wir haben Kurse für Klein und Groß.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details Section */}
        <section id="courses" className="py-24 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Unser Angebot</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Detaillierte Beschreibung unseres Mermaid-Angebots
              </h2>
              <p className="text-lg text-gray-600">
                Entdecke unsere verschiedenen Kurse und finde das passende Programm für dich.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="bg-white border-cyan-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="h-2 bg-cyan-400 w-full"></div>
                <CardHeader className="pb-2">
                  <Badge className="mb-2 bg-cyan-100 text-cyan-800 self-start">Einsteiger</Badge>
                  <CardTitle className="text-xl text-cyan-800">Try Mermaid</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Kurze Einführung in die Welt des Mermaiding: Lerne, wie du dich mit der Monoflosse und dem
                    Fischschwanz bewegst.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Erste Schwimmbewegungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Sicherheit im Wasser</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Behutsame Einführung</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Mehr erfahren</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white border-cyan-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="h-2 bg-cyan-500 w-full"></div>
                <CardHeader className="pb-2">
                  <Badge className="mb-2 bg-cyan-100 text-cyan-800 self-start">Grundkurs</Badge>
                  <CardTitle className="text-xl text-cyan-800">Mermaid</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Grundlegende Fertigkeiten: Vertiefe das Schwimmen mit der Mermaid-Ausrüstung und steigere dein
                    Sicherheitsgefühl im begrenzten Freiwasser.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Vertiefte Techniken</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Gemeinsame Erfolgserlebnisse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Mehr Selbstvertrauen</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Mehr erfahren</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white border-cyan-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="h-2 bg-cyan-600 w-full"></div>
                <CardHeader className="pb-2">
                  <Badge className="mb-2 bg-cyan-100 text-cyan-800 self-start">Fortgeschritten</Badge>
                  <CardTitle className="text-xl text-cyan-800">Ocean Mermaid</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Beherrsche das Mermaiding jetzt auch im offenen Wasser. Perfekt für alle, die das Meer lieben!
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Freiwassererfahrung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Fortgeschrittene Techniken</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Naturerlebnisse</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Mehr erfahren</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white border-cyan-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="h-2 bg-cyan-700 w-full"></div>
                <CardHeader className="pb-2">
                  <Badge className="mb-2 bg-cyan-100 text-cyan-800 self-start">Spezialisierung</Badge>
                  <CardTitle className="text-xl text-cyan-800">Model Mermaid</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Unterwasser-Posing und Videografie für einzigartige Fotoaufnahmen. Ideal für Events oder
                    Hobby-Fotoshootings.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Professionelles Posing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Fotografie-Grundlagen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span>Einzigartige Erinnerungen</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Mehr erfahren</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8 text-white">
                  <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">Für Profis</Badge>
                  <h3 className="text-2xl font-bold mb-4">Mermaid Instructor</h3>
                  <p className="mb-6">
                    Werde selbst zum Coach: Teile deine Leidenschaft mit anderen und lerne, Mermaid-Kurse professionell
                    zu leiten.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                      <span>Karriere im Wasser</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                      <span>Pädagogische Grundlagen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                      <span>Sicherheitsmanagement</span>
                    </li>
                  </ul>
                  <Button className="bg-white text-cyan-700 hover:bg-cyan-50">Mehr erfahren</Button>
                </div>
                <div className="relative h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Mermaid Instructor"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/80 to-transparent"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-6">
                    <Crown className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Psychological Triggers Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-900 via-blue-800 to-cyan-900 text-white">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/20 transition-colors">
                <Clock className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Dringlichkeit & Verknappung</h3>
                <p>Nur wenige freie Plätze für unsere Mermaid-Kurse – jetzt schnell anmelden!</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/20 transition-colors">
                <Shield className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Garantie</h3>
                <p>
                  Sicherheit & Spaß garantiert – dank professioneller Trainer und qualitativ hochwertiger Monoflossen.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/20 transition-colors">
                <Sparkles className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Exklusivität</h3>
                <p>
                  Entdecke eine <strong>Fantasiewelt</strong>, die über herkömmliches Tauchen hinausgeht. Sei Teil
                  unserer magischen Mermaid-Community!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-cyan-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">Häufige Fragen</h2>
              <p className="text-lg text-gray-600">
                Hier findest du Antworten auf die häufigsten Fragen zu unserem Mermaid-Angebot.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-xl border border-cyan-100">
                  <AccordionTrigger className="px-6 py-4 hover:text-cyan-700 transition-colors">
                    Kann ich auch als absoluter Anfänger teilnehmen?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                    Auf jeden Fall! Unsere <strong>Try Mermaid</strong>-Kurse sind speziell für Einsteiger entwickelt.
                    Grundlegende Schwimmfähigkeiten reichen vollkommen aus.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-xl border border-cyan-100">
                  <AccordionTrigger className="px-6 py-4 hover:text-cyan-700 transition-colors">
                    Benötige ich eigene Ausrüstung?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                    Nein, wir stellen dir <strong>Monoflosse</strong> und <strong>Meerjungfrauen-Schwanz</strong> zur
                    Verfügung. Hochwertiges Equipment sorgt für Sicherheit und Komfort.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-xl border border-cyan-100">
                  <AccordionTrigger className="px-6 py-4 hover:text-cyan-700 transition-colors">
                    Ist Mermaiding für Kinder geeignet?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                    Ja. Viele Kinder lieben die magische Vorstellung, eine Meerjungfrau zu sein. Wir achten jedoch
                    darauf, dass alle Teilnehmer <strong>schwimmen</strong> können und unsere{" "}
                    <strong>Sicherheitsstandards</strong> erfüllen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-xl border border-cyan-100">
                  <AccordionTrigger className="px-6 py-4 hover:text-cyan-700 transition-colors">
                    Wie sieht es mit Fotos und Videos aus?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                    Speziell in unserem <strong>Model Mermaid</strong>-Kurs lernst du Unterwasser-Posing. So gelingen
                    dir unvergessliche Aufnahmen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white rounded-xl border border-cyan-100">
                  <AccordionTrigger className="px-6 py-4 hover:text-cyan-700 transition-colors">
                    Was sind die nächsten Schritte nach dem Kurs?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                    Du kannst dich weiter spezialisieren (z.B. Ocean Mermaid) oder zum{" "}
                    <strong>Mermaid Instructor</strong> aufsteigen und selbst Kurse anbieten.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mt-12 -mr-12"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -mb-12 -ml-12"></div>

                <div className="p-12 text-white text-center relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Mache deinen Traum wahr und tauche ein in die faszinierende Welt des Mermaiding!
                  </h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto">
                    <strong>Melde dich jetzt für unseren Mermaid-Kurs an</strong> und:
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                      <Heart className="h-10 w-10 mx-auto mb-4" />
                      <p>Erfahre ein einzigartiges Unterwasser-Fitnessprogramm</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                      <Shield className="h-10 w-10 mx-auto mb-4" />
                      <p>Lerne von erfahrenen Trainern in sicherer Umgebung</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                      <Users className="h-10 w-10 mx-auto mb-4" />
                      <p>Triff Gleichgesinnte, die deine Leidenschaft teilen</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-8">Jetzt Platz sichern und Meerjungfrau werden!</h3>

                  <Button
                    size="lg"
                    className="bg-white text-cyan-700 hover:bg-cyan-50 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <span>Mermaid-Kurs buchen</span>
                    <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Waves className="h-6 w-6 text-cyan-400" />
                <span className="text-xl font-bold">Taucher Zentrum</span>
              </div>
              <p className="text-gray-400 mb-4">
                Deine professionelle Tauchschule mit persönlicher Betreuung und einer aktiven Tauchergemeinschaft.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <TikTok className="h-5 w-5" />
                  <span className="sr-only">TikTok</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Hier findet ihr uns</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>040 – 220 606 4</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>info@taucher-zentrum.de</span>
                </li>
                <li className="flex items-start gap-2">
                  <Compass className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Papenhuder Str. 40
                    <br />
                    22087 Hamburg
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Datenschutzerklärung
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    AGB
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Taucher Zentrum. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  )
}
