import { Component } from '@angular/core';

@Component({
  selector: 'app-not-available',
  standalone: true,
  imports: [],
  templateUrl: './not-available.component.html',
  styleUrl: './not-available.component.scss'
})
export class NotAvailableComponent {
  title = 'Недоступно! Функціональність на стадії розробки';
}
