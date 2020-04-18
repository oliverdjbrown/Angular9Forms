import { throwError } from 'rxjs';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url = 'http://localhost:3000/enroll';

  constructor(private http: HttpClient) { }

  enrroll(user: User) {
    return this.http.post<any>(this.url, user).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
