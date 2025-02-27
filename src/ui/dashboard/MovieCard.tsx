"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid2,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Cardcmp from "./cardcmp";
import CommonCardSkeltonLoader from "@/components/ui/CommonCardSkeltonLoader";
export default function MovieCard({
  products,
  loading,
}: {
  products?: any;
  loading: boolean;
}) {
  const router = useRouter();
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation={false}
      modules={[Autoplay]}
      loop={true}
      breakpoints={{
        1200: { slidesPerView: 3 },
        900: { slidesPerView: 2 },
        200: { slidesPerView: 1 },
      }}
    >
      {loading ? (
        Array.from(new Array(5)).map((_, index) => (
          <SwiperSlide key={index} style={{ height: "100%" }}>
             <CommonCardSkeltonLoader />
            </SwiperSlide>
         
        ))
      ) : (
        <>
          {products.map((product: any, index: number) => (
            <SwiperSlide key={index} style={{ height: "100%" }}>
              <Cardcmp product={product} />
            </SwiperSlide>
          ))}
        </>
      )}
    </Swiper>
  );
}
