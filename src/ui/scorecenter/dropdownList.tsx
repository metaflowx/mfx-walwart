 "use client"
import { MenuItem, FormControl, Select, SelectChangeEvent, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";  
import { useState } from "react";

const currencies = [
    { value: "0", label: "VIP 0 mission area （0/1）" },
    { value: "1", label: "VIP 1 mission area （0/1）" },
    { value: "2", label: "VIP 2 mission area （0/1）" },
    { value: "3", label: "VIP 3 mission area （0/2）" },
    { value: "4", label: "VIP 4 mission area （0/2）" },
    { value: "5", label: "VIP 5 mission area （0/2）" },
    { value: "6", label: "VIP 6 mission area （0/2）" },
    { value: "7", label: "VIP 7 mission area （0/2）" },
    { value: "8", label: "VIP 8 mission area （0/3）" },
    { value: "9", label: "VIP 9 mission area （0/3）" },
    { value: "10", label: "VIP 10 mission area （0/3）" },
];

const StyledFormControl = styled(FormControl)({
    margin: "12px 0",
    width:'100%'
});

const StyledSelect = styled(Select)({
    backgroundColor: "#fff",  
    color: "#000",  
    "&:hover": { backgroundColor: "#fff" },  
    "& .MuiSelect-select": {
        padding: "10px 10px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#DCDCEB",  
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#DCDCEB",  
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#DCDCEB",  
    },
    "& .MuiSvgIcon-root": {
        color: "#000",  
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
                // onChange={handleChange}
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
