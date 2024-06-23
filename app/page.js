import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link href="./week-2/">Week2 assignment</Link>
        </li>
        <li>
          <Link href="./week-3/">Week3 assignment</Link>
        </li>
        <li>
          <Link href="./week-4/">Week4 assignment</Link>
        </li>
        <li>
          <Link href="./week-5/">Week5 assignment</Link>
        </li>
      </ul>
    </main>
  );
}
