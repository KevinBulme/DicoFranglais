import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Translator } from './translator';

@Component({
  selector: 'my-translator-detail',
  styleUrls: ['assets/styles/translator-detail.component.css'],
  templateUrl: 'assets/templates/translator-detail.component.html'
})
export class TranslatorDetailComponent {
  @Input()
  translator: Translator;

  @Output()
  onHide = new EventEmitter<boolean>();

  show = true;

  hide(){
    this.onHide.emit(true);
    this.show = false;
  }
}