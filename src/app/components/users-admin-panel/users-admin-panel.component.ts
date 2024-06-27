import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-users-admin-panel',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ConfirmDialogComponent
  ],
  templateUrl: './users-admin-panel.component.html',
  styleUrl: './users-admin-panel.component.scss'
})
export class UsersAdminPanelComponent implements OnInit {
  title = 'Перегляд користувачів';
  users: User[] = [];
  isConfirming: boolean = false;
  userId: number = 0; 

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.userService.getUsers();
  }

  addUser() {
    this.router.navigate(['add-user']);
  }

  editUser() {
    this.router.navigate(['edit-user', 1]);
  }

  confirmDelete(id: number): void {
    this.userId = id;
    this.isConfirming = true;
  }

  deleteUser(confirmed: boolean): void {
    if (confirmed && this.userId > 0) {
      this.userService.deleteUser(this.userId)
      this.loadUsers();      
    }
    this.isConfirming = false;
    this.userId = 0;
  }
}
