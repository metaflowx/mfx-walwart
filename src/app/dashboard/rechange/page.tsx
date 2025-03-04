"use client"
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import CommonBackButton from "@/components/ui/CommonBackButton";
import AddressCopy from "@/ui/shared/addressCopy";
import { sortAddress } from "@/utils/fun";
import { Box, Button, Grid2, Typography, Skeleton } from "@mui/material";
import { useQRCode } from "next-qrcode";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const { Canvas } = useQRCode();
 
  const searchParams = useSearchParams();
  const [assetsDetails, setAssetsDetails] = useState<any | null>(null);
  const id: any = searchParams.get('id');
  const [loader, setLoader] = useState(true);
const[walletAddress,setWalletAddress]=useState("")
  const getAssetsDetails = async (id: string) => {
    try {
      const res = await apiRouterCall({
        method: "GET",
        endPoint: "assetsById",
        params: {
          id: id
        }
      });
      if (res?.status === 200) {
        setAssetsDetails(res.data.data.asset);
        setLoader(false);
      } else {
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
    }
  };
  const depositeHandler=async()=>{
    try {
      const res = await apiRouterCall({
        method:"POST",
        endPoint:"deposit",
        params:{
          txId:""
        }

      })
    } catch (error) {
      
    }
  }

  const walletDetails=async()=>{
    try {
      const res =await apiRouterCall({
        method:"GET",
        endPoint:"walletdetail",

      })
      console.log(">>>>>>>>>>.res",res);
      if(res?.status===200){
        setWalletAddress(res.data.data.address)
      }
    } catch (error) {
      
    }
  }
useEffect(() => {
  walletDetails()
}, [])


  const completeRechargeHAndler=async()=>{
    try {
      const res = await apiRouterCall({
        method:"POST",
        endPoint:"confirmed",
        params:{
          txId:""
        }

      })
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if (id) {
      getAssetsDetails(id);
    }
  }, [id]);

  return (
    <Box>
      <CommonBackButton title="Recharge" />

      <Grid2 container spacing={3} mt={4}>
      
        <Grid2
          size={{ xs: 12, md: 6 }}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "self-end",
              height: "100%",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#110229",
                  fontSize: "30px",
                  fontWeight: 700,
                  pb: 2,
                }}
              >
                Select Mainnet
              </Typography>

             
              {loader ? (
                <Skeleton width="100px" height="24px" />
              ) : (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={`/images/coin/${assetsDetails?.symbol}.png`} alt="coin" />
                  <Typography
                    sx={{
                      color: "#110229",
                      fontSize: "24px",
                      fontWeight: 400,
                      paddingLeft: "10px",
                    }}
                  >
                    {assetsDetails?.symbol}
                  </Typography>
                </Box>
              )}
            </Box>

          
            {loader ? (
              <Skeleton variant="rectangular" width={200} height={200} />
            ) : (
              walletAddress && (
                <Canvas
                  text={walletAddress || ""}
                  options={{
                    errorCorrectionLevel: "M",
                    margin: 3,
                    scale: 4,
                    width: 200,
                    color: {
                      dark: "#010599FF",
                      light: "#FFBF60FF",
                    },
                  }}
                />
              )
            )}
          </Box>
        </Grid2>

      
        <Grid2
          size={{ xs: 12, md: 6 }}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "self-end",
              height: "100%",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#110229",
                  fontSize: "30px",
                  fontWeight: 700,
                  pb: 2,
                }}
              >
                Address
              
                {loader ? (
                  <Skeleton width="100%" height="24px" />
                ) : (
                  <AddressCopy
                    text={sortAddress(walletAddress)}
                    addresstext={walletAddress}
                    hrefLink={""}
                  />
                )}
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>

     
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        mt: 5
      }} >
        <Button sx={{
          background: "#0071CE",
          borderRadius: "10px",
          color: "#fff",
          height: "50px",
          fontWeight: 700,
          fontSize: "18px",
          textTransform: "capitalize"
        }}>
          Recharge Complete
        </Button>
        <Box sx={{ display: "flex", alignItems: "center", pt: 2 }}>
          <img src="/images/coin/info.png" alt="info" />
          <Typography sx={{ color: "#000000", fontWeight: 400, fontSize: "18px", pl: 1 }}>
            Warm reminder
          </Typography>
        </Box>
        <Typography pt={2}>1. Copy the address above or scan the QR code and select Tron (TRC20) network to deposit USDT</Typography>
        <Typography>2. Please do not recharge other non-Tron(TRC20)-USDT assets. The funds will arrive in your account in about 1 to 3 minutes</Typography>
        <Typography>3. If it does not arrive for a long time, please refresh the page or contact customer service</Typography>
      </Box>
    </Box>
  );
}
