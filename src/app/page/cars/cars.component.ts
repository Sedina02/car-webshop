import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars$: Observable<Car[]>=this.carService.getAll();

  constructor(
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(){
    this.router.navigate(['Create']);
  }

  onDelete(id: number){
    this.carService.delete(id).subscribe(()=> {
      this.cars$ = this.carService.getAll();
    })
  }
  onEdit(){
    this.router.navigate(['EditorCar']);
  }

}
