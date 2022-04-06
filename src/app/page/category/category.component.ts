import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category$: Observable<Category[]>=this.categoryService.getAll();

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(){
    this.router.navigate(['Create']);
  }

  onDelete(id: number){
    this.categoryService.delete(id).subscribe(()=> {
      this.category$ = this.categoryService.getAll();
    })
  }
  onEdit(){
    this.router.navigate(['EditorCategory']);
  }

}
