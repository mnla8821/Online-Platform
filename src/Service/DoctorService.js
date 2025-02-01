import { PublicAxios } from "./axiosHandler";

class DoctorService {
  static endPointAllDoctor = "/all/doctors";
  static endPointMyProjects = "/my/projects";
  static endPointAdd = "/add/project";
  static endPointDelete = "/delete/project";
  static endPointAllRequests = "/all/requests";
  static endPointAllAccapted = "all/allocations/accepted";

  static GetAllDoctor() {
    return PublicAxios.get(`${DoctorService.endPointAllDoctor}`);
  }

  static MyProjects() {
    return PublicAxios.get(`${DoctorService.endPointMyProjects}`);
  }

  static AddProjects(body) {
    return PublicAxios.post(`${DoctorService.endPointAdd}`, body);
  }
  static DeleteProject(body) {
    return PublicAxios.post(`${DoctorService.endPointDelete}`, body);
  }
  static AllRequests() {
    return PublicAxios.get(`${DoctorService.endPointAllRequests}`);
  }
  static AllAccapted() {
    return PublicAxios.get(`${DoctorService.endPointAllAccapted}`);
  }
}

export default DoctorService;
