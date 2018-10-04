import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class RestApi{

constructor(private http : HttpClient){

}

get(link){
return this.http.get(link).toPromise();
}

post(link,data){
return this.http.post(link,data).toPromise();
}

}