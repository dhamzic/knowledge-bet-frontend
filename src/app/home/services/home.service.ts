import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IGetHomeComponentTiles } from 'src/app/core/httpResponses/IGetHomeComponentTiles';
import { environment } from 'src/environments/environment';
import { ITile } from '../models/ITile';
import { catchError, map, tap } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getTiles(): Observable<ITile[]> {
    const url = `${apiUrl}api/v1/configurations/home-component-tiles`;
    return this.http.get<IGetHomeComponentTiles>(url)
      .pipe(
        map(res => {
          return res.data;
        }),
        tap(data => {
          console.log('getTiles: ' + JSON.stringify(data));
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
