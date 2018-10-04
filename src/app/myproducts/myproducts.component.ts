import { Component, OnInit } from '@angular/core';
import { RestApi } from '../services/rest.api';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {
private products : any[]=[];
  constructor(private restService : RestApi,private dataService : DataService) { }

   async ngOnInit() {
    this.getProducts();
  }

async getProducts(){
  var data = await this.restService.get("http://localhost:3000/api/profile/ownerproducts");
  console.log('the product list is',data)
  console.log(data['products'])
  this.products = data['products'];
}
  
 async removeProduct(id){
var data = await this.restService.delete("http://localhost:3000/api/profile/products/"+id);
console.log('The response for delete is ',data)
if(data['success']){
  this.dataService.success("Product deleted successfully !");
  this.getProducts();
}
  }

}
