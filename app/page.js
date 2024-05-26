import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
      <div>
        <Link href="./week-2/">Week2 assignment</Link>
      </div>
      <div>
        <Link href="./week-3/">Week3 assignment</Link>
      </div>
    </main>
  );
}
