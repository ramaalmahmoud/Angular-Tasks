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
  getsubsicription(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Subsicription`);
  }
  
  addUserSubsicription(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/UserSubsicription`, data)
  }
  regiisterUser(data:any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/Users/register`,data)
  }
  loginUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/Users/login`,data)
  }
}
