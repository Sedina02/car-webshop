import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-editor-car',
  templateUrl: './editor-car.component.html',
  styleUrls: ['./editor-car.component.scss']
})
export class EditorCarComponent implements OnInit {

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

  onUpdate(car: Car) {
    this.carService.update(car).subscribe(
      (car) => this.router.navigate(['Cars']),
    );
  }
}
