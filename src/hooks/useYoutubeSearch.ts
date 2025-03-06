import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getVideosList } from "@/services/searchService";

export const useYouTubeSearch = (query: string, isSearchActive: boolean) => {
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["youtubeSearch", query],
    queryFn: () => getVideosList(query, nextPageToken || undefined),
    staleTime: 1000 * 60 * 5,
    enabled: isSearchActive,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data?.nextPageToken) {
      setNextPageToken(data.nextPageToken);
    } else {
      setNextPageToken(null);
    }
  }, [data]);

  return { data, isLoading, isError, refetch, nextPageToken, setNextPageToken };
};
