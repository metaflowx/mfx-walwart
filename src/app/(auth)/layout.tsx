import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import { Box, Grid2 } from "@mui/material";
import { headers } from "next/headers";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = async ({ children }: Props) => {
  return (
    <div className="w-full">
      <ToastContainer />
      <Navbar />
      <main className="mx-auto w-full z-40 relative px-4 md:px-12 py-6">
        <div className="border border-[#0071CE] rounded-[40px] pb-4 lg:pb-0 ">
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <div className="bg-[#E8F7FF] flex justify-center items-center rounded-[42px]">
                <div className="text-center pb-8">
                  <img src="/images/auth/authbg.png" />
                  <h3 className="text-black text-[20px] md:text-[40px] font-[600]">
                    Welcome Back
                  </h3>
                  <h3 className="text-black text-[14px] md:text-[16px] font-[500] pb-5">
                    To keep connected with us please <br />
                    login with your personal info
                  </h3>

                  <button className="border border-[#000000] text-[#000000] rounded-[50px] h-[29px] w-[86px] ">
                    Sign in
                  </button>
                </div>
              </div>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>{children}</Grid2>
          </Grid2>
        </div>
      </main>
    </div>
  );
};

export default MarketingLayout;
