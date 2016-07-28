import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { Translator } from './translator';
import { Translations } from './translations';
import { TranslatorDetailComponent } from './translator-detail.component'

@Component({
  selector: 'translator-list',
  styleUrls: ['assets/styles/translator-list.component.css'],
  templateUrl: 'assets/templates/translator-list.component.html',
  directives: [TranslatorDetailComponent]
})
export class TranslatorListComponent {

  private _Translations: Translations;
  private _selectedTranslator: Translator;

  constructor(public app: AppComponent) {
    this._Translations = new Translations();
  }

  ngOnInit() {
    this.app.logger('hello `TranslatorListComponent` component', this);
  }

  onSelect(translator: Translator){
    this._selectedTranslator = translator;
    this.app.logger("selectedTranslator : ", this._selectedTranslator);
  }

}