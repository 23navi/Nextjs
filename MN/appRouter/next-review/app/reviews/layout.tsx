import Link from "next/link";

export default function ReviewLayout({ children }) {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/reviews/hollow-knight">Hollow Knight</Link>
        </li>
        <li>
          <Link href="/reviews/hollow-knight">Hollow Knight</Link>
        </li>
      </ul>
    </nav>
  );
}
