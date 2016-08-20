import { Component } from '@angular/core';

import { App } from './app.component';

@Component({
  selector: 'about',
  styleUrls: ['../assets/styles/about.component.css'],
  templateUrl: '../assets/templates/about.component.html'
})
export class AboutComponent {

  constructor(public app: App) {
  }

  ngOnInit() {
    this.app.logger('hello `AboutComponent` component', this);
  }

}