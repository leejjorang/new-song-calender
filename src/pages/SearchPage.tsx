import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import VideoCard from "@/components/VideoCard";
import { useEffect, useRef, useState } from "react";
import { useYouTubeSearch } from "@/hooks/useYoutubeSearch";
import { Loader2 } from "lucide-react";
import he from "he";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useYouTubeSearch(query, isSearchActive);
  const observerRef = useRef(null);

  const handleSearch = () => {
    if (query.trim() !== "") {
      setIsSearchActive(true);
    }
  };

  useEffect(() => {
    setIsSearchActive(false);
  }, [query]);

  //무한스크롤
  useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

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
        {data?.pages.map((page) =>
          page.items.map((video: any) => (
            <VideoCard
              key={video.id?.videoId || video.etag}
              title={he.decode(video.snippet.title)}
              channel={he.decode(video.snippet.channelTitle)}
              thumbnail={video.snippet.thumbnails.default.url}
            />
          ))
        )}
      </div>
      {isLoading && (
        <div className="flex justify-center">
          <Loader2 className="animate-spin text-[#958B82] " />
        </div>
      )}
      <div ref={observerRef} className="h-10" />
    </div>
  );
};

export default SearchPage;
