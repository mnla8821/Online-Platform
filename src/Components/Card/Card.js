import "./Card.css";
import { useSelector } from "react-redux";
import { FaUserTie } from "react-icons/fa6";

const Card = (props) => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      <div className="front rotate">
        <FaUserTie
          size={100}
          color={
            isDark == true
              ? "var(--seconed-color-dark)"
              : "var(--seconed-color-light)"
          }
        />
      </div>
      <div
        className={
          isDark == true ? "back rotate dark-line" : "back rotate light-line"
        }
      >
        <h4
          className={
            isDark == true
              ? " nameDoctor dark-mode-text"
              : "nameDoctor light-mode-text"
          }
        >
          {props.name}
        </h4>
        <h5 className={isDark == true ? " nameMajor " : "nameMajor "}>
          Software Engineer
        </h5>
        <p className={isDark == true ? " infoDoctor " : "infoDoctor "}>
          {props.phone}
          <p className={isDark == true ? " infoDoctor " : "infoDoctor "}>
            Join To Albaath in 2010
          </p>
        </p>
      </div>
    </>
  );
};

export default Card;
