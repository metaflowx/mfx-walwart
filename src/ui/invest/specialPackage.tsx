"use client"
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import useProfileData from "@/app/customHooks/profiledata";
import ConfirmationDialog from "@/components/ui/ConfirmationDialog";
import { Box, Button, Grid2, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";



const SpecialPackage = () => {
    const[packageList,setPackageList]=useState([])
    const[activePlan,setActivePlan]=useState([])
    const {profileData} =useProfileData()
    const[lodaing,setLoading]=useState(true)
    const[isLoading,setIsLoading]=useState(false)
const[isConfirm,setIsConfirm]=useState(false)
     const fetchPackage = async () => {
        try {
          setLoading(true);
          
          const res: any = await apiRouterCall({
            method: "GET",
            endPoint: "all",
          });
    
          if (res?.status === 200) {
            setPackageList(res.data.packages);
          }
        } catch (err) {
         console.log(err);
         
        } finally {
          setLoading(false);
        }
      };

      const getActivePackage =async(id:string)=>{
        try {
            const res = await apiRouterCall({
                method:"GET",
                endPoint:"getActivePlan",
                id:id
                
            })
            if(res?.status===200){
                setActivePlan(res.data.package.buyPackagesDetails)
            }
        } catch (error) {
            
        }
      }
    
      useEffect(() => {
        fetchPackage();
        if(profileData?._id){
            getActivePackage(profileData?._id)
        }
      }, [profileData]);
     

      const buyPackageHandler=async(id:string)=>{
        try {
            setIsLoading(true)
            const res = await apiRouterCall({
                method:"POST",
                endPoint:"buyPacakgePlan",
                data:{
                    packageId: isConfirm
                }
            })
            if(res?.status===200){
                setIsLoading(false)
                fetchPackage()
            }
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            
        }
      }
      
  return (
    <>
      <Box>
        <Box mt={4}>
          <Typography variant="h4" fontWeight={700} color="#0071CE">
            Special Package
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "2rem",
          }}
        >
          <Grid2 container spacing={2} justifyContent={"center"}>
            {packageList && packageList.map((item:any, index) => (
              <SpecialCard item={item} index={index} setIsConfirm={setIsConfirm} activePlan={activePlan} />
            ))}
          </Grid2>
        </Box>
      </Box>
      {isConfirm && (
        <ConfirmationDialog open={isConfirm} onClose={()=>setIsConfirm(false)} onConfirm={buyPackageHandler} />
      )}
    </>
  );
};

export default SpecialPackage;

const SpecialCard= ({item,index,setIsConfirm,activePlan}:{item?:any,index:any,setIsConfirm:any,activePlan:any})=>{
  const router =useRouter()

    const checkIsBuy = useMemo(() => {
        if(activePlan?.length>0 && item){

            const filter = activePlan && activePlan.find((active:any)=>{
                 if(active?.packageId===item?._id){
                    return true
                 }else{
                    false
                 }
            })
            return filter
           
            
        }
        
    }, [item,activePlan])
    
    
    
    return(

        <Grid2 key={index} size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
                <Box position={"relative"} mt={5}>
                  <Box
                    sx={{
                      border: "1px solid #DCDCEB",

                      padding: "1rem",
                      borderRadius: "12px",
                      textAlign: "center",
                      transition: "0.5s",
                      "&:hover": {
                        boxShadow: "0px 4px 12px -2px #00000078",
                        border: "1px solid #1DAEFF",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "1rem",
                      }}
                    >
                      <Box textAlign={"left"}>
                        <Typography fontWeight={700}>
                          {" "}
                          1 Times
                        </Typography>
                        <Typography color="#000">Daily Earnings</Typography>
                      </Box>
                      <Box textAlign={"center"}>
                        <Typography fontWeight={700}>
                          {item?.durationInDays} Days
                        </Typography>
                        <Typography color="#000">Expire date</Typography>
                      </Box>
                      <Box textAlign={"right"}>
                        <Typography fontWeight={700}>
                          {item?.dailyEarnings} USDT
                        </Typography>
                        <Typography color="#000">Daily income</Typography>
                      </Box>
                    </Box>
                    <Box sx={{}}>
                      {/* <Link href={"/dashboard/score-center"}> */}
                        <Button
                        onClick={()=>{
                            if(checkIsBuy?.packageId===item?._id){
                                router.push("/dashboard/score-center")

                            }else{

                                setIsConfirm(item?._id)
                            }
                        }}
                          sx={{
                            backgroundColor:checkIsBuy?.packageId===item?._id ? "#0071CE"  : "transparent",
                            padding: "10px",
                            borderRadius: "8px",
                            marginTop: "1rem",
                            border: "1px solid #0071CE",
                            color:checkIsBuy?.packageId===item?._id ? "#fff" : "#000",
                            boxShadow: "inherit",
                            "&:hover": {
                              backgroundColor: "#0071CE",
                              border: "1px solid #0071CE",
                              color: "#fff",
                              boxShadow: "inherit",
                            },
                          }}
                          fullWidth
                          variant="contained"
                        >
                          {checkIsBuy?.packageId===item?._id ? "Score to get income（0/1）":(
                            <>
                            {item?.amount} USDT Unlock Now
                            </>

                          )}  
                          {/* Score to get income（0/1） */}
                        </Button>
                      {/* </Link> */}
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      border: "1px solid #1DAEFF",
                      padding: "5px",
                      borderRadius: "30px",
                      textAlign: "center",
                      backgroundColor: "#fff",
                      position: "absolute",
                      width: "80%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "-20px",
                    }}
                  >
                    <Typography color="#0071CE"> {item.name}</Typography>
                  </Box>
                </Box>
              </Grid2>

    )
}
