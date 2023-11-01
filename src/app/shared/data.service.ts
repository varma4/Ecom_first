import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  // signup and login
  saveSignUpDetails(signupData: any){
    return this.http.post('https://pitstop-80pm.onrender.com/signup', signupData)
  }

  saveLoginDetails(loginData: any){
    return this.http.post('https://pitstop-80pm.onrender.com/login' ,loginData)
  }
  // signup and login completed






  constructor(private http: HttpClient) { }
  // retrive and create product
  data():Observable<any>{
    const headers = this.getHeaders()
    return this.http.get('https://pitstop-80pm.onrender.com/products', { headers })
  }

  saveProduct(data: any){
    const headers = this.getHeaders()
    const userId = localStorage.getItem('id')
    if(userId){

      return this.http.post('https://pitstop-80pm.onrender.com/products/', {userId,...data}, { headers })
    }else{
      return new Observable()
    }
  }

  getMyProducts(){
    const userId = localStorage.getItem('id')
    if(userId){
      return this.http.get(`https://pitstop-80pm.onrender.com/myproducts/${userId}`)
    }else{
      return new Observable()
    }
  }

  removeMyProduct(itemId : string){
    // console.log(itemId)
    const userId = localStorage.getItem('id')
    return this.http.delete(`https://pitstop-80pm.onrender.com/deleteuserItem/${userId}/${itemId}`)
  }

  // retrive and create product completed -------------------------


  // adding, removing and getting items in cart

  getcartProducts(): Observable <any>{
    const headers = this.getHeaders()
    const currentUser = localStorage.getItem('id')
    if(currentUser){
      return this.http.get(`https://pitstop-80pm.onrender.com/getCartItems/${currentUser}`, {headers})
    }else{
      return new Observable()
    }
  }

  removeFromCart(itemId: any){
    const headers = this.getHeaders()
    // console.log(itemId);
    const userId = localStorage.getItem('id')
    return this.http.delete(`https://pitstop-80pm.onrender.com/deleteItem/${userId}/${itemId}`, {headers})
  }

  cartProducts(product: any): Observable <any>{
    // console.log("-------------------",product);
    product["actualId"] = product._id
    delete product._id
    // console.log(product);
    const currentUser = localStorage.getItem('id')
    const headers = this.getHeaders()

    return this.http.post(`https://pitstop-80pm.onrender.com/additem`, {currentUser, ...product}, {headers} )
  }
//   // adding, removing and getting items in cart completed ----------------------

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('Token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // verify email
  verifyEmail(userId: string): Observable<any> {

    // return this.http.get(`https://pitstop-80pm.onrender.com/verify?userId=${userId}`);
    return this.http.get(`https://pitstop-80pm.onrender.com/verify/${userId}`);

  }




}
