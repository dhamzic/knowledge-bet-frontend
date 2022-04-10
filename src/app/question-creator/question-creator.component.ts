import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory, ICategoryResolved } from './models/ICategory';
import { ISubcategory } from './models/ISubcategory';

@Component({
  selector: 'app-question-creator',
  templateUrl: './question-creator.component.html',
  styleUrls: ['./question-creator.component.scss']
})
export class QuestionCreatorComponent implements OnInit {

  categories: ICategory[] = [];
  selectedCategory: ICategory | undefined;

  subcategories: ISubcategory[] = [];
  selectedSubcategory: ISubcategory | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getResolvedData();
  }

  getResolvedData(): void {
    debugger;
    this.route.data.subscribe(data => {
      let errorMessage: any = {};

      const resolvedCategories: ICategoryResolved = data['resolvedCategories'];
      errorMessage = resolvedCategories.error;
      if (errorMessage !== undefined) {
        console.error(errorMessage);
        this.router.navigate(['/home']);
      }
      else {
        if (resolvedCategories.categories) {
          this.categories = resolvedCategories.categories;
        }
      }
    });
  }

  onCategoriesChange() {
    if(this.selectedCategory){
      this.subcategories = this.selectedCategory?.subcategories;
    }
  }

  onSubcategoriesChange() {
  }

}
