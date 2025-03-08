import { useInfiniteQuery } from "@tanstack/react-query";
import { getVideosList } from "@/services/searchService";

export const useYouTubeSearch = (query: string, isSearchActive: boolean) => {
  return useInfiniteQuery({
    queryKey: ["youtubeSearch", query],
    queryFn: ({ pageParam = undefined }) => getVideosList(query, pageParam),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage?.nextPageToken || undefined,
    enabled: isSearchActive,
    staleTime: 1000 * 60 * 5, //캐싱
    refetchOnWindowFocus: false,
  });
};
