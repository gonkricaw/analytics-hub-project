'use client';

import { ReactNode, useEffect, useState } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface CarouselProps {
  items: ReactNode[];
  autoplay?: boolean;
  autoplayDelay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  spaceBetween?: number;
  slidesPerView?: number | 'auto';
  loop?: boolean;
  className?: string;
}

export const Carousel = ({
  items,
  autoplay = true,
  autoplayDelay = 3000,
  showNavigation = true,
  showPagination = true,
  spaceBetween = 30,
  slidesPerView = 1,
  loop = true,
  className = '',
}: CarouselProps) => {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues with Swiper
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div 
      className={`relative w-full ${className}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <SwiperComponent
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        pagination={showPagination ? { clickable: true } : false}
        navigation={showNavigation}
        autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full rounded-xl overflow-hidden"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="rounded-xl">
            <div className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              {item}
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </motion.div>
  );
};
