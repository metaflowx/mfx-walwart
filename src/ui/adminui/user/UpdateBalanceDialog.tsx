import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";

interface Props {
  open: boolean;
  onClose: () => void;
 
}

const UpdateBalanceDialog: React.FC<Props> = ({ open, onClose }) => {

  const [assetId, setAssetId] = useState("");
  const [balance, setBalance] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    let tempErrors: { [key: string]: string } = {};
  
    if (!assetId) tempErrors.assetId = "Asset is required";
    if (!balance) tempErrors.balance = "Balance is required";
    else if (isNaN(Number(balance))) tempErrors.balance = "Balance must be a number";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    
    try {
      const response = await apiRouterCall({
        method:"PUT",
        endPoint:"walletUpdate",
        data:{
            userId:"",
             assetId:assetId,
              balance:balance 
        }
      })

      console.log("Success:", response?.data);
      onClose();
    } catch (error) {
      console.error("Error updating balance:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Update User Balance</DialogTitle>
      <DialogContent>
      
        <FormControl fullWidth margin="dense">
          <InputLabel>Asset</InputLabel>
          <Select
            value={assetId}
            onChange={(e) => setAssetId(e.target.value)}
            error={!!errors.assetId}
          >
            <MenuItem value="BTC">Bitcoin (BTC)</MenuItem>
            <MenuItem value="ETH">Ethereum (ETH)</MenuItem>
            <MenuItem value="USDT">Tether (USDT)</MenuItem>
          </Select>
          {errors.assetId && <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.assetId}</p>}
        </FormControl>

        <TextField
          fullWidth
          margin="dense"
          label="Balance"
          type="number"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          error={!!errors.balance}
          helperText={errors.balance}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary" disabled={loading}>
          {loading ? <CircularProgress size={24} /> : "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateBalanceDialog;
