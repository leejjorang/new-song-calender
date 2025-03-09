import YouTube from "react-youtube";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface VideoFormProps {
  title?: string;
  videoId?: string;
  day: string;
  mode: "add" | "edit" | "view";
}

const VideoForm = ({ title, videoId, day, mode }: VideoFormProps) => {
  const [comment, setComment] = useState("");
  const [localTitle, setLocalTitle] = useState(title || "");
  const [localVideoId, setLocalVideoId] = useState(videoId || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === "edit" && day) {
      const storedData = localStorage.getItem(day);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setComment(parsedData.comment || "");
        if (!title || !videoId) {
          setLocalTitle(parsedData.title || "");
          setLocalVideoId(parsedData.videoId || "");
        }
      }
    }
  }, [day, mode, title]);

  const handleSave = () => {
    if (!day) return;
    const newEntry = { title: localTitle, videoId: localVideoId, comment };
    localStorage.setItem(day, JSON.stringify(newEntry));
  };

  const handleDelete = () => {
    if (!day) return;
    localStorage.removeItem(day);
    alert("삭제되었습니다!");
    navigate(`/calender`);
  };

  return (
    <>
      <div className="flex flex-col items-center w-[100%]">
        <div className="text-[#958B82] font-semibold mb-1 w-[80%] text-center line-clamp-1">
          {localTitle}
        </div>
        <YouTube
          videoId={localVideoId}
          opts={{ width: "350", height: "250" }}
        />
      </div>
      <Textarea
        placeholder="코멘트를 남겨주세요"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="bg-middle h-[20%] w-[80%] mt-5 rounded-xl focus-visible:ring-0 shadow-none"
      />
      {mode === "add" ? (
        <Button
          className="w-[80%] h-14 shadow-none text-xl rounded-xl"
          onClick={handleSave}
        >
          저장
        </Button>
      ) : (
        <div className="flex justify-evenly w-[100%]">
          <Button className="w-[30%] h-14 shadow-none text-xl rounded-xl">
            삭제
          </Button>
          <Button
            className="w-[30%] h-14 shadow-none text-xl rounded-xl"
            onClick={handleSave}
          >
            저장
          </Button>
        </div>
      )}
    </>
  );
};

export default VideoForm;
