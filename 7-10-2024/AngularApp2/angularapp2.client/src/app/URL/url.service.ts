import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }
  //email: BehaviorSubject<string> = new BehaviorSubject<string>("");
  //emailaddress = this.email.asObservable();



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

  addNewService(data: any): Observable<any> {
    debugger
    return this.http.post<any>(`${this.staticData}/Services/addServices`,data)

  }
  UpdateServic(id: any, data: any): Observable<any> {
    debugger
    return this.http.put(`${this.staticData}/Services/updateServices${id}`,data)
  }
  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Products`)
  }
  cartItem: any=[];
  cartItemSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.cartItem);
  cartItemObser = this.cartItemSubject.asObservable();

  addToCart(data: any) {
    var record = this.cartItem.find((x: any)=>  x.productId== data.productId)
    if (record) {
      alert("product already exist")
    }
    else {
      debugger
      this.cartItem.push(data);
      this.cartItemSubject.next(this.cartItem);
      alert("product added sucsessfuly")
    }
    
  }


  increseQuantity(id: any) {
    var product = this.cartItem.find((x: any) => x.productId == id)
    if (product) {
      product.quantity += 1;
      this.cartItemSubject.next(this.cartItem  );
    }
  }
  decreaseQuantity(id: any) {
    var product = this.cartItem.find((x: any) => x.productId == id)
    if (product) {
      product.quantity -= 1;
      this.cartItemSubject.next(this.cartItem);
    }
  }
}
