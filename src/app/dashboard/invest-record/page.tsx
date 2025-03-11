"use client";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import useProfileData from "@/app/customHooks/profiledata";
import CommonBackButton from "@/components/ui/CommonBackButton";
import { Grid2 } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { formatUnits } from "viem";

export default function page() {
  const { profileData, loading } = useProfileData();
  const[activeTab,setActiveTab]=useState("inprogress")
  const [activePlanData, setActivePlanData] = useState<any[]>([]);
  const [activePlanData1, setActivePlanData1] = useState<any>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading1, setIsLoading1] = useState(true);

  const getPackageData = async (id: string) => {
    try {
      const res = await apiRouterCall({
        method: "GET",
        endPoint: "getActivePlan",
        id: id,
      });
      if (res?.status === 200) {
        setActivePlanData1(res?.data?.stats);
        setIsLoading1(false);
      }
    } catch (error) {
      setIsLoading1(false);
    }
  };

  const getActivePackage = async (id: string) => {
    setIsLoading(true)
    setActivePlanData([])
    try {
      const res = await apiRouterCall({
        method: "GET",
        endPoint: "getActivePlan",
        id: id,
        params: {
          status:activeTab==="inprogress"? "ACTIVE":"COMPLETED",
        },
      });
      if (res?.status === 200) {
        setActivePlanData(res?.data?.package?.buyPackagesDetails);
        setIsLoading(false);
      }else{
         setIsLoading(false);
          setActivePlanData([])
      }
    } catch (error) {
      setIsLoading(false);
      setActivePlanData([])
    }
  };

  useEffect(() => {
    if (profileData?._id) {
      getActivePackage(profileData?._id);
    }
  }, [profileData,activeTab]);
  useEffect(() => {
    if (profileData?._id) {
      getPackageData(profileData?._id);
    }
  }, [profileData]);

  const list = [
    {
      title: "Today's earnings",
      value:
        activePlanData1 && activePlanData1?.todaysSumOfInvestmentEarnings > 0
          ? activePlanData1?.todaysSumOfInvestmentEarnings
          : "0",
    },

    {
      title: "Yesterday's earnings",
      value:
        activePlanData1 &&
        activePlanData1?.yesterdaysSumOfInvestmentEarnings > 0
          ? activePlanData1?.yesterdaysSumOfInvestmentEarnings
          : "0",
    },

    {
      title: "Totals's earnings",
      value:
        activePlanData1 && activePlanData1?.totalSumOfInvestmentEarnings > 0
          ? activePlanData1?.totalSumOfInvestmentEarnings
          : "0",
    },
  ];

  return (
    <div>
      <CommonBackButton title="Invest Record" />

      <div
        style={{
          background: "url(/images/invest/investbg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="p-6 h-[100%] mt-5 min-h-[333px] rounded-[24px] relative mb-8 pt-2 "
      >
        <div className="flex justify-center items-center">
          <div className="text-center pt-[25px]">
            <h3 className="text-[30px] font-[400] text-white ">
              My total investment
            </h3>
            <h2 className="text-[50px] font-[700] text-white ">
              {" "}
              {activePlanData1?.totalSumOfInvestment} USDT
            </h2>
          </div>
        </div>

        <Grid2 container spacing={3} mt={5}>
          {list.map((item) => {
            return (
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                <div className="h-[100%]">
                  <div className="text-center text-[30px] text-white">
                    <h4 className="font-[700]">{item.value}USDT</h4>
                    <h4 className="font-[300]">{item.title}</h4>
                  </div>
                </div>
              </Grid2>
            );
          })}
        </Grid2>
      </div>

      <div className="pt-3 pb-6">
        <button onClick={()=>setActiveTab("inprogress")} className={` ${activeTab==="inprogress" ? "bg-[#0071CE] border border-[#0071CE] text-white" :"text-[#0071CE]"}  rounded-[51px]  w-[174px] text-[20px] font-[700] h-[70px] `}>
          In progress
        </button>
        <button onClick={()=>setActiveTab("completed")} className={` ${activeTab==="completed" ? "bg-[#0071CE] border border-[#0071CE] text-white" :"text-[#0071CE]"}  rounded-[51px]  w-[174px] text-[20px] font-[700] h-[70px] `} >
          Completed
        </button>
      </div>

      <div className="border border-[#DCDCEB] rounded-[20px] flex  justify-center items-center ">
        {isLoading ? (
          <div className="flex flex-col space-y-4 w-full p-4 overflow-hidden">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-300 h-10 w-10"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-300 h-10 w-10"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ) : activePlanData.length > 0 ? (
          <ul className="w-full p-4">
            {activePlanData.map((member: any, index: number) => (
              <>
                <li
                  key={index}
                  className="border-b border-gray-200 py-2 flex justify-between"
                >
                  <p className="flex items-center">{member?.packageId?.name}</p>
                  <p>
                    Investment Date:
                    {moment(member?.investmentDate).format("lll")}
                  </p>
                </li>
                <li
                  key={index}
                  className="border-b border-gray-200 py-2 flex justify-between"
                >
                  <p>Amount</p>
                  <p>{member?.packageId?.amount}USDT</p>
                </li>


                <li
                  key={index}
                  className="border-b border-gray-200 py-2 flex justify-between"
                >
                  <p>Daily Earnings</p>
                  <p>{member?.packageId?.dailyEarnings}USDT</p>
                </li>
                <li
                  key={index}
                  className="border-b border-gray-200 py-2 flex justify-between"
                >
                  <p>Daily Bonus</p>
                  <p>{member?.packageId?.dailyBonus}USDT</p>
                </li>

                <li
                  key={index}
                  className="border-b border-gray-200 py-2 flex justify-between"
                >
                  <p>Total Returns</p>
                  <p>{member?.packageId?.totalReturns}USDT</p>
                </li>


                <li
                  key={index}
                  className="border-b border-gray-200 py-2 flex justify-between"
                >
                  <p>Duration InDays</p>
                  <p>{member?.packageId?.durationInDays}Days</p>
                </li>
               
               
              </>
            ))}
          </ul>
        ) : (
          <div className="p-4">

            <img src="/images/invest/nodatafound.png" />
          </div>
        )}
      </div>
    </div>
  );
}
