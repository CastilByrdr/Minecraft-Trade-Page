import type { CategoryItem } from "@/model/CategoryItemModel";
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
