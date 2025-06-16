"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function NewsletterGradientExport() {
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
      <Button
        onClick={copyHtml}
        className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white rounded-full shadow-md"
      >
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
              <!-- Header with Gradient -->
              <div style="background: linear-gradient(135deg, #0891b2 0%, #0e7490 50%, #155e75 100%); padding: 25px 20px; text-align: center; border-radius: 0 0 30px 30px;">
                <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 15px;">
                  <div style="width: 60px; height: 60px; position: relative; margin-right: 15px; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>
                  </div>
                  <div>
                    <h1 style="color: white; margin: 0 0 5px 0; font-size: 28px; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">Taucher Zentrum</h1>
                    <p style="color: white; margin: 0; font-size: 16px; opacity: 0.9;">Newsletter • März 2025</p>
                  </div>
                </div>
                
                <div style="display: flex; justify-content: center; gap: 15px; margin-top: 20px; padding: 0 10px;">
                  <a href="#" style="display: flex; align-items: center; justify-content: center; color: white; text-decoration: none; font-size: 14px; gap: 5px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <span>Kurse</span>
                  </a>
                  <a href="#" style="display: flex; align-items: center; justify-content: center; color: white; text-decoration: none; font-size: 14px; gap: 5px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Tauchplätze</span>
                  </a>
                  <a href="#" style="display: flex; align-items: center; justify-content: center; color: white; text-decoration: none; font-size: 14px; gap: 5px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                    <span>Shop</span>
                  </a>
                </div>
              </div>

              <!-- Hero Section with Gradient Overlay -->
              <div style="position: relative; height: 350px; overflow: hidden; margin-top: -20px;">
                <img src="https://images.unsplash.com/photo-1682687982501-1e58ab814714" style="width: 100%; height: 100%; object-fit: cover;" alt="Taucher unter Wasser">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%); display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; text-align: center;">
                  <h2 style="color: white; font-size: 32px; margin: 0 0 15px 0; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">Entdecke die Unterwasserwelt</h2>
                  <p style="color: white; font-size: 18px; margin: 0 0 25px 0; max-width: 450px; line-height: 1.5; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">Die neuesten Kurse, Tauchspots und Angebote im Taucher Zentrum</p>
                  <a href="#" style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; padding: 12px 25px; border-radius: 50px; text-decoration: none; font-weight: bold; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4);">
                    <span>Aktuelle Angebote</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </a>
                </div>
              </div>

              <!-- Rest of the newsletter content -->
              <!-- ... -->
              
              <!-- Footer with Gradient -->
              <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 30px; color: white; text-align: center; border-radius: 30px 30px 0 0;">
                <!-- Footer content -->
                <div style="margin-bottom: 25px;">
                  <h3 style="margin: 0 0 15px 0; font-size: 20px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                    <span>Folge uns</span>
                  </h3>
                  <div style="display: flex; justify-content: center; gap: 20px;">
                    <!-- Social media icons -->
                  </div>
                </div>
                
                <div style="font-size: 12px; color: #94a3b8; padding: 15px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 10px;">
                  <p style="margin: 0 0 10px 0;">
                    Du erhältst diesen Newsletter, weil du dich auf unserer Website angemeldet hast.
                  </p>
                  <div>
                    <a href="#" style="color: #94a3b8; text-decoration: underline;">Abmelden</a> | 
                    <a href="#" style="color: #94a3b8; text-decoration: underline; margin-left: 5px;">Datenschutz</a> | 
                    <a href="#" style="color: #94a3b8; text-decoration: underline; margin-left: 5px;">Impressum</a>
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
