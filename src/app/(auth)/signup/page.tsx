"use client";
import CommonTab from "@/components/ui/CommonTab";
import { Button, Container, Grid2 } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function Login() {
  const [activeTab, setActiveTab] = useState("email");

  const [formData, setFormData] = useState({
    email: "",
    refCode: "",
    loginPassword: "",
    securityPassword: "",
    mobileNumber: "",
  });

  const tabList = [
    {
      name: "Email",
      value: "email",
    },
    {
      name: "Mobile",
      value: "mobile",
    },
  ];
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handlePhoneChange = (value:any) => {
    setFormData((prev) => ({ ...prev, mobileNumber: value }));
  };
  return (
   
      <Container maxWidth='md'>

      <h2 className="text-black text-[22px] md:text-[32px] font-[600] text-center py-10">
        Create Account
      </h2>

      <CommonTab
        tabList={tabList}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <Grid2 container spacing={2} pt={3} >
        <Grid2 size={{ xs: 6 }}>
          {activeTab==="email" ? (

            <input
            type="email"
            name="email"
            onChange={handleChange}
              className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3"
              placeholder="Email"
            />
          ):(
            <PhoneInput
            country={"us"}
            value={formData.mobileNumber}
            onChange={handlePhoneChange}
            inputClass="!w-full"
            containerClass="!w-full"
             inputStyle={{
              height:"50px",
              border:"1px solid #DCDCEB",
              borderRadius:"8px",
              color:"#000"
             }}
          />
        )}
      
          
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <input
           type="number"
           name="refCode"
           onChange={handleChange}
            className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3"
            placeholder="97767"
          />
        </Grid2>

        <Grid2 size={{ xs: 6 }}>
          <input
           type="password"
           name="loginPassword"
           onChange={handleChange}
            className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3"
            placeholder="Login password"
          />
        </Grid2>

        <Grid2 size={{ xs: 6 }}>
          <input
           type="password"
           name="securityPassword"
           onChange={handleChange}
            className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3"
            placeholder="Security password"
          />
        </Grid2>
      </Grid2>

      <div className="flex justify-center items-center pt-8">
      <button type="submit" className=" bg-[#0071CE] w-[150px] h-[50px] rounded-[50px] ">
        Register
      </button>
      </div>

      <div className="space-y-4 text-sm text-center pt-4">
        <p className="text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
        <p className="text-gray-500 text-xs">
          By registering, you agree to our{" "}
          <Link href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
      </Container>

     

     
    
  );
}
