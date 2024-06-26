import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';    

@Component({
  selector: 'app-user-editor',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-editor.component.html',
  styleUrl: './user-editor.component.scss'
})
export class UserEditorComponent {
  title = 'Додавання, редагування, видалення користувачів';

  constructor(private router: Router) {}
  
  cancel() {
    this.router.navigate(['users']);
  }
}
