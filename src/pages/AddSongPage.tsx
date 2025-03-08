import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import YouTube from "react-youtube";

const AddSongPage = () => {
  return (
    <div className="flex flex-col flex-grow gap-8 items-center justify-center">
      <div className="flex flex-col items-center w-[100%]">
        <div className="text-[#958B82] font-semibold mb-1 w-[80%] text-center line-clamp-1">
          여기에 영상 제목 만약에 이게 좀 많이 길다고 치면 이렇게
        </div>
        <YouTube videoId="7RDd382snMI" opts={{ width: "350", height: "250" }} />
      </div>
      <Textarea
        placeholder="코멘트를 남겨주세요"
        className="bg-middle h-[20%] w-[80%] mt-5 rounded-xl focus-visible:ring-0 shadow-none"
      />
      <Button className="w-[80%] h-14 shadow-none text-xl rounded-xl">
        저장
      </Button>
    </div>
  );
};

export default AddSongPage;
