import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, filter, find, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username, password): Observable<any>{
    return this.http.get<any>('../../../assets/users.json').pipe(
      map(users=> {
        return users.find(user=> user.username === username && user.password === password)
      }),
      catchError(() => {
        return of(false)
      })
    )
  } 
}
