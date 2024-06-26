import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'users';

  getUsers(): User[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  getUserById(id: number): User | undefined {
    const users = this.getUsers();
    return users.find(user => user.id === id);
  }

  getUsersCount(): number {
    const users = this.getUsers();
    return users.length;
  }

  addUser(user: User): void {
    console.log(user);
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  updateUser(updatedUser: User): void {
    let users = this.getUsers();
    users = users.map(user => user.id === updatedUser.id ? updatedUser : user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  deleteUser(id: number): void {
    let users = this.getUsers();
    users = users.filter(user => user.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
}
