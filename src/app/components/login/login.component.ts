import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService, AuthUser } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: AuthUser | undefined;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(userForm: NgForm): void {
    const frmValue = userForm.form.value;    
    this.user = {
      name: frmValue.name,
      password: frmValue.password
    }

    this.authService.setUser(this.user);

    if (this.authService.isAdmin()) {
      this.router.navigate(['/']);    
    }
  }
}
