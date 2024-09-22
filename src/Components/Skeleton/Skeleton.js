import "./Skeleton.css";
import { TiMortarBoard } from "react-icons/ti";
import { useSelector } from "react-redux";
const Skeleton = ({ count }) => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <>
      {[...Array(count)].map((item, index) => (
        <div className="col" key={index}>
          <div className="skelton-con">
            <div
              className={
                isDark == true ? "skeleton-img dark" : "skeleton-img light"
              }
            >
              <TiMortarBoard size={50} color="black" />
            </div>
            <p
              className={
                isDark == true ? "p-skeleton dark" : "p-skeleton light"
              }
            ></p>
            <p
              className={
                isDark == true ? "p-skeleton dark" : "p-skeleton light"
              }
            ></p>
            <p
              className={
                isDark == true ? "p-skeleton dark" : "p-skeleton light"
              }
            ></p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skeleton;
