import { Component, OnInit } from '@angular/core';
import {UserService} from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'coding-test-ancy';

  constructor(private userService: UserService){}
  ngOnInit(): void{
    this.userService.getUsers().subscribe(),
    error => console.log(error)
  }
}
