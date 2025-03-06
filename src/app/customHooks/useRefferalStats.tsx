
"use client"
import { useState, useEffect } from "react";
import { apiRouterCall } from "../ApiConfig/Services/Index";





const useRefferalStats = () => {
  const[referralStats,setReferralStats]=useState<any>("")

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getReferralList = async () => {
    try {
      setLoading(true);
      setError(null);
      const res: any = await apiRouterCall({
        method: "GET",
        endPoint: "Referralstats",
      });

      if (res?.status === 200) {
        setReferralStats(res?.data.data)
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReferralList();
  }, []);

  return { referralStats, loading, error, refetch: getReferralList };
};

export default useRefferalStats;
