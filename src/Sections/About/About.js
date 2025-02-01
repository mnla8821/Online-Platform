import { useState } from "react";
import { Rectangle } from "../../Components";
import "./About.css";
import course1 from "../../Assets/Images/Home/choose-us-image-01.png";
import course2 from "../../Assets/Images/Home/choose-us-image-02.png";
import course3 from "../../Assets/Images/Home/choose-us-image-03.png";
import { useSelector } from "react-redux";

const About = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [isClick1, setClick1] = useState(true);
  const [isClick2, setClick2] = useState(false);
  const [isClick3, setClick3] = useState(false);
  const handleClick1 = () => {
    setClick1(true);
    setClick2(false);
    setClick3(false);
  };

  const handleClick2 = () => {
    setClick1(false);
    setClick2(true);
    setClick3(false);
  };

  const handleClick3 = () => {
    setClick1(false);
    setClick2(false);
    setClick3(true);
  };

  let variableClassName = "col-3";
  let variableClassName2 = "col-3";
  let variableClassName3 = "col-3";

  if (isClick1 === true && isDark === true) {
    variableClassName += " myDiv1 expended-dark";
  } else if (isClick1 === true && isDark === false) {
    variableClassName += " myDiv1 expended-light";
  } else if (isClick1 === false && isDark === true) {
    variableClassName += " myDiv1-dark";
  } else {
    variableClassName += " myDiv1-light";
  }

  if (isClick2 === true && isDark === true) {
    variableClassName2 += " myDiv2 expended-dark";
  } else if (isClick2 === true && isDark === false) {
    variableClassName2 += " myDiv2 expended-light";
  } else if (isClick2 === false && isDark === true) {
    variableClassName2 += " myDiv2-dark";
  } else {
    variableClassName2 += " myDiv2-light";
  }

  if (isClick3 === true && isDark === true) {
    variableClassName3 += " myDiv3 expended-dark";
  } else if (isClick3 === true && isDark === false) {
    variableClassName3 += " myDiv3 expended-light";
  } else if (isClick3 === false && isDark === true) {
    variableClassName3 += " myDiv3-dark";
  } else {
    variableClassName3 += " myDiv3-light";
  }

  let variableColor = "white";
  let variableColor2 = "white";
  let variableColor3 = "white";
  if (isClick1 === true && isDark === true) {
    variableColor = "#f5a425";
  } else if (isClick1 === true && isDark === false) {
    variableColor = "blueviolet";
  } else {
    variableColor = "white";
  }

  if (isClick2 === true && isDark === true) {
    variableColor2 = "#f5a425";
  } else if (isClick2 === true && isDark === false) {
    variableColor2 = "blueviolet";
  } else {
    variableColor2 = "white";
  }
  if (isClick3 === true && isDark === true) {
    variableColor3 = "#f5a425";
  } else if (isClick3 === true && isDark === false) {
    variableColor3 = "blueviolet";
  } else {
    variableColor3 = "white";
  }
  return (
    <div className="container-fluid  about-container">
      <div className="row about-us">
        <Rectangle>What this platform Do?</Rectangle>
        <div className="col-12 about-website">
          <div
            className={variableClassName}
            style={{ color: `${variableColor}` }}
            onClick={handleClick1}
          >
            ABOUT PLATFORM
          </div>
          <div
            className={variableClassName2}
            style={{ color: `${variableColor2}` }}
            onClick={handleClick2}
          >
            ABOUT DOCTORS
          </div>
          <div
            className={variableClassName3}
            style={{ color: `${variableColor3}` }}
            onClick={handleClick3}
          >
            ABOUT STUDENTS
          </div>
        </div>
        <div className="about">
          {isClick1 == true ? (
            <div className="col-12 about1">
              <div className="col-lg-6 col-sm-12 col-md-6 about-img">
                <img src={course1} alt="" />
              </div>
              <div className="col-lg-6 col-sm-12 col-md-6 about-text">
                <h3>Some Services</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor quos, nesciunt, aut distinctio accusantium id excepturi
                  ut suscipit voluptatum atque commodi culpa necessitatibus ad
                  ea. Quidem alias aspernatur animi esse.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          {isClick2 == true ? (
            <div className="about2">
              <div className="col-lg-6 col-sm-12 col-md-6 about-img">
                <img src={course2} alt="" />
              </div>
              <div className="col-lg-6 col-sm-12 col-md-6 about-text">
                <h3>Students Need</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor quos, nesciunt, aut distinctio accusantium id excepturi
                  ut suscipit voluptatum atque commodi culpa necessitatibus ad
                  ea. Quidem alias aspernatur animi esse.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          {isClick3 == true ? (
            <div className="about3">
              <div className="col-lg-6 col-sm-12 col-md-6 about-img">
                <img src={course3} alt="" />
              </div>
              <div className="col-lg-6 col-sm-12 col-md-6 about-text">
                <h3> Doctors Need</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor quos, nesciunt, aut distinctio accusantium id excepturi
                  ut suscipit voluptatum atque commodi culpa necessitatibus ad
                  ea. Quidem alias aspernatur animi esse.
                </p>
              </div>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
