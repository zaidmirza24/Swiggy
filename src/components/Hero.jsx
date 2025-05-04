import React, { useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images to be displayed
  const images = [
    "https://etimg.etb2bimg.com/photo/110814623.cms",
    "https://lh6.googleusercontent.com/proxy/aJtkJj3x3Yp89z3m4iP6zH58y--q5Wsv9l_JPB4zUlKoBqenG5p7XPfKqJArgQDaGoKIgZBl36tmo6aOc-JOr50atqGfxLyk9SclG0FEeMMeWv0",
    "https://pbs.twimg.com/ad_img/1312061520017145867/hmqb_AdE?format=jpg&name=900x900"
  ];

  // Handle previous slide navigation
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Handle next slide navigation
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id='Hero' className="relative w-full my-0 max-w-[1200px] mx-auto">
      {/* Carousel Wrapper */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out transition-all ${index === currentSlide ? 'block' : 'hidden'}`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="block w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute margin-top-0 top-1/2 left-0 right-0 z-10 flex justify-between px-4">
        <button
          type="button"
          className="text-white text-xl bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70"
          onClick={handlePrevSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          className="text-white text-xl bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70"
          onClick={handleNextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
