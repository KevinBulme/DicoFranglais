import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { Translator } from './translator';
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
  }

  onSelect(translator: Translator){
    this._selectedTranslator = translator;
  }

  onSelectLetter(page: Page){
    this._selectedPage = page;
    this._translations.translators = page.translations;
  }

}