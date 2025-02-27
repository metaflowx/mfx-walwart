import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MemberList() {
  const router = useRouter();

  const listData = [
    {
      title: "VIP 1",
      des: "Congratulations to +96****55 for unlocking and directly inviting 24 people.",
    },
    {
      title: "VIP 2",
      des: "Kudos to +97****99 for achieving a new milestone and inviting 30 people.",
    },
    {
      title: "VIP 3",
      des: "Congratulations to +96****55 for unlocking and directly inviting 24 people.",
    },
    {
      title: "VIP 4",
      des: "Kudos to +97****99 for achieving a new milestone and inviting 30 people.",
    },
    {
      title: "VIP 5",
      des: "Congratulations to +96****55 for unlocking and directly inviting 24 people.",
    },
    {
      title: "VIP 6",
      des: "Kudos to +97****99 for achieving a new milestone and inviting 30 people.",
    },
    {
      title: "VIP 7",
      des: "Congratulations to +96****55 for unlocking and directly inviting 24 people.",
    },
    {
      title: "VIP 8",
      des: "Kudos to +97****99 for achieving a new milestone and inviting 30 people.",
    },
    {
      title: "VIP 9",
      des: "Congratulations to +96****55 for unlocking and directly inviting 24 people.",
    },
    {
      title: "VIP 10",
      des: "Kudos to +97****99 for achieving a new milestone and inviting 30 people.",
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
          mt: 5,
         
        }}
      >
        Member List
      </Typography>

      <Box
        sx={{
          // border: "1px solid #DCDCEB",
          borderRadius: "30px",
          padding: "15px",
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
            padding: "15px",
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
