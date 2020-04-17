import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url = 'http://localhost:3000/enroll';

  constructor(private http: HttpClient) { }

  enrroll(user: User) {
    return this.http.post<any>(this.url, user);
  }
}
