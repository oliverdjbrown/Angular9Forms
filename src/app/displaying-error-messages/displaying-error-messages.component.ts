import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-displaying-error-messages',
  templateUrl: './displaying-error-messages.component.html',
  styleUrls: ['./displaying-error-messages.component.css']
})
export class DisplayingErrorMessagesComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('Rob', 'rob@test.com', 5556665566, '', 'morning', true);

  constructor() { }

  ngOnInit(): void {
  }

}
