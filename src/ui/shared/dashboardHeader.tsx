"use client";
import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import DashboardSidebar from "./dashboardSidebar";
import logo from "../../../public/admin/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect } from "react";
import useProfileData from "@/app/customHooks/profiledata";
import { useRouter } from "next/navigation";

const StyledLogoLink = styled(Link)({
  borderBottom: "1px solid #1d1d2000",
  display: "block",
  padding: 15,
  height: "74px",
});

const StyledTextHeaderBox = styled(Box)({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  "@media(max-width:900px)": {
    display: "none",
  },
});

const DashboardHeader = () => {
  const router = useRouter();
  const { profileData } = useProfileData();

  useEffect(() => {
    if (profileData && profileData?.role !== "ADMIN") {
      router.push("/dashboard");
    }
  }, [profileData]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        height: "60px",
        position: "sticky",
        backgroundColor: "#0071CE",
        zIndex: "100",
        top: "0px",
        "@media(max-width:900px)": {
          padding: "10px 20px",
          flexDirection: "row-reverse",
        },
      }}
    >
      <Box
        sx={{
          display: "none",
          "@media(max-width:900px)": { display: "block" },
        }}
      >
        <DashboardSidebar />
      </Box>
      <Box>
        <StyledLogoLink href={"/"}>
          <Image src={logo} alt={""} />
        </StyledLogoLink>
      </Box>
      <StyledTextHeaderBox>
        <Typography fontSize={20} fontWeight={300} color={"#fff"}>
          Welcome to Walmart Dashboard!
        </Typography>
      </StyledTextHeaderBox>
      <Box sx={{ "@media(max-width:900px)": { display: "none" } }}>
        <Link href={"/admin/profile"}>
          <IconButton>
            <PersonIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
