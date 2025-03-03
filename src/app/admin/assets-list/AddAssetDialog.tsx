import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, CircularProgress } from "@mui/material";
import { handleNegativeValue } from "@/utils/fun";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import { toast } from "react-toastify";

const AddAssetDialog = ({setOpen,open,editTaskId,refetch}:{open:boolean,setOpen:any,editTaskId?:any|null,refetch:any}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
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
    maxWithdrawalAmount:"",
    coinGeckoId:"",

  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    let newErrors: Record<string, string> = {};

    if (!formData.chainId || isNaN(Number(formData.chainId))) {
      newErrors.chainId = "Chain ID must be a valid number.";
    }
    if (!formData.assetAddress) {
      newErrors.assetAddress = "Asset Address is required.";
    }
    if (!formData.assetType) {
      newErrors.assetType = "Asset Type is required.";
    }
    if (!formData.coinGeckoId) {
      newErrors.coinGeckoId = "coinGeckoId is required.";
    }
    if (!formData.name) {
      newErrors.name = "Name is required.";
    }
    if (!formData.symbol) {
      newErrors.symbol = "Symbol is required.";
    }
    if (!["true", "false"].includes(formData.depositEnabled)) {
      newErrors.depositEnabled = "Deposit Enabled must be true or false.";
    }
    if (!["true", "false"].includes(formData.withdrawalEnabled)) {
      newErrors.withdrawalEnabled = "Withdrawal Enabled must be true or false.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true)
    
      
      try {
        const res= await apiRouterCall({
          method: editTaskId?._id ?"PUT": "POST",
          endPoint:  editTaskId?._id ? "editAssets" : "addAssets",
          data:formData,
        
          params:{
            id: editTaskId?._id || undefined,
          }
        })
        if (res?.status === 200) {
               toast.success(res.data.message);
               setOpen(false)
               setIsLoading(false)
               refetch()
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
                maxWithdrawalAmount:"",
                coinGeckoId:""
              });
             } else {
               toast.error(res?.data.message);
               setIsLoading(false)
             }
      } catch (error:any) {
        toast.error(error?.response?.data.message);
        setIsLoading(false)
      }
    }
  };

  useEffect(() => {
    if(editTaskId._id){
      setFormData(
        {
          chainId: editTaskId?.chainId,
          assetAddress: editTaskId?.assetAddress,
          assetType: editTaskId?.assetType,
          name: editTaskId?.name,
          symbol: editTaskId?.symbol,
          depositEnabled: editTaskId?.depositEnabled.toString().toLowerCase(),
          withdrawalEnabled: editTaskId?.withdrawalEnabled.toString().toLowerCase(),
          withdrawalFee: editTaskId?.withdrawalFee,
          minWithdrawalAmount:editTaskId?.minWithdrawalAmount,
          maxWithdrawalAmount:editTaskId?.maxWithdrawalAmount,
          coinGeckoId:editTaskId?.coinGeckoId,
      
        }
      )
    }
   
  }, [editTaskId])
  

 

  return (
    <>
     

      <Dialog open={open} onClose={() => {
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
          maxWithdrawalAmount:"",
          coinGeckoId:""
        });
        setOpen(false)}} fullWidth maxWidth="sm">
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
              margin="dense"
              value={formData.assetType}
              onChange={handleChange}
              error={!!errors.assetType}
              helperText={errors.assetType}
            />

            <TextField
              name="name"
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
              fullWidth
              margin="dense"
              value={formData.maxWithdrawalAmount}
              onChange={handleChange}
              error={!!errors.maxWithdrawalAmount}
              helperText={errors.maxWithdrawalAmount}
            />
             <TextField
              name="coinGeckoId"
              label="Coin Geck OId"
              disabled={isLoading}
              onKeyDown={(e) => {
                handleNegativeValue(e);
              }}
              fullWidth
              margin="dense"
              value={formData.coinGeckoId}
              onChange={handleChange}
              error={!!errors.coinGeckoId}
              helperText={errors.coinGeckoId}
            />



            <DialogActions>
              <Button onClick={() => {
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
                  maxWithdrawalAmount:"",
                  coinGeckoId:""
                });
                setOpen(false)}}>Cancel</Button>
              <Button disabled={isLoading} type="submit" variant="contained">
               {isLoading ? (
                              <CircularProgress size={24} style={{ color: "#fff" }} />
                            ) : (
                              <>{editTaskId?._id !== null ? "Update Assets" : "Add Assets"}</>
                            )}  
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddAssetDialog;
