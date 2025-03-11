import { Button } from "@/components/ui/button";
import SnowfallCanvas from "@/components/snowFallCanvas";
import tree from "@/assets/tree-image.png";

const StartPage = () => {
  return (
    <div className="flex-col min-h-screen bg-main">
      <SnowfallCanvas />
      <div className="font-Antic text-5xl absolute top-[23%] left-11">
        <span className="block">Advent</span>
        <span className="block mt-3">Song</span>
        <span className="block mt-3">Calender</span>
      </div>
      {/* <img
        src={tree}
        alt="tree image"
        className="max-w-full h-auto absolute left-8"
      /> */}
      <div className="flex width-[100%] justify-center">
        <Button className="w-[80%] h-14 shadow-none text-[1.1rem] rounded-xl absolute  bottom-[23%]">
          구글 로그인으로 시작하기
        </Button>
      </div>
    </div>
  );
};

export default StartPage;
