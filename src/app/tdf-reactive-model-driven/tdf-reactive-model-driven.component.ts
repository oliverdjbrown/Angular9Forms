import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { User } from '../user';

@Component({
  selector: 'app-tdf-reactive-model-driven',
  templateUrl: './tdf-reactive-model-driven.component.html',
  styleUrls: ['./tdf-reactive-model-driven.component.css']
})
export class TdfReactiveModelDrivenComponent implements OnInit {

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

  onSubmit(userForm) {
    console.log(userForm);
    // console.log(this.userModel);
    this.submitted = true;
      // this.enrollmentService.enrroll(this.userModel).subscribe(
      // data => console.log('Success!', data),
      // error => console.error('Error!', error)
      // error => this.errorMsg = error.statusText
      // );
  }

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {

  }
}
