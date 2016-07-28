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
    enableConsoleOutput = true;

    constructor() {}

  ngOnInit() {
    if(this.enableConsoleOutput){
      console.log('Initial App State', this);  
    }
  }

  logger(message: any, ...optionnalParameters: any[]) : void{
    if(this.enableConsoleOutput){
      console.log(message, optionnalParameters);    
    }
  }
 }
