import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ICategoryResolved } from '../models/ICategory';
import { QuestionCreatorService } from '../services/question-creator.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<ICategoryResolved>{

  constructor(private questionCreatorService: QuestionCreatorService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICategoryResolved> {
    return this.questionCreatorService.getCategories()
      .pipe(
        map(data => {
          let buttonConfigResolved: ICategoryResolved = {
            categories: data
          };
          return buttonConfigResolved;
        }),
        catchError(error => {
          const message: any = `Retrieval error: ${error}`;
          console.error(message);
          return of<ICategoryResolved>({ error: message });
        })
      );
  }
}
