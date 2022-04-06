import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = "https://nettuts.hu/jms/ninjaturtles/category";

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  get(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.url}/${id}`);
  }

  update(Category: Category): Observable<Category> {
    return this.http.patch<Category>(`${this.url}/${Category.id}`, Category);
  }

  delete(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.url}/${id}`);
  }

  create(Category: Category): Observable<Category> {
    return this.http.post<Category>(this.url, Category);
  }
}
