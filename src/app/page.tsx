import Image from "next/image";
import Hero from "@/components/home/hero";
import Navbar from "@/components/layout/navbar";
import Feature from "@/components/home/feature";

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Navbar />
      <main className='flex min-h-screen flex-col items-center p-24'>
        <Hero />
        <Feature />
      </main>
    </>
  );
}
