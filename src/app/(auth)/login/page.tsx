"use client";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import CommonTab from "@/components/ui/CommonTab";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Grid2,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import { serialize } from 'cookie';
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("email");
  const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobileNumber: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    mobileNumber: "",
  });
  const handleClickShowOldPassword = () => setShowPassword(!showPassword)

  useEffect(() => {
    // Load saved credentials if Remember Me was checked
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedPassword = localStorage.getItem("rememberedPassword");
    const savedRememberMe = localStorage.getItem("rememberMe") === "true";

    if (savedRememberMe && savedEmail && savedPassword) {
      setFormData({
        email: savedEmail,
        password: savedPassword,
        mobileNumber: "",
      });
      setRememberMe(true);
    }
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: any) => {
    setFormData((prev) => ({ ...prev, mobileNumber: value }));
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "", mobileNumber: "" };

    // Validate based on the active tab
    if (activeTab === "email") {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!formData.email || !emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
        isValid = false;
      }
    } else if (activeTab === "mobile") {
      if (!formData.mobileNumber || formData.mobileNumber.length < 10) {
        newErrors.mobileNumber = "Please enter a valid mobile number.";
        isValid = false;
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    try {
      if (validateForm()) {
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", formData.email);
          localStorage.setItem("rememberedPassword", formData.password);
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("rememberedEmail");
          localStorage.removeItem("rememberedPassword");
          localStorage.removeItem("rememberMe");
        }

        setIsLoading(true);
        const res = await apiRouterCall({
          method: "POST",
          endPoint: "login",
          data: formData,
        });
        if (res?.status === 200) {
          toast.success(res.data.message)
          window.localStorage.setItem("token",res.data.token)
          const cookie = serialize('auth_token', res.data.token, {
            httpOnly: false, 
            maxAge: 60 * 60 * 24, 
            path: '/', 
          });
          document.cookie = cookie;
        
          setIsLoading(false);
          if(res.data.user.role==="ADMIN"){
            router.replace("/admin/dashboard");
          }else{
            router.replace("/dashboard");
          }
          
        } else {
          setIsLoading(false);
          toast.error(res?.data.message)
        }
      }
    } catch (error:any) {
      toast.error(error.response.data.message)
      setIsLoading(false);
    }
  };

  const tabList = [
    { name: "Email", value: "email" },
    { name: "Mobile", value: "mobile" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {  // Check if we are on the client-side
      const tokenCookie: any = window.localStorage.getItem('token');
      if (tokenCookie) {
        const tokenPayload = JSON.parse(atob(tokenCookie.split('.')[1])); // Decode JWT payload
        const isTokenExpired = tokenPayload.exp * 1000 < Date.now();
        if (!isTokenExpired) {
          router.push("/dashboard");
        }
      }
    }
  }, []);
  

  return (
    <Container maxWidth="md">
      <h2 className="text-black text-[22px] md:text-[32px] font-[600] text-center py-10">
        Login
      </h2>
      <CommonTab
        tabList={tabList}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <div>
        <Grid2 container spacing={2} pt={3}>
          <Grid2 size={{ xs: 12 }}>
            {activeTab === "email" ? (
              <div>
                <input
                 disabled={isLoading}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3 text-black"
                  placeholder="Email"
                  required
                />
                {errors.email && formData.email === "" && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
            ) : (
              <div>
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
                  dropdownStyle={{
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />
                {errors.mobileNumber && formData.mobileNumber === "" && (
                  <p className="text-red-500 text-xs">{errors.mobileNumber}</p>
                )}
              </div>
            )}
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <div className='flex items-center relative' >

            <div className="w-full  ">
              <input
               disabled={isLoading}
                   type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3 text-black"
                placeholder="Login password"
                required
              />
              {errors.password && formData.password === "" && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
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
        </Grid2>
        <div
          className="flex items-center pt-3 cursor-pointer w-fit"
          onClick={handleRememberMe}
        >
          <div
            className={`w-[16px] h-[16px] rounded-full border border-[#DCDCEB] mr-2 ${
              rememberMe ? "bg-blue-500" : ""
            }`}
          />
          <h3 className="text-[#DCDCEB] text-[13px] font-[400]">Remember me</h3>
        </div>
        <div className="flex justify-center items-center pt-8">
          <button
           disabled={isLoading}
            onClick={() => handleSubmit()}
            type="submit"
            className="bg-[#0071CE] w-[150px] h-[50px] rounded-[50px]"
          >
            {isLoading ? (
              <CircularProgress size={24} style={{ color: "#fff" }} />
            ) : (
              "Login"
            )}
          </button>
        </div>
      </div>
      <div className="space-y-4 text-sm text-center pt-4">
        <p className="text-gray-500">
          No account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
        <p className="text-gray-500 text-xs">
          Agree with our{" "}
          <Link href="/terms" className="text-blue-600 hover:underline">
            User Agreement and privacy policy
          </Link>
        </p>
      </div>
    </Container>
  );
}
