import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-binding-data-to-model',
  templateUrl: './binding-data-to-model.component.html',
  styleUrls: ['./binding-data-to-model.component.css']
})
export class BindingDataToModelComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('Rob', 'rob@test.com', 5556665566, '', 'morning', true);

  constructor() { }

  ngOnInit(): void {
  }

}
