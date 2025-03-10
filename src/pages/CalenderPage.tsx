import { useNavigate } from "react-router-dom";
import Day from "../components/Calender/Day";
import { useEffect, useState } from "react";

const CalenderPage = () => {
  const numbers = Array.from({ length: 12 }, (_, i) => i + 13); // 13부터 24까지의 숫자 배열
  const navigate = useNavigate();
  const [visibleDays, setVisibleDays] = useState<{ [key: number]: boolean }>(
    {}
  );

  useEffect(() => {
    const storedKeys = Object.keys(localStorage);
    const newVisibleDays = numbers.reduce((acc, num) => {
      acc[num] = storedKeys.includes(num.toString());
      return acc;
    }, {} as { [key: number]: boolean });
    newVisibleDays[25] = storedKeys.includes("25");

    setVisibleDays(newVisibleDays);
  }, []);

  const onClick = (num: number) => {
    if (visibleDays[num]) {
      navigate(`/edit-song/${num}`);
    } else {
      navigate(`/search/${num}`);
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <div className="grid grid-cols-3 gap-5 w-full max-w-xl min-h-5/6 p-5">
        {numbers.map((num) => (
          <Day
            key={num}
            number={num}
            visible={visibleDays[num]}
            onClick={() => onClick(num)}
          />
        ))}
        <Day
          isLarge
          number={25}
          visible={visibleDays[25]}
          onClick={() => onClick(25)}
        />
      </div>
    </div>
  );
};

export default CalenderPage;
