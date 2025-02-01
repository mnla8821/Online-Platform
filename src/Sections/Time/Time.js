import { memo, useState } from "react";
import "./Time.css";
import { useSelector } from "react-redux";

const Time = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSecondes] = useState();

  function updateRemainingTime(targetDate) {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        console.log("تم وصول التاريخ المحدد!");
      } else {
        setSecondes(Math.floor(timeDifference / 1000));
        setDays(Math.floor(seconds / 86400));
        setHours(Math.floor((seconds % 86400) / 3600));
        setMinutes(Math.floor(((seconds % 86400) % 3600) / 60));
        const remainingSeconds = ((seconds % 86400) % 3600) % 60;
      }
    }, 1000); // تحديث كل ثانية (1000 مللي ثانية)
  }

  const targetDate = new Date(2024, 7, 20); // تاريخ محدد
  updateRemainingTime(targetDate);

  return (
    <>
      <div className="container-fluid about-time">
        <div className="row time">
          <div className="col-lg-7 col-md-7 col-sm-12 real-time">
            <h4>
              note the
              <em
                className={
                  isDark == true ? "dark-mode-text" : "light-mode-text"
                }
              >
                Time remaining
              </em>
              for platform opening is
            </h4>
            <div className="remain-time">
              <div className="val">
                <em
                  className={
                    isDark == true ? "dark-mode-text" : "light-mode-text"
                  }
                >
                  <span className=""> {days} </span>
                  <br />
                  DAYS
                </em>
              </div>
              <div className="val">
                <em
                  className={
                    isDark == true ? "dark-mode-text" : "light-mode-text"
                  }
                >
                  <span className=""> {hours} </span>
                  <br />
                  Hours
                </em>
              </div>
              <div className="val">
                <em
                  className={
                    isDark == true ? "dark-mode-text" : "light-mode-text"
                  }
                >
                  <span className=""> {minutes} </span>
                  <br />
                  Minutes
                </em>
              </div>
              <div className="val">
                <em
                  className={
                    isDark == true ? "dark-mode-text" : "light-mode-text"
                  }
                >
                  <span className="">
                    <span className=""></span>{" "}
                    {Math.floor((((seconds % 86400) % 3600) % 60) % 60)}
                  </span>
                  <br />
                  Seconds
                </em>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 idea">
            <div className="new-idea">
              Please If Yoh Have New Ideas Share With Us
            </div>
            <div className="form-input">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Name"
                className={
                  isDark == true ? "dark-mode-text" : "light-mode-text"
                }
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Idea"
                className={
                  isDark == true ? "dark-mode-text" : "light-mode-text"
                }
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Phone Number"
                className={
                  isDark == true ? "dark-mode-text" : "light-mode-text"
                }
              />
              <div
                className={
                  isDark == true ? "send dark-mode" : "send light-mode"
                }
              >
                get it now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Time);
