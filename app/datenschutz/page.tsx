import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { COMPANY_INFO } from "@/lib/constants"

export default function DatenschutzPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <SiteHeader />

      <main className="flex-1">
        {/* Datenschutz Content */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Datenschutzerklärung</h1>
              <p className="text-lg text-gray-600">
                Informationen zur Verarbeitung Ihrer Daten und zu Ihren Rechten gemäß DSGVO
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-xl font-bold text-blue-800 mb-6">1. Verantwortlicher und Datenschutzbeauftragter</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Verantwortlicher im Sinne der DSGVO</h3>
                  <p className="text-gray-700">
                    Taucher Zentrum GmbH
                    <br />
                    Papenhuder Str. 40
                    <br />
                    22087 Hamburg
                    <br />
                    Deutschland
                    <br />
                    <br />
                    Telefon: {COMPANY_INFO.phone}
                    <br />
                    E-Mail: jennifer@taucher-zentrum.de
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Datenschutzbeauftragte</h3>
                  <p className="text-gray-700">
                    Jennifer Burgdorf
                    <br />
                    E-Mail: jennifer@taucher-zentrum.de
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-xl font-bold text-blue-800 mb-6">
                2. Allgemeine Informationen zur Datenverarbeitung
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Umfang der Verarbeitung personenbezogener Daten</h3>
                  <p className="text-gray-700">
                    Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
                    Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
                    Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des
                    Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung
                    aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche
                    Vorschriften gestattet ist.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                  </h3>
                  <p className="text-gray-700">
                    Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen
                    Person einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als
                    Rechtsgrundlage.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen
                    Vertragspartei die betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als
                    Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher
                    Maßnahmen erforderlich sind.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung
                    erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als
                    Rechtsgrundlage.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen
                    Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d
                    DSGVO als Rechtsgrundlage.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines
                    Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen
                    das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die
                    Verarbeitung.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Datenlöschung und Speicherdauer</h3>
                  <p className="text-gray-700">
                    Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck
                    der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den
                    europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen
                    Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung
                    der Daten erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene Speicherfrist
                    abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten für einen
                    Vertragsabschluss oder eine Vertragserfüllung besteht.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-xl font-bold text-blue-800 mb-6">
                3. Bereitstellung der Website und Erstellung von Logfiles
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Beschreibung und Umfang der Datenverarbeitung</h3>
                  <p className="text-gray-700">
                    Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen
                    vom Computersystem des aufrufenden Rechners.
                  </p>
                  <p className="text-gray-700 mt-2">Folgende Daten werden hierbei erhoben:</p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                    <li>Informationen über den Browsertyp und die verwendete Version</li>
                    <li>Das Betriebssystem des Nutzers</li>
                    <li>Die IP-Adresse des Nutzers</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Websites, von denen das System des Nutzers auf unsere Internetseite gelangt</li>
                    <li>Websites, die vom System des Nutzers über unsere Website aufgerufen werden</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Rechtsgrundlage für die Datenverarbeitung</h3>
                  <p className="text-gray-700">
                    Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit.
                    f DSGVO.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Zweck der Datenverarbeitung</h3>
                  <p className="text-gray-700">
                    Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung
                    der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für
                    die Dauer der Sitzung gespeichert bleiben.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen. Zudem
                    dienen uns die Daten zur Optimierung der Website und zur Sicherstellung der Sicherheit unserer
                    informationstechnischen Systeme. Eine Auswertung der Daten zu Marketingzwecken findet in diesem
                    Zusammenhang nicht statt.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dauer der Speicherung</h3>
                  <p className="text-gray-700">
                    Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr
                    erforderlich sind. Im Falle der Erfassung der Daten zur Bereitstellung der Website ist dies der
                    Fall, wenn die jeweilige Sitzung beendet ist.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens sieben Tagen der Fall. Eine
                    darüberhinausgehende Speicherung ist möglich. In diesem Fall werden die IP-Adressen der Nutzer
                    gelöscht oder verfremdet, sodass eine Zuordnung des aufrufenden Clients nicht mehr möglich ist.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-xl font-bold text-blue-800 mb-6">4. Verwendung von Cookies</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Beschreibung und Umfang der Datenverarbeitung</h3>
                  <p className="text-gray-700">
                    Unsere Website verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser
                    bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden. Ruft ein Nutzer eine
                    Website auf, so kann ein Cookie auf dem Betriebssystem des Nutzers gespeichert werden. Dieser Cookie
                    enthält eine charakteristische Zeichenfolge, die eine eindeutige Identifizierung des Browsers beim
                    erneuten Aufrufen der Website ermöglicht.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer
                    Internetseite erfordern es, dass der aufrufende Browser auch nach einem Seitenwechsel identifiziert
                    werden kann.
                  </p>
                  <p className="text-gray-700 mt-2">
                    In den Cookies werden dabei folgende Daten gespeichert und übermittelt:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                    <li>Spracheinstellungen</li>
                    <li>Log-In-Informationen</li>
                    <li>Warenkorbinhalte</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Rechtsgrundlage für die Datenverarbeitung</h3>
                  <p className="text-gray-700">
                    Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung von Cookies ist
                    Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Werden Cookies für Analyse-Zwecke oder für das Retargeting eingesetzt, erfolgt dies auf Grundlage
                    Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Zweck der Datenverarbeitung</h3>
                  <p className="text-gray-700">
                    Der Zweck der Verwendung technisch notwendiger Cookies ist, die Nutzung von Websites für die Nutzer
                    zu vereinfachen. Einige Funktionen unserer Internetseite können ohne den Einsatz von Cookies nicht
                    angeboten werden. Für diese ist es erforderlich, dass der Browser auch nach einem Seitenwechsel
                    wiedererkannt wird.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Die durch technisch notwendige Cookies erhobenen Nutzerdaten werden nicht zur Erstellung von
                    Nutzerprofilen verwendet.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Dauer der Speicherung, Widerspruchs- und Beseitigungsmöglichkeit
                  </h3>
                  <p className="text-gray-700">
                    Cookies werden auf dem Rechner des Nutzers gespeichert und von diesem an unsere Seite übermittelt.
                    Daher haben Sie als Nutzer auch die volle Kontrolle über die Verwendung von Cookies. Durch eine
                    Änderung der Einstellungen in Ihrem Internetbrowser können Sie die Übertragung von Cookies
                    deaktivieren oder einschränken. Bereits gespeicherte Cookies können jederzeit gelöscht werden. Dies
                    kann auch automatisiert erfolgen. Werden Cookies für unsere Website deaktiviert, können
                    möglicherweise nicht mehr alle Funktionen der Website vollumfänglich genutzt werden.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-xl font-bold text-blue-800 mb-6">5. Analyse-Tools und Tracking</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="google-analytics" className="border-b border-blue-100">
                  <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                    <h3 className="font-semibold text-left">Google Analytics</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-gray-700">
                    <p>
                      Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google
                      Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                    </p>
                    <p className="mt-2">
                      Google Analytics verwendet so genannte "Cookies". Das sind Textdateien, die auf Ihrem Computer
                      gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch
                      den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen
                      Server von Google in den USA übertragen und dort gespeichert.
                    </p>
                    <p className="mt-2">
                      Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses Analyse-Tools erfolgen auf
                      Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Die Websitebetreiberin hat ein berechtigtes Interesse an
                      der Analyse des Nutzerverhaltens, um sowohl ihr Webangebot als auch ihre Werbung zu optimieren.
                    </p>
                    <p className="mt-2">
                      <strong>IP Anonymisierung</strong>
                    </p>
                    <p className="mt-1">
                      Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre
                      IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
                      Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die
                      USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA
                      übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese
                      Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
                      Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung
                      verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google
                      Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google
                      zusammengeführt.
                    </p>
                    <p className="mt-2">
                      <strong>Browser Plugin</strong>
                    </p>
                    <p className="mt-1">
                      Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software
                      verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
                      sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus
                      die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten
                      (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern,
                      indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren:{" "}
                      <a
                        href="https://tools.google.com/dlpage/gaoptout?hl=de"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://tools.google.com/dlpage/gaoptout?hl=de
                      </a>
                      .
                    </p>
                    <p className="mt-2">
                      <strong>Widerspruch gegen Datenerfassung</strong>
                    </p>
                    <p className="mt-1">
                      Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden
                      Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen
                      Besuchen dieser Website verhindert:{" "}
                      <button className="text-blue-600 hover:underline">Google Analytics deaktivieren</button>.
                    </p>
                    <p className="mt-2">
                      <strong>Auftragsverarbeitung</strong>
                    </p>
                    <p className="mt-1">
                      Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen
                      Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
                    </p>
                    <p className="mt-2">
                      <strong>Demografische Merkmale bei Google Analytics</strong>
                    </p>
                    <p className="mt-1">
                      Diese Website nutzt die Funktion "demografische Merkmale" von Google Analytics. Dadurch können
                      Berichte erstellt werden, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher
                      enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten
                      von Drittanbietern. Diese Daten können keiner bestimmten Person zugeordnet werden. Sie können
                      diese Funktion jederzeit über die Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder
                      die Erfassung Ihrer Daten durch Google Analytics wie im Punkt "Widerspruch gegen Datenerfassung"
                      dargestellt generell untersagen.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="meta-pixel" className="border-b border-blue-100">
                  <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                    <h3 className="font-semibold text-left">Meta Pixel (ehemals Facebook-Pixel)</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-gray-700">
                    <p>
                      Unsere Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Meta (ehemals Facebook).
                    </p>
                    <p className="mt-2">
                      So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine
                      Meta-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch können die
                      Wirksamkeit der Meta-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet werden
                      und zukünftige Werbemaßnahmen optimiert werden.
                    </p>
                    <p className="mt-2">
                      Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine
                      Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden aber von Meta gespeichert und
                      verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Meta die Daten für
                      eigene Werbezwecke, entsprechend der{" "}
                      <a
                        href="https://www.facebook.com/about/privacy/"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Meta-Datenverwendungsrichtlinie
                      </a>{" "}
                      verwenden kann. Dadurch kann Meta das Schalten von Werbeanzeigen auf Seiten von Meta sowie
                      außerhalb von Meta ermöglichen. Diese Verwendung der Daten kann von uns als Seitenbetreiber nicht
                      beeinflusst werden.
                    </p>
                    <p className="mt-2">
                      Die Nutzung des Meta-Pixels erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung
                      kann jederzeit widerrufen werden.
                    </p>
                    <p className="mt-2">
                      In den Einstellungen Ihres Meta-Kontos können Sie der Erfassung durch das Meta-Pixel und der
                      Nutzung Ihrer Daten zur Anzeige von Meta-Werbeanzeigen widersprechen. Um einzustellen, welche
                      Arten von Werbeanzeigen Ihnen innerhalb von Meta angezeigt werden, können Sie die von Meta
                      eingerichtete Seite aufrufen und dort die Hinweise zu den Einstellungen nutzungsbasierter Werbung
                      befolgen:{" "}
                      <a
                        href="https://www.facebook.com/settings?tab=ads"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.facebook.com/settings?tab=ads
                      </a>
                      .
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="google-tag-manager" className="border-b border-blue-100">
                  <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                    <h3 className="font-semibold text-left">Google Tag Manager</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-gray-700">
                    <p>
                      Diese Website verwendet den Google Tag Manager. Durch diesen Dienst können Website-Tags über eine
                      Oberfläche verwaltet werden. Der Google Tag Manager implementiert lediglich Tags. Das bedeutet: Es
                      werden keine Cookies eingesetzt und es werden keine personenbezogenen Daten erfasst. Der Google
                      Tag Manager löst andere Tags aus, die wiederum ggf. Daten erfassen. Jedoch greift der Google Tag
                      Manager nicht auf diese Daten zu. Wurde auf Domain- oder Cookie-Ebene eine Deaktivierung
                      vorgenommen, so bleibt sie für alle Tracking-Tags bestehen, insofern diese mit dem Google Tag
                      Manager implementiert werden.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="hotjar" className="border-b border-blue-100">
                  <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                    <h3 className="font-semibold text-left">Hotjar</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-gray-700">
                    <p>
                      Diese Website nutzt Hotjar, ein Analysesoftware der Hotjar Ltd. („Hotjar")
                      (https://www.hotjar.com, 3 Lyons Range, 20 Bisazza Street, Sliema SLM 1640, Malta, Europe). Mit
                      Hotjar ist es möglich das Nutzungsverhalten (Klicks, Mausbewegungen, Scrollhöhen, etc.) auf
                      unserer Website zu messen und auszuwerten.
                    </p>
                    <p className="mt-2">
                      Die durch den Tracking Code von Hotjar erzeugten Informationen über Ihre Benutzung unserer Website
                      werden an Server von Hotjar übertragen und dort gespeichert. Folgende Informationen werden durch
                      den Tracking Code automatisch erfasst:
                    </p>
                    <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                      <li>Ihre IP-Adresse (wird während Ihrer Sitzung erfasst und anschließend anonymisiert)</li>
                      <li>Gerätebildschirmgröße</li>
                      <li>Gerätetyp und Browserinformationen</li>
                      <li>Geografischer Standort (nur das Land)</li>
                      <li>Die bevorzugte Sprache für die Anzeige unserer Website</li>
                    </ul>
                    <p className="mt-2">
                      Hotjar wird diese Informationen verwenden, um Ihre Nutzung unserer Website auszuwerten und Reports
                      über die Nutzung zu erstellen. Hotjar verwendet zur Leistungsanalyse und zum Betrieb des Dienstes
                      Drittanbieter, darunter Google Analytics und Amazon Cloudfront. Diese Drittanbieter können
                      Informationen speichern, die Ihr Browser im Rahmen des Dienstes sendet, wie z.B. Cookies oder
                      IP-Anfragen.
                    </p>
                    <p className="mt-2">
                      Die Nutzung von Hotjar erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung kann
                      jederzeit widerrufen werden.
                    </p>
                    <p className="mt-2">
                      Wenn Sie eine Datenerfassung durch Hotjar deaktivieren möchten, klicken Sie bitte auf den
                      folgenden Link und folgen Sie den dortigen Anweisungen:{" "}
                      <a
                        href="https://www.hotjar.com/opt-out"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.hotjar.com/opt-out
                      </a>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="wistia" className="border-b border-blue-100">
                  <AccordionTrigger className="py-4 hover:text-blue-700 transition-colors">
                    <h3 className="font-semibold text-left">Wistia</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 text-gray-700">
                    <p>
                      Wir nutzen Wistia, um Videoinhalte auf unserer Website einzubinden. Wistia kann Informationen über
                      Ihre Nutzung unserer Website sammeln, einschließlich Ihrer IP-Adresse und Ihres Nutzerverhaltens.
                      Weitere Informationen finden Sie in der Datenschutzerklärung von Wistia:{" "}
                      <a
                        href="https://wistia.com/privacy"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://wistia.com/privacy
                      </a>
                      .
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-xl font-bold text-blue-800 mb-6">6. Social Media Plugins</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Verwendung von Social Media Plugins</h3>
                  <p className="text-gray-700">
                    Auf unserer Website werden Social Plugins der unten aufgeführten Anbieter eingesetzt. Die Plugins
                    können Sie daran erkennen, dass sie mit dem entsprechenden Logo gekennzeichnet sind.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Über diese Plugins werden unter Umständen Informationen, zu denen auch personenbezogene Daten
                    gehören können, an den Dienstebetreiber gesendet und ggf. von diesem genutzt. Wir verhindern die
                    unbewusste und ungewollte Erfassung und Übertragung von Daten an den Diensteanbieter durch eine
                    2-Klick-Lösung. Um ein gewünschtes Social Plugin zu aktivieren, muss dieses erst durch Klick auf den
                    entsprechenden Schalter aktiviert werden. Erst durch diese Aktivierung des Plugins wird auch die
                    Erfassung von Informationen und deren Übertragung an den Diensteanbieter ausgelöst. Wir erfassen
                    selbst keine personenbezogenen Daten mittels der Social Plugins oder über deren Nutzung.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Wir haben keinen Einfluss darauf, welche Daten ein aktiviertes Plugin erfasst und wie diese durch
                    den Anbieter verwendet werden. Derzeit muss davon ausgegangen werden, dass eine direkte Verbindung
                    zu den Diensten des Anbieters ausgebaut wird sowie mindestens die IP-Adresse und gerätebezogene
                    Informationen erfasst und genutzt werden. Ebenfalls besteht die Möglichkeit, dass die
                    Diensteanbieter versuchen, Cookies auf dem verwendeten Rechner zu speichern. Welche konkreten Daten
                    hierbei erfasst und wie diese genutzt werden, entnehmen Sie bitte den Datenschutzhinweisen des
                    jeweiligen Diensteanbieters.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
                  <p className="text-gray-700">
                    Auf unserer Website sind Funktionen von Instagram eingebunden. Anbieter ist die Meta Platforms
                    Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland. Wenn Sie in Ihrem
                    Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte
                    unserer Seiten mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch unserer
                    Seiten Ihrem Benutzerkonto zuordnen. Weitere Informationen hierzu finden Sie in der
                    Datenschutzerklärung von Instagram:{" "}
                    <a
                      href="https://instagram.com/about/legal/privacy/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://instagram.com/about/legal/privacy/
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Facebook</h3>
                  <p className="text-gray-700">
                    Auf unserer Website sind Funktionen von Facebook eingebunden. Anbieter ist die Meta Platforms
                    Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland. Wenn Sie in Ihrem
                    Facebook-Account eingeloggt sind, können Sie durch Anklicken des Facebook-Buttons die Inhalte
                    unserer Seiten mit Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer Seiten
                    Ihrem Benutzerkonto zuordnen. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung
                    von Facebook:{" "}
                    <a
                      href="https://www.facebook.com/policy.php"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.facebook.com/policy.php
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-xl font-bold text-blue-800 mb-6">7. Rechte der betroffenen Person</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Auskunftsrecht</h3>
                  <p className="text-gray-700">
                    Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob Sie betreffende
                    personenbezogene Daten verarbeitet werden. Liegt eine solche Verarbeitung vor, können Sie von uns
                    Auskunft über folgende Informationen verlangen:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                    <li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;</li>
                    <li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden;</li>
                    <li>
                      die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden
                      personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;
                    </li>
                    <li>
                      die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder, falls
                      konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer;
                    </li>
                    <li>
                      das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen
                      Daten, eines Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines
                      Widerspruchsrechts gegen diese Verarbeitung;
                    </li>
                    <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
                    <li>
                      alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht
                      bei der betroffenen Person erhoben werden;
                    </li>
                    <li>
                      das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22
                      Abs. 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die
                      involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen
                      Verarbeitung für die betroffene Person.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recht auf Berichtigung</h3>
                  <p className="text-gray-700">
                    Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen,
                    sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig
                    sind. Der Verantwortliche hat die Berichtigung unverzüglich vorzunehmen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recht auf Löschung</h3>
                  <p className="text-gray-700">
                    Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten
                    unverzüglich gelöscht werden, und der Verantwortliche ist verpflichtet, diese Daten unverzüglich zu
                    löschen, sofern einer der folgenden Gründe zutrifft:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                    <li>
                      Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf
                      sonstige Weise verarbeitet wurden, nicht mehr notwendig.
                    </li>
                    <li>
                      Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit. a oder
                      Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die
                      Verarbeitung.
                    </li>
                    <li>
                      Sie legen gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine
                      vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gem. Art. 21 Abs. 2 DSGVO
                      Widerspruch gegen die Verarbeitung ein.
                    </li>
                    <li>Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                    <li>
                      Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen
                      Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der
                      Verantwortliche unterliegt.
                    </li>
                    <li>
                      Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der
                      Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recht auf Einschränkung der Verarbeitung</h3>
                  <p className="text-gray-700">
                    Unter den folgenden Voraussetzungen können Sie die Einschränkung der Verarbeitung der Sie
                    betreffenden personenbezogenen Daten verlangen:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                    <li>
                      wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen für eine Dauer bestreiten, die es
                      dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen;
                    </li>
                    <li>
                      die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten ablehnen und
                      stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangen;
                    </li>
                    <li>
                      der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger
                      benötigt, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                      benötigen, oder
                    </li>
                    <li>
                      wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt haben und noch
                      nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen
                      überwiegen.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recht auf Datenübertragbarkeit</h3>
                  <p className="text-gray-700">
                    Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem Verantwortlichen
                    bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
                    Außerdem haben Sie das Recht diese Daten einem anderen Verantwortlichen ohne Behinderung durch den
                    Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern die
                    Verarbeitung auf einer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO
                    oder auf einem Vertrag gem. Art. 6 Abs. 1 lit. b DSGVO beruht und die Verarbeitung mithilfe
                    automatisierter Verfahren erfolgt.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Widerspruchsrecht</h3>
                  <p className="text-gray-700">
                    Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen
                    die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e
                    oder f DSGVO erfolgt, Widerspruch einzulegen.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Der Verantwortliche verarbeitet die Sie betreffenden personenbezogenen Daten nicht mehr, es sei
                    denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen,
                    Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder
                    Verteidigung von Rechtsansprüchen.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung
                  </h3>
                  <p className="text-gray-700">
                    Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen.
                    Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum
                    Widerruf erfolgten Verarbeitung nicht berührt.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recht auf Beschwerde bei einer Aufsichtsbehörde</h3>
                  <p className="text-gray-700">
                    Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen
                    das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
                    Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, zu, wenn Sie der
                    Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO
                    verstößt.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-blue-800 mb-6">
                8. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-700">
                    Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2025.
                  </p>
                  <p className="text-gray-700 mt-2">
                    Aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden,
                    diese Datenschutzerklärung anzupassen. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf
                    dieser Website von Ihnen abgerufen und ausgedruckt werden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
