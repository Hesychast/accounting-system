import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule,
      RouterOutlet, 
    ]
})
export class AppComponent {
  title = 'АТ УЗ - Автоматизована система обліку';
  status: boolean = false;

  switchClass() {
    this.status = !this.status;
  }
}
