import { useQuery } from "react-query";
import { fetchPostById, fetchPosts } from '../api/postApi';

export const useGetPosts = (currentPage) => {
  return useQuery(['posts', currentPage], () => fetchPosts(currentPage), {
    staleTime: Infinity,
  });
};

export const useGetPostById = (postId) => {
  return useQuery(['post', postId], () => fetchPostById(postId), {
      staleTime: Infinity,
  }) 
}
