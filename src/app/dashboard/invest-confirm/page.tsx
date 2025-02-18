import CommonBackButton from "@/components/ui/CommonBackButton";
import { Box, Grid2 } from "@mui/material";
import React from "react";

export default function page() {
    const dataList = [
        {
          title: "Project:",
          value: "Walmart Fund 120 days",
        
        },
        {
          title: "Daily return rate:",
          value: "20.00%",
          
        },
        {
          title: "Investment period:",
          value: "120 Days",
       
        },
        {
            title: "Interest daily,principal on maturity:",
            value: "120 Days",
         
          },
      ];
  return (
    <div>
      <CommonBackButton title="Invest Confirm" />

      <Box mt={4}>
       
          <label className="text-[#000000] text-[18px] font-[400] pb-1 ">
            Investment amount
          </label>
          <input
            placeholder="Please enter the investment amount"
            className="border border-[#DCDCEB] rounded-[12px] w-full h-[60px] pl-2 "
          />

          <Box py={2} >
            <h3 className="text-[#0071CE] text-[30px] font-[700] " >List of investment projects</h3>
          </Box>


            <Grid2 sx={{
                border: "1px solid #DCDCEB",
                borderRadius:"12px",
                padding:"20px"
            }} container spacing={2} mt={3} mb={2}>
                        {dataList.map((item) => {
                          return (
                            <Grid2 size={{ xs: 12 }}>
                              <div className="flex justify-between items-center text-right">
                                <div>
                                  <h2 className="text-black font-[400] text-[20px] ">
                                    {item.title}
                                  </h2>
                                </div>
                                <div>
                                  <h2 className="text-black font-[500] text-[20px] ">
                                    {item.value}
                                  </h2>
                                 
                                </div>
                              </div>
                            </Grid2>
                          );
                        })}
                      </Grid2>

                      <div className="pt-5">
                      <button className="w-full text-white text-[20px] font-[700] rounded-[11px] bg-[#0071CE] border border-[#0071CE] h-[58px] " >Confirm</button>
                      </div>


       
      </Box>
    </div>
  );
}
