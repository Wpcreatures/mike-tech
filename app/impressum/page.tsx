import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function ImpressumPage() {
  return (
    <>
      <SiteHeader />
      <main className="container grid items-center justify-center gap-6 pt-20 md:pt-10">
        <div className="mx-auto max-w-[980px] grid gap-2">
          <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Impressum</h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">Angaben gemäß § 5 TMG</p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Taucher-Zentrum Planet Scuba OHG
            <br />
            Maik Hasselfeld & Jennifer Burgdorf
            <br />
            Papenhuderstr. 40
            <br />
            22087 Hamburg
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <strong>Kontakt</strong>
            <br />
            Telefon: 040 – 2206064
            <br />
            E-Mail: info@taucher-zentrum.de
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <strong>Registereintrag</strong>
            <br />
            Eintragung im Handelsregister.
            <br />
            Registergericht: Amtsgericht Hamburg
            <br />
            Registernummer: HRA 130679
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <strong>Umsatzsteuer-ID</strong>
            <br />
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            <br />
            DE365235212
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong>
            <br />
            Maik Hasselfeld & Jennifer Burgdorf
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <strong>EU-Streitschlichtung</strong>
            <br />
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS-Plattform) bereit:{" "}
            <Link
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              https://ec.europa.eu/consumers/odr
            </Link>
            .
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <strong>Verbraucherstreitbeilegung/Universalschlichtungsstelle</strong>
            <br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          {/* Zusätzlicher Abstand vor Footer */}
          <div className="mt-16"></div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
