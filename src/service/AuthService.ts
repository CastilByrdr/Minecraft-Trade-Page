import type { LoginModel } from "@/model/AuthModel";
import type { CreateUserModel, User } from "@/model/UserModel";
import { user } from "@/state/user";
import axios from "axios";
import { LocalStorage } from "./LocalStorageService";
import { createUser } from "./UserService";

const API_URL = "http://localhost:3000";

export enum AuthError {
  InvalidUsernameMinLength = "Invalid username: Please enter at least 4 characters",
  InvalidPasswordMinLength = "Invalid Password: Please enter at least 5 characters",
  InvalidPasswordAndRePasswordDoNotMatch = "Invalid Password: Password and re-enter password are not equal",
  InvalidEmail = "Invalid Email",
}

export const AuthApi = {
  async login(loginModel: LoginModel): Promise<User> {
    const { data } = await axios.post<User>(API_URL + "/login", loginModel);
    return data;
  },

  async logout(userId: number) {
    const { data } = await axios.post<User>(`${API_URL}/logout/${userId}`);
    return data;
  },
};

export const AuthService = {
  async login(username: string, password: string) {
    user.value = await AuthApi.login({ username, password });
    LocalStorage.setCurrentUser(user.value);
  },

  async logout(userId: number) {
    await AuthApi.logout(userId);
    user.value = null;
    LocalStorage.removeCurrentUser();
  },
};

export function register(createUserModel: CreateUserModel): Promise<User> {
  return createUser(createUserModel);
}

export function updateCurrentUser(currentUser: User) {
  user.value = currentUser;
}

export function getUsernameErrors(username: string) {
  const hasMinimumLength = username.length >= 4;

  if (!hasMinimumLength) {
    return { InvalidUsernameMinLength: true };
  }

  return null;
}

export function getPasswordErrors(password: string, rePassword: string) {
  const arePasswordAndReEnterPasswordEqual = password === rePassword;
  if (!arePasswordAndReEnterPasswordEqual) {
    return { InvalidPasswordAndRePasswordDoNotMatch: true };
  }

  const hasMinimumLength =
    arePasswordAndReEnterPasswordEqual && password.length >= 5;
  if (!hasMinimumLength) {
    return { InvalidPasswordMinLength: true };
  }

  return null;
}

export function getEmailErrors(email: string | null) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isEmailValid = !!email?.toLowerCase().match(emailRegex);

  if (!isEmailValid) {
    return { InvalidEmail : true};
  }

  return null;
}
