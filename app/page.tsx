import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Home",
  };
}

export default function Home() {
  
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/products">Products</Link>
    </div>
  );
}
