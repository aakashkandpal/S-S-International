import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { carouselImages } from "@/data/products";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToProducts = () => {
    const element = document.getElementById("featured-products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 relative overflow-hidden">
      <div className="relative h-96 md:h-[500px] lg:h-[600px]">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}

        {/* Tagline Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in-up">
              Handcrafted Elegance, Globally Delivered
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl font-light opacity-90 mb-8">
              Where tradition meets global quality
            </p>
            <Button
              onClick={scrollToProducts}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg"
            >
              Explore Our Products
            </Button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-indicator ${
                index === currentSlide ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
