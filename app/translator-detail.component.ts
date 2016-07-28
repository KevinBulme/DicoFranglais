import { Component, Input } from '@angular/core';

import { Translator } from './translator';

@Component({
  selector: 'my-translator-detail',
  styleUrls: ['assets/styles/translator-detail.component.css'],
  templateUrl: 'assets/templates/translator-detail.component.html'
})
export class TranslatorDetailComponent {
  @Input()
  translator: Translator;
}