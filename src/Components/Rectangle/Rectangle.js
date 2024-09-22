import "./Rectangle.css";

const Rectangle = (props) => {
  return (
    <>
      <div className="title-page">
        <span className="vertical-line"></span>
        <h2>{props.children}</h2>
      </div>
    </>
  );
};

export default Rectangle;
