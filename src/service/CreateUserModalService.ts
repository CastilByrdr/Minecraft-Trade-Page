import type { User } from "@/model/UserModel";
import { ref } from "vue";

export const mustShowUserModal = ref(false);

export const quickUserUserModal = ref<User | null>(null);

export function showUserModal() {
  mustShowUserModal.value = true;
}

export function closeUserModal() {
  mustShowUserModal.value = false;
}
