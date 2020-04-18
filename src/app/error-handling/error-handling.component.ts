import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { User } from '../user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  userModel = new User('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    // console.log(this.userModel);
    this.submitted = true;
    this.enrollmentService.enrroll(this.userModel).subscribe(
      data => console.log('Success!', data),
      // error => console.error('Error!', error)
      error => this.errorMsg = error.statusText
    );
  }

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

}
