import "./Notifications.css";
import { useSelector } from "react-redux";
import { MdNotificationsActive } from "react-icons/md";

const Notifications = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      <div className="note container-fluid">
        <div className="row note-row">
          <div className="message-note col-12">
            <div className="col-1 member-picture">
              <MdNotificationsActive
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
                  ? "col-8 member-name  dark-mode-text"
                  : "col-8 member-name  light-mode-text"
              }
            >
              You Have Been Invited To The Front To Group
            </div>
            <div
              className={
                isDark == true
                  ? "col-1 dark-mode-text"
                  : "col-1 light-mode-text "
              }
            >
              Group One
            </div>
            <div className="opinion col-2">
              <button className="agree">agree</button>
              <button className="reject">reject</button>
            </div>
          </div>
          <div className="message-note col-12">
            <div className="col-1 member-picture">
              <MdNotificationsActive
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
                  ? "col-8 member-name  dark-mode-text"
                  : "col-8 member-name  light-mode-text"
              }
            >
              You Have Been Invited To The Front To Group
            </div>
            <div
              className={
                isDark == true
                  ? "col-1 dark-mode-text"
                  : "col-1 light-mode-text "
              }
            >
              Group One
            </div>
            <div className="opinion col-2">
              <button className="agree">agree</button>
              <button className="reject">reject</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Notifications;
