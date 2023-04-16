import type { User } from "@/model/UserModel";
import { ref } from "vue";

const username = ref("");
const user = ref<User | null>(null);

export const authState = {
  username,
  user,
};

export const users = ref<User[]>([]);
