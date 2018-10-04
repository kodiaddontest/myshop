import { Component, OnInit } from '@angular/core';
// import { RestApi } from '../../old_app/app/services/rest.api';
// import { DataService } from 'src_old/app_old/services/data.service';
import { RestApi } from '../services/rest.api';
// import { DataService } from 'src_old/app_old/services/data.service';
import {DataService} from '../services/data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
private products : any[]=[];
  constructor(private restApi : RestApi,private dataService : DataService) {
    console.log('Start')
   }

  ngOnInit() {
this.getProducts();
  }

  async getProducts(){
var data =await this.restApi.get("http://localhost:3000/api/profile/products");
console.log(data)
if(data['success']){
  this.products = data['products'];
}
  }

  

}
