import { Component, OnInit } from '@angular/core';
// import { RestApi } from '../../old_app/app/services/rest.api';
import { DataService } from '../services/data.service';
import { RestApi } from '../services/rest.api';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
private name : string
private categories : any[]=[];
  constructor(private restApi : RestApi,private dataService : DataService) { }

  async ngOnInit() {
    var data = await this.restApi.get("http://localhost:3000/api/profile/categories")
    if(data['success']){
      this.categories = data['categories'];
    }
  }

  async addCategory(){
var data =await this.restApi.post("http://localhost:3000/api/profile/categories",{
  name : this.name
});
if(data['success']){
  this.name = '';
  this.dataService.success("Category saved successfully")
}
console.log("The status is ",data)
  }

}
