import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import VideoCard from "@/components/VideoCard";
import { useEffect, useState } from "react";
import { useYouTubeSearch } from "@/hooks/useYoutubeSearch";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { data, isLoading, isError, refetch, nextPageToken, setNextPageToken } =
    useYouTubeSearch(query, isSearchActive);

  const handleSearch = () => {
    if (query.trim() !== "") {
      setIsSearchActive(true);
      setNextPageToken(null);
      refetch();
    }
  };

  useEffect(() => {
    setIsSearchActive(false);
  }, [query]);

  console.log(data, isError);

  return (
    <div className="flex flex-grow w-[100%] flex-col gap-4">
      <div className="flex items-center justify-center h-fit w-full">
        <Input
          placeholder="유튜브 검색"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent focus:border-white h-12 w-[60%] md:w-[50%] m-3 shadow-none focus-visible:ring-[#958B82]"
        />
        <Button
          onClick={handleSearch}
          className="m-3 h-12 bg-middle hover:bg-[#cdc8c3] shadow-none"
        >
          <Search color="#958B82" />
        </Button>
      </div>
      <div className="flex flex-col items-center">
        {data?.items.map((video) => (
          <VideoCard
            key={video.id?.videoId || video.etag}
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            thumbnail={video.snippet.thumbnails.default.url}
          />
        ))}
        <VideoCard
          title="어쩌구 저쩌구 매우 긴 제목이 있다고 합니다람쥐 여기서 더 길어야 한다구"
          channel="어쩌구채널"
          thumbnail="https://i.ytimg.com/vi/A3TAPTU7fWk/default.jpg"
        />
        <VideoCard
          title="짧은 제목"
          channel="짧은채널"
          thumbnail="https://i.ytimg.com/vi/A3TAPTU7fWk/default.jpg"
        />
      </div>
    </div>
  );
};

export default SearchPage;
