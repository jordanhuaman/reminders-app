export interface UserI {
  id: string;
  userName: string;
  password: string;
}

export interface UserLoginI {
  email: string;
  password: string;
}

export interface UserRegisterI {
  email: string;
  password: string;
}

export interface User {
  id: string;
  userName: string;
  roles: string[];
  email?: string;
}
