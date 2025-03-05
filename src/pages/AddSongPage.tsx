import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AddSongPage = () => {
  return (
    <div className="flex flex-col flex-grow gap-8 items-center justify-center">
      <div className="bg-gray-400 h-[35%] w-[90%] rounded-sm"></div>
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
