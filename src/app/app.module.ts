import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddlibraryComponent } from './addlibrary/addlibrary.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewlibraryComponent } from './viewlibrary/viewlibrary.component';

const appRoutes:Routes=[
  {
    path:"",component:AddlibraryComponent
  },
  {
    path:"view",component:ViewlibraryComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddlibraryComponent,
    ViewlibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
