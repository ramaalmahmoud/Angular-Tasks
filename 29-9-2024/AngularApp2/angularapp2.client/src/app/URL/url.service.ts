import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }
  staticData ="https://localhost:7081/api"
  urlService = `${this.staticData}/Services/getServices`;

  getServices(): Observable<any> {
    return this.http.get<any>(this.urlService);
  }
  getsubServices(id: number): Observable<any> {

    return this.http.get<any>(`${this.staticData}/SubServices/getSubservicesByserviceId${id}`);

  }
  getsubServiceById(id: number): Observable<any> {

    return this.http.get<any>(`${this.staticData}/SubServices/getSubservicesById${id}`);

  }
}
