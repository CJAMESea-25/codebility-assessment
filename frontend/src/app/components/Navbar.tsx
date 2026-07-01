"use client";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(14, 14, 16, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <nav
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
          }}
        >
          Moola
        </a>

        {/* Nav links */}
        <div style={{ display: "flex", gap: 32 }}>
          <a
            href="#features"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "var(--text-secondary)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Features
          </a>
          <a
            href="#hero"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "var(--text-secondary)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            How it works
          </a>
        </div>

        {/* CTA button */}
        <a
          href="#hero"
          style={{
            background: "var(--accent)",
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            padding: "10px 20px",
            borderRadius: 8,
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
