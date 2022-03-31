import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './page/cars/cars.component';
import { CategoryComponent } from './page/category/category.component';
import { ConnectComponent } from './page/connect/connect.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
