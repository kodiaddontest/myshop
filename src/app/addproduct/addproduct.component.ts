import { Component, OnInit } from '@angular/core';
import { RestApi } from '../services/rest.api';
import { DataService } from '../services/data.service';
// import { DataService } from 'src_old/app/services/data.service';
// import { DataService } from '../../old_app/app/services/data.service';
// import { DataService } from 'src_old/app_old/services/data.service';
// import { DataService } from '../../old_app/app/services/data.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
private product : any = {};
private categories : any[]=[];
  constructor(private restApi : RestApi,private dataService : DataService) { }

  async ngOnInit() {

    var data = await this.restApi.get("http://localhost:3000/api/profile/categories");
    console.log("The categories is ",data)
    if(data['success']){
      this.categories = data['categories'];
    }

  }

  async addProduct(){
    var data = await this.restApi.post("http://localhost:3000/api/profile/products",this.product)
  console.log('Status is ',data)
  if(data['success']){
    this.product = {};
    this.dataService.success("Product added successfully !")
  }
  }

}
