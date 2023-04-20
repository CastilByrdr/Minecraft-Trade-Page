import type { User } from "@/model/UserModel";
import { computed, ref } from "vue";

export const user = ref<User | null>(null);
export const isUserLoggedIn = computed(() => !!user.value);
export const users = ref<User[]>([]);
