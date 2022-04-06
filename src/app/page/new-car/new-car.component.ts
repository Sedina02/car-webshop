import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {

  car: Car = new Car();

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.carService
        .get(params['id'])
        .subscribe((car) => (this.car = car));
    });
  }

  onCreate(car: Car) {
    this.carService.create(this.car).subscribe(() =>
    this.router.navigate(['Cars']))
  }
}
