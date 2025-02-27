"use client";
import CommonBackButton from "@/components/ui/CommonBackButton";
import { Box, Grid2, Typography } from "@mui/material";
import React, { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("trc20");

  const tabs = [
    { name: "TRC20-USDT", value: "trc20" },
    { name: "BEP20-USDT", value: "bep20" },
  ];

  const dataList = [
    {
      title: "Fee :",
      value: "0 USDT",
      val: "Free Fee Times 1",
    },
    // {
    //   title: "Taxes :",
    //   value: "0 USDT",
    //   val: "",
    // },
    {
      title: "Actual arrival：",
      value: "0 USDT",
      val: "",
    },
  ];

  return (
    <Box>
      <CommonBackButton title="Withdraw" isIcon={true} />

      <Grid2 container spacing={3} mt={4}>
        <Grid2 size={{ xs: 12,  md: 6,lg:3 }}>
          <Box
            mb={3}
            sx={{
              border: "1.5px solid #DCDCEB",
              borderRadius: "20px",
              padding: "10px",
              "&:hover": {
                border: "1px solid #1DAEFF",
                boxShadow: "0px 17px 50px 0px #8F90A652",
              },
            }}
          >
            <Box textAlign="center">
              <Typography
                sx={{
                  color: "#110229",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                0.000000
              </Typography>
              <Typography
                sx={{
                  color: "#110229",
                  fontSize: "20px",
                  fontWeight: 400,
                }}
              >
                Currently available assets(USDT)
              </Typography>
            </Box>
          </Box>
          <img src="/images/withdraw/withdarw.png" style={{ width: "100%" }} />
        </Grid2>
        <Grid2 size={{ xs: 12,  md: 6,lg:9 }}>
          <Box
            sx={{
              border: "1.5px solid #DCDCEB",
              borderRadius: "20px",
              padding: "10px 20px",
              height: "100%",
              "&:hover": {
                border: "1px solid #1DAEFF",
                boxShadow: "0px 17px 50px 0px #8F90A652",
              },
            }}
          >
            <Typography
              sx={{
                color: "#0071CE",
                fontSize: "24px",
                fontWeight: 700,
                paddingBottom: "10px",
              }}
            >
              Select Mainnet
            </Typography>
            {tabs.map((tab, index) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`${index === 1 ? "ml-[10px]" : "ml-0"} ${
                  activeTab === tab.value
                    ? "bg-[#0071CE] text-white border-[#0071CE]"
                    : "bg-[#FFFFFF] text-black border-[#DCDCEB]"
                } h-[60px] rounded-[12px] w-[184px] text-[20px] font-[700] border px-[10px] transition-all duration-300 ease-in-out`}
              >
                {tab.name}
              </button>
            ))}
            <Box pt={2}>
              <label className="text-[#000000] text-[18px] font-[400] pb-1 ">
                Withdrawal address
              </label>
              <input
                placeholder="Please enter or long press to paste the withdrawal address"
                className="border border-[#DCDCEB] rounded-[12px] w-full h-[60px] pl-2 "
              />
            </Box>
            <Box pt={2}>
              <label className="text-[#000000] text-[18px] font-[400] pb-1 ">
                Withdrawal amount
              </label>
             <div className="flex border border-[#DCDCEB] rounded-[12px]">
             <input
                type="number"
                placeholder="Please enter the transfer amount"
                className=" rounded-[12px] w-full h-[60px] pl-2 "
              />
              <button className="text-white text-[20px] w-[110px] font-[700] rounded-[11px] bg-[#0071CE] border border-[#0071CE] h-[58px]">
Max
              </button>
             </div>
              <h3 className="text-[#0071CE]">
                Minimum withdrawal amount：1.800USDT Maximum withdrawal
                amount：1000000.00USDT
              </h3>
            </Box>

            <Box pt={2}>
              <label className="text-[#000000] text-[18px] font-[400] pb-1 ">
                Security password
              </label>
              <input
                placeholder="Security password"
                className="border border-[#DCDCEB] rounded-[12px] w-full h-[60px] pl-2 "
              />
            </Box>

            <Grid2 container spacing={2} mt={3} mb={2}>
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
                        <h2 className="text-black font-[400] text-[20px] ">
                          {item.value}
                        </h2>
                        <h2 className="text-black font-[400] text-[16px] ">
                          {item.val}
                        </h2>
                      </div>
                    </div>
                  </Grid2>
                );
              })}
            </Grid2>

            <button className="w-full text-white text-[20px] font-[700] rounded-[11px] bg-[#0071CE] border border-[#0071CE] h-[58px] " >Confirm</button>
             <Box sx={{display:"flex",alignItems:"center",pt:2,justifyContent:"center"}} >
                        <img src="/images/coin/info.png" />
                        <Typography sx={{color:"#000000",fontWeight:400,fontSize:"18px",pl:1}} >Warm reminder</Typography>
                    </Box>
                    <h3 className="text-center text-black text-[16px] font-[400] pt-[3px] ">There are no fees for withdrawals. Carefully check the withdrawal wallet address.</h3>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
