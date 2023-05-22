import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BaseUrl: string = "https://localhost:7213/api/Auth/"
  constructor(private http: HttpClient) { } 

    login ( loginObj: any )
    {
      return this.http.post<any>(`${this.BaseUrl}login`, loginObj)
    }

   }

