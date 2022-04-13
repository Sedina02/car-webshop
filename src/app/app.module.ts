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
import { NewCategoryComponent } from './page/new-category/new-category.component';
import { EditorCategoryComponent } from './page/editor-category/editor-category.component';
import { EditorCarComponent } from './page/editor-car/editor-car.component';
import { HeaderComponent } from './common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    CategoryComponent,
    ConnectComponent,
    NewCarComponent,
    NewCategoryComponent,
    EditorCategoryComponent,
    EditorCarComponent,
    HeaderComponent,

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
