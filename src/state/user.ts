import type { User } from "@/model/UserModel";

const username = ref("");
const user = ref<User | null>(null);

export const authState = {
  username,
  user,
};

export const isUserLoggedIn = computed(() => !!authState.username.value);
export const users = ref<User[]>([]);