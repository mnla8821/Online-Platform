import "./SignUp.css";
import { useSelector } from "react-redux";
import { Button } from "../../Components";
import { useEffect, useState } from "react";
import Cookies from "js-cookies";
import openedDark from "../../Assets/Images/Signup/opend1.png";
import closedDark from "../../Assets/Images/Signup/closed1.png";
import openedLight from "../../Assets/Images/Signup/opend1 copy.png";
import closedLight from "../../Assets/Images/Signup/closed1 copy.png";
import useInput from "../../CustomHooks/useInput";
import usePost from "../../CustomHooks/usePost";
import LoginService from "../../Service/LoginService";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [isShown, setIsShown] = useState(false);
  const [myImg, setMyImg] = useState();
  const [Accapt, setAccapt] = useState(false);
  const [showData, setShowData] = useState(false);
  const [showData2, setShowData2] = useState(false);
  const [keyRole, setKeyRole] = useState();
  const [formData, handleChange] = useInput();
  const navigate = useNavigate();
  const [loading1, handleCheckLogin, err1] = usePost(
    LoginService.Login,
    formData,
    {
      isSignUp: false,
      isSignIn: true,
    }
  );
  const [loading, handleCheckSignUP, err] = usePost(
    LoginService.Signup,
    formData,
    {
      isSignUp: true,
      isSignIn: false,
    }
  );
  const [loading2, handleForget] = usePost(LoginService.ForgetPassword, {
    email: formData && formData.email,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheckSignUP();
    setAccapt(true);
    setShowData(true);
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    handleCheckLogin();
    setAccapt(true);
    setShowData2(true);
  };

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const handleForgetPassword = () => {
    handleForget();
    navigate("/ForgetPassword");
  };

  useEffect(() => {
    if (isDark && isShown == true) {
      setMyImg(openedDark);
    } else if (isDark == true && isShown == false) {
      setMyImg(closedDark);
    } else if (isDark == false && isShown == true) {
      setMyImg(openedLight);
    } else {
      setMyImg(closedLight);
    }
    let keyRole = "";
    if (formData && formData.role_id === "2") {
      keyRole = "student_key";
    } else {
      keyRole = "doctor_key";
    }
    setKeyRole(keyRole);
  }, [myImg, isDark, isShown, formData]);
  console.log(keyRole);
  return (
    <div className={isDark == true ? "body dark" : "body light"}>
      <div className={isDark == true ? "main dark" : "main light"}>
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form action="" method="post" onSubmit={handleSubmit}>
            <label
              htmlFor="chk"
              className={
                isDark == true
                  ? "dark-mode-text base-label"
                  : "light-mode-text base-label"
              }
            >
              SIGN UP
            </label>
            <div className="middle">
              <input
                name="name"
                type="text"
                placeholder="USER NAME"
                value={Accapt == false ? "" : formData && formData.name}
                onChange={(e) => handleChange(e.target)}
                onFocus={() => setAccapt(true)}
              />
              {showData && formData && formData.name.length < 1 ? (
                <p className="danger">Must be at least one char</p>
              ) : (
                ""
              )}
              <input
                name="email"
                type="text"
                placeholder=" EMAIL"
                value={Accapt == false ? "" : formData && formData.email}
                onChange={(e) => handleChange(e.target)}
                onFocus={() => setAccapt(true)}
              />

              {showData && formData && !formData.email.includes("@") ? (
                <p className="danger">Must contain @</p>
              ) : (
                ""
              )}

              <input
                name="password"
                type={isShown == true ? "text" : "password"}
                placeholder=" PASSWORD"
                required
                className="face1"
                value={Accapt == false ? "" : formData && formData.password}
                onChange={(e) => handleChange(e.target)}
                onFocus={() => setAccapt(true)}
              />
              {showData && formData && formData.password.length < 8 ? (
                <p className="danger">Must be at least 8 chars</p>
              ) : (
                ""
              )}

              <input
                name="phone"
                type={isShown == true ? "text" : "password"}
                placeholder=" YOUR CODE"
                required
                className="face1"
                value={Accapt == false ? "" : formData && formData.phone}
                onChange={(e) => handleChange(e.target)}
                onFocus={() => setAccapt(true)}
              />
              {showData && formData && formData.phone.length < 9 ? (
                <p className="danger">Must be 9 chars</p>
              ) : (
                ""
              )}
              <div className="doc-std">
                <div className="stdbox">
                  <label
                    htmlFor="2"
                    className={
                      isDark == true ? "dark-mode-text" : "light-mode-text"
                    }
                  >
                    Student
                  </label>
                  <input
                    type="radio"
                    name="role_id"
                    id="2"
                    value="2"
                    onChange={(e) => handleChange(e.target)}
                  />
                </div>
                <div className="docbox">
                  <label
                    htmlFor="1"
                    className={
                      isDark == true ? "dark-mode-text" : "light-mode-text"
                    }
                  >
                    Doctor
                  </label>
                  <input
                    type="radio"
                    name="role_id"
                    id="1"
                    value="1"
                    onChange={(e) => handleChange(e.target)}
                  />
                </div>
              </div>
              {keyRole === "2" ? (
                <input
                  type="hidden"
                  name="student_key"
                  value={formData && formData.student_key}
                />
              ) : (
                <input
                  type="hidden"
                  name="doctor_key"
                  value={formData && formData.doctor_key}
                />
              )}
              <div className="img-state">
                <img
                  src={myImg}
                  onClick={handleClick}
                  alt=""
                  style={
                    isShown == false
                      ? {
                          transform: "translateX(0) rotate(0deg)",
                          transition: "1s",
                        }
                      : {
                          transform: "translateX(168px)rotate(360deg)",
                          transition: "1s",
                        }
                  }
                />
              </div>
              <div
                className={isDark == true ? "btn-log darko" : "btn-log lighto"}
              >
                <Button>
                  {loading == null
                    ? "Register"
                    : loading == true
                    ? "تم تسجيل الدخول بنجاح"
                    : loading == false
                    ? `${err}`
                    : "يرجى الانتظار ..."}
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className={isDark == true ? "login dark" : "login light"}>
          <form action="" method="post" onSubmit={handleSubmit2}>
            <label htmlFor="chk">LOG IN</label>
            <div className="middle">
              <input name="name" type="hidden" value="" />
              <input
                name="email"
                type="text"
                placeholder="EMAIL"
                required
                value={Accapt == false ? "" : formData && formData.email}
                onChange={(e) => handleChange(e.target)}
                onFocus={() => setAccapt(true)}
              />
              {showData2 && !formData.email.includes("@") ? (
                <p className="danger">Must contain @</p>
              ) : (
                ""
              )}
              <input
                name="password"
                type={isShown == true ? "text" : "password"}
                placeholder="PASSWORD"
                required
                className="face2"
                value={Accapt == false ? "" : formData && formData.password}
                onChange={(e) => handleChange(e.target)}
                onFocus={() => setAccapt(true)}
              />
              {showData2 && formData && formData.password.length < 8 ? (
                <p className="danger">Must be at least 8 chars</p>
              ) : (
                ""
              )}
              <div className="img-state">
                <img
                  src={myImg}
                  onClick={handleClick}
                  alt=""
                  style={
                    isShown == false
                      ? {
                          transform: "translateX(0) rotate(0deg)",
                          transition: "1s",
                        }
                      : {
                          transform: "translateX(168px)rotate(360deg)",
                          transition: "1s",
                        }
                  }
                />
              </div>
              <div className="my-link" onClick={handleForgetPassword}>
                Forget Password
              </div>
              <div className={isDark == true ? "btn0 dark" : "btn0 light"}>
                <Button>
                  {loading1 == null
                    ? "Login in"
                    : loading1 == true
                    ? "تم تسجيل الدخول بنجاح"
                    : loading1 == false
                    ? `${err1}`
                    : "يرجى الانتظار ..."}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
