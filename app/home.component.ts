import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { Translator } from './translator';
import { Translations } from './translations';
import { TranslatorDetailComponent } from './translator-detail.component'

@Component({
  selector: 'home',
  styleUrls: ['assets/styles/home.component.css'],
  templateUrl: 'assets/templates/home.component.html',
  directives: [TranslatorDetailComponent]
})
export class HomeComponent {

  private _Translations: Translations;
  private _selectedTranslator: Translator;

  constructor(public app: AppComponent) {
    this._Translations = new Translations();
  }

  ngOnInit() {
    this.app.logger('hello `HomeComponent` component', this);
  }

  onSelect(translator: Translator){
    this._selectedTranslator = translator;
    this.app.logger("selectedTranslator : ", this._selectedTranslator);
  }

}