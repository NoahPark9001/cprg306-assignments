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
        <li>
          <Link href="./week-6/">Week6 assignment</Link>
        </li>
        <li>
          <Link href="./week-7/">Week7 assignment</Link>
        </li>
        <li>
          <Link href="./week-8/">Week8 assignment</Link>
        </li>
        <li>
          <Link href="./week-10/">Week10 assignment</Link>
        </li>
      </ul>
    </main>
  );
}
