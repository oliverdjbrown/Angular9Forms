import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-select-control-validation',
  templateUrl: './select-control-validation.component.html',
  styleUrls: ['./select-control-validation.component.css']
})
export class SelectControlValidationComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
