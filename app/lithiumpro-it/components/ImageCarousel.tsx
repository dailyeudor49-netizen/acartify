'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden group">
      {/* Image Container 1:1 */}
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Left Arrow - Always visible for better UX */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 z-10">
        <button 
          onClick={prevSlide}
          className="bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all shadow-md"
        >
          <ChevronLeft size={28} />
        </button>
      </div>

      {/* Right Arrow - Always visible for better UX */}
      <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 z-10">
        <button 
          onClick={nextSlide}
          className="bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all shadow-md"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer w-3 h-3 rounded-full transition-all border border-white/60 shadow-sm ${
              currentIndex === slideIndex ? 'bg-red-600 scale-125' : 'bg-white/60 hover:bg-white'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};