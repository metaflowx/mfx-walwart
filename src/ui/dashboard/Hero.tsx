import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const Hero = () => {
  return (
    <Box sx={{ width: '100%', borderRadius: '16px', overflow: 'hidden', mt: 2 }}>
      <Swiper
        modules={[Pagination, Autoplay,Navigation]}
        slidesPerView={1}
        loop={true} 
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto slide with infinite loop
      >
        {[1, 2, 3].map((index) => (
          <SwiperSlide key={index}>
            <img 
              src={`/images/home/${index}.jpeg`} 
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
