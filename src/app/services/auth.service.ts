import { Injectable } from '@angular/core';

export interface AuthUser {
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly ADMIN_USER: AuthUser = {
    name: 'admin',
    password: 'qwerty123'
  };

  private user: AuthUser | undefined;

  constructor() { }

  setUser(user: AuthUser): void {
    this.user = user;
  }

  isAdmin(): boolean {
    return ((this.user?.name === this.ADMIN_USER.name) && (this.user?.password === this.ADMIN_USER.password));
  }
}
