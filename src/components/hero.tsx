import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('able (18).jpg?height=1080&width=1920')",
          filter: "brightness(0.6)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="block">INTRODUCING</span>
          <span className="text-5xl md:text-7xl text-yellow-400 block mt-2">
            ABLE PHASE 1
          </span>
          <span className="block mt-2">YOUR DREAM HOME AWAITS!</span>
        </h1>

        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Experience luxury living in our spacious and affordable shortlet
          apartment designed to provide you with the ultimate living experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6 text-lg"
            asChild
          >
            <Link href="#booking">Book Now</Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white bg-white text-black px-8 py-6 text-lg"
            asChild
          >
            <Link href="#gallery">View Gallery</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
