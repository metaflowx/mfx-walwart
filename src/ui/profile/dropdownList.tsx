 "use client"
import { MenuItem, FormControl, Select, SelectChangeEvent, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";  
import { useState } from "react";

const currencies = [
    { value: "0", label: "All" },
    { value: "1", label: "User recharge" },
    { value: "2", label: "Investment deduction" },
    { value: "3", label: "Transfer income" },
    { value: "4", label: "Registration gift" },
    { value: "5", label: "Unlock VIP" },
    { value: "6", label: "System increase" },
    { value: "7", label: "System decrease" },
    { value: "8", label: "Team recharge reward" },
    { value: "9", label: "Investment gift" },
    { value: "10", label: "Lottery Rewards" },
];

const StyledFormControl = styled(FormControl)({
    margin: "12px 0",
});

const StyledSelect = styled(Select)({
    backgroundColor: "#0071CE",  
    color: "#fff",  
    "&:hover": { backgroundColor: "#0071CE" },  
    "& .MuiSelect-select": {
        padding: "10px 10px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#0071CE",  
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#0057A3",  
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#0057A3",  
    },
    "& .MuiSvgIcon-root": {
        color: "#fff",  
    },
});

const StyledMenuItem = styled(MenuItem)({
    color: "#000",  
    "&:hover": {
        backgroundColor: "#0071CE",  
        color: "#fff",
    },
});
 
const menuStyles = {
    "& .MuiPaper-root": {
        backgroundColor: "#fff",  
        border: "1px solid #1DAEFF",
    },
    "& .MuiMenu-list": {
        padding: "5px",
    },
    "& .MuiMenuItem-root": {
        color: "#000",  
        transition: "all 0.2s ease-in-out",
        "&:hover": {
            backgroundColor: "#0071CE",  
            color: "#fff",  
        },
    },
};

const DropdownList = () => {
    const [selectedCurrency, setSelectedCurrency] = useState("0");

   
    const handleChange = (event : SelectChangeEvent) => {
        setSelectedCurrency(event.target.value);
    };

    return (
        <StyledFormControl>
            <StyledSelect
                value={selectedCurrency}
                onChange={handleChange}
                displayEmpty
                IconComponent={(props) => <ExpandMoreIcon {...props} />}  
                MenuProps={{ sx: menuStyles }}  
            >
                {currencies.map((currency) => (
                    <StyledMenuItem key={currency.value} value={currency.value}>
                        {currency.label}
                    </StyledMenuItem>
                ))}
            </StyledSelect>
        </StyledFormControl>
    );
};

export default DropdownList;
