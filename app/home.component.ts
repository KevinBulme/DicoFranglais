import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { Translator } from './translator';
import { Translations } from './translations';
import { TranslatorListComponent } from './translator-list.component'

@Component({
  selector: 'home',
  styleUrls: ['assets/styles/home.component.css'],
  templateUrl: 'assets/templates/home.component.html',
  directives: [TranslatorListComponent]
})
export class HomeComponent {
  constructor(public app: AppComponent) {
  }

  ngOnInit() {
    this.app.logger('hello `HomeComponent` component', this);
  }

}