import type { LoginModel } from "@/model/AuthModel";
import type { CreateUserModel, User } from "@/model/UserModel";
import { user } from "@/state/user";
import axios from "axios";
import { createUser } from "./UserService";

const API_URL = "http://localhost:3000";

export enum AuthError {
  InvalidUsernameMinLength = "Invalid username: Please enter at least 4 characters",
}

export function register(createUserModel: CreateUserModel): Promise<User> {
  return createUser(createUserModel);
}

export async function login(loginModel: LoginModel): Promise<User> {
  const { data } = await axios.post<User>(API_URL + "/login", loginModel);
  return data;
}

export async function logout(userId: number) {
  const { data } = await axios.post<User>(`${API_URL}/logout/${userId}`);
  return data;
}

export function updateCurrentUser(currentUser: User) {
  user.value = currentUser;
}

export function isUsernameValid(username: string): boolean {
  const hasMinimumLength = username.length >= 4;

  if (!hasMinimumLength) {
    console.error(AuthError.InvalidUsernameMinLength);
  }

  return hasMinimumLength;
}

export function isPasswordValid(password: string, rePassword: string) {
  const arePasswordAndReEnterPasswordEqual = password === rePassword;
  if (!arePasswordAndReEnterPasswordEqual) {
    console.error(
      "Invalid Password: Password and re-enter password are not equal"
    );
  }

  const hasMinimumLength =
    arePasswordAndReEnterPasswordEqual && password.length >= 5;
  if (!hasMinimumLength) {
    console.error("Invalid Password: Please enter at least 5 characters");
  }

  return arePasswordAndReEnterPasswordEqual && hasMinimumLength;
}

export function isEmailValid(email: string | null): boolean {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isEmailValid = !!email?.toLowerCase().match(emailRegex);

  if (!isEmailValid) {
    console.error("Invalid email");
  }

  return !!isEmailValid;
}
