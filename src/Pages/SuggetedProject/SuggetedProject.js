import CardDoctorSuggested from "../../Components/CardDoctorSuggested/CardDoctorSuggested";
import Loading from "../../Components/Loading/Loading";
import useGet from "../../CustomHooks/useGet";
import DoctorService from "../../Service/DoctorService";
import "./SuggetedProject.css";
import { useSelector } from "react-redux";
const SuggetedProject = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [suggestedProjects, loading] = useGet(DoctorService.AllRequests());

  const MySuggetedProjects =
    suggestedProjects &&
    suggestedProjects.map((item) => (
      <CardDoctorSuggested
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
          {loading == true ? <Loading /> : MySuggetedProjects}
        </div>
      </div>
    </>
  );
};

export default SuggetedProject;
