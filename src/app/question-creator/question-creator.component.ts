import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory, ICategoryResolved } from './models/ICategory';
import { IQuestion } from './models/IQuestion';
import { ISubcategory } from './models/ISubcategory';
import { QuestionCreatorService } from './services/question-creator.service';

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

  questions: IQuestion[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionCreatorService: QuestionCreatorService
  ) { }

  ngOnInit(): void {
    this.getResolvedData();
  }

  getResolvedData(): void {
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
    this.selectedSubcategory = undefined;
    if (this.selectedCategory) {
      this.subcategories = this.selectedCategory?.subcategories;
    }
  }

  onSubcategoriesChange() {
    this.getQuestions();
  }

  getQuestions() {
    debugger;
    if(this.selectedSubcategory){
      this.questionCreatorService.getQuestionsFromSpecificSubcategory(this.selectedSubcategory.id)
      .subscribe((data: IQuestion[]) => {
        this.questions = data;
      });
    }
  }

}
