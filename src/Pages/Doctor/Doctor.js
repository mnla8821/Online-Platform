import "./Doctor.css";
import { useSelector } from "react-redux";
import Cookies from "js-cookies";
import { GoHomeFill } from "react-icons/go";
import { PiChatsFill } from "react-icons/pi";
import { MdNotificationsActive } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { useEffect, useState } from "react";
import Boxes from "../Boxes/Boxes";
import Chat from "../Chat/Chat";
import NotificationsDoctor from "../NotificationsDoctor/NotificationsDoctor";
import SuggestNotifications from "../SuggestNotifications/SuggestNotifications";
import { useNavigate } from "react-router-dom";
const Doctor = ({ suggest, order }) => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [clicko, setClicko] = useState(true);
  const [clicko1, setClicko1] = useState();
  const [clicko2, setClicko2] = useState();
  const [clicko3, setClicko3] = useState();
  const [clicko4, setClicko4] = useState();
  const navigate = useNavigate();
  const [sugg, setSugg] = useState(suggest);
  const handleClick = () => {
    setClicko(true);
    setClicko1(false);
    setClicko2(false);
    setClicko3(false);
    setClicko4(false);
  };
  const handleClick1 = () => {
    setClicko(false);
    setClicko1(true);
    setClicko2(false);
    setClicko3(false);
    setClicko4(false);
  };
  const handleClick2 = () => {
    setClicko(false);
    setClicko1(false);
    setClicko2(true);
    setClicko3(false);
    setClicko4(false);
  };
  const handleClick3 = () => {
    setClicko(false);
    setClicko1(false);
    setClicko2(false);
    setClicko3(true);
    setClicko4(false);
  };
  const handleClick4 = () => {
    setClicko(false);
    setClicko1(false);
    setClicko2(false);
    setClicko3(false);
    setClicko4(true);
    localStorage.setItem("token", "");
    Cookies.setItem("user_id", "");

    navigate("/");
  };
  useEffect(() => {
    if (suggest) {
      setSugg(suggest);
      setClicko2(false);
    }
  }, [suggest, clicko2]);
  console.log(`sugg is ${sugg}`);
  console.log(`click2 is ${clicko2}`);
  return (
    <>
      <div className="container-fluid doctor">
        <div className="doctor-profile ">
          <div
            className={
              isDark == true
                ? "doctor-avatar dark-line"
                : "doctor-avatar light-line"
            }
          ></div>
          <h2 className={isDark == true ? "dark-mode-text" : "light-mode-text"}>
            DOCTOR ALAA ALDEEN
          </h2>
          <div className="doctor-dash">
            <div
              className={
                isDark == true
                  ? "dashborad col-lg-1 col-sm-12 dark-color-box bord-dark doc-dash"
                  : "dashborad col-lg-1 col-sm-12 light-color-box bord-light doc-dash"
              }
            >
              <div className=" icons-dash col-lg-12 col-sm-12">
                <div
                  className={
                    isDark == true
                      ? "icon-side dark-color-box col-sm-12"
                      : "icon-side light-color-box col-sm-12"
                  }
                  onClick={handleClick}
                  style={
                    clicko == true
                      ? { backgroundColor: "var(--main-color-dark) " }
                      : { backgroundColor: "" }
                  }
                >
                  <GoHomeFill
                    size={35}
                    color={
                      isDark == true
                        ? "var(--seconed-color-dark)"
                        : "var(--seconed-color-light)"
                    }
                  />
                  <p
                    className={
                      isDark == true ? "dark-mode-text" : "light-mode-text"
                    }
                  >
                    Home
                  </p>
                </div>
                <div
                  className="icon-side"
                  onClick={handleClick1}
                  style={
                    clicko1 == true
                      ? { backgroundColor: "var(--main-color-dark) " }
                      : { backgroundColor: "" }
                  }
                >
                  <PiChatsFill
                    size={35}
                    color={
                      isDark == true
                        ? "var(--seconed-color-dark)"
                        : "var(--seconed-color-light)"
                    }
                  />
                  <p
                    className={
                      isDark == true ? "dark-mode-text" : "light-mode-text"
                    }
                  >
                    Chats
                  </p>
                </div>
                <div
                  className="icon-side "
                  onClick={handleClick2}
                  style={
                    clicko2 == true
                      ? { backgroundColor: "var(--main-color-dark) " }
                      : { backgroundColor: "" }
                  }
                >
                  <MdNotificationsActive
                    onClick={handleClick3}
                    size={35}
                    color={
                      isDark == true
                        ? "var(--seconed-color-dark)"
                        : "var(--seconed-color-light)"
                    }
                  />
                  <p
                    className={
                      isDark == true ? "dark-mode-text" : "light-mode-text"
                    }
                  >
                    Notifications
                  </p>
                </div>
                <div
                  className="icon-side "
                  onClick={handleClick4}
                  style={
                    clicko4 == true
                      ? { backgroundColor: "var(--main-color-dark) " }
                      : { backgroundColor: "" }
                  }
                >
                  <AiOutlineLogout
                    size={35}
                    color={
                      isDark == true
                        ? "var(--seconed-color-dark)"
                        : "var(--seconed-color-light)"
                    }
                  />
                  <p
                    className={
                      isDark == true ? "dark-mode-text" : "light-mode-text"
                    }
                  >
                    Log-Out
                  </p>
                </div>
              </div>
            </div>

            <div className="boxes col-lg-11 col-sm-12">
              {clicko == true ? <Boxes /> : ""}
              {clicko1 == true ? <Chat /> : ""}
              {sugg == true ? <SuggestNotifications /> : ""}
              {clicko2 == true ? <NotificationsDoctor /> : ""}
              {clicko3 == true ? "" : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor;
