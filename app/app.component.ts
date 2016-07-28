import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    styleUrls: ['assets/styles/app.component.css'],
    templateUrl: 'assets/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
    name = 'DicoFranglais';

    constructor() {}

  ngOnInit() {
    console.log('Initial App State', this);
  }
 }
