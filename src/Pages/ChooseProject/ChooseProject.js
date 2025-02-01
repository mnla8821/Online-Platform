import "./ChooseProject.css";
import { useSelector } from "react-redux";
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiJson } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";

const ChooseProject = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      <div className="container-fluid single">
        <div className="row single-project">
          <div
            className={
              isDark == true
                ? "col-12 single-porject-name dark-mode-text neon-dark"
                : "col-12 single-porject-name light-mode-text neon-light"
            }
          >
            Project 1
          </div>
          <div className=" col-12 image-project">
            <img
              className={isDark == true ? "dark-animation" : "light-animation"}
              // src={imgProj}
              alt=""
            />
          </div>
          <div className="col-12  single-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus tempora earum explicabo libero minima. Temporibus
            doloremque maxime repellat sint nam obcaecati voluptatem earum
            repudiandae. Harum odio atque officia necessitatibus labore? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            asperiores repudiandae? Maxime ipsa blanditiis quo expedita beatae,
            quidem aperiam perspiciatis dignissimos, nesciunt ipsam reiciendis
            dolorem nisi repudiandae alias quibusdam! Nulla!
          </div>
          <div className="ordered">
            <div className="col-4 framework">
              <FaReact
                size={35}
                color={
                  isDark == true
                    ? "var(--seconed-color-dark)"
                    : "var(--seconed-color-light)"
                }
              />

              <SiDart
                size={35}
                color={
                  isDark == true
                    ? "var(--seconed-color-dark)"
                    : "var(--seconed-color-light)"
                }
              />

              <SiDjango
                size={35}
                color={
                  isDark == true
                    ? "var(--seconed-color-dark)"
                    : "var(--seconed-color-light)"
                }
              />
            </div>
            <div className="col-4 opinion">
              <button className="agree">registy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseProject;
