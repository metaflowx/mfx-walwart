"use client";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import CommonTab from "@/components/ui/CommonTab";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { Button, CircularProgress, Container, Grid2, IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";

export default function Login() {
   const search =useSearchParams()
  const [activeTab, setActiveTab] = useState("email");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
      const [showPassword, setShowPassword] = useState(false)
      const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    referralCode: search.get("ref") || "x0U0OAzp",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
  });
  
  const [errors, setErrors] = useState({
    email: "",
    mobileNumber: "",
    referralCode: "",
    password: "",
    confirmPassword: "",
  });

  const tabList = [
    { name: "Email", value: "email" },
    { name: "Mobile", value: "mobile" },
  ];

  const handleClickShowOldPassword = () => setShowPassword(!showPassword)
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when user modifies input
  };

  const handlePhoneChange = (value: any) => {
    setFormData((prev) => ({ ...prev, mobileNumber: value }));
    setErrors((prev) => ({ ...prev, mobileNumber: "" }));
  };

  const validateForm = () => {
    let formValid = true;
    let validationErrors: any = {};

    if (activeTab === "email") {
      // Email validation
      if (!formData.email) {
        formValid = false;
        validationErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        formValid = false;
        validationErrors.email = "Please enter a valid email.";
      }
    } else {
      // Mobile validation
      if (!formData.mobileNumber) {
        formValid = false;
        validationErrors.mobileNumber = "Mobile number is required.";
      } else if (formData.mobileNumber.length < 10) {
        formValid = false;
        validationErrors.mobileNumber = "Please enter a valid mobile number.";
      }
    }

    // Referral code validation
    if (!formData.referralCode) {
      formValid = false;
      validationErrors.referralCode = "Referral code is required.";
    }

    // Password validation
    if (!formData.password) {
      formValid = false;
      validationErrors.password = "Password is required.";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      formValid = false;
      validationErrors.confirmPassword = "Confirm password is required.";
    } else if (formData.password !== formData.confirmPassword) {
      formValid = false;
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(validationErrors);
    return formValid;
  };

  const signupHandler = async () => {
    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    try {
      setIsLoading(true);
      const res = await apiRouterCall({
        method: "POST",
        endPoint: "signup",
        data: formData,
      });
      if (res?.status === 200) {
        setIsLoading(false);
          toast.success(res.data.message)
        router.push("/login");
      } else {
        setIsLoading(false);
      }
    } catch (error:any) {
      toast.error(error.response.data.message)
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <h2 className="text-black text-[22px] md:text-[32px] font-[600] text-center py-10">
        Create Account
      </h2>

      <CommonTab
        tabList={tabList}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <Grid2 container spacing={2} pt={3}>
        <Grid2 size={{ xs: 6 }}>
          {activeTab === "email" ? (
            <>
              <input
               disabled={isLoading}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-[#DCDCEB] text-black rounded-[8px] h-[50px] w-full pl-3"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </>
          ) : (
            <>
              <PhoneInput
               disabled={isLoading}
                country={"in"}
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
                dropdownStyle={{
                  backgroundColor: "#fff", 
                  color: "#000", 
                }}
              />
              {errors.mobileNumber && <p className="text-red-500">{errors.mobileNumber}</p>}
            </>
          )}
        </Grid2>
        <Grid2 size={{ xs: 6 }}>
          <input
           disabled={isLoading}
            type="text"
            name="referralCode"
            value={formData.referralCode}
            onChange={handleChange}
            className="border border-[#DCDCEB] text-black rounded-[8px] h-[50px] w-full pl-3"
            placeholder="Referral Code"
          />
          {errors.referralCode && <p className="text-red-500">{errors.referralCode}</p>}
        </Grid2>

        <Grid2 size={{ xs: 6 }}>
          <div className='flex items-center relative'>
            <div className="w-full" >

          <input
           disabled={isLoading}
           type={ showPassword? "text":"password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-[#DCDCEB] text-black rounded-[8px] h-[50px] w-full pl-3"
            placeholder="Password"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <div className="absolute right-[12px] top-1" >
            <IconButton
                onClick={handleClickShowOldPassword}
                edge="end"
                aria-label="toggle old password visibility"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
          </div>
        </Grid2>

        <Grid2 size={{ xs: 6 }}>
          <div   className='flex items-center relative'>

          <div className="w-full">

          <input
          disabled={isLoading}
            type={ showConfirmPassword? "text":"password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-[#DCDCEB] text-black rounded-[8px] h-[50px] w-full pl-3"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
          </div>
          <div className="absolute right-[12px] top-1" >
            <IconButton
                onClick={handleClickShowConfirmPassword}
                edge="end"
                aria-label="toggle old password visibility"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
          </div>
        </Grid2>
      </Grid2>

      <div className="flex justify-center items-center pt-8">
        <button
         disabled={isLoading}
          onClick={signupHandler}
          type="submit"
          className="bg-[#0071CE] w-[150px] h-[50px] rounded-[50px]"
        >
           {isLoading ? (
            <CircularProgress size={24} style={{color:"#fff"}} />
          ) : (
            "Register"
          )}
        </button>
      </div>

      <div className="space-y-4 text-sm text-center pt-4">
        <p className="text-gray-500">
          Already have an account?{" "}
          <Link  href="/login" className="text-blue-600 hover:underline">
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
