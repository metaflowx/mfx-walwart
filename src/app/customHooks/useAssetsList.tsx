
"use client"
import { useState, useEffect } from "react";
import { apiRouterCall } from "../ApiConfig/Services/Index";





const useAssetsList = () => {
    const [assetsList, setAssetsList] = useState([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getAssetsList = async () => {
    try {
      setLoading(true);
      setError(null);
      const res: any = await apiRouterCall({
        method: "GET",
        endPoint: "listAssets",
      });

      if (res?.status === 200) {
        setAssetsList(res.data.data);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAssetsList();
  }, []);

  return { assetsList, loading, error, refetch: getAssetsList };
};

export default useAssetsList;
