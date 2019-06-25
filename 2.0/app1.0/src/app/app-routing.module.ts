import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PnrComponent} from './pnr/pnr.component';
import {TbtwsComponent} from './tbtws/tbtws.component';
import {TbtwsResultComponent} from './tbtws-result/tbtws-result.component';
import {PnrResultComponent} from './pnr-result/pnr-result.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {
    path: 'trains',
    component:TbtwsComponent
  },

  {
    path: 'pnr',
    component:PnrComponent
  },

  {
    path: 'pnr/pnrresults/:pnrnum',
    component:PnrResultComponent
  },

  {
    path: 'tbtwsresults/:from/:to/:date',
    component:TbtwsResultComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
