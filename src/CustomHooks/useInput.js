import { useState } from "react";
import Cookies from "js-cookies";

const useInput = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (domObj) => {
    const { name, value } = domObj;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    if (name === "role_id") {
      if (value === "2") {
        const studentkey = `${formData.name}_${value}`;
        setFormData((prev) => ({ ...prev, student_key: studentkey }));
      } else {
        const doctorkey = `${formData.name}_${value}`;
        setFormData((prev) => ({ ...prev, doctor_key: doctorkey }));
      }
    }
    if (name === "token") {
      const userid = Cookies.getItem("user_id");
      setFormData((prev) => ({
        ...prev,
        user_id: userid,
      }));
    }
  };
  console.log(formData);

  return [formData, handleChange];
};
export default useInput;
