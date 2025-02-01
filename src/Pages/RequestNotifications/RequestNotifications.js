import { useSelector } from "react-redux";
import "./RequestNotifications.css";
import { IoNotifications } from "react-icons/io5";

const RequestNotifications = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      <div className="note-doctor container-fluid ">
        <div className="row note-doctor-msg1">
          <div className="col-12 note-doc-info">
            <div className="col-2 icon-note">
              <IoNotifications
                size={35}
                color={
                  isDark == true
                    ? "var(--seconed-color-dark)"
                    : "var(--seconed-color-light)"
                }
              />
            </div>
            <div
              className={
                isDark == true
                  ? "col-3 dark-mode-text note-doc-name"
                  : "col-3 light-mode-text  note-doc-name"
              }
            >
              Request From Student
            </div>
            <div
              className={
                isDark == true
                  ? "col-3 dark-mode-text  note-doc-name"
                  : "col-3 light-mode-text  note-doc-name"
              }
            >
              Project Name
            </div>
          </div>
          <div className="col-12 note-doc-info">
            <div className="col-2 icon-note">
              <IoNotifications
                size={35}
                color={
                  isDark == true
                    ? "var(--seconed-color-dark)"
                    : "var(--seconed-color-light)"
                }
              />
            </div>
            <div
              className={
                isDark == true
                  ? "col-3 dark-mode-text note-doc-name"
                  : "col-3 light-mode-text  note-doc-name"
              }
            >
              Request For Project
            </div>
            <div
              className={
                isDark == true
                  ? "col-3 dark-mode-text  note-doc-name"
                  : "col-3 light-mode-text  note-doc-name"
              }
            >
              Project Name
            </div>
          </div>
          <div className="col-12 note-doc-info">
            <div className="col-2 icon-note">
              <IoNotifications
                size={35}
                color={
                  isDark == true
                    ? "var(--seconed-color-dark)"
                    : "var(--seconed-color-light)"
                }
              />
            </div>
            <div
              className={
                isDark == true
                  ? "col-3 dark-mode-text note-doc-name"
                  : "col-3 light-mode-text  note-doc-name"
              }
            >
              Reqeust From Student
            </div>
            <div
              className={
                isDark == true
                  ? "col-3 dark-mode-text  note-doc-name"
                  : "col-3 light-mode-text  note-doc-name"
              }
            >
              Project Name
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestNotifications;
