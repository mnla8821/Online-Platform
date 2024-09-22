import "./CurrentProject.css";
import { useSelector } from "react-redux";
import useGet from "../../CustomHooks/useGet";
import DoctorService from "../../Service/DoctorService";
import CardDocotrProjects from "../../Components/CardDocotrProjects/CardDocotrProjects";
import Button from "../../Components/Button/Button";
import Loading from "../../Components/Loading/Loading";
import useInput from "../../CustomHooks/useInput";
import { useEffect, useState } from "react";
import usePost from "../../CustomHooks/usePost";
const CurrentPorject = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [currentProjects, loading] = useGet(DoctorService.MyProjects());
  const [formData, handleChange] = useInput();
  const [Accapt, setAccapt] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [showData, setShowData] = useState(false);
  const [isShowBox, setIsShowBox] = useState(false);
  const [loadingPost, handleAddProject] = usePost(
    DoctorService.AddProjects,
    formData
  );

  const MyCurrentProjects =
    currentProjects &&
    currentProjects.map((item) => (
      <CardDocotrProjects
        title={item.title}
        id={item.id}
        description={item.description}
        is_allocated={item.is_allocated}
      />
    ));

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProject();
    setIsShowBox(false);
    setIsRefresh(true);
  };
  const handleClick = () => {
    setIsShowBox(true);
  };

  useEffect(() => {
    if (isRefresh) {
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
  }, [isRefresh]);
  return (
    <>
      <div
        className={
          isDark == true
            ? "container-fluid doctor-project dark-photo"
            : "container-fluid doctor-project light-photo"
        }
      >
        <div className="row my-project">
          {loading == true ? <Loading /> : MyCurrentProjects}
          <div
            className={
              isDark == true ? "add-peoject dark-add" : "add-peoject light-add"
            }
            onClick={handleClick}
          >
            +
          </div>
          {isShowBox == true ? (
            <div
              className={
                isDark == true
                  ? "create-group main dark strange"
                  : "create-group main light strange"
              }
            >
              <form
                action=""
                className="create-group-form"
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor=""
                  className={
                    isDark == true
                      ? "neon-dark dark-mode-text"
                      : "neon-light light-mode-text"
                  }
                >
                  Enter Your Project's Name
                </label>
                <input
                  placeholder="Enter Your Project's  Name"
                  name="title"
                  type="text"
                  value={Accapt == false ? "" : formData && formData.title}
                  onChange={(e) => handleChange(e.target)}
                  onFocus={() => setAccapt(true)}
                />
                <input
                  placeholder="Enter Your Description  "
                  name="description"
                  type="text"
                  value={
                    Accapt == false ? "" : formData && formData.description
                  }
                  onChange={(e) => handleChange(e.target)}
                  onFocus={() => setAccapt(true)}
                />
                {showData && formData && formData.description.length < 10 ? (
                  <p className="danger">Must Be At Least More Than 10 Chars</p>
                ) : (
                  ""
                )}
                <Button>Create A Group</Button>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default CurrentPorject;
