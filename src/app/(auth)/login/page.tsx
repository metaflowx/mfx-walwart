"use client";
import CommonTab from "@/components/ui/CommonTab";
import { Button, Container, Grid, Grid2 } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Login() {
  const [activeTab, setActiveTab] = useState("email");
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    loginPassword: "",
    mobileNumber: "",
  });

  useEffect(() => {
    // Load saved credentials if Remember Me was checked
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedPassword = localStorage.getItem("rememberedPassword");
    const savedRememberMe = localStorage.getItem("rememberMe") === "true";

    if (savedRememberMe && savedEmail && savedPassword) {
      setFormData({ email: savedEmail, loginPassword: savedPassword, mobileNumber: "" });
      setRememberMe(true);
    }
  }, []);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value:any) => {
    setFormData((prev) => ({ ...prev, mobileNumber: value }));
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    if (rememberMe) {
      localStorage.setItem("rememberedEmail", formData.email);
      localStorage.setItem("rememberedPassword", formData.loginPassword);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
      localStorage.removeItem("rememberMe");
    }
    console.log("Submitted Data:", formData);
  };

  const tabList = [
    { name: "Email", value: "email" },
    { name: "Mobile", value: "mobile" },
  ];

  return (
    <Container maxWidth="md">
      <h2 className="text-black text-[22px] md:text-[32px] font-[600] text-center py-10">Login</h2>
      <CommonTab tabList={tabList} setActiveTab={setActiveTab} activeTab={activeTab} />
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2} pt={3}>
          <Grid2  size={{xs:12}}>
            {activeTab === "email" ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3 text-black"
                placeholder="Email"
                required
              />
            ) : (
              <PhoneInput
                country={"us"}
                value={formData.mobileNumber}
                onChange={handlePhoneChange}
                inputClass="!w-full"
                containerClass="!w-full"
                inputStyle={{
                  height: "50px",
                  border: "1px solid #DCDCEB",
                  borderRadius: "8px",
                  color: "#000",
                }}
              />
            )}
          </Grid2>
          <Grid2 size={{xs:12}}>
            <input
              type="password"
              name="loginPassword"
              value={formData.loginPassword}
              onChange={handleChange}
              className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3 text-black"
              placeholder="Login password"
              required
            />
          </Grid2>
        </Grid2>
        <div className="flex items-center pt-3 cursor-pointer w-fit" onClick={handleRememberMe}>
          <div className={`w-[16px] h-[16px] rounded-full border border-[#DCDCEB] mr-2 ${rememberMe ? "bg-blue-500" : ""}`} />
          <h3 className="text-[#DCDCEB] text-[13px] font-[400]">Remember me</h3>
        </div>
        <div className="flex justify-center items-center pt-8">
          <button type="submit" className="bg-[#0071CE] w-[150px] h-[50px] rounded-[50px]">Login</button>
        </div>
      </form>
      <div className="space-y-4 text-sm text-center pt-4">
        <p className="text-gray-500">
          No account? <Link href="/signup" className="text-blue-600 hover:underline">Register</Link>
        </p>
        <p className="text-gray-500 text-xs">
          Agree with our <Link href="/terms" className="text-blue-600 hover:underline">User Agreement and privacy policy</Link>
        </p>
      </div>
    </Container>
  );
}
