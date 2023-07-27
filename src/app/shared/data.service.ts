import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  data():Observable<any>{
    const headers = this.getHeaders()
    return this.http.get('http://localhost:4040/products', { headers })
  }

  saveProduct(data: any){
    const headers = this.getHeaders()
    return this.http.post('http://localhost:4040/products', data, { headers })
  }

  saveSignUpDetails(signupData: any){
    return this.http.post('http://localhost:4040/signup', signupData)
  }

  saveLoginDetails(loginData: any){
    return this.http.post('http://localhost:4040/login' ,loginData)
  }

  getUserDetails(): Observable <any>{
    return this.http.get('http://localhost:4040/getUser')
  }

  cartProducts(product: any): Observable <any>{
    console.log(product);

    return this.http.post('http://localhost:4040/addtocart', product._id)

  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('Token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }


}
