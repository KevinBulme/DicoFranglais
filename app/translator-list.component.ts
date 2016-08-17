import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { Translator, Type } from './translator';
import { Translations } from './translations';
import { TranslatorDetailComponent } from './translator-detail.component'
import { Pagination, Page } from './pagination';

@Component({
  selector: 'translator-list',
  styleUrls: ['assets/styles/translator-list.component.css'],
  templateUrl: 'assets/templates/translator-list.component.html',
  directives: [TranslatorDetailComponent]
})
export class TranslatorListComponent {

  private _translations: Translations;
  private _selectedTranslator: Translator;
  private _pagination: Pagination;
  private _selectedPage: Page;
  private _letter: string = "All";
  private _hiddenType: Type;

  constructor(public app: AppComponent) {
    this._translations = new Translations();
    this._pagination = new Pagination();
  }

  ngOnInit() {
    this.fillPagination();
    this.app.logger('hello `TranslatorListComponent` component');
  }

  fillPagination(){
      let i: number;
      let translationsLength: number = this._translations.translators.length;
      for(i = 0 ; i < translationsLength ; i++){
          this._pagination.addTranslator(this._translations.translators[i]);
      }
      this._pagination.pages.forEach(page => page.translations = page.translations.sort(function(a, b){return a.english.localeCompare(b.english)}));
      this.onSelectAll();
  }

  onSelect(translator: Translator){
    this._selectedTranslator = translator;
  }

  onSelectLetter(page: Page){
    this._translations.translators = page.translations;
    this._letter = page.letter;
    this._selectedTranslator = null;
  }

  onSelectAll(){
    let i: number;
    this._translations.translators = [];
    this._pagination.pages.forEach( page => {
      if(this._translations.translators.length === 0){
        this._translations.translators = page.translations;
      }else{
        this._translations.translators = this._translations.translators.concat(page.translations);
      }
    });
    this._letter = "All";
    this._selectedTranslator = null;
  }

  reverseTranslations(){
    this._translations.translators.reverse();
  }

  onSelectHiddenType(type: string){
    switch(type){

      case "Funny":
        this._hiddenType = Type.Funny;
        break;

      case "Serious":
        this._hiddenType = Type.Serious;
        break;

      default:
        this._hiddenType = null;
    }
  }

}