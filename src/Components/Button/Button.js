import "./Button.css";
import { useSelector } from "react-redux";

const Button = (props) => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <button
      className={
        isDark == true ? "button dark-mode-btn" : "button light-mode-btn "
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
