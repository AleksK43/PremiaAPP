import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profit } from '../Models/profit';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfitService {

private url = "Profit";   
constructor(private http:HttpClient) { }

public getProfit(guid: string): Observable<Profit>
{
  return this.http.get<Profit>(`${environment.apiUrl}/${this.url}/${guid}`); 
}

}
