import "./ShowProjects.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useGet from "../../CustomHooks/useGet";
import DoctorService from "../../Service/DoctorService";
import CardProjects from "../../Components/CardProjects/CardProjects";
import Loading from "../../Components/Loading/Loading";

const ShowProjects = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const navigate = useNavigate();
  const [doctorProjects, setdoctorProjects] = useState();
  const [Doctors, loading] = useGet(DoctorService.GetAllDoctor());
  const location = useLocation();
  const [data, setData] = useState();
  const handleNavigate = () => {
    navigate("/Chooseproject", {
      state: {},
    });
  };

  useEffect(() => {
    location.state != undefined
      ? setData(location.state.SingleDoctor)
      : console.log("err ID");
    location.state != undefined
      ? setdoctorProjects(location.state.Doctorprojects)
      : console.log("err ID");
  }, [location.state]);
  // console.log(data);
  console.log(doctorProjects);
  const myProjects =
    doctorProjects &&
    doctorProjects.map((item) => (
      <div
        className={
          isDark == true
            ? "col-lg-3 col-md-5 col-sm-8   doctor-card darke"
            : "col-lg-3 col-md-5 col-sm-8   doctor-card lighte"
        }
      >
        <CardProjects
          id={item.id}
          title={item.title}
          description={item.description}
          is_allocated={item.is_allocated}
        />
      </div>
    ));
  return (
    <div className="container-fluid show-doctors">
      <div className="row all-doctors">
        <h1
          className={
            isDark == true
              ? "dark-mode-text neon-dark"
              : "light-mode-text neon-light"
          }
        >
          {Doctors && Doctors.map((item) => (data == item.id ? item.name : ""))}
        </h1>
        <div className="row my-project">
          {loading == true ? <Loading /> : myProjects}
        </div>
      </div>
    </div>
  );
};

export default ShowProjects;
