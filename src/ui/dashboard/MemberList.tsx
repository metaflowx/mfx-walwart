import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MemberList() {
  const router = useRouter();

  const listData = [
    {
      title: "Sliver",
      des: "Congratulations to +96****55 for unlocking and directly inviting 24 people.",
    },
    {
      title: "Gold",
      des: "Kudos to +97****99 for achieving a new milestone and inviting 30 people.",
    },
    {
      title: "Platinum",
      des: "Congratulations to +95****32 for unlocking and directly inviting 50 people.",
    },
    {
      title: "Sliver",
      des: "Kudos to +99****89 for achieving a new milestone and inviting 3 people.",
    },
    {
      title: "Gold",
      des: "Congratulations to +80****43 for unlocking and directly inviting 4 people.",
    },
    {
      title: "Platinum",
      des: "Kudos to +70****81 for achieving a new milestone and inviting 40 people.",
    },
    {
      title: "Gold",
      des: "Congratulations to +76****34 for unlocking and directly inviting 28 people.",
    },
    {
      title: "Sliver",
      des: "Kudos to +77****23 for achieving a new milestone and inviting 20 people.",
    },
    {
      title: "Platinum",
      des: "Congratulations to +98****24 for unlocking and directly inviting 14 people.",
    },
    {
      title: "Gold",
      des: "Kudos to +91****61 for achieving a new milestone and inviting 10 people.",
    },




    {
      title: "Platinum",
      des: "Kudos to +70****71 for achieving a new milestone and inviting 40 people.",
    },
    {
      title: "Gold",
      des: "Congratulations to +76****24 for unlocking and directly inviting 28 people.",
    },
    {
      title: "Sliver",
      des: "Kudos to +77****25 for achieving a new milestone and inviting 20 people.",
    },
    {
      title: "Platinum",
      des: "Congratulations to +98****44 for unlocking and directly inviting 14 people.",
    },
    {
      title: "Gold",
      des: "Kudos to +91****91 for achieving a new milestone and inviting 10 people.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fade-out effect
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % listData.length); // Move to the next item
        setIsVisible(true); // Fade-in effect
      }, 500); // Short delay before showing the next item
    }, 3000); // Each item is displayed for 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#0071CE",
          fontSize: "24px",
          mt: {xs:0,md:5},
          pb:1
         
        }}
      >
        Member List
      </Typography>

      <Box
        sx={{
          // border: "1px solid #DCDCEB",
          borderRadius: "30px",
          padding: "12px",
          minHeight: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          key={currentIndex}
          // onClick={() => router.push("/dashboard/member-list")}
          sx={{
            border: "1px solid #1DAEFF",
            boxShadow: "0px 17px 50px 0px #8F90A652",
            borderRadius: "15px",
            padding: "12px",
            cursor: "pointer",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            position: "absolute",
            width:"100%",
           
          }}
        >
          <Box
            sx={{
              background: "#FFC220",
              borderRadius: "6px",
              width: "fit-content",
              padding: "10px",
            }}
          >
            <Typography
              sx={{
                color: "#000000",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              {listData[currentIndex].title}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "18px",
              fontWeight: 400,
            }}
          >
            {listData[currentIndex].des}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
