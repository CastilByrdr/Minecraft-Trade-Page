import type { LoginModel } from "@/model/AuthModel";
import type { CreateUserModel, User } from "@/model/UserModel";
import axios from "axios";
import { createUser } from "./UserService";

const API_URL = "http://localhost:3000";

export function register(createUserModel: CreateUserModel): Promise<User> {
  return createUser(createUserModel);
}

export async function login(loginModel: LoginModel): Promise<User> {
  const { data } = await axios.post<User>(API_URL + "/login", loginModel);
  return data;
}
