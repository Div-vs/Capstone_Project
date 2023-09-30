import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { RechargeComponent } from './app/recharge/recharge.component';
import { ViewplanComponent } from './app/viewplan/viewplan.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'home',component:HomeComponent},
  {path: 'recharge',component:RechargeComponent},
  {path: 'viewplan',component:ViewplanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
