import { useSelector } from "react-redux";
import "./HomeStudent.css";
const HomeStudent = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      <div
        className={
          isDark == true
            ? "home-student dark-mode-text"
            : "home-student light-mode-text"
        }
      >
        Create A Group Or Accapte An Invetation To Chat
      </div>
    </>
  );
};

export default HomeStudent;
