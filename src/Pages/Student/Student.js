import "./Student.css";
import Cookies from "js-cookies";

import { MdGroupAdd } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { FaUserTie } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { MdNotificationsActive } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { PiChatsFill } from "react-icons/pi";
import { MdGroupRemove } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chat from "../Chat/Chat";
import HomeStudent from "../HomeStudent/HomeStudent";
import ShowDoctor from "../ShowDoctors/ShowDoctors";
import Members from "../Members/Members";
import Notifications from "../Notifications/Notifications";
import { useNavigate } from "react-router-dom";
import usePost from "../../CustomHooks/usePost";
import StudentService from "../../Service/StudenService";
import YourAllocations from "../YourAllocations/YourAllocations";
import { Button } from "../../Components";
import useInput from "../../CustomHooks/useInput";
import useGet from "../../CustomHooks/useGet";

const Student = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [data, setData] = useState(false);
  const [clicko, setClicko] = useState(true);
  const [clicko1, setClicko1] = useState();
  const [clicko2, setClicko2] = useState();
  const [clicko3, setClicko3] = useState();
  const [clicko4, setClicko4] = useState();
  const [clicko5, setClicko5] = useState();
  const [clicko6, setClicko6] = useState();
  const [clicko7, setClicko7] = useState();
  const [clicko8, setClicko8] = useState();
  const [formData, handleChange] = useInput();
  const [Accapt, setAccapt] = useState(false);
  const [showData, setShowData] = useState(false);

  const navigate = useNavigate();

  const [loadingPost, handleCreateGroup, err] = usePost(
    StudentService.CreateGroup,
    formData
  );
  const [isOwner, loadingGet] = useGet(StudentService.IsOwner());

  const fetchData = async () => {
    try {
      const headers = new Headers();
      const token = localStorage.getItem("token");
      headers.append("Authorization", `Bearer ${token}`);
      const response = await fetch("https://nebot.synked.cloud/api/out/group", {
        method: "GET", // أو أي طريقة أخرى حسب الحاجة
        headers: headers,
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = () => {
    setClicko(true);
    setClicko1(false);
    setClicko2(false);
    setClicko3(false);
    setClicko4(false);
    setClicko5(false);
    setClicko6(false);
    setClicko7(false);
    setClicko8(false);
  };
  const handleClick1 = () => {
    setClicko(false);
    setClicko1(true);
    setClicko2(false);
    setClicko3(false);
    setClicko4(false);
    setClicko5(false);
    setClicko6(false);
    setClicko7(false);
    setClicko8(false);
  };
  const handleClick2 = () => {
    setClicko(false);
    setClicko1(false);
    setClicko2(true);
    setClicko3(false);
    setClicko4(false);
    setClicko5(false);
    setClicko6(false);
    setClicko7(false);
    setClicko8(false);
  };
  const handleClick3 = () => {
    setClicko(false);
    setClicko1(false);
    setClicko2(false);
    setClicko3(true);
    setClicko4(false);
    setClicko5(false);
    setClicko6(false);
    setClicko7(false);
    setClicko8(false);
  };
  const handleClick4 = () => {
    setClicko(false);
    setClicko1(false);
    setClicko2(false);
    setClicko3(false);
    setClicko4(true);
    setClicko5(false);
    setClicko6(false);
    setClicko7(false);
    setClicko8(false);
  };
  const handleClick5 = () => {
    setClicko(false);
    setClicko1(false);
    setClicko2(false);
    setClicko3(false);
    setClicko4(false);
    setClicko5(true);
    setClicko6(false);
    setClicko7(false);
    setClicko8(false);
    fetchData();
  };
  const handleClick6 = () => {
    setClicko(false);
    setClicko1(false);
    setClicko2(false);
    setClicko3(false);
    setClicko4(false);
    setClicko5(false);
    setClicko6(true);
    setClicko7(false);
    setClicko8(false);
  };
  const handleClick8 = () => {
    setClicko(false);
    setClicko1(false);
    setClicko2(false);
    setClicko3(false);
    setClicko4(false);
    setClicko5(false);
    setClicko6(false);
    setClicko7(false);
    setClicko8(true);
  };
  const handleClick7 = () => {
    setClicko(false);
    setClicko1(false);
    setClicko2(false);
    setClicko3(false);
    setClicko4(false);
    setClicko5(false);
    setClicko6(false);
    setClicko7(true);
    setClicko8(false);
    localStorage.setItem("token", "");
    Cookies.setItem("user_id", "");
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateGroup();
    setAccapt(true);
    setShowData(true);
    setClicko3(false);
    setClicko8(true);
  };

  useEffect(() => {
    if (isOwner) {
      localStorage.setItem("isOwner", isOwner.is_owner);
      localStorage.setItem("isMember", isOwner.is_group_member);
    }
  }, [isOwner, localStorage]);

  return (
    <>
      <div className="student container-fluid">
        <div className="row profile-student">
          <div
            className={
              isDark == true
                ? "dashborad col-lg-1 dark-color-box bord-dark"
                : "dashborad col-lg-1 light-color-box bord-light"
            }
          >
            <div className=" icons-dash col-lg-12">
              <div
                className={
                  isDark == true
                    ? "icon-side dark-color-box"
                    : "icon-side light-color-box"
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
                <FaUserTie
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
                  Doctors
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
                <GrProjects
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
                  All-students
                </p>
              </div>
              {isOwner &&
              isOwner.is_owner == false &&
              isOwner &&
              isOwner.is_group_member == false ? (
                <div
                  className="icon-side "
                  onClick={handleClick3}
                  style={
                    clicko3 == true
                      ? { backgroundColor: "var(--main-color-dark) " }
                      : { backgroundColor: "" }
                  }
                >
                  <MdGroupAdd
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
                    Create/Group
                  </p>
                </div>
              ) : (
                <>
                  <div
                    className="icon-side "
                    onClick={handleClick8}
                    style={
                      clicko8 == true
                        ? { backgroundColor: "var(--main-color-dark) " }
                        : { backgroundColor: "" }
                    }
                  >
                    <FaPeopleGroup
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
                      Your Group
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
                    <PiChatsFill
                      size={35}
                      onClick={handleClick4}
                      color={
                        isDark == true
                          ? "var(--seconed-color-dark)"
                          : "var(--seconed-color-light)"
                      }
                      style={
                        clicko4 == true
                          ? { backgroundColor: "var(--main-color-dark) " }
                          : { backgroundColor: "" }
                      }
                    />
                    <p
                      className={
                        isDark == true ? "dark-mode-text" : "light-mode-text"
                      }
                    >
                      Chat
                    </p>
                  </div>
                  <div
                    className="icon-side "
                    onClick={handleClick5}
                    style={
                      clicko5 == true
                        ? { backgroundColor: "var(--main-color-dark) " }
                        : { backgroundColor: "" }
                    }
                  >
                    <MdGroupRemove
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
                      Leave/Group
                    </p>
                  </div>
                </>
              )}
              <div
                className="icon-side "
                onClick={handleClick6}
                style={
                  clicko6 == true
                    ? { backgroundColor: "var(--main-color-dark) " }
                    : { backgroundColor: "" }
                }
              >
                <MdNotificationsActive
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
                onClick={handleClick7}
                style={
                  clicko7 == true
                    ? { backgroundColor: "var(--main-color-dark) " }
                    : { backgroundColor: "" }
                }
              >
                <AiOutlineLogout
                  rotate={"180deg"}
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
          <div className="student-content col-lg-11">
            {clicko == true ? <HomeStudent /> : ""}
            {clicko1 == true ? <ShowDoctor /> : ""}
            {clicko2 == true ? <Members /> : ""}
            {clicko3 == true ? (
              <div
                className={
                  isDark == true
                    ? "create-group main dark"
                    : "create-group main light"
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
                    Enter Your Group's Name
                  </label>
                  <input
                    placeholder="Enter Your Group's  Name"
                    name="group_name"
                    type="text"
                    value={
                      Accapt == false ? "" : formData && formData.group_name
                    }
                    onChange={(e) => handleChange(e.target)}
                    onFocus={() => setAccapt(true)}
                  />
                  {showData && formData && formData.group_name.length < 5 ? (
                    <p className="danger">Must Be At Least More Than 5 Chars</p>
                  ) : (
                    ""
                  )}
                  <Button>Create A Group</Button>
                </form>
              </div>
            ) : (
              ""
            )}
            {clicko4 == true ? <Chat /> : ""}
            {clicko5 == true ? "" : ""}
            {clicko6 == true ? <Notifications /> : ""}
            {clicko8 == true ? <YourAllocations /> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
