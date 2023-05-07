import type { CategoryItem } from "./CategoryItemModel";
import type { User } from "./UserModel";

export interface Trade {
  id: number;
  user: User;
  userId: number;
  categoryItem: CategoryItem;
  categoryItemId: number;
  createdDate: string;
  description: string;
  serverIpAddress: string;
  quantity: string;
}

export interface CreateTradeModel {
  userId: number;
  categoryItemId: number;
  description: string;
  serverIpAddress: string;
  quantity: string;
}
