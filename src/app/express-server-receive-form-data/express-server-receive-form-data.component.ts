import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-express-server-receive-form-data',
  templateUrl: './express-server-receive-form-data.component.html',
  styleUrls: ['./express-server-receive-form-data.component.css']
})
export class ExpressServerReceiveFormDataComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;

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
      error => console.error('Error!', error)
    );
  }

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

}
