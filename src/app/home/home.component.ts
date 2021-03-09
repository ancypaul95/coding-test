import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: any
  search: string
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    if(localStorage){
      this.userService.users = JSON.parse(localStorage.getItem('users'))
                  .map(user => `${user.user.name.title} ${user.user.name.first} ${user.user.name.last}`)
      this.setUsers()
    }
  }
  
  handleSearch(searchText: string): void {
    this.users = this.users.filter(user => user.includes(searchText))
  }

  clearSearch(): void {
   this.setUsers()
   this.search = ''
  }

  setUsers(): void {
    this.users = this.userService.users
  }
}
