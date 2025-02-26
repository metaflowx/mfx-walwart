
"use client"
import { useState, useEffect } from "react";
import { apiRouterCall } from "../ApiConfig/Services/Index";





const useUserList = () => {
    const [allUserList, setAllUserList] = useState([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getUserList = async () => {
    try {
      setLoading(true);
      setError(null);
      const res: any = await apiRouterCall({
        method: "GET",
        endPoint: "userList",
      });

      if (res?.status === 200) {
        setAllUserList(res.data.packages);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return { allUserList, loading, error, refetch: getUserList };
};

export default useUserList;
