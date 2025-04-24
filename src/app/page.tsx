"use client";

import { BookingForm } from "@/components/booking-form";
import { Gallery } from "@/components/gallery";
import { Amenities } from "@/components/amenities";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { Rates } from "@/components/rates";
import { Contact } from "@/components/contact";
import { useEffect } from "react";
import Script from "next/script";

export default function Home() {
  useEffect(() => {
    // Add cursor effect
    const cursor = document.createElement("div");
    cursor.className =
      "fixed w-8 h-8 rounded-full pointer-events-none z-50 opacity-0 transition-opacity duration-300";
    cursor.style.background =
      "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(236, 72, 153, 0.5) 100%)";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.filter = "blur(2px)";
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.opacity = "1";
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const hideCursor = () => {
      cursor.style.opacity = "0";
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  // Initialize AOS after it's loaded
  const handleAOSLoad = () => {
    // Check if AOS is available in the window object
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: false,
        mirror: true,
      });
    }
  };

  return (
    <>
      {/* Load AOS CSS */}
      <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />

      {/* Load AOS JS */}
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        strategy="afterInteractive"
        onLoad={handleAOSLoad}
      />

      <main className="min-h-screen overflow-hidden">
        <Hero />
        <Amenities />
        <Gallery />
        <Location />
        <Rates />
        <BookingForm />
        <Contact />
      </main>
    </>
  );
}
