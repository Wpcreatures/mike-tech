"use client"

import type React from "react"

import { useState } from "react"
import { Check, Loader2, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

// Formular-Schema mit Zod für Validierung
const formSchema = z.object({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen lang sein" }),
  email: z.string().email({ message: "Bitte gib eine gültige E-Mail-Adresse ein" }),
  phone: z.string().optional(),
  interest: z.enum(["tauchkurse", "ausruestung", "tauchreisen", "sonstiges"], {
    required_error: "Bitte wähle ein Interessensgebiet",
  }),
  message: z.string().min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein" }),
  newsletter: z.boolean().default(false).optional(),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Du musst den Datenschutzbestimmungen zustimmen",
  }),
})

type FormValues = z.infer<typeof formSchema>

export function ContactFormDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "tauchkurse",
      message: "",
      newsletter: false,
      privacy: false,
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    // Simuliere API-Aufruf
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Formular abgesendet:", data)
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Formular nach 3 Sekunden zurücksetzen und Dialog schließen
    setTimeout(() => {
      form.reset()
      setIsSubmitted(false)
      setOpen(false)
    }, 3000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-blue-800">Kontaktiere uns</DialogTitle>
              <DialogDescription>Fülle das Formular aus und wir melden uns schnellstmöglich bei dir.</DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Max Mustermann" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail*</FormLabel>
                        <FormControl>
                          <Input placeholder="max@beispiel.de" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="+49 123 456789" {...field} />
                      </FormControl>
                      <FormDescription>Für eine schnellere Kontaktaufnahme</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Ich interessiere mich für*</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="tauchkurse" />
                            </FormControl>
                            <FormLabel className="font-normal">Tauchkurse</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="ausruestung" />
                            </FormControl>
                            <FormLabel className="font-normal">Tauchausrüstung</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="tauchreisen" />
                            </FormControl>
                            <FormLabel className="font-normal">Tauchreisen</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="sonstiges" />
                            </FormControl>
                            <FormLabel className="font-normal">Sonstiges</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deine Nachricht*</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Wie können wir dir helfen?"
                          className="resize-none min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Ich möchte den Newsletter erhalten</FormLabel>
                        <FormDescription>Erhalte Informationen zu Angeboten und Events</FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Datenschutz*</FormLabel>
                        <FormDescription>
                          Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen gespeichert werden.
                          Weitere Informationen in der{" "}
                          <a href="/datenschutz" className="text-blue-600 hover:underline">
                            Datenschutzerklärung
                          </a>
                          .
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Absenden
                      </>
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Vielen Dank!</h3>
            <p className="text-gray-600 mb-6">
              Deine Nachricht wurde erfolgreich gesendet. Wir werden uns so schnell wie möglich bei dir melden.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
