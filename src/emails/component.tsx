import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "react-email";

interface WaitlistConfirmationProps {
  email: string;
}

export const WaitlistConfirmation = ({ email }: WaitlistConfirmationProps) => {
  const brand = "#FF2B87";

  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
          :root { color-scheme: light dark; }
          body { margin: 0; padding: 0; }

          .wrapper   { background-color: #f0f0f0; }
          .card      { background-color: #ffffff; border: 1px solid #e4e4e7; }
          .header    { background-color: #0d0d0d; }
          .footer-bg { background-color: #fafafa; border-top: 1px solid #e4e4e7; }
          .heading   { color: #0d0d0d; }
          .body-text { color: #52525b; }
          .muted     { color: #71717a; }
          .pill-wrap { background-color: #fff0f7; border: 1px solid #ffd6ec; }
          .pill-dot  { background-color: ${brand}; }
          .pill-text { color: ${brand}; }
          .feature-card { background-color: #ffffff; border: 1px dashed #e4e4e7; }
          .feature-title { color: #0d0d0d; }
          .cta-block { background-color: #0d0d0d; }
          .cta-title { color: #ffffff; }
          .also-wrap { background-color: #fafafa; border: 1px solid #e4e4e7; }
          .tag       { background-color: #ffffff; border: 1px solid #e4e4e7; color: #52525b; }
          .divider   { border-color: #e4e4e7; }
          .footer-link { color: #a1a1aA !important; }

          @media (prefers-color-scheme: dark) {
            .wrapper   { background-color: #000000 !important; }
            .card      { background-color: #0c0c0c !important; border-color: rgba(255,255,255,0.08) !important; }
            .header    { background-color: #111111 !important; }
            .footer-bg { background-color: #111111 !important; border-color: rgba(255,255,255,0.08) !important; }
            .heading   { color: #ffffff !important; }
            .body-text { color: #71717a !important; }
            .muted     { color: #52525b !important; }
            .pill-wrap { background-color: rgba(255,43,135,0.12) !important; border-color: rgba(255,43,135,0.3) !important; }
            .feature-card  { background-color: #161616 !important; border-color: rgba(255,255,255,0.08) !important; }
            .feature-title { color: #e4e4e7 !important; }
            .cta-block { background-color: #161616 !important; }
            .also-wrap { background-color: #111111 !important; border-color: rgba(255,255,255,0.08) !important; }
            .tag       { background-color: #1a1a1a !important; border-color: rgba(255,255,255,0.08) !important; color: #71717a !important; }
            .divider   { border-color: rgba(255,255,255,0.08) !important; }
            .footer-link { color: #52525b !important; }
          }
        `}</style>
      </Head>

      <Preview>
        You're on the Feedbase waitlist — we'll let you know when it's ready
      </Preview>

      <Body
        style={{
          margin: 0,
          padding: 0,
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <div
          className="wrapper"
          style={{ backgroundColor: "#f0f0f0", padding: "48px 16px" }}
        >
          <Container style={{ maxWidth: "520px", margin: "0 auto" }}>
            {/* Card */}
            <div
              className="card"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e4e4e7",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <div
                className="header"
                style={{ backgroundColor: "#0d0d0d", padding: "24px 32px" }}
              >
                <Link
                  href="https://feedbase.breaddevv.cc"
                  style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
                >
                  <Img
                    src="https://feedbase.breaddevv.cc/logo.png"
                    width="34"
                    height="28"
                    alt="Feedbase"
                    style={{ display: "block", marginRight: "10px" }}
                  />
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "21px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Feedbase
                  </span>
                </Link>
              </div>

              {/* Body */}
              <div style={{ padding: "36px 32px 28px" }}>
                {/* Status pill */}
                <div
                  className="pill-wrap"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: "#fff0f7",
                    border: `1px dashed #ffd6ec`,
                    borderRadius: "100px",
                    padding: "4px 12px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    className="pill-dot"
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: brand,
                      marginRight: "6px",
                    }}
                  />
                  <span
                    className="pill-text"
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      color: brand,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    You're on the list
                  </span>
                </div>

                {/* Heading */}
                <div
                  className="heading"
                  style={{
                    color: "#0d0d0d",
                    fontSize: "24px",
                    fontWeight: 500,
                    letterSpacing: "-0.04em",
                    lineHeight: "1.2",
                    margin: "0 0 16px",
                  }}
                >
                  We'll reach out
                  <br />
                  when Feedbase opens.
                </div>

                <Text
                  className="body-text"
                  style={{
                    color: "#52525b",
                    fontSize: "14px",
                    lineHeight: "1.75",
                    margin: "0 0 12px",
                  }}
                >
                  Feedbase is an open-source, free platform for collecting and
                  managing user feedback — feature requests, bug reports, and
                  everything in between.
                </Text>

                <Text
                  className="body-text"
                  style={{
                    color: "#52525b",
                    fontSize: "14px",
                    lineHeight: "1.75",
                    margin: "0 0 28px",
                  }}
                >
                  We'll send a note the moment spots open up.
                </Text>

                {/* Feature cards */}
                <Row style={{ marginBottom: "28px" }}>
                  {[
                    { icon: "💬", 
                      title: "Widgets", sub: 
                      "Embed anywhere" 
                    },
                    { 
                      icon: "🗺️", 
                      title: "Roadmaps", 
                      sub: "Public or private" 
                    },
                    {
                      icon: "📋",
                      title: "Changelog",
                      sub: "Ship with context",
                    },
                  ].map((f) => (
                    <Column key={f.title}>
                      <div
                        className="feature-card"
                        style={{
                          backgroundColor: "#ffffff",
                          border: "1px dashed #e4e4e7",
                          borderRadius: "10px",
                          padding: "12px 14px",
                          marginRight: "8px",
                        }}
                      >
                        <div style={{ fontSize: "18px", marginBottom: "6px" }}>
                          {f.icon}
                        </div>
                        <div
                          className="feature-title"
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "#0d0d0d",
                            marginBottom: "2px",
                          }}
                        >
                          {f.title}
                        </div>
                        <div
                          className="muted"
                          style={{ fontSize: "11px", color: "#71717a" }}
                        >
                          {f.sub}
                        </div>
                      </div>
                    </Column>
                  ))}
                </Row>

                {/* GitHub CTA */}
                <div
                  className="cta-block"
                  style={{
                    backgroundColor: "#0d0d0d",
                    borderRadius: "12px",
                    padding: "20px",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      className="cta-title"
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#ffffff",
                        marginBottom: "4px",
                      }}
                    >
                      Star us on GitHub
                    </div>
                    <div
                      className="muted"
                      style={{
                        fontSize: "12px",
                        color: "#71717a",
                        lineHeight: "1.5",
                      }}
                    >
                      Free &amp; open-source, forever. Help others find
                      Feedbase.
                    </div>
                  </div>
                  <div style={{ flexShrink: 0, marginLeft: "16px" }}>
                    <Link
                      href="https://github.com/breadddevv/feedbase"
                      style={{
                        backgroundColor: brand,
                        color: "#ffffff",
                        fontSize: "12px",
                        fontWeight: 600,
                        textDecoration: "none",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        display: "inline-block",
                      }}
                    >
                      ⭐ Star
                    </Link>
                  </div>
                </div>

                {/* Also includes */}
                <div
                  className="also-wrap"
                  style={{
                    backgroundColor: "#fafafa",
                    border: "1px solid #e4e4e7",
                    borderRadius: "12px",
                    padding: "16px 20px",
                  }}
                >
                  <div
                    className="muted"
                    style={{
                      fontSize: "12px",
                      color: "#71717a",
                      marginBottom: "8px",
                    }}
                  >
                    Also includes
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {[
                      "GitHub integration",
                      "Slack alerts",
                      "Self-hosted",
                      "SSO",
                    ].map((t) => (
                      <div
                        key={t}
                        className="tag"
                        style={{
                          backgroundColor: "#ffffff",
                          border: "1px solid #e4e4e7",
                          borderRadius: "6px",
                          padding: "3px 10px",
                          fontSize: "11px",
                          color: "#52525b",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div
                className="footer-bg"
                style={{
                  backgroundColor: "#fafafa",
                  borderTop: "1px solid #e4e4e7",
                  padding: "20px 32px",
                }}
              >
                <Text
                  className="muted"
                  style={{
                    fontSize: "12px",
                    color: "#71717a",
                    margin: "0 0 6px",
                    lineHeight: "1.6",
                  }}
                >
                  Questions?{" "}
                  <Link
                    href="mailto:hello@breaddevv.cc"
                    style={{ color: brand, textDecoration: "none" }}
                  >
                    hello@breaddevv.cc
                  </Link>
                </Text>
                <Text
                  className="footer-link"
                  style={{
                    fontSize: "12px",
                    color: "#a1a1aa",
                    margin: "0",
                    lineHeight: "1.6",
                  }}
                >
                  <Link
                    href="https://feedbase.breaddevv.cc/terms"
                    className="footer-link"
                    style={{ color: "#a1a1aa", textDecoration: "none" }}
                  >
                    Terms
                  </Link>
                  {" · "}
                  <Link
                    href="https://feedbase.breaddevv.cc/privacy"
                    className="footer-link"
                    style={{ color: "#a1a1aa", textDecoration: "none" }}
                  >
                    Privacy
                  </Link>
                  {" · "}
                  <Link
                    href="https://feedbase.breaddevv.cc"
                    className="footer-link"
                    style={{ color: "#a1a1aa", textDecoration: "none" }}
                  >
                    feedbase.breaddevv.cc
                  </Link>
                </Text>
              </div>
            </div>

            {/* Sub-footer */}
            <Section style={{ marginTop: "24px", textAlign: "center" }}>
              <Text
                style={{
                  color: "#a1a1aa",
                  fontSize: "11px",
                  lineHeight: "1.6",
                  margin: "0 0 4px",
                }}
              >
                You're receiving this because <strong>{email}</strong> joined
                the Feedbase waitlist.
              </Text>
              <Text
                style={{
                  color: "#a1a1aa",
                  fontSize: "11px",
                  lineHeight: "1.6",
                  margin: "0 0 16px",
                }}
              >
                <Link
                  href="https://github.com/breadddevv/feedbase"
                  style={{ color: "#a1a1aa", textDecoration: "underline" }}
                >
                  GitHub
                </Link>
                {" · "}
                <Link
                  href="https://feedbase.breaddevv.cc"
                  style={{ color: "#a1a1aa", textDecoration: "underline" }}
                >
                  feedbase.breaddevv.cc
                </Link>
              </Text>
              <Text
                style={{
                  color: "#a1a1aa",
                  fontSize: "12px",
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                Made with ☕ & 🍀 | Feedbase Team 🇵🇹
              </Text>
            </Section>
          </Container>
        </div>
      </Body>
    </Html>
  );
};

export default WaitlistConfirmation;