"use client"
import {
  Anchor,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
  Award,
  Star,
  ShoppingBag,
  Users,
  MessageCircle,
} from "lucide-react"

export default function NewsletterTemplateGradient() {
  return (
    <div
      className="newsletter-container"
      style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}
    >
      {/* Header with Gradient */}
      <div
        className="header"
        style={{
          background: "linear-gradient(135deg, #0891b2 0%, #0e7490 50%, #155e75 100%)",
          padding: "25px 20px",
          textAlign: "center",
          borderRadius: "0 0 30px 30px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "15px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              position: "relative",
              marginRight: "15px",
              background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <Anchor size={30} color="white" style={{ display: "inline" }} />
          </div>
          <div>
            <h1
              style={{ color: "white", margin: "0 0 5px 0", fontSize: "28px", textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
            >
              Taucher Zentrum
            </h1>
            <p style={{ color: "white", margin: "0", fontSize: "16px", opacity: "0.9" }}>
              Newsletter • {new Date().toLocaleString("de-DE", { month: "long", year: "numeric" })}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "20px",
            padding: "0 10px",
          }}
        >
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textDecoration: "none",
              fontSize: "14px",
              gap: "5px",
            }}
          >
            <Calendar size={16} style={{ display: "inline" }} />
            <span>Kurse</span>
          </a>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textDecoration: "none",
              fontSize: "14px",
              gap: "5px",
            }}
          >
            <MapPin size={16} style={{ display: "inline" }} />
            <span>Tauchplätze</span>
          </a>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textDecoration: "none",
              fontSize: "14px",
              gap: "5px",
            }}
          >
            <ShoppingBag size={16} style={{ display: "inline" }} />
            <span>Shop</span>
          </a>
        </div>
      </div>

      {/* Hero Section with Gradient Overlay */}
      <div className="hero" style={{ position: "relative", height: "350px", overflow: "hidden", marginTop: "-20px" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/placeholder.svg?height=350&width=600)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "32px",
              margin: "0 0 15px 0",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Entdecke die Unterwasserwelt
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "18px",
              margin: "0 0 25px 0",
              maxWidth: "450px",
              lineHeight: "1.5",
              textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            Die neuesten Kurse, Tauchspots und Angebote im Taucher Zentrum
          </p>
          <a
            href="#"
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              color: "white",
              padding: "12px 25px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 15px rgba(249, 115, 22, 0.4)",
            }}
          >
            <span>Aktuelle Angebote</span>
            <ChevronRight size={18} style={{ display: "inline" }} />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="content" style={{ padding: "30px", backgroundColor: "white" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            borderBottom: "2px solid #e2e8f0",
            paddingBottom: "10px",
          }}
        >
          <MessageCircle size={24} color="#0891b2" style={{ display: "inline", marginRight: "10px" }} />
          <h3 style={{ color: "#0891b2", margin: "0", fontSize: "22px" }}>Neuigkeiten aus dem Taucher Zentrum</h3>
        </div>

        {/* Article 1 */}
        <div
          className="article"
          style={{
            marginBottom: "30px",
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h4 style={{ color: "#0f172a", margin: "0 0 15px 0", display: "flex", alignItems: "center" }}>
            <Calendar size={18} color="#0891b2" style={{ display: "inline", marginRight: "8px" }} />
            Neue Tauchkurse für Anfänger im Frühjahr
          </h4>
          <div style={{ display: "flex", gap: "15px" }}>
            <div
              style={{
                minWidth: "150px",
                height: "100px",
                backgroundImage: "url(/placeholder.svg?height=100&width=150)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>
            <div>
              <p style={{ margin: "0 0 10px 0", color: "#334155", fontSize: "14px", lineHeight: "1.5" }}>
                Starte dein Tauchabenteuer mit unseren neuen Anfängerkursen. Perfekt für alle, die die Unterwasserwelt
                entdecken möchten.
              </p>
              <a
                href="#"
                style={{
                  color: "#0891b2",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span>Mehr erfahren</span>
                <ChevronRight size={14} style={{ display: "inline" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Article 2 */}
        <div
          className="article"
          style={{
            marginBottom: "30px",
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h4 style={{ color: "#0f172a", margin: "0 0 15px 0", display: "flex", alignItems: "center" }}>
            <MapPin size={18} color="#0891b2" style={{ display: "inline", marginRight: "8px" }} />
            Tauchreise nach Ägypten - Jetzt buchen!
          </h4>
          <div style={{ display: "flex", gap: "15px" }}>
            <div
              style={{
                minWidth: "150px",
                height: "100px",
                backgroundImage: "url(/placeholder.svg?height=100&width=150)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>
            <div>
              <p style={{ margin: "0 0 10px 0", color: "#334155", fontSize: "14px", lineHeight: "1.5" }}>
                Erlebe das Rote Meer in seiner ganzen Pracht. Unsere nächste Gruppenreise führt uns zu den schönsten
                Riffen Ägyptens.
              </p>
              <a
                href="#"
                style={{
                  color: "#0891b2",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span>Mehr erfahren</span>
                <ChevronRight size={14} style={{ display: "inline" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Section with Gradient */}
        <div
          className="featured"
          style={{
            background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
            padding: "25px",
            borderRadius: "12px",
            marginBottom: "30px",
            boxShadow: "0 4px 15px rgba(251, 191, 36, 0.2)",
          }}
        >
          <h3
            style={{
              color: "#92400e",
              margin: "0 0 15px 0",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Award size={24} style={{ display: "inline" }} />
            <span>Taucher des Monats</span>
          </h3>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                backgroundImage: "url(/placeholder.svg?height=90&width=90)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                flexShrink: 0,
                border: "3px solid white",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            ></div>
            <div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                <h4 style={{ margin: "0", color: "#0f172a" }}>Maria Schmidt</h4>
                <div style={{ display: "flex", marginLeft: "10px" }}>
                  <Star size={14} fill="#f59e0b" color="#f59e0b" style={{ display: "inline" }} />
                  <Star size={14} fill="#f59e0b" color="#f59e0b" style={{ display: "inline" }} />
                  <Star size={14} fill="#f59e0b" color="#f59e0b" style={{ display: "inline" }} />
                  <Star size={14} fill="#f59e0b" color="#f59e0b" style={{ display: "inline" }} />
                  <Star size={14} fill="#f59e0b" color="#f59e0b" style={{ display: "inline" }} />
                </div>
              </div>
              <p
                style={{
                  margin: "0 0 10px 0",
                  color: "#334155",
                  fontSize: "14px",
                  fontStyle: "italic",
                  lineHeight: "1.5",
                }}
              >
                "Nach 20 Tauchgängen kann ich sagen: Das Taucher Zentrum hat mein Leben verändert. Die Unterwasserwelt
                ist einfach faszinierend!"
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action with Gradient */}
        <div
          className="cta"
          style={{
            textAlign: "center",
            marginBottom: "30px",
            background: "linear-gradient(135deg, #0891b2 0%, #0e7490 100%)",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(8, 145, 178, 0.2)",
          }}
        >
          <h3 style={{ color: "white", margin: "0 0 15px 0", fontSize: "24px" }}>
            Bereit für dein nächstes Abenteuer?
          </h3>
          <p style={{ margin: "0 0 25px 0", color: "white", opacity: "0.9" }}>
            Buche jetzt deinen nächsten Tauchkurs oder informiere dich über unsere Angebote.
          </p>
          <a
            href="#"
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              color: "white",
              padding: "12px 30px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          >
            <span>Jetzt Kontakt aufnehmen</span>
            <ChevronRight size={18} style={{ display: "inline" }} />
          </a>
        </div>

        {/* Equipment Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            borderBottom: "2px solid #e2e8f0",
            paddingBottom: "10px",
          }}
        >
          <ShoppingBag size={24} color="#0891b2" style={{ display: "inline", marginRight: "10px" }} />
          <h3 style={{ color: "#0891b2", margin: "0", fontSize: "22px" }}>Neue Ausrüstung im Shop</h3>
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
          {/* Product 1 */}
          <div
            style={{
              flex: "1 1 calc(50% - 10px)",
              minWidth: "250px",
              background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
              borderRadius: "12px",
              padding: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                height: "150px",
                backgroundImage: "url(/placeholder.svg?height=150&width=250)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: "15px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
              <h4 style={{ margin: "0", color: "#0f172a", fontSize: "16px" }}>Scubapro Atemregler</h4>
              <div
                style={{
                  marginLeft: "auto",
                  background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  color: "white",
                  padding: "3px 8px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Neu
              </div>
            </div>
            <p style={{ margin: "0 0 10px 0", color: "#334155", fontSize: "14px" }}>
              Neues Modell mit verbesserter Leistung für kaltes Wasser.
            </p>
            <a
              href="#"
              style={{
                color: "#f97316",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span>Im Shop ansehen</span>
              <ChevronRight size={14} style={{ display: "inline" }} />
            </a>
          </div>

          {/* Product 2 */}
          <div
            style={{
              flex: "1 1 calc(50% - 10px)",
              minWidth: "250px",
              background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
              borderRadius: "12px",
              padding: "15px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                height: "150px",
                backgroundImage: "url(/placeholder.svg?height=150&width=250)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: "15px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
              <h4 style={{ margin: "0", color: "#0f172a", fontSize: "16px" }}>Mares Tauchcomputer</h4>
              <div
                style={{
                  marginLeft: "auto",
                  background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  color: "white",
                  padding: "3px 8px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Neu
              </div>
            </div>
            <p style={{ margin: "0 0 10px 0", color: "#334155", fontSize: "14px" }}>
              Mit Farbdisplay und Bluetooth-Verbindung zu deinem Smartphone.
            </p>
            <a
              href="#"
              style={{
                color: "#f97316",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span>Im Shop ansehen</span>
              <ChevronRight size={14} style={{ display: "inline" }} />
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 calc(33.333% - 10px)",
              minWidth: "150px",
              background: "linear-gradient(135deg, #0891b2 0%, #0e7490 100%)",
              borderRadius: "12px",
              padding: "15px",
              textAlign: "center",
              color: "white",
              boxShadow: "0 4px 15px rgba(8, 145, 178, 0.2)",
            }}
          >
            <div style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "5px" }}>500+</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
              <Users size={16} style={{ display: "inline" }} />
              <span>Zufriedene Taucher</span>
            </div>
          </div>

          <div
            style={{
              flex: "1 1 calc(33.333% - 10px)",
              minWidth: "150px",
              background: "linear-gradient(135deg, #0891b2 0%, #0e7490 100%)",
              borderRadius: "12px",
              padding: "15px",
              textAlign: "center",
              color: "white",
              boxShadow: "0 4px 15px rgba(8, 145, 178, 0.2)",
            }}
          >
            <div style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "5px" }}>50+</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
              <Calendar size={16} style={{ display: "inline" }} />
              <span>Kurse pro Jahr</span>
            </div>
          </div>

          <div
            style={{
              flex: "1 1 calc(33.333% - 10px)",
              minWidth: "150px",
              background: "linear-gradient(135deg, #0891b2 0%, #0e7490 100%)",
              borderRadius: "12px",
              padding: "15px",
              textAlign: "center",
              color: "white",
              boxShadow: "0 4px 15px rgba(8, 145, 178, 0.2)",
            }}
          >
            <div style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "5px" }}>20+</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
              <MapPin size={16} style={{ display: "inline" }} />
              <span>Tauchspots</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Gradient */}
      <div
        className="footer"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          padding: "30px",
          color: "white",
          textAlign: "center",
          borderRadius: "30px 30px 0 0",
        }}
      >
        <div style={{ marginBottom: "25px" }}>
          <h3
            style={{
              margin: "0 0 15px 0",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <span>Folge uns</span>
          </h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1877f2 0%, #166fe5 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Facebook size={20} style={{ display: "inline" }} />
              </div>
              <span style={{ fontSize: "12px" }}>Facebook</span>
            </a>

            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Instagram size={20} style={{ display: "inline" }} />
              </div>
              <span style={{ fontSize: "12px" }}>Instagram</span>
            </a>

            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #ff0000 0%, #c00 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Youtube size={20} style={{ display: "inline" }} />
              </div>
              <span style={{ fontSize: "12px" }}>YouTube</span>
            </a>
          </div>
        </div>

        <div
          style={{
            marginBottom: "25px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <MapPin size={16} style={{ display: "inline", opacity: "0.7" }} />
            <p style={{ margin: "0", fontSize: "14px" }}>Musterstraße 123, 12345 Musterstadt</p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Mail size={16} style={{ display: "inline", opacity: "0.7" }} />
            <p style={{ margin: "0", fontSize: "14px" }}>info@taucher-zentrum.de</p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Phone size={16} style={{ display: "inline", opacity: "0.7" }} />
            <p style={{ margin: "0", fontSize: "14px" }}>01234 / 56789</p>
          </div>
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "#94a3b8",
            padding: "15px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: "10px",
          }}
        >
          <p style={{ margin: "0 0 10px 0" }}>
            Du erhältst diesen Newsletter, weil du dich auf unserer Website angemeldet hast.
          </p>
          <div>
            <a href="#" style={{ color: "#94a3b8", textDecoration: "underline" }}>
              Abmelden
            </a>{" "}
            |
            <a href="#" style={{ color: "#94a3b8", textDecoration: "underline", marginLeft: "5px" }}>
              Datenschutz
            </a>{" "}
            |
            <a href="#" style={{ color: "#94a3b8", textDecoration: "underline", marginLeft: "5px" }}>
              Impressum
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
