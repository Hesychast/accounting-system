import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

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
export class AppComponent implements OnInit {
  title = 'АТ УЗ - Автоматизована система обліку';
  status: boolean = false;

  constructor(
    public router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/login']);    
    }
  }
  
  switchClass() {
    this.status = !this.status;
  }
}
