"use client"

import NewsletterTemplateGradient from "@/components/newsletter-template-gradient"
import NewsletterGradientExport from "@/components/newsletter-gradient-export"

export default function NewsletterTemplateGradientPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <NewsletterTemplateGradient />
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Newsletter Template mit Gradienten</h2>
          <p className="text-gray-600 mb-6">
            Diese moderne Vorlage mit Gradienten und Icons kann exportiert und in andere Newsletter-Software importiert
            werden. Verwende den Browser-Druck-Dialog (Strg+P / Cmd+P), um die Seite als PDF zu speichern oder den
            HTML-Code zu kopieren.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => window.print()}
              className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-full hover:from-cyan-700 hover:to-cyan-800 transition-colors shadow-md"
            >
              Als PDF speichern
            </button>
            <NewsletterGradientExport />
          </div>
        </div>
      </div>
    </div>
  )
}
