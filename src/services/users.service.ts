import qs from "qs";
import http from "../http-common";

const getLoginUser = (email: string, password: string) => {
  return http.post(`/user/login`, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: {
      email: email,
      password: password,
    },
  });
};

const putRegisterUser = (
  uuid: string,
  id: number,
  login: string,
  email: string,
  password: string,
  ip: string,
  socialclub: string
) => {
  console.log("putRegisterUser()", email, password);

  return http.post(`/user`, {
    uuid,
    id,
    login,
    email: email,
    password: password,
    ip,
    socialclub,
  });
};

const UsersService = {
  getLoginUser,
  putRegisterUser,
};

export default UsersService;
