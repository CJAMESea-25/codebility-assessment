export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px",
        textAlign: "center",
        fontSize: 13,
        color: "var(--text-secondary)",
      }}
    >
      © {new Date().getFullYear()} Moola Drops · Performance marketing for
      restaurants
    </footer>
  );
}
