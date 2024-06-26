import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-module-dashboard',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './module-dashboard.component.html',
  styleUrl: './module-dashboard.component.scss'
})
// TODO: Use this component as a base module for visualizing the buttons of every module.
export class ModuleDashboardComponent {
  title = 'Керування користувачами'
}
