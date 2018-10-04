import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RestApi } from './services/rest.api';
import { DataService } from './services/data.service';
import { MessageComponent } from './message/message.component';
import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AfterLoginGuardService } from './services/after-login-guard.service';
import { MenuService } from './services/menu.service';
import { ProfileComponent } from './profile/profile.component';
import { MyordersComponent } from './myorders/myorders.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { InterceptorService } from './services/interceptor.service';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    MyordersComponent,
    MyproductsComponent,
    AddproductComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
     NgbAlertModule,
     FormsModule,
     RouterModule.forRoot([
       {path : "home",component : HomeComponent,
       children : [
         {path : '',component : ProductsComponent},
         {path : 'profile',component : ProfileComponent},
         {path : 'myproducts',component : MyproductsComponent},
         {path : 'myorders',component : MyordersComponent},
         {path : 'addproducts',component : AddproductComponent},
         {
           path : 'categories',component : CategoriesComponent
         },
         {
           path : 'product_details/:id',component : ProductdetailComponent
         }
       ]
      
      },
       {
         path : "register",component : RegisterComponent,canActivate : [AuthGuardService]
       },
       {
         path : '',component : LoginComponent,canActivate : [AuthGuardService]
       }
     ])

     
  ],
  providers: [RestApi,{
    provide : HTTP_INTERCEPTORS,
    useClass : InterceptorService,
    multi : true
  },DataService,AuthGuardService,AfterLoginGuardService,MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
