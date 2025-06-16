"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Anchor,
  ChevronUp,
  Compass,
  LifeBuoy,
  Search,
  Shield,
  Filter,
  GraduationCap,
  HelpCircle,
  Tag,
  Wrench,
  CreditCard,
  Calendar,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategoryId, setActiveCategoryId] = useState("allgemein")
  const [visibleCategories, setVisibleCategories] = useState<string[]>([])
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll events for sticky header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Categories for easy navigation
  const categories = [
    { id: "allgemein", name: "Allgemeine Fragen", icon: <HelpCircle className="h-5 w-5" /> },
    { id: "ausruestung", name: "Ausrüstung", icon: <Tag className="h-5 w-5" /> },
    { id: "kurse", name: "Kurse & Ausbildung", icon: <GraduationCap className="h-5 w-5" /> },
    { id: "sicherheit", name: "Sicherheit", icon: <Shield className="h-5 w-5" /> },
    { id: "fortgeschritten", name: "Fortgeschrittenes Tauchen", icon: <Anchor className="h-5 w-5" /> },
    { id: "tauchreisen", name: "Tauchreisen", icon: <Compass className="h-5 w-5" /> },
    { id: "wartung", name: "Wartung & Pflege", icon: <Wrench className="h-5 w-5" /> },
    { id: "preise", name: "Preise & Gebühren", icon: <CreditCard className="h-5 w-5" /> },
    { id: "termine", name: "Termine & Buchungen", icon: <Calendar className="h-5 w-5" /> },
  ]

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setActiveCategoryId(categoryId)
  }

  // Handle search functionality
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)

    // Logic to expand categories containing search matches
    // This would be enhanced with actual content
    if (e.target.value) {
      setVisibleCategories(categories.map((cat) => cat.id))
    } else {
      setVisibleCategories([])
    }
  }

  const isInViewport = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return false

    const rect = element.getBoundingClientRect()
    return rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  }

  // Update active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      for (const cat of categories) {
        if (isInViewport(cat.id)) {
          setActiveCategoryId(cat.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [categories])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Taucher unter Wasser"
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
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white mb-4">Häufig gestellte Fragen</Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Taucher Zentrum FAQ: Deine Fragen, unsere Antworten
              </h1>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                Finde Antworten auf die häufigsten Fragen rund um das Tauchen, unsere Kurse, Ausrüstung und mehr. Wir
                erweitern diese Sammlung ständig.
              </p>

              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Suche nach Fragen..."
                  className="pl-10 py-6 bg-white/90 backdrop-blur-sm text-gray-800 w-full rounded-full"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content Section */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="md:col-span-1">
                <div
                  className={cn(
                    "transition-all duration-300",
                    isScrolled ? "md:sticky md:top-24" : "md:sticky md:top-20",
                  )}
                >
                  <div className="bg-blue-50 rounded-xl p-4 shadow-md mb-4 hidden md:block">
                    <h3 className="font-bold text-blue-800 mb-4 flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Kategorien
                    </h3>
                    <ul className="space-y-1">
                      {categories.map((category) => (
                        <li key={category.id}>
                          <button
                            onClick={() => scrollToCategory(category.id)}
                            className={cn(
                              "w-full text-left px-3 py-2 rounded-lg flex items-center text-sm transition-colors",
                              activeCategoryId === category.id
                                ? "bg-blue-600 text-white font-medium"
                                : "text-gray-700 hover:bg-blue-100",
                            )}
                          >
                            <span className="mr-2">{category.icon}</span>
                            {category.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-100 to-cyan-50 rounded-xl p-6 shadow-md hidden md:block">
                    <h3 className="font-bold text-blue-800 mb-3 flex items-center">
                      <LifeBuoy className="h-5 w-5 mr-2" />
                      Brauchst du weitere Hilfe?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Deine Frage nicht gefunden? Kontaktiere uns direkt, wir helfen dir gerne weiter.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Kontakt aufnehmen</Button>
                  </div>
                </div>
              </div>

              {/* Main FAQ Content */}
              <div className="md:col-span-3">
                {/* Mobile Categories Tabs */}
                <div className="md:hidden mb-6">
                  <h3 className="font-bold text-blue-800 mb-3">Kategorien</h3>
                  <div className="overflow-x-auto pb-2">
                    <div className="flex space-x-2 min-w-max">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => scrollToCategory(category.id)}
                          className={cn(
                            "px-4 py-2 rounded-full text-sm whitespace-nowrap flex items-center",
                            activeCategoryId === category.id
                              ? "bg-blue-600 text-white"
                              : "bg-blue-50 text-gray-700 hover:bg-blue-100",
                          )}
                        >
                          <span className="mr-1.5">{category.icon}</span>
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Introduction */}
                <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm mb-8">
                  <h2 className="text-xl font-bold text-blue-800 mb-3">Häufig gestellte Fragen</h2>
                  <p className="text-gray-600">
                    Hier findest du Antworten auf die häufigsten Fragen zum Tauchen, unserer Tauchschule, Kursen und
                    mehr. Benutze die Navigationsleiste, um zu bestimmten Themenbereichen zu springen, oder verwende die
                    Suchfunktion, um nach spezifischen Fragen zu suchen.
                  </p>
                </div>

                {/* FAQ Categories and Questions */}
                {categories.map((category) => (
                  <div
                    key={category.id}
                    id={category.id}
                    className={cn(
                      "scroll-mt-24 mb-12",
                      searchQuery && !visibleCategories.includes(category.id) ? "hidden" : "",
                    )}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 p-2 rounded-lg text-white mr-3">{category.icon}</div>
                      <h2 className="text-2xl font-bold text-blue-800">{category.name}</h2>
                    </div>

                    <Card className="mb-8">
                      <CardContent className="pt-6">
                        <Accordion type="single" collapsible className="w-full">
                          {/* Dynamic content generation based on category */}
                          {category.id === "allgemein" && (
                            <>
                              <AccordionItem value="item-1" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors group">
                                  <span className="text-left font-medium">Was ist das Taucher Zentrum?</span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>
                                    Das Taucher Zentrum ist eine professionelle Tauchschule in Hamburg, die eine
                                    umfassende Ausbildung für Taucher aller Erfahrungsstufen bietet. Wir legen großen
                                    Wert auf individuelle Betreuung, kleine Gruppen und eine fundierte, praxisnahe
                                    Ausbildung. Unser Ziel ist es, nicht nur sichere Taucher auszubilden, sondern auch
                                    eine aktive Tauchgemeinschaft zu fördern, in der Taucher nach ihrer Ausbildung
                                    weiterhin Anschluss finden und ihre Fähigkeiten verbessern können.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="item-2" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">Wer kann tauchen lernen?</span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>
                                    Grundsätzlich kann fast jeder das Tauchen erlernen. Es gibt einige Voraussetzungen
                                    wie:
                                  </p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>
                                      Ein Mindestalter (je nach Kurs, meist ab 10 Jahren mit speziellen
                                      Junior-Programmen)
                                    </li>
                                    <li>Grundlegende Schwimmfähigkeiten</li>
                                    <li>
                                      Eine gute gesundheitliche Verfassung (ein ärztliches Attest ist für einige Kurse
                                      erforderlich)
                                    </li>
                                  </ul>
                                  <p className="mt-2">
                                    Bei gesundheitlichen Bedenken empfehlen wir vor Kursbeginn eine Rücksprache mit
                                    einem tauchsportärztlich erfahrenen Mediziner. Viele vermeintliche Einschränkungen
                                    stellen jedoch kein tatsächliches Hindernis dar.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="item-3" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">Wie lange dauert ein Tauchkurs?</span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>Die Dauer eines Tauchkurses variiert je nach Art und Niveau:</p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>Ein Schnuppertauchen (Try Dive) dauert etwa 2-3 Stunden</li>
                                    <li>
                                      Ein Open Water Diver Kurs (Grundkurs) erstreckt sich über etwa 3-5 Tage oder kann
                                      auch an mehreren Wochenenden absolviert werden
                                    </li>
                                    <li>Fortgeschrittene Kurse wie Advanced Open Water dauern in der Regel 2-3 Tage</li>
                                    <li>
                                      Spezialkurse wie Nitrox oder Navigation können oft an einem Wochenende
                                      abgeschlossen werden
                                    </li>
                                  </ul>
                                  <p className="mt-2">
                                    Bei uns im Taucher Zentrum nehmen wir uns bewusst etwas mehr Zeit für die Ausbildung
                                    als bei Standardkursen üblich, um sicherzustellen, dass du dich im Wasser wirklich
                                    sicher fühlst und alle notwendigen Fähigkeiten beherrschst.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="item-4" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">
                                    Wie alt muss ich sein, um tauchen zu lernen?
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>Das Mindestalter für verschiedene Tauchkurse:</p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>
                                      Ab 8 Jahren: Spezielles Kinderprogramm mit ersten Unterwassererfahrungen in
                                      begrenzter Tiefe
                                    </li>
                                    <li>
                                      Ab 10 Jahren: Junior Open Water Diver (mit Einschränkungen bei Tiefe und
                                      Begleitung)
                                    </li>
                                    <li>Ab 12 Jahren: Weitere Junior-Programme möglich</li>
                                    <li>Ab 15 Jahren: Vollständiger Open Water Diver ohne Einschränkungen</li>
                                  </ul>
                                  <p className="mt-2">
                                    Für Kinder und Jugendliche bieten wir spezielle altersgerechte Programme an, die auf
                                    ihre körperlichen und emotionalen Entwicklungsstufen Rücksicht nehmen. Die
                                    Sicherheit und der Spaß stehen dabei immer im Vordergrund.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="item-5" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">Ist Tauchen gefährlich?</span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>
                                    Tauchen ist bei richtiger Ausbildung und Einhaltung der Sicherheitsregeln eine sehr
                                    sichere Aktivität. Die Statistiken zeigen, dass Tauchen sicherer ist als viele
                                    andere Freizeitsportarten. Die Risiken werden durch folgende Faktoren minimiert:
                                  </p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>Gründliche Ausbildung mit Fokus auf Sicherheitsverfahren</li>
                                    <li>Einhaltung von Tiefenlimits und Nullzeiten</li>
                                    <li>Regelmäßige Ausrüstungswartung</li>
                                    <li>Tauchen mit einem Buddy-System</li>
                                    <li>Angemessene Planung und Vorbereitung</li>
                                  </ul>
                                  <p className="mt-2">
                                    In unserer Tauchschule legen wir besonderen Wert auf eine gründliche Ausbildung mit
                                    vielen Übungseinheiten, damit du dich unter Wasser jederzeit sicher fühlst und in
                                    unerwarteten Situationen richtig reagieren kannst.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>
                            </>
                          )}

                          {category.id === "ausruestung" && (
                            <>
                              <AccordionItem value="equip-1" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">
                                    Welche Ausrüstung benötige ich als Anfänger?
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>
                                    Als Anfänger benötigst du zunächst keine eigene Ausrüstung. Für die Grundausbildung
                                    stellen wir dir die komplette Ausrüstung zur Verfügung. Nach deinem Kurs empfehlen
                                    wir dir, schrittweise in eigene Ausrüstung zu investieren, beginnend mit:
                                  </p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>Maske, Schnorchel und Flossen (ABC-Ausrüstung)</li>
                                    <li>Neoprenanzug</li>
                                    <li>Später: Tauchcomputer, BCD (Tarierjacket) und Atemregler</li>
                                  </ul>
                                  <p className="mt-2">
                                    In unserem Shop beraten wir dich gerne individuell, welche Ausrüstung für dich und
                                    deine Tauchangebote am besten geeignet ist. Wir führen nur Produkte, die wir selbst
                                    nutzen und von deren Qualität wir überzeugt sind.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="equip-2" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">
                                    Wie wähle ich die richtige Tauchmaske aus?
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>
                                    Die Wahl der richtigen Tauchmaske ist entscheidend für ein angenehmes Taucherlebnis.
                                    Achte auf folgende Punkte:
                                  </p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>
                                      Passform: Die Maske sollte ohne Gurt auf deinem Gesicht haften, wenn du leicht
                                      einatmest
                                    </li>
                                    <li>
                                      Sichtfeld: Je nach persönlicher Präferenz gibt es Masken mit unterschiedlich
                                      großen Sichtfeldern
                                    </li>
                                    <li>Glasqualität: Tempered Glass (gehärtetes Glas) ist Standard</li>
                                    <li>
                                      Bei Fehlsichtigkeit: Masken mit Korrekturgläsern oder für Brillenträger geeignete
                                      Modelle
                                    </li>
                                  </ul>
                                  <p className="mt-2">
                                    In unserem Shop kannst du verschiedene Masken anprobieren und dich beraten lassen.
                                    Die richtige Passform ist wichtiger als Marke oder Preis.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="equip-3" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">
                                    Welcher Neoprenanzug ist der richtige für mich?
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>Die Wahl des Neoprenanzugs hängt von mehreren Faktoren ab:</p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>
                                      Wassertemperatur: Für kaltes Wasser (unter 15°C) benötigst du einen 7mm Anzug oder
                                      gar einen Trockentauchanzug
                                    </li>
                                    <li>Für gemäßigtes Wasser (15-22°C) ist ein 5mm Anzug geeignet</li>
                                    <li>Für warmes Wasser (über 22°C) reicht ein 3mm Anzug oder ein Shorty</li>
                                    <li>Passform: Der Anzug sollte eng anliegen, aber nicht einschneiden</li>
                                    <li>Typ: Ein- oder zweiteilig, mit oder ohne Kopfhaube</li>
                                  </ul>
                                  <p className="mt-2">
                                    Für Tauchgänge in heimischen Gewässern empfehlen wir in der Regel einen 7mm Anzug
                                    oder für längere Tauchgänge und kältere Jahreszeiten einen Trockentauchanzug. In
                                    unserem Shop findest du eine große Auswahl und kompetente Beratung.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="equip-4" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">Wie lange hält eine Tauchausrüstung?</span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>Die Lebensdauer deiner Tauchausrüstung hängt von verschiedenen Faktoren ab:</p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>Qualität der Ausrüstung: Hochwertige Produkte halten in der Regel länger</li>
                                    <li>
                                      Nutzungshäufigkeit: Je öfter du tauchst, desto schneller können Verschleißteile
                                      abnutzen
                                    </li>
                                    <li>
                                      Wartung und Pflege: Regelmäßige Reinigung und Wartung verlängern die Lebensdauer
                                      erheblich
                                    </li>
                                    <li>
                                      Lagerungsbedingungen: Trockene, kühle Lagerung ohne direkte Sonneneinstrahlung
                                    </li>
                                  </ul>
                                  <p className="mt-2">
                                    Bei guter Pflege kann ein Atemregler 7-10 Jahre halten, ein BCD etwa 5-8 Jahre,
                                    während Neoprenanzüge je nach Nutzung nach 3-6 Jahren ersetzt werden sollten.
                                    Wichtig ist die jährliche Wartung sicherheitsrelevanter Komponenten wie Atemregler
                                    und BCD.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="equip-5" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">Brauche ich einen Tauchcomputer?</span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>
                                    Ein Tauchcomputer ist heute für jeden Taucher, vom Anfänger bis zum Profi, sehr
                                    empfehlenswert:
                                  </p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>
                                      Sicherheit: Überwacht kontinuierlich Tiefe, Tauchzeit und Stickstoffbelastung
                                    </li>
                                    <li>Bequemlichkeit: Ersetzt Tiefenmesser, Uhr und Tauchtabellen</li>
                                    <li>
                                      Genauigkeit: Berechnet individuelle Grenzen basierend auf deinem tatsächlichen
                                      Tauchprofil
                                    </li>
                                    <li>Dokumentation: Speichert deine Tauchgänge zur späteren Analyse</li>
                                  </ul>
                                  <p className="mt-2">
                                    Als Anfänger benötigst du kein komplexes Modell - ein einfacher Einsteigercomputer
                                    mit klarem Display und intuitiver Bedienung ist völlig ausreichend. Mit zunehmender
                                    Erfahrung und speziellen Anforderungen (Nitrox, Apnoe, technisches Tauchen) kannst
                                    du später auf ein fortschrittlicheres Modell umsteigen.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>
                            </>
                          )}

                          {category.id === "kurse" && (
                            <>
                              <AccordionItem value="course-1" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">
                                    Welcher Tauchschein ist der richtige für den Einstieg?
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>
                                    Für Einsteiger ist der Open Water Diver (OWD) der international anerkannte
                                    Standardkurs. Dieser Grundkurs umfasst:
                                  </p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>Theoretische Grundlagen des Tauchens</li>
                                    <li>Übungen im Pool oder begrenztem Freiwasser</li>
                                    <li>Vier bis fünf Freiwassertauchgänge</li>
                                    <li>
                                      Nach Abschluss darfst du weltweit bis zu einer Tiefe von 18-20 Metern (je nach
                                      Verband) mit einem gleichwertig qualifizierten Buddy tauchen
                                    </li>
                                  </ul>
                                  <p className="mt-2">
                                    Bei uns im Taucher Zentrum bieten wir mehr Übungseinheiten als bei Standardkursen
                                    üblich, um sicherzustellen, dass du dich im Wasser wirklich sicher fühlst und alle
                                    notwendigen Fähigkeiten beherrschst.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="course-2" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">
                                    Was ist der Unterschied zwischen den verschiedenen Tauchverbänden?
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>
                                    Die bekanntesten Tauchverbände sind PADI, SSI, NAUI und CMAS. Alle bieten qualitativ
                                    hochwertige Ausbildungen mit ähnlichen Sicherheitsstandards, unterscheiden sich aber
                                    in einigen Aspekten:
                                  </p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>
                                      Lehrmethodik: Unterschiedliche Herangehensweisen und Schwerpunkte in der
                                      Ausbildung
                                    </li>
                                    <li>
                                      Kursstruktur: Leicht unterschiedliche Anforderungen und Abfolge der
                                      Ausbildungsstufen
                                    </li>
                                    <li>
                                      Ausbildungsmaterialien: Digitale vs. gedruckte Materialien, verschiedene Apps
                                    </li>
                                    <li>
                                      Philosophie: Manche Verbände sind kommerzieller ausgerichtet, andere eher
                                      cluborientiert
                                    </li>
                                  </ul>
                                  <p className="mt-2">
                                    Für dich als Taucher ist wichtig: Alle genannten Verbände sind international
                                    anerkannt, und die Grundausbildung (Open Water Diver) wird weltweit akzeptiert. Die
                                    Qualität des Kurses hängt weniger vom Verband als vielmehr von der Tauchschule und
                                    dem Instructor ab.
                                  </p>
                                  <p className="mt-2">
                                    Im Taucher Zentrum bieten wir primär SSI-Kurse an, können aber auch Kurse nach
                                    PADI-Standards durchführen.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="course-3" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">
                                    Welche Weiterbildungsmöglichkeiten gibt es nach dem Grundkurs?
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>
                                    Nach dem Open Water Diver Kurs stehen dir viele Möglichkeiten zur Weiterbildung
                                    offen:
                                  </p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>
                                      Advanced Open Water Diver: Erweitert deine Fähigkeiten und erlaubt Tauchgänge bis
                                      30 Meter
                                    </li>
                                    <li>
                                      Spezialkurse:
                                      <ul className="list-disc pl-6 mt-1 space-y-1">
                                        <li>Nitrox: Tauchen mit sauerstoffangereicherter Luft</li>
                                        <li>Wracktauchen: Sicheres Erkunden von Wracks</li>
                                        <li>Nachttauchen: Tauchen bei Dunkelheit</li>
                                        <li>Tieftauchen: Sicheres Tauchen in größeren Tiefen</li>
                                        <li>Perfekte Tarierung: Verbesserung deiner Tauchfähigkeiten</li>
                                      </ul>
                                    </li>
                                    <li>Rescue Diver: Lernen, wie man anderen Tauchern in Notfällen hilft</li>
                                    <li>
                                      Divemaster/Assistant Instructor: Erste Stufe der professionellen Tauchausbildung
                                    </li>
                                    <li>Instructor: Ausbildung zum Tauchlehrer</li>
                                  </ul>
                                  <p className="mt-2">
                                    Wir empfehlen, nach dem Grundkurs zunächst Erfahrung zu sammeln und dann je nach
                                    Interessen gezielt Spezialkurse zu absolvieren. Besonders der Nitrox-Kurs ist für
                                    viele Taucher eine sinnvolle frühe Weiterbildung.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="course-4" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">
                                    Wie oft sollte ich nach meinem Kurs tauchen, um Übung zu behalten?
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>
                                    Um deine Tauchfähigkeiten zu erhalten und kontinuierlich zu verbessern, empfehlen
                                    wir:
                                  </p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>In den ersten Monaten nach dem Kurs: Mindestens ein Tauchgang pro Monat</li>
                                    <li>Als regelmäßiger Taucher: Mindestens alle 2-3 Monate tauchen</li>
                                    <li>
                                      Bei längeren Pausen (über 6 Monate): Ein Auffrischungskurs (Scuba Review) vor dem
                                      nächsten Tauchgang
                                    </li>
                                  </ul>
                                  <p className="mt-2">
                                    Tauchen ist wie Fahrradfahren - die Grundfähigkeiten verlernt man nicht komplett,
                                    aber die Routine und das Selbstvertrauen unter Wasser brauchen regelmäßige Übung.
                                    Unser Tauchclub bietet die perfekte Möglichkeit, regelmäßig zu tauchen und Teil
                                    einer Gemeinschaft zu sein.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="course-5" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">Was kostet ein Tauchkurs?</span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>Die Kosten für Tauchkurse variieren je nach Kurstyp und Umfang:</p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>Schnuppertauchen: ca. 50-80 € pro Person</li>
                                    <li>Open Water Diver (Grundkurs): ca. 350-500 €</li>
                                    <li>Advanced Open Water Diver: ca. 300-450 €</li>
                                    <li>Spezialkurse: je nach Kurs ca. 150-300 €</li>
                                  </ul>
                                  <p className="mt-2">
                                    In diesen Preisen sind in der Regel enthalten: Theoriematerialien, Leihausrüstung,
                                    Tauchgänge, Zertifizierung und bei uns auch die zusätzlichen Übungseinheiten. Nicht
                                    enthalten sind meist persönliche Ausrüstungsgegenstände wie Maske, Schnorchel und
                                    Flossen, die du selbst erwerben solltest.
                                  </p>
                                  <p className="mt-2">
                                    Wir bieten auch verschiedene Pakete und Kombikurse an, die preislich attraktiver
                                    sind als einzeln gebuchte Kurse. Aktuelle Preise findest du auf unserer Website oder
                                    bei einer persönlichen Beratung.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>
                            </>
                          )}

                          {category.id === "sicherheit" && (
                            <>
                              <AccordionItem value="safety-1" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">
                                    Was sind die wichtigsten Sicherheitsregeln beim Tauchen?
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>Die grundlegenden Sicherheitsregeln beim Tauchen umfassen:</p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>Nie alleine tauchen - immer das Buddy-System beachten</li>
                                    <li>Regelmäßige Luftkontrolle während des Tauchgangs</li>
                                    <li>Langsamer, kontrollierter Aufstieg (max. 10 Meter pro Minute)</li>
                                    <li>Respektieren von Tiefenlimits entsprechend der Ausbildung</li>
                                    <li>Einhaltung der Nullzeiten bzw. Dekompressionsvorschriften</li>
                                    <li>Ausrüstungskontrolle vor dem Tauchgang (Buddy-Check)</li>
                                    <li>Planung jedes Tauchgangs und Festlegung von Notfallprozeduren</li>
                                    <li>Niemals tauchen bei Krankheit, Müdigkeit oder unter Alkohol-/Drogeneinfluss</li>
                                  </ul>
                                  <p className="mt-2">
                                    Diese Regeln werden in jedem Tauchkurs intensiv trainiert. Im Taucher Zentrum legen
                                    wir besonderen Wert auf die praktische Anwendung dieser Regeln, damit sie zur
                                    Routine werden und auch in Stresssituationen automatisch befolgt werden können.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="safety-2" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">
                                    Was ist eine Dekompressionskrankheit und wie verhindere ich sie?
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>
                                    Die Dekompressionskrankheit (auch Taucherkrankheit genannt) entsteht, wenn beim
                                    Auftauchen Stickstoffbläschen im Gewebe oder Blut aufgrund zu schneller Druckabnahme
                                    entstehen. Symptome können Gelenk- und Muskelschmerzen, Hautausschläge, Müdigkeit,
                                    bis hin zu schweren neurologischen Problemen sein.
                                  </p>
                                  <p className="mt-2">So kannst du sie vermeiden:</p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>Halte dich an die Nullzeiten oder die vorgeschriebenen Dekompressionsstopps</li>
                                    <li>Steige langsam auf (maximal 10 Meter pro Minute)</li>
                                    <li>Halte immer einen Sicherheitsstopp (3 Minuten auf 5 Meter Tiefe)</li>
                                    <li>Vermeide Jojo-Tauchgänge (wiederholtes Auf- und Abtauchen)</li>
                                    <li>Verzichte auf körperliche Anstrengung nach dem Tauchen</li>
                                    <li>Fliege nicht innerhalb von 24 Stunden nach dem Tauchen</li>
                                    <li>Trinke ausreichend Wasser vor und nach dem Tauchen</li>
                                    <li>Tauche nicht mit Erkältung oder verstopfter Nase</li>
                                  </ul>
                                  <p className="mt-2">
                                    Ein Tauchcomputer ist heute das wichtigste Hilfsmittel, um die Stickstoffbelastung
                                    zu überwachen und Dekompressionskrankheit zu vermeiden.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="safety-3" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">Was tun bei einem Tauchunfall?</span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>
                                    Bei einem Verdacht auf einen Tauchunfall (z.B. Dekompressionskrankheit) sind
                                    folgende Schritte zu befolgen:
                                  </p>
                                  <ol className="list-decimal pl-6 mt-2 space-y-1">
                                    <li>
                                      Stelle die Vitalfunktionen sicher (ABC-Check: Atemwege, Beatmung,
                                      Circulation/Kreislauf)
                                    </li>
                                    <li>Lagere den Betroffenen flach und stabil, bei Bewusstsein in Rückenlage</li>
                                    <li>Verabreiche 100% Sauerstoff, wenn verfügbar</li>
                                    <li>Verhindere Unterkühlung</li>
                                    <li>Gib Flüssigkeit (Wasser), wenn der Betroffene bei Bewusstsein ist</li>
                                    <li>Alarmiere den Rettungsdienst (in Deutschland: 112)</li>
                                    <li>Informiere den Rettungsdienst, dass es sich um einen Tauchunfall handelt</li>
                                    <li>
                                      Kontaktiere eine Druckkammer oder Tauchmediziner (z.B. Hotline für Tauchunfälle:
                                      +49 89 21562603)
                                    </li>
                                    <li>
                                      Dokumentiere Tauchdaten (Tiefe, Zeit, Aufstiegsgeschwindigkeit) und Symptome für
                                      medizinisches Personal
                                    </li>
                                  </ol>
                                  <p className="mt-2">
                                    In unserem Rescue Diver Kurs trainieren wir ausführlich die Erkennung und Behandlung
                                    von Tauchunfällen. Wir empfehlen außerdem jedem Taucher, einen Erste-Hilfe-Kurs zu
                                    absolvieren und die Kenntnisse regelmäßig aufzufrischen.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>

                              <AccordionItem value="safety-4" className="border-b border-blue-100">
                                <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                  <span className="text-left font-medium">
                                    Brauche ich eine spezielle Tauchversicherung?
                                  </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-1 text-gray-700">
                                  <p>
                                    Eine spezielle Tauchversicherung ist sehr empfehlenswert, da viele
                                    Standard-Krankenversicherungen tauchspezifische Behandlungen nicht oder nur
                                    teilweise abdecken. Eine gute Tauchversicherung sollte folgendes beinhalten:
                                  </p>
                                  <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>Druckkammerbehandlungen (können sehr teuer sein)</li>
                                    <li>Such- und Rettungskosten</li>
                                    <li>Medizinische Notfälle im Ausland</li>
                                    <li>Notfall-Rücktransport in die Heimat</li>
                                    <li>Haftpflichtschutz für Tauchaktivitäten</li>
                                  </ul>
                                  <p className="mt-2">
                                    Bekannte Anbieter sind DAN (Divers Alert Network), aqua med und DiveAssure. Die
                                    Kosten liegen je nach Umfang zwischen 40 und 150 € pro Jahr. Viele Tauchverbände
                                    bieten ihren Mitgliedern auch günstige Gruppenversicherungen an.
                                  </p>
                                  <p className="mt-2">
                                    Wir empfehlen dringend, keine Tauchurlaube ohne entsprechenden Versicherungsschutz
                                    zu unternehmen, besonders in Ländern mit teuren Gesundheitssystemen oder
                                    eingeschränkter medizinischer Versorgung.
                                  </p>
                                </AccordionContent>
                              </AccordionItem>
                            </>
                          )}

                          {/* Weitere Kategorien hier hinzufügen */}

                          {/* Fallback für neue oder nicht ausgefüllte Kategorien */}
                          {!["allgemein", "ausruestung", "kurse", "sicherheit"].includes(category.id) && (
                            <AccordionItem value="placeholder" className="border-b border-blue-100">
                              <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                                <span className="text-left font-medium">
                                  Wie finde ich Informationen zu {category.name}?
                                </span>
                              </AccordionTrigger>
                              <AccordionContent className="pb-4 pt-1 text-gray-700">
                                <p>
                                  Wir erweitern unsere FAQ-Sektion ständig. Für Fragen zu {category.name}, die hier noch
                                  nicht beantwortet sind, bieten wir dir folgende Möglichkeiten:
                                </p>
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                  <li>Kontaktiere uns direkt per Telefon unter 040 – 220 606 4</li>
                                  <li>Schreibe uns eine E-Mail an info@taucher-zentrum.de</li>
                                  <li>Besuche unsere Tauchschule in der Papenhuder Str. 40, 22087 Hamburg</li>
                                  <li>Stelle deine Frage in unserer Community-Gruppe</li>
                                </ul>
                                <p className="mt-2">
                                  Deine Fragen helfen uns dabei, diese FAQ-Seite zu verbessern und für alle Taucher
                                  nützlicher zu gestalten.
                                </p>
                              </AccordionContent>
                            </AccordionItem>
                          )}
                        </Accordion>
                      </CardContent>
                    </Card>
                  </div>
                ))}

                {/* More Questions Section */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-md border border-blue-100 mb-8">
                  <div className="text-center">
                    <h2 className="text-xl font-bold text-blue-800 mb-3">Noch Fragen?</h2>
                    <p className="text-gray-600 mb-6">
                      Hast du nicht gefunden, wonach du suchst? Wir sind jederzeit für dich da, um all deine Fragen zum
                      Tauchen zu beantworten.
                    </p>
                    <div className="max-w-lg mx-auto grid md:grid-cols-2 gap-4">
                      <ContactFormDialog>
                        <Button className="bg-blue-600 hover:bg-blue-700">Kontakt aufnehmen</Button>
                      </ContactFormDialog>
                      <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
                        WhatsApp-Support
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Back to Top Button - Fixed at bottom right */}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="fixed bottom-8 right-8 z-20 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Zurück nach oben"
                >
                  <ChevronUp className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
