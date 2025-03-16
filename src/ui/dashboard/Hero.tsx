import { Box, Hidden } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <Box sx={{ width: '100%', borderRadius: '16px', overflow: 'hidden', mt: 2 }}>
      
        <Hidden smUp >

        <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        loop={true} 
        slidesPerView={1}

        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {[1, 2, 3].map((index) => (
          <SwiperSlide key={index}>
         
  <img 
    src={`/images/home/${index}.jpg`} 
    alt={`Slide ${index}`} 
    style={{ width: '100%', height: '400px',  borderRadius: "10px" }} 
  />



          </SwiperSlide>
        ))}
      </Swiper>

        </Hidden>
     
     


      <div className="hidden sm:block">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        loop={true} 
        slidesPerView={1}

        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {[1, 2, 3].map((index) => (
          <SwiperSlide key={index}>
          


  <img 
    src={`/images/home/${index}.jpeg`} 
    alt={`Slide ${index}`} 
    style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: "10px" }} 
  />

          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      
    </Box>
  );
};

export default Hero;
