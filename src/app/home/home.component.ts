import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
// import { DataService } from '../../old_app/app/services/data.service';
import { RestApi } from '../services/rest.api';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private user : any = {};
  constructor(private menuService : MenuService,private restApi : RestApi,private dataService : DataService) {
  this.getUser();
   }

   async getUser(){
var data =await this.restApi.get("http://localhost:3000/api/profile/user");
console.log(data)
if(data['success']){
this.user = data['user'];
}
   }

  ngOnInit() {
  }

}
