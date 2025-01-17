"use client";

import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";
import Noise from "./noise";

export function Landing() {
  const words = ["Effortless", "Impactful", "Next-Level"];
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white">

     


      <Image
        src="/bg/hero.png" 
        alt="Background"
        fill
        className="object-cover -z-10 opacity-50"
        priority
        unoptimized
      />


      <div className="relative z-10 text-center">
        <h1 className="font-normal text-8xl py-2">Elevate Streaming</h1>
        <h1 className="font-normal text-8xl bg-gradient-to-tl from-white via-blue-500 to-white bg-clip-text text-transparent py-2">
          <FlipWords words={words} />
        </h1>

        <div className="mt-8 space-x-4">
          <Link href="/register">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-sm font-medium">
              Sign-in
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="px-6 py-3 bg-white hover:bg-slate-200 text-black rounded-sm font-ligth">
            
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
