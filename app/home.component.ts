import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { Translator } from './translator';
import { SeriousTranslations } from './serious-translations';
import { FunnyTranslations } from './funny-translations';

console.log('`HomeComponent` component loaded asynchronously');

@Component({
  selector: 'home',
  styleUrls: ['assets/styles/home.component.css'],
  templateUrl: 'assets/templates/home.component.html'
})
export class HomeComponent {

  private _seriousTranslations: SeriousTranslations;
  private _funnyTranslations: FunnyTranslations;
  private _selectedTranslator: Translator;

  constructor(public app: AppComponent) {
    this._seriousTranslations = new SeriousTranslations();
    this._funnyTranslations = new FunnyTranslations();
    this._selectedTranslator = new Translator();
    this._selectedTranslator.english = "";
  }

  ngOnInit() {
    console.log('hello `HomeComponent` component', this);
  }

  onSelect(translator: Translator){
    this._selectedTranslator = translator;
    //console.log("selectedTranslator : ", this._selectedTranslator);
  }

}