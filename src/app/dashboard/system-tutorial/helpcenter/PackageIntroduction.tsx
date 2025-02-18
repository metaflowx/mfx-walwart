import { Box, Grid2 } from "@mui/material";
import React from "react";

export default function PackageIntroduction() {
    const dataList =[
        {
         title:   "💼 VIP1",
value:" Investment: 9 USDT",
value1:"Daily Income: 1.88 USDT",
value2:"Total Income: 225.6 USDT"
        },
        {
            title:   "💼 VIP2",
   value:" Investment: 9 USDT",
   value1:"Daily Income: 1.88 USDT",
   value2:"Total Income: 225.6 USDT"
           },
           {
            title:   "💼 VIP3",
   value:" Investment: 9 USDT",
   value1:"Daily Income: 1.88 USDT",
   value2:"Total Income: 225.6 USDT"
           },
           {
            title:   "💼 VIP4",
   value:" Investment: 9 USDT",
   value1:"Daily Income: 1.88 USDT",
   value2:"Total Income: 225.6 USDT"
           },
           {
            title:   "💼 VIP1",
   value:" Investment: 9 USDT",
   value1:"Daily Income: 1.88 USDT",
   value2:"Total Income: 225.6 USDT"
           },
           {
               title:   "💼 VIP2",
      value:" Investment: 9 USDT",
      value1:"Daily Income: 1.88 USDT",
      value2:"Total Income: 225.6 USDT"
              },
              {
               title:   "💼 VIP3",
      value:" Investment: 9 USDT",
      value1:"Daily Income: 1.88 USDT",
      value2:"Total Income: 225.6 USDT"
              },
              {
               title:   "💼 VIP4",
      value:" Investment: 9 USDT",
      value1:"Daily Income: 1.88 USDT",
      value2:"Total Income: 225.6 USDT"
              },
              {
                title:   "💼 VIP3",
       value:" Investment: 9 USDT",
       value1:"Daily Income: 1.88 USDT",
       value2:"Total Income: 225.6 USDT"
               },
               {
                title:   "💼 VIP4",
       value:" Investment: 9 USDT",
       value1:"Daily Income: 1.88 USDT",
       value2:"Total Income: 225.6 USDT"
               },
    ]
  return (
    <Box>
      <h3 className="text-[#110229] font-[500] text-[24px] ">VIP package</h3>
      <p className="text-[#110229] font-[400] text-[18px] pt-2">
        WALMART VIP Membership Plans – Unlock Exclusive Rewards! 💎🚀 At WALMART
        (Assaulted Caramel Productions, Inc.), we offer a range of VIP
        Membership Plans designed to suit every investor's needs. Whether you're
        starting small or aiming for high returns, our VIP packages provide
        stable, guaranteed income and unlock the path to financial growth.
      </p>
      <p className="text-[#110229] font-[400] text-[18px] ">
        What Are WALMART VIP Plans? Our VIP Levels are structured investment
        packages that allow you to earn daily passive income with guaranteed
        returns. From as little as 9 USDT, you can start earning and scale your
        income as you upgrade to higher VIP levels. VIP Levels and Benefits
      </p>

      <Grid2 container spacing={3} py={3} >

        {dataList.map((item,index)=>{
            return(
                <Grid2 size={{
                    xs:6,sm:4,md:3
                }} >

                    <Box sx={{
                        border: "1.5px solid #DCDCEB",
                        borderRadius:"11px",
                        padding:"10px"
                    }} >

                        <h3>{item.title}</h3>
                        <h3>{item.value}</h3>

                        <h3>{item.value1}</h3>

                        <h3>{item.value2}</h3>


                    </Box>

                </Grid2>
            )
        })}

      </Grid2>

      <h3 className="text-[#110229] font-[500] text-[24px] ">
        Why Choose WALMART VIP Membership?
      </h3>
      <p className="text-[#110229] font-[400] text-[18px] pt-2">
        🌟 Daily Passive Income <br />
        Earn guaranteed income every day based on your chosen VIP level. <br />
        🔓 Unlock Higher Rewards <br />
        As you upgrade to higher VIP levels, your daily income and total returns
        grow significantly. <br />
        💵 Flexible Entry Points <br />
        With packages starting at just 9 USDT, our VIP plans are accessible to
        everyone. <br />
        💸 Fast Withdrawals <br />
        Withdraw your earnings quickly and securely through USDT (TRC20/BEP20)
        or other supported cryptocurrencies. <br />
        How to Get Started? <br />
        1️. Choose Your VIP Level: Choose the plan that best suits your
        investment goals. <br />
        2️. nvest: Deposit the required amount and start earning immediately.{" "}
        <br />
        3️. Upgrade Anytime: Scale up to higher VIP levels as you grow your
        wealth. Maximize Your Earnings with WALMART! <br />
        WALMART’s VIP Membership Plans are designed to provide stable, reliable
        income while offering the flexibility to grow at your own pace. Whether
        you're a beginner or a seasoned investor, there's a VIP level for you!{" "}
        <br />
        💼 Join WALMART today and start earning with our VIP Membership Plans!
        🚀
      </p>
    </Box>
  );
}
