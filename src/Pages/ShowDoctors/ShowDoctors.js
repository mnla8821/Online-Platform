import "./ShowDoctors.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card/Card";
import useGet from "../../CustomHooks/useGet";
import usePost from "../../CustomHooks/usePost";
import DoctorService from "../../Service/DoctorService";
import Loading from "../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import StudentService from "../../Service/StudenService";

const ShowDoctors = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [doctors, loading] = useGet(DoctorService.GetAllDoctor());
  const [doctorID, setDoctorID] = useState();
  const [wait, setWaited] = useState(false);
  const [, handleDoctorProjects] = usePost(
    StudentService.SpecificDoctor,
    {
      doctor_id: doctorID,
    },
    {},
    {},
    {},
    {},
    {
      idDoctor: true,
      doctor_id: doctorID,
    }
  );

  useEffect(() => {
    if (wait) {
      handleDoctorProjects();
    }
  }, [wait]);

  const allDoctor =
    doctors &&
    doctors.map((item) => (
      <div
        onClick={() => {
          setDoctorID(item.id);
          setWaited(true);
          console.log(item.id);
        }}
        key={item.id}
        className={
          isDark == true
            ? "col-lg-2 col-md-3 col-sm-10   doco-card dark-mode-text1"
            : "col-lg-2 col-md-3 col-sm-10  doco-card light-mode-text1"
        }
      >
        <Card name={item.name} phone={item.phone} id={item.id} />
      </div>
    ));

  return (
    <>
      <div className="container-fluid show-doctors">
        <div className="row all-doctors">
          <h1
            className={
              isDark == true
                ? "dark-mode-text neon-dark"
                : "light-mode-text neon-light"
            }
          >
            CHOOSE YOUR DOCTOR
          </h1>
          <div className="list-doctor">
            {loading == true ? <Loading /> : allDoctor}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDoctors;
