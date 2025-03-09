import VideoForm from "@/components/VideoForm";
import { useParams } from "react-router-dom";

const EditSongPage = () => {
  const { day } = useParams();

  return (
    <div className="flex flex-col flex-grow gap-8 items-center justify-center">
      <VideoForm day={day as string} mode="edit" />
    </div>
  );
};

export default EditSongPage;
