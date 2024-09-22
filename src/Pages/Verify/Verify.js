import "./Verify.css";
import { useSelector } from "react-redux";
import { Button } from "../../Components";
import Cookies from "js-cookies";
import useInput from "../../CustomHooks/useInput";
import usePost from "../../CustomHooks/usePost";
import LoginService from "../../Service/LoginService";
import { useEffect, useState } from "react";
const Verify = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [formData, handleChange] = useInput();
  const [Accapt, setAccapt] = useState(false);
  const [showData, setShowData] = useState(false);
  const [isUser, setIsUser] = useState();
  const [loading, handleVerify, err] = usePost(
    LoginService.Verify,
    formData,
    null,
    {
      isVerify: true,
    }
  );
  const [loading1, handleResendCode, err1] = usePost(LoginService.Resend, {
    user_id: Cookies.getItem("user_id"),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerify();
    setAccapt(true);
    setShowData(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleResendCode();
  };
  useEffect(() => {
    if (showData) {
      setIsUser(parseInt(Cookies.getItem("user_id"), 10));
    }
  }, [showData]);
  return (
    <>
      <div className="verify container-fluid">
        <div className="row verify-sign">
          <div
            className={
              isDark == true
                ? "verify-sign-up dark-verify"
                : "verify-sign-up light-verify"
            }
          >
            <form action="" method="post" onSubmit={handleSubmit}>
              <label
                htmlFor="verify"
                className={
                  isDark == true
                    ? "dark-mode-text regg neon-dark"
                    : "light-mode-text regg neon-light"
                }
              >
                VERIFY
              </label>
              <label htmlFor="verify" className="reg-text">
                Registration successful! An email containing the activation code
                has been sent to your email address. Please check your inbox to
                activate your account.
              </label>
              <input
                id="verify"
                placeholder="ENTER YOUR CODE"
                name="token"
                required
                value={Accapt == false ? "" : formData && formData.token}
                onChange={(e) => handleChange(e.target)}
                onFocus={() => setAccapt(true)}
              />
              {showData && formData && formData.token.length < 4 ? (
                <p className="danger">Must Be 4 Digit</p>
              ) : (
                ""
              )}
              <input
                type="hidden"
                name="user_id"
                value={parseInt(Cookies.getItem("user_id"), 10)}
              />
              <Button>
                {loading == null
                  ? "Send Your Code"
                  : loading == true
                  ? "Wrong Code"
                  : loading == false
                  ? `${err}`
                  : "يرجى الانتظار ..."}
              </Button>
              <a href="" onClick={handleClick}>
                Resend Your Code
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
