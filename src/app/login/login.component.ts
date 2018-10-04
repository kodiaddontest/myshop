import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ThrowStmt } from '@angular/compiler';
import {Router} from '@angular/router';
import { MenuService } from '../services/menu.service';
import { RestApi } from '../services/rest.api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email = '';
  private password = '';
  private btnEnabled = false;
  constructor(private restApi : RestApi,private dataSeervice: DataService,private router : Router,private menuService : MenuService) { }

  ngOnInit() {
    this.menuService.enableBtn();
  }

 async checkLogin() {
if(this.validate()){
  
  try{
    console.log("----");
    console.log("email", this.email);
    console.log("password", this.password);
  var data =await this.restApi.post("http://localhost:3000/api/auth/login",{
    email : this.email,
    password : this.password
  });
  console.log("data", data);
  if(data['succcess']){
    console.log('Login status ',data['token']);
    localStorage.setItem('token',data['token'])
    this.router.navigate(['/home'])
    console.log('Success')
  }
  else{
    console.log('Incorrect login')
  }}
  catch(err){
    console.log("The error "+err)
  }}}
  activateBtn(){
    console.log('Hi')
  }


  validate() {
    if (this.email) {
      if (this.password) {
        return true;
      }
      else {
        this.dataSeervice.error("Password required !")
      }
    }
    else {
      this.dataSeervice.error("Email required !")
    }
  }

}
