"use client";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Brand from "./components/Brand";
import PdfDisplay from "./components/PdfDisplay";

export default function Home() {
  return (
    <div
      className="font-[family-name:var(--font-geist-sans)] min-h-[100dvh] w-full overflow-x-hidden flex flex-col items-center justify-start py-4 bg-primary"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23333' /%3E%3C/svg%3E")`,
      }}
    >
      <Nav />
      <Hero />
      <Brand />
      <Card />
      <PdfDisplay />
      <Footer />
    </div>
  );
}
