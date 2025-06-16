import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  MessageCircle,
  GraduationCap,
  Phone,
  Mail,
  Wrench,
  Settings,
  Calendar,
  MapPin,
  Gift,
  Star,
  Users,
  Shield,
  Heart,
  Search,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Formulare - Taucher Zentrum",
  description:
    "Finde das richtige Formular für dein Anliegen. Von Kursanmeldungen bis hin zu Reparaturanfragen - wir haben für alles das passende Formular.",
}

const forms = [
  {
    id: "kontakt",
    title: "Kontakt",
    description:
      "Du hast eine Frage oder ein Anliegen rund ums Taucher-Zentrum? Nutze dieses Formular, um direkt mit uns in Kontakt zu treten.",
    icon: MessageCircle,
    color: "from-blue-500 to-cyan-500",
    href: "/kontakt",
  },
  {
    id: "kursanmeldung",
    title: "Kursanmeldung",
    description:
      "Du möchtest dich verbindlich für einen Tauchkurs anmelden? Fülle dieses Formular aus und wähle deinen Wunschkurs.",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-500",
    href: "/kursanmeldung",
  },
  {
    id: "rueckruf",
    title: "Rückrufbitte",
    description:
      "Du willst lieber persönlich sprechen? Teile uns deine Telefonnummer mit und wann wir dich am besten erreichen.",
    icon: Phone,
    color: "from-purple-500 to-violet-500",
    href: "/rueckruf",
  },
  {
    id: "newsletter",
    title: "Newsletter Anmeldung",
    description:
      "Du willst keine Neuigkeiten und Aktionen mehr verpassen? Erhalte regelmäßig Updates zu Kursen und Events.",
    icon: Mail,
    color: "from-orange-500 to-red-500",
    href: "/newsletter",
  },
  {
    id: "ausruestung",
    title: "Ausrüstungsberatung",
    description:
      "Du brauchst Hilfe bei der Wahl deiner Tauchausrüstung? Wir finden gemeinsam das passende Equipment für dich.",
    icon: Wrench,
    color: "from-teal-500 to-cyan-500",
    href: "/ausruestungsberatung",
  },
  {
    id: "reparatur",
    title: "Reparatur/Serviceanfrage",
    description:
      "Deine Ausrüstung braucht Service oder Reparatur? Beschreibe das Problem und wir melden uns mit einer Lösung.",
    icon: Settings,
    color: "from-gray-500 to-slate-500",
    href: "/reparatur",
  },
  {
    id: "miete",
    title: "Leihe/Miete",
    description:
      "Du möchtest Tauchausrüstung leihen oder mieten? Wähle die gewünschten Ausrüstungsstücke und den Zeitraum.",
    icon: Calendar,
    color: "from-indigo-500 to-blue-500",
    href: "/miete",
  },
  {
    id: "reise",
    title: "Reiseanfrage",
    description:
      "Du planst eine Tauchreise oder möchtest dich beraten lassen? Wir unterstützen dich bei der Organisation.",
    icon: MapPin,
    color: "from-pink-500 to-rose-500",
    href: "/reiseanfrage",
  },
  {
    id: "gutschein",
    title: "Gutschein",
    description: "Du möchtest jemandem eine Freude machen? Bestelle hier ganz unkompliziert einen Gutschein.",
    icon: Gift,
    color: "from-yellow-500 to-orange-500",
    href: "/gutschein",
  },
  {
    id: "feedback",
    title: "Feedback",
    description: "Du hast an einem Kurs oder Event teilgenommen? Gib uns dein Feedback und teile deine Erfahrungen.",
    icon: Star,
    color: "from-amber-500 to-yellow-500",
    href: "/feedback",
  },
  {
    id: "workshop",
    title: "Workshop/Event Anmeldung",
    description: "Du willst an einem Workshop oder Event teilnehmen? Melde dich hier direkt an und erhalte alle Infos.",
    icon: Users,
    color: "from-emerald-500 to-green-500",
    href: "/workshop-anmeldung",
  },
  {
    id: "garantie",
    title: "Garantie/Garmin Testcenter",
    description:
      "Du möchtest ein Garmin-Produkt testen oder einen Garantiefall melden? Wir kümmern uns um schnellen Service.",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    href: "/garantie",
  },
  {
    id: "tauchclub",
    title: "Tauchclub/Buddy System",
    description:
      "Du möchtest dem Tauchclub beitreten oder einen Buddy finden? Wir bringen dich mit passenden Tauchern zusammen.",
    icon: Users,
    color: "from-cyan-500 to-blue-500",
    href: "/tauchclub",
  },
  {
    id: "taucherangst",
    title: "Taucherangst",
    description:
      "Du hast Unsicherheiten beim Tauchen? Wir beraten dich individuell und helfen dir, mehr Sicherheit zu gewinnen.",
    icon: Heart,
    color: "from-rose-500 to-red-500",
    href: "/taucherangst",
  },
]

export default function FormularePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Tauchausrüstung und Formulare"
              fill
              className="object-cover"
              priority
            />
          </div>

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
                  animationDuration: `${Math.random() * 8 + 4}s`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white">Formulare & Services</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Finde das richtige <span className="text-cyan-300">Formular</span> für dein Anliegen
              </h1>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Egal ob Kursanmeldung, Ausrüstungsberatung oder Reparaturanfrage - wir haben für jeden Bedarf das
                passende Formular. Schnell, unkompliziert und direkt zum Ziel.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Formular suchen..."
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Forms Grid */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Alle Formulare</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">Wähle dein Formular</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Alle Formulare sind so aufgebaut, dass du sie schnell und unkompliziert ausfüllen kannst. Bei Fragen
                stehen wir dir immer persönlich zur Seite.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {forms.map((form) => {
                const IconComponent = form.icon
                return (
                  <div
                    key={form.id}
                    className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 overflow-hidden"
                  >
                    <div className={`h-2 bg-gradient-to-r ${form.color}`} />

                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${form.color} text-white flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                          {form.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">{form.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Schnell & einfach
                        </div>

                        <Button
                          asChild
                          className={`bg-gradient-to-r ${form.color} hover:opacity-90 text-white border-0 group-hover:scale-105 transition-transform duration-300`}
                        >
                          <Link href={form.href}>
                            Zum Formular
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Brauchst du Hilfe bei der Auswahl?</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Wenn du dir nicht sicher bist, welches Formular das richtige für dich ist, kontaktiere uns einfach
                direkt. Wir helfen dir gerne weiter!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  <Link href="/kontakt">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Direkt kontaktieren
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  <Link href="tel:040-2206064">
                    <Phone className="mr-2 h-5 w-5" />
                    040 - 220 606 4
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
