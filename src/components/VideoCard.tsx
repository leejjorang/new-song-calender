import { Card, CardContent } from "@/components/ui/card";

interface VideoCardProps {
  title: string;
  channel: string;
  thumbnail: string;
}

const VideoCard = ({ title, channel, thumbnail }: VideoCardProps) => {
  return (
    <Card className="flex gap-4 items-center p-2 border-b w-[88%] md:w-[60%] shadow-none border-none bg-transparent">
      <div className="w-[88px] h-[60px] rounded-xs flex-shrink-0">
        <img
          src={thumbnail}
          alt="썸네일"
          width={88}
          height={60}
          className="rounded-md object-cover"
        />
      </div>
      <CardContent className="p-0">
        <h3 className="text-[0.9rem] leading-5 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-1">{channel}</p>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
