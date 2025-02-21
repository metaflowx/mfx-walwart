import "../../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Topheader from "@/ui/shared/topheader";
import { Container } from "@mui/material";
import MobileFooter from "@/components/marketing/mobileFooter";

const prompt = Inter({
  subsets: ["latin"], // Optional
  weight: "400", // Optional
});
export const metadata: Metadata = {
  title: "Walmart Dashboard",
  description: "Walmart Dashboard",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersObj = await headers();
  const cookies = headersObj.get("cookie");
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${prompt.className} `}>
        <Topheader />
        <div className="dsboard w-full">
          <Container
            maxWidth="xl"
            className="flex-1  py-8 pt-[50px]  overflow-y-auto min-h-screen  "
          >
            {children}
          </Container>
        </div>

        <Container maxWidth="xl"></Container>
        <MobileFooter />
      </body>
    </html>
  );
}
