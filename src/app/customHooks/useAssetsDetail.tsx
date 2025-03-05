"use client"
import { useState, useEffect } from "react";
import { apiRouterCall } from "../ApiConfig/Services/Index";



const useAssetsDetail = () => {
    const [walletAssetsList, setWalletAssetsList] = useState<any>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const getAssestsList = async () => {
        try {
            setLoading(true);
            setError(null);
            const res: any = await apiRouterCall({
                method: "GET",
                endPoint: "walletdetail",
               
            });

            if (res?.status === 200) {
                setWalletAssetsList(res.data.data);
            }
        } catch (err) {
            setError(err instanceof Error ? err : new Error("Unknown error"));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAssestsList();
    }, []);

    return { walletAssetsList, loading, error, refetch: getAssestsList };
};

export default useAssetsDetail;
