import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApi } from '../services/rest.api';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
private product : any = {};
  constructor(private dataService: DataService, private restApi: RestApi, private paramObject: ActivatedRoute) { }

  ngOnInit() {
    this.paramObject.params.subscribe((param) => {
      console.log('The id is ' + param['id'])
      var data = this.restApi.get("http://localhost:3000/api/profile/products/" + param['id']).then((res) => {
console.log("The detail is ",res)
this.product = res['data'];
      })
        .catch((err) => {
          console.log('The error is ', err)
        });
      console.log('The data is ', data)
    })
  }

}
