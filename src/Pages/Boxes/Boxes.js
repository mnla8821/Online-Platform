import { useSelector } from "react-redux";
import "./Boxes.css";
import { NavLink } from "react-router-dom";
const Boxes = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      <div className="multi-boxes">
        <div className="row parent col-12">
          <div
            className={
              isDark == true
                ? "one-box col-lg-5  col-sm-12 dark-box"
                : "one-box col-lg-5  col-sm-12 light-box"
            }
          >
            <h3>
              <NavLink to="/Currentproject">Current Porject</NavLink>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              molestiae reiciendis libero iure earum culpa quasi dolores, neque
              voluptates consequuntur modi quibusdam reprehenderit error ipsa
              illum repudiandae ipsum harum quae?
            </p>
          </div>
          <div
            className={
              isDark == true
                ? "two-box col-lg-5  col-sm-12 dark-color-box"
                : "two-box col-lg-5  col-sm-12 light-color-box"
            }
          >
            <h3>
              <NavLink to="/Suggetedproject">Suggested Projects</NavLink>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui alias
              quo totam nesciunt perferendis natus dicta possimus, beatae
              mollitia. Labore praesentium alias unde, ut repellendus modi optio
              eaque ex iure?
            </p>
          </div>
        </div>
        <div className="row parent col-12">
          <div
            className={
              isDark == true
                ? "one-box col-lg-7 col-sm-12 dark-color-box"
                : "one-box col-lg-7 col-sm-12 light-color-box"
            }
          >
            <h3>
              <NavLink to="/Takenprojects">
                Projects That Accapted From Doctor
              </NavLink>
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident esse ullam nemo ipsum maxime dolores nobis, hic officia
              culpa aliquid suscipit soluta cum, exercitationem vero
              necessitatibus odit temporibus earum recusandae?
            </p>
          </div>
          <div
            className={
              isDark == true
                ? "two-box col-lg-3 col-sm-12 dark-box"
                : "two-box col-lg-3 col-sm-12 light-box"
            }
          >
            <h3>Fourth year Projetcs networks</h3>
            <p>Lorem ipsum dolor sit, amet consectetur</p>
          </div>
        </div>
        <div className="row parent col-12">
          <div
            className={
              isDark == true
                ? "one-box col-lg-3  col-sm-12 dark-box"
                : "one-box col-lg-3 col-sm-12 light-box"
            }
          >
            <h3>Fourth year Projetcs software</h3>
            <p>Lorem ipsum dolor sit, amet consectetur</p>
          </div>
          <div
            className={
              isDark == true
                ? "two-box col-lg-7 col-sm-12 dark-color-box"
                : "two-box col-lg-7 col-sm-12 light-color-box"
            }
          >
            <h3>fifth year Projetcs </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              perferendis quis id, beatae aperiam inventore doloribus, nihil
              exercitationem consequatur itaque odio ex facere laudantium culpa
              expedita ut ullam sit distinctio!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Boxes;
