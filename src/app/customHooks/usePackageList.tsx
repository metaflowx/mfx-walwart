
"use client"
import { useState, useEffect } from "react";
import { apiRouterCall } from "../ApiConfig/Services/Index";





const usePackageList = () => {
    const [packageList, setPackageList] = useState([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getPackageList = async () => {
    try {
      setLoading(true);
      setError(null);
      const res: any = await apiRouterCall({
        method: "GET",
        endPoint: "allPacakage",
      });

      if (res?.status === 200) {
        setPackageList(res.data.packages);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPackageList();
  }, []);

  return { packageList, loading, error, refetch: getPackageList };
};

export default usePackageList;
