import "./Chat.css";
import person from "../../Assets/Images/Home/author-04.png";
import person2 from "../../Assets/Images/Home/author-02.png";
import { IoMdSend } from "react-icons/io";
import { useSelector } from "react-redux";
import { Button } from "../../Components";
const Chat = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container-fluid chat">
        <div className="row my-chat">
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              How Are You !!!
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you wdijsad asdlasd asdadjejfsdaf
              dsahfekhkew adjjads
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              How Are You !!!
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              How Are You !!!
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              velit magni enim odit cupiditate repudiandae perferendis sunt
              commodi ipsa sit facilis cumque similique vitae quia voluptatum
              fugiat, corrupti culpa quidem. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Reiciendis quae qui aliquid? Iste
              optio nesciunt exercitationem laudantium possimus corporis ut
              itaque repellendus quae suscipit vel, reiciendis voluptates ex.
              Esse, quam? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Odio provident omnis non dolorum impedit enim nihil,
              consectetur accusantium ratione? Voluptatibus amet harum, numquam
              ipsum unde quisquam. Consequuntur, quia corporis. Minima?
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              How Are You !!!
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              How Are You !!!
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              How Are You !!!
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              How Are You !!!
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              How Are You !!!
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              How Are You !!!
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              How Are You !!!
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              How Are You !!!
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              How Are You !!!
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 left-chat">
            <div className="member">
              <img src={person} alt="" />
            </div>
            <div
              className={
                isDark == true ? "message dark-msg" : "message light-msg"
              }
            >
              How Are You !!!
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>

          <div className="col-lg-12 col-sm-12 right-chat">
            <div
              className={
                isDark == true ? "message2 dark-msg" : "message2 light-msg"
              }
            >
              i am fine whats about you
            </div>
            <div className="member">
              <img src={person2} alt="" />
            </div>
          </div>
          <div className="write">
            <form action="" onSubmit={handleSubmit}>
              <input
                placeholder="Write a Message..."
                className={isDark == true ? "inpu-dark" : "inpu-light"}
              />
              <button
                className={
                  isDark == true
                    ? "inpu-dark send-icon"
                    : "inpu-light send-icon"
                }
              >
                <IoMdSend
                  color={
                    isDark == true
                      ? "var(--seconed-color-dark)"
                      : "var(--seconed-color-light)"
                  }
                  size={30}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
