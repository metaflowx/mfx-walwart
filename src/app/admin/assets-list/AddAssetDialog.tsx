import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { handleNegativeValue } from "@/utils/fun";

const AddAssetDialog = ({setOpen,open}:{open:boolean,setOpen:any}) => {
 
  const [formData, setFormData] = useState({
    chainId: "",
    assetAddress: "",
    assetType: "",
    name: "",
    symbol: "",
    depositEnabled: "",
    withdrawalEnabled: "",
    withdrawalFee: "",
    minWithdrawalAmount:"",
    maxWithdrawalAmount:""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    let newErrors: Record<string, string> = {};

    if (!formData.chainId.trim() || isNaN(Number(formData.chainId))) {
      newErrors.chainId = "Chain ID must be a valid number.";
    }
    if (!formData.assetAddress.trim()) {
      newErrors.assetAddress = "Asset Address is required.";
    }
    if (!formData.assetType.trim()) {
      newErrors.assetType = "Asset Type is required.";
    }
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.symbol.trim()) {
      newErrors.symbol = "Symbol is required.";
    }
    if (!["true", "false"].includes(formData.depositEnabled.trim().toLowerCase())) {
      newErrors.depositEnabled = "Deposit Enabled must be true or false.";
    }
    if (!["true", "false"].includes(formData.withdrawalEnabled.trim().toLowerCase())) {
      newErrors.withdrawalEnabled = "Withdrawal Enabled must be true or false.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      setOpen(false);
      setFormData({
        chainId: "",
        assetAddress: "",
        assetType: "",
        name: "",
        symbol: "",
        depositEnabled: "",
        withdrawalEnabled: "",
        withdrawalFee:"",
        minWithdrawalAmount:"",
        maxWithdrawalAmount:""
      });
    }
  };

  return (
    <>
     

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Add New Asset</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              name="chainId"
              label="Chain ID"
              type="number"
              onKeyDown={(e) => {
                handleNegativeValue(e);
              }}
              fullWidth
              margin="dense"
              value={formData.chainId}
              onChange={handleChange}
              error={!!errors.chainId}
              helperText={errors.chainId}
            />

            <TextField
              name="assetAddress"
              label="Asset Address"
              fullWidth
              margin="dense"
              value={formData.assetAddress}
              onChange={handleChange}
              error={!!errors.assetAddress}
              helperText={errors.assetAddress}
            />

            <TextField
              name="assetType"
              label="Asset Type"
              fullWidth
              margin="dense"
              value={formData.assetType}
              onChange={handleChange}
              error={!!errors.assetType}
              helperText={errors.assetType}
            />

            <TextField
              name="name"
              label="Name"
              fullWidth
              margin="dense"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />

            <TextField
              name="symbol"
              label="Symbol"
              fullWidth
              margin="dense"
              value={formData.symbol}
              onChange={handleChange}
              error={!!errors.symbol}
              helperText={errors.symbol}
            />

<FormControl fullWidth margin="dense" error={!!errors.depositEnabled}>
              <InputLabel>Deposit Enabled</InputLabel>
              <Select name="depositEnabled" value={formData.depositEnabled}
               onChange={handleChange}>
                <MenuItem value="true">True</MenuItem>
                <MenuItem value="false">False</MenuItem>
              </Select>
              <FormHelperText>{errors.depositEnabled}</FormHelperText>
            </FormControl>

        
            <FormControl fullWidth margin="dense" error={!!errors.withdrawalEnabled}>
              <InputLabel>Withdrawal Enabled</InputLabel>
              <Select name="withdrawalEnabled" value={formData.withdrawalEnabled}
               onChange={handleChange}>
                <MenuItem value="true">True</MenuItem>
                <MenuItem value="false">False</MenuItem>
              </Select>
              <FormHelperText>{errors.withdrawalEnabled}</FormHelperText>
            </FormControl>
              <TextField
              name="withdrawalFee"
              label="Withdrawable Fees"
              type="number"
              onKeyDown={(e) => {
                handleNegativeValue(e);
              }}
              fullWidth
              margin="dense"
              value={formData.withdrawalFee}
              onChange={handleChange}
              error={!!errors.withdrawalFee}
              helperText={errors.withdrawalFee}
            />
              <TextField
              name="minWithdrawalAmount"
              label="Min Withdrawal Amount"
              type="number"
              onKeyDown={(e) => {
                handleNegativeValue(e);
              }}
              fullWidth
              margin="dense"
              value={formData.minWithdrawalAmount}
              onChange={handleChange}
              error={!!errors.minWithdrawalAmount}
              helperText={errors.minWithdrawalAmount}
            />
             <TextField
              name="maxWithdrawalAmount"
              label="Max Withdrawal Amount"
              type="number"
              onKeyDown={(e) => {
                handleNegativeValue(e);
              }}
              fullWidth
              margin="dense"
              value={formData.maxWithdrawalAmount}
              onChange={handleChange}
              error={!!errors.maxWithdrawalAmount}
              helperText={errors.maxWithdrawalAmount}
            />

            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddAssetDialog;
