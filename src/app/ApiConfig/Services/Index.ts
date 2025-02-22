import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import apiConfigs from "../apiConfig";

interface ApiRouterCallParams {
  method: AxiosRequestConfig["method"];
  id?: string | number;
  endPoint: keyof typeof apiConfigs; // Ensure endPoint is a valid key of apiConfigs
  data?: Record<string, any> | null;
  params?: Record<string, any> | null;
  token?: any;
  url?: string;
  source?: { token: any }; // Optional cancel token for axios
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
  console.log(">>>>>>>>>encryptedData", encryptedData);

  try {
    const requestUrl = url
      ? url
      : id
      ? `${apiConfigs[endPoint]}/${id}` // Ensuring the URL is correctly typed
      : apiConfigs[endPoint];

    console.log("Request URL:", requestUrl);

    const response = await axios({
      method: method,
      url: requestUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization: token
          ? token
          : window.localStorage.getItem("token") ?? undefined,
      },
      data: encryptedData ? encryptedData : undefined, // Send encrypted data
      params: encryptedParams ? encryptedParams : undefined, // Send encrypted params
      cancelToken: source?.token ?? undefined,
    });

    return response;
  } catch (error) {
    console.log(">>>>>>>>>>>error", error);

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
