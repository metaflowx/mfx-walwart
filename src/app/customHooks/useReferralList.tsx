
"use client"
import { useState, useEffect } from "react";
import { apiRouterCall } from "../ApiConfig/Services/Index";





const useReferralList = () => {
    const [referralList, setReferralList] = useState([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getReferralList = async () => {
    try {
      setLoading(true);
      setError(null);
      const res: any = await apiRouterCall({
        method: "GET",
        endPoint: "ReferralListHistory",
      });

      if (res?.status === 200) {
        setReferralList(res.data.history);
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

  return { referralList, loading, error, refetch: getReferralList };
};

export default useReferralList;
