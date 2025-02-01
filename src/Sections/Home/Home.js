import "./Home.css";
import myVideo from "../../Assets/Images/Home/course-video.mp4";
import { Button, Card, Rectangle, Skeleton } from "../../Components/index";
import { useSelector } from "react-redux";
import { FaPencil, FaUserTie, FaGraduationCap } from "react-icons/fa6";
import { GoSquareFill } from "react-icons/go";
import About from "../About/About";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Time from "../Time/Time";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [skeletonCount, setSkeletonCount] = useState(4);
  const ref = useRef();
  const navigate = useNavigate();
  const [isToken, setIsToken] = useState();
  const handleNavigate = () => {
    navigate("/SignUp");
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSkeletonCount(1);
      } else if (window.innerWidth >= 768 && window.innerWidth < 991) {
        setSkeletonCount(2);
      } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
        setSkeletonCount(3);
      } else {
        setSkeletonCount(4);
      }
      setIsToken(localStorage.getItem("token"));
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, [skeletonCount, isToken]);
  return (
    <>
      <div className="home-one">
        <div className=" hero-home">
          <div className="hero-home-video">
            <video autoPlay loop muted>
              <source src={myVideo} />
            </video>
            <div className="container-fluid home-two">
              <div className="hero-home-content">
                <div className="row">
                  <div className="col-12 hero-home-content-title">
                    <p>DISCUSSING PROJECTS AND ACADEMIC RESEARCH CIRCLES.</p>
                    <h1>
                      <span
                        className={
                          isDark == true ? "dark-mode-text" : "light-mode-text"
                        }
                      >
                        YOUR
                      </span>
                      <span> ONLINE</span>
                      <span
                        className={
                          isDark == true ? "dark-mode-text" : "light-mode-text"
                        }
                      >
                        PLATFORM
                      </span>
                    </h1>

                    <div onClick={handleNavigate}>
                      {/* {isToken == "" ? <Button>Sign Up</Button> : ""} */}
                      <Button>Sign Up</Button>
                    </div>
                  </div>
                  <div className="col-12 hero-home-content-info">
                    <div
                      className={
                        isDark == true
                          ? "col-lg-4  home-about dark-mode dark"
                          : "col-lg-4 home-about light-mode light"
                      }
                    >
                      <h5>
                        <FaPencil color="white" size={25} />
                        <span className="next-icon">all projects </span>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam recusandae voluptas odit repellendus. Obcaecati
                        atque esse odio?
                      </p>
                      <h6>
                        <a href="">MORE INFO</a>
                      </h6>
                      <span className="line"></span>
                    </div>
                    <div
                      className={
                        isDark == true
                          ? "col-lg-4 home-about dark-mode dark"
                          : "col-lg-4 home-about light-mode light"
                      }
                    >
                      <h5>
                        <FaGraduationCap color="white" size={25} />
                        <span className="next-icon"> all students </span>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam recusandae voluptas odit repellendus. Obcaecati
                        atque esse odio?
                      </p>
                      <h6>
                        <a href="">MORE INFO</a>
                      </h6>
                      <span className="line"></span>
                    </div>
                    <div
                      className={
                        isDark == true
                          ? "col-lg-4  home-about dark-mode dark"
                          : "col-lg-4  home-about light-mode light"
                      }
                    >
                      <h5>
                        <FaUserTie color="white" size={25} />
                        <span className="next-icon"> all docotrs </span>
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam recusandae voluptas odit repellendus. Obcaecati
                        atque esse odio?
                      </p>
                      <h6>
                        <a href="">MORE INFO</a>
                      </h6>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Time />
      <div className="my-slide">
        <Rectangle>The Best Project</Rectangle>
        <div className="my-swiper">
          <Swiper
            modules={[Pagination]}
            spaceBetween={70}
            slidesPerView={skeletonCount}
            navigation
            pagination={{ clickable: true }}
          >
            <div
              className="next"
              onClick={() => ref.current.swiper.slideNext()}
            >
              <GoSquareFill color="white" />
            </div>
            <div
              className="prev"
              onClick={() => ref.current.swiper.slidePrev()}
            >
              <GoSquareFill color="white" />
            </div>
          </Swiper>
          {/* {loading == true ? <Skeleton count={skeletonCount} /> : ""} */}
          {<Skeleton count={skeletonCount} />}
        </div>
      </div>
    </>
  );
};

export default Home;
