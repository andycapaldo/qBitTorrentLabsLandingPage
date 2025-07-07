"use client";

import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Brand from "./components/Brand";
import PdfDisplay from "./components/PdfDisplay";
import Countdown from "./components/Countdown";

const LAUNCH_TIME = new Date("2025-07-08T06:00:00-06:00");

export default function Home() {
    const [isLive, setIsLive] = useState(false);
    
    useEffect(() => {
      const now = new Date();
      if (now >= LAUNCH_TIME) {
        setIsLive(true);
      }
    }, []);
  return (
    <div
      className="font-[family-name:var(--font-geist-sans)] min-h-[100dvh] w-full overflow-x-hidden flex flex-col items-center justify-center py-4 bg-primary"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23333' /%3E%3C/svg%3E")`,
      }}
    >
      <Nav />
      {isLive ? (
        <>
          <Hero />
          <Brand />
          <Card />
          <PdfDisplay />
          <Footer />
        </>
      ) : (
        <Countdown onComplete={() => setIsLive(true)} />
      )}
    </div>
  );
}