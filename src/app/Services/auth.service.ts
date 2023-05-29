import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BaseUrl: string = "https://localhost:7213/api/Auth/"
  constructor(private http: HttpClient, private router: Router) { } 

    login ( loginObj: any )
    {
      return this.http.post<any>(`${this.BaseUrl}login`, loginObj)
    }

    logOut(){
      localStorage.clear(); 
      this.router.navigate(['login'])
    }
 
    storeToken(tokenValue: string)
    {
      localStorage.setItem('token' ,tokenValue)
    }

    getToken()
    {
      return localStorage.getItem('token')
    }

    isLoggedIn():boolean
    {
      return !!localStorage.getItem('token')
    }

   }

