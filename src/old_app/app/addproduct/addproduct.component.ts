import { Component, OnInit } from '@angular/core';
import { RestApi } from '../services/rest.api';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
private product : any = {};
  constructor(private restApi : RestApi) { }

  async ngOnInit() {

    var data = await this.restApi.get("localhost:3000/api/profile/categories");
    console.log("The categories is ",data)

  }

}
