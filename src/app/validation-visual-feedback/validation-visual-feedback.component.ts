import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-validation-visual-feedback',
  templateUrl: './validation-visual-feedback.component.html',
  styleUrls: ['./validation-visual-feedback.component.css']
})
export class ValidationVisualFeedbackComponent implements OnInit {


  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('', 'rob@test.com', 5556665566, '', 'morning', true);

  constructor() { }

  ngOnInit(): void {
  }

}
