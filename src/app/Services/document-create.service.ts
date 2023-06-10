import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DocumentCreateService {

  private url = "Documents"; 
  constructor(private http: HttpClient) {  }
  addDocument(document: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.url}`, document);
  }

}
