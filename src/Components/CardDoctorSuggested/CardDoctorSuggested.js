import { useSelector } from "react-redux";
import { BsImageFill } from "react-icons/bs";
import "./CardDoctorSuggested.css";

const CardDoctorSuggested = (props) => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      <div className="col-lg-3 col-md-5 col-sm-8 suggeted-card">
        <div
          className={
            isDark == true
              ? "col-lg-3 col-md-5 col-sm-8   doctor-card can-remove color1"
              : "col-lg-3 col-md-5 col-sm-8   doctor-card can-remove color2"
          }
          key={props.id}
        >
          <div className="imgo">
            <BsImageFill
              size={110}
              color={
                isDark == true
                  ? "var(--seconed-color-dark)"
                  : "var(--seconed-color-light)"
              }
            />
          </div>
          <h4>{props.title}</h4>
          <p>{props.description}</p>

          <div className="opinion">
            <button className="agree">agree</button>
            <button className="reject">reject</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDoctorSuggested;
