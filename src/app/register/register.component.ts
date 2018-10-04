import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { RestApi } from '../services/rest.api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private name = '';
  private email = '';
  private password = '';
  private password1 = '';
  private picture = '';
  private btnDisabled = false;
  constructor(private router: Router, private dataService: DataService, private restApi: RestApi) { }

  ngOnInit() {
  }

  async register() {
    if (this.validate()) {
      var data = await this.restApi.post("http://localhost:3000/api/auth/signup", {
        name: this.name,
        email: this.email,
        password: this.password,
        picture: this.picture,
        isSeller: true
      }
      );
      if (data['success']) {
        console.log('The successfull satus is ', data);
        this.router.navigate(['/'])
      }

    }
  }

  validate() {
    if (this.name) {

      if (this.email) {

        if (this.picture) {

          if (this.password) {

            if (this.password1) {

              if (this.password === this.password1) {
                return true;
              }
              else {
                this.dataService.error("Password Not match")
              }

            }
            else {
              this.dataService.error("Retype password !")
            }

          }

          else {
            this.dataService.error("Password required")
          }
        }
        else {
          this.dataService.error("Picture required ")
        }

      }
      else {
        this.dataService.error("Email required !")
      }

    }
    else {
      this.dataService.error("Name required !")
    }
  }

}
