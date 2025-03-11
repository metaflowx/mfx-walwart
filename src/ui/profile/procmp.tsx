"use client"
import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/profile/logo.svg";
import AddressCopy from "../shared/addressCopy";
import arrow from "../../../public/profile/arrow.svg";
import Link from "next/link";
import l1 from "../../../public/profile/l1.svg";
import l2 from "../../../public/profile/l2.svg";
import l3 from "../../../public/profile/l3.svg";
import l4 from "../../../public/profile/l4.svg";
import l5 from "../../../public/profile/l5.svg";
import l6 from "../../../public/profile/l6.svg";
import l7 from "../../../public/profile/l7.svg";
import l8 from "../../../public/profile/l8.svg";
import l9 from "../../../public/profile/l9.svg";
import l10 from "../../../public/profile/l10.svg";
import rArrow from "../../../public/profile/rArrow.svg";
import useProfileData from "@/app/customHooks/profiledata";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import useAssetsDetail from "@/app/customHooks/useAssetsDetail";
import useRefferalStats from "@/app/customHooks/useRefferalStats";
import { formatUnits, slice } from "viem";





const Listleft = [
  {
    id: 1,
    Image: l1,
    Name: "Invest",
    href: "/dashboard/invest",
  },
 
  {
    id: 3,
    Image: l3,
    Name: "Change Password",
    href: "/dashboard/update-password",
  },

];

const Listright = [
  {
    id: 1,
    Image: l6,
    Name: "Help Center",
    href: "/dashboard/contact-customer-service",
  },
  {
    id: 2,
    Image: l7,
    Name: "Contact Customer Service",
    href: "/dashboard/contact-customer-service",
  },
 
 
 
];

