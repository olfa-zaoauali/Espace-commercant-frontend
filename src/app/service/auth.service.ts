import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuth } from '../userauth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl='http://localhost:8098/api/v1/auth/'

  constructor(private http:HttpClient) { }

  /*GetAll(){
    return this.http.get(this.apiurl)
  }*/
  Getbyemail(email: any){
    console.log(this.apiurl+email)
    return this.http.get(this.apiurl+email);
  }
  Procedeedregister(user:any){
    return this.http.post<UserAuth>(`${this.apiurl}register`,user);
  }
 
  IsloggedIn(){
    return sessionStorage.getItem('email')!=null;
  }
  GetUserrole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }
  getDataFromToken(){
    let token = localStorage.getItem('token');

     if (token){
       let data = JSON.parse(window.atob(token.split('.')[1]));
       return data;
    }    
  }
  login(user : any){
    return this.http.post(this.apiurl+'authenticate',user);
  }

}
