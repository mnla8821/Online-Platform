import { useSelector } from "react-redux";
import "./CardDocotrProjects.css";
import { BsImageFill } from "react-icons/bs";
import usePost from "../../CustomHooks/usePost";
import DoctorService from "../../Service/DoctorService";
import { useEffect, useState } from "react";

const CardDocotrProjects = (props) => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [ID, setID] = useState();
  const [wait, setWait] = useState(false);
  const [Loading, hadnleDelete] = usePost(DoctorService.DeleteProject, {
    project_id: ID,
  });
  const hadnleGetID = (id) => {
    setID(id);
    setWait(true);
    console.log(ID);
  };
  useEffect(() => {
    if (wait) {
      hadnleDelete();
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  }, [wait]);
  return (
    <>
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
        <div className="parent-remove">
          <div className="remove" onClick={() => hadnleGetID(props.id)}>
            -
          </div>
        </div>
      </div>
    </>
  );
};
export default CardDocotrProjects;
