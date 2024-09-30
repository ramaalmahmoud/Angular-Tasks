import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) {}
  staticPart = "https://localhost:7088/api"
  urlService = `${this.staticPart}/Categories/categories`;

  getCategories(): Observable<any> {
    
    return this.http.get<any>(this.urlService);
    
  }
  getProducts(): Observable<any> {

    return this.http.get<any>(`${this.staticPart}/Products/all`);

  }
}
