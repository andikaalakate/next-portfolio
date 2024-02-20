import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/libs/axios";

export const useCreatePost = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (body) => {
      const postsResponse = await axiosInstance.post("/posts", body);

      return postsResponse;
    }, 
    onSuccess,
    onError,
  });
};