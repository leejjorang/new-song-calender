import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import YouTube from "react-youtube";

const AddSongPage = () => {
  const location = useLocation();
  const { day, videoId } = useParams();
  const { title } = location.state;
  const [comment, setComment] = useState("");

  const handleSave = () => {
    if (!day) return;
    const newEntry = { title, videoId, comment };
    localStorage.setItem(day, JSON.stringify(newEntry));
  };

  return (
    <div className="flex flex-col flex-grow gap-8 items-center justify-center">
      <div className="flex flex-col items-center w-[100%]">
        <div className="text-[#958B82] font-semibold mb-1 w-[80%] text-center line-clamp-1">
          {title}
        </div>
        <YouTube videoId={videoId} opts={{ width: "350", height: "250" }} />
      </div>
      <Textarea
        placeholder="코멘트를 남겨주세요"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="bg-middle h-[20%] w-[80%] mt-5 rounded-xl focus-visible:ring-0 shadow-none"
      />
      <Button
        className="w-[80%] h-14 shadow-none text-xl rounded-xl"
        onClick={handleSave}
      >
        저장
      </Button>
    </div>
  );
};

export default AddSongPage;
