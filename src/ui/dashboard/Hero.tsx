import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <Box sx={{ width: '100%', borderRadius: '16px', overflow: 'hidden', mt: 2 }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true} // Enables infinite looping
        pagination={{ clickable: true }} // Enables indicators
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto slide with infinite loop
      >
        {[1, 2, 3].map((index) => (
          <SwiperSlide key={index}>
            <img 
              src={`/images/home/slider.png`} 
              alt={`Slide ${index}`} 
              style={{ width: '100%', height: '400px', objectFit: 'cover' }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hero;
