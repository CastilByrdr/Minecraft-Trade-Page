import type { User } from "@/model/UserModel";

const enum LocalStorageKeys {
  currentUser = "user",
}

export const LocalStorage = {
  getCurrentUser(): User {
    const user = localStorage.getItem(LocalStorageKeys.currentUser);

    return user ? JSON.parse(user) : null;
  },

  removeCurrentUser() {
    localStorage.removeItem(LocalStorageKeys.currentUser);
  },
};
