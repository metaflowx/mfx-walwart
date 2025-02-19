"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import MovieCard from "@/ui/dashboard/MovieCard";
export default function page() {
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
    <div>
      <img src="/images/rating/rating.png" className="w-full" />

      <div className="text-[#110229] pl-5 text-[18px] font-[400] space-y-3 pt-3 ">
        <p>Type：Trailer</p>
        <p>Director：Noah Luke</p>

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

        <button className="border border-[#0071CE] rounded-[12px] h-[50px] w-[322px] ">
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
