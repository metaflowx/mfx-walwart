"use client";

import { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const TimeBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#0071CE",
  padding: "12px",
  borderRadius: "8px",
  minWidth: "60px",
  textAlign: "center",
  color: "#fff",
  width: "80px",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "70px",
    height: "70px",
  },
}));

const Countdown: React.FC = () => {
  // Declare state to check if it's running client-side
  const [isClient, setIsClient] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  // Function to get the time from cookies
  const getTimeFromCookies = (): number => {
    if (typeof document !== "undefined") {
      const cookie = document.cookie.split("; ").find(row => row.startsWith("countdownTime="));
      if (cookie) {
        const value = cookie.split("=")[1];
        return parseInt(value, 10);
      }
    }
    return 0;
  };

  // Function to set the time in cookies
  const setTimeInCookies = (time: number) => {
    if (typeof document !== "undefined") {
      document.cookie = `countdownTime=${time}; path=/; max-age=${60 * 60 * 24}`; // 1 day expiry
    }
  };

  // Calculate time left based on saved cookies or new 24-hour target
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const savedTime = getTimeFromCookies();

    if (savedTime > 0) {
      const diff = savedTime - now;

      if (diff <= 0) {
        // If countdown ends, reset the time
        const newTarget = now + 24 * 60 * 60 * 1000; // New 24-hour target
        setTimeInCookies(newTarget); // Save new target time to cookies
        return { d: 0, h: 0, m: 0, s: 0 };
      }

      return {
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60),
      };
    }

    // If no valid time, set a new 24-hour target
    const newTarget = now + 24 * 60 * 60 * 1000;
    setTimeInCookies(newTarget); // Save new target time to cookies
    return { d: 0, h: 0, m: 0, s: 0 }; // Return initial countdown state
  };

  useEffect(() => {
    // Mark as client-side once the component mounts
    setIsClient(true);

    // Calculate initial time
    const initialTime = calculateTimeLeft();
    setTimeLeft(initialTime);

    // Set interval to update time every second
    const interval = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // If it's still rendering on the server, return null to avoid rendering issues
  if (!isClient) {
    return null; // Optionally return a loading spinner or placeholder
  }

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <TimeBox>
        <TimeDisplay label="Hours" value={timeLeft.h} />
      </TimeBox>
      <TimeBox>
        <TimeDisplay label="Min" value={timeLeft.m} />
      </TimeBox>
      <TimeBox>
        <TimeDisplay label="Sec" value={timeLeft.s} />
      </TimeBox>
    </Stack>
  );
};

const TimeDisplay: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <Stack direction="column" alignItems="center">
    <Typography variant="h4" fontWeight="bold">
      {String(value).padStart(2, "0")}
    </Typography>
    <Typography variant="body2" color={'#fff'}>
      {label}
    </Typography>
  </Stack>
);

export default Countdown;
