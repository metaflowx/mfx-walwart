"use client"
import { useState, useEffect } from "react";
import { apiRouterCall } from "../ApiConfig/Services/Index";

interface TransactionFilters {
    txType?: string;
    txStatus?: string;
    settlementStatus?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: string;
}

const useAllTransactionHistory = (filters: TransactionFilters) => {
    const [allTransactionHistory, setAllTransactionHistory] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const[totalPage,setTotalPage]=useState(1)
    const getWalletBalance = async () => {
        try {
            setLoading(true);
            setError(null);
            const res: any = await apiRouterCall({
                method: "GET",
                endPoint: "allHistory",
                params: filters
            });

            if (res?.status === 200) {
                setAllTransactionHistory(res.data.data);
                setTotalPage(res.data.totalPages)
            }
        } catch (err) {
            setError(err instanceof Error ? err : new Error("Unknown error"));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getWalletBalance();
    }, [filters]);

    return { allTransactionHistory, loading,totalPage, error, refetch: getWalletBalance };
};

export default useAllTransactionHistory;
