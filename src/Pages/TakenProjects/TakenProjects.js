import { useSelector } from "react-redux";
import { CardDocotrProjects } from "../../Components";
import "./TakenProjects.css";
import useGet from "../../CustomHooks/useGet";
import Loading from "../../Components/Loading/Loading";
import DoctorService from "../../Service/DoctorService";

const TakenProjects = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [AccaptedProjects, loading] = useGet(DoctorService.AllAccapted());
  const MyAccaptedProjects =
    AccaptedProjects &&
    AccaptedProjects.map((item) => (
      <CardDocotrProjects
        id={item.project.id}
        title={item.project.title}
        description={item.project.description}
        is_allocated={item.project.is_allocated}
      />
    ));

  return (
    <>
      <div
        className={
          isDark == true
            ? "container-fluid suggeted-project dark-photo"
            : "container-fluid suggeted-project light-photo"
        }
      >
        <div className="row my-suggeted-project">
          {loading == true ? <Loading /> : MyAccaptedProjects}
        </div>
      </div>
    </>
  );
};

export default TakenProjects;
