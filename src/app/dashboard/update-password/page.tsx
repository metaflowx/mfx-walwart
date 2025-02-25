"use client";
import { CircularProgress, Grid2, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CommonBackButton from "@/components/ui/CommonBackButton";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
  // State for password visibility
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const[isLoading,setIsLoading]=useState(false)
  // State for form values
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Toggle password visibility
  const handleClickShowOldPassword = () => setShowOldPassword(!showOldPassword);
  const handleClickShowNewPassword = () => setShowNewPassword(!showNewPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // Validate the form inputs
  const validateForm = () => {
    let isValid = true;
    let errors = { oldPassword: "", newPassword: "", confirmPassword: "" };

    // Validate old password
    if (!oldPassword) {
      errors.oldPassword = "Old password is required";
      isValid = false;
    }

    // Validate new password
    if (!newPassword) {
      errors.newPassword = "New password is required";
      isValid = false;
    } else if (newPassword.length < 6) {
      errors.newPassword = "New password must be at least 6 characters";
      isValid = false;
    } else if (newPassword === oldPassword) {
      errors.newPassword =
        "New password cannot be the same as the old password";
      isValid = false;
    }

    // Validate confirm password
    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your new password";
      isValid = false;
    } else if (confirmPassword !== newPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      if (validateForm()) {
        setIsLoading(true)
        const res = await apiRouterCall({
          method: "PUT",
          endPoint: "updatePassword",
          data: {
            oldPassword: oldPassword,
            newPassword: newPassword,
            confirmNewPassword: confirmPassword,
          },
        });
        if(res?.status===200){
            toast.success(res.data.message)
            setIsLoading(false)
            router.back()
        }else{
            toast.error(res?.data.message)
            setIsLoading(false)
        }
      }
    } catch (error:any) {
        toast.error(error?.response?.data.message)
        setIsLoading(false)
    }
  };

  return (
    <div>
      <CommonBackButton title="Change Password" />
      <form onSubmit={handleSubmit} className="mt-4">
        <Grid2 container spacing={2}>
          {/* Old Password Field */}
          <Grid2 size={{ xs: 12 }}>
            <div className="flex items-center">
              <input
                disabled={isLoading}
                type={showOldPassword ? "text" : "password"}
                name="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3 text-black"
                placeholder="Enter old password"
              />
              <IconButton
                onClick={handleClickShowOldPassword}
                edge="end"
                aria-label="toggle old password visibility"
              >
                {showOldPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            {formErrors.oldPassword && (
              <div className="text-red-500">{formErrors.oldPassword}</div>
            )}
          </Grid2>

          {/* New Password Field */}
          <Grid2 size={{ xs: 12 }}>
            <div className="flex items-center">
              <input
                disabled={isLoading}
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3 text-black"
                placeholder="Enter new password"
              />
              <IconButton
                onClick={handleClickShowNewPassword}
                edge="end"
                aria-label="toggle new password visibility"
              >
                {showNewPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            {formErrors.newPassword && (
              <div className="text-red-500">{formErrors.newPassword}</div>
            )}
          </Grid2>

          {/* Confirm Password Field */}
          <Grid2 size={{ xs: 12 }}>
            <div className="flex items-center">
              <input
                disabled={isLoading}
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3 text-black"
                placeholder="Confirm new password"
              />
              <IconButton
                onClick={handleClickShowConfirmPassword}
                edge="end"
                aria-label="toggle confirm password visibility"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            {formErrors.confirmPassword && (
              <div className="text-red-500">{formErrors.confirmPassword}</div>
            )}
          </Grid2>

          {/* Error Message */}
          {errorMessage && (
            <Grid2 size={{ xs: 12 }}>
              <div className="text-red-500">{errorMessage}</div>
            </Grid2>
          )}

          {/* Submit Button */}
          <Grid2 size={{ xs: 12 }}>
            <button
            disabled={isLoading}
              type="submit"
              className="w-full h-[50px] bg-blue-500 text-white rounded-[8px]"
            >
          {isLoading ? <CircularProgress /> :"Submit"}    
            </button>
          </Grid2>
        </Grid2>
      </form>
    </div>
  );
}
