import MarqueHeader from "@/components/marketing/MarqueHeader";
import Navbar from "@/components/marketing/navbar";
import { Card } from "@/components/ui/card";
import { Box, Grid2, Typography } from "@mui/material";
import { Copy } from "lucide-react";
import React from "react";
import Procmp from "./procmp";


export default function Profile() {
  return (
    <>
      <Box>
        <Navbar />
        <Procmp/>
      </Box>
    </>
  );
}
