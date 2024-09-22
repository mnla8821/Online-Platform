import { useSelector } from "react-redux";
import "./ForgetPassword.css";
import { Button } from "../../Components";
import { useEffect, useState } from "react";
import useInput from "../../CustomHooks/useInput";
import usePost from "../../CustomHooks/usePost";
import LoginService from "../../Service/LoginService";
const ForgetPassword = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [formData, handleChange] = useInput();
  const [Accapt, setAccapt] = useState(false);
  const [showData, setShowData] = useState(false);
  const [loading, handleCheck, err] = usePost(
    LoginService.Check,
    formData,
    {},
    {},
    {
      isCheck: true,
    }
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheck();
    setAccapt(true);
    setShowData(true);
  };

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
                Check Code
              </label>
              <label htmlFor="verify" className="reg-text forget ">
                Enter Your Code you had recieved To Valid it and you can Change
                Passwrod
              </label>
              <input
                id="verify"
                placeholder="ENTER YOUR CODE"
                type="text"
                required
                name="token"
                value={Accapt == false ? "" : formData && formData.token}
                onChange={(e) => handleChange(e.target)}
                onFocus={() => setAccapt(true)}
              />
              {showData && formData && formData.token.length < 4 ? (
                <p className="danger">Must be 4 chars</p>
              ) : (
                ""
              )}
              <Button className="w">
                {loading == null
                  ? "Check Your Code"
                  : loading == true
                  ? "You Can Change Password"
                  : loading == false
                  ? `${err}`
                  : "يرجى الانتظار ..."}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
