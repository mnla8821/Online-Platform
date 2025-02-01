import { useSelector } from "react-redux";
import "./Members.css";
import { RiUserAddFill } from "react-icons/ri";
import { TbUserCancel } from "react-icons/tb";
import { useState } from "react";
import Button from "../../Components/Button/Button";
import useGet from "../../CustomHooks/useGet";
import StudentService from "../../Service/StudenService";
import { PiStudentFill } from "react-icons/pi";
import Loading from "../../Components/Loading/Loading";
import usePost from "../../CustomHooks/usePost";

const Members = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const [isAdd, setIsAdd] = useState();
  const [search, setSearch] = useState();
  const [getId, setGetId] = useState();
  const [isFilter, setIsFilter] = useState(false);
  const [misMatch, setmisMatch] = useState(false);
  const [allStudents, loading] = useGet(StudentService.AllStudents());
  const [, handleInvite] = usePost(StudentService.Invite, {
    student_id: getId,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFilter(true);
  };
  const handleID = (id) => {
    setGetId(id);
    console.log(getId);
    if (getId) {
      handleInvite();
    }
  };
  const AllStudents =
    allStudents &&
    allStudents.map((item) => (
      <div
        className="one-member col-12"
        key={item.id}
        // onClick={handleID(item.id)}
      >
        <div className="col-1 member-picture">
          <PiStudentFill
            size={40}
            color={
              isDark == true
                ? "var(--seconed-color-dark)"
                : "var(--seconed-color-light)"
            }
          />
        </div>

        <div
          className={
            isDark == true
              ? "col-5 member-name  dark-mode-text"
              : "col-5 member-name  light-mode-text"
          }
        >
          {item.name}
        </div>
        <div className="col-5 member-major">{item.phone}</div>
        <div className="col-1 member-add" onClick={() => handleID(item.id)}>
          <RiUserAddFill
            color={
              isDark == true
                ? "var(--seconed-color-dark)"
                : "var(--seconed-color-light)"
            }
            size={40}
            // onClick={() => setIsAdd(false)}
          />
        </div>
      </div>
    ));
  return (
    <>
      <div className="container-fluid members-page">
        <div className="row all-members">
          <h1
            className={
              isDark == true
                ? "dark-mode-text neon-dark"
                : "light-mode-text neon-light"
            }
          >
            All Students
          </h1>
          <div className="search-student">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Student's Name"
                onChange={(e) => {
                  setSearch(e.target.value);
                  setIsFilter(false);
                }}
              />
              <Button>Search</Button>
            </form>
          </div>
          <div className="search-members">
            {isFilter == false ? AllStudents : ""}
            {isFilter &&
              allStudents.map(
                (item) =>
                  item.name.includes(search) && (
                    <div className="one-member col-12">
                      <div
                        className="col-1 member-picture"
                        onClick={() => handleID(item.id)}
                      >
                        <PiStudentFill
                          size={40}
                          color={
                            isDark == true
                              ? "var(--seconed-color-dark)"
                              : "var(--seconed-color-light)"
                          }
                        />
                      </div>

                      <div
                        className={
                          isDark == true
                            ? "col-5 member-name  dark-mode-text"
                            : "col-5 member-name  light-mode-text"
                        }
                      >
                        {item.name}
                      </div>
                      <div className="col-5 member-major">{item.phone}</div>
                      <div className="col-1 member-add">
                        <RiUserAddFill
                          color={
                            isDark == true
                              ? "var(--seconed-color-dark)"
                              : "var(--seconed-color-light)"
                          }
                          size={40}
                          onClick={() => setIsAdd(false)}
                        />

                        <TbUserCancel
                          color="red"
                          size={40}
                          onClick={() => setIsAdd(true)}
                        />
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
