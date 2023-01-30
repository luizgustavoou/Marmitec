export interface User {
  username: string;
  password: string;
}

export interface Profile {
  id: number;
  name: string;
  email: string;
}

export interface Token {
  access_token: string;
  refresh_token: string;
}
