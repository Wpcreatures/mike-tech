"use client"

import NewsletterTemplate from "@/components/newsletter-template"

export default function NewsletterTemplatePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <NewsletterTemplate />
        </div>
      </div>
    </div>
  )
}
