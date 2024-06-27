import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule,
      RouterOutlet,
      RouterModule
    ]
})
export class AppComponent {
  title = 'АТ УЗ - Автоматизована система обліку';
  status: boolean = false;

  constructor(private router: Router) {}

  switchClass() {
    this.status = !this.status;
  }

  // usersManagement() {
  //   this.router.navigate(['users-management']);
  // }
}
