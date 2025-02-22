
"use client"
import { useState, useEffect } from "react";
import { apiRouterCall } from "../ApiConfig/Services/Index";





const taskListData = () => {
    const [taskList, setTaskList] = useState([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getTaskList = async () => {
    try {
      setLoading(true);
      setError(null);
      const res: any = await apiRouterCall({
        method: "GET",
        endPoint: "task",
      });

      if (res?.status === 200) {
        setTaskList(res.data.tasks);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return { taskList, loading, error, refetch: getTaskList };
};

export default taskListData;
