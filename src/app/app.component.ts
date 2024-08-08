import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AvailableModulesService } from './services/available-modules.service';
import { Module } from './interfaces/module';

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
  modules: Module[] = [];
  activeModuleId: number | null = null;

  constructor(
    public router: Router,
    private authService: AuthService,
    private availableModulesService: AvailableModulesService
  ) { }

  ngOnInit(): void {
    this.modules = this.availableModulesService.getModules();

    if (!this.authService.isAdmin()) {
      this.router.navigate(['/login']);
    }
  }

  toggleActive(moduleId: number): void {
    this.activeModuleId = moduleId;
  }

  switchClass(): void {
    this.status = !this.status;
  }
}
