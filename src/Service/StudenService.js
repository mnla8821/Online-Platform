import { PublicAxios } from "./axiosHandler";

class StudentService {
  static endPointAllStudents = "/all/students";
  static endPointSpecificDoctor = "/doctor/projects";
  static endPointCreateGroup = "/make/group";
  static endPointIsOwner = "/owner/status";
  static endPointInvite = "/invite/student";
  static endPointDecideRequest = "/decide/requests";
  static endPointJoinRequest = "/join/requests";
  static endPointMyAllocations = "/my/allocation";
  static endPointRequestAllocations = "/allocation/request";

  static AllStudents() {
    return PublicAxios.get(`${StudentService.endPointAllStudents}`);
  }
  static SpecificDoctor(body) {
    return PublicAxios.post(`${StudentService.endPointSpecificDoctor}`, body);
  }
  static CreateGroup(body) {
    return PublicAxios.post(`${StudentService.endPointCreateGroup}`, body);
  }
  static IsOwner() {
    return PublicAxios.get(`${StudentService.endPointIsOwner}`);
  }
  static Invite(body) {
    return PublicAxios.post(`${StudentService.endPointInvite}`, body);
  }
  static DecideRequest(body) {
    return PublicAxios.post(`${StudentService.endPointDecide}`, body);
  }
  static JoinRequest() {
    return PublicAxios.get(`${StudentService.endPointDecide}`);
  }
  static MyAllocations(body) {
    return PublicAxios.post(`${StudentService.endPointMyAllocations}`, body);
  }
  static RequestAllocations(body) {
    return PublicAxios.post(
      `${StudentService.endPointRequestAllocations}`,
      body
    );
  }
}

export default StudentService;
