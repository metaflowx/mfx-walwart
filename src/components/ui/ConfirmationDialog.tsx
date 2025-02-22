// components/ConfirmationDialog.js
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, IconButton } from '@mui/material';
import { Cross } from 'lucide-react';

const ConfirmationDialog = ({ open, onClose, onConfirm }:{open?:any,onClose?:any,onConfirm?:any}) => {
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
        Confirm Purchase
        <IconButton 
          edge="end" 
          color="inherit" 
          onClick={onClose} 
          
        >
          <Cross color='#000' style={{transform:"rotate(45deg)"}} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'center' }}>
        Are you sure you want to buy this plan?
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button 
          onClick={() => {
            onConfirm();
            onClose();
          }} 
          color="primary"
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
