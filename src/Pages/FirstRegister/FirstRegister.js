import { useSelector } from "react-redux";
import "./FirstRegister.css";

const FirstRegister = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      <div className="container-fluid first-register">
        <div className="row first-reg">
          <div className="form-reg">
            <form action="">
              <h1
                className={
                  isDark == true
                    ? "dark-mode-text neon-dark rr"
                    : "light-mode-text neon-light rr"
                }
              >
                Register Now{" "}
              </h1>
              <label htmlFor="">First Name</label>
              <input type="text" />
              <label htmlFor="">Last Name</label>
              <input type="text" />
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Password</label>
              <input type="password" />
              <div className="two-choice">
                <button className="sec">Professor</button>
                <button className="sec">Student</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstRegister;
