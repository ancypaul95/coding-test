import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[]

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get('https://randomuser.me/api/0.8/?results=20').pipe(
      tap((users: any) => {
        if(localStorage){
          if(users){
            localStorage.setItem('users', JSON.stringify(users.results))
          }
        }
        else{
          alert("Localstorage does not exists")
        }
      }),
      mapTo(true),
      catchError(error => of(error))
    )
  }
}
