import React from "react";
import icon13 from "@/assets/day-icons/13.png";
import icon14 from "@/assets/day-icons/14.png";
import icon15 from "@/assets/day-icons/15.png";
import icon16 from "@/assets/day-icons/16.png";
import icon17 from "@/assets/day-icons/17.png";
import icon18 from "@/assets/day-icons/18.png";
import icon19 from "@/assets/day-icons/19.png";
import icon20 from "@/assets/day-icons/20.png";
import icon21 from "@/assets/day-icons/21.png";
import icon22 from "@/assets/day-icons/22.png";
import icon23 from "@/assets/day-icons/23.png";
import icon24 from "@/assets/day-icons/24.png";

interface IDayProps {
  isLarge?: boolean;
  bgColor?: string;
  number: number;
  visible: boolean;
  onClick: () => void;
}

const iconMap: { [key: number]: string } = {
  13: icon13,
  14: icon14,
  15: icon15,
  16: icon16,
  17: icon17,
  18: icon18,
  19: icon19,
  20: icon20,
  21: icon21,
  22: icon22,
  23: icon23,
  24: icon24,
};

const Day: React.FC<IDayProps> = ({
  isLarge = false,
  bgColor = "bg-deep",
  number,
  visible,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isLarge ? "col-span-3 bg-[#589579]" : `${bgColor}`
      } rounded-lg flex flex-col items-center justify-between text-[#F5F5F5] text-s p-1 min-h-[4.5rem]`}
    >
      <div>{number}</div>
      {visible && <img src={iconMap[number]} className="w-6 h-6" />}
    </div>
  );
};

export default Day;
