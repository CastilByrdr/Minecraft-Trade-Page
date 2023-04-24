import { updateCurrentUser } from "@/service/AuthService";
import { LocalStorage } from "@/service/LocalStorageService";
import { user } from "@/state/user";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const currentUser = LocalStorage.getCurrentUser();

  if (user.value) {
    next();
  } else if (currentUser) {
    updateCurrentUser(currentUser);
    next();
  } else {
    next("/login");
  }
}
