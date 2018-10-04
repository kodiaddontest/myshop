import { Component, OnInit } from '@angular/core';
// import { DataService } from '../../old_app/app/services/data.service';
import { RestApi } from '../services/rest.api';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
private user : any = {};
  constructor(private restApi : RestApi,private dataService : DataService) { 
    this.getUser();
  }

  ngOnInit() {
  }

  async getUser(){
    var data =await this.restApi.get("http://localhost:3000/api/profile/user");
    console.log(data)
    if(data['success']){
    this.user = data['user'];
    }
       }

}
