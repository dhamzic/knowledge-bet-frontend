import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IGetCategoriesResponse } from 'src/app/core/httpResponses/IGetCategoriesResponse';
import { environment } from 'src/environments/environment';
import { ICategory } from '../models/ICategory';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class QuestionCreatorService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    const url = `${apiUrl}api/v1/categories`;
    return this.http.get<IGetCategoriesResponse>(url)
      .pipe(
        map(res => {
          return res.data;
        }),
        tap(data => {
          console.log('getCategories: ' + JSON.stringify(data));
        }),
        catchError(err => this.handleError(err))
      );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
