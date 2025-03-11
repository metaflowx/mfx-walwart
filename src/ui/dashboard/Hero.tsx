import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <Box sx={{ width: '100%', borderRadius: '16px', overflow: 'hidden', mt: 2 }}>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        loop={true} 

        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {[1, 2, 3].map((index) => (
          <SwiperSlide key={index}>
            <div className=" flex justify-center items-center bg-black overflow-hidden">
              <img 
                src={`/images/home/${index}.jpg`} 
                alt={`Slide ${index}`} 
                style={{ width: '100%', height: '400px', objectFit: 'contain' }} 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hero;
