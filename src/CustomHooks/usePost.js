import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookies";

const usePost = (
  endPoint,
  body,
  isSign,
  checkVerify,
  checkCode,
  Reset,
  IdDoctor
) => {
  const [loading, setLoading] = useState(null);
  const [err, setErr] = useState();
  const navigate = useNavigate();
  const handleClick = () => {
    setLoading("loading");
    endPoint(body)
      .then((res) => {
        console.log(res.data.user_id);
        setLoading(true);
        if (isSign && isSign.isSignUp == true) {
          Cookies.setItem("user_id", res.data.data.user_id);
          navigate("/Verify");
        }
        if (isSign && isSign.isSignIn == true) {
          localStorage.setItem("token", res.data.data.token);
          navigate("/");
        }
        if (checkVerify && checkVerify.isVerify == true) {
          navigate("/SignUp");
        }
        if (checkCode && checkCode.isCheck == true) {
          navigate("/NewPassword");
        }
        if (Reset && Reset.isReset == true) {
          navigate("/SignUp");
        }
        if (IdDoctor && IdDoctor.idDoctor == true) {
          navigate("/Showprojects", {
            state: {
              Doctorprojects: res.data.data,
              SingleDoctor: IdDoctor.doctor_id,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setErr(err.response.data.error);
        setLoading(false);
        console.log(loading);
        setTimeout(() => {
          setLoading(null);
        }, 2500);
      });
  };

  return [loading, handleClick, err];
};

export default usePost;
