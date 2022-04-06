import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-editor-category',
  templateUrl: './editor-category.component.html',
  styleUrls: ['./editor-category.component.scss']
})
export class EditorCategoryComponent implements OnInit {

  category: Category = new Category();

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.categoryService
        .get(params['id'])
        .subscribe((category) => (this.category = category));
    });
  }

  onUpdate() {
    this.categoryService.update(this.category).subscribe(() =>
    this.router.navigate(['']))
  }
}
