import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="m-7 text-deep">
      <nav className="flex justify-between items-center">
        <img
          src={icon}
          width="30"
          height="30"
          onClick={() => navigate("/calender")}
        />
        <ul className="flex space-x-4 text-[0.85rem]">
          <li>공유하기</li>
          <li>로그아웃</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
