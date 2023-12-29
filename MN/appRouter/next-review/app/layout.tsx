import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <h1>Game Library</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/reviews">Reviews</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>

        <main>{children}</main>
        <footer>
          [footer] Game data and images courtesy of{" "}
          <a href="https://rawg.io/" target="_blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
