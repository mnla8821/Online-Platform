import { useSelector } from "react-redux";
import "./CardProjects.css";
import { BsImageFill } from "react-icons/bs";

const CardProjects = (props) => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      <div className={isDark == true ? "dark-imgo imgo" : "light-imgo imgo"}>
        <BsImageFill
          size={110}
          color={
            isDark == true
              ? "var(--seconed-color-dark)"
              : "var(--seconed-color-light)"
          }
        />
      </div>
      <h4 className="mama">{props.title}</h4>
      <p className="papa">{props.description}</p>
    </>
  );
};

export default CardProjects;
