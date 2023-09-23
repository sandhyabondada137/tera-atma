import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  Baseurl = "http://localhost:3000"

    producturl="https://fakestoreapi.com/products?limit=20"



  constructor(private http: HttpClient) { }


  show() {
    return this.http.get(this.producturl )
    .pipe(map((res:any)=>{
          return res;
    }))
  }


  read(endPoint: string) {
    return this.http.get(this.Baseurl + endPoint)
  }
  addvalues(body: any, endpoint: string) {
    return this.http.post(this.Baseurl + endpoint, body)
  }
  update(body: any, endPoint: string) {
    return this.http.put(this.Baseurl + endPoint, body)
  }
  deleat(endPoint: string) {
    return this.http.delete(this.Baseurl + endPoint)
  }
}