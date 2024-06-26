import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';    
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-editor',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './user-editor.component.html',
  styleUrl: './user-editor.component.scss'
})
export class UserEditorComponent implements OnInit {
  title = '';
  isEdit: boolean = false;
  userId: number = 0;
  user: User | undefined; 
  
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId = +this.route.snapshot.params['id'];
    if (userId) {
      this.title = "Редагування користувача";
      this.userId = userId;
      this.isEdit = true;
      this.user = this.userService.getUserById(userId);
    } else {
      this.title = "Додавання користувача";
      this.userId = this.userService.getUsersCount() + 1;
      this.isEdit = false;
    }
  }
  
  onSubmit(userForm: NgForm): void {
    const frmValue = userForm.form.value;    
    const newUser: User = {
      id: this.userId, 
      login: `${frmValue.lastName}_${frmValue.firstName[0]}${frmValue.secondName[0]}`,
      firstName: frmValue.firstName, 
      secondName: frmValue.secondName, 
      lastName: frmValue.lastName,
      phone: frmValue.phone,
      mobile: frmValue.mobile,
      email: frmValue.email,
      address: frmValue.address,
    }
    if (!this.isEdit) {
      this.userService.addUser(newUser);
    } else {
      this.userService.updateUser(newUser);
    }
    
    this.router.navigate(['users']);    
  }

  cancel() {
    this.router.navigate(['users']);
  }
}
