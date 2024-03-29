export interface CreateUserModel {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  lastActive: string;
  imagePath: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  lastActive: string;
  imagePath: string;
}

export interface UpdateUserModel {
  password?: string;
  isAdmin?: boolean;
}
