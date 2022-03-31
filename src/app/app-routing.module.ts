import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './page/cars/cars.component';
import { CategoryComponent } from './page/category/category.component';
import { ConnectComponent } from './page/connect/connect.component';
import { NewCarComponent } from './page/new-car/new-car.component';
import { NewCategoryComponent } from './page/new-category/new-category.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Cars',
    component: CarsComponent,
  },
  {
    path: 'Categories',
    component: CategoryComponent,
  },
  {
    path: 'ConnectUs',
    component: ConnectComponent,
  },
  {
    path: 'AddNewCar',
    component: NewCarComponent,
  },
  {
    path: 'AddNewCategory',
    component: NewCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
