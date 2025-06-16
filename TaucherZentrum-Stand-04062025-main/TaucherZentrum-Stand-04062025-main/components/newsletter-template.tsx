"use client"

interface NewsletterTemplateProps {
  firstName?: string
}

export default function NewsletterTemplate({ firstName = "User" }: NewsletterTemplateProps) {
  const first_name = "User" // Define first_name or get it from props/context

  return (
    <div
      className="newsletter-container"
      style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}
    >
      {/* Header */}
      <div
        className="header"
        style={{ backgroundColor: "#0891b2", padding: "32px 32px 20px 32px", textAlign: "center" }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <img
            src="/images/logo-taucherzentrum.png"
            alt="Taucher Zentrum Logo"
            style={{
              height: "60px",
              width: "auto",
            }}
          />
          <h1 style={{ color: "white", margin: 0, fontSize: "24px" }}>Taucher Zentrum Newsletter</h1>
          <p style={{ color: "white", margin: "0" }}>
            Ausgabe {new Date().toLocaleString("de-DE", { month: "long", year: "numeric" })}
          </p>
        </div>

        {/* Personalized Greeting */}
        <div
          style={{ marginTop: "20px", padding: "15px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "6px" }}
        >
          <p style={{ color: "white", margin: "0", fontSize: "16px" }}>
            Hallo {firstName}, bereit für dein nächstes Unterwasser-Abenteuer?
          </p>
        </div>
      </div>

      {/* Hero Section - Improved */}
      <div className="hero" style={{ position: "relative", height: "240px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/images/hero-taucher-korallenriff.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, rgba(0,230,184,0.3) 0%, rgba(0,157,255,0.6) 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "32px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "30px",
              lineHeight: "1.3",
              fontWeight: "700",
              margin: "0 0 15px 0",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Dein nächster Atemzug unter Wasser startet hier.
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "18px",
              margin: "0 0 25px 0",
              textShadow: "0 1px 3px rgba(0,0,0,0.3)",
              maxWidth: "450px",
            }}
          >
            Neue Kurse, Reise-Spots & exklusive Rabatte – nur für unsere Club-Taucher.
          </p>
          <a
            href="#"
            style={{
              background: "linear-gradient(90deg, #00e6b8, #009dff)",
              color: "white",
              padding: "14px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
          >
            Jetzt Kurs & Reise sichern
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="content" style={{ padding: "32px", backgroundColor: "white" }}>
        {/* Spotlight Offer - New Section */}
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              borderTop: "3px solid #00e6b8",
              paddingTop: "20px",
              marginBottom: "24px",
            }}
          >
            <h3 style={{ color: "#0891b2", margin: "0", fontSize: "22px", fontWeight: "700" }}>🔥 Kurs des Monats</h3>
          </div>

          <div
            style={{
              background: "#f0fbff",
              borderRadius: "6px",
              padding: "24px",
              border: "2px solid #00e6b8",
            }}
          >
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <div
                style={{
                  minWidth: "120px",
                  height: "120px",
                  backgroundImage: "url(/placeholder.svg?height=120&width=120&text=Open+Water+Kurs)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "6px",
                  border: "2px solid white",
                }}
              ></div>
              <div>
                <h4 style={{ color: "#0f172a", margin: "0 0 10px 0", fontSize: "18px", fontWeight: "700" }}>
                  Open Water Diver - Frühlingsspecial
                </h4>
                <p style={{ margin: "0 0 15px 0", color: "#334155", fontSize: "16px", lineHeight: "1.5" }}>
                  Ready to dive? Anfängerkurse starten ab 15. Mai – sichere dir dein Ticket.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <span
                    style={{
                      background: "#ff7a21",
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Nur noch 3 Plätze
                  </span>
                  <a
                    href="#"
                    style={{
                      color: "#009dff",
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "16px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Jetzt buchen →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Stories Section */}
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              borderTop: "3px solid #00e6b8",
              paddingTop: "20px",
              marginBottom: "24px",
            }}
          >
            <h3 style={{ color: "#0891b2", margin: "0", fontSize: "22px", fontWeight: "700" }}>
              Top Stories aus dem Taucher Zentrum
            </h3>
          </div>

          {/* Article 1 */}
          <div
            className="article"
            style={{
              marginBottom: "32px",
              background: "#f8fafc",
              borderRadius: "6px",
              padding: "20px",
            }}
          >
            <h4 style={{ color: "#0f172a", margin: "0 0 15px 0", fontSize: "18px", fontWeight: "600" }}>
              Winterkalt? Neue Ausrüstung für Kaltwasser-Tauchen
            </h4>
            <div style={{ display: "flex", gap: "20px" }}>
              <div
                style={{
                  minWidth: "150px",
                  height: "100px",
                  backgroundImage: "url(/placeholder.svg?height=100&width=150&text=Kaltwasser+Ausrüstung)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "6px",
                  border: "2px solid white",
                }}
              ></div>
              <div>
                <p style={{ margin: "0 0 15px 0", color: "#334155", fontSize: "15px", lineHeight: "1.5" }}>
                  Der neue Scubapro MK25 sorgt für entspanntes Atmen bei 4 °C. Perfekt für deine ersten Tauchgänge im
                  Frühjahr.
                </p>
                <a
                  href="#"
                  style={{
                    color: "#ff7a21",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "15px",
                    transition: "all 0.3s ease",
                  }}
                >
                  Mehr erfahren →
                </a>
              </div>
            </div>
          </div>

          {/* Article 2 */}
          <div
            className="article"
            style={{
              marginBottom: "32px",
              background: "#f8fafc",
              borderRadius: "6px",
              padding: "20px",
            }}
          >
            <h4 style={{ color: "#0f172a", margin: "0 0 15px 0", fontSize: "18px", fontWeight: "600" }}>
              Ägypten Reise - Rotes Meer Expedition
            </h4>
            <div style={{ display: "flex", gap: "20px" }}>
              <div
                style={{
                  minWidth: "150px",
                  height: "100px",
                  backgroundImage: "url(/placeholder.svg?height=100&width=150&text=Rotes+Meer)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "6px",
                  border: "2px solid white",
                }}
              ></div>
              <div>
                <p style={{ margin: "0 0 15px 0", color: "#334155", fontSize: "15px", lineHeight: "1.5" }}>
                  Tauche ein in die Welt der Korallen und Haie. Unsere Gruppenreise im Oktober – jetzt mit
                  Frühbucher-Rabatt.
                </p>
                <a
                  href="#"
                  style={{
                    color: "#ff7a21",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "15px",
                    transition: "all 0.3s ease",
                  }}
                >
                  Reise sichern →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Diver of the Month - Enhanced */}
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              borderTop: "3px solid #00e6b8",
              paddingTop: "20px",
              marginBottom: "24px",
            }}
          >
            <h3 style={{ color: "#0891b2", margin: "0", fontSize: "22px", fontWeight: "700" }}>Taucher des Monats</h3>
          </div>

          <div
            className="featured"
            style={{
              background: "#f0fbff",
              padding: "24px",
              borderRadius: "6px",
              border: "1px solid #e0f2fe",
            }}
          >
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  backgroundImage: "url(/placeholder.svg?height=90&width=90&text=Maria)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  flexShrink: 0,
                  border: "2px solid white",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              ></div>
              <div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                  <h4 style={{ margin: "0", color: "#0f172a", fontSize: "18px", fontWeight: "600" }}>Maria Schmidt</h4>
                  <span
                    style={{
                      background: "#ff7a21",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      marginLeft: "10px",
                    }}
                  >
                    Hero
                  </span>
                </div>
                <p
                  style={{
                    margin: "0 0 15px 0",
                    color: "#334155",
                    fontSize: "15px",
                    fontStyle: "italic",
                    lineHeight: "1.5",
                  }}
                >
                  "Maria überwand ihre Haifisch-Angst – heute taucht sie 30 m tief und inspiriert andere Taucher."
                </p>
                <a
                  href="#"
                  style={{
                    color: "#009dff",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: "14px",
                    transition: "all 0.3s ease",
                  }}
                >
                  Ihre Geschichte lesen →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Shop Section - Enhanced */}
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              borderTop: "3px solid #00e6b8",
              paddingTop: "20px",
              marginBottom: "24px",
            }}
          >
            <h3 style={{ color: "#0891b2", margin: "0", fontSize: "22px", fontWeight: "700" }}>
              Neue Ausrüstung im Shop
            </h3>
          </div>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {/* Product 1 */}
            <div
              style={{
                flex: "1 1 calc(50% - 12px)",
                minWidth: "250px",
                background: "#f8fafc",
                borderRadius: "6px",
                padding: "20px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  height: "150px",
                  backgroundImage: "url(/placeholder.svg?height=150&width=250&text=Scubapro+MK25)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "2px solid white",
                }}
              ></div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                <h4 style={{ margin: "0", color: "#0f172a", fontSize: "16px", fontWeight: "600" }}>
                  Scubapro MK25 Atemregler
                </h4>
                <span
                  style={{
                    background: "#ff7a21",
                    color: "white",
                    padding: "3px 8px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginLeft: "auto",
                  }}
                >
                  Neu
                </span>
              </div>
              <p style={{ margin: "0 0 15px 0", color: "#334155", fontSize: "14px", lineHeight: "1.5" }}>
                Winterkalt? Der neue Scubapro MK25 sorgt für entspanntes Atmen bei 4 °C.
              </p>
              <a
                href="#"
                style={{
                  color: "#009dff",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                }}
              >
                Im Shop ansehen →
              </a>
            </div>

            {/* Product 2 */}
            <div
              style={{
                flex: "1 1 calc(50% - 12px)",
                minWidth: "250px",
                background: "#f8fafc",
                borderRadius: "6px",
                padding: "20px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  height: "150px",
                  backgroundImage: "url(/placeholder.svg?height=150&width=250&text=Mares+Computer)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "2px solid white",
                }}
              ></div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                <h4 style={{ margin: "0", color: "#0f172a", fontSize: "16px", fontWeight: "600" }}>
                  Mares Tauchcomputer
                </h4>
                <span
                  style={{
                    background: "#ff7a21",
                    color: "white",
                    padding: "3px 8px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginLeft: "auto",
                  }}
                >
                  Neu
                </span>
              </div>
              <p style={{ margin: "0 0 15px 0", color: "#334155", fontSize: "14px", lineHeight: "1.5" }}>
                Mit Farbdisplay und Bluetooth-Verbindung zu deinem Smartphone.
              </p>
              <a
                href="#"
                style={{
                  color: "#009dff",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                }}
              >
                Jetzt bestellen →
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action - Enhanced */}
        <div
          className="cta"
          style={{
            textAlign: "center",
            marginBottom: "32px",
            background: "linear-gradient(135deg, #0891b2 0%, #0e7490 100%)",
            padding: "32px",
            borderRadius: "6px",
            color: "white",
          }}
        >
          <h3 style={{ color: "white", margin: "0 0 15px 0", fontSize: "24px", fontWeight: "700" }}>
            Bereit für dein nächstes Abenteuer?
          </h3>
          <p style={{ margin: "0 0 25px 0", color: "white", fontSize: "16px", opacity: "0.9" }}>
            Sichere dir jetzt deinen Platz in unseren beliebten Kursen oder buche deine Traumreise.
          </p>
          <a
            href="#"
            style={{
              background: "linear-gradient(90deg, #00e6b8, #009dff)",
              color: "white",
              padding: "14px 30px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
              display: "inline-block",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </div>

      {/* Footer - Enhanced */}
      <div
        className="footer"
        style={{
          backgroundColor: "#0891b2",
          padding: "32px",
          color: "#1e293b",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ margin: "0 0 20px 0", fontSize: "20px", fontWeight: "600", color: "#1e293b" }}>Folge uns</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <a
              href="#"
              style={{
                color: "#1e293b",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
            >
              Facebook
            </a>
            <a
              href="#"
              style={{
                color: "#1e293b",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
            >
              Instagram
            </a>
            <a
              href="#"
              style={{
                color: "#1e293b",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
            >
              YouTube
            </a>
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <p style={{ margin: "0 0 15px 0", fontSize: "14px", lineHeight: "1.6", color: "#1e293b" }}>
            Taucher Zentrum GmbH
            <br />
            Musterstraße 123
            <br />
            12345 Musterstadt
            <br />
            info@taucher-zentrum.de
            <br />
            Tel: 01234 / 56789
          </p>
        </div>

        <div style={{ fontSize: "12px", color: "#334155", borderTop: "1px solid #1e293b", paddingTop: "20px" }}>
          <p style={{ margin: "0 0 15px 0" }}>
            Du erhältst diesen Newsletter, weil du dich auf unserer Website angemeldet hast.
          </p>
          <div>
            <a href="#" style={{ color: "#334155", textDecoration: "underline" }}>
              Abmelden
            </a>{" "}
            |
            <a href="#" style={{ color: "#334155", textDecoration: "underline", marginLeft: "8px" }}>
              Datenschutz
            </a>{" "}
            |
            <a href="#" style={{ color: "#334155", textDecoration: "underline", marginLeft: "8px" }}>
              Impressum
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
