import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Box, Container, Grid2 } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import DashboardHeader from "@/ui/shared/dashboardHeader";
import Sidebardb from "@/ui/adminui/sidebardb";
const prompt = Inter({
  subsets: ["latin"], 
  weight: "400", 
});
export const metadata: Metadata = {
  title: "Walmart Admin Dashboard",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${prompt.className} `}>
        <ToastContainer />
        <DashboardHeader />
        <Grid2 container spacing={0}>
          <Grid2 size={{ lg: 1.5, md: 2.5, sm: 12, xs: 12 }}>
            <Box sx={{ "@media(max-width : 900px)": { display: "none" } }}>
              <Sidebardb />
            </Box>
          </Grid2>

          <Grid2 size={{ lg: 10.5, md: 9.5, sm: 12, xs: 12 }}>{children}</Grid2>
        </Grid2>
      </body>
    </html>
  );
}
