"use client"
import { Box, Menu, MenuItem, Select, Typography } from "@mui/material";
import Clicktoback from "./clicktoback";
import NoData from "./noData";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import { useEffect, useState } from "react";
import useProfileData from "@/app/customHooks/profiledata";
import moment from "moment";

const UnlockRecored = () => {
  const { profileData } = useProfileData();
  const [activePlanData, setActivePlanData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const[status,setStatus]=useState("PENDING")

  // const getActivePackage = async (id: string) => {
  //   try {
  //     const res = await apiRouterCall({
  //       method: "GET",
  //       endPoint: "getActivePlan",
  //       id: id,
  //       params: { status: "ACTIVE" },
  //     });
  //     if (res?.status === 200) {
  //       setActivePlanData(res?.data?.package?.buyPackagesDetails);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching active package:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const getgetFreezeAmount = async () => {
    setActivePlanData([])
    try {
      const res = await apiRouterCall({
        method: "GET",
        endPoint: "getFreezeAmount",
       
        params: { status: status },
      });
      if (res?.status === 200) {
       
        
        setActivePlanData(res?.data?.data?.lockerDetails);
      }
    } catch (error) {
      setActivePlanData([])
      console.error("Error fetching active package:", error);
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    if (profileData?._id) {
      getgetFreezeAmount()
      // getActivePackage(profileData?._id);
    }
  }, [profileData,status]);

  return (
    <Box>
      <Clicktoback href="/dashboard/profile" title="Unlock Records" />

      <div style={{justifyContent:"end"}} className="flex justify-end py-2 w-full">
      <div>
      <Select  value={status}
                    onChange={(e)=>setStatus(e.target.value)}>
                     <MenuItem value="PENDING">Pending</MenuItem>
                     <MenuItem value="EXPIRE">Expired</MenuItem>
                     <MenuItem value="COMPLETED">Completed</MenuItem>

                   </Select>
      </div>
      </div>

      <Box className="border border-blue-500 rounded-lg p-4 mt-4 shadow-md">
        {isLoading ? (
          <>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="animate-pulse p-4 border-b border-gray-200">
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
              </div>
            ))}
          </>
        ) : activePlanData?.length > 0 ? (
          activePlanData.map((item: any, index: number) => (
            <Box key={index} mb={1}>
              <Typography color="#119F3E">Efficient</Typography>
              <Box className="flex justify-between">
                <Typography color="#000">{item?.packageId?.name}</Typography>
                <Typography color="#FF0000">{item?.amount} USDT</Typography>
              </Box>

              <Box className="flex justify-between mt-1">
                <Typography color="#000">Unlock Time</Typography>
                <Typography color="#000">{moment(item?.packageId?.createdAt).format("lll")}</Typography>
              </Box>

              <Box className="flex justify-between mt-1">
                <Typography color="#000">Expire On</Typography>
                <Typography color="#000">{moment(item?.expiredAt).format("lll")} </Typography>
              </Box>
              <Box className="flex justify-between mt-1">
                <Typography color="#000">Status</Typography>
                <Typography color="#000">{item?.status} </Typography>
              </Box>
            </Box>
          ))
        ) : (
          <NoData />
        )}
      </Box>
    </Box>
  );
};

export default UnlockRecored;