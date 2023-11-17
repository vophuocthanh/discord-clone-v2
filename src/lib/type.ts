export interface Orgs {
  id: string;
  name: string;
  icon: string;
}
export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface Message {
  id: number;
  sender: User;
  createdAt: string;
  message: string;
}
