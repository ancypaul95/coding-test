import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  get username(): AbstractControl{
    return this.loginForm.get('username')
  }

  get password(): AbstractControl{
    return this.loginForm.get('password')
  }

  ngOnInit(): void {
    this.loginInit();
  }

  loginInit(): void{
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  logIn():void{
    if(this.loginForm.valid){
      this.loginService.login(this.username.value,this.password.value).subscribe(user =>{
        if(user){
          localStorage.setItem('authenticated', 'true')
          this.router.navigate(['/'])
        }
        else{
          alert('Invalid username or password')
        }
      })
    }
  }

}
