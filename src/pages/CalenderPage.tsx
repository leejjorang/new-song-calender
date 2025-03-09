import { useNavigate } from "react-router-dom";
import Day from "../components/Calender/Day";

const CalenderPage = () => {
  const numbers = Array.from({ length: 12 }, (_, i) => i + 13); // 13부터 24까지의 숫자 배열
  const navigate = useNavigate();
  const onClick = (num: number) => {
    navigate(`/search/${num}`);
  };

  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <div className="grid grid-cols-3 gap-5 w-full max-w-xl min-h-5/6 p-5">
        {numbers.map((num) => (
          <Day
            key={num}
            number={num}
            visible={true}
            onClick={() => onClick(num)}
          />
        ))}
        <Day isLarge number={25} visible={false} onClick={() => onClick(25)} />
      </div>
    </div>
  );
};

export default CalenderPage;
