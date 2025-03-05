import { Card, CardContent } from "@/components/ui/card";

interface VideoCardProps {
  title: string;
  channel: string;
}

const VideoCard = ({ title, channel }: VideoCardProps) => {
  return (
    <Card className="flex gap-4 items-center p-4 border-b w-[80%] md:w-[60%] shadow-none border-none bg-transparent">
      <div className="w-25 h-15 bg-gray-300 rounded-xs flex-shrink-0">
        <img
          src={"https://picsum.photos/90/50"}
          alt="썸네일"
          width={90}
          height={50}
          className="rounded-md object-cover"
        />
      </div>
      <CardContent className="p-0">
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 ">{channel}</p>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
