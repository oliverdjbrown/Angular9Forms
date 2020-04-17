import { EnrollmentService } from './../enrollment.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-submitting-form-data',
  templateUrl: './submitting-form-data.component.html',
  styleUrls: ['./submitting-form-data.component.css']
})
export class SubmittingFormDataComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

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
    this.enrollmentService.enrroll(this.userModel).subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    );
  }

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

}
