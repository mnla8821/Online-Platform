import "./NewPassword.css";
import { useSelector } from "react-redux";
import { Button } from "../../Components";
import { useState } from "react";
import useInput from "../../CustomHooks/useInput";
import usePost from "../../CustomHooks/usePost";
import LoginService from "../../Service/LoginService";
const NewPassword = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [Accapt, setAccapt] = useState(false);
  const [showData, setShowData] = useState(false);
  const [formData, handleChange] = useInput();
  const [loading, handleResetPassword, err] = usePost(
    LoginService.ResetPassword,
    formData,
    {},
    {},
    {},
    {
      isReset: true,
    }
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    handleResetPassword();
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
            <form action="" method="post" className="w" onSubmit={handleSubmit}>
              <label
                htmlFor="verify"
                className={
                  isDark == true
                    ? "dark-mode-text regg neon-dark"
                    : "light-mode-text regg neon-light"
                }
              >
                NewPassword
              </label>
              <label htmlFor="verify" className="reg-text">
                Update Your Information
              </label>
              <input
                placeholder="ENTER YOUR EMAIL"
                type="text"
                name="email"
                required
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
                placeholder="ENTER YOUR New PASSWORD"
                type="password"
                required
                name="new_password"
                value={Accapt == false ? "" : formData && formData.new_password}
                onChange={(e) => handleChange(e.target)}
                onFocus={() => setAccapt(true)}
              />
              {showData && formData && formData.new_password.length < 8 ? (
                <p className="danger">Must be at least 8 chars</p>
              ) : (
                ""
              )}
              <input
                placeholder="CONFIRM YOUR PASSWORD"
                type="password"
                required
                name="new_password_confirmation"
                value={
                  Accapt == false
                    ? ""
                    : formData && formData.new_password_confirmation
                }
                onChange={(e) => handleChange(e.target)}
                onFocus={() => setAccapt(true)}
              />
              {showData &&
              formData &&
              formData.new_password_confirmation.length < 8 ? (
                <p className="danger">Must be at least 8 chars</p>
              ) : (
                ""
              )}
              <input
                placeholder="ENTER YOUR CODE"
                type="text"
                name="token"
                required
                value={Accapt == false ? "" : formData && formData.token}
                onChange={(e) => handleChange(e.target)}
                onFocus={() => setAccapt(true)}
              />
              {showData && formData && formData.token.length < 4 ? (
                <p className="danger">Must be 4 chars</p>
              ) : (
                ""
              )}
              <Button>
                {loading == null
                  ? "Change Password"
                  : loading == true
                  ? "Password Changed"
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
export default NewPassword;
