import { API_URL } from "@/envrironment/environment";
import type { CategoryItem } from "@/model/CategoryItemModel";
import axios from "axios";

export async function getItemsByCategory(
  category: string
): Promise<CategoryItem[]> {
  const { data } = await axios.get<CategoryItem[]>(
    `${API_URL}/item/${category}`
  );
  return data;
}
