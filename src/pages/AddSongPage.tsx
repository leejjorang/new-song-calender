import { useLocation, useParams } from "react-router-dom";
import VideoForm from "@/components/VideoForm";

const AddSongPage = () => {
  const location = useLocation();
  const { day, videoId } = useParams();
  const { title } = location.state;

  return (
    <div className="flex flex-col flex-grow gap-8 items-center justify-center">
      <VideoForm
        title={title}
        videoId={videoId as string}
        day={day as string}
        mode="add"
      />
    </div>
  );
};

export default AddSongPage;
