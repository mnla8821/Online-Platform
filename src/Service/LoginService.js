import { PublicAxios } from "./axiosHandler";

class LoginService {
  static endPointRegister = "/user/register";
  static endPointLogin = "user/login";
  static endPointVerify = "verify_email";
  static endPointResend = "/resend_confirmation";
  static endPointCheck = "/user/reset_password/check_token";
  static endPointResetPassword = "/user/reset_password";
  static endPointForgetPassword = "/user/forgot_password";
  static Signup(body) {
    return PublicAxios.post(`${LoginService.endPointRegister}`, body);
  }

  static Login(body) {
    return PublicAxios.post(`${LoginService.endPointLogin}`, body);
  }
  static Verify(body) {
    return PublicAxios.post(`${LoginService.endPointVerify}`, body);
  }
  static Resend(body) {
    return PublicAxios.post(`${LoginService.endPointResend}`, body);
  }
  static ForgetPassword(body) {
    return PublicAxios.post(`${LoginService.endPointForgetPassword}`, body);
  }
  static Check(body) {
    return PublicAxios.post(`${LoginService.endPointCheck}`, body);
  }
  static ResetPassword(body) {
    return PublicAxios.post(`${LoginService.endPointResetPassword}`, body);
  }
}

export default LoginService;