const Procmp = () => {
    const { profileData, loading } = useProfileData();
    const {referralStats} =useRefferalStats()
    const { walletAssetsList, loading:dataLoading } = useAssetsDetail();
    const[investmentFree,setInvestmentFree]=useState("")
    const[activePlanData,setActivePlanData]=useState<any>("")

    const [statsData, setStatsData] = useState<any>([
     
        {
          id: 1,
          Name: "Total Income (USDT)",
          data: "0.00",
        },
        {
          id: 2,
          Name: "Total commission income",
          data: "0",
        },
        {
          id: 3,
          Name: "Cumulative recharge (USDT)",
          data: "0",
        },
        {
          id: 4,
          Name: "Cumulative withdrawal (USDT)",
          data: "0.00",
        },
        {
          id: 5,
          Name: "Total team size",
          data: "0",
        },
      
    ]);
    const router = useRouter()
 const [url,setUrl]=useState("")
    useEffect(() => {
      
       
       if (typeof window !== "undefined" && profileData) {
         setUrl(`${window?.location?.host}/signup?ref=${profileData?.referralCode}`);
       }
     
     }, [profileData]);

     const handleLogout = () => {
      document.cookie = 'auth_token=; max-age=0; path=/;'; 
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
      router.push('/login');
    };

    


    const getActivePackage = async (id: string) => {
      try {
        const res = await apiRouterCall({
          method: "GET",
          endPoint: "getActivePlan",
          id: id,
          params:{
            status:"ACTIVE"
          }
        });
        if (res?.status === 200) {
          setActivePlanData(res?.data?.stats)
         
        }
      } catch (error) {}
    };

    const getCompletedPackage = async (id: string) => {
      try {
        const res = await apiRouterCall({
          method: "GET",
          endPoint: "getActivePlan",
          id: id,
          params:{
            status:"ACTIVE"
          }
        });
        if (res?.status === 200) {
         setInvestmentFree(res?.data?.stats?.totalSumOfInvestment)
         
        }
      } catch (error) {}
    };

    useEffect(() => {
    
      if (profileData?._id) {
        getActivePackage(profileData?._id);
        getCompletedPackage(profileData?._id)
      }
    }, [profileData]);


    useEffect(() => {
      const withdrawAmount=  Math.abs(walletAssetsList?.totalWithdrawInWeiUsd)
      let formattedAmount
      if(withdrawAmount>0){
      
        const withdrawAmount1: bigint = BigInt(withdrawAmount)
      
           formattedAmount = withdrawAmount1 > 0
     ? Number(formatUnits(withdrawAmount1, 18)).toFixed(2) 
     : "0";
        
      }
   
     
      

      setStatsData([
        {
          id: 1,
          Name: "Total Income (USDT)",
          data:activePlanData?.totalSumOfInvestmentEarnings || 0,
        },
        {
          id: 2,
          Name: "Total commission income",
          data: referralStats?.totalEarnings || 0,
        },
        {
          id: 3,
          Name: "Cumulative recharge (USDT)",
          data: walletAssetsList?.totalDepositInWeiUsd>0 ? Number(formatUnits(walletAssetsList?.totalDepositInWeiUsd,18)).toFixed(2):"0",
        },
        {
          id: 4,
          Name: "Cumulative withdrawal (USDT)",
          data: formattedAmount || "0",
        },
        {
          id: 5,
          Name: "Total team size",
          data: referralStats?.totalTeamCount || 0,
        },
      ])
      
    }, [activePlanData,referralStats,walletAssetsList])
    




 
  
  const Top___list = [
    {
      id: 1,
      Name: "Electronic wallet",
      data: walletAssetsList?.totalBalanceInWeiUsd>0 ? Number(formatUnits(walletAssetsList?.totalBalanceInWeiUsd,18)).toFixed(6):"0",
      href: "/dashboard/electronicwallet",
    },
    {
      id: 2,
      Name: "Flexible wallet",
      data: walletAssetsList?.totalFlexibleBalanceInWeiUsd>0 ? Number(formatUnits(walletAssetsList?.totalFlexibleBalanceInWeiUsd,18)).toFixed(6) :"0",
      href: "/dashboard/flexiblewallet",
    },
    {
      id: 3,
      Name: "Unlock Freeze",
      data:walletAssetsList?.totalLockInWeiUsd>0 ? Number(formatUnits(walletAssetsList?.totalLockInWeiUsd,18)).toFixed(6) : "0",
      href: "/dashboard/unlock-recored",
    },
    {
      id: 4,
      Name: "Investment freeze",
      data:investmentFree||0,
      href: "/dashboard/invest-record",
    },
  ];
    
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#0071CE",
          padding: "10px",
          borderRadius: "12px",
          height: "120px",
          "@media(max-width : 900px)": {
            height: "auto",
          },
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 size={{ lg: 5, md: 5, sm: 12, xs: 12 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "1rem 1.2rem",
                  borderRadius: "10px",
                }}
              >
                <Image src={logo} alt={""} width={60} height={60} />
              </Box>
              <Box>
                <h2  className="text-white font-[500] text-[16px] sm:text-[25px] " >
                 {profileData?.email || profileData?.mobileNumber}
                </h2>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginTop: "8px",
                  }}
                >
                  <Typography color="#fff">Invitation Code</Typography>
                  <AddressCopy
                    text={profileData?.referralCode}
                    addresstext={url }
                    hrefLink={""}
                  />
                </Box>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ lg: 7, md: 7, sm: 12, xs: 12 }}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "12px",
                boxShadow: "2px 2px 12px -3px #00000082",
              }}
            >
              <Grid2 container spacing={2}>
                {Top___list.map((item, index) => (
                  <Grid2 key={index} size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                    <Box sx={{}}>
                      <Box>
                        <Typography color="#000">{item.Name} (USDT)</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginTop: "8px",
                        }}
                      >
                        <Typography color="#000" fontWeight={700}>
                          {item.data}
                        </Typography>
                        <Link href={item.href}>
                          <Image src={arrow} alt={""} />
                        </Link>
                      </Box>
                    </Box>
                  </Grid2>
                ))}
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          marginTop: "7rem",
          border: "1px solid #DCDCEB",
          padding: "1rem",
          borderRadius: "12px",
          flexWrap: "wrap",
          "@media(max-width : 900px)": {
            marginTop: "1rem",
          },
        }}
      >
        {statsData.map((item:any, index:number) => (
          <Box key={index}>
            <Typography color="#000" fontWeight={700}>
              {item.data}
            </Typography>
            <Typography color="#000">{item.Name}</Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          marginTop: "1rem",
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
            <Box
              sx={{
                border: "1px solid #DCDCEB",
                borderRadius: "12px",
                padding: "1rem",
              }}
            >
              {Listleft.map((item, index) => (
                <Link
                  href={item.href}
                  style={{ display: "block", margin: "5px 0px" }}
                >
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "8px",
                      }}
                    >
                      <Box>
                        <Image
                          src={item.Image}
                          alt={""}
                          style={{
                            boxShadow: "#00000033 2px 4px 12px -3px",
                            borderRadius: "30px",
                          }}
                        />
                      </Box>
                      <Typography color="#000" fontWeight={700}>
                        {item.Name}
                      </Typography>
                    </Box>
                    <Box>
                      <Link href={item.href}>
                        <Image src={rArrow} alt={""} />
                      </Link>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Box>
          </Grid2>

          <Grid2 size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
            <Box
              sx={{
                border: "1px solid #DCDCEB",
                borderRadius: "12px",
                padding: "1rem",
                height:"100%"
              }}
            >
              {Listright.map((item, index) => (
                <Link
                  href={item.href}
                  style={{ display: "block", margin: "5px 0px" }}
                >
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "8px",
                      }}
                    >
                      <Box>
                        <Image
                          src={item.Image}
                          alt={""}
                          style={{
                            boxShadow: "#00000033 2px 4px 12px -3px",
                            borderRadius: "30px",
                          }}
                        />
                      </Box>
                      <Typography color="#000" fontWeight={700}>
                        {item.Name}
                      </Typography>
                    </Box>
                    <Box>
                      <Link href={item.href}>
                        <Image src={rArrow} alt={""} />
                      </Link>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Box>
          </Grid2>
        </Grid2>
       

        <Button onClick={()=>handleLogout()} fullWidth startIcon={<LogOut />} style={{marginBottom:"10px",marginTop:"10px"}}  >
          Logout
        </Button>
        
      </Box>
    </Box>
  );
};

export default Procmp;
