import { Component } from '@angular/core';

import { AppComponent } from './app.component';

@Component({
  selector: 'about',
  styleUrls: ['assets/styles/about.component.css'],
  templateUrl: 'assets/templates/about.component.html'
})
export class AboutComponent {

  constructor(public app: AppComponent) {
  }

  ngOnInit() {
    this.app.logger('hello `AboutComponent` component', this);
  }

}