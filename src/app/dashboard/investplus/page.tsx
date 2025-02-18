"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Headphones, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Box, Grid2 } from "@mui/material";
import CommonBackButton from "@/components/ui/CommonBackButton";

export default function Home() {
  const investmentPlans = [
    {
      title: "Walmart Fund 120 days",
      returnRate: "20.00%",
      minAmount: "50000 USDT",
      duration: "120 Days",
      interest: "2500%",
      vipLevel: "VIP 0 or above",
    },
    {
      title: "Walmart Fund 90 days",
      returnRate: "16.00%",
      minAmount: "5001 USDT",
      duration: "90 Days",
      interest: "1540%",
      vipLevel: "VIP 0 or above",
    },
    {
      title: "Walmart Fund 60 days",
      returnRate: "13.00%",
      minAmount: "501 USDT",
      duration: "60 Days",
      interest: "880%",
      vipLevel: "VIP 0 or above",
    },
    {
      title: "Walmart Fund 30 days",
      returnRate: "12.00%",
      minAmount: "2 USDT",
      duration: "30 Days",
      interest: "460%",
      vipLevel: "VIP 0 or above",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="w-full">
        <CommonBackButton title="InvestPlus" />

        {/* Hero Section */}
        <div className="relative mb-8 pt-2 ">
          <img src="/images/invest/investbg.png" className="w-full" />
         
            <div className="absolute bottom-[-80px] left-6">
              <img src="/images/invest/invest-icon.png" />
            </div>
            <div style={{
              boxShadow: "-11px 20px 24px 0px #00000026"

            }} className="border border-[#DCDCEB] absolute bottom-[-30px] right-4 bg-white px-4 py-3 rounded-lg">
              <span className="text-[#0071CE] font-[500] text-[20px] md:text-[30px] ">
                Investment Record
              </span>
            </div>
         
        </div>

        {/* Description */}
        <div className="mb-8 pt-[80px] ">
          <h2 className="text-[20px] md:text-[50px] font-[700] text-[#0071CE]  mb-4">
            Walmart: Your Trusted Shopping Destination!
          </h2>
          <p className="text-[#110229] text-[18px] font-[400] mb-4">
            Welcome to Walmart, where shopping is simple, affordable, and
            convenient. Whether you&apos;re looking for daily essentials or the
            latest deals, Walmart offers unbeatable prices and a seamless
            shopping experience. ⭐
          </p>

          <h3 className="text-[18px] md:text-[30px] font-bold text-[#0071CE] mb-4">
            Why Choose Walmart?
          </h3>
          <ul className="space-y-2 text-[#110229] text-[18px]">
            <li className="flex text-[#110229] text-[18px] font-[700] items-center">
              ✓ Everyday Low Prices
            </li>
            <li className="font-[400]">
              Enjoy budget-friendly shopping with Walmart&apos;s commitment to
              affordable pricing.
            </li>
            <li className="flex text-[#110229] text-[18px] font-[700] items-center">
              ✓ Wide Product Selection
            </li>
            <li className="font-[400]">
              From groceries to electronics, clothing to home essentials –
              everything you need in one place.
            </li>
            <li className="flex text-[#110229] text-[18px] font-[700] items-center">
              ✓ Easy & Convenient Shopping
            </li>
            <li className="font-[400]">
              Shop in-store, online, or through the Walmart app for a
              hassle-free experience.
            </li>
            <li className="flex text-[#110229] text-[18px] font-[700] items-center">
              ✓ Fast & Reliable Delivery
            </li>
            <li className="font-[400]">
              Get your orders delivered quickly, or choose curbside pickup for
              ultimate convenience.
            </li>
          </ul>
        </div>

        {/* Investment Plans */}
        <div>
          <h2 className="text-[20px] text-[#0071CE] md:text-[40px] font-[700] mb-6">
            Optional products
          </h2>
          <Grid2 container spacing={3}>
            {investmentPlans.map((plan, index) => (
              <Grid2 key={index} size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={{
                    border: "1.5px solid #DCDCEB",
                    borderRadius: "30px",
                    padding: "20px",
                    height: "100%",
                    "&:hover": {
                      border: "1px solid #1DAEFF",
                      boxShadow: "0px 17px 50px 0px #8F90A652",
                    },
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[24px] font-[700] text-[#110229] ">
                        {plan.title}
                      </h3>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-[#0071CE] text-[22px] font-[400] ">
                        Daily return rate:
                      </span>
                      <span className="text-[#0071CE] text-[22px] font-[700]">
                        {plan.returnRate}
                      </span>
                    </div>
                    <div className="text-sm text-[#110229] text-[21px] pt-[10px] space-y-5 ">
                      <p>{plan.vipLevel}</p>
                      <p>
                        Minimum Investment amount :{" "}
                        <span className="font-[700]">{plan.minAmount}</span>{" "}
                      </p>
                      <p>
                        Investment period :{" "}
                        <span className="font-[700]">{plan.duration}</span>{" "}
                      </p>
                      <p>
                        Interest daily,principal on maturity:{" "}
                        <span className="font-[700]">{plan.interest}</span>{" "}
                      </p>
                    </div>
                    <Button className="w-full bg-transparent border border-[#0071CE] text-[#0071CE] hover:text-white rounded-[11px] text-[20px] font-[700] hover:bg-[#0071CE] h-[60px] ">
                      Invest Now
                    </Button>
                  </div>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </div>
      </div>
    </main>
  );
}
