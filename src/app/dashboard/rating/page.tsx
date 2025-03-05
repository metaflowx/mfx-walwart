"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import MovieCard from "@/ui/dashboard/MovieCard";
import { ChevronLeft } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import { CircularProgress, Rating } from "@mui/material";
import { toast } from "react-toastify";
import taskListData from "@/app/customHooks/taskList";
export default function page() {
  const {taskList,loading}=taskListData()
  const search =useSearchParams()
  const [taskDetails,setTaskDetails]=useState<any>("")
  const[isLoading,setIsLoading]=useState(false)
  const[ratingStar,setRatingStar]=useState(0)
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

  const getTaskDetails = async(id:any)=>{
    try {

      const res = await apiRouterCall({
        method:"GET",
        endPoint:"task",
        id:id
      })

      if(res?.status===200){
        setTaskDetails(res.data.task)


      }
      
    } catch (error) {
      
    }
  }
  useEffect(() => {
    const taskId=search.get("id")
    getTaskDetails(taskId)
  }, [search.get("id")])

  const reviewHandler = async()=>{
    try {
      setIsLoading(true)
      const id:any=search?.get("id")
      const res = await apiRouterCall({
        method:"POST",
        endPoint:"review",
        id:id,
        data:{
          rating:ratingStar
        }
      })
      if(res?.status===200){
        toast.success(res.data.message)
        setIsLoading(false)
        setRatingStar(0)
      }else{
      
        toast.error(res?.data.message)
      }
   
      
      setIsLoading(false)
    } catch (error:any) {
     
      
      toast.error(error.response.data.message)
      setIsLoading(false)
      
    }
  }

  const filterData= useMemo(() => {
    const taskId=search.get("id")
    const filterMoviewData = taskList && taskList.filter((item:any,index)=>{
      return item?._id!==taskId
    })
    return filterMoviewData
    
  }, [taskList,search.get("id")])
  

  return (
    <div className="relative" >
      <div onClick={()=>router.back()} className="cursor-pointer left-[20px] top-[20px] absolute flex justify-center items-center bg-[#E8F7FF] h-[40px] w-[40px] border border-[#E8F7FF] rounded-full ">

        <ChevronLeft color="#000" />

      </div>
      <img src={taskDetails.image} className="w-full" style={{height:"400px",borderRadius:"20px",objectFit:"cover"}} />

      <div className="text-[#110229] pl-5 text-[18px] font-[400] space-y-3 pt-3 ">
        <div>
        <p>Type：{taskDetails?.type }</p>
      
        </div>

        <h3 className=" font-[700] ">{taskDetails?.title
        }</h3>
        <p>
        {taskDetails?.description
        }
        </p>

        <Rating 
        disabled={isLoading}
        value={ratingStar}
        onChange={(event, newValue:any) => {
          setRatingStar(newValue);
        }}
         />

        <div>
        <button disabled={isLoading} onClick={()=>reviewHandler()} className="border border-[#0071CE] text-[#0071CE] text-[16px] font-[600] rounded-[12px] h-[50px] w-[322px] ">
       {isLoading ? <CircularProgress size={24} style={{color:"#000"}} />:"Rating immediately" }   
        </button>
        </div>

        
      </div>
    

      <h3 className="text-[#0071CE] text-[20px]  md:text-[40px] font-[700] py-3 ">
        Related Recommendations
      </h3>

      <MovieCard products={filterData} loading={loading} />
    </div>
  );
}
