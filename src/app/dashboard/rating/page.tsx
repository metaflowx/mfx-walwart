"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import MovieCard from "@/ui/dashboard/MovieCard";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter()
  const products = [
    {
      title: "Róise & Frank",
      views: "51,944 views",
      image: "/images/home/mov1.png",
    },
    {
      title: "Róise & Frank",
      views: "51,944 views",
      image: "/images/home/mov2.png",
    },
    {
      title: "Róise & Frank",
      views: "51,944 views",
      image: "/images/home/mov3.png",
    },
    {
      title: "Róise & Frank",
      views: "51,944 views",
      image: "/images/home/mov1.png",
    }, // Added extra product for testing
    {
      title: "Róise & Frank",
      views: "51,944 views",
      image: "/images/home/mov2.png",
    }, // Added extra product for testing
  ];
  return (
    <div className="relative" >
      <div onClick={()=>router.back()} className="cursor-pointer left-[20px] top-[20px] absolute flex justify-center items-center bg-[#E8F7FF] h-[40px] w-[40px] border border-[#E8F7FF] rounded-full ">

        <ChevronLeft color="#000" />

      </div>
      <img src="/images/rating/rating.png" className="w-full" />

      <div className="text-[#110229] pl-5 text-[18px] font-[400] space-y-3 pt-3 ">
        <div>
        <p>Type：Trailer</p>
        <p>Director：Noah Luke</p>
        </div>

        <h3 className=" font-[700] ">Róise & Frank</h3>
        <p>
          Thor's villainous uncle Loki has escaped Asgard to search for
          Yggdrasil - The Tree of the Nine Realms. The tree holds the power of
          the Universe and is hidden away on Earth. With the help of giant wolf
          god Fenrir, Loki plans to destroy the tree and replant it in his
          image, giving him dominion over all. Now Thor must follow Loki to
          Earth to wage an epic battle that will hold the two worlds in its
          balance.
        </p>

        <button className="border border-[#0071CE] text-[#0071CE] text-[16px] font-[600] rounded-[12px] h-[50px] w-[322px] ">
          Rating immediately
        </button>
      </div>

      <h3 className="text-[#0071CE] text-[20px]  md:text-[40px] font-[700] py-3 ">
        Related Recommendations
      </h3>

      <MovieCard products={products} />
    </div>
  );
}
