import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuSidebarComponent } from "./components/main-menu-sidebar/main-menu-sidebar.component";
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet, 
      MainMenuSidebarComponent,
      MainNavbarComponent
    ]
})
export class AppComponent {
  title = 'АТ УЗ - Автоматизована система обліку';
}
