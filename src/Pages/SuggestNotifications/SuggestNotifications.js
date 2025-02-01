import "./SuggestNotifications.css";
import { useSelector } from "react-redux";
import { IoNotifications } from "react-icons/io5";

const SuggestNotifications = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
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
            Suggest From Student
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
            Suggest From Project
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
            Suggest From Student
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
  );
};

export default SuggestNotifications;
