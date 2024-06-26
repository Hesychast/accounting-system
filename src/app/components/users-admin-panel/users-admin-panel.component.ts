import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-admin-panel',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './users-admin-panel.component.html',
  styleUrl: './users-admin-panel.component.scss'
})
export class UsersAdminPanelComponent {
  title = 'Перегляд користувачів';

  constructor(private router: Router) {}

  addUser() {
    this.router.navigate(['user-edit']);
  }
}
