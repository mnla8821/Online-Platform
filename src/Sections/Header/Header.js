import "./Header.css";
import { TiAdjustBrightness } from "react-icons/ti";
import { BsFillMoonFill } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";
import LogoDark from "../../Assets/Images/Home/logo-dark (2).png";
import LogoLight from "../../Assets/Images/Home/logo-light copy.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeMode } from "../../Redux/ModeSlice";

const Header = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const dispatch = useDispatch();

  return (
    <>
      <nav
        className={
          isDark == true
            ? "navbar navbar-expand-lg   dark"
            : "navbar navbar-expand-lg  light"
        }
      >
        <div className="container ">
          <div className="logo" href="#">
            <img src={isDark == true ? LogoDark : LogoLight} alt="" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <FiAlignJustify color="white" size={27} />
            </span>
          </button>
          <div className="collapse navbar-collapse links" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className={
                    isDark == true ? "navlink dark-mode" : "navlink light-mode"
                  }
                  aria-current="page"
                  href="#"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    isDark == true ? "navlink dark-mode" : "navlink light-mode"
                  }
                  to="/projects"
                >
                  projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    isDark == true ? "navlink dark-mode" : "navlink light-mode"
                  }
                  to="/Doctor"
                >
                  doctors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    isDark == true ? "navlink dark-mode" : "navlink light-mode"
                  }
                  to="/Student"
                >
                  profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={
                    isDark == true ? "navlink dark-mode" : "navlink light-mode"
                  }
                  to="/Members"
                >
                  students
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="icons">
            {isDark == true ? (
              <div
                className="icon1"
                onClick={() => dispatch(handleChangeMode())}
                style={
                  isDark == true
                    ? { transform: "rotate(32deg)" }
                    : { transform: "rotate(0deg)" }
                }
              >
                <TiAdjustBrightness size={33} color="#f5a425" />
              </div>
            ) : (
              <div
                className="icon2"
                onClick={() => dispatch(handleChangeMode())}
                style={
                  isDark == false
                    ? { transform: "rotate(0deg)" }
                    : { transform: "rotate(0deg)" }
                }
              >
                <BsFillMoonFill size={30} color="blueviolet" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
