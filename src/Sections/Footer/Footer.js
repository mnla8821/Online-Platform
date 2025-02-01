import { useSelector } from "react-redux";
import { Rectangle, Button } from "../../Components";
import "./Footer.css";
const Footer = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      <div className="foot">
        <Rectangle>Let’s Keep In Touch</Rectangle>
        <div className="  container-fluid contact">
          <div className="row my-footer">
            <div className="comments col-sm-12 col-lg-4">
              <div className="my-info  ">
                <input type="text" placeholder="Enter Your Name" />
                <input type="email" placeholder="Enter Your Email" />
              </div>
              <div className="my-comment">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Comments"
                />
              </div>
              <div className="my-btn">
                <Button>Send Message Now </Button>
              </div>
            </div>
            <div className="map col-sm-12 col-lg-4 ">
              <iframe
                src="
                      https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="foot-description">
          <p>
            <svg
              className="svg-inline--fa fa-copyright"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="copyright"
              width="15px"
              height="15px"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"
              ></path>
            </svg>
            Copyright 2020 by Grad School | Design:
            <span
              className={isDark == true ? "dark-mode-text" : "light-mode-text"}
            >
              TemplateMo
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
