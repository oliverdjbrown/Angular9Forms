import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tracking-state-validity',
  templateUrl: './tracking-state-validity.component.html',
  styleUrls: ['./tracking-state-validity.component.css']
})
export class TrackingStateValidityComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('Rob', 'rob@test.com', 5556665566, '', 'morning', true);


  constructor() { }

  ngOnInit(): void {
  }

}
