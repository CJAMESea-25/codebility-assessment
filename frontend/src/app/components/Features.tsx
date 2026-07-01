import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "⚡",
    title: "Fast Approval",
    description: "Apply within minutes. No lengthy paperwork or waiting periods.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    description:
      "Your information is protected with bank-level encryption at all times.",
  },
  {
    icon: "💳",
    title: "Flexible Payments",
    description: "Choose repayment options that fit your budget and cash flow.",
  },
  {
    icon: "📊",
    title: "Real-Time Tracking",
    description:
      "See every campaign, every customer, every dollar — all in one dashboard.",
  },
  {
    icon: "🎯",
    title: "Pay Per Redemption",
    description:
      "No clicks, no impressions. You only pay when a customer actually shows up.",
  },
  {
    icon: "📍",
    title: "Multi-Location Ready",
    description:
      "Roll out one campaign across all your locations with per-store reporting.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        padding: "80px 32px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        {/* Section label */}
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--accent)",
            display: "block",
            marginBottom: 16,
          }}
        >
          Why Moola
        </span>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            maxWidth: 600,
            marginBottom: 16,
          }}
        >
          Marketing infrastructure, not just a campaign.
        </h2>

        {/* Subheading */}
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            maxWidth: 560,
            marginBottom: 56,
          }}
        >
          Every tool you need to run accountable, measurable marketing — built
          for restaurant operators.
        </p>

        {/* Feature grid — 3 cols desktop → 2 tablet → 1 mobile via auto-fit */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
