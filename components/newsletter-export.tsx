"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function NewsletterExport() {
  const [copied, setCopied] = useState(false)
  const newsletterRef = useRef<HTMLDivElement>(null)

  const copyHtml = () => {
    if (newsletterRef.current) {
      const htmlContent = newsletterRef.current.outerHTML
      navigator.clipboard
        .writeText(htmlContent)
        .then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        })
        .catch((err) => {
          console.error("Fehler beim Kopieren: ", err)
        })
    }
  }

  return (
    <div className="mt-6">
      <Button onClick={copyHtml} className="bg-cyan-600 hover:bg-cyan-700 text-white">
        {copied ? "HTML kopiert!" : "HTML-Code kopieren"}
      </Button>
      <div className="sr-only" ref={newsletterRef}>
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Taucher Zentrum Newsletter</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: Arial, sans-serif;">
            <div style="max-width: 600px; margin: 0 auto; background-color: white;">
              <!-- Header -->
              <div style="background-color: #0891b2; padding: 32px 32px 20px 32px; text-align: center;">
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                  <img src="https://via.placeholder.com/60x60/0891b2/ffffff?text=TZ" alt="Taucher Zentrum Logo" style="height: 60px; width: auto;">
                  <h1 style="color: white; margin: 0; font-size: 24px;">Taucher Zentrum Newsletter</h1>
                  <p style="color: white; margin: 0;">Ausgabe März 2025</p>
                </div>
                
                <!-- Personalized Greeting -->
                <div style="margin-top: 20px; padding: 15px; background-color: rgba(255,255,255,0.1); border-radius: 6px;">
                  <p style="color: white; margin: 0; font-size: 16px;">
                    Hallo {{first_name}}, bereit für dein nächstes Unterwasser-Abenteuer?
                  </p>
                </div>
              </div>

              <!-- Hero Section - Improved -->
              <div style="position: relative; height: 240px; overflow: hidden;">
                <img src="https://images.unsplash.com/photo-1682687982501-1e58ab814714" style="width: 100%; height: 100%; object-fit: cover;" alt="Taucher unter Wasser mit Korallenriff">
                <!-- Gradient Overlay -->
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(0,230,184,0.3) 0%, rgba(0,157,255,0.6) 100%); display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 32px; text-align: center;">
                  <h2 style="color: white; font-size: 30px; line-height: 1.3; font-weight: 700; margin: 0 0 15px 0; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
                    Dein nächster Atemzug unter Wasser startet hier.
                  </h2>
                  <p style="color: white; font-size: 18px; margin: 0 0 25px 0; text-shadow: 0 1px 3px rgba(0,0,0,0.3); max-width: 450px;">
                    Neue Kurse, Reise-Spots & exklusive Rabatte – nur für unsere Club-Taucher.
                  </p>
                  <a href="#" style="background: linear-gradient(90deg, #00e6b8, #009dff); color: white; padding: 14px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 18px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
                    Jetzt Kurs & Reise sichern
                  </a>
                </div>
              </div>

              <!-- Content Section -->
              <div style="padding: 32px; background-color: white;">
                
                <!-- Spotlight Offer -->
                <div style="margin-bottom: 48px;">
                  <div style="border-top: 3px solid #00e6b8; padding-top: 20px; margin-bottom: 24px;">
                    <h3 style="color: #0891b2; margin: 0; font-size: 22px; font-weight: 700;">🔥 Kurs des Monats</h3>
                  </div>
                  
                  <div style="background: #f0fbff; border-radius: 6px; padding: 24px; border: 2px solid #00e6b8;">
                    <div style="display: flex; gap: 20px; align-items: center;">
                      <img src="https://images.unsplash.com/photo-1682687982501-1e58ab814714" style="min-width: 120px; height: 120px; object-fit: cover; border-radius: 6px; border: 2px solid white;" alt="Open Water Diver Kurs">
                      <div>
                        <h4 style="color: #0f172a; margin: 0 0 10px 0; font-size: 18px; font-weight: 700;">Open Water Diver - Frühlingsspecial</h4>
                        <p style="margin: 0 0 15px 0; color: #334155; font-size: 16px; line-height: 1.5;">Ready to dive? Anfängerkurse starten ab 15. Mai – sichere dir dein Ticket.</p>
                        <div style="display: flex; align-items: center; gap: 15px;">
                          <span style="background: #ff7a21; color: white; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: bold;">Nur noch 3 Plätze</span>
                          <a href="#" style="color: #009dff; text-decoration: none; font-weight: bold; font-size: 16px;">Jetzt buchen →</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Rest of content sections with improved styling... -->
                
                <!-- Footer -->
                <div style="background-color: #0f172a; padding: 32px; color: white; text-align: center; margin-top: 32px;">
                  <div style="margin-bottom: 24px;">
                    <h3 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">Folge uns</h3>
                    <div style="display: flex; justify-content: center; gap: 20px;">
                      <a href="#" style="color: #00e6b8; text-decoration: none; font-weight: 500;">Facebook</a>
                      <a href="#" style="color: #00e6b8; text-decoration: none; font-weight: 500;">Instagram</a>
                      <a href="#" style="color: #00e6b8; text-decoration: none; font-weight: 500;">YouTube</a>
                    </div>
                  </div>
                  
                  <div style="font-size: 12px; color: #94a3b8; border-top: 1px solid #334155; padding-top: 20px;">
                    <p style="margin: 0 0 15px 0;">Du erhältst diesen Newsletter, weil du dich auf unserer Website angemeldet hast.</p>
                    <div>
                      <a href="#" style="color: #94a3b8; text-decoration: underline;">Abmelden</a> | 
                      <a href="#" style="color: #94a3b8; text-decoration: underline; margin-left: 8px;">Datenschutz</a> | 
                      <a href="#" style="color: #94a3b8; text-decoration: underline; margin-left: 8px;">Impressum</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
          }}
        />
      </div>
    </div>
  )
}
