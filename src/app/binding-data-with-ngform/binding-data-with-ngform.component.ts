import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-data-with-ngform',
  templateUrl: './binding-data-with-ngform.component.html',
  styleUrls: ['./binding-data-with-ngform.component.css']
})
export class BindingDataWithNgformComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];
  constructor() { }

  ngOnInit(): void {
  }

}
