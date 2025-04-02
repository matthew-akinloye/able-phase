"use client";

import type React from "react";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const categories = [
    { id: "all", name: "All Spaces" },
    { id: "living", name: "Living Areas" },
    { id: "bedroom", name: "Bedrooms" },
    { id: "kitchen", name: "Kitchen" },
    // { id: "bathroom", name: "Bathrooms" },
    { id: "outdoor", name: "Outdoor Spaces" },
  ];

  const images = [
    {
      src: "/living/able (5).jpg?height=600&width=800",
      alt: "Luxurious Living Room",
      category: "living",
      description:
        "Elegant living space with designer furniture and ambient lighting",
    },
    {
      src: "/living/able (6).jpg?height=600&width=800",
      alt: "Luxurious Living Room",
      category: "living",
      description:
        "Elegant living space with designer furniture and ambient lighting",
    },
    {
      src: "/living/able (7).jpg?height=600&width=800",
      alt: "Luxurious Living Room",
      category: "living",
      description:
        "Elegant living space with designer furniture and ambient lighting",
    },
    {
      src: "/living/able (8).jpg?height=600&width=800",
      alt: "Luxurious Living Room",
      category: "living",
      description:
        "Elegant living space with designer furniture and ambient lighting",
    },
    {
      src: "/living/able (9).jpg?height=600&width=800",
      alt: "Luxurious Living Room",
      category: "living",
      description:
        "Elegant living space with designer furniture and ambient lighting",
    },
    {
      src: "/living/able (11).jpg?height=600&width=800",
      alt: "Luxurious Living Room",
      category: "living",
      description:
        "Elegant living space with designer furniture and ambient lighting",
    },
    {
      src: "/living/able (14).jpg?height=600&width=800",
      alt: "Luxurious Living Room",
      category: "living",
      description:
        "Elegant living space with designer furniture and ambient lighting",
    },
    {
      src: "/living/able (20).jpg?height=600&width=800",
      alt: "Luxurious Living Room",
      category: "living",
      description:
        "Elegant living space with designer furniture and ambient lighting",
    },
    {
      src: "/living/able (22).jpg?height=600&width=800",
      alt: "Luxurious Living Room",
      category: "living",
      description:
        "Elegant living space with designer furniture and ambient lighting",
    },
    {
      src: "/living/able-2 (22).jpg?height=600&width=800",
      alt: "Luxurious Living Room",
      category: "living",
      description:
        "Elegant living space with designer furniture and ambient lighting",
    },
    {
      src: "/living/able-2 (23).jpg?height=600&width=800",
      alt: "Luxurious Living Room",
      category: "living",
      description:
        "Elegant living space with designer furniture and ambient lighting",
    },
    {
      src: "/living/able-2 (28).jpg?height=600&width=800",
      alt: "Luxurious Living Room",
      category: "living",
      description:
        "Elegant living space with designer furniture and ambient lighting",
    },

    {
      src: "/bedroom/able (2).jpg?height=600&width=800",
      alt: "Master Bedroom Suite",
      category: "bedroom",
      description:
        "Spacious master bedroom with premium king-size bed and luxury linens",
    },
    {
      src: "/bedroom/able (3).jpg?height=600&width=800",
      alt: "Master Bedroom Suite",
      category: "bedroom",
      description:
        "Spacious master bedroom with premium king-size bed and luxury linens",
    },
    {
      src: "/bedroom/able (15).jpg?height=600&width=800",
      alt: "Master Bedroom Suite",
      category: "bedroom",
      description:
        "Spacious master bedroom with premium king-size bed and luxury linens",
    },
    {
      src: "/bedroom/able (16).jpg?height=600&width=800",
      alt: "Master Bedroom Suite",
      category: "bedroom",
      description:
        "Spacious master bedroom with premium king-size bed and luxury linens",
    },
    {
      src: "/bedroom/able (17).jpg?height=600&width=800",
      alt: "Master Bedroom Suite",
      category: "bedroom",
      description:
        "Spacious master bedroom with premium king-size bed and luxury linens",
    },
    {
      src: "/bedroom/able (19).jpg?height=600&width=800",
      alt: "Master Bedroom Suite",
      category: "bedroom",
      description:
        "Spacious master bedroom with premium king-size bed and luxury linens",
    },
    {
      src: "/bedroom/able (23).jpg?height=600&width=800",
      alt: "Master Bedroom Suite",
      category: "bedroom",
      description:
        "Spacious master bedroom with premium king-size bed and luxury linens",
    },
    {
      src: "/bedroom/able (24).jpg?height=600&width=800",
      alt: "Master Bedroom Suite",
      category: "bedroom",
      description:
        "Spacious master bedroom with premium king-size bed and luxury linens",
    },
    {
      src: "/bedroom/able (25).jpg?height=600&width=800",
      alt: "Master Bedroom Suite",
      category: "bedroom",
      description:
        "Spacious master bedroom with premium king-size bed and luxury linens",
    },
    {
      src: "/bedroom/able-2 (25).jpg?height=600&width=800",
      alt: "Master Bedroom Suite",
      category: "bedroom",
      description:
        "Spacious master bedroom with premium king-size bed and luxury linens",
    },
    {
      src: "/bedroom/able-2 (29).jpg?height=600&width=800",
      alt: "Master Bedroom Suite",
      category: "bedroom",
      description:
        "Spacious master bedroom with premium king-size bed and luxury linens",
    },
    {
      src: "/bedroom/able-2 (30).jpg?height=600&width=800",
      alt: "Master Bedroom Suite",
      category: "bedroom",
      description:
        "Spacious master bedroom with premium king-size bed and luxury linens",
    },

    {
      src: "/kitchen/able (1).jpg?height=600&width=800",
      alt: "Gourmet Kitchen",
      category: "kitchen",
      description:
        "Fully equipped chef's kitchen with high-end appliances and marble countertops",
    },
    {
      src: "/kitchen/able (10).jpg?height=600&width=800",
      alt: "Gourmet Kitchen",
      category: "kitchen",
      description:
        "Fully equipped chef's kitchen with high-end appliances and marble countertops",
    },
    {
      src: "/kitchen/able (12).jpg?height=600&width=800",
      alt: "Gourmet Kitchen",
      category: "kitchen",
      description:
        "Fully equipped chef's kitchen with high-end appliances and marble countertops",
    },
    {
      src: "/kitchen/able (13).jpg?height=600&width=800",
      alt: "Gourmet Kitchen",
      category: "kitchen",
      description:
        "Fully equipped chef's kitchen with high-end appliances and marble countertops",
    },
    {
      src: "/kitchen/able (21).jpg?height=600&width=800",
      alt: "Gourmet Kitchen",
      category: "kitchen",
      description:
        "Fully equipped chef's kitchen with high-end appliances and marble countertops",
    },
    {
      src: "/kitchen/able-2 (26).jpg?height=600&width=800",
      alt: "Gourmet Kitchen",
      category: "kitchen",
      description:
        "Fully equipped chef's kitchen with high-end appliances and marble countertops",
    },
    {
      src: "/kitchen/able-2 (27).jpg?height=600&width=800",
      alt: "Gourmet Kitchen",
      category: "kitchen",
      description:
        "Fully equipped chef's kitchen with high-end appliances and marble countertops",
    },

    // {
    //   src: "able (1).jpg?height=600&width=800",
    //   alt: "Spa-like Bathroom",
    //   category: "bathroom",
    //   description:
    //     "Luxurious bathroom with rainfall shower and premium fixtures",
    // },

    {
      src: "/outdoor/able-2 (1).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },

    {
      src: "/outdoor/able-2 (2).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },

    {
      src: "/outdoor/able-2 (3).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (4).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (5).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (6).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (7).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (8).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (9).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (10).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (11).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (12).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (13).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (14).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (15).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (16).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (17).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (18).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (19).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (20).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (21).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
    {
      src: "/outdoor/able-2 (24).jpg?height=600&width=800",
      alt: "Private Balcony",
      category: "outdoor",
      description: "Serene balcony with breathtaking views of the surroundings",
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  // Mouse drag functionality for slider
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % filteredImages.length);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      (selectedImage - 1 + filteredImages.length) % filteredImages.length
    );
  };

  return (
    <section
      id="gallery"
      className="py-24 relative overflow-hidden bg-black"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 30 + 10}s linear infinite`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 fancy-border inline-block pb-4">
            <span>Immersive Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Step into a visual journey through our stunning spaces. Each image
            tells a story of luxury, comfort, and exceptional design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-2 p-1 bg-white/10 backdrop-blur-md rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-black text-white shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.alt}-${index}`}
              className="relative overflow-hidden rounded-xl shadow-2xl group cursor-pointer h-80"
              onClick={() => setSelectedImage(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black-900/80 via-transparent to-transparent z-10"></div>
              <div className="relative h-full w-full">
                <Image
                  src={image.src || "able (1).jpg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">
                  {image.alt}
                </h3>
                <p className="text-white/80 text-sm">{image.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/30 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Horizontal Slider for Mobile */}
        <div className="mt-12 lg:hidden">
          <h3 className="text-xl font-semibold text-white mb-4">
            Swipe to Explore
          </h3>
          <div
            ref={sliderRef}
            className="flex overflow-x-auto pb-6 cursor-grab scrollbar-hide"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            <div className="flex space-x-4">
              {filteredImages.map((image, index) => (
                <div
                  key={`slider-${image.alt}-${index}`}
                  className="relative flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden shadow-lg"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.src || "able (1).jpg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button
              className="absolute top-6 right-6 text-white z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>

            <button
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="relative w-full max-w-5xl h-[80vh]">
              <Image
                src={filteredImages[selectedImage].src || "able (1).jpg"}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-6 left-0 right-0 text-center bg-black/50 backdrop-blur-md p-4 mx-auto max-w-2xl rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {filteredImages[selectedImage].alt}
                </h3>
                <p className="text-white/80">
                  {filteredImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
