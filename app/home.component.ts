import { Component } from '@angular/core';

import { AppComponent } from './app.component';

console.log('`HomeComponent` component loaded asynchronously');

@Component({
  selector: 'home',
  styleUrls: ['assets/styles/home.component.css'],
  templateUrl: 'assets/templates/home.component.html'
})
export class HomeComponent {

  constructor() {
  }

  ngOnInit() {
    console.log('hello `HomeComponent` component');
  }

}