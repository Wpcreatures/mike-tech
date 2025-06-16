import Link from "next/link"
import { Compass, Facebook, Instagram, MessageCircle, Phone, Twitter } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-[#0078FF] text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo-taucherzentrum.png"
                alt="Taucher Zentrum Logo"
                width={200}
                height={50}
                className="h-12 w-auto -ml-2.5"
              />
            </div>
            <p className="text-blue-100 mb-4">
              Deine professionelle Tauchschule mit persönlicher Betreuung und einer aktiven Tauchergemeinschaft.
            </p>
            <div className="flex gap-4">
              <Link href={COMPANY_INFO.social.facebook} className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href={COMPANY_INFO.social.instagram} className="text-blue-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href={COMPANY_INFO.social.twitter} className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Hier findet ihr uns</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Compass className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.city}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ueber-uns" className="text-blue-100 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/erfahrungen" className="text-blue-100 hover:text-white transition-colors">
                  Erfahrungen
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-blue-100 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-blue-100 hover:text-white transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-white text-sm">
          &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}
