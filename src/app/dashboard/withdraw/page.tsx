"use client";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import useAssetsList from "@/app/customHooks/useAssetsList";
import useWalletBalance from "@/app/customHooks/useWalletBalance";
import useWalletBalnces from "@/app/customHooks/useWalletBalnces";
import CommonBackButton from "@/components/ui/CommonBackButton";
import { Box, Grid2, Typography } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";

// Validation helper functions
const validateAmount = (amount: string) => {
  const minAmount = 1.8;
  const maxAmount = 1000000.0;
  const amountFloat = parseFloat(amount);

  if (isNaN(amountFloat) || amountFloat < minAmount || amountFloat > maxAmount) {
    return `Please enter a valid amount between ${minAmount} and ${maxAmount}`;
  }
  return null;
};

const validateAddress = (address: string) => {
  // Add a proper regex for address validation based on the network
  const regex = /^[a-zA-Z0-9]{34}$/; // Example for a typical cryptocurrency address format
  if (!regex.test(address)) {
    return "Please enter a valid withdrawal address";
  }
  return null;
};

const validatePassword = (password: string) => {
  if (!password) {
    return "Please enter your security password";
  }
  return null;
};

export default function Page() {
  const { assetsList, loading, refetch } = useAssetsList();
  const [activeTab, setActiveTab] = useState<any>("");
  const { walletBalances } = useWalletBalnces();
  const { walletBalance } = useWalletBalance();

  const [formData, setFormData] = useState({
    withdrawalAddress: "",
    withdrawalAmount: "",
    password: "",
    assetId: "",
  });

  const [error, setError] = useState<string | null>(null);

  console.log(">>>>>>>>>>>walletBalances", walletBalance, walletBalances);

  const dataList = [
    {
      title: "Fee :",
      value: activeTab?.withdrawalFee ? `${ activeTab?.withdrawalFee}USDT` :"0",
      val: "",
    },
    {
      title: "Actual arrival：",
      value: formData.withdrawalAmount ? Number(formData.withdrawalAmount)-Number(activeTab?.withdrawalFee) :"0",
      val: "",
    },
  ];

  const withdrawHandler = async () => {
    // Reset error state
    setError(null);

    // Validate form fields
    const amountError = validateAmount(formData.withdrawalAmount);
    const addressError = validateAddress(formData.withdrawalAddress);
    const passwordError = validatePassword(formData.password);

    if (amountError) {
      setError(amountError);
      return;
    }

    if (addressError) {
      setError(addressError);
      return;
    }

    if (passwordError) {
      setError(passwordError);
      return;
    }

    try {
      const res = await apiRouterCall({
        method: "POST",
        endPoint: "withdraw",
        data: formData,
      });

      if(res?.status===200){
        toast.success(res.data.message)
      }else{
        toast.error(res?.data?.message)
      }

      // Handle the response (success message, clear form, etc.)
      console.log("Withdrawal successful", res);
    } catch (error:any) {
      console.error("Withdrawal failed", error);
      toast.error(error?.response?.data?.message)
      setError("An error occurred while processing your withdrawal.");
    }
  };

  return (
    <Box>
      <CommonBackButton title="Withdraw" isIcon={true} />

      <Grid2 container spacing={3} mt={4}>
        <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
          <Box
            mb={3}
            sx={{
              border: "1.5px solid #DCDCEB",
              borderRadius: "20px",
              padding: "10px",
              "&:hover": {
                border: "1px solid #1DAEFF",
                boxShadow: "0px 17px 50px 0px #8F90A652",
              },
            }}
          >
            <Box textAlign="center">
              <Typography
                sx={{
                  color: "#110229",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                0.000000
              </Typography>
              <Typography
                sx={{
                  color: "#110229",
                  fontSize: "20px",
                  fontWeight: 400,
                }}
              >
                Currently available assets(USDT)
              </Typography>
            </Box>
          </Box>
          <img src="/images/withdraw/withdarw.png" style={{ width: "100%" }} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 9 }}>
          <Box
            sx={{
              border: "1.5px solid #DCDCEB",
              borderRadius: "20px",
              padding: "10px 20px",
              height: "100%",
              "&:hover": {
                border: "1px solid #1DAEFF",
                boxShadow: "0px 17px 50px 0px #8F90A652",
              },
            }}
          >
            <Typography
              sx={{
                color: "#0071CE",
                fontSize: "24px",
                fontWeight: 700,
                paddingBottom: "10px",
              }}
            >
              Select Mainnet
            </Typography>
            {assetsList &&
              assetsList.map((tab: any, index) => (
                <button
                  key={tab?._id}
                  onClick={() => setActiveTab(tab)}
                  className={`${index === 1 ? "ml-[10px]" : "ml-0"} ${
                    activeTab?._id === tab?._id
                      ? "bg-[#0071CE] text-white border-[#0071CE]"
                      : "bg-[#FFFFFF] text-black border-[#DCDCEB]"
                  } h-[60px] rounded-[12px]  text-[20px] font-[700] border px-[10px] transition-all duration-300 ease-in-out`}
                >
                  {tab?.coinGeckoId}
                </button>
              ))}
            <Box pt={2}>
              <label className="text-[#000000] text-[18px] font-[400] pb-1 ">
                Withdrawal address
              </label>
              <input
                placeholder="Please enter or long press to paste the withdrawal address"
                value={formData.withdrawalAddress}
                onChange={(e) =>
                  setFormData({ ...formData, withdrawalAddress: e.target.value })
                }
                className="border border-[#DCDCEB] rounded-[12px] w-full h-[60px] pl-2 "
              />
            </Box>
            <Box pt={2}>
              <label className="text-[#000000] text-[18px] font-[400] pb-1 ">
                Withdrawal amount
              </label>
              <div className="flex border border-[#DCDCEB] rounded-[12px]">
                <input
                  type="number"
                  value={formData.withdrawalAmount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      withdrawalAmount: e.target.value,
                    })
                  }
                  placeholder="Please enter the transfer amount"
                  className=" rounded-[12px] w-full h-[60px] pl-2 "
                />
                <button className="text-white text-[20px] w-[110px] font-[700] rounded-[11px] bg-[#0071CE] border border-[#0071CE] h-[58px]">
                  Max
                </button>
              </div>
              <h3 className="text-[#0071CE]">
                Minimum withdrawal amount：{activeTab?.minWithdrawalAmount}USDT Maximum withdrawal amount：
               {activeTab?.maxWithdrawalAmount}USDT
              </h3>
            </Box>

            <Box pt={2}>
              <label className="text-[#000000] text-[18px] font-[400] pb-1 ">
                Security password
              </label>
              <input
                placeholder="Security password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="border border-[#DCDCEB] rounded-[12px] w-full h-[60px] pl-2 "
              />
            </Box>

            <Grid2 container spacing={2} mt={3} mb={2}>
              {dataList.map((item) => (
                <Grid2 size={{ xs: 12 }} key={item.title}>
                  <div className="flex justify-between items-center text-right">
                    <div>
                      <h2 className="text-black font-[400] text-[20px] ">
                        {item.title}
                      </h2>
                    </div>
                    <div>
                      <h2 className="text-black font-[400] text-[20px] ">
                        {item.value}
                      </h2>
                      <h2 className="text-black font-[400] text-[16px] ">
                        {item.val}
                      </h2>
                    </div>
                  </div>
                </Grid2>
              ))}
            </Grid2>

            <button
              onClick={withdrawHandler}
              className="w-full text-white text-[20px] font-[700] rounded-[11px] bg-[#0071CE] border border-[#0071CE] h-[58px]"
            >
              Confirm
            </button>

            {error && (
              <Typography sx={{ color: "red", textAlign: "center", mt: 2 }}>
                {error}
              </Typography>
            )}

            <Box sx={{ display: "flex", alignItems: "center", pt: 2, justifyContent: "center" }}>
              <img src="/images/coin/info.png" />
              <Typography sx={{ color: "#000000", fontWeight: 400, fontSize: "18px", pl: 1 }}>
                Warm reminder
              </Typography>
            </Box>
            <h3 className="text-center text-black text-[16px] font-[400] pt-[3px]">
              There are no fees for withdrawals. Carefully check the withdrawal wallet address.
            </h3>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
