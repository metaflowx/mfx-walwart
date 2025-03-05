"use client";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import useAssetsDetail from "@/app/customHooks/useAssetsDetail";
import useAssetsList from "@/app/customHooks/useAssetsList";
import useWalletBalnces from "@/app/customHooks/useWalletBalnces";
import CommonBackButton from "@/components/ui/CommonBackButton";
import { Box, Grid2, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { formatUnits, isAddress } from 'viem'



const validateAddress = (address: string) => {
  if (!isAddress(address)) {
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
  const router =useRouter()
  const { assetsList, loading, refetch } = useAssetsList();
  const [activeTab, setActiveTab] = useState<any>("");
  const { walletBalances } = useWalletBalnces();
  const { walletAssetsList } = useAssetsDetail();
const[transactionId,setTransactionId]=useState<any>("")
const[isLaoding,setIsLoading]=useState(false)
  const [formData, setFormData] = useState({
    withdrawalAddress: "",
    withdrawalAmount: "",
    password: "",
    
  });

  const [error, setError] = useState<string | null>(null);



  const validateAmount = (amount: string) => {
   
    const amountFloat = parseFloat(amount);

  
    if (activeTab==="") {
      return `Please select a network`;
    }
    if (isNaN(amountFloat) || amountFloat < parseFloat(activeTab?.minWithdrawalAmount) || amountFloat > parseFloat(activeTab?.maxWithdrawalAmount)) {
      return `Please enter a valid amount between ${activeTab?.minWithdrawalAmount} and ${activeTab?.maxWithdrawalAmount}`;
    }
    return null;

  
   
  };

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
    const accountBal=walletAssetsList && Number(formatUnits(walletAssetsList?.totalBalanceInWeiUsd,18))

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
    if(parseFloat(accountBal)< Number(formData?.withdrawalAmount )){
      toast.warn("Insufficient balance")
      return 
    }

    try {
      setIsLoading(true)
      const res = await apiRouterCall({
        method: "POST",
        endPoint: "withdraw",
        data: {...formData,assetId:activeTab?._id},
      });

      if(res?.status===200 || res?.status===201){
        toast.success(res.data.message)
        setIsLoading(false)
        router.push("/dashboard/profile")
      }else{
        toast.error(res?.data?.message)
        setIsLoading(false)
      }

      // Handle the response (success message, clear form, etc.)
      console.log("Withdrawal successful", res);
    } catch (error:any) {
      console.error("Withdrawal failed", error);
      toast.error(error?.response?.data?.message)
      setError("An error occurred while processing your withdrawal.");
      setIsLoading(false)
    }
  };


    const getDepositeRequest = async (id: string) => {
      try {
        const res = await apiRouterCall({
          method: "POST",
          endPoint: "deposit",
          params: {
            assetId:id
          }
        });
        if (res?.status === 200) {
          setTransactionId(res.data)
          
        }
      } catch (error) {
       console.log(">>>>>>>>>>error");
       
      }
    };

      useEffect(() => {
        if (activeTab?._id) {
        
          getDepositeRequest(activeTab?._id)
        }
      }, [activeTab?._id]);
  


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
              {walletAssetsList && Number(formatUnits(walletAssetsList?.totalBalanceInWeiUsd,18)).toFixed(6)}
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
          <img src="/images/withdraw/withdarw.svg" style={{ width: "100%" }} />
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
                fontSize: {xs:"18px", md:"24px"},
                fontWeight: 700,
                paddingBottom: "10px",
              }}
            >
              Select Mainnet
            </Typography>
            <Grid2 container spacing={1}>
            {assetsList &&
              assetsList.map((tab: any, index) => (
               <Grid2 size={{xs:4,sm:3,md:2}} >
                 <button
                   disabled={isLaoding}
                  key={tab?._id}
                  onClick={() => setActiveTab(tab)}
                  className={` ${
                    activeTab?._id === tab?._id
                      ? "bg-[#0071CE] text-white border-[#0071CE]"
                      : "bg-[#FFFFFF] text-black border-[#DCDCEB]"
                  } h-[60px] w-full rounded-[12px] text-[15px]  md:text-[20px] font-[700] border px-[10px] transition-all duration-300 ease-in-out`}
                >
                  {tab?.assetType}
                </button>
               </Grid2>
              ))}

            </Grid2>
           
            <Box pt={2}>
              <label className="text-[#000000] text-[18px] font-[400] pb-1 ">
                Withdrawal address
              </label>
              <input
                disabled={isLaoding}
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
                  disabled={isLaoding}
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
                {/* <button className="text-white text-[20px] w-[110px] font-[700] rounded-[11px] bg-[#0071CE] border border-[#0071CE] h-[58px]">
                  Max
                </button> */}
              </div>
              {activeTab && (

              <h3 className="text-[#0071CE] text-[14px] md:text-[16px] ">
                Minimum withdrawal amount：{activeTab?.minWithdrawalAmount}USDT Maximum withdrawal amount：
               {activeTab?.maxWithdrawalAmount}USDT
              </h3>
              )}
            </Box>

            <Box pt={2}>
              <label className="text-[#000000] text-[18px] font-[400] pb-1 ">
                Security password
              </label>
              <input
                disabled={isLaoding}
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
            disabled={isLaoding}
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
              <img src="/images/coin/info.svg" />
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
