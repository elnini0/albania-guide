"use client";

import React from 'react';
import Image from 'next/image';

interface MapGalleryProps {
  mapImages: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

const MapGallery: React.FC<MapGalleryProps> = ({ mapImages }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? mapImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === mapImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <div className="relative h-[400px] mb-4">
        <Image
          src={mapImages[activeIndex].src}
          alt={mapImages[activeIndex].alt}
          fill
          style={{ objectFit: 'contain' }}
          className="rounded-md"
        />
        
        {/* Navigation arrows */}
        <button 
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button 
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      
      {/* Caption */}
      {mapImages[activeIndex].caption && (
        <div className="text-center text-gray-700 mb-4">
          {mapImages[activeIndex].caption}
        </div>
      )}
      
      {/* Thumbnails */}
      <div className="flex justify-center space-x-2 overflow-x-auto py-2">
        {mapImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative w-16 h-16 rounded-md overflow-hidden ${
              index === activeIndex ? 'ring-2 ring-blue-600' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MapGallery;
