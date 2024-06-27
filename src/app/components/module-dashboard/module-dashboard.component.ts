import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-module-dashboard',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './module-dashboard.component.html',
  styleUrl: './module-dashboard.component.scss'
})
export class ModuleDashboardComponent {
  title = 'Керування користувачами'

  constructor(private router: Router) {}

  openUsers() {
    this.router.navigate(['users']);
  }

  notAvailable() {
    this.router.navigate(['not-available']);
  }
}
