import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gianluca Belvisi",
  description: "Homepage of Gianluca Belvisi - Personal blog and thoughts",
  author: "Gianluca Belvisi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav style={{ padding: "1rem", borderBottom: "1px solid #eee" }}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              <a href="/" style={{ fontWeight: "bold", fontSize: "1.2rem", textDecoration: "none" }}>
                Gianluca Belvisi
              </a>
              <div style={{ display: "flex", gap: "1rem" }}>
                <a href="/about" style={{ textDecoration: "none" }}>About</a>
                <a href="/contact" style={{ textDecoration: "none" }}>Contact</a>
                <a href="/books" style={{ textDecoration: "none" }}>Books</a>
                <a href="/trips" style={{ textDecoration: "none" }}>Trips</a>
              </div>
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer style={{ padding: "2rem", borderTop: "1px solid #eee", marginTop: "4rem", textAlign: "center" }}>
          <p>&copy; 2024 Gianluca Belvisi. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
