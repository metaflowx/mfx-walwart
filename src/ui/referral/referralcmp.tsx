"use client";
import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import AddressCopy from "../shared/addressCopy";
import Image from "next/image";
import qr from "../../../public/profile/qr.svg";
import { useQRCode } from "next-qrcode";
import useProfileData from "@/app/customHooks/profiledata";

export default function Referralcmp() {
  const { profileData, loading } = useProfileData();
  const { Canvas } = useQRCode();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0071CE",

          borderRadius: "12px",
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Box sx={{ padding: "1rem" }}>
              <Box
                sx={{
                  div: {
                    justifyContent: "space-between !important",
                  },
                }}
              >
                <Typography color="#fff" variant="h6">
                  Invitation Code
                </Typography>
                <AddressCopy
                  text={profileData?.referralCode}
                  addresstext={"667520"}
                  hrefLink={""}
                />
              </Box>
              <Box height={25} />

              <Box
                sx={{
                  div: {
                    justifyContent: "space-between !important",
                  },
                }}
              >
                <Typography color="#fff" variant="h6">
                  Invitation Link
                </Typography>
                <AddressCopy
                  text={`${window.location.host}/signup?ref=${profileData?.referralCode}`}
                  addresstext={`${window.location.host}/signup?ref=${profileData?.referralCode}`}
                  hrefLink={`${window.location.host}/signup?ref=${profileData?.referralCode}`}
                />
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2rem",
                borderRadius: "12px",
                border: "1px solid #0071CE",
              }}
            >
              <Box textAlign={"center"}>
                <Typography variant="h5">
                  SCAN <Typography variant="h5"> QR Code</Typography>
                </Typography>
              </Box>
              <Box>
                <Canvas
                  text={`${window.location.host}/signup?ref=${profileData?.referralCode}`}
                  options={{
                    errorCorrectionLevel: "M",
                    margin: 3,
                    scale: 4,
                    width: 200,
                    color: {
                      dark: "#010599FF",
                      light: "#FFBF60FF",
                    },
                  }}
                />
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>

      <Box
        sx={{
          marginTop: "2rem",
        }}
      >
        <Typography
          variant="h3"
          color="#0071CE"
          sx={{ "@media(max-width : 600px)": { fontSize: "24px" } }}
        >
          Welcome to Walmart – Your Partner in Financial Success! 🚀
        </Typography>
        <Typography color="#000">
          Are you ready to maximize your earnings with Walmart? 🌟 Whether
          you're looking for a steady income or opportunities to grow your
          network, Walmart provides a trusted platform for financial success and
          security.
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: "2rem",
        }}
      >
        <Typography variant="h6" color="#0071CE">
          Why Choose Walmart?
        </Typography>
        <Typography color="#000">
          At Walmart, we are committed to helping you achieve financial growth
          through reliable and rewarding opportunities. Our transparent system,
          fast payments, and limitless earning potential make it easier than
          ever to succeed.
        </Typography>
      </Box>

      <Box>
        <Grid2 container spacing={4} sx={{ alignItems: "center" }}>
          <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Box
              sx={{
                border: "1px solid #DCDCEB",
                backgroundColor: "#F7F7F7",
                padding: "1rem",
                borderRadius: "12px",
                boxShadow: "-5px 5px 12px -2px #00000066",
                marginTop: "2rem",
              }}
            >
              <Typography color="#0071CE" variant="h5" fontWeight={700}>
                How Our Referral Program Works
              </Typography>

              <Typography mt={1}>
                <Typography component={"span"} fontWeight={700}>
                  {" "}
                  Level 1 (Direct Referrals) –
                </Typography>{" "}
                Earn a{" "}
                <Typography component={"span"} fontWeight={700}>
                  12% commission
                </Typography>{" "}
                on referrals.Example: If your referral spends $100, you earn{" "}
                <Typography component={"span"} fontWeight={700}>
                  $12
                </Typography>{" "}
                instantly.
              </Typography>

              <Typography mt={1}>
                <Typography component={"span"} fontWeight={700}>
                  {" "}
                  Level 2 –
                </Typography>{" "}
                Earn{" "}
                <Typography component={"span"} fontWeight={700}>
                  5% commission
                </Typography>{" "}
                from second-level referrals.Example: A second-level referral
                spends $100, and you earn{" "}
                <Typography component={"span"} fontWeight={700}>
                  $5
                </Typography>{" "}
                .
              </Typography>

              <Typography mt={1}>
                <Typography component={"span"} fontWeight={700}>
                  {" "}
                  Level 3 (Direct Referrals) –
                </Typography>{" "}
                Earn a{" "}
                <Typography component={"span"} fontWeight={700}>
                  12% commission
                </Typography>{" "}
                on referrals.Example: If your referral spends $100, you earn{" "}
                <Typography component={"span"} fontWeight={700}>
                  $12
                </Typography>{" "}
                instantly.
              </Typography>

             

             
            </Box>
          </Grid2>
          <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Box>
              <Typography color="#0071CE" variant="h5" fontWeight={700}>
                What Makes Walmart Stand Out?
              </Typography>

              <Typography mt={1}>
                <Typography component={"span"} fontWeight={700}>
                  {" "}
                  Multi-Level Referral Program
                </Typography>{" "}
                – Earn commissions at multiple levels.
              </Typography>
              <Typography mt={1}>
                <Typography component={"span"} fontWeight={700}>
                  {" "}
                  Transparent & Trackable Earnings
                </Typography>{" "}
                – Easily monitor your progress.
              </Typography>
              <Typography mt={1}>
                <Typography component={"span"} fontWeight={700}>
                  {" "}
                  Fast & Secure Payments
                </Typography>{" "}
                – Quick and reliable payouts.
              </Typography>
              <Typography mt={1}>
                <Typography component={"span"} fontWeight={700}>
                  {" "}
                  Unlimited Growth Potential
                </Typography>{" "}
                – Earn more as your network expands.
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>

      <Box
        sx={{
          marginTop: "2rem",
        }}
      >
        <Typography color="#0071CE" variant="h5" fontWeight={700}>
          Why Walmart is the Right Choice for You
        </Typography>

        <Typography mt={1}>
          <Typography component={"span"} fontWeight={700}>
            {" "}
            🔹 Simple & User-Friendly
          </Typography>{" "}
          – Ideal for beginners and experienced marketers.
        </Typography>
        <Typography mt={1}>
          <Typography component={"span"} fontWeight={700}>
            {" "}
            🔹 Wide Accessibility
          </Typography>{" "}
          – Share your referral link across social platforms.
        </Typography>
        <Typography mt={1}>
          <Typography component={"span"} fontWeight={700}>
            {" "}
            🔹 Strong Community
          </Typography>{" "}
          – Join a network focused on financial success.
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: "2rem",
        }}
      >
        <Typography color="#0071CE" variant="h5" fontWeight={700}>
          Get Started Today
        </Typography>

        <Typography mt={1}>
          Whether you’re looking to build a team or earn passive income, Walmart
          offers a trusted and rewarding way to grow financially. Share your
          unique referral link and start earning today! 💎
        </Typography>
        <Typography mt={1} fontWeight={700}>
          🔗 Join Walmart Now and Take Charge of Your Financial Future! 🌱
        </Typography>
      </Box>
    </>
  );
}
