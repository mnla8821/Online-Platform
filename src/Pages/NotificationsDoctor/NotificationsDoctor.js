import { useSelector } from "react-redux";
import "./NotificationsDoctor.css";
import { IoNotifications } from "react-icons/io5";
import { useState } from "react";
import Doctor from "../Doctor/Doctor";

const NotificationsDoctor = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [suggest, setSuggest] = useState(false);
  const [order, setOrder] = useState(false);
  const handleSuggest = () => {
    setSuggest(true);
    setOrder(false);
  };
  const handleOrder = () => {
    setSuggest(false);
    setOrder(true);
  };
  return (
    <>
      <div className="note-doctor container-fluid ">
        <div className="row note-doctor-msg1">
          <div className="col-12 note-doc-info" onClick={handleSuggest}>
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
          <div className="col-12 note-doc-info" onClick={handleOrder}>
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
          <div className="col-12 note-doc-info" onClick={handleSuggest}>
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
      <div className="nothing">
        <Doctor suggest={suggest} order={order} />
      </div>
    </>
  );
};

export default NotificationsDoctor;
