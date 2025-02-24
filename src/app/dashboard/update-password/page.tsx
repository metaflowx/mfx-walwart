"use client"
import { Grid2, IconButton, InputAdornment, InputProps } from '@mui/material'
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import CommonBackButton from '@/components/ui/CommonBackButton'

export default function Page() {
  // State for password visibility
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // State for form values
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Toggle password visibility
  const handleClickShowOldPassword = () => setShowOldPassword(!showOldPassword)
  const handleClickShowNewPassword = () => setShowNewPassword(!showNewPassword)
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

  // Validation for new password and confirm password
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match')
      return
    }

    setErrorMessage('')
    // Add your submit logic here
  }

  return (
    <div>
        <CommonBackButton title='Change Password' />
      <form onSubmit={handleSubmit} className='mt-4' >
        <Grid2 container spacing={2}>
          {/* Old Password Field */}
          <Grid2 size={{ xs: 12 }}>
            <div className='flex items-center' >
              <input
                type={showOldPassword ? 'text' : 'password'}
                name="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3 text-black"
                placeholder="Enter old password"
                required
              />
              <IconButton
                onClick={handleClickShowOldPassword}
                edge="end"
                aria-label="toggle old password visibility"
              >
                {showOldPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
          </Grid2>

          {/* New Password Field */}
          <Grid2 size={{ xs: 12 }}>
            <div className='flex items-center'>
              <input
                type={showNewPassword ? 'text' : 'password'}
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3 text-black"
                placeholder="Enter new password"
                required
              />
              <IconButton
                onClick={handleClickShowNewPassword}
                edge="end"
                aria-label="toggle new password visibility"
              >
                {showNewPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
          </Grid2>

          {/* Confirm Password Field */}
          <Grid2 size={{ xs: 12 }}>
            <div className='flex items-center'>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-[#DCDCEB] rounded-[8px] h-[50px] w-full pl-3 text-black"
                placeholder="Confirm new password"
                required
              />
              <IconButton
                onClick={handleClickShowConfirmPassword}
                edge="end"
                aria-label="toggle confirm password visibility"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
          </Grid2>

          {/* Error Message */}
          {errorMessage && (
            <Grid2 size={{ xs: 12 }}>
              <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>
            </Grid2>
          )}

          {/* Submit Button */}
          <Grid2 size={{ xs: 12 }}>
            <button type="submit" className="w-full h-[50px] bg-blue-500 text-white rounded-[8px]">
              Submit
            </button>
          </Grid2>
        </Grid2>
      </form>
    </div>
  )
}
