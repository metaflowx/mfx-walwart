"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Stack, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface CountdownProps {
  targetDate: string;  
}


const useStyles = makeStyles({
  timeBox: {
    backgroundColor: "#0071CE",
    padding: "12px",
    borderRadius: "8px",
    minWidth: "60px",
    textAlign: "center",
    color:'#fff',
    width:'80px',
    height:'80px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    '@media(max-width : 600px)':{
      width:'70px',
      height:'70px',
    }
  },
   
});

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const classes = useStyles();  

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const diff = target - now;

    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };

    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / (1000 * 60)) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
     
       
        <Stack direction="row" spacing={2} justifyContent="center" >
          <Box className={classes.timeBox}>
            <TimeBox label="Days" value={timeLeft.d} />
          </Box>
          <Box className={classes.timeBox}>
            <TimeBox label="Hours" value={timeLeft.h} />
          </Box>
          <Box className={classes.timeBox}>
            <TimeBox label="Min" value={timeLeft.m} />
          </Box>
          <Box className={classes.timeBox}>
            <TimeBox label="Sec" value={timeLeft.s} />
          </Box>
        </Stack>
         
       
  );
};

const TimeBox: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <Stack direction="column" alignItems="center" >
    <Typography variant="h4" fontWeight="bold">
      {String(value).padStart(2, "0")}
    </Typography>
    <Typography  variant="body2" color={'#fff'}>
      {label}
    </Typography>
  </Stack>
);

export default Countdown;
