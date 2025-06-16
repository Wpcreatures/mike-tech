"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Award,
  CheckCircle,
  ChevronRight,
  Clock,
  Compass,
  Crown,
  Droplet,
  Facebook,
  Heart,
  Instagram,
  MessageCircle,
  Phone,
  Play,
  Shield,
  Sparkles,
  Star,
  Twitter,
  Users,
  Waves,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function MermaidGradientPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Find active section
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Play/pause video in modal
  const handleVideoModal = (isOpen: boolean) => {
    if (videoRef.current) {
      if (isOpen) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-blue-50 to-white">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "bg-gradient-to-r from-white/90 via-cyan-50/90 to-white/90 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full p-1.5">
              <Waves className="h-5 w-5 text-white" />
            </div>
            <span
              className={cn(
                "text-xl font-bold transition-colors duration-300 bg-clip-text text-transparent",
                isScrolled ? "bg-gradient-to-r from-cyan-600 to-blue-600" : "bg-gradient-to-r from-cyan-100 to-white",
              )}
            >
              Taucher Zentrum
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "Über Mermaiding" },
              { id: "courses", label: "Kurse" },
              { id: "testimonials", label: "Erfahrungen" },
              { id: "faq", label: "FAQ" },
            ].map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative",
                  isScrolled
                    ? activeSection === item.id
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"
                      : "text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500"
                    : "text-white hover:text-cyan-200",
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                  />
                )}
              </Link>
            ))}

            <Button
              className={cn(
                "rounded-full transition-all duration-300 font-medium shadow-md",
                isScrolled
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                  : "bg-gradient-to-r from-white to-cyan-50 hover:from-cyan-50 hover:to-white text-cyan-600 hover:text-cyan-700",
              )}
            >
              Kurs buchen
            </Button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Menü öffnen</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isScrolled ? "currentColor" : "white"}
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

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background video/image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/70 via-blue-400/60 to-blue-500/70 z-10"></div>
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Mermaid swimming underwater"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Animated water overlay */}
          <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
            <svg
              className="absolute bottom-0 left-0 right-0 w-full"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#wave-gradient)"
                fillOpacity="0.3"
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="animate-wave-slow"
              >
                <defs>
                  <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#a4cfff" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
              </path>
            </svg>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-20 mt-16">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Badge className="bg-gradient-to-r from-white/20 to-cyan-200/30 text-white hover:from-white/30 hover:to-cyan-200/40 backdrop-blur-sm mb-6 px-4 py-1.5 border border-white/20">
                  Entdecke die Magie des Meeres
                </Badge>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-md">
                  Verwandle dich in eine echte{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                    Meerjungfrau
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow">
                  Mit unserem <span className="font-bold">professionellen Mermaid-Konzept</span> entdeckst du die
                  Unterwasserwelt auf <span className="font-bold">fantasievolle</span> und{" "}
                  <span className="font-bold">sichere Weise</span> – egal, ob du Anfänger bist oder bereits Erfahrung im
                  Wasser hast.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-white to-cyan-50 hover:from-cyan-50 hover:to-white text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium border border-white/20"
                  >
                    Jetzt Termin sichern
                  </Button>

                  <Dialog onOpenChange={handleVideoModal}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="lg"
                        className="bg-gradient-to-r from-white/10 to-cyan-200/10 hover:from-white/20 hover:to-cyan-200/20 text-white border-white/30 rounded-full px-8 py-6 text-lg backdrop-blur-sm"
                      >
                        <Play className="mr-2 h-5 w-5" /> Video ansehen
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                      <video
                        ref={videoRef}
                        controls
                        className="w-full rounded-lg shadow-2xl"
                        poster="/placeholder.svg?height=720&width=1280"
                      >
                        <source src="#" type="video/mp4" />
                        Dein Browser unterstützt keine Videos.
                      </video>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-white/10 via-cyan-200/20 to-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-white/20"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                    500+
                  </p>
                  <p className="text-sm text-white/80">Zufriedene Mermaids</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                    4
                  </p>
                  <p className="text-sm text-white/80">Kurslevels</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                    12
                  </p>
                  <p className="text-sm text-white/80">Erfahrene Trainer</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                    100%
                  </p>
                  <p className="text-sm text-white/80">Sicherheit</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-white text-sm mb-2">Mehr entdecken</span>
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center bg-gradient-to-b from-white/10 to-white/5">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  className="w-1.5 h-3 bg-gradient-to-b from-white to-cyan-200 rounded-full mt-1"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-cyan-50 to-white">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-500/5 rounded-full -ml-48 -mb-48"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-cyan-100 to-blue-100 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-200 hover:to-blue-200">
                Unser Mermaid-Konzept
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-6">
                So löst unser Mermaid-Konzept deine Wünsche
              </h2>
              <p className="text-lg text-gray-600">
                Stell dir vor, du bewegst dich schwerelos im Wasser wie eine echte Meerjungfrau. Mit einer Monoflosse
                und einem glitzernden Fischschwanz erlebst du <span className="font-medium">Fitness</span>,{" "}
                <span className="font-medium">Spaß</span> und <span className="font-medium">Fantasie</span> in einer
                ganz neuen Dimension.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Mermaid swimming"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-medium">Erlebe die Freiheit unter Wasser</p>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute top-10 -right-10 bg-gradient-to-br from-white to-cyan-50 rounded-full shadow-lg p-4">
                  <Sparkles className="h-8 w-8 text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-tr from-white to-cyan-50 rounded-full shadow-lg p-4">
                  <Droplet className="h-8 w-8 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-cyan-500" />
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-white to-cyan-50 rounded-2xl shadow-lg p-6 border-l-4 border-gradient-to-b border-cyan-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-2">
                        Ganzheitliches Training
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Beanspruche Beine, Rumpf und Rückenmuskulatur mit wellenförmigen Bewegungen, die dich fit halten
                        und deine Koordination stärken.
                      </p>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Stärkt die Rumpfmuskulatur</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Verbessert die Koordination</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-white to-cyan-50 rounded-2xl shadow-lg p-6 border-l-4 border-cyan-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-2">
                        Kreativität & Fantasie
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Tauche ein in eine märchenhafte Unterwasserwelt, die sowohl Kinder als auch Erwachsene
                        begeistert.
                      </p>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Fördert die Fantasie</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Einzigartige Erlebnisse</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-white to-cyan-50 rounded-2xl shadow-lg p-6 border-l-4 border-cyan-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-2">
                        Sichere Ausbildung
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Wir schulen dich Schritt für Schritt: von den ersten Flossenschlägen bis hin zum sicheren
                        Verhalten unter Wasser.
                      </p>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Erfahrene Trainer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Hochwertiges Equipment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section
          id="courses"
          className="py-24 bg-gradient-to-b from-white via-cyan-50 to-blue-50 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 rounded-full transform -translate-y-1/2 -ml-32"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-500/5 rounded-full -mr-48"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-cyan-100 to-blue-100 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-200 hover:to-blue-200">
                Unsere Kurse
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-6">
                Detaillierte Beschreibung unseres Mermaid-Angebots
              </h2>
              <p className="text-lg text-gray-600">
                Entdecke unsere verschiedenen Kurse und finde das passende Programm für dich.
              </p>
            </div>

            <Tabs defaultValue="beginner" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-12 bg-gradient-to-r from-cyan-100/50 via-blue-100/50 to-cyan-100/50 p-1 rounded-full">
                <TabsTrigger
                  value="beginner"
                  className="rounded-full data-[state=active]:bg-gradient-to-r from-cyan-500 to-blue-600 data-[state=active]:text-white"
                >
                  Einsteiger
                </TabsTrigger>
                <TabsTrigger
                  value="basic"
                  className="rounded-full data-[state=active]:bg-gradient-to-r from-cyan-500 to-blue-600 data-[state=active]:text-white"
                >
                  Grundkurs
                </TabsTrigger>
                <TabsTrigger
                  value="advanced"
                  className="rounded-full data-[state=active]:bg-gradient-to-r from-cyan-500 to-blue-600 data-[state=active]:text-white"
                >
                  Fortgeschritten
                </TabsTrigger>
                <TabsTrigger
                  value="special"
                  className="rounded-full data-[state=active]:bg-gradient-to-r from-cyan-500 to-blue-600 data-[state=active]:text-white"
                >
                  Spezialisierung
                </TabsTrigger>
              </TabsList>

              <TabsContent value="beginner" className="mt-0">
                <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl shadow-xl overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Try Mermaid Kurs"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 via-transparent to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-gradient-to-r from-white/90 to-cyan-50/90 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 backdrop-blur-sm">
                          Try Mermaid
                        </Badge>
                      </div>
                    </div>

                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-4">
                        Try Mermaid
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Kurze Einführung in die Welt des Mermaiding: Lerne, wie du dich mit der Monoflosse und dem
                        Fischschwanz bewegst.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Erste Schwimmbewegungen</h4>
                            <p className="text-sm text-gray-600">Lerne die grundlegenden Techniken des Mermaiding.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Sicherheit im Wasser</h4>
                            <p className="text-sm text-gray-600">
                              Erfahrene Trainer führen dich behutsam an die Bewegungsabläufe heran.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Behutsame Einführung</h4>
                            <p className="text-sm text-gray-600">
                              Ideal für alle, die Mermaiding ausprobieren möchten.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Dauer: 2 Stunden</p>
                          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700">
                            €49
                          </p>
                        </div>
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full">
                          Jetzt buchen <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="basic" className="mt-0">
                <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl shadow-xl overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Mermaid Grundkurs"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 via-transparent to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-gradient-to-r from-white/90 to-cyan-50/90 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 backdrop-blur-sm">
                          Mermaid
                        </Badge>
                      </div>
                    </div>

                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-4">
                        Mermaid
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Grundlegende Fertigkeiten: Vertiefe das Schwimmen mit der Mermaid-Ausrüstung und steigere dein
                        Sicherheitsgefühl im begrenzten Freiwasser.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Vertiefte Techniken</h4>
                            <p className="text-sm text-gray-600">
                              Erweitere deine Fähigkeiten mit fortgeschrittenen Bewegungen.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Gemeinsame Erfolgserlebnisse</h4>
                            <p className="text-sm text-gray-600">
                              Lerne zusammen mit anderen Mermaid-Fans und tausch dich aus.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Mehr Selbstvertrauen</h4>
                            <p className="text-sm text-gray-600">
                              Steigere dein Sicherheitsgefühl im begrenzten Freiwasser.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Dauer: 6 Stunden (3 Termine)</p>
                          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700">
                            €149
                          </p>
                        </div>
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full">
                          Jetzt buchen <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="mt-0">
                <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl shadow-xl overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Ocean Mermaid Kurs"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 via-transparent to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-gradient-to-r from-white/90 to-cyan-50/90 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 backdrop-blur-sm">
                          Ocean Mermaid
                        </Badge>
                      </div>
                    </div>

                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-4">
                        Ocean Mermaid
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Beherrsche das Mermaiding jetzt auch im offenen Wasser. Perfekt für alle, die das Meer lieben!
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Freiwassererfahrung</h4>
                            <p className="text-sm text-gray-600">Erlebe das Mermaiding in natürlicher Umgebung.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Fortgeschrittene Techniken</h4>
                            <p className="text-sm text-gray-600">Lerne komplexere Bewegungen und Unterwassermanöver.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Naturerlebnisse</h4>
                            <p className="text-sm text-gray-600">
                              Entdecke die Unterwasserwelt in ihrer natürlichen Schönheit.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Dauer: 8 Stunden (2 Tage)</p>
                          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700">
                            €249
                          </p>
                        </div>
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full">
                          Jetzt buchen <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="special" className="mt-0">
                <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl shadow-xl overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Model Mermaid Kurs"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 via-transparent to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-gradient-to-r from-white/90 to-cyan-50/90 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 backdrop-blur-sm">
                          Model Mermaid
                        </Badge>
                      </div>
                    </div>

                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-4">
                        Model Mermaid
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Unterwasser-Posing und Videografie für einzigartige Fotoaufnahmen. Ideal für Events oder
                        Hobby-Fotoshootings.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Professionelles Posing</h4>
                            <p className="text-sm text-gray-600">
                              Lerne die besten Posen für atemberaubende Unterwasserfotos.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Fotografie-Grundlagen</h4>
                            <p className="text-sm text-gray-600">
                              Verstehe die Besonderheiten der Unterwasserfotografie.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Einzigartige Erinnerungen</h4>
                            <p className="text-sm text-gray-600">Nimm professionelle Fotos mit nach Hause.</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Dauer: 4 Stunden</p>
                          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700">
                            €199
                          </p>
                        </div>
                        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full">
                          Jetzt buchen <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Instructor section */}
            <div className="mt-16 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 rounded-3xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 text-white">
                  <Badge className="mb-4 bg-gradient-to-r from-white/20 to-cyan-200/30 text-white hover:from-white/30 hover:to-cyan-200/40 backdrop-blur-sm border border-white/20">
                    Für Profis
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">Mermaid Instructor</h3>
                  <p className="mb-6">
                    Werde selbst zum Coach: Teile deine Leidenschaft mit anderen und lerne, Mermaid-Kurse professionell
                    zu leiten.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Karriere im Wasser</h4>
                        <p className="text-sm text-white/80">
                          Ob nebenberuflich oder hauptberuflich – Mermaiding begeistert immer mehr Menschen.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Pädagogische Grundlagen</h4>
                        <p className="text-sm text-white/80">Lerne, wie du dein Wissen effektiv weitergibst.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Sicherheitsmanagement</h4>
                        <p className="text-sm text-white/80">Werde zum Experten für sicheres Mermaiding.</p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-white to-cyan-50 hover:from-cyan-50 hover:to-white text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-full border border-white/20">
                    Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>

                <div className="relative h-80 md:h-full">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Mermaid Instructor"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-cyan-600/90 md:bg-gradient-to-r"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-white/20 to-cyan-200/30 backdrop-blur-sm rounded-full p-6 border border-white/20">
                    <Crown className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-24 bg-gradient-to-b from-blue-50 via-cyan-50 to-white relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-cyan-100 to-blue-100 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-200 hover:to-blue-200">
                Erfahrungen
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-6">
                Warum uns vertrauen?
              </h2>
              <p className="text-lg text-gray-600">
                Höre, was unsere begeisterten Mermaids über ihre Erfahrungen berichten.
              </p>
              <p className="text-sm text-gray-500">
                Schau dir unsere{" "}
                <Link
                  href="#"
                  className="underline underline-offset-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"
                >
                  Google-Bewertungen
                </Link>{" "}
                an!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-white to-cyan-50 border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute top-4 right-4 text-transparent">
                    <div className="flex bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </div>

                  <div className="mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                    <span className="text-4xl font-serif">"</span>
                  </div>

                  <p className="text-gray-700 mb-6 italic">
                    Es war immer mein Traum, einmal wie eine Meerjungfrau zu schwimmen. Dank des Mermaid-Kurses habe ich
                    mich schon beim ersten Versuch sicher und wohl gefühlt!
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-700 to-blue-700 font-bold">
                        AB
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Anna B.</p>
                      <p className="text-sm text-gray-500">Try Mermaid Kurs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-cyan-50 border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute top-4 right-4 text-transparent">
                    <div className="flex bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </div>

                  <div className="mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                    <span className="text-4xl font-serif">"</span>
                  </div>

                  <p className="text-gray-700 mb-6 italic">
                    Das Mermaiding war für die ganze Familie ein riesen Spaß. Meine Tochter und ich lieben den Mix aus
                    Fitness und Fantasie!
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-700 to-blue-700 font-bold">
                        JW
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Julia W.</p>
                      <p className="text-sm text-gray-500">Mermaid Kurs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-cyan-50 border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute top-4 right-4 text-transparent">
                    <div className="flex bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </div>

                  <div className="mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                    <span className="text-4xl font-serif">"</span>
                  </div>

                  <p className="text-gray-700 mb-6 italic">
                    Die Unterwasserfotos vom Model Mermaid Kurs sind unglaublich geworden! Ich hätte nie gedacht, dass
                    ich so elegant unter Wasser aussehen kann.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-700 to-blue-700 font-bold">
                        MK
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Melanie K.</p>
                      <p className="text-sm text-gray-500">Model Mermaid Kurs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-md p-6 border border-cyan-100 hover:border-cyan-300 transition-colors hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-2">
                  Professionelle Kurse
                </h3>
                <p className="text-gray-600">
                  Von „Try Mermaid" für Einsteiger bis hin zu fortgeschrittenen Programmen wie „Ocean Mermaid" oder
                  „Model Mermaid".
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-md p-6 border border-cyan-100 hover:border-cyan-300 transition-colors hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-2">
                  Sicherheit an erster Stelle
                </h3>
                <p className="text-gray-600">
                  Ausgebildete Instructoren, hochwertiges Equipment und klare Sicherheitsrichtlinien.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-md p-6 border border-cyan-100 hover:border-cyan-300 transition-colors hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-2">
                  Familiäre Atmosphäre
                </h3>
                <p className="text-gray-600">Auch Kinder sind willkommen – wir haben Kurse für Klein und Groß.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Psychological Triggers Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/10 to-cyan-200/20 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center text-center hover:from-white/20 hover:to-cyan-200/30 transition-colors border border-white/10">
                <Clock className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Dringlichkeit & Verknappung</h3>
                <p>Nur wenige freie Plätze für unsere Mermaid-Kurse – jetzt schnell anmelden!</p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-cyan-200/20 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center text-center hover:from-white/20 hover:to-cyan-200/30 transition-colors border border-white/10">
                <Shield className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Garantie</h3>
                <p>
                  Sicherheit & Spaß garantiert – dank professioneller Trainer und qualitativ hochwertiger Monoflossen.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-cyan-200/20 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center text-center hover:from-white/20 hover:to-cyan-200/30 transition-colors border border-white/10">
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
        <section id="faq" className="py-24 bg-gradient-to-b from-white via-cyan-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-cyan-100 to-blue-100 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-200 hover:to-blue-200">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700 mb-6">
                Häufige Fragen
              </h2>
              <p className="text-lg text-gray-600">
                Hier findest du Antworten auf die häufigsten Fragen zu unserem Mermaid-Angebot.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "Kann ich auch als absoluter Anfänger teilnehmen?",
                    answer:
                      "Auf jeden Fall! Unsere <strong>Try Mermaid</strong>-Kurse sind speziell für Einsteiger entwickelt. Grundlegende Schwimmfähigkeiten reichen vollkommen aus.",
                  },
                  {
                    question: "Benötige ich eigene Ausrüstung?",
                    answer:
                      "Nein, wir stellen dir <strong>Monoflosse</strong> und <strong>Meerjungfrauen-Schwanz</strong> zur Verfügung. Hochwertiges Equipment sorgt für Sicherheit und Komfort.",
                  },
                  {
                    question: "Ist Mermaiding für Kinder geeignet?",
                    answer:
                      "Ja. Viele Kinder lieben die magische Vorstellung, eine Meerjungfrau zu sein. Wir achten jedoch darauf, dass alle Teilnehmer <strong>schwimmen</strong> können und unsere <strong>Sicherheitsstandards</strong> erfüllen.",
                  },
                  {
                    question: "Wie sieht es mit Fotos und Videos aus?",
                    answer:
                      "Speziell in unserem <strong>Model Mermaid</strong>-Kurs lernst du Unterwasser-Posing. So gelingen dir unvergessliche Aufnahmen.",
                  },
                  {
                    question: "Was sind die nächsten Schritte nach dem Kurs?",
                    answer:
                      "Du kannst dich weiter spezialisieren (z.B. Ocean Mermaid) oder zum <strong>Mermaid Instructor</strong> aufsteigen und selbst Kurse anbieten.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-cyan-100"
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-6">
                        <h3 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-blue-700">
                          {faq.question}
                        </h3>
                        <div className="ml-4 transition-transform duration-300 group-open:rotate-180">
                          <ChevronRight className="h-5 w-5 text-cyan-600" />
                        </div>
                      </summary>
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-b from-white to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-cyan-200/20 rounded-full -mt-12 -mr-12"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/10 to-cyan-200/20 rounded-full -mb-12 -ml-12"></div>

                <div className="p-12 text-white text-center relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Mache deinen Traum wahr und tauche ein in die faszinierende Welt des Mermaiding!
                  </h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto">
                    <strong>Melde dich jetzt für unseren Mermaid-Kurs an</strong> und:
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-white/10 to-cyan-200/20 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                      <Heart className="h-10 w-10 mx-auto mb-4" />
                      <p>Erfahre ein einzigartiges Unterwasser-Fitnessprogramm</p>
                    </div>
                    <div className="bg-gradient-to-br from-white/10 to-cyan-200/20 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                      <Shield className="h-10 w-10 mx-auto mb-4" />
                      <p>Lerne von erfahrenen Trainern in sicherer Umgebung</p>
                    </div>
                    <div className="bg-gradient-to-br from-white/10 to-cyan-200/20 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                      <Users className="h-10 w-10 mx-auto mb-4" />
                      <p>Triff Gleichgesinnte, die deine Leidenschaft teilen</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-8">Jetzt Platz sichern und Meerjungfrau werden!</h3>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-white to-cyan-50 hover:from-cyan-50 hover:to-white text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-white/20"
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
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full p-1.5">
                  <Waves className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                  Taucher Zentrum
                </span>
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
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Hier findet ihr uns
              </h3>
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
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Navigation
              </h3>
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
