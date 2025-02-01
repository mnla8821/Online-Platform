import { useSelector } from "react-redux";
import "./Loading.css";
const Loading = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      <div
        className={
          isDark == true
            ? "parent-spinner dark-spinner"
            : "parent-spinner light-spinner"
        }
      >
        {isDark == true ? (
          <div
            className="
          spinn"
          >
            <div class="spinner-border text-warning" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>

            <div
              className={isDark == true ? "dark-mode-text " : "light-mode-text"}
            >
              Loading...
            </div>
          </div>
        ) : (
          <div
            className="
          spinn"
          >
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div
              className={isDark == true ? "dark-mode-text " : "light-mode-text"}
            >
              Loading...
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Loading;
