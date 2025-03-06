const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://youtube.googleapis.com/youtube/v3/search";

export const getVideosList = async (query: string, pageToken?: string) => {
  const url = new URL(BASE_URL);
  url.searchParams.append("part", "snippet");
  url.searchParams.append("maxResults", "10");
  url.searchParams.append("q", query);
  url.searchParams.append("key", API_KEY);

  if (pageToken) {
    url.searchParams.append("pageToken", pageToken);
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("YouTube API 요청 실패");
  }

  return response.json();
};
