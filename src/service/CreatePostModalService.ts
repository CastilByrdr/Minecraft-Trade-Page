import { API_URL } from "@/envrironment/environment";
import type { CategoryItem } from "@/model/CategoryItemModel";
import type { CreateTradeModel, Trade } from "@/model/Trade";
import axios from "axios";
import { ref } from "vue";
import { getItemsByCategory } from "./CategoryItemService";

export const mustShowModal = ref(false);
export const categoryItems = ref<CategoryItem[]>([]);

export function showModal() {
  mustShowModal.value = true;
}

export function closeModal() {
  mustShowModal.value = false;
}

export async function reloadCategoryItems(categoryName: string) {
  categoryItems.value = await getItemsByCategory(categoryName);
}
