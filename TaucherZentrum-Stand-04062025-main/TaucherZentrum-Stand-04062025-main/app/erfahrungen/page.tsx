"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Award,
  ChevronRight,
  Heart,
  Lightbulb,
  Quote,
  Shield,
  Star,
  ThumbsUp,
  Users,
  Zap,
  Target,
  Anchor,
  LifeBuoy,
  Droplet,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ErfahrungenPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const testimonials = [
    {
      name: "Sarah",
      title: "Sarah und ihre Angst vor dem offenen Wasser",
      avatar: "/placeholder.svg?height=100&width=100",
      problem:
        "Sarah hatte schon immer den Wunsch zu tauchen, allerdings wurde sie von einer großen Hürde zurückgehalten: der Angst vor dem offenen Wasser. Sobald sie tiefer als ein paar Meter abtauchte, fühlte sie sich unwohl und war kurz davor, das Thema Tauchen ganz aufzugeben.",
      solution:
        "In unserem Anfänger-Kurs lernte Sarah schrittweise, ihre Ängste zu verstehen und damit umzugehen. Gemeinsam mit unseren erfahrenen Tauchlehrern absolvierte sie mehrere Übungseinheiten im Pool, bis sie die nötige Sicherheit gewann. Anschließend begleiteten wir sie behutsam bei ersten Freiwassertauchgängen – immer in kleinen Gruppen und mit intensiver Betreuung.",
      result:
        "Heute genießt Sarah jeden einzelnen Tauchgang – sogar in 15 oder 20 Metern Tiefe! Ihre anfängliche Angst wich einer tiefen Begeisterung für die Unterwasserwelt. Sie hat bereits mehrere Aufbaukurse bei uns absolviert und schwärmt davon, dass sie hier ihre Grenzen erweitert und ein Hobby gefunden hat, das sie nie wieder missen möchte.",
      quote:
        "Ich hätte nie gedacht, dass ich einmal so entspannt in 20 Metern Tiefe tauchen könnte. Das Taucher Zentrum hat mir die Angst genommen und die Freude am Tauchen geschenkt!",
      icon: <LifeBuoy className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-500",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      name: "Markus",
      title: "Markus und seine Schwierigkeiten mit der Technik",
      avatar: "/placeholder.svg?height=100&width=100",
      problem:
        "Markus war fasziniert vom Tauchen, doch technische Abläufe machten ihm anfangs zu schaffen. Den Atemregler richtig zu bedienen, die Tarierung zu kontrollieren und gleichzeitig die Unterwasserumgebung zu beobachten – all das überforderte ihn beim ersten Versuch. Er war kurz davor zu sagen: „Tauchen ist einfach nichts für mich.“",
      solution:
        "Durch unser modulares Kurskonzept brachten wir ihm Schritt für Schritt alle technischen Grundfertigkeiten bei. Markus konnte die Inhalte in seinem Tempo verinnerlichen – und zwar mit viel praktischer Übung im Pool, bevor es ins Freiwasser ging. Ein starker Fokus auf Gerätetraining und gemeinsames Troubleshooting halfen ihm, die Angst vor technischen Pannen abzubauen.",
      result:
        'Mittlerweile übernimmt Markus im Freundeskreis oft die Rolle des „Tauch-Troubleshooters". Er genießt seine neu gewonnene Souveränität und erzählt begeistert, wie unsere praxisorientierte Vermittlung ihm das nötige Know-how gegeben hat. Sein Fazit: „Endlich traue ich mir zu, jeden Tauchgang sicher und entspannt zu absolvieren.“',
      quote:
        "Von technisch überfordert zu selbstbewusst und souverän – das Taucher Zentrum hat mir gezeigt, dass ich jede Herausforderung unter Wasser meistern kann!",
      icon: <Target className="h-6 w-6" />,
      color: "from-blue-700 to-cyan-600",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      name: "Julia",
      title: "Julia und ihre Suche nach Gemeinschaft",
      avatar: "/placeholder.svg?height=100&width=100",
      problem:
        'Julia hatte bereits einen Tauchschein gemacht, fühlte sich jedoch nach dem Kurs etwas „alleingelassen". Sie wünschte sich eine aktive Tauch-Community, um regelmäßig zu tauchen, Erfahrungen auszutauschen und gemeinsam neue Plätze zu entdecken.',
      solution:
        "Bei uns fand Julia nicht nur vielfältige Fortgeschrittenen-Kurse, sondern vor allem eine engagierte Gemeinschaft. Ob gemeinsame Wochenendausfahrten, Gruppen-Trainingsabende oder spontane Treffen zum Fachsimpeln – wir boten ihr genau das Umfeld, das sie suchte. So knüpfte sie rasch Kontakte und lernte Taucherinnen und Taucher mit ähnlichen Interessen kennen.",
      result:
        "Heute ist Julia ein zentraler Teil unserer Community und organisiert sogar selbst kleine Tauch-Events. Sie sagt stolz, dass sie endlich den richtigen Ort gefunden hat, um ihre Leidenschaft weiterzuentwickeln. Der gegenseitige Austausch motiviert sie, ständig Neues zu lernen, und sie genießt es, ihre eigenen Erfahrungen an Neulinge weiterzugeben.",
      quote:
        "Die Gemeinschaft im Taucher Zentrum ist unbezahlbar. Hier habe ich nicht nur Tauchpartner, sondern echte Freunde gefunden!",
      icon: <Users className="h-6 w-6" />,
      color: "from-cyan-600 to-blue-500",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [1, 0.8, 0.6, 0])

  // Handle scroll events for sticky header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Taucher unter Wasser"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>

          {/* Animated bubbles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
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
              <Badge className="bg-blue-500 hover:bg-blue-600 text-white">Erfahrungsberichte</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Was unsere <span className="text-cyan-300">Taucherinnen und Taucher</span> sagen
              </h1>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Unsere Tauchschule lebt von den Menschen, die sich immer wieder aufs Neue ins Abenteuer Unterwasserwelt
                stürzen. Hier teilen sie ihre Geschichten und Erfahrungen.
              </p>
            </div>

            {/* Floating testimonial cards */}
            <div className="mt-12 relative max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                    <div className="relative bg-white rounded-xl p-6 shadow-xl">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-500">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-blue-800">{testimonial.name}</h3>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200 opacity-50" />
                        <p className="text-gray-700 italic text-sm line-clamp-4">"{testimonial.quote}"</p>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() => setActiveTestimonial(index)}
                        >
                          Mehr lesen <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Unsere Erfolgsgeschichten</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Von Herausforderungen zu Erfolgen
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Wir setzen auf das Problem-Lösung-Ergebnis-Konzept – damit ihr genau wisst, wie sich eine scheinbar
                schwierige Ausgangslage durch unsere Kurse in ein positives Resultat verwandeln kann.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {testimonials.map((testimonial, index) => (
                  <Button
                    key={index}
                    variant={activeTestimonial === index ? "default" : "outline"}
                    className={cn(
                      "rounded-full",
                      activeTestimonial === index ? "bg-blue-600 text-white" : "border-blue-200",
                    )}
                    onClick={() => setActiveTestimonial(index)}
                  >
                    <span className="mr-2">{testimonial.icon}</span>
                    {testimonial.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Detail Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50" ref={containerRef}>
          <div className="container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div className="relative">
                    <div
                      className={`absolute -inset-4 bg-gradient-to-r ${testimonials[activeTestimonial].color} rounded-full blur-xl opacity-20 animate-pulse`}
                    ></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[activeTestimonial].name}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-lg font-medium">{testimonials[activeTestimonial].title}</p>
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-full shadow-lg p-4">
                      {testimonials[activeTestimonial].icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-blue-800 mb-6">{testimonials[activeTestimonial].title}</h3>

                    <div className="mb-8">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
                          <Zap className="h-5 w-5" />
                        </div>
                        <h4 className="font-bold text-red-700">Problem</h4>
                      </div>
                      <p className="text-gray-700 pl-13 ml-10">{testimonials[activeTestimonial].problem}</p>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <h4 className="font-bold text-blue-700">Lösung</h4>
                      </div>
                      <p className="text-gray-700 pl-13 ml-10">{testimonials[activeTestimonial].solution}</p>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                          <ThumbsUp className="h-5 w-5" />
                        </div>
                        <h4 className="font-bold text-green-700">Ergebnis</h4>
                      </div>
                      <p className="text-gray-700 pl-13 ml-10">{testimonials[activeTestimonial].result}</p>
                    </div>

                    <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4 mt-8">
                      "{testimonials[activeTestimonial].quote}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? "bg-blue-600 w-8" : "bg-blue-200 hover:bg-blue-300"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why This Feedback Matters Section */}
        <section className="py-16 bg-blue-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Unsere Mission</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                  Warum dieses Feedback uns so wichtig ist
                </h2>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mt-12 -mr-12 z-0"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full -mb-12 -ml-12 z-0"></div>

                <div className="relative z-10">
                  <p className="text-gray-700 mb-6">
                    Wir wissen, dass der Schritt ins Wasser manchmal Mut erfordert – sei es, weil man Ängste überwinden,
                    technisches Know-how aufbauen oder einfach gleichgesinnte Tauchfans treffen möchte. Unsere Mission
                    ist es, jede einzelne Herausforderung in ein Erfolgserlebnis umzuwandeln. Genau deshalb sind uns die
                    Erfahrungen unserer Teilnehmerinnen und Teilnehmer so kostbar: Sie zeigen, wie intensive Betreuung,
                    praktische Übungen und eine aktive Gemeinschaft einen entscheidenden Unterschied machen können.
                  </p>

                  <p className="text-gray-700 mb-8">
                    Ob du dich in Sarahs anfänglicher Unsicherheit, Markus' technischem Respekt oder Julias Wunsch nach
                    mehr Gesellschaft wiederfindest: Unsere Kurse sind darauf ausgerichtet, jedem individuellen
                    Bedürfnis gerecht zu werden. So kannst du dich auf sichere, qualitativ hochwertige und vor allem
                    familiäre Tauch-Erfahrungen freuen.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold text-blue-800 mb-2">Sichere Ausbildung</h3>
                      <p className="text-gray-600 text-sm">
                        Wir legen höchsten Wert auf Sicherheit und gründliche Vorbereitung.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                        <Users className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold text-blue-800 mb-2">Aktive Gemeinschaft</h3>
                      <p className="text-gray-600 text-sm">
                        Bei uns findest du Gleichgesinnte und bleibst auch nach dem Kurs verbunden.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                        <Heart className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold text-blue-800 mb-2">Individuelle Betreuung</h3>
                      <p className="text-gray-600 text-sm">
                        Wir gehen auf deine persönlichen Bedürfnisse und Herausforderungen ein.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Weitere Stimmen</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Was andere über uns sagen
              </h2>
              <p className="text-lg text-gray-600">
                Hier findest du weitere Erfahrungsberichte unserer zufriedenen Taucherinnen und Taucher.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full bg-gradient-to-br from-white to-blue-50 border-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                            <span className="font-bold">{String.fromCharCode(65 + i)}</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-blue-800">Taucher {i + 1}</h3>
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, j) => (
                                <Star key={j} className="h-3 w-3 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <Quote className="h-6 w-6 text-blue-200" />
                      </div>
                      <p className="text-gray-700 text-sm italic">
                        "Die Ausbildung im Taucher Zentrum war hervorragend. Die Trainer sind geduldig, kompetent und
                        gehen individuell auf jeden ein. Ich fühle mich jetzt sicher unter Wasser und habe eine neue
                        Leidenschaft gefunden!"
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Turn Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Deine Geschichte</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                  Und jetzt bist du dran
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Hast du dich in einer der Geschichten wiedererkannt? Möchtest du einfach nur faszinierende
                  Unterwasserwelten erleben oder deinen Traum vom entspannten Abtauchen realisieren?
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12 text-white">
                    <h3 className="text-2xl font-bold mb-4">Starte dein Tauch-Abenteuer</h3>
                    <p className="mb-6">
                      Wir freuen uns darauf, dich bei uns zu begrüßen und dir zu zeigen, dass in unserer Tauchschule
                      Probleme schnell zu Lösungen werden – und am Ende fantastische Erlebnisse auf dich warten.
                    </p>
                    <p className="mb-8">
                      Melde dich gern jederzeit bei uns, lass uns gemeinsam deine nächsten Schritte planen und dann
                      heißt es: Eintauchen und staunen!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <ContactFormDialog>
                        <Button className="bg-white text-blue-700 hover:bg-blue-50">Kontakt aufnehmen</Button>
                      </ContactFormDialog>
                      <Button variant="outline" className="text-white border-white hover:bg-white/10">
                        Kurse entdecken
                      </Button>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Taucher unter Wasser"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-blue-600/90 md:bg-gradient-to-r"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-6 hidden md:block">
                      <Anchor className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats Section */}
        <section className="py-16 bg-blue-50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-4xl font-bold text-blue-800 mb-2">500+</h3>
                  <p className="text-gray-600">Zufriedene Taucher</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-4xl font-bold text-blue-800 mb-2">15+</h3>
                  <p className="text-gray-600">Jahre Erfahrung</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center justify-center mx-auto mb-4">
                    <Droplet className="h-8 w-8" />
                  </div>
                  <h3 className="text-4xl font-bold text-blue-800 mb-2">10k+</h3>
                  <p className="text-gray-600">Tauchgänge</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-4xl font-bold text-blue-800 mb-2">100%</h3>
                  <p className="text-gray-600">Begeisterung</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
                Bereit für dein eigenes Tauchabenteuer?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Kontaktiere uns noch heute und starte deine persönliche Erfolgsgeschichte!
              </p>
              <ContactFormDialog>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Jetzt Kontakt aufnehmen
                </Button>
              </ContactFormDialog>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
