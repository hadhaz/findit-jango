import Image from "next/image";
import Hero from "@/components/home/hero";
import Navbar from "@/components/layout/navbar";
import Feature from "@/components/home/feature";
import Testimony from "@/components/home/testimony";
import Footer from "@/components/layout/navbar/footer";

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Navbar />
      <main className='flex min-h-screen flex-col items-center'>
        <Hero />
        <Feature />
        <Testimony />
      </main>
      <Footer />
    </>
  );
}
