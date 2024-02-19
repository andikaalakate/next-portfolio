import { axiosInstance } from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";

const useFetchPosts = () => {
  return useQuery({
    queryFn: async () => {
      const postsResponse = await axiosInstance.get("/posts");

      return postsResponse;
    },
    queryKey: ["posts"],
  });
};

export default useFetchPosts;
