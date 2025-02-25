// components/ConfirmationDialog.js
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, IconButton, CircularProgress } from '@mui/material';
import { Cross } from 'lucide-react';

const ConfirmationDialog = ({ open, onClose, onConfirm,title,des,isLoading }:{open:boolean,onClose?:any,onConfirm?:any,title?:string,des?:string,isLoading?:boolean}) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    <DialogTitle sx={{ textAlign: 'center' }}>
      {title || "Confirm Purchase"}  
        <IconButton 
          edge="end" 
          color="inherit" 
          onClick={onClose} 
          
        >
          <Cross color='#000' style={{transform:"rotate(45deg)"}} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'center' }}>
      {des || "Are you sure you want to buy this plan?"}  
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button 
          onClick={() => {
            onConfirm();
           
          }} 
          color="primary"
        >
          {isLoading ? <CircularProgress size={24} style={{color:"#fff"}} /> :"Confirm"}
          
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
