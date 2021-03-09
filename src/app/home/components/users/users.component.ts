import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  addUser(): void {
    this.userService.users = [...this.userService.users, this.user]
    localStorage.setItem('users', JSON.stringify(this.userService.users))
  }
}
