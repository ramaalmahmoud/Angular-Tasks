import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) {
  }
  staticPart = "https://localhost:7081/api"

  getCategories(): Observable<any> {
    debugger
    return this.http.get<any>(`${this.staticPart}/Categories/categories`);
  }
}
