import type { User } from "@/model/UserModel";
import { ref } from "vue";
import { getTradesByUser } from "./TradeService";
import type { Trade } from "@/model/Trade";

export const trades = ref<Trade[]>([]);

export const mustShowUserModal = ref(false);

export const quickUserUserModal = ref<User | null>(null);

export function showUserModal() {
  mustShowUserModal.value = true;
}

export function closeUserModal() {
  mustShowUserModal.value = false;
}

export async function reloadTradesByUser(userId: number) {
  trades.value = await getTradesByUser(userId);
}
