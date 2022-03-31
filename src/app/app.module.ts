import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { CarsComponent } from './page/cars/cars.component';
import { CategoryComponent } from './page/category/category.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConnectComponent } from './page/connect/connect.component';
import { NewCarComponent } from './page/new-car/new-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    CategoryComponent,
    ConnectComponent,
    NewCarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
