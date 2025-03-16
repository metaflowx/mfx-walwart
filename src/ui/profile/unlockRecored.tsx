"use client"
import { Box, Divider, Menu, MenuItem, Select, Typography } from "@mui/material";
import Clicktoback from "./clicktoback";
import NoData from "./noData";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import { useEffect, useMemo, useState } from "react";
import useProfileData from "@/app/customHooks/profiledata";
import moment from "moment";

const UnlockRecored = () => {
  const { profileData } = useProfileData();
  const [activePlanData, setActivePlanData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const[status,setStatus]=useState("PENDING")

 
  const getgetFreezeAmount = async () => {
    setActivePlanData([])
    try {
      const res = await apiRouterCall({
        method: "GET",
        endPoint: "getFreezeAmount",
       
        // params: { status: status },
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
  }, [profileData]);

  const filterData = useMemo(()=>{
    const filData=activePlanData?.filter((item:any)=>{
      return item?.status===status
    })
    return filData

  },[activePlanData,status])

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
      <div>
        {status==="PENDING" && (
          <h4 className="text-yellow-500">
            *Please upgrade your Relevant package to unlock your Freeze usdt for withdrawal
          </h4>
        )}
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
        ) : filterData?.length>0 &&
        filterData?.map((item: any, index: number) => {
              return(
                <Box key={index} mb={1}>
                <Typography color="#119F3E">Efficient</Typography>
                <Box className="flex justify-between">
                  <Typography color="#000">{item?.packageId?.name}</Typography>
                  <Typography color="#FF0000">{item?.amount} USDT</Typography>
                </Box>
  
                <Box className="flex justify-between mt-1">
                  <Typography color="#000">Unlock Time</Typography>
                  <Typography color="#000">within 48 hours  </Typography>
                </Box>
  
                <Box className="flex justify-between mt-1">
                  <Typography color="#000">Expire On</Typography>
                  <Typography color="#000">{moment(item?.expiredAt).format("lll")} </Typography>
                </Box>
                <Box className="flex justify-between mt-1">
                  <Typography color="#000">Status</Typography>
                  <Typography color="#000">{item?.status} </Typography>
                </Box>
                <Box py={2} >
                <Divider style={{backgroundColor:"gray"}} />
                </Box>
              </Box>
              )
            
           
          })
        }
        {!isLoading && filterData?.length===0 && <NoData />}
      </Box>
    </Box>
  );
};

export default UnlockRecored;