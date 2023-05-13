import { Injectable } from '@angular/core';
import { Users } from '../Models/Users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private url = "User"; 
  constructor(private http: HttpClient) {  }

  public getUsers(): Observable<Users[]>
  {
   
    return this.http.get<Users[]>(`${environment.apiUrl}/${this.url}`);
  }
}
