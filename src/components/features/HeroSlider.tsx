import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Button from '../common/Button';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
    title: 'Luxury Living Redefined',
    subtitle: 'Experience the Extraordinary'
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    title: 'Exclusive Properties',
    subtitle: 'Discover Your Perfect Home'
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/32870/pexels-photo.jpg',
    title: 'Waterfront Estates',
    subtitle: 'Live Your Dream Lifestyle'
  },
  {
    type: 'video',
    url: 'https://player.vimeo.com/external/373839467.sd.mp4?s=37f32955693a8b17bdcc4fff9647387da0a25f48&profile_id=164&oauth2_token_id=57447761',
    title: 'Modern Living',
    subtitle: 'Contemporary Elegance'
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg',
    title: 'Desert Oasis',
    subtitle: 'Escape to Tranquility'
  },
  {
    type: 'image',
    url: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg',
    title: 'Mediterranean Style',
    subtitle: 'Timeless Architecture'
  }
];

const HeroSlider: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 bg-white/50 hover:bg-white"></span>`;
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {slide.type === 'image' ? (
              <div
                className="absolute inset-0 bg-center bg-cover transform scale-105 transition-transform duration-[20000ms] swiper-slide-active:scale-100"
                style={{ backgroundImage: `url('${slide.url}')` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
            ) : (
              <div className="absolute inset-0">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={slide.url} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
            )}

            <div className="absolute inset-0 flex items-center justify-center text-center z-10">
              <div className="max-w-4xl px-4">
                <h2 className="text-2xl md:text-3xl text-primary-300 font-light mb-4 tracking-[0.2em] uppercase animate-fade-in">
                  {slide.subtitle}
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight animate-slide-up">
                  {slide.title}
                </h1>
                <div className="flex justify-center gap-4">
                  <Link to="/properties">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="min-w-[200px] tracking-wider uppercase"
                    >
                      View Properties
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="min-w-[200px] tracking-wider uppercase border-white text-white hover:bg-white/10"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/50 to-transparent h-32">
        <div className="container mx-auto px-4 h-full flex items-end pb-8">
          <div className="bg-white/95 p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="md:flex-1">
                <label htmlFor="search" className="sr-only">Search for properties</label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="search" 
                    placeholder="City, neighborhood, or address..." 
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                </div>
              </div>
              <Link to="/properties" className="md:w-auto">
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth 
                  className="tracking-wider uppercase"
                >
                  Search
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button className="swiper-button-prev !w-12 !h-12 !bg-white/10 hover:!bg-white/20 rounded-full transition-colors !text-white after:!text-2xl"></button>
      <button className="swiper-button-next !w-12 !h-12 !bg-white/10 hover:!bg-white/20 rounded-full transition-colors !text-white after:!text-2xl"></button>
    </section>
  );
};

export default HeroSlider;