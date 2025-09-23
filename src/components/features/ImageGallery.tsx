import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="relative">
      {/* Main Gallery View */}
      <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '16/9' }}>
        <img
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={toggleFullScreen}
              className="p-2 bg-white bg-opacity-75 rounded-full hover:bg-opacity-100 transition-all"
              aria-label="View full screen"
            >
              <Maximize2 size={16} className="text-gray-800" />
            </button>
          </div>
          
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-75 rounded-full hover:bg-opacity-100 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} className="text-gray-800" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-75 rounded-full hover:bg-opacity-100 transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={20} className="text-gray-800" />
          </button>
        </div>
      </div>
      
      {/* Thumbnail Navigation */}
      <div className="mt-2 grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative rounded overflow-hidden ${
              index === currentIndex ? 'ring-2 ring-primary-600' : 'opacity-70 hover:opacity-100'
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <div style={{ paddingBottom: '70%' }} className="relative">
              <img
                src={image}
                alt={`${title} - Thumbnail ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </button>
        ))}
      </div>
      
      {/* Full Screen Modal */}
      {isFullScreen && (
        <div 
          className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4 animate-fade-in"
          onClick={toggleFullScreen}
        >
          <button
            onClick={toggleFullScreen}
            className="absolute top-4 right-4 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition-all z-10"
            aria-label="Close fullscreen"
          >
            <X size={24} className="text-white" />
          </button>
          
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-40 transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight size={28} className="text-white" />
          </button>
          
          <img
            src={images[currentIndex]}
            alt={`${title} - Fullscreen Image ${currentIndex + 1}`}
            className="max-h-screen max-w-full object-contain"
          />
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-70 px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;