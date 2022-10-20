import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddlibraryComponent } from './addlibrary/addlibrary.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewlibraryComponent } from './viewlibrary/viewlibrary.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

const appRoutes:Routes=[
  {
    path:"",component:AddlibraryComponent
  },
  {
    path:"view",component:ViewlibraryComponent
  },
  {
    path:"search",component:SearchComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddlibraryComponent,
    ViewlibraryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
