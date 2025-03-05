import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import VideoCard from "@/components/VideoCard";

const SearchPage = () => {
  return (
    <div className="flex flex-grow w-[100%] flex-col gap-4">
      <div className="flex items-center justify-center h-fit w-full">
        <Input
          placeholder="유튜브 검색"
          className="bg-transparent focus:border-white h-12 w-[60%] md:w-[50%] m-3 shadow-none focus-visible:ring-[#958B82]"
        />
        <Button className="m-3 h-12 bg-middle hover:bg-[#cdc8c3] shadow-none">
          <Search color="#958B82" />
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <VideoCard title="제목" channel="채널" />
        <VideoCard title="제목" channel="채널" />
      </div>
    </div>
  );
};

export default SearchPage;
