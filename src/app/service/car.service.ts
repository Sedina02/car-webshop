import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  url: string = "https://nettuts.hu/jms/ninjaturtles/cars";

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url);
  }

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.url}/${id}`);
  }

  update(Car: Car): Observable<Car> {
    return this.http.patch<Car>(`${this.url}/${Car.id}`, Car);
  }

  delete(id: number): Observable<Car> {
    return this.http.delete<Car>(`${this.url}/${id}`);
  }

  create(Car: Car): Observable<Car> {
    console.log(Car);
    return this.http.post<Car>(this.url, Car);
  }
}
