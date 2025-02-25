import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import apiConfigs from "../apiConfig";

interface ApiRouterCallParams {
  method: AxiosRequestConfig["method"];
  id?: string | number;
  endPoint: keyof typeof apiConfigs;
  data?: Record<string, any> | null;
  params?: Record<string, any> | null;
  token?: any;
  url?: string;
  source?: { token: any }; 
}

export const apiRouterCall = async ({
  method,
  id,
  endPoint,
  data,
  params,
  token,
  url,
  source,
}: ApiRouterCallParams): Promise<AxiosResponse<any> | undefined> => {
  const encryptedData = data ?? null;
  const encryptedParams = params ?? null;
 

  try {
    const requestUrl = url
      ? url
      : id
      ? `${apiConfigs[endPoint]}/${id}` 
      : apiConfigs[endPoint];

    console.log("Request URL:", requestUrl);

    const response = await axios({
      method: method,
      url: requestUrl,
      headers: {
     
        Authorization: token
          ? token
          : window.localStorage.getItem("token") ?? undefined,
      },
      data: encryptedData ? encryptedData : undefined, 
      params: encryptedParams ? encryptedParams : undefined,
      cancelToken: source?.token ?? undefined,
    });

    return response;
  } catch (error) {
    

    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log("Response error:", error.response);
      } else if (error.request) {
        console.log("Request error:", error.request);
      } else {
        console.log("Error message:", error.message);
      }
      return error.response;
    } else {
      console.error("Unexpected error:", error);
      return undefined;
    }
  }
};
