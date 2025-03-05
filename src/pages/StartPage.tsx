import { Button } from "@/components/ui/button";
import tree from "@/assets/tree-image.png";

const StartPage = () => {
  return (
    <div className="flex-col min-h-screen bg-main">
      <div className="font-Antic text-5xl absolute top-9 left-5">
        <span className="block mt-1">Advent</span>
        <span className="block">Song</span>
        <span className="block mt-1">Calender</span>
      </div>
      {/* <img
        src={tree}
        alt="tree image"
        className="max-w-full h-auto absolute left-8"
      /> */}
      <Button className="w-[80%] h-14 shadow-none text-xl rounded-xl">
        시작하기
      </Button>
    </div>
  );
};

export default StartPage;
