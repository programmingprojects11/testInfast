import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import { Teachers } from '../shared/models/teachers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
userName:string;
password:string;
t:Teachers=new Teachers(null,null,null);
  constructor(private loginS:LoginService,private router:Router) { 


  }

  ngOnInit() {
   
  }
  // ngOnInit(t:Teachers) {
  //   this.login(t);
  // }
  login(){
  this.loginS.login(this.t).subscribe(
  (res)=>{
    // alert("good");
    // alert(res);
this.router.navigate(["/menu"]);


  },
  (err)=>{
    // alert(err);
  }
)
  }

}
