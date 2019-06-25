import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TbtwsComponent } from './tbtws/tbtws.component';
import { PnrComponent } from './pnr/pnr.component';
import { TbtwsResultComponent } from './tbtws-result/tbtws-result.component';
import { PnrResultComponent } from './pnr-result/pnr-result.component';

import { DataService } from './data.service';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TbtwsComponent,
    PnrComponent,
    TbtwsResultComponent,
    PnrResultComponent,

    RegisterComponent,

    LoginComponent,

    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
