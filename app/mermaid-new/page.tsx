"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Award,
  CheckCircle,
  ChevronRight,
  Compass,
  Crown,
  Droplet,
  Heart,
  Play,
  Shield,
  Sparkles,
  Star,
  Users,
  Waves,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function MermaidNewPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Navigation - Ersetze mit SiteHeader */}
      <SiteHeader variant="transparent" />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background video/image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-600/70 via-blue-500/60 to-blue-600/70 z-10"></div>
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Mermaid swimming underwater"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Bubbles */}
          <motion.div
            className="absolute bottom-20 left-1/4 w-4 h-4 bg-white/30 rounded-full backdrop-blur z-20"
            animate={{ y: [0, -100], opacity: [0.8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut", delay: 0 }}
          />
          <motion.div
            className="absolute bottom-32 right-1/3 w-6 h-6 bg-white/20 rounded-full backdrop-blur z-20"
            animate={{ y: [0, -120], opacity: [0.6, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute bottom-16 right-1/4 w-3 h-3 bg-white/40 rounded-full backdrop-blur z-20"
            animate={{ y: [0, -80], opacity: [0.9, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut", delay: 4 }}
          />

          {/* Content */}
          <div className="container mx-auto px-4 relative z-20 mt-16">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Badge className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm mb-6 px-4 py-1.5">
                  Entdecke die Magie des Meeres
                </Badge>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-white tracking-tight">
                  Verwandle dich in eine echte <span className="text-cyan-300">Meerjungfrau</span>
                </h1>

                <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
                  Schlüpf in deine Flosse, tauch ab und erlebe Schwerelosigkeit wie eine echte Meerjungfrau.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium"
                  >
                    Mermaid-Erlebnis sichern
                  </Button>

                  <Dialog onOpenChange={handleVideoModal}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="lg"
                        className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <Play className="mr-2 h-5 w-5" /> Video ansehen
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                      <video
                        ref={videoRef}
                        controls
                        autoPlay
                        loop
                        muted
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

              {/* Stats with Counter Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto"
              >
                <motion.div
                  className="text-center"
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-3xl font-bold text-cyan-300">500+</p>
                  <p className="text-sm text-white/80">Zufriedene Mermaids</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <p className="text-3xl font-bold text-cyan-300">4</p>
                  <p className="text-sm text-white/80">Kurslevels</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-3xl font-bold text-cyan-300">12</p>
                  <p className="text-sm text-white/80">Erfahrene Trainer</p>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-3xl font-bold text-cyan-300">100%</p>
                  <p className="text-sm text-white/80">Sicherheit</p>
                </motion.div>
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
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  className="w-1.5 h-3 bg-white rounded-full mt-1"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Courses Section - Moved up */}
        <section id="courses" className="py-24 bg-gradient-to-b from-white to-cyan-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Unsere Kurse</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Dein Weg zur Meerjungfrau
              </h2>
              <p className="text-lg text-gray-600">
                Entdecke unsere verschiedenen Kurse und finde das passende Programm für dich.
              </p>
            </div>

            <Tabs defaultValue="beginner" className="max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-12 bg-white/20 backdrop-blur-sm p-1 rounded-full">
                <TabsTrigger
                  value="beginner"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-cyan-800 data-[state=inactive]:text-white/80 font-medium"
                >
                  Starter
                </TabsTrigger>
                <TabsTrigger
                  value="basic"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-cyan-800 data-[state=inactive]:text-white/80 font-medium"
                >
                  Grundkurs
                </TabsTrigger>
                <TabsTrigger
                  value="advanced"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-cyan-800 data-[state=inactive]:text-white/80 font-medium"
                >
                  Fortgeschritten
                </TabsTrigger>
                <TabsTrigger
                  value="special"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-cyan-800 data-[state=inactive]:text-white/80 font-medium"
                >
                  Spezialisierung
                </TabsTrigger>
              </TabsList>

              <TabsContent value="beginner" className="mt-0">
                <div className="bg-white rounded-3xl shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Mermaid Starter Session"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 via-transparent to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-white/90 text-cyan-800 backdrop-blur-sm">Mermaid Starter-Session</Badge>
                      </div>
                      <div className="absolute top-6 right-6">
                        <Badge className="bg-rose-500 text-white">Beliebteste</Badge>
                      </div>
                    </div>

                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl font-bold text-cyan-800 mb-4">Mermaid Starter-Session</h3>
                      <p className="text-gray-600 mb-6">
                        Dein erster Sprung ins Mermaid-Abenteuer: Lerne, wie du dich mit der Monoflosse und dem
                        glitzernden Fischschwanz bewegst.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <Heart className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Erste Schwimmbewegungen</h4>
                            <p className="text-sm text-gray-600">Gleite wie eine echte Meerjungfrau durchs Wasser.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <Shield className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Sicherheit im Wasser</h4>
                            <p className="text-sm text-gray-600">
                              Erfahrene Trainer führen dich behutsam an die Bewegungsabläufe heran.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Magisches Erlebnis</h4>
                            <p className="text-sm text-gray-600">
                              Ideal für alle, die Mermaiding ausprobieren möchten.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Dauer: 2 Stunden</p>
                          <p className="text-2xl font-bold text-cyan-800">€49</p>
                        </div>
                        <Button className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white rounded-full transition-all duration-300 hover:-translate-y-0.5">
                          Jetzt buchen <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="basic" className="mt-0">
                <div className="bg-white rounded-3xl shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
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
                        <Badge className="bg-white/90 text-cyan-800 backdrop-blur-sm">Mermaid</Badge>
                      </div>
                    </div>

                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl font-bold text-cyan-800 mb-4">Mermaid</h3>
                      <p className="text-gray-600 mb-6">
                        Grundlegende Fertigkeiten: Vertiefe das Schwimmen mit der Mermaid-Ausrüstung und steigere dein
                        Sicherheitsgefühl im begrenzten Freiwasser.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <Waves className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Vertiefte Techniken</h4>
                            <p className="text-sm text-gray-600">
                              Erweitere deine Fähigkeiten mit fortgeschrittenen Bewegungen.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <Users className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Gemeinsame Erfolgserlebnisse</h4>
                            <p className="text-sm text-gray-600">
                              Lerne zusammen mit anderen Mermaid-Fans und tausch dich aus.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <Award className="h-4 w-4" />
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
                          <p className="text-2xl font-bold text-cyan-800">€149</p>
                        </div>
                        <Button className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white rounded-full transition-all duration-300 hover:-translate-y-0.5">
                          Jetzt buchen <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="mt-0">
                <div className="bg-white rounded-3xl shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
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
                        <Badge className="bg-white/90 text-cyan-800 backdrop-blur-sm">Ocean Mermaid</Badge>
                      </div>
                    </div>

                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl font-bold text-cyan-800 mb-4">Ocean Mermaid</h3>
                      <p className="text-gray-600 mb-6">
                        Beherrsche das Mermaiding jetzt auch im offenen Wasser. Perfekt für alle, die das Meer lieben!
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <Compass className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Freiwassererfahrung</h4>
                            <p className="text-sm text-gray-600">Erlebe das Mermaiding in natürlicher Umgebung.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <Waves className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Fortgeschrittene Techniken</h4>
                            <p className="text-sm text-gray-600">Lerne komplexere Bewegungen und Unterwassermanöver.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <Droplet className="h-4 w-4" />
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
                          <p className="text-2xl font-bold text-cyan-800">€249</p>
                        </div>
                        <Button className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white rounded-full transition-all duration-300 hover:-translate-y-0.5">
                          Jetzt buchen <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="special" className="mt-0">
                <div className="bg-white rounded-3xl shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
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
                        <Badge className="bg-white/90 text-cyan-800 backdrop-blur-sm">Model Mermaid</Badge>
                      </div>
                    </div>

                    <div className="p-8 md:p-12">
                      <h3 className="text-2xl font-bold text-cyan-800 mb-4">Model Mermaid</h3>
                      <p className="text-gray-600 mb-6">
                        Unterwasser-Posing und Videografie für einzigartige Fotoaufnahmen. Ideal für Events oder
                        Hobby-Fotoshootings.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <Star className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Professionelles Posing</h4>
                            <p className="text-sm text-gray-600">
                              Lerne die besten Posen für atemberaubende Unterwasserfotos.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <Award className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Fotografie-Grundlagen</h4>
                            <p className="text-sm text-gray-600">
                              Verstehe die Besonderheiten der Unterwasserfotografie.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="h-4 w-4" />
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
                          <p className="text-2xl font-bold text-cyan-800">€199</p>
                        </div>
                        <Button className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white rounded-full transition-all duration-300 hover:-translate-y-0.5">
                          Jetzt buchen <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Instructor section */}
            <div className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl overflow-hidden shadow-xl shadow-cyan-900/10">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 text-white">
                  <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">Für Profis</Badge>
                  <h3 className="text-2xl font-bold mb-4">Mermaid Instructor</h3>
                  <p className="mb-6">
                    Deine Trainerin Lisa ist 3-fache Freediving-Meisterin und führt dich sicher durch dein
                    Mermaid-Abenteuer. Mit über 1000 Stunden Unterwasser-Erfahrung weißt du dich in den besten Händen.
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

                  <Button className="bg-white text-cyan-700 hover:bg-cyan-50 rounded-full transition-all duration-300 hover:-translate-y-0.5">
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
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-6">
                    <Crown className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Unser Mermaid-Konzept</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
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
                <div className="absolute top-10 -right-10 bg-white rounded-full shadow-lg p-4">
                  <Sparkles className="h-8 w-8 text-cyan-500" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-full shadow-lg p-4">
                  <Droplet className="h-8 w-8 text-blue-500" />
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-3xl shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 border-l-4 border-cyan-500">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-800 mb-2">Ganzheitliches Training</h3>
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

                <div className="bg-white rounded-3xl shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 border-l-4 border-cyan-500">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-800 mb-2">Kreativität & Fantasie</h3>
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

                <div className="bg-white rounded-3xl shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 border-l-4 border-cyan-500">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-800 mb-2">Sichere Ausbildung</h3>
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

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-sky-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Erfahrungen</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">Warum uns vertrauen?</h2>
              <p className="text-lg text-gray-600">
                Höre, was unsere begeisterten Mermaids über ihre Erfahrungen berichten.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-cyan-100 rounded-3xl shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute top-4 right-4 text-cyan-500">
                    <div className="flex">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </div>

                  <div className="mb-6 text-cyan-600">
                    <span className="text-4xl font-serif">"</span>
                  </div>

                  <p className="text-gray-700 mb-6 italic">
                    Ich hab mich sofort wie Arielle gefühlt! Die Trainerin war super geduldig und nach nur einer Stunde
                    bin ich wie eine echte Meerjungfrau geschwommen.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold">AB</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Anna B.</p>
                      <p className="text-sm text-gray-500">Mermaid Starter-Session</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-cyan-100 rounded-3xl shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute top-4 right-4 text-cyan-500">
                    <div className="flex">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </div>

                  <div className="mb-6 text-cyan-600">
                    <span className="text-4xl font-serif">"</span>
                  </div>

                  <p className="text-gray-700 mb-6 italic">
                    Meine Tochter und ich waren beide begeistert! Ein magisches Erlebnis für die ganze Familie. Wir
                    kommen definitiv wieder.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold">JW</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Julia W.</p>
                      <p className="text-sm text-gray-500">Mermaid Kurs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-cyan-100 rounded-3xl shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute top-4 right-4 text-cyan-500">
                    <div className="flex">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </div>

                  <div className="mb-6 text-cyan-600">
                    <span className="text-4xl font-serif">"</span>
                  </div>

                  <p className="text-gray-700 mb-6 italic">
                    Die Unterwasserfotos sind der Wahnsinn geworden! Ich sehe aus wie eine echte Meerjungfrau. Das
                    Model-Training war perfekt.
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold">MK</span>
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
              <div className="bg-white rounded-3xl shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-cyan-100">
                <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-cyan-800 mb-2">Professionelle Kurse</h3>
                <p className="text-gray-600">
                  Von „Mermaid Starter-Session" für Einsteiger bis hin zu fortgeschrittenen Programmen wie „Ocean
                  Mermaid" oder „Model Mermaid".
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-cyan-100">
                <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-cyan-800 mb-2">Sicherheit an erster Stelle</h3>
                <p className="text-gray-600">
                  Ausgebildete Instructoren, hochwertiges Equipment und klare Sicherheitsrichtlinien.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-cyan-100">
                <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-cyan-800 mb-2">Familiäre Atmosphäre</h3>
                <p className="text-gray-600">Auch Kinder sind willkommen – wir haben Kurse für Klein und Groß.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">Häufige Fragen</h2>
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
                      "Auf jeden Fall! Unsere <strong>Mermaid Starter-Session</strong> ist speziell für Einsteiger entwickelt. Grundlegende Schwimmfähigkeiten reichen vollkommen aus.",
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
                    className="bg-cyan-50 rounded-3xl overflow-hidden shadow-xl shadow-cyan-900/10 hover:shadow-2xl transition-all duration-300"
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-6">
                        <h3 className="text-lg font-medium text-cyan-800">{faq.question}</h3>
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
              <div className="relative bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mt-12 -mr-12"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -mb-12 -ml-12"></div>

                <div className="p-12 text-white text-center relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Jetzt Flosse anziehen und Meerjungfrau werden – Kurse ab 49 €.
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
                    className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <span>Mermaid-Erlebnis sichern</span>
                    <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* Floating CTA Button - Mobile only */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <Button className="bg-gradient-to-r from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          Jetzt buchen
        </Button>
      </div>
    </div>
  )
}
