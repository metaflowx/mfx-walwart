"use client";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import useProfileData from "@/app/customHooks/profiledata";
import useAssetsDetail from "@/app/customHooks/useAssetsDetail";
import useWalletBalnces from "@/app/customHooks/useWalletBalnces";
import ConfirmationDialog from "@/components/ui/ConfirmationDialog";
import { Box, Button, Grid2, Skeleton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { formatUnits } from "viem";
import NoData from "../profile/noData";

const SpecialPackage = () => {
  const router = useRouter();
  const [packageList, setPackageList] = useState([]);
  const [activePlan, setActivePlan] = useState([]);
  const { profileData } = useProfileData();
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirm, setIsConfirm] = useState<any>("");
  const { walletAssetsList } = useAssetsDetail();

  const fetchPackage = async () => {
    try {
      const res: any = await apiRouterCall({
        method: "GET",
        endPoint: "all",
      });

      if (res?.status === 200) {
        setPackageList(res.data.packages);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getActivePackage = async (id: string) => {
    try {
      const res = await apiRouterCall({
        method: "GET",
        endPoint: "getActivePlan",
        id: id,
      });
      if (res?.status === 200) {
        setActivePlan(res.data.package.buyPackagesDetails);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchPackage();
    if (profileData?._id) {
      getActivePackage(profileData?._id);
    }
  }, [profileData]);

  const buyPackageHandler = async () => {
    const avlBalance =
      walletAssetsList &&
      Number(formatUnits(walletAssetsList?.totalBalanceInWeiUsd, 18));

    if (avlBalance < isConfirm?.amount) {
      router.push("/dashboard/volunteable-assets");
      toast.warn("Insuffiecient balance");
      return;
    }
    try {
      setIsLoading(true);
      const res = await apiRouterCall({
        method: "POST",
        endPoint: "buyPacakgePlan",
        data: {
          packageId: isConfirm?._id,
        },
      });
      if (res?.status === 200) {
        if (profileData?._id) {
          getActivePackage(profileData?._id);
        }
        setIsLoading(false);
        setIsConfirm("");
        fetchPackage();
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box>
        <Box mt={4}>
          <h4 className="font-[700] text-[#0071CE] text-[20px] sm:text-[30px] ">
            Special Package
          </h4>
        </Box>

        <Box
          sx={{
            marginTop: "2rem",
          }}
        >
          <Grid2 container spacing={2} justifyContent={"center"}>
            {loading
              ? Array.from(new Array(4)).map((_, index) => (
                  <SpecialCard key={index} loading={true} />
                ))
              : packageList &&
                packageList.map((item: any, index) => (
                  <SpecialCard
                    key={index}
                    item={item}
                    setIsConfirm={setIsConfirm}
                    activePlan={activePlan}
                    loading={false}
                  />
                ))}
          </Grid2>
          {!loading && packageList && packageList.length === 0 && (
            <Box>
              <NoData />
              
            </Box>
          )}
        </Box>
      </Box>
      {isConfirm && (
        <ConfirmationDialog
          isLoading={isLoading}
          open={isConfirm}
          onClose={() => setIsConfirm(false)}
          onConfirm={buyPackageHandler}
        />
      )}
    </>
  );
};

export default SpecialPackage;

const SpecialCard = ({
  item,
  setIsConfirm,
  activePlan,
  loading,
}: {
  item?: any;
  setIsConfirm?: any;
  activePlan?: any;
  loading: boolean;
}) => {
  const router = useRouter();
  const [activeTask, setActiveTask] = useState<any>("");
  const checkIsBuy = useMemo(() => {
    if (activePlan?.length > 0 && item) {
      return activePlan.filter(
        (active: any) => active?.packageId?._id === item?._id
      );
    }
    return [];
  }, [item, activePlan]);
  
  const getPrgressData = async (id: string) => {
    try {
      const res = await apiRouterCall({
        method: "GET",
        endPoint: "progress",
        id: id,
      });
      if (res?.status === 200) {
        setActiveTask(res?.data);
      }
    } catch (error) {}
  };
  
  useEffect(() => {
    if (checkIsBuy.length > 0) {
      checkIsBuy.forEach((pkg:any) => {
        if (pkg?.packageId?._id) {
          getPrgressData(pkg?.packageId?._id);
        }
      });
    }
  }, [checkIsBuy]);
  const isPurchased = checkIsBuy.length > 0;

  return (
    <Grid2 size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
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
          {loading ? (
            <>
              <Skeleton variant="text" width="50%" height={30} />
              <Skeleton variant="text" width="80%" height={20} />
              <Skeleton variant="text" width="60%" height={20} />
              <Skeleton variant="rectangular" width="100%" height={40} />
            </>
          ) : (
            <>
              <Grid2 container spacing={1} sx={{ marginTop: "1rem" }}>
  <Grid2 size={{ xs: 6, md: 3 }}>
    <Box>
      <Typography fontWeight={700}>1 Times</Typography>
      <Typography color="#000">Daily Earnings</Typography>
    </Box>
  </Grid2>
  <Grid2 size={{ xs: 6, md: 3 }}>
    <Box>
      <Typography fontWeight={700}>{item?.durationInDays} Days</Typography>
      <Typography color="#000">Expire date</Typography>
    </Box>
  </Grid2>
  <Grid2 size={{ xs: 6, md: 3 }}>
    <Box>
      <Typography fontWeight={700}>{item?.dailyBonus} USDT</Typography>
      <Typography color="#000">Bonus</Typography>
    </Box>
  </Grid2>
  <Grid2 size={{ xs: 6, md: 3 }}>
    <Box>
      <Typography fontWeight={700}>{item?.dailyEarnings} USDT</Typography>
      <Typography color="#000">Daily income</Typography>
    </Box>
  </Grid2>
</Grid2>

<Button
  onClick={() => {
    if (isPurchased && Number(activeTask?.completed)<Number(activeTask?.requiredTask) ) {
      router.push(`/dashboard/score-center?taskId=${item?._id}`);
    } else if(Number(activeTask?.completed)>=Number(activeTask?.requiredTask)) {
    toast.warn("All task is completed")
    }else{
      setIsConfirm(item);
    }
  }}
  sx={{
    backgroundColor: isPurchased ? "#0071CE" : "transparent",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "1rem",
    border: "1px solid #0071CE",
    color: isPurchased ? "#fff" : "#000",
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
  {isPurchased ? (
    `Score to get income ${activeTask?.completed || 0}/${activeTask?.requiredTask ||0}`
  ) : (
    <>{item?.amount} USDT Unlock Now</>
  )}
</Button>
            </>
          )}
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
          {loading ? (
            <Skeleton variant="text" width="60%" />
          ) : (
            <Typography color="#0071CE"> {item?.name}</Typography>
          )}
        </Box>
      </Box>
    </Grid2>
  );
};
