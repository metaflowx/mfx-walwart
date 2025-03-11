import usePackageList from "@/app/customHooks/usePackageList";
import { Box, Grid2 } from "@mui/material";
import React from "react";

export default function PackageIntroduction() {
  const { packageList, loading } = usePackageList();
  return (
    <Box>
       <section className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 rounded-lg">
          <h1 className="text-2xl sm:text-4xl font-semibold mb-4">Welcome to Walmart Inc. – Maximize Your Earnings with Our Exclusive Packages! 💼🚀</h1>
          <p className="text-lg mb-8">
            At Walmart Inc., we are thrilled to offer you the opportunity to increase your wealth with our 9 specially designed membership packages! Whether you’re a beginner or a seasoned investor, our packages are crafted to meet your needs. With each package, you’ll earn daily returns by engaging with Walmart’s ads, promotions, and referral rewards. Start your financial journey with Walmart today and watch your income grow! 💰✨
          </p>
          {/* <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition duration-300">
            Start Earning Now!
          </button> */}
        </section>
     

      <Grid2 container spacing={3} py={3}>
        {packageList &&
          packageList.map((item: any, index) => {
            return (
              <Grid2
                size={{
                  xs: 12,
                  sm: 6,
                  md: 3,
                }}
              >
                <Box
                  sx={{
                    border: "1.5px solid #DCDCEB",
                    borderRadius: "11px",
                    padding: "10px",
                  }}
                >
                  <h3 className="text-[18px] font-[700] ">{item?.name}</h3>
                  <h3>Investment : {item?.amount}USDT</h3>
                  <h3>Daily Earnings : {Number(item?.dailyEarnings)+Number(item?.dailyBonus)}USDT {`(${item?.dailyEarnings }+ ${item?.dailyBonus})`}  {`(${item?.durationInDays}Days)`} </h3>

                  <h3>Total Earnings : {item.totalReturns}USDT</h3>
                  <h3>Bonus : {item?.totalBonus}USDT</h3>
                  <h4> {item?.description}</h4>


                </Box>
              </Grid2>
            );
          })}
      </Grid2>

      <section className="bg-white py-12 mt-16 rounded-lg shadow-lg px-2">
          <h2 className="text-3xl font-semibold text-center mb-6">Why Choose Walmart Inc.? 💡</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start mb-6">
              <span className="text-4xl text-yellow-500 mr-4">💰</span>
              <p className="text-lg">**Guaranteed Daily Earnings**: Enjoy steady, reliable daily returns as you engage with Walmart’s ads and promotions.</p>
            </div>
            <div className="flex items-start mb-6">
              <span className="text-4xl text-yellow-500 mr-4">🎁</span>
              <p className="text-lg">**Amazing Bonuses**: Unlock significant bonuses based on your investment package and stay engaged with the platform.</p>
            </div>
            <div className="flex items-start mb-6">
              <span className="text-4xl text-yellow-500 mr-4">🔒</span>
              <p className="text-lg">**Simple & Secure**: Fast and secure withdrawals with a minimum of just 1.88 USDT!</p>
            </div>
            <div className="flex items-start mb-6">
              <span className="text-4xl text-yellow-500 mr-4">🌐</span>
              <p className="text-lg">**Referral Program**: Earn even more by referring others. Invite your friends and watch your earnings grow across 3 levels of referrals! 👥🎉</p>
            </div>
          </div>
        </section>

        <section className="text-center mt-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Journey with Walmart Inc.? 🌟💼</h2>
          <p className="text-lg mb-8">
            Whether you’re just getting started or you’re ready to go big, our membership packages are designed to help you grow. Start now and discover how Walmart can help you achieve your financial dreams! 🚀💵
          </p>
          {/* <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition duration-300">
            Start Today!
          </button> */}
        </section>

        {/* Note */}
        <section className="mt-8 text-center text-lg text-gray-600">
          <p>
            **Note**: Fast withdrawals, daily earnings, and exclusive access to Walmart’s global promotions—What are you waiting for? Start today! 💡🎉
          </p>
        </section>

    </Box>
  );
}
