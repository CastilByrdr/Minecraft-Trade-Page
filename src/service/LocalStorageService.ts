import type { User } from "@/model/UserModel";
import type { Server } from "@/model/ServerModel";

const enum LocalStorageKeys {
  currentUser = "user",
  currentServer = "server",
}

export const LocalStorage = {
  // currently signed-in user
  getCurrentUser(): User {
    const user = localStorage.getItem(LocalStorageKeys.currentUser);

    return user ? JSON.parse(user) : null;
  },

  setCurrentUser(user: User): void {
    localStorage.setItem(LocalStorageKeys.currentUser, JSON.stringify(user));
  },

  removeCurrentUser(): void {
    localStorage.removeItem(LocalStorageKeys.currentUser);
  },

  //currently connected server
  getCurrentServer(): Server | null {
    const server = localStorage.getItem(LocalStorageKeys.currentServer);

    return server ? JSON.parse(server) : null;
  },

  setCurrentServer(server: Server): void {
    localStorage.setItem(LocalStorageKeys.currentServer, JSON.stringify(server));
  },

  removeCurrentServer(): void {
    localStorage.removeItem(LocalStorageKeys.currentServer);
  },
};
