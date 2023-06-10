import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from '../Models/customers';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
 private url = "Customers"; 
  constructor(private http: HttpClient) { }

public getAllCustomer(): Observable<Customers[]>
{
    return this.http.get<Customers[]>(`${environment.apiUrl}/${this.url}`);
}

public getAllActiveCustomers(): Observable<Customers[]> {
  const params = new HttpParams().set('isDeleted', '0');
  return this.http.get<Customers[]>(`${environment.apiUrl}/${this.url}`, { params });
}

}
