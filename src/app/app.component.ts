import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

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

  constructor(public router: Router) {}
  
  switchClass() {
    this.status = !this.status;
  }
}
