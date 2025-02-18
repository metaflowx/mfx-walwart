import CommonBackButton from "@/components/ui/CommonBackButton";
import { Grid2 } from "@mui/material";
import React from "react";

export default function page() {
  const list = [
    {
      title: "Yesterday's earnings",
      value: "0.00",
    },
    {
      title: "Yesterday's earnings",
      value: "0.00",
    },
    {
      title: "Yesterday's earnings",
      value: "0.00",
    },
  ];
  return (
    <div>
      <CommonBackButton title="Invest Record" />

      <div
        style={{
          background: "url(/images/invest/investbg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        
        className="p-6 h-[100%] mt-5 min-h-[333px] rounded-[24px] relative mb-8 pt-2 "
      >
        <div className="flex justify-center items-center">
          <div className="text-center pt-[25px]">
            <h3 className="text-[30px] font-[400] text-white " >My total investment</h3>
            <h2 className="text-[50px] font-[700] text-white " > 0 USDT</h2>
          </div>
        </div>

       
          <Grid2 container spacing={3} mt={5} >
            {list.map((item) => {
              return (
                <Grid2 size={{ xs: 4 }}>
                  <div className="h-[100%]" >
                    <div className="text-center text-[30px] text-white" >
                      <h4 className="font-[700]">{item.value}</h4>
                      <h4 className="font-[300]">{item.title}</h4>
                    </div>
                  </div>
                </Grid2>
              );
            })}
          </Grid2>
        </div>

        <div className="pt-3 pb-6" >

            <button className="bg-[#0071CE] border border-[#0071CE] rounded-[51px] text-white w-[174px] text-[20px] font-[700] h-[70px] " >In progress</button>
            <button className="pl-6 rounded-[51px] text-[20px] text-[#0071CE] font-[700] " >Completed</button>


        </div>

        <div className="border border-[#DCDCEB] rounded-[20px] flex h-[400px] justify-center items-center " >

            <img src="/images/invest/nodatafound.png" />

        </div>


    
    </div>
  );
}
