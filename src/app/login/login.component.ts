import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
    private router: Router) {
       sessionStorage.clear();
  }
  ngOnInit(): void {
  }
  userdata: any
  loginform=this.builder.group({
    email:this.builder.control('', Validators.required),
    password:this.builder.control('',Validators.required)
    
  })
  proceedlogin(){
    if (this.loginform.valid) {

    this.service.login(this.loginform.value)
    .subscribe(
      res =>{
    this.userdata=res;
    console.log(this.userdata.token);
    localStorage.setItem('token' , this.userdata.token);
    sessionStorage.setItem('email',this.userdata.token)
    sessionStorage.setItem('userrole',this.userdata.token)
    this.router.navigate(['']);
    console.log(res)
    },    err=>{
      console.log(err);
     
     }) ;
  }
  }
  
}
