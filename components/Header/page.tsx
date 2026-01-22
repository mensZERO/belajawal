import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>FresBlue</h1>

      <nav>
        <ul style={styles.menu}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/beranda">Tentang</Link></li>
          <li><Link href="/menu">Produk</Link></li>
          <li><Link href="/contact">Kontak</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#0f172a",
    color: "white",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
  },
};
