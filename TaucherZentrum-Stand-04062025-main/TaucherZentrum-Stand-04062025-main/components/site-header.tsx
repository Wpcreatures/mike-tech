"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactFormDialog } from "@/components/contact-form-dialog"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface SiteHeaderProps {
  variant?: "default" | "transparent"
}

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isTransparent = variant === "transparent"

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-300",
        isTransparent
          ? isScrolled
            ? "bg-white border-gray-200"
            : "bg-white border-transparent"
          : "bg-white border-gray-200",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center -ml-2.5">
          <Image
            src="/images/logo-taucherzentrum.png"
            alt="Taucher-Zentrum Logo"
            width={200}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-blue-700 font-semibold"
                  : isTransparent && !isScrolled
                    ? "text-gray-700 hover:text-blue-700" // Änderung von "text-white" zu "text-gray-700"
                    : "text-gray-700 hover:text-blue-700",
              )}
            >
              {item.label}
            </Link>
          ))}
          <ContactFormDialog>
            <Button
              className={cn(
                "transition-all duration-300",
                isTransparent && !isScrolled
                  ? "bg-white hover:bg-cyan-50 text-blue-600 hover:text-blue-700"
                  : "bg-blue-600 hover:bg-blue-700 text-white",
              )}
            >
              Kontakt
            </Button>
          </ContactFormDialog>
        </nav>

        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Menü öffnen</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isTransparent && !isScrolled ? "white" : "currentColor"}
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
  )
}
