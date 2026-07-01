"use client";

const trustItems = [
  "Avg. 500%+ ROAS",
  "Pay only on redemption",
  "No upfront cost",
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 32px 60px",
      }}
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(14,14,16,0.55), rgba(14,14,16,0.92))",
          zIndex: 1,
        }}
      />

      {/* Content — two columns on desktop, stacked on mobile */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Text side */}
        <div>
          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(40px, 5.5vw, 80px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              marginBottom: 24,
            }}
          >
            Money made{" "}
            <span style={{ color: "var(--accent)" }}>simple</span>.
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              maxWidth: 520,
              marginBottom: 36,
            }}
          >
            Drive real, paying customers through your door — and only pay when
            they actually show up and spend. Trackable ads that pay for
            themselves.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 32,
            }}
          >
            <a
              href="#features"
              style={{
                background: "var(--accent)",
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
                padding: "14px 28px",
                borderRadius: 10,
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Get Started
            </a>
            <a
              href="#features"
              style={{
                background: "transparent",
                color: "var(--text-primary)",
                fontSize: 16,
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
              }
            >
              See how it works
            </a>
          </div>

          {/* Trust indicators */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {trustItems.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "var(--text-secondary)",
                }}
              >
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Illustration — simple mock card */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "32px 40px",
              textAlign: "center",
              width: "100%",
              maxWidth: 320,
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                marginBottom: 12,
              }}
            >
              Today&apos;s Revenue
            </p>
            <p
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              $8,420
            </p>
            <p style={{ fontSize: 14, color: "#22c55e", fontWeight: 600 }}>
              ↑ 24% vs yesterday
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
