import type { User } from "@/model/UserModel";
import { computed, ref } from "vue";

const username = ref("");
const user = ref<User | null>(null);

export const authState = {
  username,
  user,
};

export const users = ref<User[]>([]);
export const isUserLoggedIn = computed(() => !!authState.username.value);
