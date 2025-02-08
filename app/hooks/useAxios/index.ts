import axios from "axios";

interface AxiosType {
  url: string;
  method?: "GET" | "POST" | "UPDATE" | "DELETE" | "PATCH";
  headers?: object;
  params?: object;
}

export const useAxios = () => {
  const response = ({ url, method = "GET", headers, params }: AxiosType) => {
    return axios({
      url: `https://fakestoreapi.com/${url}`,
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      params: {
        ...params,
      },
    }).then((data) => data.data);
  };
  return response;
};
