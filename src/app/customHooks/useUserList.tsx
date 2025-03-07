
"use client"
import { useState, useEffect } from "react";
import { apiRouterCall } from "../ApiConfig/Services/Index";


interface TransactionFilters {
 
 
 
  page?: number;
  limit?: number;
  
}


const useUserList = (filters: TransactionFilters) => {
    const [allUserList, setAllUserList] = useState([]);
const[totalPage,setTotalPage]=useState(1)
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getUserList = async () => {
    try {
      setLoading(true);
      setError(null);
      const res: any = await apiRouterCall({
        method: "GET",
        endPoint: "userList",
        params: filters
      });

      if (res?.status === 200) {
        setAllUserList(res.data.data);
        setTotalPage(res.data.totalPages)
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserList();
  }, [filters]);

  return { allUserList, loading,totalPage, error, refetch: getUserList };
};

export default useUserList;
