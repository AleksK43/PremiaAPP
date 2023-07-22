import { Injectable } from '@angular/core';
import { Documents } from '../Models/documents';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  private url = "Documents";
  constructor(private http: HttpClient) { }

  public getAllDocuments(): Observable<Documents[]> {
    return this.http.get<Documents[]>(`${environment.apiUrl}/${this.url}`);
  }

  getDocument(id: string): Observable<Documents> {
    return this.http.get<Documents>(`${environment.apiUrl}/${this.url}/${id}`);
  }

  updateDocument(id: string, data: any): Observable<any> {
    return this.http.put(`https://localhost:7213/api/Documents/${id}`, data);
  }

}
