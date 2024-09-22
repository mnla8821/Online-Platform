import { useSelector } from "react-redux";
import "./YourAllocations.css";
import { PiStudentFill } from "react-icons/pi";

const YourAllocations = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      <div className="container-fluid allocations">
        <div className="row your-allocations">
          <h1
            className={
              isDark == true
                ? "neon-dark dark-mode-text"
                : "neon-light light-mode-text"
            }
          >
            Your Group
          </h1>
          <div className="one-member col-12">
            <div className="col-1 member-picture">
              <PiStudentFill
                size={40}
                color={
                  isDark == true
                    ? "var(--seconed-color-dark)"
                    : "var(--seconed-color-light)"
                }
              />
            </div>

            <div
              className={
                isDark == true
                  ? "col-8 member-name  dark-mode-text"
                  : "col-8 member-name  light-mode-text"
              }
            >
              {/* {item.name} */}
              alaa aldeen
            </div>
            <div
              className={
                isDark == true
                  ? "col-3 member-major dark-mode-text"
                  : "col-3 member-major light-mode-text"
              }
            >
              Owner
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default YourAllocations;
