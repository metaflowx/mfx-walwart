
"use client"
import { useState, useEffect } from "react";
import { apiRouterCall } from "../ApiConfig/Services/Index";





const useAllTransactionHistory = () => {
    const [allTransactionHistory, setAllTransactionHistory] =  useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getWalletBalance = async () => {
    try {
      setLoading(true);
      setError(null);
      const res: any = await apiRouterCall({
        method: "GET",
        endPoint: "allHistory",
      });

      if (res?.status === 200) {
        setAllTransactionHistory(res.data.data);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWalletBalance();
  }, []);

  return { allTransactionHistory, loading, error, refetch: getWalletBalance };
};

export default useAllTransactionHistory;
