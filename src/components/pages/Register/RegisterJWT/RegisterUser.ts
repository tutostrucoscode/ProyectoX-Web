import { randomNumber } from "../../../../consts/generateRandomNumber";
import { generateRandomString } from "../../../../consts/generateRandomString";
import UsersService from "../../../../services/users.service";

export const registerUser = async (
  email: string,
  name: string,
  password: string,
  ip: any
) => {
  const uuid = generateRandomString(4);
  const id = randomNumber(1, 1000);
  const result = await UsersService.putRegisterUser(
    uuid,
    id,
    name,
    email,
    password,
    ip,
    "tutostrucos"
  );
  console.log("result(): ", result);
};
