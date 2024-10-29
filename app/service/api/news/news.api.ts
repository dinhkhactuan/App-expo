import { axiosInterceptors } from "../../config/axios-interceptors";

export const getNews = async () => {
  try {
    const response = await axiosInterceptors.get("/top-headlines");
    return response;
  } catch (error) {
    console.log(error);
  }
};
