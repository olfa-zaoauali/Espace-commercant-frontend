import { Component ,OnInit} from '@angular/core';
import { FormBuilder,Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { UserAuth } from '../userauth';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:any ;
  constructor(private builder: FormBuilder, private toastr:ToastrService, private service: AuthService, private router: Router ){

  }
  ngOnInit(): void {
   // this.listofusers();
  }
  /*listofusers(){
    this.service.GetAll().subscribe(
      data => {
        this.users= data; 
      }
    )
  }*/
  registerform=this.builder.group({
    firstname:this.builder.control('', Validators.required),
    lastname:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    role:this.builder.control(''),
    isactive:this.builder.control(false)
  });
  proceedregisteration(){
    if (this.registerform.valid) {
      this.service.Procedeedregister(this.registerform.value).subscribe( 
        (response: UserAuth) => {
        console.log(response);
        //this.listofusers();
        this.toastr.success('Please contact admin for enable access.','Registered successfully')
        this.router.navigate(['login'])
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }

}
